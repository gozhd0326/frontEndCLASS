import { Chart as chartjs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

const Container = styled.div`
  width: 50vw;
  height: 50vh;
  margin: auto;
`;

export function Chart1() {
  const data = [
    { year: 2011, count: 10 },
    { year: 2012, count: 20 },
    { year: 2013, count: 15 },
    { year: 2014, count: 25 },
    { year: 2015, count: 22 },
    { year: 2016, count: 30 },
    { year: 2017, count: 28 },
  ];

  return (
    <>
      <h3>기본 사용법 : Bar 차트</h3>
      <Container>
        <Bar
          // chart의 형태(여기서는 Bar) , 두개의 props가 필요함. data, options
          data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"], // X축에 있는 것들, 배열로 들어감
            datasets: [
              {
                label: "# of Votes", // chart의 제목
                data: [12, 19, 3, 5, 2, 3], // red = 12, blue =19 ....
                borderWidth: 1, // border의 두께
              },
            ],
          }} // 실질적인 데이터 // Labae = X축(배열) , 데이터 = Y축(배열) // JAVA Script를 만드는 데 필요한 중괄호{} , 그안에 객체 중괄호 {}
          options={{
            scales: {
              y: {
                begintAtZero: true, // 0을 제일 하단에 두고 싶을 때 사용하는 코드(-의 값은 안나오고 0부터 +의 값만 나옴) ( 보통 많이 쓰임. )
              },
            },
          }} //꾸미는데 필요한 것들
        />
      </Container>

      <h3>배열 map 사용법</h3>
      <Container>
        <Bar
          // chart의 형태(여기서는 Bar) , 두개의 props가 필요함. data, options
          data={{
            labels: data.map((d) => d.year),
            datasets: [
              {
                label: "# of Votes",
                data: data.map((d) => d.count),
                borderWidth: 1, // border의 두께
              },
            ],
          }} // 실질적인 데이터 // Labae = X축(배열) , 데이터 = Y축(배열) // JAVA Script를 만드는 데 필요한 중괄호{} , 그안에 객체 중괄호 {}
          options={{
            scales: {
              y: {
                begintAtZero: true, // 0을 제일 하단에 두고 싶을 때 사용하는 코드(-의 값은 안나오고 0부터 +의 값만 나옴) ( 보통 많이 쓰임. )
              },
            },
          }} //꾸미는데 필요한 것들
        />
      </Container>

      <h3>옵션 커스터마이즈</h3>
      <Container>
        <Bar
          // chart의 형태(여기서는 Bar) , 두개의 props가 필요함. data, options
          data={{
            labels: data.map((d) => d.year),
            datasets: [
              {
                label: "# of Votes",
                data: data.map((d) => d.count),
                borderWidth: 1, // border의 두께
              },
            ],
          }} // 실질적인 데이터 // Labae = X축(배열) , 데이터 = Y축(배열) // JAVA Script를 만드는 데 필요한 중괄호{} , 그안에 객체 중괄호 {}
          options={{
            animation: false, //default 값이 true임.
            plugins: {
              legend: {
                // 범례 ( 표 제목, 부가설명 )
                display: true,
                position: "bottom",
              },
              tooltip: {
                enabled: false,
              },
            },
            scales: {
              y: {
                begintAtZero: true, // 0을 제일 하단에 두고 싶을 때 사용하는 코드(-의 값은 안나오고 0부터 +의 값만 나옴) ( 보통 많이 쓰임. )
              },
            },
          }} //꾸미는데 필요한 것들
        />
      </Container>
    </>
  );
}
