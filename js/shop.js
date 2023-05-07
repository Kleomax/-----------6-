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



const products = document.querySelectorAll('.product');
const filtering = document.querySelector('.filtering');

filtering.addEventListener('click', (filter)=> {
    if (filter.target.tagName !== 'BUTTON') return false;
    
    let filterClass = filter.target.dataset['name'];
    
    products.forEach( (filter) => {
        filter.classList.remove('hide')
        if (!filter.classList.contains(filterClass) && filterClass !== 'all') {
            filter.classList.add('hide');
        }
    });
});


const allProducts = document.querySelector('.all-products-filter');
const spareParts = document.querySelector('.spare-parts-filter');
const accessories = document.querySelector('.accessories-filter');
const protection = document.querySelector('.protection-filter');



const filters = document.querySelectorAll('.filter');



allProducts.addEventListener('click', () => {
    allProducts.classList.add('active-filter')
    spareParts.classList.remove('active-filter')
    accessories.classList.remove('active-filter')
    protection.classList.remove('active-filter')
});
spareParts.addEventListener('click', () => {
    spareParts.classList.add('active-filter')
    allProducts.classList.remove('active-filter')
    accessories.classList.remove('active-filter')
    protection.classList.remove('active-filter')
});
accessories.addEventListener('click', () => {
    accessories.classList.add('active-filter')
    spareParts.classList.remove('active-filter')
    allProducts.classList.remove('active-filter')
    protection.classList.remove('active-filter')
});
protection.addEventListener('click', () => {
    protection.classList.add('active-filter')
    spareParts.classList.remove('active-filter')
    allProducts.classList.remove('active-filter')
    accessories.classList.remove('active-filter')
});


const menuBurger = document.querySelector('.menu-burger');
const navigation = document.querySelector('nav');   
const navBtns = document.querySelector('.navigation-list');
const menuBack = document.querySelector('.assortement-container');
const body = document.body;


menuBurger.addEventListener('click', function() {
    navigation.classList.toggle ('active-menu');
    menuBurger.classList.toggle('active-menu');
    body.classList.toggle('lock');
    navBtns.classList.toggle('active-menu');
    menuBack.classList.toggle('active-menu')
});

function hideMenu(){
    body.classList.remove('lock');
    menuBurger.classList.remove('active_menu');
    navigation.classList.remove('active_menu');
    navBtns.classList.remove('active-btns')
};



