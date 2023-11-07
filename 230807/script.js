const button = document.querySelectorAll('.un')
const list = document.querySelector('.subli')

// console.log(button)

for(let i = 0; i < button.clientHeight; i++){
    button[i].adEventListner('click',() => {
        for(let j = 0; j < button.lenght; j++){
            item[j].classList.remove('active')
        }
        item[i].classList.add('active')
    })
}


// button.addEventListener('click', () =>{
//   list.classList.contains('active')
//   if(list.classList.contains('active')){
//     list.classList.remove('active')
//   }else{
//     list.classList.add('active')
//   }
// })