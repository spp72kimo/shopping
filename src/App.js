import "./App.css";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./routes/Index";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Logout from "./routes/Logout";
import IdentifyUser from "./routes/IdentifyUser";
import UserInfo from "./routes/Userinfo";
import Cart from "./routes/Cart";
import BuyLog from "./routes/BuyLog";
import BossInfo from "./routes/BossInfo";

export const UserContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  return (
    <div>
      <Router>
        <UserContext.Provider
          value={{ userInfo, setUserInfo, errorMessage, setErrorMessage }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/identify" element={<IdentifyUser />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/bossinfo" element={<BossInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/buylog" element={<BuyLog />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
