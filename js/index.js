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



});

