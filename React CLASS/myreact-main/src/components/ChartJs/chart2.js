import { Chart as chartjs } from "chart.js/auto";
import { Line, Bubble, Doughnut, Pie } from "react-chartjs-2";
import styled from "styled-components";

const Container = styled.div`
  width: 50vw;
  height: 50vh;
  margin: auto;
`;

export function Chart2() {
  return (
    <>
      <h3>Bubble Chart </h3>
      <Container>
        <Bubble
          data={{
            datasets: [
              {
                label: "First Dataset",
                data: [
                  {
                    x: 20,
                    y: 30,
                    r: 15, // 반지름
                  }, // x,y,r 의 집합 하나가 bubble 1개임.
                  {
                    x: 10,
                    y: 20,
                    r: 10, // 반지름
                  }, // x,y,r 의 집합 하나가 bubble 1개임.
                  {
                    x: 22,
                    y: 25,
                    r: 10, // 반지름
                  }, // x,y,r 의 집합 하나가 bubble 1개임.
                  {
                    x: 30,
                    y: 40,
                    r: 20, // 반지름
                  }, // x,y,r 의 집합 하나가 bubble 1개임.
                  {
                    x: 25,
                    y: 10,
                    r: 10, // 반지름
                  }, // x,y,r 의 집합 하나가 bubble 1개임.
                  {
                    x: 24,
                    y: 15,
                    r: 15, // 반지름
                  }, // x,y,r 의 집합 하나가 bubble 1개임.
                ],
                backgroundColor: ["red", "blue", "yellow"],
              },
            ],
          }}
        />
      </Container>

      <h3>Doughnut Chart </h3>
      <Container>
        <Doughnut
          data={{
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
              {
                label: "My First Dataset",
                data: [300, 50, 100],
                backgroundColor: ["red", "blue", "yellow"],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </Container>

      <h3>Pie Chart </h3>
      <Container>
        <Pie
          data={{
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
              {
                label: "My First Dataset",
                data: [300, 50, 100],
                backgroundColor: ["red", "blue", "yellow"],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </Container>

      <h3>Line Chart </h3>
      <Container>
        <Line
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: "rgb(75,192,192)",
                borderColor: "rgb(75,192,192)",
                fill: false,
                tension: 0.1,
              },
            ],
          }}
        />
      </Container>
    </>
  );
}
