import { itemData } from "./data.js";
import { getRandomNum } from "./utils.js";

let sum = 0;
let hasWonGame = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message");
let items = document.querySelector("#items");
let itemsDOM = "";
let startBtn = document.querySelector("#start-btn");
let playBtn = document.querySelector("#play-btn");

// Event Listeners

startBtn.addEventListener("click", openBackpack);
playBtn.addEventListener("click", renderGame);

// Functions

function openBackpack() {
  // slide open bag
  // INSERT CODE HERE

  // hide startBtn
  startBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");
}

function renderGame() {
  if (isAlive && !hasWonGame) {
    let num = getRandomNum();
    sum += num;

    // Images
    if (sum <= 21) {
      for (let i = 0; i < num; i++) {
        let randomItem = Math.floor(Math.random() * itemData.length);
        itemsDOM += `<img class="item" src="./images/${itemData[randomItem].img}" alt="${itemData[randomItem].alt}">`;
      }
      items.innerHTML = itemsDOM;
    } else if (sum > 21) {
      itemsDOM = "";
      for (let i = 0; i < 21; i++) {
        itemsDOM += `<img class="item explosion" src="./images/explosion.svg" alt="An explosion">`;
      }
      items.innerHTML = itemsDOM;
    }

    // Messages
    if (sum < 21) {
      message = "You can fit more items in my..";
      isAlive = true;
      hasWonGame = false;
    } else if (sum === 21) {
      message = "Hooray! You packed my..";
      hasWonGame = true;
    } else {
      message = "Oh no! You busted my..";
      isAlive = false;
    }
    messageEl.textContent = message;

    // Reset
    if (hasWonGame || !isAlive) {
      playBtn.textContent = "Play Again!";
      sum = 0;
      itemsDOM = "";
      hasWonGame = false;
      isAlive = true;
    } else {
      playBtn.textContent = "Pack Items!";
    }
  }
}
