document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".accordion-button").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});