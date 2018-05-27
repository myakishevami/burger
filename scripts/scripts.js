$(document).ready(function() {

$('.slider__list').slick();

$('#fullpage').fullpage({
  menu: "#myMenu"
});

$('.acco__elem').on('click', function (e) {
	e.preventDefault()
  $('.acco__elem').removeClass('acco__elem__active');
  $(this).addClass('acco__elem__active');
});

$('.menu__elem').on('click', function (e) {
	e.preventDefault()
  $('.menu__elem').removeClass('menu__elem__active');
  $(this).addClass('menu__elem__active');
});

$('.btn_reviews').on('click', function (e) {
	e.preventDefault()
  $('.reviews-popups').addClass('reviews-popups__active');
});

$('.reviews-popups__close').on('click', function (e) {
	e.preventDefault()
   $('.reviews-popups').removeClass('reviews-popups__active');
});

});
