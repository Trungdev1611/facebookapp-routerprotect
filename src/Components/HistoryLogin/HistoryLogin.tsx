import { Box, Stack, Typography } from "@mui/material";
import { IPropsHistoryLogin, itemUser, sxHistoryLogin } from "./types";

const HistoryItem = ({ img, username }: IPropsHistoryLogin) => {
  return (
    <Box sx={sxHistoryLogin}>
      <img src={img} alt="" />
      <div className="nameUser">{username}</div>
    </Box>
  );
};

const HistoryLogin = () => {
  return (
    <Box
      sx={{
        marginRight: "80px",
        "& img": {
          marginBottom: "5px",
          maxWidth: "200px",
          objectFit: "cover",
        },
        display: { xs: "none", md: "block" },
      }}
    >
      <Box>
        <img
          src={
            "data:image/png;base64,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"
          }
          alt=""
        />
      </Box>
      <Typography variant="h6">
        Danh sách tài khoản đăng nhập gần đây
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Chọn tài khoản bạn muốn đăng nhập
      </Typography>
      <Stack direction={"row"} spacing={2}>
        {itemUser.map((item: IPropsHistoryLogin, index: number) => {
          return (
            <HistoryItem
              img={item.img}
              username={item.username}
              key={item.id}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default HistoryLogin;
