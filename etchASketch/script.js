const container = document.querySelector("#container");

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = (960 / size) + "px";
    square.style.height = (960 / size) + "px";

    square.addEventListener("mouseover", () => {
      square.classList.add("hovered");
    });

    container.appendChild(square);
  }
}

createGrid(16);

const resize = document.querySelector("#resize");

resize.addEventListener("click", () => {
  const newSize = parseInt(prompt("How many squares per side?"));
  container.innerHTML = "";
  createGrid(newSize);
});