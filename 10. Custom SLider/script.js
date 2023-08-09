let sec = document.querySelectorAll('.sections');
let count = 0;
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let small = document.querySelectorAll('.smallPics');


prev.addEventListener('click', function () {
    if (count == 0) {
        count = sec.length - 1;
        slideimage(count);
    } else {
        count--;
        slideimage(count);
    }
})

next.addEventListener('click', function () {
    if (count == sec.length - 1) {
        count = 0;
        slideimage(count);
    } else {
        count++;
        slideimage(count);
    }

})

sec.forEach((sections, index) => {
    sections.style.left = `${index * 100}%`
})


let slideimage = (count) => {
    sec.forEach((sections) => {
        sections.style.transform = `translateX(-${count * 100}%)`
    })
}


console.log(count);


























// let slideimage = () => {
//     sec.forEach((sections) => {
//         sections.style.transform = `translateX(-${count * 100}%)`
//     })
// }


