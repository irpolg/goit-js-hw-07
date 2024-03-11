document.body.style.backgroundColor = '#ffffff'; //початковий фон - білий

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl   = document.querySelector("#controls");
const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesElDiv = document.querySelector("#boxes"); // id

inputEl.addEventListener("input", handleInput);
function handleInput(event) {
  let inputValue = 0;
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}

createBtn.addEventListener("click", () => {
    if (Number(inputEl.value) < 0 || Number(inputEl.value) > 100) {
      inputEl.value = '';
      return (boxesElDiv.innerHTML = '');
    } else {
    console.log(inputEl.value);
    createBoxes(inputEl.value.trim());  
    }
    inputEl.value = '';
}
);

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
    inputEl.value = '';
    return (boxesElDiv.innerHTML = '');
}

function createBoxes() {
  boxesElDiv.innerHTML = ''; //забирає попередні квадрати після повторного кліку по кнопці Create
  let widthEl  = 30;
  let heightEl = 30;
  const divArr = [];
  for (let i=0; i < Number(inputEl.value); i += 1) {
    widthEl  += 10;
    heightEl += 10;
    const divEl = document.createElement('div');
    divEl.classList = 'item';
    divEl.style.height = `${widthEl}px`;
    divEl.style.width  = `${heightEl}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divArr.push(divEl);
  }
  return boxesElDiv.append(...divArr);
}

// Завдання 6
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>
// <div id="boxes"></div>

// Напиши скрипт створення й очищення колекції елементів 
// з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість 
// елементів. Після натискання на кнопку Create має 
// рендеритися (додаватися в DOM) колекція з відповідною 
// кількістю елементів і очищатися значення в інпуті. 

// При повторному натисканні на кнопку Create поверх 
// старої колекції має рендеритись нова. 

// Після натискання на кнопку Destroy колекція елементів 
// має очищатися.

// Після натискання користувачем на кнопку Create треба 
// провалідувати значення в input, воно має бути в межах 
// від 1 до 100 включно. Тільки якщо воно задоволяє умову, 
// мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію 
// createBoxes(amount), яка приймає один параметр — число, 
// що зберігає кількість елементів для рендеру.