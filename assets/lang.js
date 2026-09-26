(function(){
  var saved=null;try{saved=localStorage.getItem('lang')}catch(e){}
  var q=new URLSearchParams(location.search).get('lang');
  var lang=q==='en'||q==='ru'?q:(saved||((navigator.language||'').indexOf('ru')===0||(navigator.language||'').indexOf('kk')===0?'ru':'en'));
  function set(l){document.documentElement.setAttribute('data-lang',l);document.documentElement.lang=l;
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l)});
    try{localStorage.setItem('lang',l)}catch(e){}}
  set(lang);
  document.addEventListener('DOMContentLoaded',function(){set(lang);
    document.querySelectorAll('.lang button').forEach(function(b){b.onclick=function(){lang=b.dataset.l;set(lang)}})});
})();
