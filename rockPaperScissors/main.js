let rock = document.querySelector('.rock');
let scissors = document.querySelector('.scissors');
let paper = document.querySelector('.paper');
let computerImg = document.querySelector('.computer__img');
let user = '';


function play() {
  
  let variation = ['images/rock.jpg', 
                    'images/scissors.jpg', 
                    'images/paper.jpg'];
  let choice = Math.floor(Math.random()*3);
  computerImg.src = variation[choice];
  computerImg.style.borderRadius = '0';
  if (user === 'r') {
    if (choice === 0) {
      document.querySelector('.result').textContent = 'Ничья!';
      document.querySelector('.result').style.backgroundColor = 'yellow';
    } else if (choice === 1) {
      document.querySelector('.result').textContent = 'Вы победили!';
      document.querySelector('.result').style.backgroundColor = 'green';
    } else if (choice === 2) {
      document.querySelector('.result').textContent = 'Вы проиграли!';
      document.querySelector('.result').style.backgroundColor = 'red';
    }
  }
  if (user === 's') {
    if (choice === 0) {
      document.querySelector('.result').textContent = 'Вы проиграли!';
      document.querySelector('.result').style.backgroundColor = 'red';
    } else if (choice === 1) {
      document.querySelector('.result').textContentwer = 'Ничья!';
      document.querySelector('.result').style.backgroundColor = 'yellow';
    } else if (choice === 2) {
      document.querySelector('.result').textContent = 'Вы победили!';
      document.querySelector('.result').style.backgroundColor = 'green';
    }
  }
  if (user === 'p') {
    if (choice === 0) {
      document.querySelector('.result').textContent = 'Вы победили!';
      document.querySelector('.result').style.backgroundColor = 'green';
    } else if (choice === 1) {
      document.querySelector('.result').textContent = 'Вы проиграли!';
      document.querySelector('.result').style.backgroundColor = 'red';
    } else if (choice === 2) {
      document.querySelector('.result').textContent = 'Ничья!';
      document.querySelector('.result').style.backgroundColor = 'yellow';
    }
  }
}

function rockF() {
  user = 'r';
}

function scissorsF() {
  user = 's';
}

function paperF() {
  user = 'p';
}

rock.addEventListener('click', rockF);
rock.addEventListener('click', play);
scissors.addEventListener('click', scissorsF);
scissors.addEventListener('click', play);
paper.addEventListener('click', paperF);
paper.addEventListener('click', play);
