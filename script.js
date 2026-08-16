const cursor=document.querySelector('.cursor');
window.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});

const cube=document.querySelector('.cube');
let dragging=false,lastX=0,lastY=0,rx=-16,ry=0;
cube.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;cube.setPointerCapture(e.pointerId)});
cube.addEventListener('pointermove',e=>{
 if(!dragging)return;
 ry+=(e.clientX-lastX)*.6; rx-=(e.clientY-lastY)*.45;
 rx=Math.max(-65,Math.min(65,rx));
 cube.style.animation='none';
 cube.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;
 lastX=e.clientX;lastY=e.clientY;
});
['pointerup','pointercancel'].forEach(ev=>cube.addEventListener(ev,()=>dragging=false));

const items=document.querySelectorAll('.section,.experience article,.skill-grid>div,.projects article,.education>div');
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
items.forEach(x=>{x.classList.add('reveal');io.observe(x)});
