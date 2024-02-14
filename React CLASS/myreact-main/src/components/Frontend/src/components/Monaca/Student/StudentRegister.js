import styled from "styled-components";
import CTextLogo from "../image/CTextLogo.jpg";
import LoginLogin from "../image/LoginLogin.jpg";
import LoginGrade from "../image/LoginGrade.jpg";
import { Navigate, json, useNavigate } from "react-router-dom";
import { MonacaInfo } from "../MonacaInfo";

// candyPic import
import Rd from "../image/Candy/RedC.png";
import Og from "../image/Candy/OrangeC.png";
import Yell from "../image/Candy/YellowC.png";
import Gr from "../image/Candy/GreenC.png";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { signup } from "../api";

const Wrapper = styled.div`
   height: 150vh;
   width: 100vw;
   align-items: center;
   display: flex;
   flex-direction: column;
   margin: auto;
   font-family: "GmarketSansMedium";
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
const SecWrap = styled.div`
   display: flex;
   width: 70%;
   height: 70%;
   margin: 0 auto;
   overflow: hidden;
   justify-content: center;
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

const Grade = styled.div`
   font-size: 3rem;
   padding: 20px;
   color: white;
   letter-spacing: 5px;
`;

const Text = styled.div`
   display: grid;
   grid-template-rows: 1fr 1fr 1fr 1fr;
   align-items: center;

   & p {
      font-size: 1.2rem;
      padding: 10px;
      color: white;
      text-align: left;
      letter-spacing: 4px;
   }
`;
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

const Section2 = styled.div`
   width: 50%;
   height: 100%;
   background-image: url(${LoginLogin});
   background-repeat: no-repeat;
   background-size: contain;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   & label {
      letter-spacing: 1px;
   }
`;

///////////////////////
// 회원가입 양식란

const StyledForm = styled.div`
   height: 80%;
   width: 80%;

   display: flex;
   flex-direction: column;
   align-items: center;
`;
const Head = styled.div`
   margin-top: -4rem;
   font-size: 1.5rem;
   padding: 10px;
   font-weight: lighter;
   color: white;
   letter-spacing: 10px;
`;
const Id = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 350px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
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
   text-align: left;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 350px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;

const Name = styled.div`
   color: white;
   display: flex;
   width: 400px;
   align-items: center;
   justify-content: center;
`;

const Fn = styled.div`
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin: 10px;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px;
      width: 155px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;
const Nn = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin: 10px;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px;
      width: 155px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;
const Bd = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 350px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;

const Gender = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
`;
const Gd = styled.select`
   font-size: 1.5rem;
   width: 350px;
   margin: 10px;
`;
const Email = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 350px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;
const Pn = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 350px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;

const SignUp = styled.div`
   color: white;
   color: white;
   margin: 10px;
   padding: 20px;
   & button {
      width: 350px;
      height: 40px;
      background-color: white;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      box-shadow: 5px 5px 5px #04291f;
      font-family: "GmarketSansMedium";
   }
`;

const Switch = styled.div`
   width: 60px;
   height: 300px;
   display: flex;
   flex-direction: column;
`;

const Button2 = styled.button`
   height: 150px;
   border-top-right-radius: 30px;
   border-bottom-right-radius: 30px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: white;
   font-size: 1rem;
   cursor: pointer;
   background-color: #05261d;
   border: 0;
   font-family: "GmarketSansMedium";
   letter-spacing: 3px;
`;
const Button1 = styled.button`
   letter-spacing: 3px;
   height: 150px;
   border-top-right-radius: 30px;
   border-bottom-right-radius: 30px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #0b4434;
   color: white;
   font-size: 1rem;
   cursor: pointer;
   font-family: "GmarketSansMedium";
   border: 0;
   &:active {
      background-color: #05261d;
   }
`;

const Rotate = styled.div`
   transform: rotate(90deg);
   width: 80px;
`;

const options = [
   { value: "MAN", label: "남성" },
   { value: "WOMAN", label: "여성" },
];

export function StudentRegister() {
   const navigate = useNavigate();
   const navigateToProfessorRegister = () => {
      navigate("/professor-register");
   };
   const navigateToMain = () => {
      navigate("/main");
   };

   const [loginId, setLoginId] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const [nickname, setNickname] = useState("");
   const [birthDate, setBirthDate] = useState("");
   const [gender, setGender] = useState("MAN");
   const [email, setEmail] = useState("");
   const [phoneNum, setPhoneNum] = useState("");
   const [registerComplete, setRegisteringComplete] = useState(false);
   const [alertMessage, setAlertMessage] = useState("");
   const [showAlert, setShowAlert] = useState("");

   async function onSubmit(e) {
      const user = {
         loginId: loginId,
         password: password,
         name: name,
         nickname: nickname,
         birthDate: birthDate,
         gender: gender,
         phoneNum: phoneNum,
         email: email,
      };
      const response = await signup(user);
      console.log(response);
      if (response.resultCode === "SUCCESS" && response.data) {
         console.log("성공확인");
         sessionStorage.setItem(
            "loginState",
            JSON.stringify({ id: response.data.loginId })
         );
      } else if (response.resultCode === "ERROR") {
         console.log("실패 재확인 요청");
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
                     <h1>학생 회원가입</h1>
                  </Head>
                  <StyledForm>
                     <Id>
                        <label>* 아이디</label>
                        <input
                           id="loginId"
                           value={loginId}
                           onChange={(e) => setLoginId(e.target.value)}
                        />
                     </Id>
                     <Pw>
                        <label>* 비밀번호</label>
                        <input
                           id="password"
                           value={password}
                           type="password"
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </Pw>
                     <Name>
                        <Fn>
                           <label>* 이름</label>{" "}
                           <input
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                           />
                        </Fn>
                        <Nn>
                           <label>* 닉네임</label>{" "}
                           <input
                              id="nickname"
                              value={nickname}
                              onChange={(e) => setNickname(e.target.value)}
                           />
                        </Nn>
                     </Name>
                     <Bd>
                        <label>* 생년월일</label>
                        <input
                           id="birthDate"
                           value={birthDate}
                           onChange={(e) => setBirthDate(e.target.value)}
                        />
                     </Bd>
                     <Gender>
                        <label>* 성별</label>
                        <Gd
                           value={gender}
                           onChange={(e) => setGender(e.target.value)}
                        >
                           {options.map((option) => (
                              <option key={option.value} value={option.value}>
                                 {option.label}
                              </option>
                           ))}
                        </Gd>
                     </Gender>
                     <Email>
                        <label>이메일</label>
                        <input
                           id="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </Email>
                     <Pn>
                        <label>* 전화번호</label>
                        <input
                           id="phoneNum"
                           value={phoneNum}
                           onChange={(e) => setPhoneNum(e.target.value)}
                        />
                     </Pn>
                     <SignUp>
                        <button onClick={onSubmit}>가입하기</button>
                     </SignUp>
                  </StyledForm>
               </Section2>{" "}
               <Switch>
                  <Button1>
                     <Rotate>
                        학생 <br />
                        회원가입
                     </Rotate>
                  </Button1>
                  <Button2 onClick={navigateToProfessorRegister}>
                     <Rotate>
                        교수 <br />
                        회원가입
                     </Rotate>
                  </Button2>
               </Switch>
            </SecWrap>
         </Wrapper>
         <MonacaInfo />
      </>
   );
}
