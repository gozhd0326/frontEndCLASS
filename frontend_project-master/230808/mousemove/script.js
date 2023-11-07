
const dot = document.querySelector('.dot')

window.addEventListener('mousemove', (event) => {
    // .dot의 좌표를 clientX, clientY로 할당
    // console.log('마우스의 X좌표:'+ event.clientX)
    // console.log('마우스의 Y좌표:'+ event.clientY)
    requestAnimationFrame(() => mouseMove(event)) 
    
    
    
    //    event가 매개변수이기 때문에 괄호를 한번 더 처리
    // 일반적으로는  requestAnimationFrame( mouseMove(event))로 작성 
})
// e , evt , event 는 다 같은 말임

const mouseMove = (event) => {
    dot.style.left = event.clientX - (dot.clientWidth / 2) + 'px'
    dot.style.top = event.clientY - (dot.clientHeight / 2) + 'px'
    // dot.classList.add()
}


window.addEventListener('click',() =>{
    const bubble = document.createElement('span')
    bubble.classList.add('bubble')
    dot.append(bubble)
    setTimeout(() => {
        bubble.remove()
    },1000)

})