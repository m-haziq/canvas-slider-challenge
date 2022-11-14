let images = {};
let isDragging = false;
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let sources = {
  image1: 'http://challenge.publitas.com/images/0.jpg',
  image2: 'http://challenge.publitas.com/images/1.jpg',
  image3: 'http://challenge.publitas.com/images/2.jpg',
  image4: 'http://challenge.publitas.com/images/3.jpg'
};
function loadImages(sources, callback) {
  let loadedImages = 0;
  let numImages = 0;
  for (var src in sources) {
    numImages++;
    images[src] = new Image();
    images[src].onload = function () {
      if (++loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
loadImages(sources, function (images) {
  ctx.drawImage(images.image1, 0, 0, 640, 400);
  ctx.drawImage(images.image3, 680, 50, 500, 300);
  ctx.drawImage(images.image2, 1220, 0, 500, 400);
  ctx.drawImage(images.image4, 1770, 0, 300, 400);

});
                        ///////////  (start)  drag images  section  /////////

let sliderContainer = document.querySelector('#canvas-container');
let innerSlider = document.querySelector('#myCanvas');

let pressed = false;
let startX;
let x;
sliderContainer.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.offsetX - innerSlider.offsetLeft;
  sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", () => {
  sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseout", () => {
  pressed = false;
});
sliderContainer.addEventListener("mouseup", () => {
  sliderContainer.style.cursor = "grab";
  pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();
  x = e.offsetX;
  if (x - startX < 0 && x - startX > -1520) {
    innerSlider.style.left = `${x - startX}px`;
  }
});
                         /////////// (End) drag images  section  /////////