document.addEventListener("DOMContentLoaded", function() {
  // For each podcast container, add scroll buttons
  document.querySelectorAll(".podcast-container").forEach((container) => {
    // Create scroll buttons
    const scrollLeftButton = document.createElement("button");
    scrollLeftButton.className = "scroll-button scroll-left";
    scrollLeftButton.textContent = "◀";
    
    const scrollRightButton = document.createElement("button");
    scrollRightButton.className = "scroll-button scroll-right";
    scrollRightButton.textContent = "▶";
    
    // Insert scroll buttons in each container's parent (category)
    container.parentElement.appendChild(scrollLeftButton);
    container.parentElement.appendChild(scrollRightButton);
    
    // Scroll events
    scrollLeftButton.addEventListener("click", () => {
      container.scrollBy({ left: -300, behavior: "smooth" });
    });

    scrollRightButton.addEventListener("click", () => {
      container.scrollBy({ left: 300, behavior: "smooth" });
    });
  });
});
