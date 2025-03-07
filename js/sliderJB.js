let slideIndexJB = 1;
showSlidesJB(slideIndexJB);

// Next/previous controls
function plusSlidesJB(n) {
    showSlidesJB(slideIndexJB += n);
}

// Thumbnail image controls
function currentSlideJB(n) {
    showSlidesJB(slideIndexJB = n);
}

function showSlidesJB(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesJB");
    let dots = document.getElementsByClassName("dotJB");
    if (n > slides.length) {slideIndexJB = 1}
    if (n < 1) {slideIndexJB = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexJB-1].style.display = "block";
    dots[slideIndexJB-1].className += " active";
}