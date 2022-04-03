import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerService, { FindByCPFRequest } from "services/customer";
import { RootState } from "store";

import { isRejectedAction, useAppDispatch, useAppSelector } from "store/hooks";

export type CustomerState = {
  requestStatus?: "idle" | "pending" | "fulfilled" | "rejected";
  id: string;
  email: string;
  cpf: string;
  name: string;
  phone: string;
  errorMessage?: string;
};

const initialState: CustomerState = {
  id: "",
  email: "",
  cpf: "",
  name: "",
  phone: "",
  errorMessage: "",
};

const findByCPF = createAsyncThunk(
  "customer/onboarding",
  async ({ cpf, userId, token }: FindByCPFRequest, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    if (state.customer.id.length) {
      await thunkAPI.dispatch(resetCustomer());
    }

    const payload = {
      cpf,
      userId: userId.padStart(2, "0"),
    };

    const data = await customerService.findByCPF({ ...payload, token });

    if (data?.error) {
      return thunkAPI.rejectWithValue({
        error: data.error.message,
      });
    }

    if (!data?.id) {
      console.log("create new customer");
      return;
    }

    thunkAPI.dispatch(setCustomer(data));

    return data;
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.id = String(action.payload.id);
      state.email = action.payload.email;
      state.cpf = action.payload.cpf;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
    resetCustomer: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findByCPF.pending, (state: CustomerState) => {
      state.requestStatus = "pending";
    });
    builder.addCase(findByCPF.fulfilled, (state: CustomerState) => {
      state.requestStatus = "fulfilled";
      state.errorMessage = "";
    });
    builder.addMatcher(isRejectedAction, (state: CustomerState, action) => {
      state.requestStatus = "rejected";
      state.errorMessage = action.payload?.error || "Something went wrong";
    });
  },
});

export const { setCustomer, resetCustomer } = customerSlice.actions;

export function useCustomer() {
  const dispatch = useAppDispatch();
  const customer = useAppSelector((state) => state.customer);

  const validateCPF = (cpf: string) =>
    // eslint-disable-next-line no-useless-escape
    new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/).test(cpf);

  const onFindByCPF = (data: FindByCPFRequest) => dispatch(findByCPF(data));

  return {
    customer,
    onFindByCPF,
    validateCPF,
  };
}

const { reducer } = customerSlice;
export default reducer;
