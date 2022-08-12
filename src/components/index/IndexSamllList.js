import styled from "styled-components";
const Container = styled.div`
  // border: 1px solid;
  margin-bottom: 2rem;
`;
const SubTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  padding: 0 1rem 0.5rem 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const ProductListContainer = styled.div`
  // border: 1px solid black;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
`;
const Photo = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  min-width: 240px;
  height: 170px;
  margin-bottom: 1rem;
`;
export default function IndexSmallList(prop) {
  return (
    <Container>
      <SubTitle>{prop.children}</SubTitle>
      <ProductListContainer>
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </ProductListContainer>
    </Container>
  );
}
