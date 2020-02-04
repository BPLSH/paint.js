const canvas = document.querySelector('#jsCanvas');
const colorList = document.querySelector('.colorList');
/*
function setColors(event){
  const color = event.target.style.backgroundColor;

  canvas.style.color = color;
}
function createColorBtn(){
  const li = document.createElement("li");
  const button = document.createElement("button");
  const length = colorList.getElementsByTagName("li").length;

  button.id = `button_${length+1}`;

  button.addEventListener("click", setColors);
  li.appendChild(button);
  colorList.appendChild(li);
}

function init(){
  //while(length < 9){
  let i = 0;
  while(i < 9){
    createColorBtn();
    i++;
  }
  //}
}
init();
*/
function changeColor(newColor){
  canvas.style.backgroundColor = newColor;
}
