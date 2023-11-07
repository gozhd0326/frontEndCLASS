const title = document.getElementById('title')
const incbutton = document.getElementById('inc')
const decbutton = document.getElementById('dec')
console.log(title,incbutton,decbutton)

// font 기본사이즈
let size = 5;
title.style.fontSize = size + 'px'  // '20px'

// 증가버튼을 눌렀을 때
incbutton.addEventListener('click',() => { 
    // 기본 사이즈에 1을 더한다
    size = size + 5;
    //fontsize에 size값 적용 
    title.style.fontSize = size + 'px';
    // 스타일시트가 요구하는 값
    console.log(size + 'px');
    // title.style.transform ='translateX(' + size + 'px' +')'
    // title.style.transform = 'rotate(' + size + 'deg' +')'
    // title.style.color = `hsl('+ size +', 50%, 50%)`
})

// 감소버튼을 눌렀을때
decbutton.addEventListener('click',() => {
    size = size - 5;
    title.style.fontSize = size + 'px';
    console.log( size + 'px' );
})
decbutton.style.border = ' 3px solid rgb(0,100,200)'
incbutton.style.border = ' 3px solid rgb(0,100,200)'
