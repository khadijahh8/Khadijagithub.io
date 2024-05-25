// getting refrences to DOM elements

//next and previous buttons
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
//carousel and slider container
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
//thumbnail border container
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
//thumbnail items
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
//Time display elment
let timeDom = document.querySelector('.carousel .time');

// Move the first thumbnail to the end for a circular effect
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// Set time intervals
let timeRunning = 3000; // animation time
let timeAutoNext = 7000;  //time for slide change

// Event listener for the next button
nextDom.onclick = function(){
    showSlider('next');    
}

// Event listener for the previous button
prevDom.onclick = function(){
    showSlider('prev');    
}
//Adding variables to handle timeouts
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)

// using a function to show the slider
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
//controling the next and previos function based on the type
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
// clearing any previous animation and setting a new one
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
// clear any previous auto slide change time out and set a new one
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}