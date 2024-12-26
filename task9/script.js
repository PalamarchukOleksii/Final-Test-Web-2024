function createEffect() {
  const effectContainer = document.getElementById("effect-container");

  const circle = document.createElement("div");
  circle.classList.add("effect");

  const size = Math.random() * 100 + 50;
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  circle.style.backgroundColor = randomColor;

  effectContainer.appendChild(circle);

  setTimeout(() => {
    effectContainer.removeChild(circle);
  }, 1500);
}
