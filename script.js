document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));
const cards=document.querySelectorAll(".card");
cards.forEach(c=>c.addEventListener("mousemove",e=>{const r=c.getBoundingClientRect();const x=(e.clientX-r.left)/r.width*100;const y=(e.clientY-r.top)/r.height*100;c.style.background=`radial-gradient(circle at ${x}% ${y}%,rgba(80,90,130,.55),rgba(19,23,43,.75) 55%)`}));
cards.forEach(c=>c.addEventListener("mouseleave",()=>c.style.background=""));
