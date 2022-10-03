//вызвала карусель с с owl.carousel.js
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true, //доб-ет класс центр к центрерованному эл-ту
    loop: true, //чтобы циклить прокрутка
    margin: 30, //между слайдами чтобы был отсуп
    startPosition: 1, //стартовал с 1 индекса
    items: 3, //слайда за раз
  }); //по классу .owl-carousel будет найдена обвёртка и внутри  запуститься карусель
});



//для кнопок вперёд назад ис-ю Owl Carousel