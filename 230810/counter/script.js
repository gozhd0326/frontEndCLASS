const dataList = document.querySelectorAll('[data-counter]')

// for(let i =0; i<dataList.length;i++){
//     // 'dataset' == 'data-'
//     const target = dataList[i].dataset.counter;
//     let index = 0;
//     const timerText = dataList[i].querySelector('.timer')
// const step = Math.floor(target/500)
// // setInterval
// // index가 target이 될때까지 증가
// 예시) target:3600,
// index가 3600이 될때까지 증가

dataList.forEach(data => {
    let index = 0;
    const target = data.dataset.counter;
    const timerText =data.querySelector('.timer')
    const step =Math.floor(target / 400)
    console.log(step)
setInterval(()=>{
    if(index < target){
        // index++
        index = index + step
        console.log(index)
        timerText.textContent = index
    }
    // console.log(index)
}, 10)
})