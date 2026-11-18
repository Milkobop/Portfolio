// Accessible, client-side project filtering. All projects remain visible without JavaScript.
document.addEventListener('DOMContentLoaded',function(){
 const controls=document.querySelectorAll('[data-project-filter]');
 const cards=Array.from(document.querySelectorAll('.game-grid > a.card-with-box'));
 const counter=document.querySelector('[data-project-count]');
 if(!controls.length||!cards.length)return;
 controls.forEach(function(button){
  button.addEventListener('click',function(){
   const filter=button.dataset.projectFilter;
   controls.forEach(function(b){b.setAttribute('aria-pressed',String(b===button));});
   let shown=0;
   cards.forEach(function(card){
    const tags=(card.dataset.categories||'').split(' ');
    const visible=filter==='all'||tags.includes(filter);
    card.hidden=!visible;
    if(visible)shown++;
   });
   if(counter)counter.textContent=shown+' project'+(shown===1?'':'s')+' shown';
  });
 });
 if(counter)counter.textContent=cards.length+' projects shown';
});
