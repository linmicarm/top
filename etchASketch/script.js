const container = document.querySelector("#container");
let currentSize = 16;

function randomColor() {
  return Math.floor(Math.random() * 256);
}

function createGrid(size) {
  currentSize = size;
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

const leftKnob = document.querySelector("#leftKnob");
leftKnob.rotation = 0;

leftKnob.addEventListener("click", () => {
  leftKnob.rotation += 180;
  leftKnob.style.transform = `rotate(${leftKnob.rotation}deg)`;

  container.innerHTML = "";
  createGrid(currentSize);
});

const rightKnob = document.querySelector("#rightKnob");
rightKnob.rotation = 0;

rightKnob.addEventListener("click", () => {
  rightKnob.rotation += 180;
  rightKnob.style.transform = `rotate(${rightKnob.rotation}deg)`;

  const newSize = parseInt(prompt("How many squares per side?"));
  if (newSize >= 1 && newSize <= 100) {
    container.innerHTML = "";
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});