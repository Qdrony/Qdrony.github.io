let slideIndexFT = 1;
showSlidesFT(slideIndexFT);

// Next/previous controls
function plusSlidesFT(n) {
    showSlidesFT(slideIndexFT += n);
}

// Thumbnail image controls
function currentSlideFT(n) {
    showSlidesFT(slideIndexFT = n);
}

function showSlidesFT(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesFT");
    let dots = document.getElementsByClassName("dotFT");
    if (n > slides.length) {slideIndexFT = 1}
    if (n < 1) {slideIndexFT = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexFT-1].style.display = "block";
    dots[slideIndexFT-1].className += " active";
}