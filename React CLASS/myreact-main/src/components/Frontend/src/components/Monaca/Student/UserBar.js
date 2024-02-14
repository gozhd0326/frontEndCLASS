import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SubWrap = styled.div`
   display: flex;
   height: 100%;
   width: 20%;
   font-family: "GmarketSansMedium";
`;
const Section1 = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-rows: repeat(3, 1fr);
`;

const List = styled.div`
   width: 100%;
   height: 90%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   & h4 {
      margin-bottom: 0.5rem;
   }
   & h3 {
      color: #ff5865;
      &:hover {
         cursor: pointer;
      }
   }
   & ul {
      margin-left: 1rem;
      list-style: none;
      display: flex;
      flex-direction: column;
   }
   & li {
      & h5 {
         margin-bottom: 10px;
         color: #666666;
      }
   }
`;

const Click = styled.h4`
   &:hover {
      cursor: pointer;
   }
`;

export function UserBar() {
   const navigate = useNavigate();

   const navigateToUserRoom = () => {
      navigate("/user-room");
   };

   const navigateToUserLrngMgmt = () => {
      navigate("/user-lngmgmt");
   };

   const navigateToUserCourseMgmt = () => {
      navigate("/user-coursemgmt");
   };

   const navigateToLectureCart = () => {
      navigate("/lecture-cart");
   };

   const navigateToLectureList = () => {
      navigate("/lecture-list");
   };

   return (
      <>
         <SubWrap>
            <Section1>
               <List>
                  <h3 onClick={navigateToUserRoom}>나의방</h3>
                  <br />
                  <ul>
                     <li>
                        <h4>내 캐릭터</h4>
                        <h5>내 캐릭터 꾸미기</h5>
                     </li>
                     <li>
                        <h4>상점</h4>
                        <h5>캐릭터 치장 아이템 구매</h5>
                     </li>
                  </ul>
               </List>
               <List>
                  <h3 onClick={navigateToUserLrngMgmt}>학습관리</h3> <br />
                  <ul>
                     <li>
                        <h4> 강의실</h4>
                        <h5>
                           수강신청한 강의 듣기, <br />내 진도율 확인하기
                        </h5>
                     </li>
                     <li>
                        <h4>수강이력</h4>
                        <h5>수료한 강의, 성적확인하기</h5>
                     </li>
                     <li>
                        <h4>출석부</h4>
                        <h5>출석현황 보기</h5>
                     </li>
                     <li>
                        <h4>내 질문 모아보기</h4>
                        <h5>
                           내가 한 질문만
                           <br />
                           모아보기
                        </h5>
                     </li>
                     <li>
                        <h4>시험정보</h4>
                        <h5>
                           응시가능한 시험 /
                           <br />내 시험성적 확인하기
                        </h5>
                     </li>
                  </ul>
               </List>
               <List>
                  <h3 onClick={navigateToUserCourseMgmt}>수강신청 관리</h3>
                  <br />
                  <ul>
                     <li>
                        <h4>강의 찜</h4>
                        <h5>찜한 강의 모아보기</h5>
                     </li>
                     <li>
                        <Click onClick={navigateToLectureCart}>
                           수강 장바구니
                        </Click>
                        <h5>위 글씨를 클릭하면 이동해요!</h5>
                     </li>
                     <li>
                        <Click onClick={navigateToLectureList}>강의목록</Click>
                        <h5>위 글씨를 클릭하면 이동해요!</h5>
                     </li>
                  </ul>
               </List>
            </Section1>
         </SubWrap>
      </>
   );
}
