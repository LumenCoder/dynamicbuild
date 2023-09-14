// JavaScript code to create milk drops
function createMilkDrop() {
  const milkDrop = document.createElement("div");
  milkDrop.classList.add("milk-drop");
  document.body.appendChild(milkDrop);

  // Randomize position and animation duration
  const x = Math.random() * window.innerWidth;
  const animationDuration = Math.random() * 2 + 1;

  milkDrop.style.left = `${x}px`;
  milkDrop.style.animationDuration = `${animationDuration}s`;

  // Remove the milk drop element after animation
  milkDrop.addEventListener("animationend", () => {
    milkDrop.remove();
  });
}

// Create milk drops at intervals
setInterval(createMilkDrop, 1000);
