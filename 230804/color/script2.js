const body = document.querySelector('body')
const button = document.querySelector('#button')
// console.log(color)
// console.log(button)

button.addEventListener('click', () => {
    if (body.classList.contains('active')) {
        body.classList.remove('active')
        // body.style.backgroundColor = 'rgb(135,206,235)'
        // body.style.transition = 'all 0.3s ease-in-out'
    }

    else {
        body.classList.add('active')
        // body.style.backgroundColor = 'rgb(255, 192, 203)'
        // body.style.transition = 'all 0.3 ease-in-out'
    }

    // 삼항 연산자
    // 조건 ? 참 : 거짓
    // contianer.classList.contains('active') ? container.
    // classList .remove('active') : container.classList.add('active')
    //active가 있으면 삭제하고 없으면 추가해주는 식과 동일
    // container.classList.toggle('active')
})