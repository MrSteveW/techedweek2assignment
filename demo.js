// Create JS objects for thumbnails and displayContainer
const thumbnails = document.getElementById("thumbnails");
const displayContainer = document.getElementById("displayContainer");

//Create an array of images

const images = [
  { src: "assets/plant1.webp", alt: "plant1", caption: "A beautiful plant" },
  {
    src: "assets/plant2.webp",
    alt: "plant2",
    caption: "A second, wonderful plant",
  },
];

function createThumbnails() {
  //loop through each image object

  images.forEach(function (image) {
    //create a thumbnail html element
    let imageElement = document.createElement("img");
    console.log(`current image is`, image);
    //set the thumbnail element's property to current object source
    imageElement.src = image.src;

    //add event listener for the new thumbnail to create Big Image
    imageElement.addEventListener("click", () => {
      createBigImage(image);
    });

    //append thumbnail element to the DOM
    thumbnails.appendChild(imageElement);
  });
}

createThumbnails();
