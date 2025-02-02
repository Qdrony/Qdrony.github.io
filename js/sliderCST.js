let slideIndexCST = 1;
showSlides(slideIndexCST);

// Next/previous controls
function plusSlidesCST(n) {
    showSlidesCST(slideIndexCST += n);
}

// Thumbnail image controls
function currentSlideCST(n) {
    showSlidesCST(slideIndexCST = n);
}

function showSlidesCST(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesCST");
    let dots = document.getElementsByClassName("dotCST");
    if (n > slides.length) {slideIndexCST = 1}
    if (n < 1) {slideIndexCST = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexCST-1].style.display = "block";
    dots[slideIndexCST-1].className += " active";
}