"use strict";
// /*
// const students = [];

// Environment: `environment-03`

// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
// 2. Lav en funktion der viser en sorteret liste af alle produkter. Produkter som er i `stock` (hvor `inStock` er `true`) skal vises først.
// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

// */

// const students = [];

// window.addEventListener("load", start);

// function start() {
//   document
//     .querySelector("#create-student-form")
//     .addEventListener("submit", formClicked);
//   console.log("app is running!");

// //   function initApp() {
// //     document.querySelector("#create-student-form").addEventListener("submit", submitCreateForm);
// // }

// function submitCreateForm(event) {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const age = Number(form.age.value);
//     createStudent(name, email, age);
//     showStudents(students);
// }

// function createStudent(name, email, age) {
//   const newstudent = {
//     name: name,
//     email: email,
//     age: age,
//   };
//   students.push(newstudent);
//   showStudents(showStudent);
// }

// function formClicked(event) {
//   event.preventDefault();

//   const form = event.target;
// }
// function showStudents(listOfStudents) {
//     // reset DOM
//     document.querySelector("#students-table-body").innerHTML = "";
//     // filter - age over eller lig med 18
//     listOfStudents = listOfStudents.filter(student => student.age >= 18);
//     // sort - efter age
//     listOfStudents.sort((student1, student2) => student1.name.localeCompare(student2.name));

//   const name = form.name.value;
//   const email = form.email.value;
//   const age = Number(form.age.value);

//   createStudent(name, email, age);
// }

// function showStudents() {
//   document.querySelector("#create-student-form").innerHTML = "";
//   for (const student of students) {
//     if (student.age >= 18) {
//       showStudent(student);
//       console.log("Student is above 18");
//       return true;
//     } else {
//       console.log("Student is not 18");
//       return false;
//     }
//   }

//   console.log(showStudents);
// }

// function showStudent(student) {
//   const html =
//     /*html*/
//     `
//       <tr>
//         <td>${student.name} </td>

//         <td>${student.email} </td>

//         <td>${student.age} </td>
//       </tr>
//       `;

//   document
//     .querySelector("#students-table-body")
//     .insertAdjacentHTML("beforeend", html);
// }

// # Øvelse 19

// Environment: `environment-07`

// *Prøveeksamen #1*

// 1. Lav en funktion der opretter et `student` objekt
//  med `name`, `email` og `age`,
//  fra formularen på websiden og tilføjer det til en liste.

// 2. Lav en funktion der tjekker om en student har en
// korrekt email der består af mindst 4 tegn efterfulgt af @stud.kea.dk

// 3. Brug funktionen til at fjerne students uden korrekt email fra listen.

let students = [];

window.addEventListener("load", initApp);

function initApp() {
  console.log("42");
  // console.log(isEmailValid("te@stud.kea.dk"));
  // console.log(isEmailValid("test@stud.kea.dk"));
  // console.log(isEmailValid("test@stud.ka.dk"));
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", createStudentSubmit);
  console.log(students);
}

function createStudent(name, email, age) {
  const newstudent = { name: name, email: email, age: age };
  students.push(newstudent);
  console.log(newstudent);
  checkEmail();
}

function createStudentSubmit(event) {
  console.log(event);
  event.preventDefault();
  const form = event.target;

  const name = form.name.value;
  const email = form.email.value;
  const age = Number(form.age.value);

  createStudent(name, email, age);

  // document
  //   .querySelector("#create-student-form")
  //   .addEventListener("submit", createStudentSubmit);

  console.log(students);
}

// function validateEmails() {
//   students = students.filter((student) => isEmailValid(student.email));
// }

// function isEmailValid(email) {
//   const mailArray = email.split("@");
//   const prefix = mailArray[0];
//   const domain = mailArray[1];

//   if (prefix.length >= 4 && domain === "stud.kea.dk") {
//     return true;
//   } else {
//     return false;
//   }
//   // return prefix.length >= 4 && domain === "stud.kea.dk";
// }

function checkEmail() {
  const input = document.querySelector("#email").value;

  if (input.length >= 16 && input.includes("@stud.kea.dk")) {
    console.log(input);
  } else {
    const target = students.indexOf(students.includes(input));
    students.splice(target, 1);
  }
}
