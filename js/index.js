
const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const sideBar = document.querySelector('.sideBar');
const header = document.querySelector('.header');

const liPages = document.querySelector('.liPages');
const chevronLiPages = document.querySelector('.liPages i');
const navPages = document.querySelector('.navPages');

const liTourGuide = document.querySelector('.liTourGuide');
const chevronLiTourGuide = document.querySelector('.liTourGuide i');
const ulTourGuide = document.querySelector('.ulTourGuide');


// toggleSideBar
const toggleMenu = () => {
    sideBar.classList.toggle('-translate-x-full');
};

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);


// toggleBackGroundHeader
let lastScroll = 0;

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        header.classList.add('bg-black');
    } else {
        header.classList.remove('bg-black');
    }

    lastScroll = currentScroll;
});

// ToggleLiPages
const toggleLiPages = () => {
    const isOpen = navPages.classList.contains('visible');
    chevronLiPages.classList.toggle('rotate-180');
    navPages.classList.toggle('opacity-100');
    navPages.classList.toggle('h-auto');
    navPages.classList.toggle('visible');
    if (isOpen) {
        chevronLiTourGuide.classList.remove('rotate-90');
        ulTourGuide.classList.remove('opacity-100', 'max-h-18');
    }
};
liPages.addEventListener('click' , toggleLiPages);

// ToggleLiTourGuide
const toggleLiTourGuide = ()=>{
    chevronLiTourGuide.classList.toggle('rotate-90'); 
    ulTourGuide.classList.toggle('opacity-100');
    ulTourGuide.classList.toggle('max-h-18');
};
liTourGuide.addEventListener('click' , toggleLiTourGuide);
