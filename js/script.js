var link = document.querySelector(".search-form-btn");
var popup = document.querySelector(".footer-search");
var close = popup.querySelector(".search-form-btn");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("footer-search-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("footer-search-show");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("footer-search-show")) {
            popup.classList.remove("footer-search-show");
        }
    }
});