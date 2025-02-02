let slideIndexM = 1;
showSlidesM(slideIndexM);

// Next/previous controls
function plusSlidesM(n) {
    showSlidesM(slideIndexM += n);
}

// Thumbnail image controls
function currentSlideM(n) {
    showSlidesM(slideIndexM = n);
}

function showSlidesM(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesM");
    let dots = document.getElementsByClassName("dotM");
    if (n > slides.length) {slideIndexM = 1}
    if (n < 1) {slideIndexM = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexM-1].style.display = "block";
    dots[slideIndexM-1].className += " active";
}