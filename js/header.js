// toggle menu 
$(document).ready(function () {
    const menuButton = document.querySelector(".ham-burger");
    const closeMenu = document.getElementById("close-menu");
    const offcanvasMenu = document.getElementById("offcanvas-menu");
    const body = document.body;

    menuButton.addEventListener("click", () => {
        offcanvasMenu.classList.toggle("translate-x-full");
        body.classList.add("overflow-hidden"); // Prevent scrolling
    });

    closeMenu.addEventListener("click", () => {
        offcanvasMenu.classList.add("translate-x-full");
        body.classList.remove("overflow-hidden"); // Re-enable scrolling
    });
});

// scroll down js
document.getElementById('scroll-down-btn').addEventListener('click', function () {
    document.getElementById('target').scrollIntoView({ behavior: 'smooth' });
});