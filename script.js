// MOBILE MENU TOGGLE (SAFE VERSION)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Only run if elements exist
if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

// SMOOTH SCROLL EFFECT
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// SMALL CONSOLE MESSAGE (optional)
console.log("Portfolio loaded successfully 🚀");
