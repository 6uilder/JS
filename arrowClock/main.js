function clock() {
  const hoursArrow = document.querySelector('.hours');
  const minutesArrow = document.querySelector('.minutes');
  const secondsArrow = document.querySelector('.seconds');

  const deg = 6; //т.к. 1сек равна 6град на циферблате

  setInterval(() => {
    const day = new Date(); //текущая дата полностью
    const hours = day.getHours()*30; // на 30 т.к. 1час равен 30град циферблата
    const minutes = day.getMinutes()*deg; //т.е. умножаем тоже на 6градусов
    const seconds = day.getSeconds()*deg;

    hoursArrow.style.transform = `rotateZ(${hours+(minutes / 12)}deg)`;
    minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
    secondsArrow.style.transform = `rotateZ(${seconds}deg)`;

  },0)
}
clock();