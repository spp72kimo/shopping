import styled from "styled-components";
import SecondBar from "../components/index/SecondBar";
import IndexSmallList from "../components/index/IndexSamllList";
import Footer from "../components/Fotter";

const IndexContainer = styled.div`
  //   border: 1px solid black;
  margin: 1rem auto;
  max-width: 1400px;
`;

const ImgContainer = styled.div`
  //   border: 1px solid black;
  max-width: 100%;
  height: 80vh;
  margin-bottom: 2rem;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 0%;
  }
`;

export default function Index() {
  return (
    <div>
      <SecondBar />
      <IndexContainer>
        <ImgContainer>
          <img src="https://imgur.com/uXwLn6q.jpg" alt="BigLogo" />
        </ImgContainer>
        <IndexSmallList>新品上架</IndexSmallList>
        <IndexSmallList>精選主題</IndexSmallList>
        <IndexSmallList>特賣商品</IndexSmallList>
        <IndexSmallList>商品分類</IndexSmallList>
      </IndexContainer>
      <Footer />
    </div>
  );
}
