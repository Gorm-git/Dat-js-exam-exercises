"use strict";

// window.addEventListener("load", initApp);

// const animals = [];

// function initApp() {
//     createAnimal("Bo", "abe", 22); // test af del 1
//     console.log(animals); // test af del 1
//     // event på formular
//     document.querySelector("#create-form").addEventListener("submit", createFormSubmitted);
// }

// function createAnimal(name, type, age) {
//     // nyt animal objekt med værdier fra argumenter
//     const animal = {
//         name: name,
//         type: type,
//         age: age
//     };
//     animals.push(animal); // det nye objekt tilføjes den globale liste, animals
//     return animal;
// }

// function createFormSubmitted(event) {
//     event.preventDefault(); // prevent default submit event

//     const form = event.target; // reference til formularen
//     // få fat i værdier fra formular
//     const name = form.name.value;
//     const type = form.type.value;
//     const age = form.age.value;
//     // kald createAnimal med værdier fra formular
//     createAnimal(name, type, age);
//     console.log(animals); // test animals
//     // sørg for at alle animals vises (+ det nye) ved at kalde showAnimals
//     showAnimals();
// }

// function showAnimals() {
//     // sort animals by name
//     animals.sort(compareName);
//     console.log(animals);
//     // reset tbody
//     document.querySelector("#list-container tbody").innerHTML = "";

//     for (const animal of animals) {
//         const html = /*html*/ `
//             <tr>
//                 <td>${animal.name}</td>
//                 <td>${animal.type}</td>
//                 <td>${animal.age}</td>
//             </tr>
//         `;
//         document.querySelector("#list-container tbody").insertAdjacentHTML("beforeend", html);
//     }
// }

// function compareName(a, b) {
//     return a.name.localeCompare(b.name);
// }

// # Øvelse 3

// Environment: `environment-02`

// 1. Lav en funktion der modtager `name`, `type` og `age`,
// opretter et `animal` objekt med de tre properties,
// og tilføjer det til en global liste, `animals`.
// 2. Lav en funktion der reagerer når brugeren trykker på
// "Create new" knappen, og opretter et nyt `animal` objekt med
// de data der er tastet ind på websiden. Test at objektet er
// tilføjet den globale liste, `animals`.
// 3. Lav en funktion der viser listen af
// alle animal-objekter - sorteret alfabetisk.
// Listen opdateres hver gang brugeren opretter et nyt.

// window.addEventListener("load", initApp);

// const animals = [];

// function initApp() {
//   console.log("42");
//   // createAnimal("Bo", "abe", 22);
//   document
//     .querySelector("#create-form")
//     .addEventListener("submit", createSubmitAnimal);
// }

// function createAnimal(name, type, age) {
//   const newAnimal = {
//     name: name,
//     type: type,
//     age: age,
//   };
//   animals.push(newAnimal);
//   console.log(animals);
// }

// function createSubmitAnimal(event) {
//   event.preventDefault();

//   const form = event.target;

//   const name = form.name.value;
//   const type = form.type.value;
//   const age = Number(form.age.value);
//   createAnimal(name, type, age);
// }

// # Øvelse 5

// Environment: `environment-02`

// 1. Lav en liste med tre `animal` objekter.
// Hvert objekt har følgende properties: `name`, `type` og `age`.
// 2. Lav en funktion der viser listen af alle `animal`-objekter
// - sorteret efter `age`.
// 3. Lav en funktion der ved hjælp af formularen,
//  opretter et nyt `animal`-objekt og tilføjer det til den liste.
//  Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

window.addEventListener("load", initApp);

const animals = [
  { name: "Jacob", type: "Dog", age: 8 },
  { name: "Thomas", type: "Horse", age: 12 },
  { name: "Karen", type: "Cat", age: 6 },
];

function initApp() {
  console.log("42");
  console.log(animals);

  document.querySelector("form").addEventListener("submit", createAnimal);
  sortAnimalsAge();
  showAnimals();
}

function showAnimals() {
  document.querySelector("#list-container tbody").innerHTML = "";
  for (const animal of animals) {
    const html = /*html*/ `
      <tr>
            <td>${animal.name}</td>
            <td>${animal.type}</td>
            <td>${animal.age}</td>
      </tr>
  `;
    document
      .querySelector("#list-container tbody")
      .insertAdjacentHTML("beforeend", html);
  }
}

function sortAnimalsAge() {
  return animals.sort((a, b) => a.age - b.age);
}

function createAnimal(event) {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const type = form.type.value;
<<<<<<< Updated upstream
  const age = form.age.value;

  const newAnimal = { name, type, age };

  animals.push(newAnimal);
  sortAnimalsAge();
  showAnimals(newAnimal);
=======
  const age = Number(form.age.value);
  createAnimal(name, type, age);
  showAnimals();
}

function showAnimals() {
  // sort animals by name
  animals.sort(sortAnimalName);
  console.log(animals);
  // reset tbody
  document.querySelector("#list-container tbody").innerHTML = "";

  for (const animal of animals) {
    const html = /*html*/ `
            <tr>
                <td>${animal.name}</td>
                <td>${animal.type}</td>
                <td>${animal.age}</td>
            </tr>
        `;
    document
      .querySelector("#list-container tbody")
      .insertAdjacentHTML("beforeend", html);
  }
}

function sortAnimalName(a, b) {
  return a.name.localeCompare(b.name);
>>>>>>> Stashed changes
}
