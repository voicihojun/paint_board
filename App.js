const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const range = document.getElementById("inputRange");
const colors = document.querySelector(".container__colors");
const paintFillButton = document.getElementById("paint__fill__button");
const saveButton = document.querySelector("#save__button");

canvas.width = 500;
canvas.height = 500;

context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);
context.strokeStyle = "black";
context.lineWidth = 2.5;

let x = 0;
let y = 0;
let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  if (paintFillButton.innerText === "Fill") {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
  } else {
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

canvas.addEventListener("mouseup", (e) => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    isDrawing = false;
  }
});

canvas.addEventListener("mouseleave", (e) => {
  isDrawing = false;
});

canvas.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

range.addEventListener("input", (e) => {
  const brushSize = e.target.value;
  context.lineWidth = brushSize;
});

colors.addEventListener("click", (e) => {
  const brushColor = e.target.style.backgroundColor;
  context.strokeStyle = brushColor;
  context.fillStyle = brushColor;
});

paintFillButton.addEventListener("click", (e) => {
  if (e.target.innerText === "Paint") {
    e.target.innerText = "Fill";
  } else {
    e.target.innerText = "Paint";
  }
});

saveButton.addEventListener("click", (e) => {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "canvas.png";
  link.click();
  console.log(link);
});
