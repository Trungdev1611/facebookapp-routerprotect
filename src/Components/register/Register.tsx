import { Stack } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Apiclient from "../../Api/Apiclient";
import { showNotify } from "../../redux/Slice/ToastSlice";
import { showErrorNoti, showSuccessNoti } from "../../util";
import Form from "../common/Form";
import { IDataInfo } from "../HistoryLogin/types";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = async (dataForm: IDataInfo): Promise<any> => {
    let res = await Apiclient.post("/auth/register", dataForm);
    console.log("res", res);
    if (res.status) {
      dispatch(showNotify(showSuccessNoti("Register success")));
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
      direction="row"
    >
      <Form submitForm={handleRegister} textbtn="Đăng ký" />;
    </Stack>
  );
};

export default Register;
