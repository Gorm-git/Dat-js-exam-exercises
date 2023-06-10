"use strict";

// # Øvelse 6

// Environment: `environment-03`

// 1. Lav en liste med tre `product`-objekter.
// Hvert objekt har følgende properties:
// `name` (string), `price` (number) og `inStock` (boolean).

// 2. Lav en funktion der viser listen af alle `product`-objekter
//  - vis kun produkter hvor `inStock` er `true`.

// 3. Lav en funktion der ved hjælp af formularen, opretter et
//  nyt `product`-objekt og tilføjer det til listen.
// Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

// window.addEventListener("load", initApp);

// const products = [
//   { name: "staff", price: 100, inStock: true },
//   { name: "sword", price: 200, inStock: false },
//   { name: "spear", price: 300, inStock: true },
// ];

// function initApp() {
//   console.log("42");
//   document
//     .querySelector("#create-form")
//     .addEventListener("submit", submitCreateProduct);
//   showProducts();
// }

// function showProducts() {
//   document.querySelector("#list-container").innerHTML = "";
//   for (const product of products) {
//     if (product.inStock === true) {
//       showProduct(product);
//     }
//   }
// }

// function showProduct(products) {
//   const html = /*html*/ `

//   <article>
//   <ul>
//   <li>${products.name}, ${products.price}, ${products.inStock}</li>
//   </ul>
//   </article>
//   `;
//   document
//     .querySelector("#list-container")
//     .insertAdjacentHTML("beforeend", html);
// }

// function submitCreateProduct(event) {
//   event.preventDefault();
//   const form = event.target;

//   const name = form.name.value;
//   const price = Number(form.price.value);
//   const inStock = form.inStock.checked;

//   CreateProduct(name, price, inStock);
//   showProducts(products);
// }

// function CreateProduct(name, price, inStock) {
//   const newProduct = {
//     name: name,
//     price: price,
//     inStock: inStock,
//   };
//   products.push(newProduct);
//   console.log(products);
//   showProducts();
// }

// # Øvelse 7

// Environment: `environment-03`

// 1. Lav en liste med tre `product`-objekter.
// Hvert objekt har følgende properties:
// name` (string), `price` (number) og `inStock` (boolean).

// 2. Lav en funktion der viser en sorteret liste af alle produkter.
//  Produkter som er i `stock` (hvor `inStock` er `true`) skal vises først.

// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt
// `product`-objekt og tilføjer det til listen.
// Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

// window.addEventListener("load", initApp);

// const products = [
//   { name: "Mouse", price: 420, inStock: false },
//   { name: "Cat", price: 420, inStock: true },
//   { name: "Dog", price: 420, inStock: true },
// ];

// function initApp() {
//   console.log("42");

//   document
//     .querySelector("form")
//     .addEventListener("submit", submitCreateProduct);
//   // sortProductsByTrue();
//   showProducts();
// }

// function showProducts() {
//   document.querySelector("#list-container").innerHTML = "";
//   products.sort((b, a) => a.inStock - b.inStock);
//   for (const product of products) {
//     // product.sort((a, b) => a.inStock - b.inStock);
//     // sortProducsByTrue(product);
//     showProduct(product);
//   }
// }

// // function sortProductsByTrue() {
// //   return products.sort((b, a) => a.inStock - b.inStock);
// // }

// function showProduct(products) {
//   const html = /*html*/ `

//   <article>
//   <p>Name: ${products.name}</p>
//   <p>Price: ${products.price}</p>
//   <p>In Stock: ${products.inStock}</p>
//   </article>
//   `;

//   document
//     .querySelector("#list-container")
//     .insertAdjacentHTML("beforeend", html);
// }

// function submitCreateProduct(event) {
//   event.preventDefault();

//   const form = event.target;

//   const name = form.name.value;
//   const price = Number(form.price.value);
//   const inStock = form.inStock.checked;

//   const newProduct = { name: name, price: price, inStock: inStock };
//   products.push(newProduct);
//   console.log(products);

//   // sortProductsByTrue();
//   showProducts(newProduct);
// }

// # Øvelse 8

// Environment: `environment-03`

// 1. Lav en liste med tre `product`-objekter.
// Hvert objekt har følgende properties:
// `name` (string), `price` (number) og `inStock` (boolean).

// 2. Lav en funktion der viser listen
// af alle `product`-objekter på websiden.'

// 3. Lav en funktion der kan sortere listen efter
// `name`, `price` og `inStock`. Sorteringen skal ske på '
// baggrund af valgte `option` i `select` (se `environment-03`).
// Sortering ændrer sig hver gang en ny sortering `option` vælges.

// window.addEventListener("load", initApp);

// let products = [
//   { name: "B", price: 42, inStock: true },
//   { name: "A", price: 43, inStock: false },
//   { name: "C", price: 41, inStock: false },
// ];
// function initApp() {
//   console.log("42");
//   document
//     .querySelector("#select-sort-by")
//     .addEventListener("change", sortProducts);
//   console.log(products);
//   showProducts();
// }

// function showProducts() {
//   document.querySelector("#list-container").innerHTML = "";
//   for (const product of products) {
//     showProduct(product);
//   }
// }

// function showProduct(products) {
//   const html =
//     /*html*/
//     `
//   <article>
//   <p>Name: ${products.name}</p>
//   <p>Price: ${products.price}</p>
//   <p>In Stock: ${products.inStock}</p>
//   </article>
//   `;
//   document
//     .querySelector("#list-container")
//     .insertAdjacentHTML("beforeend", html);
// }

// function sortProducts() {
//   const sortCriteria = document.querySelector("#select-sort-by").value;
//   let sortedProducts = products;
//   if (sortCriteria === "name") {
//     sortedProducts = sortedProducts.sort((a, b) =>
//       a.name.localeCompare(b.name)
//     );
//   } else if (sortCriteria === "price") {
//     sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
//   } else if (sortCriteria === "inStock") {
//     sortedProducts = sortedProducts.sort((a, b) => a.inStock - b.inStock);
//   }

//   showProducts(sortProducts);
// }

// const memberSortProducts = document.querySelector("#select-sort-by");
// memberSortProducts.addEventListener("change", sortProducts);
