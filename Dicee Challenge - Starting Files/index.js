function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}
let randomNumber1 = getRandomNumber(6);

let image = document.querySelector(".img1");

console.log(image);

image.src = "images/dice" + randomNumber1 + ".png";
