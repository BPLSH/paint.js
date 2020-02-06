const canvas = document.querySelector('#jsCanvas');
const context = canvas.getContext("2d");
const range = document.getElementById("range");
const saveBtn = document.getElementById('save');
const colorUl = document.querySelector('.colorList');
const changeBtn = document.getElementById('change');

const size = 600;

canvas.width = size;
canvas.height = size;

context.strokeStyle = "black";
context.fillStyle = "white";
context.fillRect(0, 0, size, size);
context.lineWidth = 2.5;

let startX = 0, startY = 0;
let drawing = false;

const list = colorUl.children;
let i;

function changeText(){
  if(changeBtn.textContent === 'Paint'){
    changeBtn.innerHTML = 'Fill';
  }else{
    changeBtn.innerHTML = 'Paint';
  }
}

function setColor(event){
  const newColor = event.target.style.backgroundColor;

  if(change.textContent === 'Fill'){
    context.strokeStyle = newColor;
  }
  else {
    context.fillStyle= newColor;
    context.fillRect(0,0, size,size);
  }
}
for(i = 0; i < list.length; i++)
{
  let btn = list[i].querySelector('button');
  //const color = btn.style.backgroundColor;

  btn.addEventListener("click", setColor);
}

function draw(curX, curY){
  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(curX, curY);
  context.stroke();
}
function mouseDown(e){
  drawing = true;
  startX = e.offsetX;
  startY = e.offsetY;
}
function mouseMove(e){
  if(!drawing) return;
  const curX = e.offsetX;
  const curY = e.offsetY;
  draw(curX, curY);
  startX = curX;
  startY = curY;
}
function mouseUp(){
  drawing = false;
}
function mouseLeave(){
  drawing = false;
}
function rangeChange(){
  const v = range.value;
  context.lineWidth = v;
}
function saveImage(){
  const link = document.createElement("a");
  link.href = canvas.toDataURL();
  link.download = "myPainting.png";
  link.click();
}
if(canvas){
  canvas.addEventListener("mousedown", mouseDown);
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", mouseUp);
  canvas.addEventListener("mouseleave", mouseLeave);
  range.addEventListener("input", rangeChange);
  saveBtn.addEventListener("click", saveImage);
  changeBtn.addEventListener("click", changeText);
}
/*
const change = document.querySelector('#change');
const save = document.querySelector('#save');
const range = document.querySelector('input');

let startX = 0, startY = 0;
let drawing = false;

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
    canvas.fillStyle= newColor;
    canvas.fillRect(50,20, 100,50);

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
function saveImage(event){
  const link = document.createElement('a');
  link.href = canvas.toDataURL();
  link.download = "mypainting.png";
  link.click();
}

function clickSaveBtn(){
  save.addEventListener("click", saveImage);
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
  clickSaveBtn();
}
init();
*/
