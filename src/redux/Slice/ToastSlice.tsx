import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IPayload {
  message?: string;
  time?: number;
  showNotify: boolean;
  type: "success" | "error";
}
interface IInit {
  showNotify: boolean;
  message: string;
  time: number;
  type: "success" | "error";
}
const initialState: IInit = {
  showNotify: false,
  message: "",
  time: 3000,
  type: "error",
};

const Notifyslice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    showNotify: (state, action: PayloadAction<IPayload>) => {
      return {
        showNotify: action.payload.showNotify,
        message: action.payload.message || "",
        time: action.payload.time || 3000,
        type: action.payload.type,
      };
    },
  },
});

export const { showNotify } = Notifyslice.actions;

export default Notifyslice.reducer;
