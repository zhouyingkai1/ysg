var timer=null;
var bsym=true;
backTop.onclick=function(){
  timer=setInterval(function(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if (scrollTop==0)
    {
      clearInterval(timer);
    }iSpeed=Math.floor(-scrollTop/8);
    bsym=true;
    document.documentElement.scrollTop=document.body.scrollTop=scrollTop+iSpeed;
  },30)
};

window.addEventListener('scroll',function(){
  var scrollTop=document.body.scrollTop;
  if(scrollTop>=160){

    $('.top_nav').css('opacity','1').slideDown(300);
  }else{
    $('.top_nav').slideUp(10);
  }

  if (!bsym)
  {
    clearInterval(timer);
  }
  bsym=false;
  if(scrollTop>=600){
    $('.back').fadeIn();
  }else{
    $('.back').fadeOut();
  }
});

