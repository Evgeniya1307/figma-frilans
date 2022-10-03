//вызвала карусель с с owl.carousel.js
const owl = $('.owl-carousel');//нахожу эл-нт на стр на который нужно повесить 
owl.owlCarousel({
    center: true, //доб-ет класс центр к центрерованному эл-ту
    loop: true, //чтобы циклить прокрутка
    margin: 30, //между слайдами чтобы был отсуп
    startPosition: 1, //стартовал с 1 индекса
    items: 3, //слайда за раз
  }); //по классу .owl-carousel будет найдена обвёртка и внутри  запуститься карусель



//для кнопок вперёд назад ис-ю Owl Carousel
$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel'); //нахожу кнопку или эл-нт  когда кликаю то переменная моя вызываю метод trigger и передаю в виде строки 
})
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})