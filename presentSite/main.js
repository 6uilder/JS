function busket() {
  alert('Корзина пуста, оформите заказ!')
}
let offset = 0; // смещение от левого края
const sliderLine= document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
  offset = offset + 400;
  if (offset > 1200) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
})

document.querySelector('.slider-prev').addEventListener('click', function(){
  offset = offset - 400;
  if (offset < 0) {
    offset = 1200;
  }
  sliderLine.style.left = -offset + 'px';
})

let all = document.querySelectorAll('.wrap_pop');
let wrap = document.querySelector('.container');
let num = 0;

function prev() {
  num--;
  if (num == -1) {
    num = all.length-1;
  }
  all[num].classList.remove('hiden');
  wrap.innerHTML = all[num].outerHTML;
}

function next() {
  num++;
  if (num == all.length) {
    num = 0;
  }
  all[num].classList.remove('hiden');
  wrap.innerHTML = all[num].outerHTML;
}