$(document).ready(function() {

//alert("THIS IS A TEST")

  //HOMEPAGE SPLASH IMAGES

  $("#splashswapold").click(function() {
    $(this).hide();
    $("#splashswapnew").show();
  });

  $("#splashswapnew").click(function() {
    $(this).hide();
    $("#splashswapold").show();
  });

  //SHOP CATEGORY FILTERS

  $("#apparellink").click(function() {
    $(".apparelcat").show();
    $(".musiccat").hide();
    $(".thingeecat").hide();
    $("#apparellink").addClass("ahactivecat");
    $("#alllink").removeClass("ahactivecat");
    $("#musiclink").removeClass("ahactivecat");
    $("#thingeeslink").removeClass("ahactivecat");
  });

  $("#musiclink").click(function() {
    $(".apparelcat").hide();
    $(".musiccat").show();
    $(".thingeecat").hide();
    $("#musiclink").addClass("ahactivecat");
    $("#alllink").removeClass("ahactivecat");
    $("#apparellink").removeClass("ahactivecat");
    $("#thingeeslink").removeClass("ahactivecat");
  });

  $("#thingeeslink").click(function() {
    $(".apparelcat").hide();
    $(".musiccat").hide();
    $(".thingeecat").show();
    $("#thingeeslink").addClass("ahactivecat");
    $("#alllink").removeClass("ahactivecat");
    $("#apparellink").removeClass("ahactivecat");
    $("#musiclink").removeClass("ahactivecat");
  });

  $("#alllink").click(function() {
    $(".apparelcat").show();
    $(".musiccat").show();
    $(".thingeecat").show();
    $("#alllink").addClass("ahactivecat");
    $("#musiclink").removeClass("ahactivecat");
    $("#apparellink").removeClass("ahactivecat");
    $("#thingeeslink").removeClass("ahactivecat");
  });
  
  //TIMELINE 
  //scrolltop is distance between top of element and top of viewport
  //pos.top
  //windowscrollfunction is event when 
    

  var timeline1 = $("#ScrollShowHide");
  var pos = timeline1.position();
  $(window).scroll(function () {
    var bottomofwindow = $(window).scrollTop() + $(window).height();
    if (bottomofwindow >= (pos.top + 100)) {
      timeline1.addClass("ahrightslide");
    }
  });

});

