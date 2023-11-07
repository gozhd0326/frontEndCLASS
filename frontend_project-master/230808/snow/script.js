// wrapper에다가 <span class="snow"></span>을 생성해서 추가
// 1. 태그를 생성
// const 변수이름 = document.createElement('태그이름')
// const 변수이름 = document.createElement('span')
// wrapper.append(변수이름)
// 2.클래스 추가
// wrapper.append('snow')
// 3.wrapper.append(snow)
// 해야할 일
// wrapper에 snow를 100개 추가

const wrapper = document.querySelector('.wrapper')
// const snow = document.createElement('snow')
// console.log(snow)

const addsnow = () => {
    const size =randomNumger(8,3)
    const snow = document.createElement('span')
    snow.classList.add('snow')
    const random = Math.floor(Math.random() * (100 - 1) + 1) + '%';
    snow.style.left =`${randomNumger(100,1)}%` 
    wrapper.append(snow)
    // const duration = Math.floor(Math.random()*1000+1)+'%'
    snow.style.animationDuration = `${randomNumger(30,10)}s`
    snow.style.animationDelay = `${randomNumger(12,1)}s`
    snow.style.width = size + 'px'
    snow.style.height = size + 'px'
    snow.style.opacity = Math.random()
    snow.style.filter= `blur(${randomNumger(10,1)}px)`
}
// ``= esc밑에 위치
// let max = 100
// let min = 1
const randomNumger =(max, min) => {
    return Math.floor(Math.random() * (max - min) + min)

}

for (let i = 0; i < 100; i++) {
    addsnow()
    // console.log(i)

    // left값을 random으로 1~100%을 할당
    // `` = backtick
    // let max = 100;
    // let min = 1

}
// }for (let j = 0;) {
//     wrapper[j].
// }

