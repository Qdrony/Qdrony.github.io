let slideIndexT = 1;
showSlidesT(slideIndexT);

// Next/previous controls
function plusSlidesT(n) {
    showSlidesT(slideIndexT += n);
}

// Thumbnail image controls
function currentSlideT(n) {
    showSlidesT(slideIndexT = n);
}

function showSlidesT(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesT");
    let dots = document.getElementsByClassName("dotT");
    if (n > slides.length) {slideIndexT = 1}
    if (n < 1) {slideIndexT = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexT-1].style.display = "block";
    dots[slideIndexT-1].className += " active";
}