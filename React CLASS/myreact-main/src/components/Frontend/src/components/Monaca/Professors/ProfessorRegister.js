import styled from "styled-components";
import CTextLogo from "../image/CTextLogo.jpg";
import EmptyBack from "../image/CandyRoom.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MonacaInfo } from "../MonacaInfo";
import { signup } from "../api";

const Wrapper = styled.div`
   height: 170vh;
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
const MainWrap = styled.div`
   display: flex;
   width: 70%;
   height: 70%;
`;

const SecWrap = styled.div`
   background-image: url(${EmptyBack});
   width: 100%;
   height: 100%;
`;

const Title = styled.div`
   width: 100%;
   height: 10vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;
const Blank = styled.div`
   width: 35%;
   height: 100%;
`;
const Reg = styled.div`
   width: 30%;
   height: 100%;
   font-size: 1.5rem;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   letter-spacing: 5px;
   margin: -1rem;
`;
const Info = styled.div`
   width: 35%;
   font-size: 1rem;
   /* margin: -2.5rem; */
   margin-left: 1rem;

   height: 100%;
   display: flex;
   justify-content: center;
   color: white;
   line-height: 20px;
   align-items: center;
`;

const InnerWrapper = styled.div`
   display: flex;
   height: 70%;
`;

const Section1 = styled.div`
   width: 50%;
   height: 90vh;
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
`;

const StyledForm = styled.div`
   width: 90%;
   height: 95%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;
`;
const Id = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;

const UserName = styled.div`
   margin: 1rem;
   display: flex;
   width: 80%;
   align-items: center;
   justify-content: center;
`;

const Name = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin-right: 15px;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 180px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;
const NickName = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin-left: 15px;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 180px;
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
const PhoneNum = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;

const Professor = styled.div`
   margin: 1rem;
   display: flex;
   width: 80%;
   align-items: center;
   justify-content: center;
`;

