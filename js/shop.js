const nextBtn = document.querySelector('.prev-btn'),
prevBtn = document.querySelector('.next-btn'),
slide = document.querySelectorAll('.slide'),
dots = document.querySelectorAll('.slide-dot');


let index = 0;

const activeSlide = (n) => {
    for(slides of slide ){
        slides.classList.remove('active-slide');
    }
    slide[n].classList.add('active-slide');
};

const activeDot = (n) => {
    for(dot of dots ){
        dot.classList.remove('active-dot')
    }
    dots[n].classList.add('active-dot');
};
function activeItems() {
    activeSlide(index)
    activeDot(index)
}
const nextSlide = () => {
    if(index === slide.length - 1) {
        index = 0;
        activeItems(index)
    }
    else {
        index++;
        activeItems(index)
    };
};

const prevSlide = () => {
    if(index === 0) {
        index = slide.length - 1;
        activeItems(index)
    }
    else {
        index--;
        activeItems(index)
    };
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


const filter = document.querySelectorAll('.filter');
const allProducts = document.querySelector('.all-products-filter'),
      spareParts = document.querySelector('.spare-parts-filter'),
      accessories = document.querySelector('.accessories-filter'),
      protection = document.querySelector('.protection-filter');

function filtering(params) {
    
}