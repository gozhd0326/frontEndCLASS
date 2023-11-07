// ./filename.js =>상위 폴더
// ../filename.js => 더 상위 폴더
// import add from './add.js'
// import multiply from './multiply.js'

// import add, { multiply as multi } from './math.js'
// default 값이 있는 식은 {}를 안쓰고
// 없는 식은 {안에 넣음}
// 00 as 11 은 00이 본래 이름, 11은 별칭임. 같은 파일 명이 있을 경우 별칭을 이용하여 다르게 사용가능 

// import add, * as math from './math.js'
// // 파일의 모든 것을 가져올 시 사용.
// // difault가 있는 경우와 없는 경우는 불러오는 방식이 다름

// console.log(add(7, 3))
// console.log(math.multiply(80, 3))

// 객체
// const person = {
//     // key : vaule
//     name: '짱구',
//     age: 5
// }
// 기본적으로 상수는 바꿀 수 없지만,
// 배열, 객체라는 자료형만 유지된다면,
// 배열, 객체안의 데이터는 변경되어도 허용된다.
// person.name = '짱아'
// person.age = 1

// console.log(person.name)
// console.log(person.age)

const characters = [
    {
        id: 0,
        name: '훈이',
        age: 5,
    },
    {
        id: 0,
        name: '철수',
        age: 5,
    },
    {
        id: 3,
        name: '맹구',
        age: 5,
    },
    {
        id: 4,
        name: '유리',
        age: 5,
    },
    {
        id: 5,
        name: '짱아',
        age: 1,
    },
    {
        id: 6,
        name: '이슬이',
        age: 20,
    },
    {
        id: 7,
        name: '신형만',
        age: 40,
    }

]

console.log(characters.length)

for (let i = 0; i < characters.length; i++) {
    console.log(characters[i].name)
}

characters.forEach(person => {
    console.log(person.name)
});
// 여기서 person은 별칭임. 자유롭게 설정 가능.

// ex)'짱구의 나이는 5살 입니다.'
characters.forEach(person => console.log(person.name + '의 나이는 ' + person.age + '살 입니다.'))
characters.forEach(person => console.log(`${person.name}의 나이는 ${person.age}입니다.`))

// ex) '짱구의 10년 뒤 나이는 15살입니다.

characters.forEach(person => console.log(`${person.name}의 10년 뒤 나이는 ${person.age+10}입니다.`))

// const a = '10'
// const b = 10
// console.log(+a+b)
// console.log(Number(a)+b)
// console.log(parseInt(a)+b)
// const c ='짱아'
// const d = 1
// console.log(+c+d)
// // parseInt =>정수 
// const text = ('b'+'a'+ +'a'+'a').toLocaleLowerCase()
// console.log(text)
const list = document.getElementById('list')
characters.forEach(person => {
    const li = document.createElement('li')
    li.textContent = `${person.name}의 나이는 ${person.age}살 입니다.`
    list.append(li)
})