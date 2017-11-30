

$(document).ready(function () {

  var swiper = new Swiper('.swiper-box1', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
    },
  });

  var swiper = new Swiper('.swiper-box2', {
    spaceBetween: 1,
    slidesPerView: 1,
    //autoplay: {
    //  delay: 2500,
    // },
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});


