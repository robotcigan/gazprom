$(document).ready(function() {

  $('#chartdiv a').hide();

  if(window.location.pathname === '/gazprom/') {
    $('nav.navigation').hide();
  }
  if(window.location.pathname === '/gazprom/index.html') {
    $('nav.navigation').hide();
  }

  // Плавный скролл
  $("html").easeScroll();

  // кастомный скрол
  if ( $('.news__list').length ) {
    $('.news__list').mCustomScrollbar({
      theme: "dark",
      mouseWheelPixels: 350
    });
  }

  $('.hero__slider').slick({
    dots: true,
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
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // мобильное меню
  $('.mobile-menu-toggle').on('click', function () {
    $(this).toggleClass('mobile-menu-toggle--active');
    $('.mobile-menu').stop().slideToggle();
  });

  $('.mobile-navigation__arrow').on('click', function () {
    $(this).parent().find('.mobile-navigation__body').stop().slideToggle();
    $(this).toggleClass('mobile-navigation__arrow--active');
  });

  // Поля
  $('.form-control input').on('keyup change', function () {
    formValidation($(this));
  });
  $('.form-control select').on('keyup change', function () {
    formValidation($(this));
  });
  $('.form-control select').on('focusout', function() {
    $(this).parent().find('.form-control__icon').removeClass('form-control__icon--active');
  })
  $('.form-control textarea').on('keyup change', function () {
    formValidation($(this));
  });
  // Стрелочка селекта при фокусе
  $('.form-control select').on('focus', function() {
    $(this).parent().find('.form-control__icon').toggleClass('form-control__icon--active');
  });

  function formValidation (self) {
    if ( self.val().length || self.text().length ) {
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

  // Телефон маска
  $('.phone-mask').inputmask({
    mask: "+7 (999) 999 99 99",
    showMaskOnHover: false
  });

  // Баян
  $('.accordion .accordion__header').on('click', function () {
    $(this).find('.accordion__arrow').toggleClass('accordion__arrow--active');
    $(this).closest('.accordion').find('.accordion__body').slideToggle();
  });

  // Модальное окно
  $('.modal-open').magnificPopup({
    type: 'inline'
  });

  // Поиск
  $('.search__icon').on('click', function (e) {
    if ( $(this).hasClass('search__icon--disabled') ) {
      e.preventDefault();
      $(this).removeClass('search__icon--disabled');
      $('.search').addClass('search--active');
    }
  });
  $('.search__close').on('click', function () {
    $(this).closest('.search').removeClass('search--active');
    $('.search__icon').addClass('search__icon--disabled');
  });

  // Закрытие блока по нажатию вне его области
  $(document).on('click', function(event) {
    $('body').addClass('body--cursor-pointer');
    let div = $(".search");
    if ( !$(event.target).closest(div).length ) {
      div.removeClass('search--active');
      $('.search__icon').addClass('search__icon--disabled');
      $('body').removeClass('body--cursor-pointer');
    }
  });

  // $('.table--special td').each(function () {
  //   let info = $(this).data('info');
  // })

});