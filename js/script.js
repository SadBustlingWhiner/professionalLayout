

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