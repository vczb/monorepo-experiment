import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from ".";

import { Action, AnyAction } from "@reduxjs/toolkit";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
interface RejectedAction extends Action {
  payload: {
    error: string;
  };
}

export function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith("rejected");
}
