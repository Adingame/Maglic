"use strict"; //Checking webp support

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
}); //Header-Burger

$(document).ready(function () {
  $('.headerBurger').click(function (event) {
    $('.headerBurger,.headerTopMenu-List').toggleClass('active');
    $('.headerCenter').toggleClass('hide');
    $('body').toggleClass('lock');
  });
}); //Header-scroll

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('.headerBurger').click();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
}); //If you need to use header, you need to create a separate slider responsible for header

/*
function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}
*/
//Testimonial-Slider

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sliderItem");
  var dots = document.getElementsByClassName("sliderDot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeDot";
} //Pricing And Plan


document.addEventListener("DOMContentLoaded", function () {
  autoHeight();
});

function autoHeight() {
  var height = $('.pricingItem').height();
  $('.pricingItem').height(height);
}