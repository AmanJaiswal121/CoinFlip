let headsCount = 0;
let tailsCount = 0;

document.getElementById("flipButton").addEventListener("click", function () {
  const coinImage = document.getElementById("coinImage");
  const coinAnimation = document.getElementById("coinAnimation");

  // Randomly determine heads or tails
  const isHeads = Math.random() < 0.5;

  // Reset animation by temporarily removing the class
  coinAnimation.style.animation = "none"; // Remove the animation
  void coinAnimation.offsetWidth; // Trigger reflow to restart the animation
  coinAnimation.style.animation = "flip 1s"; // Reapply the animation

  // Wait for animation to finish
  setTimeout(() => {
    // Update the coin image based on result
    if (isHeads) {
      coinImage.src =
        "https://flipcointoss.com/wp-content/uploads/2022/05/heads.png";
      headsCount++;
      document.getElementById("headsCount").textContent = headsCount;
    } else {
      coinImage.src =
        "https://flipcointoss.com/wp-content/uploads/2022/05/tails.png";
      tailsCount++;
      document.getElementById("tailsCount").textContent = tailsCount;
    }
  }, 1000);
});
