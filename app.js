const thumbLeft = document.getElementById("thumbLeft");
const leftButton = document.getElementById("leftButton");
const thumbRight = document.getElementById("thumbRight");
const rightButton = document.getElementById("rightButton");
const displayContainer = document.getElementById("displayContainer");
const caption = document.getElementById("caption");

//Create an array of images
const images = [
  {
    src: "assets/plant1.webp",
    alt: "plant1",
    caption: "A beautiful clarinervium",
  },
  {
    src: "assets/plant2.webp",
    alt: "plant2",
    caption: "A colourful codiaeum",
  },
  {
    src: "assets/plant3.webp",
    alt: "plant3",
    caption: "A stylish monstera",
  },
  {
    src: "assets/plant4.webp",
    alt: "plant4",
    caption: "A tall sansevieria",
  },
  {
    src: "assets/plant5.webp",
    alt: "plant5",
    caption: "A gorgeous calathea",
  },
  {
    src: "assets/plant6.webp",
    alt: "plant6",
    caption: "A rubber plant, ficus elastica",
  },
];

//Initialise counters
let i = 0;
let j = images.length - 1;
let k = 1;

//on load first images
displayImages(i, j, k);

//display images
function displayImages(i, j, k) {
  displayContainer.style.backgroundImage = `url('${images[i].src}')`;
  displayContainer.ariaLabel = `${images[i].alt}`;
  caption.textContent = `${images[i].caption}`;
  thumbLeft.style.backgroundImage = `url('${images[j].src}')`;
  thumbRight.style.backgroundImage = `url('${images[k].src}')`;
}

function leftClick() {
  if (i == 0) {
    i = images.length;
  } else if (j == 0) {
    j = images.length;
  } else if (k == 0) {
    k = images.length;
  }
  i -= 1;
  j -= 1;
  k -= 1;
  displayImages(i % images.length, j % images.length, k % images.length);
}

function rightClick() {
  i += 1;
  j += 1;
  k += 1;
  displayImages(i % images.length, j % images.length, k % images.length);
}

leftButton.addEventListener("click", leftClick);

rightButton.addEventListener("click", rightClick);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    leftClick();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    rightClick();
  }
});
