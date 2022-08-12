import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Footer from "../components/Fotter";
import { UserContext } from "../App";

const UserInfoContainer = styled.div`
  //   border: 1px solid rgba(0, 0, 0, 0.5);
  height: 90vh;
  padding: 0 10rem;
`;
const SubTitle = styled.div`
  //   border: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 28px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
`;
const Bar = styled.div`
  height: 1px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  margin: 1rem 0rem;
`;

const FormContainer = styled.div`
  //   border: 1px solid rgba(0, 0, 0, 0.5);
  height: 400px;
  width: 600px;
  text-align: end;
  padding-top: 1rem;
  font-size: 20px;
  margin: 0 auto;
`;
const Form = styled.form`
  //   border: 1px solid;
  padding-right: 10rem;
`;
const InputLine = styled.div`
  margin-bottom: 1rem;
`;
const Input = styled.input`
  //   border-radius: 5px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid;
  width: 70%;
  padding: 6px 16px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const Button = styled.button`
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 1rem;
  padding: 4px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const shopping_api_url = "http://13.57.27.211:3001";
export default function UserInfo() {
  const { userInfo } = useContext(UserContext);
  const [phone, setPhone] = useState(userInfo.phone);
  const [address, setAddress] = useState(userInfo.address);
  const [email, setEmail] = useState(userInfo.email);

  const handlePhoneOnChange = (e) => {
    setPhone(e.target.value);
  };
  const handleAddressOnChange = (e) => {
    setAddress(e.target.value);
  };
  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };

  //   console.log(userInfo);
  return (
    <div>
      <UserInfoContainer>
        <SubTitle>
          會員資料
          <Bar />
        </SubTitle>
        <FormContainer>
          <Form>
            <InputLine>
              <label htmlFor="username">帳號：</label>
              <Input
                type="text"
                id="username"
                value={`${userInfo.username} (無法更改)`}
              />
            </InputLine>
            <InputLine>
              <label htmlFor="phone">電話：</label>
              <Input
                type="text"
                id="phone"
                onChange={handlePhoneOnChange}
                value={phone}
              />
            </InputLine>
            <InputLine>
              <label htmlFor="email">電子信箱：</label>
              <Input
                type="text"
                id="email"
                onChange={handleEmailOnChange}
                value={email}
              />
            </InputLine>
            <InputLine>
              <label htmlFor="address">地址：</label>
              <Input
                type="text"
                id="address"
                onChange={handleAddressOnChange}
                value={address}
              />
            </InputLine>
          </Form>
          <ButtonContainer>
            <Button>取消修改</Button>
            <Button>確認修改</Button>
          </ButtonContainer>
        </FormContainer>
      </UserInfoContainer>
      <Footer />
    </div>
  );
}
