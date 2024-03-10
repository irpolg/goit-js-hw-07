const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const galleryEl = document.querySelector(".gallery")
const markup = images
              .map(({url, alt}) => {  //перебирає масив об'єктів, і в колбек-функції повертає значення властивості кожного об'єкта
              return `<li>
                        <img src=${url} alt=${alt} width="360" height="auto"
                      </li>`})
              .join('');
galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.style.display = "flex";
galleryEl.style.flexWrap = "wrap";
galleryEl.style.gap = "24px";
galleryEl.style.padding = "156px"; 




//Задача 2 (див задача 11 - вебінар 06.03.2024)
//         (див задача 6  - вебінар 08.03.2024) 
// Напиши скрипт для створення галереї зображень 
//на основі масиву даних. HTML містить список ul.gallery.
// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення 
//елементів <img>, вкладених в <li>.

// Ти можеш створити й додати HTML-елементи, використовуючи
// document.createElement() і elem.append() 
//або шаблонні рядки і elem.insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM 
//за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами 
//через CSS класи.