import { IPayload } from "./redux/Slice/ToastSlice";
export function showSuccessNoti(message: string): IPayload {
  return {
    showNotify: true,
    message: message,
    type: "success",
    time: 3000,
  };
}

export function showErrorNoti(message: string): IPayload {
  return {
    showNotify: true,
    message: message,
    type: "error",
    time: 3000,
  };
}
