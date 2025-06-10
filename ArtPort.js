// console.log("Hello from JavaScript!");
             

const character = document.querySelector("#character");
const bottomDraw = document.querySelector("#bottom-draw");




const audio = document.getElementById("ambientTrack");
const image = document.getElementById("audioToggleImage");
const volumeSlider = document.getElementById("musicVolumeSlider");

// Click image to toggle music and spin
image.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    image.classList.add("spin-animation");
  } else {
    audio.pause();
    image.classList.remove("spin-animation");
  }
});

// Volume control
audio.volume = parseFloat(volumeSlider.value);
volumeSlider.addEventListener("input", () => {
  audio.volume = parseFloat(volumeSlider.value);
});

 const slider = document.getElementById('musicVolumeSlider');

  slider.addEventListener('mousedown', () => {
    slider.classList.add('volume-adjusting');
  });

  slider.addEventListener('mouseup', () => {
    slider.classList.remove('volume-adjusting');
  });

  slider.addEventListener('mouseleave', () => {
    slider.classList.remove('volume-adjusting');
  });

const moveable = document.getElementById("moveable");

  let isDragging = false;
  let offsetX, offsetY;

  moveable.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      moveable.style.left = `${e.pageX - offsetX}px`;
      moveable.style.top = `${e.pageY - offsetY}px`;
    }
  });


function characterToggle() {
  // alert ("Welcome To My Page!!");
  character.classList.toggle("inside"); 
};
function drawToggle() {
  bottomDraw.classList.toggle("open"); 
};

character.addEventListener("click", characterToggle);
bottomDraw.addEventListener("click", drawToggle);


const cat = document.querySelector(".cat");
function catAudio() {
  new Audio("kitten-meow-not-cute-purr-93405-clipped.mp3").play();
}
cat.addEventListener("click", catAudio);


const piggybank = document.querySelector(".piggybank");
function pigAudio() {
  new Audio("coin.mp3").play();
}
piggybank.addEventListener("click", pigAudio);

//Make the DIV element draggagle:
dragElement(document.getElementById("moveable"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("todo")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById("moveable").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const dino = document.getElementById("dino");
  const popup = document.getElementById("dinoPopup");
  const secondImage = document.querySelector(".second-img");
  const dinoSound = document.getElementById("dinoSound");

  // Show popup after animation
  dino.addEventListener("animationend", () => {
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 4000);
  });

  // Play sound and trigger fall
  dino.addEventListener("click", () => {
    popup.style.display = "none";
    dino.classList.add("fall");
    secondImage.classList.add("fall");

    // Play audio
    if (dinoSound) {
      dinoSound.currentTime = 0; // Rewind if needed
      dinoSound.play().catch(e => console.log("Audio failed to play:", e));
    }
  });
});


const drawOpened = document.querySelector(".Draw-opened");
const cords = [
  {
    coords: [0.153, 0.35, 0.283, 0.65],
    url: "https://discord.com/channels/729649530269728808/1336862214984040469"
  },
  {
    coords: [0.383, 0.35, 0.513, 0.65],
    url: "https://www.pinterest.com"
  },
  {
    coords: [0.646, 0.35, 0.776, 0.65],
    url: "https://genshin.hoyoverse.com/en/gift"
  }
];
drawOpened.addEventListener("mousemove", function (event) {
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const width = rect.width;
  const height = rect.height;

  let hovering = false;

  for (const { coords } of cords) {
    const [x1p, y1p, x2p, y2p] = coords;
    const x1 = x1p * width;
    const y1 = y1p * height;
    const x2 = x2p * width;
    const y2 = y2p * height;

    if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
      drawOpened.style.cursor = "url('images/yarn-ball.png'), auto";
      hovering = true;
      return;
    }
  }

  drawOpened.style.cursor = "auto";
});

drawOpened.addEventListener("click", function (event) {
  const rect = this.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const width = rect.width;
  const height = rect.height;

  for (const { coords, url } of cords) {
    const [x1p, y1p, x2p, y2p] = coords;
    const x1 = x1p * width;
    const y1 = y1p * height;
    const x2 = x2p * width;
    const y2 = y2p * height;

    if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
      window.open(url, "_blank");
      return;
    }
  }
});

drawOpened.addEventListener("mouseleave", function () {
  drawOpened.style.cursor = "auto";
});