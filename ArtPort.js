// console.log("Hello from JavaScript!");
             

const character = document.querySelector("#character");
const bottomDraw = document.querySelector("#bottom-draw");

const audio = document.getElementById("ambientTrack");
const toggleImage = document.getElementById("audioToggleImage");
const volumeSlider = document.getElementById("musicVolumeSlider");

// Set initial volume
audio.volume = 0.5;
volumeSlider.value = 0.5;

// Click to play/pause and toggle spin
toggleImage.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggleImage.classList.add("spinActive");
  } else {
    audio.pause();
    toggleImage.classList.remove("spinActive");
  }
});

// Volume slider
volumeSlider.addEventListener("input", () => {
  audio.volume = parseFloat(volumeSlider.value);
});














// Start dragging
iconElement.addEventListener("mousedown", (event) => {
  isDraggingNow = true;
  xOffset = event.clientX - iconElement.offsetLeft;
  yOffset = event.clientY - iconElement.offsetTop;
  iconElement.style.cursor = "grabbing";
});

// Handle dragging movement
document.addEventListener("mousemove", (event) => {
  if (isDraggingNow) {
    iconElement.style.left = (event.clientX - xOffset) + "px";
    iconElement.style.top = (event.clientY - yOffset) + "px";
  }
});

// Stop dragging
document.addEventListener("mouseup", () => {
  isDraggingNow = false;
  iconElement.style.cursor = "grab";
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