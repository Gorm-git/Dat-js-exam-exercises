"use strict";
/*
const students = [];

Environment: `environment-03`

1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
2. Lav en funktion der viser en sorteret liste af alle produkter. Produkter som er i `stock` (hvor `inStock` er `true`) skal vises først.
3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

*/

const students = [];

window.addEventListener("load", start);

function start() {
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", formClicked);
  console.log("app is running!");

//   function initApp() {
//     document.querySelector("#create-student-form").addEventListener("submit", submitCreateForm);
// }

function submitCreateForm(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = Number(form.age.value);
    createStudent(name, email, age);
    showStudents(students);
}

function createStudent(name, email, age) {
  const newstudent = {
    name: name,
    email: email,
    age: age,
  };
  students.push(newstudent);
  showStudents(showStudent);
}

function formClicked(event) {
  event.preventDefault();

  const form = event.target;
}
function showStudents(listOfStudents) {
    // reset DOM
    document.querySelector("#students-table-body").innerHTML = "";
    // filter - age over eller lig med 18
    listOfStudents = listOfStudents.filter(student => student.age >= 18);
    // sort - efter age
    listOfStudents.sort((student1, student2) => student1.name.localeCompare(student2.name));

  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);

  createStudent(name, email, age);
}

function showStudents() {
  document.querySelector("#create-student-form").innerHTML = "";
  for (const student of students) {
    if (student.age >= 18) {
      showStudent(student);
      console.log("Student is above 18");
      return true;
    } else {
      console.log("Student is not 18");
      return false;
    }
  }

  console.log(showStudents);
}

function showStudent(student) {
  const html =
    /*html*/
    `
      <tr>
        <td>${student.name} </td>

        <td>${student.email} </td>

        <td>${student.age} </td>
      </tr>
      `;

  document
    .querySelector("#students-table-body")
    .insertAdjacentHTML("beforeend", html);
}
