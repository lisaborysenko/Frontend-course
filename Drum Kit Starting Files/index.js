numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    }
  });
}

document.addEventListener("keypress", function (event) {
  let number = event.key;
  switch (number) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
  }
});

document.addEventListener("keypress", function (event) {
  console.log(event.key);
  // console.log();
});

// let drumButtons = document.querySelectorAll(".drum");
// const crash = new Audio("sounds/crash.mp3");
// const kickBass = new Audio("sounds/kick-bass.mp3");
// const snare = new Audio("sounds/snare.mp3");
// const tom1 = new Audio("sounds/tom-1.mp3");
// const tom2 = new Audio("sounds/tom-2.mp3");
// const tom3 = new Audio("sounds/tom-3.mp3");
// const tom4 = new Audio("sounds/tom-4.mp3");

// for (var i = 0; i < drumButtons.length; i++) {
//   drumButtons[0].addEventListener("click", function handleClick() {
//     crash.play();
//   });
//   drumButtons[1].addEventListener("click", function handleClick() {
//     kickBass.play();
//   });
//   drumButtons[2].addEventListener("click", function handleClick() {
//     snare.play();
//   });
//   drumButtons[3].addEventListener("click", function handleClick() {
//     tom1.play();
//   });
//   drumButtons[4].addEventListener("click", function handleClick() {
//     tom2.play();
//   });
//   drumButtons[5].addEventListener("click", function handleClick() {
//     tom3.play();
//   });
//   drumButtons[6].addEventListener("click", function handleClick() {
//     tom4.play();
//   });
// }
