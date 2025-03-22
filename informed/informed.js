document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const newEventBtn = document.getElementById("newEventBtn");
    const closeBtn = document.querySelector(".close");

    // Open modal when button is clicked
    newEventBtn.addEventListener("click", () => {
        modal.classList.add("active");
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });
});