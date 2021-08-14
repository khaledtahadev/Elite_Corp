$(function () {
  // Carousel Item Height
  var upperHeight = $(".upper-nav").innerHeight(),
    navHeight = $(".navbar").innerHeight();

  $(".home-carousel, .home-carousel .carousel-item").height(
    $(window).height() - (upperHeight + navHeight)
  );

  // Carousel Options
  $(".carousel").carousel({
    interval: false
    // wrap: false,
  });

  $(".stop").click(function () {
    $(".carousel").carousel("pause");
  });

  $(".stop2").click(function () {
    $(".carousel").carousel("cycle");
  });

  $(".stop3").click(function () {
    $(".carousel").carousel("dispose");
  });

  // Shuffle
  var imgShow = $(".shuffle-img img");

  $(".shuffle li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    imgShow.fadeOut(200).delay(200);

    if ($(this).data("shuffle") != "all") {
      imgShow
        .parent()
        .find("." + $(this).data("shuffle"))
        .fadeIn(200);
    } else {
      imgShow.fadeIn(200);
    }
  });

});