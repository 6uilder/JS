let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");  

let ball = new Image(); 
let sky = new Image();
let thumbtack = new Image();
let boom = new Audio();


ball.src = "img/ball.png";
sky.src = "img/sky.png";
thumbtack.src = "img/thumbtack.png";
boom.src = "audio/boom.mp3";

let score = 0;
let time = 60;
let fly = 2; //скорость взлёта шаров
let timer = setInterval(() => {
  time--
}, 1000);

// Позиция кнопки
let thumbtackPosX = 477;
let thumbtackPosY = 0;

document.onkeydown = function(e) { //keyCode вскоре перестанет работать, потому двойная проверка
  if (e.keyCode == 37){
    thumbtackPosX -= 42;
  }
  else if (e.key == 37){
    thumbtackPosX -= 42;
  }
  if(e.keyCode == 39) {
    thumbtackPosX += 42;
  }
   else if (e.key == 39){
    thumbtackPosX += 42;
  }
}


// Создание шаров
let balls = [];

balls[0] = {
 x : cvs.width/2,
 y : cvs.height-150
}

function draw() {

  document.getElementById('button').style.display = 'none';
  ctx.drawImage(sky, 0, 0);
  ctx.drawImage(thumbtack, thumbtackPosX, thumbtackPosY);

  for(let i = 0; i < balls.length; i++) {
    ctx.drawImage(ball, balls[i].x, balls[i].y);
    balls[i].y -= fly;

    if(balls[i].x - 30 <= thumbtackPosX && thumbtackPosX <= balls[i].x + 30 && balls[i].y == 64){
      console.log('boomBag');
      score++;
      boom.play();
      balls[i].x = 1500;
    }

    if(balls[i].y == 300) { //момент создания нового шара
      balls.push({
        x : Math.floor(Math.random() * 924),
        y : cvs.height
      });
    }
  }
  
 
  ctx.fillStyle = "#000";
  ctx.font = "24px Arial";
  ctx.fillText("Счет: " + score, 10, cvs.height - 30);
  ctx.fillText("Время: " + time + " сек", 10, cvs.height - 5);

  if(time == 0) { 
    clearInterval(timer);
    return;
  }
//  location.reload(); // Перезагрузка страницы
  requestAnimationFrame(draw); 
}
