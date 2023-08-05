
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function() {
    let currentScrollPos = window.pageYOffset;

    // Detect scrolling direction
    if (prevScrollPos < currentScrollPos) {
        // Scrolling down
        document.querySelector(".navbar").classList.add("scrolling-down");
        document.querySelector(".navbar").classList.remove("scrolling-up");
    } else {
        // Scrolling up
        document.querySelector(".navbar").classList.add("scrolling-up");
        document.querySelector(".navbar").classList.remove("scrolling-down");
    }

    prevScrollPos = currentScrollPos;
});
