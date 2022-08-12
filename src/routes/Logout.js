import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";

export default function Logout() {
  const { setUserInfo } = useContext(UserContext);
  setUserInfo(null);
  window.localStorage.removeItem("token");
  return <Navigate to="/" />;
}
