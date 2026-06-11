// ============================================================
//  Calculator logic
// ============================================================

// ---- Math functions ----
// Each handles one operation. Kept separate so operate() can
// pick the right one by name.
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  // Guard against divide-by-zero: return a message instead of
  // Infinity/NaN so the display never shows a broken result.
  if (b === 0) {
    return "Nice try 🙃";
  }
  return a / b;
}

// Routes an operator string ("+", "-", etc.) to the matching
// function. The object maps each symbol to a function *value*
// (no parentheses — we store the function, then call it on the
// last line with the two numbers).
function operate(operator, a, b) {
  const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
  };
  return operations[operator](a, b);
}

// ---- Helpers ----
// Rounds long decimals (e.g. 10/3) so they don't overflow the
// display. Only rounds numbers — strings (like the divide-by-zero
// message) pass through untouched.
function roundResult(value) {
  if (typeof value === "number") {
    return Math.round(value * 1000) / 1000;
  }
  return value;
}

// ---- State ----
// These persist between clicks (each handler runs and forgets,
// so anything that must survive lives here).
let firstNumber = null;        // the saved first operand
let currentOperator = null;    // which operation is pending
let shouldResetDisplay = false; // true = next digit starts a fresh number

// ---- Elements ----
const display = document.querySelector("[data-display]");
const digitButtons = document.querySelectorAll("[data-digit]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const decimalButton = document.querySelector("[data-decimal]");
const backspaceButton = document.querySelector("[data-backspace]");

// ---- Digit handling ----
digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendDigit(button.dataset.digit);
  });
});

function appendDigit(digit) {
  // Replace the display (instead of appending) in two cases:
  // 1. it's still the starting "0" (avoids "05")
  // 2. a result/operator was just entered (flag tells us to start fresh)
  if (display.textContent === "0" || shouldResetDisplay) {
    display.textContent = digit;
    shouldResetDisplay = false;
  } else {
    display.textContent += digit;
  }
}

// ---- Operator handling ----
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperator(button.dataset.operator);
  });
});

function chooseOperator(operator) {
  // If an operation is already pending AND a fresh second number
  // was typed, evaluate it now (this is what makes chaining like
  // 12 + 7 - 1 work). The !shouldResetDisplay check also blocks
  // consecutive operators (e.g. "2 + +") from evaluating.
  if (currentOperator !== null && !shouldResetDisplay) {
    const result = operate(currentOperator, Number(firstNumber), Number(display.textContent));
    display.textContent = roundResult(result);
    firstNumber = result;
  } else {
    firstNumber = display.textContent;
  }

  currentOperator = operator;
  shouldResetDisplay = true; // next digit starts the second number
}

// ---- Equals handling ----
equalsButton.addEventListener("click", () => {
  // Do nothing if there's no pending operation or no second number
  // yet (guards against pressing = too early).
  if (currentOperator === null || shouldResetDisplay) return;

  const result = operate(currentOperator, Number(firstNumber), Number(display.textContent));
  display.textContent = roundResult(result);

  // Carry the result forward, but clear the operator so pressing =
  // again doesn't re-run the operation.
  firstNumber = result;
  currentOperator = null;
  shouldResetDisplay = true;
});

// ---- Clear handling ----
// Wipes everything — visible display AND hidden state — so the
// user truly starts fresh.
clearButton.addEventListener("click", () => {
  display.textContent = "0";
  firstNumber = null;
  currentOperator = null;
  shouldResetDisplay = false;
});

// ---- Decimal handling ----
decimalButton.addEventListener("click", () => {
  // If a result/operator was just entered, start a new "0."
  if (shouldResetDisplay) {
    display.textContent = "0.";
    shouldResetDisplay = false;
    return;
  }
  // Otherwise add a dot only if there isn't one already
  // (prevents "12.3.4").
  if (display.textContent.includes(".")) return;
  display.textContent += ".";
});

// ---- Backspace handling ----
backspaceButton.addEventListener("click", () => {
  // Remove the last character; if nothing's left, fall back to "0".
  const trimmed = display.textContent.slice(0, -1);
  display.textContent = trimmed === "" ? "0" : trimmed;
});

// ---- Keyboard support ----
// Maps key presses to the same actions as the on-screen buttons.
// For equals/clear/etc. we trigger .click() to reuse the existing
// button handlers rather than duplicating their logic.
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key >= "0" && key <= "9") {
    appendDigit(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    chooseOperator(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault(); // stop Enter from re-triggering a focused button
    equalsButton.click();
  } else if (key === "Escape") {
    clearButton.click();
  } else if (key === "Backspace") {
    backspaceButton.click();
  } else if (key === ".") {
    decimalButton.click();
  }
});