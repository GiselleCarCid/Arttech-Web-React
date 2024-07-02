document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.visit-toggle');

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const details = this.closest(".visit-item").querySelector(".visit-details");
            details.style.display = details.style.display === "none" || !details.style.display ? "block" : "none";
        });
    });
});
