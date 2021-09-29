const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart); //берем элемент
item.addEventListener('dragend', dragend); //отпускаем элемент

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover); //над территорией
  placeholder.addEventListener('dragenter', dragenter); //на территории
  placeholder.addEventListener('dragleave', dragleave); //ушли с территории
  placeholder.addEventListener('drop', drop); //отпустили
}

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0)
  
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide');
  //event.target.className = 'item'      это второй вариант(перетирает классы вместо удаления каждого)

}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add('hovered');
}

function dragleave(event) {
  event.target.classList.remove('hovered');
}

function drop(event) {
  event.target.classList.remove('hovered');
  event.target.append(item)
}
