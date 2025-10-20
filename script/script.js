const swiper = new Swiper('.card-wraper', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dyanmicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1020: {
      slidesPerView: 3
    },
  }
});
