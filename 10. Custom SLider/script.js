let slides = document.querySelectorAll(".slide")
let count = 0;

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.addEventListener('click', function () {
    if (count == 0) {
        count = slides.length - 1;
        slideImage()
    }
    else {
        count--;
        slideImage()
    }
})

next.addEventListener('click', function () {
    if (count == slides.length - 1) {
        count = 0;
        // slides[0].style.transition = '0s'
        slideImage();
    }
    else {
        count++;
        slideImage()
    }
})


slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});

let slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`
        slides[slides.length - 1].style.transition = '0s'
    });
}
