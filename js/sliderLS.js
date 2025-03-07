let slideIndexLS = 1;
showSlidesLS(slideIndexLS);

// Next/previous controls
function plusSlidesLS(n) {
    showSlidesLS(slideIndexLS += n);
}

// Thumbnail image controls
function currentSlideLS(n) {
    showSlidesLS(slideIndexLS = n);
}

function showSlidesLS(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesLS");
    let dots = document.getElementsByClassName("dotLS");
    if (n > slides.length) {slideIndexLS = 1}
    if (n < 1) {slideIndexLS = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexLS-1].style.display = "block";
    dots[slideIndexLS-1].className += " active";
}