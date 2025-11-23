const questions = document.querySelectorAll('.question')
questions.forEach(q=>{
    q.addEventListener('click',()=>{
        const ans = q.nextElementSibling
        ans.style.display = ans.style.display === 'block' ? 'none' : 'block'
    })
    q.addEventListener('mouseenter',()=>{q.classList.add('active')})
    q.addEventListener('mouseleave',()=>{q.classList.remove('active')})
    q.addEventListener('dblclick',()=>{
        document.querySelectorAll('.answer').forEach(a=>a.style.display='none')
    })
})
const inputs = document.querySelectorAll('input')
inputs.forEach(i=>{
    i.addEventListener('focus',()=>{i.parentElement.querySelector('.question').style.background='#eef'})
    i.addEventListener('blur',()=>{i.parentElement.querySelector('.question').style.background=''})
})