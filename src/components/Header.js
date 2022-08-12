import styled from "styled-components";
import { useEffect, useContext } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { UserContext } from "../App";
import { useState } from "react";
const HeaderDiv = styled.div`
  height: 45px;
  background-color: #d9d9d9;
  padding: 8px 2rem;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  box-sizing: border-box;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  color: #1e1c1b;
`;
const NavList = styled.div`
  // border: 1px solid;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  font-size: 18px;
`;
const activeNav = ({ isActive }) => {
  return {
    // border: "1px solid",
    background: "#D9D9D9",
    color: "#1E1C1B",
    textDecoration: "none",
    padding: "14px 10px 0px 10px",
    fontWeight: "600",
    boxSizing: "border-box",
  };
};

function NavContent() {
  const { userInfo, setErrorMessage } = useContext(UserContext);
  if (userInfo) {
    return (
      <NavList>
        <NavLink
          style={activeNav}
          onFocus={() => setErrorMessage(null)}
          to="/identify"
        >
          會員資料
        </NavLink>
        <NavLink
          style={activeNav}
          onFocus={() => setErrorMessage(null)}
          to="/buylog"
        >
          購買紀錄
        </NavLink>
        <NavLink
          style={activeNav}
          onFocus={() => setErrorMessage(null)}
          to="/cart"
        >
          購物車
        </NavLink>
        <NavLink
          style={activeNav}
          onFocus={() => setErrorMessage(null)}
          to="/logout"
        >
          登出
        </NavLink>
      </NavList>
    );
  } else {
    return (
      <NavList>
        <NavLink
          style={activeNav}
          onFocus={() => setErrorMessage(null)}
          to="/register"
        >
          註冊
        </NavLink>
        <NavLink
          style={activeNav}
          onFocus={() => setErrorMessage(null)}
          to="/login"
        >
          登入
        </NavLink>
      </NavList>
    );
  }
}
export default function Header() {
  const { setUserInfo, setErrorMessage } = useContext(UserContext);
  useState(() => {
    if (window.localStorage.getItem("token")) {
      setUserInfo({ token: window.localStorage.getItem("token") });
    }
  }, []);
  return (
    <div>
      <HeaderDiv>
        <Logo>
          <Link to="/" onFocus={() => setErrorMessage(null)}>
            SHOPPING
          </Link>
        </Logo>
        <NavContent />
      </HeaderDiv>
      <Outlet />
    </div>
  );
}
