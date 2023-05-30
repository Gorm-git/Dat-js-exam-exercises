"use strict";

let students = [];

window.addEventListener("load", initApp);

function initApp() {
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", submitCreateForm);
  console.log(isEmailValid("te@stud.kea.dk"));
  console.log(isEmailValid("test@stud.kea.dk"));
  console.log(isEmailValid("test@stud.ka.dk"));
}

function submitCreateForm(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);
  createStudent(name, email, age);
  validateEmails();
  showStudents(students);
}

function createStudent(name, email, age) {
  const newStudent = { name, email, age };
  students.push(newStudent);
}

function showStudents(listOfStudents) {
  // reset
  document.querySelector("#students-table-body").innerHTML = "";

  // sort
  listOfStudents.sort((student1, student2) => student1.age - student2.age);

  for (const student of listOfStudents) {
    const html = /*html*/ `
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.age}</td>
            </tr>
        `;
    document
      .querySelector("#students-table-body")
      .insertAdjacentHTML("beforeend", html);
  }
}

function validateEmails() {
  students = students.filter((student) => isEmailValid(student.email));
}

function isEmailValid(email) {
  const mailArray = email.split("@");
  const prefix = mailArray[0];
  const domain = mailArray[1];

  if (prefix.length >= 4 && domain === "stud.kea.dk") {
    return true;
  } else {
    return false;
  }
  // return prefix.length >= 4 && domain === "stud.kea.dk";
}

/*

Environment: `environment-03`

1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
2. Lav en funktion der viser en sorteret liste af alle produkter. Produkter som er i `stock` (hvor `inStock` er `true`) skal vises først.
3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

*/
