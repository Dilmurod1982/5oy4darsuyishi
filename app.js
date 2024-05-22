const drums = document.querySelectorAll(".drum");
const crash = new Audio("./sounds/crash.mp3");
const kickBass = new Audio("./sounds/kick-bass.mp3");
const snare = new Audio("./sounds/snare.mp3");
const tom1 = new Audio("./sounds/tom-1.mp3");
const tom2 = new Audio("./sounds/tom-2.mp3");
const tom3 = new Audio("./sounds/tom-3.mp3");
const tom4 = new Audio("./sounds/tom-4.mp3");

drums.forEach((drum) => {
  drum.addEventListener("click", (e) => {
    if (e.target.id == "w") {
      crash.currentTime = 0;
      crash.play();
    } else if (e.target.id == "a") {
      kickBass.currentTime = 0;
      kickBass.play();
    } else if (e.target.id == "s") {
      snare.currentTime = 0;
      snare.play();
    } else if (e.target.id == "d") {
      tom1.currentTime = 0;
      tom1.play();
    } else if (e.target.id == "j") {
      tom2.currentTime = 0;
      tom2.play();
    } else if (e.target.id == "k") {
      tom3.currentTime = 0;
      tom3.play();
    } else if (e.target.id == "l") {
      tom4.currentTime = 0;
      tom4.play();
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key == "w") {
    crash.currentTime = 0;
    crash.play();
  } else if (e.key == "a") {
    kickBass.currentTime = 0;
    kickBass.play();
  } else if (e.key == "s") {
    snare.currentTime = 0;
    snare.play();
  } else if (e.key == "d") {
    tom1.currentTime = 0;
    tom1.play();
  } else if (e.key == "j") {
    tom2.currentTime = 0;
    tom2.play();
  } else if (e.key == "k") {
    tom3.currentTime = 0;
    tom3.play();
  } else if (e.key == "l") {
    tom4.currentTime = 0;
    tom4.play();
  } else if (e.key == "ц") {
    crash.currentTime = 0;
    crash.play();
  } else if (e.key == "ф") {
    kickBass.currentTime = 0;
    kickBass.play();
  } else if (e.key == "ы") {
    snare.currentTime = 0;
    snare.play();
  } else if (e.key == "қ") {
    snare.currentTime = 0;
    snare.play();
  } else if (e.key == "в") {
    tom1.currentTime = 0;
    tom1.play();
  } else if (e.key == "о") {
    tom2.currentTime = 0;
    tom2.play();
  } else if (e.key == "л") {
    tom3.currentTime = 0;
    tom3.play();
  } else if (e.key == "д") {
    tom4.currentTime = 0;
    tom4.play();
  }
});
