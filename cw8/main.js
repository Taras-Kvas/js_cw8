// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let elements = document.getElementsByTagName('ul');
// elements.style.width = '400px'
// console.log(elements)

// let elements = document.getElementsByClassName('linkList');
// for (const element of elements) {
//     console.log(elements);
//     element.style.width = '50px'
// }

// let getText = document.getElementsByClassName('listElement2');
// console.log(getText.innerText)

// let elements = document.getElementsByTagName('a');
// for (const element of elements) {
//     console.log(elements)
//     element.style.background = 'silver'
// }

// let elements = document.getElementsByTagName('li');
// console.log(elements.classList)
// elements.classList.add('anchor')

// отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту
// на 40 пікселів

// let tagName = document.getElementsByTagName('a');
//     if (tagName === 'link3') {
//         tagName.style.fontSize = '40px'
//     }


// let color = prompt('Колір:')
// let name = document.getElementsByClassName('sub-header');
// for (const nameElement of name) {
//     if (nameElement === 'content 2 segment') {
//         name.style.background = `${color}`
//     }
// }

// let color = prompt('Колір:')
// let name = document.getElementsByClassName('sub-header');
// for (const nameElement of name) {
//     nameElement.style.background = `${color}`
// }


// отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let text = prompt('Введіть текст:')
// let className = document.getElementsByClassName('content_1');
// for (const classNameElement of className) {
//     classNameElement.innerText = `${text}`
// }

// отримати елементи p та змінити їм padding на 20px

// let name = document.getElementsByTagName('p');
// for (const nameElement of name) {
//     nameElement.style.padding = '20px'
// }

// let className = document.getElementsByClassName('text2');
// className.innerText = 'sep-2021'