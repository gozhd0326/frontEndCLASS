const smdot =document.querySelector('.smdot')
const dot = document.querySelector('.dot')

window.addEventListener('mousemove', (event) => {
    requestAnimationFrame(() => mouseMove(event))
})

const mouseMove = (event) => {
    smdot.style.left = event.clientX - (smdot.clientWidth / 2) + 'px'
    smdot.style.top = event.clientY - (smdot.clientHeight /2)+ 'px'
    dot.style.left = event.clientX -(dot.clientWidth / 2) +'px'
    dot.style.top = event.clientY - (dot.clientHeight / 2) + 'px'
}

window.addEventListener('click',()=>{
    const bubble = document.createElement('span')
    bubble.classList.add('bubble')
    dot.append(bubble)
    setTimeout(() => {
        bubble.remove()
    },1000)
})