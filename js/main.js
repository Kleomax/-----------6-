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
slideImg = document.querySelectorAll('.people-img'),
slideOutput = document.querySelectorAll('.people-output'),
slideTitle = document.querySelectorAll('.people-title'),
slideRecord = document.querySelectorAll('.people-record');

let index = 0;

let slideImgs;
let slides;
const activeSlide = (n) => {
    for(slides of slide ) {
        slides.classList.remove('active');
    }
    slide[n].classList.add('active');
};
const activePicture = (n) => {
    for(slideImgs of slideImg) {
        slideImgs.classList.remove('active-img')
    }
    slideImg[n].classList.add('active-img');
};
const activeOutput = (n) => {
    for(slideOutputs of slideOutput) {
        slideOutputs.classList.remove('active-output')
    }
    slideOutput[n].classList.add('active-output');
};
const activeTitle = (n) => {
    for(slideTitles of slideTitle) {
        slideTitles.classList.remove('active-title')
    }
    slideTitle[n].classList.add('active-title');
};
const activeRecord = (n) => {
    for(slideRecords of slideRecord) {
        slideRecords.classList.remove('active-record')
    }
    slideRecord[n].classList.add('active-record');
};
function activeItems() {
    activePicture(index);
    activeSlide(index);
    activeOutput(index);
    activeTitle(index);
    activeRecord(index);
};

const nextSlide = () => {
    if(index === slide.length - 1) {
        index = 0;
        activeItems(index);
    }
    else {
        index++;
        activeItems(index);
    };
};

const prevSlide = () => {
    if(index === 0) {
        index = slide.length - 1;
        activeItems(index);
    }
    else {
        index--;
        activeItems(index);
    };
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


const smallerPrevBtn = document.querySelector('.smaller-prev-btn'),
smallerNextBtn = document.querySelector('.smaller-next-btn'),
smallerSlide = document.querySelectorAll('.smaller-slide');

let smallerSlides;
let index2 = 0;
const smallerActiveSlide = (n) => {
    for(smallerSlides of smallerSlide ) {
        smallerSlides.classList.remove('active-slide');
    }
    smallerSlide[n].classList.add('active-slide');
};

const smallerNextSlide = () => {
    if(index2 === smallerSlide.length - 1) {
        index2 = 0;
        smallerActiveSlide(index2);
    }
    else {
        index2++;
        smallerActiveSlide(index2);
    };
};

const smallerPrevSlide = () => {
    if(index2 === 0) {
        index2 = smallerSlide.length - 1;
        smallerActiveSlide(index2);
    }
    else {
        index2--;
        smallerActiveSlide(index2);
    };
};

smallerNextBtn.addEventListener('click', smallerNextSlide);
smallerPrevBtn.addEventListener('click', smallerPrevSlide);


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
