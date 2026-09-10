const menu=document.querySelector('.menu'), mobile=document.querySelector('.mobile-nav');
menu.addEventListener('click',()=>{mobile.classList.toggle('open');menu.setAttribute('aria-expanded',mobile.classList.contains('open'))});
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
