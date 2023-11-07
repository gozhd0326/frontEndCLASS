const title = document.getElementById('title')
console.log(title.textContent)
const content = document.getElementById('content')
// const content = document.getElementById('content') = 선언함
console.log(content.textContent)
content.style.color ='black'
// 인라인 속성이 순서에 상관없이 우선적으로 적용됨
title.classList.add('titlestyle')
content.classList.add('active')
// innerHTML, innerText, textContent
// innerHTML : 태그를 넣을 수 있다.
// title.innerHTML = '<span>span 태그 적용</span>'
// title.innerText = '<span>태그 적용</span>'
// title.textContent = '<span>태그 적용</span>'

// content.textContent = '<span>span 태그 적용</span>'
// content.innerText = '<span>span 태그 적용</span>'
// content.innerHTML = '<span>span 태그 적용</span>'\

title.style.color ='rgb(150,180,200)'
title.style.fontSize = '100px'
title.style.fontWeight = '900px'
title.style.border = '2px solid rgb(100,100,100)'

