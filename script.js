const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    // Special case: If at bottom of the page → highlight Contact
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        current = "contact";
    } else {
        // Otherwise, normal logic
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY < document.getElementById('about').offsetTop) {
                // If before Education → highlight Home
                current = "home";
            } else if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });
    }

    // Update active link
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

console.log("Version 0.0")