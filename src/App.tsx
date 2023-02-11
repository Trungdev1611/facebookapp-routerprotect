import { Box } from "@mui/material";
import Apiclient from "./Api/Apiclient";
import "./app.scss";
import SnackbarMUI from "./Components/common/SnackbarMUI";
import LoginPage from "./Pages/LoginPage";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Register from "./Components/register/Register";

interface childrenProps {
  children: JSX.Element;
}
function App() {
  function ProtectedRoute({ children }: childrenProps) {
    const token = localStorage.getItem("tokenJWT");
    if (!token) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  }
  return (
    <Box className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div>App</div>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>

      <SnackbarMUI />
    </Box>
  );
}

export default App;
