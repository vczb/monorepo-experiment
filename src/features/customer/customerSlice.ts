import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import customerService, { RegisterCustomerRequest } from "services/customer";

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
  requestStatus: "idle",
};

type RegisterProps = Pick<RegisterCustomerRequest, "name" | "phone" | "email">;

const register = createAsyncThunk(
  "customer/new",
  async ({ name, email, phone }: RegisterProps, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const token = state.company.jwt as string;
    const userId = state.company.id;
    const cpf = state.customer.cpf;

    const data = await customerService.register({
      token,
      email,
      cpf,
      userId,
      name,
      phone,
    });

    if (data?.error) {
      return thunkAPI.rejectWithValue({
        error: data.error.message,
      });
    }

    await thunkAPI.dispatch(setCustomer(data));

    return data;
  }
);

const findByCPF = createAsyncThunk(
  "customer/onboarding",
  async (cpf: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;

    const token = state.company.jwt as string;

    const userId = state.company.id;

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

    if (!data?.id && data?.cpf) {
      return await thunkAPI.dispatch(setNewCustomer(data));
    }

    await thunkAPI.dispatch(setCustomer(data));

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
    setNewCustomer: (state, action) => {
      state.cpf = action.payload.cpf;
      return state;
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
    builder.addCase(register.pending, (state: CustomerState) => {
      state.requestStatus = "pending";
    });
    builder.addCase(register.fulfilled, (state: CustomerState) => {
      state.requestStatus = "fulfilled";
      state.errorMessage = "";
    });
    builder.addMatcher(isRejectedAction, (state: CustomerState, action) => {
      state.requestStatus = "rejected";
      state.errorMessage = action.payload?.error || "Something went wrong";
    });
  },
});

export const { setCustomer, resetCustomer, setNewCustomer } =
  customerSlice.actions;

export function useCustomer() {
  const dispatch = useAppDispatch();
  const customer = useAppSelector((state) => state.customer);

  const validateCPF = (cpf: string) =>
    // eslint-disable-next-line no-useless-escape
    new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/).test(cpf);

  const onFindByCPF = (cpf: string) => dispatch(findByCPF(cpf));
  const onResetCustomer = () => dispatch(resetCustomer());
  const onRegister = (data: RegisterProps) => dispatch(register(data));
  return {
    customer,
    onFindByCPF,
    validateCPF,
    onRegister,
    onResetCustomer,
  };
}

const { reducer } = customerSlice;
export default reducer;
