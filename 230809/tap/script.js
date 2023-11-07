const buttons = document.querySelectorAll('.tab-button')
// console.log(button)
const contents = document.querySelectorAll('.tab-item')
console.log(contents)

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         buttons.forEach(button => button.classList.remove('selected'))
//         contents.forEach(content => content.remove('selected'))
//         button.classList.add('selected')
//         contents[index].classList.add('show')

//     })
// })

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        for (let j = 0; j < buttons.length; j++){
            buttons[j].classList.remove('selected')
            contents[j].classList.remove('show')
        }
        buttons[i].classList.add('selected')
        contents[i].classList.add('show')
    })
}