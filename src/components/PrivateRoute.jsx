import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAuth }) => {
  console.log("🛡️ PrivateRoute: isAuth =", isAuth);

  if (isAuth) {
    console.log("✅ Пользователь авторизован, показываем контент");
    return <Outlet />;
  } else {
    console.log("❌ Пользователь не авторизован, перенаправляем на /sign-in");
    return <Navigate to="/sign-in" replace />;
  }
};

export default PrivateRoute;
