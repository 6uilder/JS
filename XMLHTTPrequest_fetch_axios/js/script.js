window.addEventListener("DOMContentLoaded", () => { //можно "load" вместо "DOMContentLoaded"
  console.log('Run with server!!!')
  function req() {
    // ----------------------------через устаревший нативный XMLHttpRequest()-------------
    // const request = new XMLHttpRequest();
    // request.open("GET", "http://localhost:3000/people");
    // request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    // request.send();
    // request.addEventListener("load", () => { //если "load" тогда без стадий
    //   if (request.status == 200) { //значения readyState можно глянуть на MDN
    //     let data = JSON.parse(request.response);
    //     createCards(data);
    //   } else {
    //     console.error('Что-то пошло не так!');
    //   }
    // });
    //______________________________________________________________________________________________

    //-----------------------------через нативный fetch()------------------------------------
    // fetch("http://localhost:3000/people")
    //   .then(data => data.json())
    //   .then(data => createCards(data))
    //   .catch(err => console.error(err));
    //______________________________________________________________________________________
    


    
    //------------------------------через библиотеку axios------------------------------------
    async function getResource(url) { 
        const res = await axios(`${url}`); 
        //axios.post("http://localhost:3000/people", obj); //не в этом коде, если нужно сделать ПОСТ запрос, а не ГЕТ в аксиос
        if (res.status !== 200) { 
          throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return res; //тут не нужно переводить из джейсона, т.к. аксиос делает это автоматически
      }

    
    getResource("http://localhost:3000/people")
      .then(data => createCards(data.data))
      .then(err => console.error(err));

    this.remove(); //удаляем то на чем произошло событие(т.е. кнопку)
  }
  document.querySelector("button").addEventListener("click", req, {"once":true}); // благодаря опции "once" обработчик сработае только 1 раз

  function createCards(response) {
    response.forEach(item => {
      let card = document.createElement("div");
      card.classList.add("card");
      let icon;
      if (item.sex === "male") {
        icon = "icons/mars.png";
      } else {
        icon = "icons/female.png"
      }

      card.innerHTML = `
        <img src=${item.photo} alt="photo">
        <div class="name">${item.name} ${item.surname}</div>
        <div class="sex">
          <img src=${icon} alt="mail">
        </div>
        <div class="age">${item.age}</div>
      `;
      document.querySelector(".app").appendChild(card);
    });
  }
})
// И ПЛЮС ВИДОС ПО ОТПРАВКЕ ДАННЫХ 3-МЯ МЕТОДАМИ:
//https://www.youtube.com/watch?v=4HVmj5LffgM&list=PLQEds1ESt7cvWq2NwkBDG-3OOBytuuytZ&index=3
