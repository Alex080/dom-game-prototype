// Создаем игровое поле из клеток
const boardContainer = document.getElementById('board');
const totalCells =12;

// Массив для хранения элементов клеток
const cells = [];

for(let i=0;i<totalCells;i++){
 const cell = document.createElement('div');
 cell.className='cell';
 cell.innerText= i+1;

 // Выделение текущей клетки (по умолчанию первая)
 if(i===0) cell.classList.add('current');

 boardContainer.appendChild(cell);
 cells.push(cell);
}

// Текущая позиция игрока
let currentPosition=0;

// Функция перемещения по полю
function movePlayer(steps){
 // Удаляем выделение с текущей клетки
 cells[currentPosition].classList.remove('current');

 currentPosition+=steps;

 if(currentPosition>=totalCells){
   currentPosition= totalCells-1;// или можно сделать цикл или финиш
   alert('Вы достигли конца поля!');
 }

 // Выделяем новую клетку
 cells[currentPosition].classList.add('current');
}

// Обработка кнопки вытягивания карточки
const cards=[
 {type:'слова', text:'Объяснить слово "Книга"'},
 {type:'наоборот', text:'Сказать слово задом наперед "Дом"'},
 {type:'рисунок', text:'Объяснить схему дома'},
 {type:'жесты', text:'Показать жест "Спать"'},
 {type:'да/нет', text:'Угадать предмет по вопросам'}
];

const drawCardBtn=document.getElementById('drawCardBtn');
const cardDisplay=document.getElementById('cardDisplay');

drawCardBtn.onclick=()=>{
 const randIndex=Math.floor(Math.random()*cards.length);
 const card=cards[randIndex];
 cardDisplay.innerHTML= 'Задание' ${card.type} : ${card.text};
};

// Обработка броска кубика
const rollDiceBtn=document.getElementById('rollDiceBtn');
const diceResult=document.getElementById('diceResult');

rollDiceBtn.onclick=()=>{
 const roll=Math.floor(Math.random()*6)+1;
 diceResult.innerText= 'Выпало число' ${roll};
 movePlayer(roll);
};
