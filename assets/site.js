
(function(){
 var els=document.querySelectorAll('.rv');
 if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});}
 else{var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)});}
 var b=document.querySelector('.burger'),h=document.querySelector('.hdr');if(b&&h){b.addEventListener('click',function(){var o=h.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'\u00d7':'\u2630'});}
 var f=document.getElementById('devis');
 if(f){f.addEventListener('submit',function(ev){ev.preventDefault();
  var g=function(i){return (document.getElementById(i)||{}).value||''};
  var t='Bonjour, demande de devis. Nom : '+g('nom')+'. Commune : '+g('commune')+'. Besoin : '+g('besoin')+'. '+g('msg');
  window.location.href='sms:+33615403279?&body='+encodeURIComponent(t);});}
})();
