import styled from "styled-components";
import CTextLogo from "../image/CTextLogo.jpg";
import LoginLogin from "../image/LoginLogin.jpg";
import LoginGrade from "../image/LoginGrade.jpg";

// candyPic import
import Rd from "../image/Candy/RedC.png";
import Og from "../image/Candy/OrangeC.png";
import Yell from "../image/Candy/YellowC.png";
import Gr from "../image/Candy/GreenC.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { login } from "../api";

const Wrapper = styled.div`
   height: 150vh;
   width: 100vw;
   align-items: center;
   display: flex;
   flex-direction: column;
   margin: auto;
   font-family: "GmarketSansMedium";
`;

const SecWrap = styled.div`
   display: flex;
   width: 70%;
   height: 70%;
   margin: 0 auto;
`;
const Header = styled.div`
   width: 450px;
   height: 100px;
   background-image: url(${CTextLogo});
   background-repeat: no-repeat;
   background-size: contain;
   margin-top: 3rem;
   margin-bottom: 2rem;
   cursor: pointer;
`;

const Grade = styled.div`
   font-size: 3rem;
   padding: 20px;
   color: white;
   letter-spacing: 10px;
`;

const Text = styled.div`
   display: grid;
   grid-template-rows: 1fr 1fr 1fr 1fr;
   & p {
      font-size: 1.2rem;
      padding: 10px;
      color: white;
      text-align: left;
      letter-spacing: 4px;
   }
`;
const Head = styled.div`
   font-size: 1.5rem;
   padding: 20px;
   font-weight: lighter;
   color: white;
   letter-spacing: 10px;
`;

const Section1 = styled.div`
   font-family: "TmonMonsori";
   width: 50%;
   height: 100%;
   background-image: url(${LoginGrade});
   background-repeat: no-repeat;
   background-size: contain;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   justify-content: center;
`;

const Section2 = styled.div`
   width: 50%;
   height: 100%;
   background-image: url(${LoginLogin});
   background-repeat: no-repeat;
   background-size: contain;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   justify-content: center;
`;

const Id = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 2rem;
   & label {
      padding-bottom: 5px;
   }
   & input {
      outline: none;
      width: 350px;
      padding: 5px;
      font-size: 1.3rem;
      box-shadow: 5px 5px 5px #04291f;
      border: 0;
      &:focus {
         outline: 4px solid black;
      }
   }
`;

const Pw = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 2rem;

   & label {
      padding-bottom: 5px;
   }
   & input {
      outline: none;
      width: 350px;
      padding: 5px;
      font-size: 1.3rem;
      box-shadow: 5px 5px 5px #04291f;
      border: 0;
      &:focus {
         outline: 4px solid black;
      }
   }
`;

const Reg = styled.div`
   display: flex;
   padding: 2rem;
`;
const LgButton = styled.div`
   color: white;
   margin: 10px;
   & button {
      font-family: "GmarketSansMedium";
      background-color: white;
      width: 170px;
      height: 40px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      box-shadow: 5px 5px 5px #04291f;
      &:hover {
         cursor: pointer;
      }
   }
`;
const RgButton = styled.div`
   color: white;
   margin: 10px;
   & button {
      font-family: "GmarketSansMedium";
      background-color: white;
      width: 170px;
      height: 40px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      box-shadow: 5px 5px 5px #04291f;
      &:hover {
         cursor: pointer;
      }
   }
`;

// 캔디 등급 정리
const Rc = styled.div`
   display: flex;
   align-items: center;
   margin: 20px auto;
   width: 100%;
`;
const Red = styled.div`
   width: 50px;
   height: 50px;
   background-image: url(${Rd});
   background-position: center;
   background-size: contain;
   background-repeat: no-repeat;
`;

const Oc = styled.div`
   display: flex;
   align-items: center;
   margin: 20px auto;
   width: 100%;
`;

const Org = styled.div`
   width: 50px;
   height: 50px;
   background-image: url(${Og});
   background-position: center;
   background-size: contain;
   background-repeat: no-repeat;
`;

const Yc = styled.div`
   display: flex;
   align-items: center;
   margin: 20px auto;
   width: 100%;
`;
const Yel = styled.div`
   width: 50px;
   height: 50px;
   background-image: url(${Yell});
   background-position: center;
   background-size: contain;
   background-repeat: no-repeat;
`;

const Gc = styled.div`
   display: flex;
   align-items: center;
   margin: 20px auto;
   width: 100%;
`;
const Grn = styled.div`
   width: 50px;
   height: 50px;
   background-image: url(${Gr});
   background-position: center;
   background-size: contain;
   background-repeat: no-repeat;
`;

export function Login() {
   const navigate = useNavigate();
   const navigateToMain = () => {
      navigate("/main");
   };
   const navigateToStudentRegister = () => {
      navigate("/student-register");
   };
   const [loginId, setLoginId] = useState("");
   const [password, setPassword] = useState("");

   async function onSubmit(e) {
      e.preventDefault();
      try {
         const user = {
            loginId: loginId,
            password: password,
         };
         const response = await login(user);
         if (response.resultCode === "SUCCESS" && response.data) {
            console.log("성공!!!");

            localStorage.setItem(
               "loginState",
               JSON.stringify({ id: response.data.loginId })
            );
         } else if (response.resultCode === "ERROR") {
            console.log("실패!!!!");
         }
      } catch (error) {
         console.error("로그인 중 오류 발생 : ", error);
      }
   }
   return (
      <>
         <Wrapper>
            <Header onClick={navigateToMain} title="누르면 메인으로 이동해요" />
            <SecWrap>
               <Section1>
                  <Grade>회원등급 안내</Grade>
                  <Text>
                     <Rc>
                        <Red />
                        <p>기본 네 가지 무료강의 / 기본 캐릭터 세트 제공</p>
                     </Rc>
                     <Oc>
                        <Org />
                        <p>
                           기본 네 가지 무료강의 + 유료강의 한 가지 / <br />{" "}
                           출석 스티커 열 네개 모으면 하나 더 제공
                        </p>
                     </Oc>
                     <Yc>
                        <Yel />
                        <p>
                           기본 네 가지 무료강의 + 유료강의 두 가지 / <br />{" "}
                           유료 캐릭터 꾸미기 재료 한 가지 제공
                        </p>
                     </Yc>
                     <Gc>
                        <Grn />
                        <p>
                           전 강의 무료 / <br />
                           유료 캐릭터 꾸미기 재료 두 가지 제공
                        </p>
                     </Gc>
                  </Text>
               </Section1>
               <Section2>
                  <Head>
                     <h1>로그인</h1>
                  </Head>
                  <form>
                     <Id>
                        <label>아이디</label>
                        <input
                           input
                           id="loginId"
                           value={loginId}
                           onChange={(e) => setLoginId(e.target.value)}
                        />
                     </Id>
                     <Pw>
                        <label>비밀번호</label>
                        <input
                           input
                           id="password"
                           value={password}
                           type="password"
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </Pw>
                     <Reg>
                        <LgButton>
                           <button onClick={onSubmit}>로그인</button>
                        </LgButton>
                        <RgButton>
                           <button onClick={navigateToStudentRegister}>
                              가입하기
                           </button>
                        </RgButton>
                     </Reg>
                  </form>
               </Section2>
            </SecWrap>
         </Wrapper>
      </>
   );
}
