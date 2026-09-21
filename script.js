// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// LinkedIn button message
function showLinkedInMessage(event) {
    event.preventDefault();

    alert("LinkedIn profile will be added soon! ??");
}


// Simple welcome message in console
console.log("Welcome to Geethasri's Portfolio! ??");