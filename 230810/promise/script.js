const first = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('1번째'), 3000)
})
const second = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('2번째'), 2000)
})
const third = () => new Promise((resolve, reject) => {
    resolve('3번째')
})

// // resolve =>허용할 때
// // reject =>거절할 때
// setTimeout(() => console.log('1번째'))
// setTimeout(() => console.log('2번째'))
// // setTimeout(()=>console.log('3번째'))
// console.log('3번째')

// // promise는 앞에 있는 식이 처리가 되지 않을 경우 뒤에 있는 식도 나오지 않음.
// // first().then((result) => {console.log(result)}).catch(e => console.error(e))
// // promise는 데이터가 올때까지 기다렸다가 처리
first()
    .then((result) => {
        console.log(result)
        return second()
    })
    .then(result => {
        console.log(result)
        return third
    })
    .then(result => console.log(result))
    .catch(e => console.error(e))
