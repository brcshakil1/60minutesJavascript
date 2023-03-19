const container = document.querySelector('.container');
const slide = document.querySelector('.slides');

const next = document.querySelector('.next-btn');
const prev = document.querySelector('.prev-btn');

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);


firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

let slideWidth = slides[index].clientWidth;


slide.style.transform = `translateX(${-slideWidth * index}px)`;


const getSlide = () => {
    return document.querySelectorAll('.slide');
}

slide.addEventListener('transitionend', () => {
    slides = getSlide()
    if(slides[index].id === '5th-id') {
        index = 0;
        slide.style.transition = `none`;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
})

const startSlide = () => {
    setInterval(()=>{
        moveToNextSlide()
    }, 3000)
}
startSlide()
const moveToNextSlide = () => {
    slides = getSlide;
    index++;
    slide.style.transition = `0.7s ease-out`;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;

}

console.log(slides[index])