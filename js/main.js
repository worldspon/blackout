'use strict';

const header = document.querySelector('header');

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuBtnAfter = document.querySelector('.mobile-menu-btn-after');
const mobileMenu = document.querySelector('.mobile-menu');

const historyInner = document.querySelector('.history-inner');
const historyChartBox = document.querySelector('.history-chart-box');
const historyLine = document.querySelector('.history-line');
const historyContent = document.querySelector('.history-content');
const historyLeft = document.querySelector('.history-left-btn');
const historyRight = document.querySelector('.history-right-btn');

const techIcon = document.querySelectorAll('.tech-icon');
const techVal = document.querySelectorAll('.tech-value');

// 첫 로드시 history margin 0 초기화
historyChartBox.style.marginLeft = '0px';

// history inner box, history content width 
let historyInnerWidth = historyInner.offsetWidth;
let historyContentWidth = historyContent.offsetWidth;

// mobile menu 활성화 event
mobileMenuBtn.addEventListener('click', function(){
    mobileMenu.style.display = 'flex';
});

// mobile menu 비활성화 event
mobileMenuBtnAfter.addEventListener('click', function(){

    mobileMenu.style.display = 'none';
})

// history nav event
historyLeft.addEventListener('click', function(){

    let nowMargin = parseInt(historyChartBox.style.marginLeft);

    // 이동한 값 + 이동할 값이 전체 크기보다 크면 남은 크기만큼만 이동시킨다.
    if(nowMargin+historyContentWidth>=0) {
        historyChartBox.style.marginLeft = '0px';
    } else {
        nowMargin += historyContentWidth;
        historyChartBox.style.marginLeft = `${nowMargin}px`;
    }
    
});


// history nav event
historyRight.addEventListener('click', function(){

    let nowMargin = parseInt(historyChartBox.style.marginLeft);

    // 이동한 값 + 이동할 값이 전체 크기보다 크면 남은 크기만큼만 이동시킨다.
    if(-(nowMargin-historyContentWidth)+historyInnerWidth >= historyLine.offsetWidth) {
        let val = -nowMargin+historyInnerWidth - historyLine.offsetWidth;
        nowMargin += val;
        historyChartBox.style.marginLeft = `${nowMargin}px`;
    } else {
        nowMargin -= historyContentWidth;
        historyChartBox.style.marginLeft = `${nowMargin}px`;
    }
});


// scroll시 header background 활성화 및 mobile menu 비활성화
window.addEventListener('scroll', function(){
    if(window.scrollY >= 10) {
        header.style.backgroundColor = '#8e00f8';
    } else {
        header.style.backgroundColor = 'transparent';
    }
    mobileMenu.style.display = 'none';
});


// resize시 history 사이즈 재설정
window.addEventListener('resize', function(){
    historyInnerWidth = historyInner.offsetWidth;
    historyContentWidth = historyContent.offsetWidth;
});



// techicon grayscale 적용 및 click 이벤트 등록
Array.from(techIcon).forEach(function(el, i){

    if(i==0) {
        el.style.filter = 'grayscale(0%)';
        techVal[i].style.display = 'block';  
    } else {
        el.style.filter = 'grayscale(100%)';
        techVal[i].style.display = 'none';
    }

    el.addEventListener('click', function(){

        Array.from(techIcon).forEach(function(eel, j){
            if(!(i==j)) {
                eel.style.filter = 'grayscale(100%)';
                techVal[j].style.display = 'none';
            }
        });

        el.style.filter = 'grayscale(0%)';
        techVal[i].style.display = 'block';  

    });
});