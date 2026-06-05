# 🎨 Etch A Sketch

A pastel-themed, browser-based [Etch A Sketch](https://en.wikipedia.org/wiki/Etch_A_Sketch) built with vanilla HTML, CSS, and JavaScript. Move your mouse across the screen to draw a colorful, pixelated trail — just like the classic toy, but with a few modern twists.

Built as part of [The Odin Project](https://www.theodinproject.com/) Foundations course.

## ✨ Live Demo

👉 **[Try it here](https://linmicarm.github.io/top/etchASketch/)**

## 📸 Screenshot

<img width="1089" height="918" alt="image" src="https://github.com/user-attachments/assets/3cd442fd-2737-4abd-89f4-1f73cbdec9c6" />

## 🕹️ Features

- **Draw by hovering** — move your mouse over the screen to leave a trail
- **Random colors** — each cell gets a randomized RGB color on every pass
- **Progressive darkening** — cells deepen by 10% per pass, reaching full color after 10 interactions (using opacity)
- **Working knobs** — the left knob clears the screen, the right knob resizes the grid; both spin when clicked
- **Resizable grid** — choose any size from 1 to 100 cells per side, with input validation
- **Authentic styling** — pastel frame, recessed mint screen, metallic gold script logo, and 3D depth via shadows and bevels

## 🛠️ Built With

- HTML
- CSS (Flexbox for layout, gradients, box-shadows, and a CSS-only metallic gold text effect)
- JavaScript (DOM manipulation, event listeners, dynamic grid generation)

## 🧠 Concepts Practiced

- Generating DOM elements dynamically in a loop (no hardcoded HTML for the grid)
- Flexbox layout, including `flex-wrap` for the grid and `justify-content` / `align-items` for centering
- Calculating square cell sizes from fixed screen dimensions so the grid stays proportional at any size
- Event listeners for `mouseover` and `click`
- Storing state directly on DOM elements (a per-cell hover counter and per-knob rotation value)
- Generating random RGB values with `Math.random()` and `Math.floor()`
- Template literals for building color and transform strings
- Converting and validating user input (`parseInt`, range checks, handling Cancel / invalid input)
- CSS transitions for the knob spin animation
- A CSS-only metallic gold text effect using `background-clip: text`

## 💡 Lessons Learned

- **Scope matters:** an event listener that uses a variable created inside a loop has to live *inside* that loop — placing it outside means the variable doesn't exist there. (Learned this one a few times!)
- **Don't hardcode magic numbers:** storing the screen size in one constant meant the layout math had a single source of truth, so changing the size only required editing one place.
- **A solid-color circle has no visible rotation** until you add a reference point (the knob stripe) — the spin was working the whole time, it just couldn't be seen.
- **Deployed sites can serve stale cached versions:** when the code on GitHub is correct but the live page looks old, it's almost always browser cache — incognito mode confirms it instantly.

## 🚀 Future Improvements

- Make the knobs actually move a cursor to draw (like the real toy), instead of drawing on hover
- Add a color picker so users can choose a single drawing color
- Add an eraser mode and an adjustable grid-line toggle
- Make the layout fully responsive for smaller screens and mobile
- Add a "shake to clear" animation when the clear knob is used
