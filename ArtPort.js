// console.log("Hello from JavaScript!");
             

const character = document.querySelector("#character");
const bottomDraw = document.querySelector("#bottom-draw");

const music = document.getElementById("background-music");
const button = document.getElementById("toggle-music");

let isPlaying = false;

button.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    button.textContent = "Pause Music";
  } else {
    music.pause();
    button.textContent = "Play Music";
  }
  isPlaying = !isPlaying;
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