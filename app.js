const btnSub = document.getElementById('btnSub')
const containerBtn = document.getElementById('containerBtn')
const container = document.getElementById('container')

btnSub.addEventListener('click', ()=>{
    containerBtn.style.display = 'none'
    container.style.display = 'flex'
})

const closeContainer = ()=>{
    container.style.display = 'none'
    containerBtn.style.display = ''
}