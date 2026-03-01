# 🃏 Magic Memory Card Game

A modern and interactive Memory Card Matching Game built with **React**.  
Match all the cards with the least number of turns and win the game! 🎉

---

## 🚀 Live Demo
https://magic-memory-card-game.vercel.app/
---

## 📸 Preview

### 🃏 Game Board
![Game Board]
 <img src="public/img/card.png" width="45%" />

### 🎉 Win Screen
![Win Screen]
<img src="public/img/win.png" width="45%" />

---

## ✨ Features

- 🔀 Random card shuffle every game
- 🎯 Turn counter
- 🧠 Smart card matching logic
- 🚫 Disabled clicks while checking match
- 🎉 Win detection
- 🎊 Confetti celebration effect
- 🔄 New Game reset button

---

## 🛠️ Built With

- React (Functional Components)
- React Hooks (`useState`, `useEffect`)
- JavaScript (ES6)
- CSS3
- react-confetti

---

## 📂 Project Structure
src/
├── components/
│ └── SingleCard.jsx
├── App.jsx
├── App.css
├── SingleCard.css
└── main.jsx


---

## 🧠 Game Logic

- Cards are duplicated and shuffled.
- Player selects two cards per turn.
- If cards match → they remain flipped.
- If cards don't match → they flip back.
- Game ends when all cards are matched.

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/AzharAli-web/Magic-Memory-Card-Game.git

cd magic-memory-card-game

npm install

npm run dev