import { Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../App";

const checkRole = (role) => {
  if (role === 3) return <Navigate to="/userinfo" />;
  if (role === 2) return <Navigate to="/Bossinfo" />;
};

// const shopping_api_url = "http://13.57.27.211:3001";
const shopping_api_url = "http://localhost:3001";
export default function IdentifyUser() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  useState(() => {
    fetch(`${shopping_api_url}/user/info`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        const { id, role, username } = data.userData;
        if (data.userData.UserInfo) {
          const email = data.userData.UserInfo.email || "";
          const phone = data.userData.UserInfo.phone || "";
          const address = data.userData.UserInfo.address || "";
          setUserInfo({
            id,
            role,
            username,
            email,
            phone,
            address,
          });
        } else {
          const email = "";
          const phone = "";
          const address = "";
          setUserInfo({
            id,
            role,
            username,
            email,
            phone,
            address,
          });
        }
      });
  }, []);
  return checkRole(userInfo.role);
}
