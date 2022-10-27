const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const color = document.querySelector('.color');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
  const bgColor = colors[getRandomColors()];
  color.textContent = bgColor;
  document.body.style.backgroundColor = bgColor;


})
function getRandomColors(){
   return  Math.trunc(Math.random() * colors.length) 

}