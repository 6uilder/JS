let pixels = document.querySelectorAll('.pixel');
let eraser = document.querySelector('.eraser');
let chosen = document.querySelector('.selector');
for (let pix of pixels) {
  pix.onclick = function() {
  pix.style.backgroundColor = chosen.value;
  if (eraser.checked) {
    pix.style.backgroundColor = 'white';
  }
}}