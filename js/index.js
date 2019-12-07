$(document).ready(function() {

//alert("THIS IS A TEST")

  //HOMEPAGE SPLASH IMAGE SWAP

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
  
  //TIMELINE - inline JS on about page
  //when the window scrolls, listen up
  //scrolltop is pixel count between top of viewport and top of page content and height is number of pixels in viewport. adding them tells you pixel count from start of content to bottom of viewport (which changes responsive and as scroll).
  //offset finds the ordered pair (top, left) of element's location relative to start of content
  //if the pixel measure number of top of the element in #id is more than 100+ pixels smaller than the pixel number of viewport bottom, add the CSS class to slide in. 




});

