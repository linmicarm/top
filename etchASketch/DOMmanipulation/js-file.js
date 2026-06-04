// your JavaScript file

// Get the container
const container = document.querySelector("#container")

// 1. Red paragraph
const paragraph = document.createElement("p")
paragraph.textContent = "Hey I'm red!"
paragraph.style.color = "red"
container.appendChild(paragraph)

// 2. Blue h3
const header = document.createElement("h3")
header.textContent = "I'm a blue h3!"
header.style.color = "blue"
container.appendChild(header)

// 3. Div with pink background and black border
const content = document.createElement("div")
content.style.border = "1px solid black"
content.style.backgroundColor = "pink"

const header1 = document.createElement("h1")
header1.textContent = "I'm in a div"
content.appendChild(header1)

const paragraph1 = document.createElement("p")
paragraph1.textContent = "ME TOO!"
content.appendChild(paragraph1)

container.appendChild(content)