const Picture = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin-right: 15px;
   & input {
      display: inline-block;
      vertical-align: middle;
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 150px;
      height: 150px;
      border: 0;
      background-color: white;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;

const ProInfo = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin-left: 15px;
   & textarea {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 210px;
      height: 150px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      resize: none;
      &:focus {
         outline: 4px solid black;
      }
   }
`;
const Category = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   color: white;
   width: 380px;
   margin: 0.5rem;
   & select {
      display: flex;
      text-align: center;
      align-items: center;
      font-size: 1rem;
      width: 380px;
      height: 40px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      font-family: "GmarketSansMedium";
      letter-spacing: 2px;
   }
`;

const Section2 = styled.div`
   width: 50%;
   height: 90vh;
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
`;

const Pw = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;

const BirthDate = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;

const Email = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & input {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      &:focus {
         outline: 4px solid black;
      }
   }
`;

const Introduce = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & textarea {
      outline: none;
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      height: 275px;
      resize: none;
      &:focus {
         outline: 4px solid black;
      }
   }
`;

const SignUp = styled.div`
   width: 80%;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & button {
      width: 80%;
      font-size: 1.5rem;
      height: 40px;
      background-color: white;
      font-family: "GmarketSansMedium";
   }
`;

const Switch = styled.div`
   width: 60px;
   height: 300px;
   display: flex;
   flex-direction: column;
`;

const Button1 = styled.button`
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
const Button2 = styled.button`
   height: 150px;
   letter-spacing: 3px;
   border-top-right-radius: 30px;
   border-bottom-right-radius: 30px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #0b4434;
   color: white;
   font-size: 1rem;
   border: 0;
   font-family: "GmarketSansMedium";
   cursor: pointer;
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

export function ProfessorRegister() {
   const navigate = useNavigate();
   const navigateToStudentRegister = () => {
      navigate("/student-register");
   };
   const navigateToMain = () => {
      navigate("/main");
   };
   const [selectedOption, setSelectedOption] = useState("");
   const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
   };

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setImage(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };
   const [loginId, setLoginId] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const [nickname, setNickname] = useState("");
   const [birthDate, setBirthDate] = useState("");
   const [gender, setGender] = useState("MAN");
   const [email, setEmail] = useState("");
   const [phoneNum, setPhoneNum] = useState("");
   const [professorIntro, setProfessorIntro] = useState("");
   const [professorResume, setProfessorResume] = useState("");
   const [image, setImage] = useState("");

   async function onSubmit(e) {
      const user = {
         loginId,
         name,
         nickname,
         gender,
         phoneNum,
         image,
         password,
         birthDate,
         email,
         professorIntro,
         professorResume,
      };
      const response = await signup(user);
      console.log(response);
      if (response.resultCode === "SUCCESS" && response.data) {
         console.log("성공 확인!");
         sessionStorage.setItem(
            "loginState",
            JSON.stringify({ id: response.data.loginId })
         );
      } else if (response.resultCode === "ERROR") {
         console.log("실패! 문제가 있습니다.");
      }
   }

   return (
      <Wrapper>
         <Header onClick={navigateToMain} title="누르면 메인으로 이동해요" />
         <MainWrap>
            <SecWrap>
               <Title>
                  <Blank />
                  <Reg>
                     <h1>교수 회원가입</h1>
                  </Reg>
                  <Info>
                     이력서 제출 후 허가를 받은 사람만 회원가입 하시길 바랍니다.{" "}
                     <br />* 이 외의 유저는 확인 후 탈퇴 조치 *
                  </Info>
               </Title>
               <InnerWrapper>
                  <Section1>
                     <StyledForm>
                        <Id>
                           <label> * 아이디</label>
                           <input
                              id="loginId"
                              value={loginId}
                              onChange={(e) => setLoginId(e.target.value)}
                           />
                        </Id>
                        <UserName>
                           <Name>
                              <label>* 이름</label>
                              <input
                                 id="name"
                                 value={name}
                                 onChange={(e) => {
                                    setName(e.target.value);
                                 }}
                              />
                           </Name>
                           <NickName>
                              <label>* 닉네임</label>
                              <input
                                 id="nickname"
                                 value={nickname}
                                 onChange={(e) => setNickname(e.target.value)}
                              />
                           </NickName>
                        </UserName>
                        <Gender>
                           <label>* 성별</label>
                           <Gd
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                           >
                              {options.map((option) => (
                                 <option
                                    key={option.value}
                                    value={option.value}
                                 >
                                    {option.label}
                                 </option>
                              ))}
                           </Gd>
                        </Gender>
                        <PhoneNum>
                           <label>* 전화번호</label>
                           <input
                              id="phoneNum"
                              value={phoneNum}
                              onChange={(e) => setPhoneNum(e.target.value)}
                           />
                        </PhoneNum>
                        <Professor>
                           <Picture>
                              <label>* 프로필 사진</label>
                              <input
                                 id="image"
                                 value={image}
                                 type="file"
                                 onChange={handleImageChange}
                              />
                           </Picture>
                           <ProInfo>
                              <label>* 경력사항</label>
                              <textarea
                                 id="professorResume"
                                 value={professorResume}
                                 onChange={(e) => {
                                    setProfessorResume(e.target.value);
                                 }}
                              />
                           </ProInfo>
                        </Professor>
                        <Category>
                           <div>
                              <select
                                 id="subjectCategory"
                                 value={selectedOption}
                                 onChange={handleSelectChange}
                              >
                                 <option value="">
                                    지원하는 과목 카테고리를 선택해주세요
                                 </option>
                                 <option value="키오스크">키오스크</option>
                                 <option value="웹사이트">웹사이트</option>
                                 <option value="모바일">모바일</option>
                                 <option value="국가복지 및 민원">
                                    국가복지 및 민원
                                 </option>
                              </select>
                              {selectedOption && (
                                 <p>You selected: {selectedOption}</p>
                              )}
                           </div>
                        </Category>
                     </StyledForm>
                  </Section1>
                  <Section2>
                     <StyledForm>
                        <Pw>
                           <label>* 비밀번호</label>
                           <input
                              id="password"
                              value={password}
                              type="password"
                              onChange={(e) => setPassword(e.target.value)}
                           />
                        </Pw>
                        <BirthDate>
                           <label>* 생년월일</label>
                           <input
                              id="birthDate"
                              value={birthDate}
                              onChange={(e) => setBirthDate(e.target.value)}
                           />
                        </BirthDate>
                        <Email>
                           <label>* 이메일</label>
                           <input
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                           />
                        </Email>
                        <Introduce>
                           <label>* 50자 이내의 간단한 소개</label>
                           <textarea
                              id="professorIntro"
                              value={professorIntro}
                              onChange={(e) =>
                                 setProfessorIntro(e.target.value)
                              }
                           />
                        </Introduce>
                        <SignUp>
                           <button onClick={onSubmit}>가입하기</button>
                        </SignUp>
                     </StyledForm>
                  </Section2>{" "}
               </InnerWrapper>{" "}
            </SecWrap>
            <Switch>
               <Button1 onClick={navigateToStudentRegister}>
                  <Rotate>
                     학생 <br />
                     회원가입
                  </Rotate>
               </Button1>
               <Button2>
                  <Rotate>
                     교수 <br />
                     회원가입
                  </Rotate>
               </Button2>
            </Switch>
         </MainWrap>
         <MonacaInfo />
      </Wrapper>
   );
}
