# 🎲 Tenzies — React Game

A fun and interactive dice-rolling game built with **React**.
Roll the dice until all ten show the same number. Click a die to "hold" it between rolls.
When all dice match, the game triggers **confetti**, announces the win via screen reader, and allows you to start a **New Game**.

---

## 🚀 Live Demo
👉 **[Click here to play Tenzies](https://tenzies-eb.netlify.app/)**

---

## 📸 Preview


![App Screenshot](public/screenshot.png)

---

## ✨ Features

* 🎯 **Gameplay**

  * Roll 10 dice until they all match.
  * Click dice to toggle **held** state.
  * Press **Roll** until all dice match.
  * When the game is won → **Confetti animation!**

* 🧠 **Stateful Logic**

  * `useState` to store dice values.
  * `useEffect` to detect win condition.
  * `useRef` to focus the "New Game" button for accessibility.

* ♿ **Accessibility**

  * Screen reader–friendly live region announcing win state.
  * Each die includes `aria-label` and `aria-pressed`.
  * Focus automatically moves to "New Game" button when game ends.

* 💨 Smooth Render

  * Dice generated with unique IDs using **nanoid**.
  * Efficient re-renders.

* 📱 Responsive Layout

  * Works well on desktop & mobile.

---

## 🧩 How It Works

### 1. Dice Generation

The game starts with **10 random dice**:

```js
{
  value: Math.ceil(Math.random() * 6),
  isHeld: false,
  id: nanoid()
}
```

### 2. Win Condition

The player wins when:

```js
dice.every(die => die.isHeld) && 
dice.every(die => die.value === dice[0].value)
```

### 3. Reset Logic

When the game is won, the button swaps from **Roll** → **New Game**.

---

## 🛠️ Tech Stack

* **React 19**
* **Vite**
* **nanoid** – unique IDs for dice
* **react-confetti** – win animation
* **react-use** – window size for confetti
* **ESLint** – clean code

---

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/Elizbeh/tenzies.git

# Enter directory
cd tenzies

# Install dependencies
npm install

# Run locally
npm run dev
```

---

## 📁 Project Structure

```
src/
│── App.jsx        # Main game logic
│── Die.jsx        # Die component
│── index.jsx      # React root
│── styles.css     # Optional: your styles
```

---

## 🧪 Future Improvements

* ⏱️ Add a timer
* 🎫 Add roll counter
* 🏆 Store best scores in localStorage
* 🎨 Add themes

---

## 📄 License

MIT License — free to use and modify!

