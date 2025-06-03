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
  const fallImg = document.querySelector(".fall-img");
  const popup = document.querySelector(".popup-image");

  // Show the popup after the falling image slides in
  fallImg.addEventListener("animationend", () => {
    popup.style.display = "block";
  });

  // Also hide popup immediately when clicked
  fallImg.addEventListener("click", () => {
    popup.style.display = "none"; // hide when fall starts
    fallImg.classList.add("fall"); // trigger falling animation
  });
});



function makeItFall() {
  const firstImage = document.querySelector('.first-img');
  const secondImage = document.querySelector('.second-img');
  firstImage.classList.add('fall');
  secondImage.classList.add('fall');  // Automatically make the second image fall
}  
const fallImg = document.querySelector('.fall-img');

fallImg.addEventListener('animationend', () => {
  fallImg.style.top = '0px'; // Move it further up
});