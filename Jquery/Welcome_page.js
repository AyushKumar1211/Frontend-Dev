const greetingEl = document.getElementById('greeting')
const welcomeEl = document.getElementById('welcomeMsg')
const changeBtn = document.getElementById('changeGreeting')
const toggleBtn = document.getElementById('toggleWelcome')
const greetLink = document.getElementById('greetLink')
function timeGreeting(){
    const h = new Date().getHours()
    if(h<12) return 'Good Morning'
    if(h<17) return 'Good Afternoon'
    return 'Good Evening'
}
window.addEventListener('load',()=>{
    greetingEl.textContent = `${timeGreeting()}, Visitor!`
})
changeBtn.addEventListener('click',()=>{
    greetingEl.textContent = 'Keep going — small steps every day!'
})
toggleBtn.addEventListener('click',()=>{
    welcomeEl.classList.toggle('hidden')
})
greetingEl.addEventListener('click',()=>{
    alert(greetingEl.textContent)
})
greetLink.addEventListener('click',(e)=>{e.preventDefault();alert('Greeting clicked: '+greetingEl.textContent)})