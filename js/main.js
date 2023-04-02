const navBack = document.querySelector('.nav-btn-back');
const mainBtn = document.querySelector('.main-link');
const achievBtn = document.querySelector('.achiev-link');
const contactsBtn = document.querySelector('.contacts-link');
const trainingBtn = document.querySelector('.training-link');
const body = document.body

achievBtn.addEventListener('mouseover', () =>{
    navBack.classList.remove('main-back')
    navBack.classList.add('achiev-back')
    navBack.classList.remove('training-back')
    navBack.classList.remove('contacts-back')
    navBack.classList.remove('training-back')
});
contactsBtn.addEventListener('mouseover', () =>{
    navBack.classList.remove('achiev-back')
    navBack.classList.add('contacts-back')
    navBack.classList.remove('main-back')
    navBack.classList.remove('training-back')
});
trainingBtn.addEventListener('mouseover', () => {
    navBack.classList.remove('contacts-back')
    navBack.classList.add('training-back')
    navBack.classList.remove('main-back')
    navBack.classList.remove('achiev-back')
});
mainBtn.addEventListener('mouseover', () => {
    navBack.classList.add('main-back')
    navBack.classList.remove('achiev-back')
    navBack.classList.remove('contacts-back')
    navBack.classList.remove('training-back')
});


const prevBtn = document.querySelector('.prev-btn'),
nextBtn = document.querySelector('.next-btn'),
slide = document.querySelectorAll('.slide'),
activeImg = document.querySelector('.people-img'),
activeOutput = document.querySelector('.people-output'),
activeTitle = document.querySelector('.people-title'),
activeRecord = document.querySelector('.people-record'),
active = document.querySelector('.active');

let index = 0;

let activeImgs;
let slides;
const activeSlide = (n) => {
    for(slides of slide ){
        slides.classList.remove('active');
        activeImg.classList.remove('active-img');
    }
    slide[n].classList.add('active');
    activeImg[n].classList.add('active-img');
    activeOutput[n].classList.add('active-output');
};

const nextSlide = () => {
    if(index === slide.length - 1) {
        index = 0;
        activeSlide(index);
    }
    else {
        index++;
        activeSlide(index);
    };
};

const prevSlide = () => {
    if(index === 0) {
        index = slide.length - 1;
        activeSlide(index);
    }
    else {
        index--;
        activeSlide(index);
    };
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

let index2 = 0;

const activeSlide2 = (a) => {
    for(activeImgs of activeImg ){
        activeImgs.classList.remove('active-img');
    }
    activeImg[a].classList.add('active-img');
};

const nextSlide2 = () => {
    if(index2 === activeImg.length - 1) {
        index2 = 0;
        activeSlide2(index2);
    }
    else {
        index2++;
        activeSlide2(index2);
    };
};

const prevSlide2 = () => {
    if(index2 === 0) {
        index2 = activeImg.length - 1;
        activeSlide2(index2);
    }
    else {
        index2--;
        activeSlide2(index2);
    };
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


function slowScroll(id) { 
    let offset = 0;
    $('html, body').animate({ 
        scrollTop: $(id).offset().top - offset 
    }, 1000);
    return false; 
};

const menuBurger = document.querySelector('.menu-burger');
const navigation = document.querySelector('.nav');   
const navBtns = document.querySelector('.nav-btns');
const burgerLogo = document.querySelector('.burger-logo');

menuBurger.addEventListener('click', function() {
    navigation.classList.toggle ('active_menu');
    menuBurger.classList.toggle('active_menu');
    body.classList.toggle('lock');
    navBtns.classList.toggle('active-btns');
    burgerLogo.classList.toggle('active-btns')
});

function hideMenu(){
    body.classList.remove('lock');
    menuBurger.classList.remove('active_menu');
    navigation.classList.remove('active_menu');
    navBtns.classList.remove('active-btns')
};

mainBtn.addEventListener('click', hideMenu);
achievBtn.addEventListener('click', hideMenu);
contactsBtn.addEventListener('click', hideMenu);
trainingBtn.addEventListener('click', hideMenu);
