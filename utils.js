function getRandomNum() {
  // King, Queen & Jack card values = 10
  // Ace card value = 1 or 11

  let randomNum = Math.floor(Math.random() * 14);
  console.log("randomNum: " + randomNum);

  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else if (randomNum === 0) {
    return 1;
  } else {
    return randomNum;
  }
}

export { getRandomNum };
