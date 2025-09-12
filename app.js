const thumbImage = "assets/thumb1.webp";
const mainImage = "assets/plant1.webp";

const leftButton = document.getElementById("leftButton");

const thumbLeft = document.getElementById("thumbLeft");

const largeImageContainer = document.getElementById("largeImage");

leftButton.addEventListener("click", () => {
  thumbLeft.style.backgroundImage = `url('${thumbImage}')`;
  largeImageContainer.style.backgroundImage = `url('${mainImage}')`;
});

//
