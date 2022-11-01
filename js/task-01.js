"use strict";

const categories = document.querySelector("#categories");
const headings = document.querySelectorAll(".item");
const categoriesContent = document.querySelectorAll(".item > ul");

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
console.log(`Number of categories: ${categories.children.length}`);
console.log("");

// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
console.log(
  categoriesContent.forEach((elem) => {
    console.log(`Category: ${elem.previousElementSibling.textContent}`);
    console.log(`Elements: ${elem.childElementCount}`);
    console.log("");
  })
);
