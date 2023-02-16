// Функция которая изменяет цвет исходя из атрибута value у option
function changeColor(event) {
    if (event.target.value != 'Default'){
        document.body.style.backgroundColor = `${event.target.value}`;
    }
    else{
        document.body.style.backgroundColor = 'White';
    }
}
// Сюда пишите название события, которое должно произойти после смены option
const selectColorEvent = 'change';
// Создаем события на тег select.
selectColor.addEventListener(selectColorEvent, changeColor);
// Напишите, почему событие делаем на тег select, а работаем с тегом option?
// Здесь писать.
// Потому что событие происходит не на теге option а на теге select (т.е тег option никак не изменяеться) 
// А с тегом option мы работаем только для того что бы получить значение value