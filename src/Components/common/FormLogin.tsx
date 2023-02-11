import { TextField, Box, Stack, Button, Divider, Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Apiclient from "../../Api/Apiclient";
import { showNotify } from "../../redux/Slice/ToastSlice";
import { IDataInfo, Iform } from "../HistoryLogin/types";
import Form from "./Form";

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = async (dataForm: IDataInfo): Promise<any> => {
    let res = Apiclient.post("/auth/login", dataForm);
  };
  return (
    <Stack alignItems={"center"} gap={"10px"}>
      <Form submitForm={submitForm} textbtn="Đăng nhập" />

      <Link
        variant="body2"
        component="button"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Quên mật khẩu
      </Link>
      <Divider light />
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/register")}
        sx={{
          background: "#8bc349",
          "&:hover": {
            background: "#70c411",
          },
        }}
      >
        Tạo tài khoản mới
      </Button>
    </Stack>
  );
};

export default FormLogin;
