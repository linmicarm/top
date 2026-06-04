<img width="1120" height="929" alt="Screenshot 2026-05-29 125318" src="https://github.com/user-attachments/assets/a386097a-4f88-4d29-bf0f-39a37269a22b" />
# ✦ Sailor Moon Duels ✦

> *In the name of the moon, I challenge you!*

A Sailor Moon themed Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript.

---

## ⭐ Gameplay

Choose your weapon and battle the Dark Kingdom across 5 lives. First to drain the opponent's hearts wins!

| Weapon | Beats |
|---|---|
| ⭐ Crystal Star | 🌙 Moon Stick |
| 🌙 Moon Stick | 💠 Silver Crystal |
| 💠 Silver Crystal | ⭐ Crystal Star |

---

## ✦ Features

- **5 lives per side** — hearts drain as you lose rounds
- **Randomized enemy** — the Dark Kingdom picks a weapon each round
- **Animated combat log** — dramatic battle messages for every outcome
- **Sparkle effects** — floating symbols on victory
- **Dark cosmos theme** — deep space starfield with glowing pink & gold accents
- **Custom 🌙 cursor**
- **Responsive layout** — works on mobile and desktop
- **Dark/light mode support** via CSS media query

---

## 🚀 Getting Started

No build tools or dependencies needed — just open in a browser.

```bash
git clone https://github.com/yourusername/sailor-moon-duels.git
cd sailor-moon-duels
open index.html
```

Or simply drag `index.html` into your browser.

---

## 📁 Project Structure

```
sailor-moon-duels/
├── index.html          # Game markup
├── style.css           # All styling & animations
├── main.js             # Game logic
├── crystalstar.png     # Crystal Star weapon image
├── moonstick.png       # Moon Stick weapon image
└── silvercrystal.png   # Silver Crystal weapon image
```

---

## 🛠 Built With

- **HTML5** — semantic markup
- **CSS3** — custom properties, animations, backdrop-filter, CSS starfield
- **Vanilla JavaScript** — no frameworks or libraries
- **Google Fonts** — Cinzel Decorative + Press Start 2P

---

## 🎨 Design

- **Color palette** — deep navy `#07051a`, hot pink `#ff4da6`, gold `#ffd700`
- **Typography** — Cinzel Decorative for headers, Press Start 2P for UI text
- **Effects** — glassmorphism cards, CSS starfield background, glow text shadows, sparkle animations

---

## ⚡ Optimizations
 
- **Actual Sailor Moon characters** — would love to add animated sprites or illustrated versions of Sailor Moon vs Queen Beryl instead of just text labels
- **Sound effects** — transformation sounds, attack sounds, and a victory/defeat jingle would add a lot to the atmosphere
- **Attack animations** — right now weapons just pop in place; ideally each weapon would have a unique attack animation that plays across the arena
- **Local storage** — save win/loss record across sessions so players can track their overall battle history against the Dark Kingdom
- **More weapons** — expand beyond three choices to include more Sailor Moon items like the Spiral Heart Moon Rod or Moon Kaleidoscope
- **Difficulty modes** — the enemy currently picks randomly; a harder mode could have weighted choices that counter the player's most used weapon
- **Mobile touch feedback** — the hover effects are desktop only; would add haptic feedback and better touch states for mobile players
- **Accessibility** — keyboard navigation for the weapon buttons and better screen reader support throughout
- **Loading states for images** — weapon images currently have no fallback if they fail to load; would add a placeholder and error handling
---
 
## 💭 Lessons Learned
 
- `textContent` vs `innerHTML` — swapping to `innerHTML` was necessary to render image tags dynamically inside the weapon display. `textContent` treats everything as plain text and won't parse HTML
- Forcing CSS animation restarts requires a reflow trick (`void el.offsetWidth`) — removing and re-adding a class alone won't restart an animation that's already played
- Keeping game logic in plain JS with no framework made debugging straightforward — every function does one thing and is easy to trace
- CSS `backdrop-filter: blur()` can be finicky — it requires the element to have a semi-transparent background to be visible
- Custom cursors using inline SVG data URIs are a quick way to add personality without needing an external asset file
- Separating concerns cleanly (HTML for structure, CSS for all visuals, JS for all logic) made it easy to redesign the entire look without touching the game code
  
---
 
## 🧠 Concepts Practiced
 
- **DOM manipulation** — dynamically updating text, images, and classes in response to user actions
- **Event handling** — `onclick`, `onMouseEnter`, `onMouseLeave` for interactive UI
- **Game state management** — tracking lives, game over state, and resetting cleanly
- **CSS animations & keyframes** — pop, sparkle, glow pulse, and title animations
- **CSS custom properties** — theming with variables across the entire stylesheet
- **Glassmorphism UI** — `backdrop-filter`, semi-transparent backgrounds, and subtle borders
- **Template literals** — building dynamic API URLs and log messages
- **Object lookups** — using objects as maps for weapon data, win conditions, and battle log lines
- **Modular functions** — each game action (`play`, `endGame`, `resetGame`, `renderLives`) is its own clean function
- **Responsive design** — media queries to scale the layout gracefully on smaller screens


## 📸 Preview

<img width="1120" height="929" alt="Screenshot 2026-05-29 125318" src="https://github.com/user-attachments/assets/afb8a8d0-5428-4464-9dcc-5d43e833ba70" />

---

*Crafted with ♡ & moon prism power*
