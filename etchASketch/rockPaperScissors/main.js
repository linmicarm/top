// =============================================
//   SAILOR MOON DUELS — main.js
//   Rock Paper Scissors, sailor moon edition
// =============================================

// ── Weapon Definitions ──
const weapons = {
  'crystal-star':   { icon: '<img src="images/crystalstar.png" alt="Crystal Star" />', name: 'crystal star' },
  'moon-stick':     { icon: '<img src="images/moonstick.png" alt="Moon Stick" />', name: 'moon stick' },
  'silver-crystal': { icon: '<img src="images/silvercrystal.png" alt="Silver Crystal" />', name: 'silver crystal' },
}

const weaponKeys = ['crystal-star', 'moon-stick', 'silver-crystal']

const beats = {
  'crystal-star':   'moon-stick',
  'moon-stick':     'silver-crystal',
  'silver-crystal': 'crystal-star',
}

const winLines = {
  'crystal-star':   'the crystal star\'s power overwhelms the moon stick... ✦ victory! ✦',
  'moon-stick':     'lunar magic consumes the silver crystal... ✦ victory! ✦',
  'silver-crystal': 'the silver crystal smothers the star\'s light... ✦ victory! ✦',
}

const lossLines = {
  'crystal-star':   'the enemy\'s crystal star overpowers you... ✦ darkness wins this round ✦',
  'moon-stick':     'the enemy\'s moon stick drains your power... ✦ darkness wins this round ✦',
  'silver-crystal': 'the silver crystal shatters your attack... ✦ darkness wins this round ✦',
}

// ── Game State ──
const MAX_LIVES = 5

let playerLives = MAX_LIVES
let enemyLives  = MAX_LIVES
let gameOver    = false

// ── Get Computer Choice ──
const getComputerChoice = () => {
  return weaponKeys[Math.floor(Math.random() * weaponKeys.length)]
}

// ── Render Lives ──
const renderLives = (id, current, max) => {
  const el = document.getElementById(id)
  el.innerHTML = ''

  for (let i = 0; i < max; i++) {
    const pip = document.createElement('span')
    pip.className = 'life-pip' + (i >= current ? ' gone' : '')
    pip.textContent = '♡'
    el.appendChild(pip)
  }
}

// ── Spawn Sparkles ──
const spawnSparkles = () => {
  const symbols = ['✦', '✿', '♡', '★', '·', '☆', '✧']

  for (let i = 0; i < 10; i++) {
    const el = document.createElement('div')
    el.className = 'sparkle'
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)]
    el.style.left = (15 + Math.random() * 70) + '%'
    el.style.top  = (20 + Math.random() * 50) + '%'
    document.body.appendChild(el)
    setTimeout(() => el.remove(), 1500)
  }
}

// ── Animate Weapon Display ──
const animateWeapon = (id) => {
  const el = document.getElementById(id)
  el.classList.remove('pop')
  void el.offsetWidth
  el.classList.add('pop')
}

// ── Play Round ──
const play = (playerChoice) => {
  if (gameOver) return

  const computerChoice = getComputerChoice()

  // Update weapon displays using innerHTML for image support
  document.getElementById('player-icon').innerHTML = weapons[playerChoice].icon
  document.getElementById('player-name').textContent = weapons[playerChoice].name
  document.getElementById('enemy-icon').innerHTML  = weapons[computerChoice].icon
  document.getElementById('enemy-name').textContent  = weapons[computerChoice].name

  animateWeapon('player-icon')
  animateWeapon('enemy-icon')

  let result = ''

  if (playerChoice === computerChoice) {
    result = '✦ the weapons collide and cancel out... a draw! ✦'

  } else if (beats[playerChoice] === computerChoice) {
    enemyLives--
    result = winLines[playerChoice]
    spawnSparkles()

    if (enemyLives === 0) {
      setTimeout(() => endGame(true), 500)
    }

  } else {
    playerLives--
    result = lossLines[computerChoice]

    if (playerLives === 0) {
      setTimeout(() => endGame(false), 500)
    }
  }

  renderLives('player-lives', playerLives, MAX_LIVES)
  renderLives('enemy-lives',  enemyLives,  MAX_LIVES)
  document.getElementById('log').textContent = result
}

// ── End Game ──
const endGame = (playerWon) => {
  gameOver = true

  const btns = document.getElementById('choice-btns')
  btns.style.opacity = '0.25'
  btns.style.pointerEvents = 'none'

  document.getElementById('log').textContent = playerWon
    ? '✦ ✦ ✦ the dark kingdom is vanquished! moon prism power! ✦ ✦ ✦'
    : '✦ ✦ ✦ the darkness prevails... but sailor moon will return... ✦ ✦ ✦'

  document.getElementById('reset-btn').style.display = 'inline-block'

  if (playerWon) spawnSparkles()
}

// ── Reset Game ──
const resetGame = () => {
  playerLives = MAX_LIVES
  enemyLives  = MAX_LIVES
  gameOver    = false

  document.getElementById('player-icon').innerHTML = '✦'
  document.getElementById('player-name').textContent = ''
  document.getElementById('enemy-icon').innerHTML  = '✦'
  document.getElementById('enemy-name').textContent  = ''

  document.getElementById('log').textContent = 'choose your weapon, sailor moon...'

  const btns = document.getElementById('choice-btns')
  btns.style.opacity = '1'
  btns.style.pointerEvents = 'auto'

  document.getElementById('reset-btn').style.display = 'none'

  renderLives('player-lives', MAX_LIVES, MAX_LIVES)
  renderLives('enemy-lives',  MAX_LIVES, MAX_LIVES)
}

// ── Init ──
renderLives('player-lives', MAX_LIVES, MAX_LIVES)
renderLives('enemy-lives',  MAX_LIVES, MAX_LIVES)
