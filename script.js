// all images source
let allimages = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
];
let imgSource = document.getElementById("image-slider");
let bulletsContainer = document.getElementById("bullets-container");
let imgCount = allimages.length;
let pos = 1;
let mybullets;
let arrofbullets = [];

// pagination bullets function
function pagination() {
  for (let i = 0; i < imgCount; i++) {
    mybullets = document.createElement("span");
    mybullets.classList.add("thebullet");
    mybullets.textContent = i + 1;
    arrofbullets.push(mybullets);
    bulletsContainer.append(mybullets);
  }
}

// change slides function
function imageslider() {
  for (let f = 0; f < arrofbullets.length; f++) {
    if (f != pos) {
      arrofbullets[f].classList.remove("active-bullet");
    } else {
      arrofbullets[pos].classList.add("active-bullet");
    }
  }

  imgSource.src = allimages[pos];
  if (pos < imgCount - 1) {
    pos++;
  } else {
    pos = 0;
  }
}

// change slide every 4000ms(4sec)
window.onload = () => {
  pagination();
  imgSource.src = allimages[0];
  arrofbullets[0].classList.add("active-bullet");
  setInterval("imageslider()", 4000);
};
