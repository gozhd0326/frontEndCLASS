// PI
console.log(Math.PI)

// 절대값
// console.log(Math.abs(-1))
// console.log(Math.abs(1))
// console.log(Math.abs('-1'))

// Round, 반올림, 소수점 이하를 반올림
// 소수점, 최댓값, 최솟값, 절댓값, 결괏값

// Round, 반올림, 소숫점 이하를 반올림
console.log(Math.round(1.4))
console.log(Math.round(-1.6))

// ceil, 올림, 소숫점 이하를 올림
console.log(Math.ceil(1.2))
console.log(Math.ceil(-1.2))

// floor, 버림, 소숫점 이하를 버림
console.log(Math.floor(1.9999999999))
console.log(Math.floor(-1.99999999999))

// Random, 난수. 랜덤숫자.
// 0부터 1미만의 숫자
// 0.0.999999999.....
// console.log(Math.random())
// const random = Math.floor(Math.random() * 5 + 1);
// const random = Math.floor(Math.random() * 5 + 1);
let max = 12;
let min = 3;
const random = Math.floor(Math.random() * (max - min + 1)+min);
// +1을 안할 경우 최댓값의 수치가 나오지 않고 최댓값의 -1 수치까지만 나옴
 console.log(random)