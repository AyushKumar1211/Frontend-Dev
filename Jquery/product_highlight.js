const products = document.querySelectorAll('.product')
products.forEach(p=>{
    p.addEventListener('click',()=>{
        products.forEach(x=>x.classList.remove('highlight'))
        p.classList.add('highlight')
        if(p.dataset.stock==='out') alert(p.querySelector('h3').textContent + ' is out of stock')
        })
    p.addEventListener('mouseenter',()=>{
        p.querySelector('.details').style.display = 'block'
    })
    p.addEventListener('mouseleave',()=>{
        p.querySelector('.details').style.display = 'none'
    })
    const fav = p.querySelector('.fav')
    fav.addEventListener('click',(e)=>{
        e.stopPropagation()
        fav.classList.toggle('selected')
        fav.textContent = fav.classList.contains('selected') ? '♥' : '♡'
    })
})