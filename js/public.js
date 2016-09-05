var timer=null;
var bsym=true;   //判断是用户拖动滚动条 还是 返回顶部按钮使滚动条滚动
backTop.onclick=function(){  //返回顶部
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

window.addEventListener('scroll',function(){ //页面滚动悬浮导航显示隐藏
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
window.addEventListener('load',function(){  //联系我们交谈框显示隐藏
  $('.concat_btn').click(function(){
    $(this).fadeOut();
    $('.concat').fadeIn();
  });
  $('.close').click(function(){
    $('.concat').fadeOut();
    $('.concat_btn').fadeIn();
  })
});
