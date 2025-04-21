// console.log("Hello from JavaScript!");
             


const draw = document.querySelector("#draw");


function drawToggle() {
  // alert ("Welcome To My Page!!");
  draw.classList.toggle("open"); 
};

draw.addEventListener("click", drawToggle);


