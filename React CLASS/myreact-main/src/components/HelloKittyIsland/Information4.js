import styled from "styled-components";
import hellokitty3 from "./image/hellokitty3.webp";
import logo from "./image/Hello-KittyLogo-removebg.png";
const Container = styled.div`
  /* background-image: url(${() => hellokitty3}); */
  width: 100vw;
  height: 100vh;
  /* background-size: cover;
  background-repeat: no-repeat; */
  position: relative;
  &::after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: brightness(0.6);
    /* opacity: 0.7; */
    background-image: url(${() => hellokitty3});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
const TitleBox = styled.div`
  position: absolute;
  left: 8%;
  top: 8%;
  line-height: 6rem;
  h2 {
    font-size: 7.5rem;
    text-shadow: 2px 2px 2px black;
    color: rgba(226, 182, 201, 0.884);
    /* color: rgba(235, 204, 218, 0.85); */
    font-weight: 500;
  }
  p {
    position: absolute;
    left: 14%;
    color: rgba(224, 214, 219, 0.884);
    font-size: 1.8rem;
    font-weight: 200;
  }
  /* background-color: rgb(237, 153, 206, 0.7); */
`;
const Img = styled.img`
  margin-right: 0.8rem;
  width: 100px;
  height: 80px;
  z-index: 10;
  background-color: rgba(235, 204, 218, 0.334);
  border-radius: 30%;
  object-fit: contain;
`;
export function Information() {
  return (
    <>
      <Container>
        <TitleBox>
          <h2>
            <Img alt="HelloKitty-Logo" src={logo}></Img>Information
          </h2>
          <p>헬로키티아일랜드 이용안내</p>
        </TitleBox>
      </Container>
    </>
  );
}