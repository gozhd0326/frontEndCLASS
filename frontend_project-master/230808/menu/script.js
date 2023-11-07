const menu = ['짜장면', '짬뽕밥', '콩국수', '라면', '떡볶이', '햄버거' , '피자' , '국밥']
// console.log(menu[0])
// console.log(menu[1])
// console.log(menu[2])
// console.log(menu[3])

// console.log(menu[random])
const button = document.getElementById('button')
const result = document.getElementById('result')
button.addEventListener('click', () => {
    let random = Math.floor(Math.random() * menu.length)
    result.textContent = menu[random]
})