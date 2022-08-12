$(document).ready(function(){
  // NAV
  $("#GNB > ul > li").hover(function(){
    $(this).find('.sub').stop().slideDown(200);
  },function(){
    $(this).find('.sub').stop().slideUp(200);
  });

  // slide
  function slidemove(){
    let smv=$(".slide-con").height();
    $(".slide-box2").animate({
      top:-smv
    },function(){
      $(".slide-con:first-child").appendTo(".slide-box2");
      $(".slide-box2").css({
        top:0
      })
    });  
  }
  setInterval(slidemove, 3000);

  // pop
  $("#pop").hide();
  $(".not-box ul li:first-child").click(function(){
    $("#pop").show();    
  });
  $("#pop button").click(function(){
    $("#pop").hide();    
  });


});