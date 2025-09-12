const thumbImage = "thumb1.jpg";
const mainImage = "plant1.jpg";

const leftButton = document.getElementById("leftButton");

const thumbLeft = document.getElementById("thumbLeft");

const largeImageContainer = document.getElementById("largeImage");

leftButton.addEventListener("click", () => {
  thumbLeft.style.backgroundImage = `url('${thumbImage}')`;
  largeImageContainer.style.backgroundImage = `url('${mainImage}')`;
});

//
