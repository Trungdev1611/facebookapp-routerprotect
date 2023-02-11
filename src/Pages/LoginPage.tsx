import React from "react";
import FormLogin from "../Components/common/FormLogin";
import { Stack } from "@mui/material";
import HistoryLogin from "../Components/HistoryLogin/HistoryLogin";
import { IDataInfo } from "../Components/HistoryLogin/types";
import { useDispatch } from "react-redux/es/exports";
import { showNotify } from "../redux/Slice/ToastSlice";
import Apiclient from "../Api/Apiclient";
const LoginPage = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
      direction="row"
    >
      <HistoryLogin />
      <FormLogin />
    </Stack>
  );
};

export default LoginPage;
