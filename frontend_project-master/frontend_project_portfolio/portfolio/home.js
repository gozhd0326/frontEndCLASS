const button = document.querySelector('.button')

button.addEventListener('click', () => {
    if (button.classList.contains('active')) {
        button.classList.remove('active')
    } else {
        button.classList.add('active')
    }
})
// const body = document.querySelectorAll('body')
// const themeswitch = document.querySelector('.theme-switcher')
// const night = document.querySelector('.night')
// const day = document.querySelector('.day')

// themeswitch.addEventListener('click', () => {
//     if (body.classList.contains('dark')) {
//         body.classList.remove('dark')
//         // body.classList.add('light')
//         themeswitch.classList.add('day')
//     } else {
//         // body.classList.remove('light')
//         body.classList.add('dark')
//         themeswitch.classList.add('moon')
//     }
//     // if (themeswitch.classList.contains('dark')) {
//     //     themeswitch.classList.remove('dark')
//     // } else {
//     //     themeswitch.classList.remove('day')
//     // }
// })



