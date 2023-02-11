import { Alert, Button, Snackbar, Stack } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IPayload, showNotify } from "../../redux/Slice/ToastSlice";
import { RootState } from "../../redux/store";

const SnackbarMUI = () => {
  const actionSnackbar: IPayload = useSelector((state: RootState) => {
    return state.notify;
  });
  const dispatch = useDispatch();
  console.log(actionSnackbar);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    dispatch(
      showNotify({
        showNotify: false,
        type: actionSnackbar.type,
      })
    );
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={actionSnackbar.showNotify}
        autoHideDuration={actionSnackbar.time}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Alert
          sx={{ minWidth: "300px", height: "60px" }}
          severity={actionSnackbar.type}
          // variant="filled"
        >
          {actionSnackbar.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default SnackbarMUI;
