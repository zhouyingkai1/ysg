window.addEventListener('scroll',function(){
  var scrollTop=document.body.scrollTop;
  if(scrollTop>=160){

    $('.top_nav').css('opacity','1').slideDown(300);
    console.log(1);
  }else{
    $('.top_nav').slideUp(10);
    console.log(2);
  }
});
