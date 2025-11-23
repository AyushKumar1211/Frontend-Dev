const banners = Array.from(document.querySelectorAll('.banner'))
const hideBtn = document.getElementById('hide')
const showBtn = document.getElementById('show')
const slideUp = document.getElementById('slideUp')
const slideDown = document.getElementById('slideDown')
const fadeIn = document.getElementById('fadeIn')
const fadeOut = document.getElementById('fadeOut')
hideBtn.addEventListener('click',()=>{banners.forEach(b=>b.classList.add('hidden'))})
showBtn.addEventListener('click',()=>{banners.forEach(b=>b.classList.remove('hidden'))})
slideUp.addEventListener('click',()=>{banners.forEach(b=>{b.style.transition='height .4s,opacity .4s';b.style.height='0';b.style.opacity='0'})})
slideDown.addEventListener('click',()=>{banners.forEach(b=>{b.style.height='';b.style.opacity='';b.style.transition='height .4s,opacity .4s'})})
function fade(el,show,done){
    el.style.transition='opacity .5s'
    el.style.opacity = show?0:1
    requestAnimationFrame(()=>{el.style.opacity = show?1:0})
    setTimeout(()=>{if(!show) el.classList.add('hidden'); if(show) el.classList.remove('hidden'); if(done) done()},500)
    }
    fadeIn.addEventListener('click',()=>{banners.forEach(b=>fade(b,true))})
    fadeOut.addEventListener('click',()=>{banners.forEach(b=>fade(b,false))})
    let idx = 0
    setInterval(()=>{
        banners.forEach((b,i)=>{b.style.opacity = i===idx?1:0; b.style.transition='opacity .6s'; b.style.display = i===idx?'block':'none'})
        idx = (idx+1) % banners.length
},5000)