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
  
  //TIMELINE
  //when the window scrolls, listen up
  //scrolltop is pixel count between top of viewport and top of page content and height is number of pixels in viewport. adding them tells you pixel count from start of content to bottom of viewport (which changes responsive and as scroll).
  //offset finds the ordered pair (top, left) of element's location relative to start of content
  //if the pixel measure number of top of the element in #id is more than 100+ pixels smaller than the pixel number of viewport bottom, add the CSS class to slide in. 


  $(window).scroll(function () {
    var bottomofwindow = $(window).scrollTop() + $(window).height();

    if (bottomofwindow >= ($("#ScrollShowHide1").offset().top + 100)) {
      $("#ScrollShowHide1").addClass("ahrightslide");
      $("#ScrollShowHide1").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide2").offset().top + 100)) {
      $("#ScrollShowHide2").addClass("ahrightslide");
      $("#ScrollShowHide2").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide3").offset().top + 100)) {
      $("#ScrollShowHide3").addClass("ahrightslide");
      $("#ScrollShowHide3").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide4").offset().top + 100)) {
      $("#ScrollShowHide4").addClass("ahrightslide");
      $("#ScrollShowHide4").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide5").offset().top + 100)) {
      $("#ScrollShowHide5").addClass("ahrightslide");
      $("#ScrollShowHide5").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide6").offset().top + 100)) {
      $("#ScrollShowHide6").addClass("ahrightslide");
      $("#ScrollShowHide6").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide7").offset().top + 100)) {
      $("#ScrollShowHide7").addClass("ahrightslide");
      $("#ScrollShowHide7").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide8").offset().top + 100)) {
      $("#ScrollShowHide8").addClass("ahrightslide");
      $("#ScrollShowHide8").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide9").offset().top + 100)) {
      $("#ScrollShowHide9").addClass("ahrightslide");
      $("#ScrollShowHide9").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide10").offset().top + 100)) {
      $("#ScrollShowHide10").addClass("ahrightslide");
      $("#ScrollShowHide10").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide11").offset().top + 100)) {
      $("#ScrollShowHide11").addClass("ahrightslide");
      $("#ScrollShowHide11").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide12").offset().top + 100)) {
      $("#ScrollShowHide12").addClass("ahrightslide");
      $("#ScrollShowHide12").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide13").offset().top + 100)) {
      $("#ScrollShowHide13").addClass("ahrightslide");
      $("#ScrollShowHide13").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide14").offset().top + 100)) {
      $("#ScrollShowHide14").addClass("ahrightslide");
      $("#ScrollShowHide14").removeClass("ahtimehide");
    }

    if (bottomofwindow >= ($("#ScrollShowHide15").offset().top + 100)) {
      $("#ScrollShowHide15").addClass("ahrightslide");
      $("#ScrollShowHide15").removeClass("ahtimehide");
    }

  });

});

