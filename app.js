const canvas = document.querySelector('#jsCanvas');
const context = canvas.getContext("2d");

const change = document.querySelector('#change');
const save = document.querySelector('#save');
const colorUl = document.querySelector('.colorList');
const range = document.querySelector('input');

let startX = 0, startY = 0;
let drawing = false;
/*
mirror.addEventListener('contextmenu', function (e) {
    let dataURL = canvas.toDataURL('image/png');
    mirror.src = dataURL;
});

function clickSaveBtn(){
  save.addEventListener('click', function (e) {
    let dataURL = canvas.toDataURL('image/png');
    save.href = dataURL;
  });
}
*/
function setLineWidth(e){
  const width = e.target.value;
  context.lineWidth = width;
}

function changeLineWidth(){
  range.addEventListener("input", setLineWidth);
}
function setColor(event){
  const newColor = event.target.style.backgroundColor;

  if(change.textContent === 'Fill'){
    context.strokeStyle = newColor;
  }
  else {
    canvas.style.backgroundColor = newColor;
  }
}
function clickColorBtn(){
  const list = colorUl.children;
  let i;

  for(i = 0; i < list.length; i++)
  {
    let btn = list[i].querySelector('button');
    //const color = btn.style.backgroundColor;

    btn.addEventListener("click", setColor);
  }
}
function changeText(){
  if(change.textContent === 'Paint'){
    change.innerHTML = 'Fill';
  }else{
    change.innerHTML = 'Paint';
  }
}
function clickChangeBtn(){
  change.addEventListener("click", changeText);
}


function startDrawing(){
  drawing = true;
}
function stopDrawing(){
  drawing = false;
}

function draw(curX, curY){

    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(curX, curY);
    context.stroke();

}
function mouseDown(event){
  startDrawing();
  startX = event.offsetX;
  startY = event.offsetY;
}
function mouseMove(event){
  const curX = event.offsetX;
  const curY = event.offsetY;

  if(!drawing) return;

  draw(curX, curY);
  startX = curX;
  startY = curY;
}


function mouseUp(event){
  stopDrawing();
}
function mouseLeave(event){
  stopDrawing();
}
function drawCanvas(){
  if(canvas){
    canvas.width = 600;
    canvas.height = 500;

    context.strokeStyle = 'black';
    context.lineWidth = 2.5;

    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mouseup", mouseUp);
    canvas.addEventListener("mouseleave", mouseLeave);
  }
}
function init(){
  drawCanvas();
  clickColorBtn();
  changeLineWidth();
  clickChangeBtn();
}
init();
