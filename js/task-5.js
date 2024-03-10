function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const div = document.querySelector(".widget");
const textColorSpan = document.querySelector(".color");
const setColorBtn   = document.querySelector(".change-color");
const setColor = () => {
  textColorSpan.textContent  = getRandomHexColor();
  document.body.style.background = textColorSpan; 
}

setColorBtn.addEventListener("click", setColor);
const btn = document.querySelector(".change-color");
btn.style.background = "#4E75FF";
btn.style.fontWeight = "500";
btn.style.fontSize = "16px";
btn.style.color = "#FFFFFF";
btn.style.padding = "8px 16px";
btn.style.width = "148px";
btn.style.height = "40px";
btn.style.borderRadius = "16px";
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.gap = "16px";
div.style.width = "169px";
div.style.height = "80px";


//.style.padding = "156px"; 

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
