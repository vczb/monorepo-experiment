import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

export interface UserState {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

const initialState: UserState = {
  id: 0,
  username: "",
  email: "",
  provider: "",
  confirmed: false,
  blocked: true,
  createdAt: "",
  updatedAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.confirmed = action.payload.confirmed;
      state.blocked = action.payload.blocked;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      return state;
    },
    resetUser: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export function useUser() {
  const user = useAppSelector((state) => state.user);

  return {
    user,
  };
}

const { reducer } = userSlice;
export default reducer;
