// bootstrap 참고
const trigger = document.getElementById('trigger')
const sidebar = document.getElementById('sidebar')
const overlay = document.querySelector('.overlay')

trigger.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        trigger.textContent = '열기'
    } else {
        sidebar.classList.add('open')
        overlay.classList.add('open')
        trigger.textContent = '닫기'
    }
    // sidebar.classList.toggle('open')
})

overlay.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        trigger.textContent = '열기'
    }
})

