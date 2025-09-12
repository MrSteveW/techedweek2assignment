const thumbLeft = document.getElementById("thumbLeft");
const leftButton = document.getElementById("leftButton");
const thumbRight = document.getElementById("thumbRight");
const rightButton = document.getElementById("rightButton");
const displayContainer = document.getElementById("displayContainer");

//Create an array of images
const images = [
  {
    src: "assets/plant1.webp",
    alt: "plant1",
    caption: "A first beautiful plant",
  },
  {
    src: "assets/plant2.webp",
    alt: "plant2",
    caption: "A second, wonderful plant",
  },
  {
    src: "assets/plant3.webp",
    alt: "plant3",
    caption: "A third, marvellous plant",
  },
  {
    src: "assets/plant4.webp",
    alt: "plant4",
    caption: "A fourth, marvellous plant",
  },
  {
    src: "assets/plant5.webp",
    alt: "plant5",
    caption: "A fifth, marvellous plant",
  },
  {
    src: "assets/plant6.webp",
    alt: "plant6",
    caption: "A sixth, marvellous plant",
  },
];

//Initialise counter at 0
let i = 0;

//on load put first image in displayContainer

thumbLeft.style.backgroundImage = `url('${images[images.length - 1].src}')`;
thumbRight.style.backgroundImage = `url('${images[i + 1].src}')`;
displayContainer.style.backgroundImage = `url('${images[i].src}')`;

leftButton.addEventListener("click", () => {
  if (i == 1) {
    thumbLeft.style.backgroundImage = `url('${images[images.length - 1].src}')`;
    i -= 1;
    displayContainer.style.backgroundImage = `url('${images[i].src}')`;
    thumbRight.style.backgroundImage = `url('${images[i + 1].src}')`;
  } else if (i == 0) {
    i = images.length - 1;
    displayContainer.style.backgroundImage = `url('${images[i].src}')`;
    thumbLeft.style.backgroundImage = `url('${images[i - 1].src}')`;
    thumbRight.style.backgroundImage = `url('${images[0].src}')`;
  } else {
    i -= 1;
    displayContainer.style.backgroundImage = `url('${images[i].src}')`;
    thumbLeft.style.backgroundImage = `url('${images[i - 1].src}')`;
    thumbRight.style.backgroundImage = `url('${images[i + 1].src}')`;
  }
});

rightButton.addEventListener("click", () => {
  if (i == images.length - 2) {
    thumbRight.style.backgroundImage = `url('${images[0].src}')`;
    i += 1;
    displayContainer.style.backgroundImage = `url('${images[i].src}')`;
    thumbLeft.style.backgroundImage = `url('${images[i - 1].src}')`;
  } else if (i == images.length - 1) {
    i = 0;
    thumbLeft.style.backgroundImage = `url('${images[images.length - 1].src}')`;
    displayContainer.style.backgroundImage = `url('${images[i].src}')`;
    thumbRight.style.backgroundImage = `url('${images[1].src}')`;
  } else {
    i += 1;
    displayContainer.style.backgroundImage = `url('${images[i].src}')`;
    thumbLeft.style.backgroundImage = `url('${images[i - 1].src}')`;
    thumbRight.style.backgroundImage = `url('${images[i + 1].src}')`;
  }
});
