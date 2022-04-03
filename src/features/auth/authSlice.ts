import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { resetUser, setUser } from "features/user/userSlice";

import authService, { LoginRequest } from "services/auth";
import { isRejectedAction, useAppDispatch, useAppSelector } from "store/hooks";

export type AuthState = {
  requestStatus?: "idle" | "pending" | "fulfilled" | "rejected";
  errorMessage?: string;
  jwt?: string;
} & LoginRequest;

const initialState: AuthState = {
  identifier: "",
  password: "",
  jwt: "",
  requestStatus: "idle",
  errorMessage: "",
};

const login = createAsyncThunk(
  "auth/login",
  async ({ identifier, password }: AuthState, thunkAPI) => {
    const data = await authService.login({ identifier, password });

    if (data?.error) {
      return thunkAPI.rejectWithValue({
        error: data.error.message,
      });
    }

    thunkAPI.dispatch(setUser(data.user));

    return data;
  }
);

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  await thunkAPI.dispatch(resetUser());
  await thunkAPI.dispatch(resetAuth());
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: AuthState) => {
      state.requestStatus = "pending";
      state.errorMessage = "";
    });
    builder.addCase(login.fulfilled, (state: AuthState, action) => {
      state.requestStatus = "fulfilled";
      state.jwt = action.payload.jwt || "";
    });
    builder.addMatcher(isRejectedAction, (state, action) => {
      const { error } = action.payload;
      state.requestStatus = "rejected";
      state.errorMessage = error || "Something went wrong";
    });
  },
});

const { resetAuth } = authSlice.actions;

export function useAuth() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  const onLogin = (data: AuthState) => dispatch(login(data));
  const onLogout = () => dispatch(logout());

  return {
    auth,
    onLogin,
    onLogout,
  };
}

const { reducer } = authSlice;
export default reducer;
