import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";
import styled from "styled-components";
const LoginContainer = styled.div`
  //   border: 1px solid;
  height: 92vh;
  margin-top: -20px;
  background-image: url("https://imgur.com/IDtYZ5q.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;
const Container = styled.div`
  //   border: 1px solid white;
  text-align: end;
  font-size: 18px;
  padding-right: 2rem;
`;
const LoginWindowContainer = styled.div`
  border: 1px solid white;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  width: 350px;
  //   height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding: 1rem;
`;
const SubTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  margin-bottom: 1rem;
`;
const InputLine = styled.div`
  margin-bottom: 1rem;
`;
const Input = styled.input`
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  padding: 6px 16px;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  padding: 4px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const Bar = styled.div`
  height: 1px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  margin: 1rem 0rem;
`;
const ThirdLogin = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
`;
const ThirdLogoList = styled.div`
  //   border: 1px solid white;
  height: 50px;
  wight: 80%;
  display: flex;
  justify-content: space-evenly;
`;
const LogoContainer = styled.div`
  //   border: 1px solid white;
  width: 50px;
  height: 50px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
  margin-right: 1rem;
`;
// const shopping_api_url = "http://13.57.27.211:3001";
const shopping_api_url = "http://localhost:3001";

function LoginWindow() {
  const { userInfo, setUserInfo, errorMessage, setErrorMessage } =
    useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (window.localStorage.getItem("token")) return <Navigate to="/" />;

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePwdChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) return setErrorMessage("請填寫完整！");
    const userData = { username, password };
    fetch(`${shopping_api_url}/user/login`, {
      method: "post",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.ok === 0) return setErrorMessage("帳號或密碼輸入錯誤！");
        setUserInfo({ token: data.token });
        window.localStorage.setItem("token", data.token);
      });
  };

  return (
    <LoginWindowContainer>
      <SubTitle>登入</SubTitle>
      <Container>
        <form action="" method="post">
          <InputLine>
            <label htmlFor="username">帳號：</label>
            <Input
              type="text"
              id="username"
              onChange={handleUserChange}
              onFocus={() => setErrorMessage(null)}
              value={username}
            />
          </InputLine>
          <InputLine>
            <label htmlFor="password">密碼：</label>
            <Input
              type="password"
              id="password"
              onChange={handlePwdChange}
              onFocus={() => setErrorMessage(null)}
              value={password}
            />
          </InputLine>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Button onClick={handleLogin}>登入</Button>
        </form>
        <Bar />
        <ThirdLogin>第三方登入</ThirdLogin>
        <ThirdLogoList>
          <LogoContainer>
            <img src="https://imgur.com/6VZXFAD.png" alt="Google" />
          </LogoContainer>
          <LogoContainer>
            <img src="https://imgur.com/3CPoIpr.png" alt="Facebook" />
          </LogoContainer>
        </ThirdLogoList>
      </Container>
    </LoginWindowContainer>
  );
}
export default function Login() {
  return (
    <LoginContainer>
      <LoginWindow />
    </LoginContainer>
  );
}
