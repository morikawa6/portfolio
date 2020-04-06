$(function(){
  $('.header,.mainText,.contentsTitle,.item,.museumExample,.teamMember,.flexalign,.fade').css('visibility','hidden');
  $(window).scroll(function(){
  var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
    $('.mainText,.contentsTitle,.item,.museumExample,.teamMember,.flexalign,.fade').each(function(){
      var targetPosition = $(this).offset().top;
      if(topWindow > targetPosition - windowHeight + 220){
        $(this).addClass("fadeInUp");
      }"swing"
    });
  });

  setTimeout(function(){
    $(".header").addClass("anime1");
  },1500,"swing");

  // $(".menubox").click(function () {
  //   if ($("#label1").prop("checked") == true) {
  //     $(".hidden-show").animate( { width: 'toggle' }, 'slow' );
  //   }
  // });

  $("#label1").click(function(){
    $(".hidden-show").animate( { width: 'toggle' },300 );
  } );

  $(".hiddenTitle").click(function(){
    $("html,body").animate({scrollTop:$('#Top').offset().top},1500,"swing");
    $(".hidden-show").css({display:"none"});
  });
  $(".hl1").click(function(){
    $("html,body").animate({scrollTop:$('#Whatwedo').offset().top},1500,"swing");
    $(".hidden-show").css({display:"none"});
  });
  $(".hl2").click(function(){
    $("html,body").animate({scrollTop:$('#Museum').offset().top},1500,"swing");
    $(".hidden-show").css({display:"none"});
  });
  $(".hl3").click(function(){
    $("html,body").animate({scrollTop:$('#Team').offset().top},1500,"swing");
    $(".hidden-show").css({display:"none"});
  });
  $(".hl4").click(function(){
    $("html,body").animate({scrollTop:$('#Wanted').offset().top},1500,"swing");
    $(".hidden-show").css({display:"none"});
  });
  $(".hl5").click(function(){
    $("html,body").animate({scrollTop:$('#Contact').offset().top},1500,"swing");
    $(".hidden-show").css({display:"none"});
  });

  

});
