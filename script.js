// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Smooth scroll (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        nav.classList.remove("active"); // Close menu after click on mobile
    });
});
