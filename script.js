// interactions: reveal, tilt, floating, contact
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show'); }); }, {threshold:0.12});
  reveals.forEach(r=>observer.observe(r));
  document.querySelectorAll('[data-tilt]').forEach(el=>{ el.addEventListener('mousemove', (ev)=>{ const rect=el.getBoundingClientRect(); const x=(ev.clientX-rect.left)/rect.width; const y=(ev.clientY-rect.top)/rect.height; const rx=(y-0.5)*8; const ry=(x-0.5)*-12; el.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`; }); el.addEventListener('mouseleave', ()=> el.style.transform=''); });
  const floats=document.querySelectorAll('[data-float]'); document.addEventListener('mousemove',(ev)=>{ const cx=window.innerWidth/2, cy=window.innerHeight/2; floats.forEach((el,i)=>{ const dx=(ev.clientX-cx)*(0.02+i*0.01); const dy=(ev.clientY-cy)*(0.01+i*0.005); el.style.transform=`translate3d(${dx}px, ${dy}px, 0)`; }); });
  const form=document.getElementById('contactForm'); form.addEventListener('submit', function(e){ e.preventDefault(); alert('Thanks — message captured locally. Replace with server to send.'); form.reset(); });
  window.copyEmail=function(){ navigator.clipboard.writeText('iyervv24@gmail.com').then(()=> alert('Email copied')); };
  window.scrollToTop=()=> window.scrollTo({top:0, behavior:'smooth'});
});