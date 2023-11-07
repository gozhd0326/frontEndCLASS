const trigger = document.getElementById('trigger')
const sidebar = document.getElementById('sidebar')

trigger.addEventListener('click',() =>{
    if(sidebar.classList.contains('open')){
        sidebar.classList.remove('open')
        trigger.textContent = '열기'
    } else {
        sidebar.classList.add('open')
        trigger.textContent = '닫기'
    }
    // sidebar.classList.toggle('open')
})