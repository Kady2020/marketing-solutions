$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".header,.menu,.burger").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $('.menu__link,.header__logo').click(function (event) {
    $(".header,.menu,.burger").removeClass('active');
    $('body').removeClass('lock');
  });
});
