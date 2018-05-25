$(document).ready(function() {

$('.slider__list').slick();

});


  $('.menu__elem').on('click', function () {
    $('.menu__text').removeClass('menu__text__active');
    $(this).addClass('menu__text__active');
});

$('.menu__elem').on('click', function () {
  $('.menu__text').removeClass('menu__text__active');
  $(this).addClass('menu__text__active');
});