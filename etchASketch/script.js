// Grab the screen element where all the squares will live
const container = document.querySelector("#container");

// Remembers the current grid size (columns) so the Clear knob can
// rebuild the grid at the same size after wiping it
let currentSize = 16;

// Fixed pixel dimensions of the drawing screen.
// Stored as constants so the cell-size math has one source of truth.
const SCREEN_WIDTH = 900;
const SCREEN_HEIGHT = 680;

// Returns a random whole number 0–255, used for one RGB channel.
// Math.random() gives 0 to ~1; ×256 stretches the range; floor rounds down.
function randomColor() {
  return Math.floor(Math.random() * 256);
}

// Builds the grid of squares for a given number of columns (size)
function createGrid(size) {
  currentSize = size; // record the size so other functions can reuse it

  // Each cell is square: its side = screen width ÷ number of columns
  const cellSize = SCREEN_WIDTH / size;
  // How many whole rows of that cell size fit in the screen height
  const rows = Math.floor(SCREEN_HEIGHT / cellSize);
  // Total squares to create = columns × rows
  const totalCells = size * rows;

  for (let i = 0; i < totalCells; i++) {
    // Create one square, tag it, and size it to the calculated cell size
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = cellSize + "px";
    square.style.height = cellSize + "px";

    // Track how many times this square has been drawn on,
    // so it can darken by 10% per pass (used for opacity below)
    square.clicks = 0;

    // On hover: pick a random color and gradually increase opacity
    square.addEventListener("mouseover", () => {
      square.clicks += 1;
      const r = randomColor();
      const g = randomColor();
      const b = randomColor();
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      // opacity goes 0.1, 0.2 ... up to 1.0 (fully solid) after 10 hovers
      square.style.opacity = square.clicks / 10;
    });

    // Add the finished square to the screen
    container.appendChild(square);
  }
}

// Build the starting 16×16 grid when the page loads
createGrid(16);

// ===== LEFT KNOB: clears the screen =====
const leftKnob = document.querySelector("#leftKnob");
leftKnob.rotation = 0; // store rotation on the element so it persists between clicks

leftKnob.addEventListener("click", () => {
  // Spin the knob a half-turn more each click (always a new value = always animates)
  leftKnob.rotation += 180;
  leftKnob.style.transform = `rotate(${leftKnob.rotation}deg)`;

  // Wipe all squares, then rebuild a fresh blank grid at the current size
  container.innerHTML = "";
  createGrid(currentSize);
});

// ===== RIGHT KNOB: resizes the grid =====
const rightKnob = document.querySelector("#rightKnob");
rightKnob.rotation = 0;

rightKnob.addEventListener("click", () => {
  // Spin the knob like the left one
  rightKnob.rotation += 180;
  rightKnob.style.transform = `rotate(${rightKnob.rotation}deg)`;

  // Ask the user for a new column count (parseInt converts the text to a number)
  const newSize = parseInt(prompt("How many squares per side?"));

  // Only rebuild if the input is a valid number between 1 and 100.
  // (Invalid input like NaN, Cancel, or >100 fails this check and is ignored.)
  if (newSize >= 1 && newSize <= 100) {
    container.innerHTML = "";
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});