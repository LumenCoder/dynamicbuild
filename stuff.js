
function createMilkDrop() {
  const milkDrop = document.createElement("div");
  milkDrop.classList.add("milk-drop");
  document.body.appendChild(milkDrop);
      duration
  const x = Math.random() * window.innerWidth;
  const animationDuration = Math.random() * 2 + 1;

  milkDrop.style.left = `${x}px`;
  milkDrop.style.animationDuration = `${animationDuration}s`;

  milkDrop.addEventListener("animationend", () => {
    milkDrop.remove();
  });
}

setInterval(createMilkDrop, 1000);
