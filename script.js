
// Contact form functionality

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("response").textContent =
            "Thank you, " + name + "! Your message has been received.";

        contactForm.reset();
    });
}

// Highlight the current navigation page

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "#38bdf8";
    }
});
