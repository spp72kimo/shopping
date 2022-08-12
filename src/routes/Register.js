import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";
import styled from "styled-components";
const RegisterContainer = styled.div`
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
const RegisterWindowContainer = styled.div`
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

const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
  margin-right: 1rem;
`;

const shopping_api_url = "http://localhost:3001";
// const shopping_api_url = "http://13.57.27.211:3001";

function LoginWindow() {
  const { userInfo, setUserInfo, errorMessage, setErrorMessage } =
    useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [chkPassword, setChkPassword] = useState("");
  const [email, setEmail] = useState("");

  if (userInfo) return <Navigate to="/" />;

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePwdChange = (e) => {
    setPassword(e.target.value);
  };
  const handleChkPwdChange = (e) => {
    setChkPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password || !chkPassword)
      return setErrorMessage("請完整填寫內容！");
    if (password !== chkPassword) {
      return setErrorMessage("請確認密碼！");
    }
    const userData = { username, password };
    fetch(`${shopping_api_url}/user/register`, {
      method: "post",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        if (data.ok === 0) {
          if (data.message.includes("Unique")) {
            return setErrorMessage("此帳號已註冊");
          }
        }
        window.localStorage.setItem("token", data.token);
        setUserInfo({ token: data.token });
        // fetch(`${shopping_api_url}/user/info`, {
        //   method: "get",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${data.token}`,
        //   },
        // })
        //   .then((data) => data.json())
        //   .then((data) => {
        //     console.log(data);
        //     setUserInfo({ ...data });
        //   });
      });
  };

  return (
    <RegisterWindowContainer>
      <SubTitle>註冊</SubTitle>
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
          <InputLine>
            <label htmlFor="chkPassword">確認密碼：</label>
            <Input
              type="password"
              id="chkPassword"
              onChange={handleChkPwdChange}
              onFocus={() => setErrorMessage(null)}
              value={chkPassword}
            />
          </InputLine>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Button onClick={handleRegister}>註冊</Button>
        </form>
      </Container>
    </RegisterWindowContainer>
  );
}
export default function Login() {
  return (
    <RegisterContainer>
      <LoginWindow />
    </RegisterContainer>
  );
}
