let fa = document.querySelector(".fa-bars");
let open = 0;
let ul = document.querySelector("ul");
fa.onclick = function() {
    if (open == 0) {
        open = 1;
        ul.style.display = "flex";
    }
    else {
        open = 0;
        ul.style.display = "none";
    }
}

var x = window.matchMedia("(min-width: 768px)");
document.onclick = function(e) {
    if (e.target.classList.contains("fa-bars") == 0 && x.matches == 0) {
        open = 0;
        ul.style.display = "none";
    }
}