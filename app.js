const thumbLeft = document.getElementById("thumbLeft");
const leftButton = document.getElementById("leftButton");
const thumbRight = document.getElementById("thumbRight");
const rightButton = document.getElementById("rightButton");
const displayContainer = document.getElementById("displayContainer");

//Create an array of images
const images = [
  { src: "assets/plant1.webp", alt: "plant1", caption: "A beautiful plant" },
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
    caption: "A third, marvellous plant",
  },
  {
    src: "assets/plant6.webp",
    alt: "plant6",
    caption: "A sixth, marvellous plant",
  },
];

//Initialise counter at 1
let i = 1;

//on load put first image in displayContainer
displayContainer.innerHTML = i;
thumbLeft.innerHTML = images.length;
thumbRight.innerHTML = i + 1;
displayContainer.appendChild;

leftButton.addEventListener("click", () => {
  if (i == 2) {
    thumbLeft.innerHTML = images.length;
    i -= 1;
    displayContainer.innerHTML = i;
    thumbRight.innerHTML = i + 1;
  } else if (i == 1) {
    i = images.length;
    displayContainer.innerHTML = i;
    thumbLeft.innerHTML = i - 1;
    thumbRight.innerHTML = 1;
  } else {
    i -= 1;
    displayContainer.innerHTML = i;
    thumbLeft.innerHTML = i - 1;
    thumbRight.innerHTML = i + 1;
  }
});

rightButton.addEventListener("click", () => {
  if (i == 5) {
    thumbRight.innerHTML = 1;
    i += 1;
    displayContainer.innerHTML = i;
    thumbLeft.innerHTML = i - 1;
  } else if (i == images.length) {
    i = 1;
    thumbLeft.innerHTML = images.length;
    displayContainer.innerHTML = i;
    thumbRight.innerHTML = 2;
  } else {
    i += 1;
    displayContainer.innerHTML = i;
    thumbLeft.innerHTML = i - 1;
    thumbRight.innerHTML = i + 1;
  }
});

// leftButton.addEventListener("click", () => {
//   thumbLeft.style.backgroundImage = `url('${thumbImage}')`;
//   displayContainer.style.backgroundImage = `url('${mainImage}')`;
// });
