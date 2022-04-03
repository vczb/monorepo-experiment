import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { persistKey, RootState } from "store";
import { RejectedAction, useAppDispatch, useAppSelector } from "store/hooks";

import authService, { LoginRequest } from "services/auth";
import storage from "redux-persist/lib/storage";

type AuthState = {
  requestStatus?: "idle" | "pending" | "fulfilled" | "rejected";
  errorMessage?: string;
};

export type CompanyState = {
  id: string;
  name: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  jwt?: string;
} & AuthState;

const initialState: CompanyState = {
  id: "",
  name: "",
  email: "",
  provider: "",
  confirmed: false,
  blocked: true,
  createdAt: "",
  updatedAt: "",
  jwt: "",
};

const login = createAsyncThunk(
  "company/login",
  async ({ identifier, password }: LoginRequest, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    if (state.company.id.length) {
      await thunkAPI.dispatch(resetCompany());
    }

    const data = await authService.login({ identifier, password });

    if (data?.error) {
      return thunkAPI.rejectWithValue({
        error: data.error.message,
      });
    }

    await thunkAPI.dispatch(setCompany(data));

    return data;
  }
);

const logout = createAsyncThunk("company/logout", async (_, thunkAPI) => {
  await thunkAPI.dispatch(resetCompany());
  storage.removeItem(`persist:${persistKey}`);
});

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.jwt = action.payload.jwt || "";
      state.id = String(action.payload.user.id);
      state.name = action.payload.user.username;
      state.email = action.payload.user.email;
      state.confirmed = action.payload.user.confirmed;
      state.blocked = action.payload.user.blocked;
      state.createdAt = action.payload.user.createdAt;
      state.updatedAt = action.payload.user.updatedAt;
      return state;
    },
    resetCompany: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: AuthState) => {
      state.requestStatus = "pending";
    });
    builder.addCase(login.fulfilled, (state: AuthState) => {
      state.requestStatus = "fulfilled";
      state.errorMessage = "";
    });
    builder.addCase(
      login.rejected,
      (state: AuthState, action: RejectedAction<LoginRequest>) => {
        state.requestStatus = "rejected";
        state.errorMessage = action.payload?.error || "Something went wrong";
      }
    );
  },
});

export const { setCompany, resetCompany } = companySlice.actions;

export function useCompany() {
  const company = useAppSelector((state) => state.company);
  const dispatch = useAppDispatch();

  const onLogin = (data: LoginRequest) => dispatch(login(data));
  const onLogout = () => dispatch(logout());
  return {
    company,
    onLogin,
    onLogout,
  };
}

const { reducer } = companySlice;
export default reducer;
