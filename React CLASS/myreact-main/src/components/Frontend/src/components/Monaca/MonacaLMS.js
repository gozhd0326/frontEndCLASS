// 총괄 컴포넌트
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Main } from "./Mains/Main";
import { Notice } from "./Admins/Notice";
import { StudentRegister } from "./Student/StudentRegister";
import { Message } from "./Messages/Message";
import { CsCenter } from "./Admins/CsCenter";
import styled from "styled-components";
import { ProfessorRegister } from "./Professors/ProfessorRegister";
import { LectureList } from "./Lectures/LectureList";
import { LectureInfo } from "./Lectures/LectureInfo";
import { Login } from "./Mains/Login";
import { ProfessorList } from "./Professors/ProfessorList";
import Intro from "./Intro";
import { createContext, useEffect, useState } from "react";
import { ProfessorEmployee } from "./Professors/ProfessorEmployee";
import { LearningMgmt } from "./Professors/LearningMgmt";
import { StudentMgmt } from "./Professors/StudentMgmt";
import { Material } from "./Lectures/Material";
import { GradeGuide } from "./GradeGuide";
import { LectureQnA } from "./Lectures/LectureQnA";
import { LectureNotice } from "./Lectures/LectureNotice";
import { ProfessorInfo } from "./Professors/ProfessorInfo";
import { ExamPaper } from "./Student/ExamPaper";
import { QueryClient } from "react-query";
import { ProfessorRoom } from "./Professors/ProfessorRoom";
import { UserRoom } from "./Student/UserRoom";
import { UserLrngMgmt } from "./Student/UserLrngMgmt";
import { UserCourseMgmt } from "./Student/UserCourseMgmt";
import { LectureCart } from "./Lectures/LectureCart";
import { OutBox } from "./Messages/OutBox";
import { InBox } from "./Messages/InBox";
import { ItemShop } from "./Student/ItemShop";
import { PfsProfile } from "./Professors/PfsProfile";
import { OutBoxDetaile } from "./Messages/OutBoxDetaile";
import { InBoxDetaile } from "./Messages/InBoxDetaile";
import { DoQnA } from "./Student/DoQnA";

const Container = styled.div`
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const client = new QueryClient();
export const MonacaContext = createContext();
export function MonacaLMS() {
   const [showIntro, setShowIntro] = useState(true);
   const [monacaIndex, setMonacaIndex] = useState(0);

   return (
      <>
         <MonacaContext.Provider value={{ monacaIndex, setMonacaIndex }}>
            <BrowserRouter>
               <Container>
                  <div>
                     <Routes>
                        {showIntro && (
                           <Route
                              index
                              element={<Intro setShowIntro={setShowIntro} />}
                           />
                        )}
                        <Route index element={<Main />} />
                        <Route path="main" element={<Main />} />
                        <Route
                           path="student-register"
                           element={<StudentRegister />}
                        />
                        <Route
                           path="professor-register"
                           element={<ProfessorRegister />}
                        />
                        <Route path="pf-room" element={<ProfessorRoom />} />
                        <Route path="message" element={<Message />} />
                        <Route path="cs-center" element={<CsCenter />} />
                        <Route path="lecture-list" element={<LectureList />} />
                        <Route path="lecture-info" element={<LectureInfo />} />
                        <Route path="login" element={<Login />} />
                        <Route
                           path="professor-list"
                           element={<ProfessorList />}
                        />
                        <Route
                           path="professor-info"
                           element={<ProfessorInfo />}
                        />
                        <Route
                           path="employee"
                           element={<ProfessorEmployee />}
                        />
                        <Route path="notice" element={<Notice />} />
                        <Route path="message" element={<Message />} />
                        <Route path="pf-lngmgmt" element={<LearningMgmt />} />
                        <Route path="stud-mgmt" element={<StudentMgmt />} />
                        <Route path="material" element={<Material />} />
                        <Route path="grade-guide" element={<GradeGuide />} />
                        <Route path="lecture-qna" element={<LectureQnA />} />
                        <Route
                           path="lecture-notice"
                           element={<LectureNotice />}
                        />
                        <Route path="exam-paper" element={<ExamPaper />} />
                        <Route path="user-room" element={<UserRoom />} />
                        <Route path="user-lngmgmt" element={<UserLrngMgmt />} />
                        <Route
                           path="user-coursemgmt"
                           element={<UserCourseMgmt />}
                        />
                        <Route path="lecture-cart" element={<LectureCart />} />
                        <Route path="out-box" element={<OutBox />} />
                        <Route path="in-box" element={<InBox />} />
                        <Route path="item-shop" element={<ItemShop />} />
                        <Route path="pf-profile" element={<PfsProfile />} />
                        <Route
                           path="out-box-detaile"
                           element={<OutBoxDetaile />}
                        />
                        <Route
                           path="in-box-detaile"
                           element={<InBoxDetaile />}
                        />
                        <Route path="do-qna" element={<DoQnA />} />
                     </Routes>
                  </div>
               </Container>
            </BrowserRouter>
         </MonacaContext.Provider>
      </>
   );
}
