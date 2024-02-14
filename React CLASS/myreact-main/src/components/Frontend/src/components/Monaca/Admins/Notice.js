import styled from "styled-components";
import { MonacaInfo } from "../MonacaInfo";
import YellowNote from "../image/YellowNote.png";
import { NavBar } from "../NavBar";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
   height: 310vh;
   font-family: "GmarketSansMedium";
`;

const Section1 = styled.div`
   height: 10vh;
   width: 100vw;
   margin-bottom: 15vh;
`;

const Header = styled.div`
   width: 100%;
   height: 12vh;
   background-color: #0b4434;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: "GmarketSansMedium";
   & h1 {
      color: white;
      font-size: 2rem;
      letter-spacing: 5px;
   }
`;

const Section2 = styled.div`
   width: 100%;
   height: 290vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const NoticeInner = styled.div`
   background-color: lightgray;
   width: 50%;
   height: 140vh;
   display: flex;
   flex-direction: column;
   margin: 1rem auto;
`;

const Title = styled.div`
   width: 100%;
   height: 10%;
   background-color: white;
   border-top: 2px solid black;
   border-bottom: 2px solid black;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 2rem;
   letter-spacing: 3px;
`;

const Text = styled.div`
   width: 100%;
   height: 10%;
   border-bottom: 2px solid black;
`;

const MemoP = styled.div`
   margin-top: 10vh;
   width: 50%;
   height: 100vh;
   background-image: url(${YellowNote});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const MemoTitle = styled.div`
   width: 100%;
   height: 10%;
   display: flex;
   justify-content: center;
   text-align: center;
   font-size: 3rem;
   padding-bottom: 2rem;
   margin-bottom: 1rem;
`;

const MemoInner = styled.div`
   height: 70%;
   width: 75%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const SubHeader = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
`;

const SubTitle = styled.div`
   height: 100%;
   width: 25%;
   display: flex;
   flex-direction: column;
   & ul {
      list-style: none;
      display: grid;
      grid-template-rows: repeat(7, 1fr);
      height: 100%;
      align-items: center;
      font-size: 1.5rem;
      text-align: center;
   }
`;

const SubText = styled.div`
   height: 100%;
   width: 75%;
   display: flex;
   flex-direction: column;
   & ul {
      list-style: none;
      display: grid;
      grid-template-rows: repeat(7, 1fr);
      height: 100%;
      align-items: center;
      font-size: 1rem;
      text-align: center;
   }
`;

const Bottom = styled.div`
   width: 35%;
   height: 10vh;
   margin-top: 2rem;
   display: flex;
   align-items: center;
   justify-content: center;
   & p {
      font-size: 2rem;
      margin-right: 2rem;
   }
`;

const BotText = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   width: 45%;
   font-size: 1.5rem;
   margin: auto;
`;

const BotButton = styled.div`
   font-family: "GmarketSansMedium";
   display: flex;
   align-items: center;
   text-align: center;
   height: 50%;
   width: 40%;
`;

const Button = styled.button`
   font-family: "GmarketSansMedium";
   width: 90%;
   height: 100%;
   font-size: 1.5rem;
   border: none;
   background-color: #0b4434;
   color: white;
   &:hover {
      cursor: pointer;
   }
`;

export function Notice() {
   const navigate = useNavigate();

   const navigateToMessage = () => {
      navigate("/message");
   };

   return (
      <>
         <Wrapper>
            <Section1>
               <NavBar />
               <Header>
                  <h1>모나카 공지사항</h1>
               </Header>
            </Section1>
            <Section2>
               <NoticeInner>
                  <Title>공지사항</Title>
                  <Text></Text>
               </NoticeInner>
               <MemoP>
                  <MemoTitle>자주 묻는 질문</MemoTitle>
                  <MemoInner>
                     <SubHeader>
                        <SubTitle>
                           <ul>
                              <li>회원등급</li>
                              <li>회원탈퇴 방법</li>
                              <li>
                                 회원탈퇴 후 <br />
                                 재가입
                              </li>
                              <li>교재</li>
                              <li>수업진행방법</li>
                              <li>강의환불 문의</li>
                              <li>아이템 환불</li>
                           </ul>
                        </SubTitle>
                        <SubText>
                           <ul>
                              <li>
                                 메인페이지 하단에 회원등급안내도를 참고해주시길
                                 바랍니다.
                              </li>
                              <li>
                                 메인페이지 하단에 회원등급안내도를 참고해주시길
                                 바랍니다.
                              </li>
                              <li>
                                 탈퇴 후에 재가입을 원하신다면 다시 회원가입을
                                 하시면 됩니다.
                                 <br /> 단, 회원등급이나 전 계정에서 들었던
                                 강의는 초기화 됩니다.
                              </li>
                              <li>
                                 교재는 따로 있지 않고, 교수님이 올려주신 <br />
                                 강의자료로 학습하시길 바랍니다.
                              </li>
                              <li>
                                 실시간 수업은 존재하지 않습니다.
                                 <br />
                                 등록되어있는 강의로 학습하시길 바랍니다
                              </li>
                              <li>죄송하지만 강의특성상 환불은 어렵습니다.</li>
                              <li>죄송하지만 아이템은 환불이 어렵습니다.</li>
                           </ul>
                        </SubText>
                     </SubHeader>
                  </MemoInner>
               </MemoP>
               <Bottom>
                  <BotText>다른 궁금한 점 질문 하기</BotText>
                  <p>&#10230;</p>
                  <BotButton>
                     <Button onClick={navigateToMessage}>
                        관리자에게 쪽지 쓰기
                     </Button>
                  </BotButton>
               </Bottom>
            </Section2>
         </Wrapper>
         <MonacaInfo />
      </>
   );
}
