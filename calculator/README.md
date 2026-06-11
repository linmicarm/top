# Calculator

A fully functional calculator built with vanilla JavaScript, HTML, and CSS — no libraries, no frameworks. Built as the capstone project for the JavaScript fundamentals section of [The Odin Project](https://www.theodinproject.com/).

[**Live demo →**](https://linmicarm.github.io/top/)

![Calculator screenshot](screenshot.png)

## Features

- Four basic operations: add, subtract, multiply, divide
- Chained operations — evaluates one pair at a time (e.g. `12 + 7 - 1` resolves left to right as you go)
- Decimal input (with protection against multiple decimal points)
- Backspace to undo the last entry
- Full keyboard support (digits, operators, Enter, Escape, Backspace)
- Clear (AC) that resets all state
- Snarky divide-by-zero handling that won't crash the calculator
- Long decimal results are rounded to fit the display

## How it works

The trickiest part of a calculator isn't the math — it's the **state management**. The calculator tracks three things between button presses:

- `firstNumber` — the saved first operand
- `currentOperator` — the pending operation
- `shouldResetDisplay` — a flag marking whether the next digit should start a fresh number

That flag is what makes the calculator feel natural. When you press an operator, the current number is saved but stays visible; the flag quietly tells the next digit press to *replace* the display rather than append to it. The same flag does double duty preventing consecutive operators (like `2 + +`) from triggering an evaluation.

Operations are routed through a single `operate()` function that maps each operator symbol to its function using an object lookup, rather than a long `if`/`else` chain:

\`\`\`js
const operations = { "+": add, "-": subtract, "*": multiply, "/": divide };
return operations[operator](a, b);
\`\`\`

Buttons are identified by `data-*` attributes rather than their text or position, which keeps display and logic separate — the `÷` button shows a division sign but passes `/` to the math functions.

## What I learned

- Storing functions as values in an object to avoid branching logic
- Managing state across event handlers in plain JavaScript
- Why `eval()` is dangerous and how to evaluate operations safely without it
- Handling edge cases methodically (divide by zero, premature equals, double decimals, consecutive operators)
- Reusing existing click handlers for keyboard input instead of duplicating logic

## Built with

- HTML
- CSS (Grid layout, custom pastel theme)
- Vanilla JavaScript