const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

// Highlight based on scroll
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Highlight when clicked
navLinks.forEach(link => {
        console.log("hello");
    link.addEventListener("click", () => {
        navLinks.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
        console.log("hello");
    });
});
