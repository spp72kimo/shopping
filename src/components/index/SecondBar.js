import { Link } from "react-router-dom";
import styled from "styled-components";

const SecondBarContainer = styled.div`
  font-size: 22px;
  font-weight: 600;
  // letter-spacing: 2px;
  margin: 0px 4rem 1rem 4rem;
`;

const linkStyle = {
  // border: "1px solid",
  padding: "5px 16px",
  color: "rgba(0,0,0,0.7)",
};

export default function SecondBar() {
  return (
    <SecondBarContainer>
      <Link style={linkStyle} to="">
        新品上架
      </Link>
      <Link style={linkStyle} to="">
        精選主題
      </Link>
      <Link style={linkStyle} to="">
        特賣商品
      </Link>
      <Link style={linkStyle} to="">
        商品分類
      </Link>
    </SecondBarContainer>
  );
}
