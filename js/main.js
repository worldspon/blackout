'use strict';

const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    if(window.scrollY >= 10) {
        header.style.backgroundColor = '#8e00f8';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});