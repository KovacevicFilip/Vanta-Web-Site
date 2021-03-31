$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});
$('.home').click(function(){
   $('#about').fadeOut(10);
   $('#projects').fadeOut(10);
   $('#contact').fadeOut(10);
   $('#mainHeading').slideDown(700);
})
$('.about').click(function(){   
   $('#mainHeading').fadeOut(10);
   $('#projects').fadeOut(10);
   $('#contact').fadeOut(10);
   $('#about').slideDown(700);
})
$('.contact').click(function(){
   $('#mainHeading').fadeOut(10);
   $('#about').fadeOut(10);
   $('#projects').fadeOut(10);
   $('#contact').slideDown(700);
})
$('.projects').click(function(){
   $('#mainHeading').fadeOut(10);
   $('#about').fadeOut(10);
   $('#contact').fadeOut(10);
   $('#projects').slideDown(700);
})
