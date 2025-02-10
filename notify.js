// Function to Filter Notifications
function filterNotifications(category) {
    const allCards = document.querySelectorAll(".notification-card");
    
    allCards.forEach(card => {
        if (category === "all") {
            card.style.display = "flex";
        } else if (category === "unread") {
            card.style.display = card.classList.contains("unread") ? "flex" : "none";
        } else {
            card.style.display = "none";
        }
    });

    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    event.target.classList.add("active");
}

// Star Toggle
document.querySelectorAll(".star").forEach(star => {
    star.addEventListener("click", function() {
        if (this.innerText === "⭐") {
            this.innerText = "☆";
        } else {
            this.innerText = "⭐";
        }
    });
});
