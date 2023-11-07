const item = document.querySelectorAll('.itme')
console.log(item)

for (let i = 0; i< item.length;i++) {
    item[i].addEventListener('click', () => {
        for (let j = 0; j <item.length; j++) {
            item[j].classList.remove('active')
        }
        item[i].classList.add('active')
    })
}