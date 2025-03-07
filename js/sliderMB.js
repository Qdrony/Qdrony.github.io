let slideIndexMB = 1;
showSlidesMB(slideIndexMB);

// Next/previous controls
function plusSlidesMB(n) {
    showSlidesMB(slideIndexMB += n);
}

// Thumbnail image controls
function currentSlideMB(n) {
    showSlidesMB(slideIndexMB = n);
}

function showSlidesMB(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesMB");
    let dots = document.getElementsByClassName("dotMB");
    if (n > slides.length) {slideIndexMB = 1}
    if (n < 1) {slideIndexMB = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexMB-1].style.display = "block";
    dots[slideIndexMB-1].className += " active";
}