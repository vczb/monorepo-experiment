import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import { setMessage } from "features/message/messageSlice";

import AuthService from "services/auth";

import { RootState } from "store";

export interface authState {
  identifier: string;
  password: string;
}

const initialState: authState = {
  identifier: "",
  password: "",
};

export const login = createAsyncThunk(
  "auth/local",
  async ({ identifier, password }: authState, thunkAPI) => {
    try {
      const data = await AuthService.login({ identifier, password });
      return { user: data };
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

const { reducer } = authSlice;
export default reducer;
