let slideIndexTulip = 1;
showSlidesMB(slideIndexTulip);

// Next/previous controls
function plusSlidesTulip(n) {
    showSlidesTulip(slideIndexTulip += n);
}

// Thumbnail image controls
function currentSlideTulip(n) {
    showSlidesTulip(slideIndexTulip = n);
}

function showSlidesTulip(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesTulip");
    let dots = document.getElementsByClassName("dotTulip");
    if (n > slides.length) {slideIndexTulip = 1}
    if (n < 1) {slideIndexTulip = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexTulip-1].style.display = "block";
    dots[slideIndexTulip-1].className += " active";
}