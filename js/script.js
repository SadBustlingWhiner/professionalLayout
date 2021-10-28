

let button = document.getElementById('burger');

let navigation = document.getElementById('menu');

// let wrp = document.getElementById('wrp');

button.addEventListener('click', function(){
    navigation.classList.toggle('header__nav--show');
    // wrp.classList.toggle('display-block');
})

// let card = document.getElementById('card');

// let cart = document.getElementById('to_cart');

// card.addEventListener('click', function(){
//     cart.classList.toggle('catalog__item-cart');
// })

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})
var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
  // do something...
})