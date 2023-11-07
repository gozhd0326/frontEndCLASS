const item = document.querySelectorAll('.grid-item')
console.log(item[0]) //클릭할 때마다 class를 추가/삭제
console.log(item[1])
console.log(item[2])
console.log(item[3])
console.log(item[4])

// 기본형태
// for(초기화; 조건; 증가/감소){
//     해야할 기능을 적어준다.
// }

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', () => {
        // 모든 요소에서 'active' 삭제
        for (let j = 0; j < item.length; j++) {
            item[j].classList.remove('active')
        }
        //'active'클래스를 클릭한 요소에다가 추가.
        item[i].classList.add('active')

    })
}