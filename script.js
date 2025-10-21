// общие функции
document.addEventListener('DOMContentLoaded', ()=> {
  // активный пункт навигации
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href') || '';
    if(href === path) a.classList.add('active');
  });
});
