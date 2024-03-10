function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColorSpan = document.querySelector(".color");
const setColorBtn   = document.querySelector(".change-color");
const setColor = () => {
  textColorSpan.textContent  = getRandomHexColor();
  document.body.style.background = textColorSpan; 
}

setColorBtn.addEventListener("click", setColor);


// Завдання 5 (див задача 4 submit - вебінар 08.03.2024)
// Напиши скрипт, який змінює колір фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color і 
// задає це значення кольору текстовим вмістом 
//для span.color.
// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй 
// функцію getRandomHexColor().

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Зверни увагу, що функція getRandomHexColor() повертає колір 
// у hex-форматі, в той час як колір фону на <body> буде 
// у форматі rgb. Це нормально й не потребує якихось правок.
