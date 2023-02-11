import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { showNotify } from "../redux/Slice/ToastSlice";
// const dispatch = useDispatch(); //k dùng dc ngoài functionnal
import { store } from "../redux/store";
const istanceHttp = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 20000,
  headers: { "Content-Type": "application/json" },
});
const token = "xyz";

// Add a request interceptor
istanceHttp.interceptors.request.use(
  function (config) {
    // Do something before request is sent // assign token in here
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
istanceHttp.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log("success", response);
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("error", error);
    if (error?.response?.data?.message) {
      store.dispatch(
        showNotify({
          showNotify: true,
          message: error?.response?.data?.message,
          time: 3000,
          type: "error",
        })
      );

      // alert(error?.response?.data?.message);
    } else {
      store.dispatch(
        showNotify({
          showNotify: true,
          message: "Có lỗi xảy ra",
          time: 3000,
          type: "error",
        })
      );
    }
    return Promise.reject(error);
  }
);

let Apiclient = {
  get: (url: string, payload?: any) => istanceHttp.get(url, payload),
  post: (url: string, payload: any) => istanceHttp.post(url, payload),
  put: (url: string, payload: any) => istanceHttp.put(url, payload),
  delete: (url: string, payload: any) => istanceHttp.delete(url, payload),
};

export default Apiclient;
