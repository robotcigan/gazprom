'use strict';

$(document).ready(function () {

  if (window.location.pathname === '/gazprom/') {
    $('nav.navigation').hide();
  }
  if (window.location.pathname === '/gazprom/index.html') {
    $('nav.navigation').hide();
  }

  // Плавный скролл
  $("html").easeScroll();

  $('.hero__slider').slick({
    dots: false,
    arrows: false
  });

  // Обычный слайдер (главная)
  $('.slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  // текстовый слайдер внутренних страниц
  $('.inner-text-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  // мобильное меню
  $('.mobile-menu-toggle').on('click', function () {
    $(this).toggleClass('mobile-menu-toggle--active');
    $('.mobile-menu').slideToggle();
  });

  $('.mobile-navigation__arrow').on('click', function () {
    $(this).parent().find('.mobile-navigation__body').slideToggle();
    $(this).toggleClass('mobile-navigation__arrow--active');
  });

  // Поля
  $('.form-control input').on('keyup change', function () {
    formValidation($(this));
  });
  $('.form-control select').on('keyup change', function () {
    formValidation($(this));
  });
  $('.form-control select').on('focusout', function () {
    $(this).parent().find('.form-control__icon').removeClass('form-control__icon--active');
  });
  $('.form-control textarea').on('keyup change', function () {
    formValidation($(this));
  });
  // Стрелочка селекта при фокусе
  $('.form-control select').on('focus', function () {
    $(this).parent().find('.form-control__icon').toggleClass('form-control__icon--active');
  });

  function formValidation(self) {
    if (self.val().length || self.text().length) {
      self.parent().find('label').addClass('form-control__label--active');
    } else {
      self.parent().find('label').removeClass('form-control__label--active');
    }
  }

  // Датапикер
  $('.datepicker').flatpickr({
    dateFormat: "d.m.Y",
    altInput: true
  });

  // Баян
  $('.accordion .accordion__header').on('click', function () {
    $(this).find('.accordion__arrow').toggleClass('accordion__arrow--active');
    $(this).closest('.accordion').find('.accordion__body').slideToggle();
  });
});