const count = document.getElementById('count')
const button = document.getElementById('button')
const button2 = document.getElementById('button2')
console.log(button)
console.log(count)
console.log(button2)
// button.addEventListener('click', function() {})
button.addEventListener('click', () => { count.textContent = value++ })
button2.addEventListener('click',() => { count.textContent = --value})
let value = 0
// button.addEventListener : event를 감지
//**button.addEventListener('click', function() {})*/
/**addEventListener('click', () =>{} )*이 같음*/

// 함수에 매게변수를 넣지 않아도 실행이 된다.

function Message(){return console.log('hellow')
}
Message()

const showMessage = () => {return console.log('hi')}
showMessage()

