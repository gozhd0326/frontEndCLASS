const tap = document.querySelectorAll('.taps')
const contents = document.querySelectorAll('.tabs-tab-panel')
console.log(tap)
console.log(contents)

for(let i = 0; i < tap.length; i++){
    tap[i].addEventListener('click',() => {
        for(let j = 0; j < tap.length; j++){
            tap[j].classList.remove('selected')
            contents[j].classList.remove('show')
        }
        tap[i].classList.add('selected')
        contents[i].classList.add('show')
    })
}

const tapcontents = document.querySelectorAll('.tapcontents')
const contentinside = document.querySelectorAll('.')
console.log(tapcontents)
