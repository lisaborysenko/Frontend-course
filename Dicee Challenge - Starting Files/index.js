if (typeof window !== "undefined") {
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  let randomNumber1 = getRandomNumber(6);
  let randomNumber2 = getRandomNumber(6);

  let image = document.querySelector(".img1");
  let image2 = document.querySelector(".img2");

  console.log(image);
  console.log(image2);

  image.src = "images/dice" + randomNumber1 + ".png";
  image2.src = "images/dice" + randomNumber2 + ".png";

  if (randomNumber1 > randomNumber2) {
    let title = (document.querySelector("h1").textContent = "Player 1 wins!");
  } else if (randomNumber2 > randomNumber1) {
    let title2 = (document.querySelector("h1").textContent = "Player 2 wins!");
  } else {
    let title3 = (document.querySelector("h1").textContent = "Draw!");
  }
  console.log(title);
}
