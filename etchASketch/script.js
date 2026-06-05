const container = document.querySelector("#container");

function randomColor() {
  return Math.floor(Math.random() * 256);
}

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = 960 / size + "px";
    square.style.height = 960 / size + "px";
    square.clicks = 0;

    square.addEventListener("mouseover", () => {
      square.clicks += 1;

      const r = randomColor();
      const g = randomColor();
      const b = randomColor();
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      square.style.opacity = square.clicks / 10;
    });

    container.appendChild(square);
  }
}

createGrid(16);

const resize = document.querySelector("#resize");

resize.addEventListener("click", () => {
  const newSize = parseInt(prompt("How many squares per side?"));
  if (newSize >= 1 && newSize <= 100) {
    container.innerHTML = "";
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});