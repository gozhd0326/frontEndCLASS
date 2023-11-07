const prev = document.getElementById('prev')
const next = document.getElementById('next')
const slider = document.querySelector('.slider')
const sliderWidth = slider.clientWidth
// clientWidth,Height : padding 포함한 길이
// offsetWidth,Height: padding, border, scrollbar 폭까지 포함한 값
const child = document.querySelectorAll('.slider-item')
console.log(sliderWidth)

let index = 0;
prev.addEventListener('click', () => {
    if(index > 0){
        // index값이 0보다 크면
        index--;
        slider.style.transform = `translate(-${(sliderWidth * index)}px)`;
    } else {
        index = child.length -1;
        slider.style.transform = `translateX(-${(sliderWidth * index)}px)`;
    }


})
next.addEventListener('click', () => {
    // index가 child.length 보다 작다면
    // slider 0, 1, 2, 4 === slider.length = 4
    if (index < child.length - 1) {
        index++;
        console.log(index)
        // slider.style.transform = 'translateX(-'+ sliderWidth * index + 'px)'
        // 템플릿 표현식, 템플릿 리터럴
        slider.style.transform = `translateX(-${(sliderWidth * index)}px)`;
    } else {
        // index 번호가 마지막 요소와 같다면
        index = 0;
        slider.style.transform = `translateX(-${(sliderWidth * index)}px)`;
        console.log(index)
    }

}
)