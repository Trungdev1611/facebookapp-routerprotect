import React from "react";
import { TextField, Box, Stack, Button, Divider, Link } from "@mui/material";
import { IDataInfo, Iform } from "../HistoryLogin/types";
import { useState } from "react";

const Form = ({ submitForm, textbtn }: Iform) => {
  const [dataInfo, setDataInfo] = useState<IDataInfo>({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.name);
    setDataInfo({ ...dataInfo, [e.target.name]: e.target.value });
  }

  function handleLogin() {
    submitForm(dataInfo);
  }
  return (
    <Stack
      component="form"
      direction={"column"}
      justifyContent="center"
      spacing={2}
      sx={{
        backgroundColor: "white",
        boxShadow: 1,
        width: "350px",
        padding: "20px 20px",
        // minHeight: "200px",
        borderRadius: 2,
        "& .MuiFormControl-root": {
          width: "100%",
        },
      }}
    >
      {/* có thể dùng useFormcontrol của MUI */}
      <Box>
        <TextField
          id="email"
          label="Email hoặc số điện thoại"
          variant="outlined"
          size="medium"
          name="email"
          onChange={handleChange}
        />
      </Box>
      <Box>
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          size="medium"
          name="password"
          onChange={handleChange}
        />
      </Box>
      <Button variant="outlined" size="large" onClick={handleLogin}>
        {textbtn}
      </Button>
    </Stack>
  );
};

export default Form;
