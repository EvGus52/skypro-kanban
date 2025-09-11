import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  console.log(
    "🛡️ PrivateRoute: user =",
    user ? "авторизован" : "не авторизован"
  );

  return user ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
