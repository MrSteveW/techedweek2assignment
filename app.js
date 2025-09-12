const thumbLeft = document.getElementById("thumbLeft");
const leftButton = document.getElementById("leftButton");
const thumbRight = document.getElementById("thumbRight");
const rightButton = document.getElementById("rightButton");
const displayContainer = document.getElementById("displayContainer");

let i = 1;

//Create an array of images

const images = [
  { src: "assets/plant1.webp", alt: "plant1", caption: "A beautiful plant" },
  {
    src: "assets/plant2.webp",
    alt: "plant2",
    caption: "A second, wonderful plant",
  },
];

//on load put first image on mainContainer
displayContainer.innerHTML = i;
displayContainer.appendChild;

rightButton.addEventListener("click", () => {
  i += 1;
  displayContainer.innerHTML = i;
  thumbLeft.innerHTML = i - 1;
  thumbRight.innerHTML = i + 1;
});
// leftButton.addEventListener("click", () => {
//   thumbLeft.style.backgroundImage = `url('${thumbImage}')`;
//   displayContainer.style.backgroundImage = `url('${mainImage}')`;
// });
