"use strict";

/*
# Øvelse 15

Environment: `environment-06`

*NB: Øvelse 15, 16, 17 og 18 kan alle kombineres i den samme script.js fil*

1. Indlæs JSON-filen `products.json` og vis listen af produkter på siden. Brug den udkommenterede HTML-kode som skabelon.
2. Lav en global liste `basket`, og en funktion der tilføjer et produkt til den liste når der trykkes på "Læg i kurv"-knappen
3. Vis indholdet af kurven på siden (opdatér når der bliver tilføjet et produkt)

*/

const basket = [];

window.addEventListener("load", initApp);

async function initApp() {
  const productList = await fetchJson();
  showProducts(productList);
  console.log(productList);
}

async function fetchJson() {
  const product = await fetch("products.json");
  const productData = await product.json();

  return productData;
}

function showProducts(productList) {
  document.querySelector("#products").innerHTML = "";
  for (const product of productList) {
    showProduct(product);
  }
}

function showProduct(productObject) {
  //console.log(showProduct);
  const html =
    /*html*/
    `
<article>
    <h3>Navn: ${productObject.name}</h3>
    <p>Vægt: ${productObject.weight}</p>
    <p>Pris: ${productObject.price}</p>
    <button class ="">Læg i kurv</button>
</article>
`;
  document.querySelector("#products").insertAdjacentHTML("beforeend", html);

  document
    .querySelector("article:last-child button")
    .addEventListener("click", () => addBasketItem(productObject));
}

function addBasketItem(productObject) {
  console.log(productObject);
  basket.push(productObject);
  console.log(basket);
}

async function updateBasketList(name, weight, price) {
  const newBasketItem = {
    name,
    weight,
    price,
  };
}
