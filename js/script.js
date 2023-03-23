$(document).ready(function () {
  $(".slider-blocks").slick({
    autoplay: true,
  });

  let adaptBtn = $(".top-nav_button");
  let adaptMenu = $(".top-nav_menu");
  let btnScroll = $(".btn-scroll");
  let menuScroll = $(".content-block6-item_none");
  let plus = $(".fa-plus");

  adaptBtn.on("click", function (event) {
    event.preventDefault();
    adaptMenu.toggle("top-nav_menu__adapt");
  });

  btnScroll.on("click", function () {
    menuScroll.slideToggle(300);
    plus.toggle();
  });
});
