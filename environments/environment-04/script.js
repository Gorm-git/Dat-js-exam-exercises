"use strict";

// # Øvelse 9

// Environment: `environment-04`

// 1. Importer `teachers`-listen i `script.js`.

// 2. Lav en funktion i `script.js`,
// der viser listen af alle `teacher`-objekter på websiden.

// 3. Lav en funktion der kan sortere listen efter
// `name` og en anden funktion, der kan sortere listen efter `email`.

// import teachers from "./teachers.js";

// window.addEventListener("load", initApp);

// function initApp() {
//   console.log("42");
//   console.log(teachers);
//   showTeachers();
//   console.log(teachers);
// }

// function showTeachers() {
//   document.querySelector("#teachers-list").innerHTML = "";
//   for (const teacher of teachers) {
//     sortTeachersName();
//     showTeacher(teacher);
//   }
// }

// function showTeacher(teacher) {
//   const html = /*html*/ `
//   <article>
//   <li>Name: ${teacher.name}, Email: ${teacher.email}</li>
//   </article>
//   `;
//   document
//     .querySelector("#teachers-list")
//     .insertAdjacentHTML("beforeend", html);
// }

// function sortTeachersName() {
//   return teachers.sort((a, b) => a.name.localeCompare(b.name));
// }

// function sortTeachersEmail() {
//   return teachers.sort((a, b) => a.email.localeCompare(b.email));
// }

// # Øvelse 10

// Environment: `environment-04`

// 1. Importer `teachers`-listen i `script.js`.

// 2. Lav en funktion, der viser listen af alle
// `teacher`-objekter på websiden.

// 3. Lav en funktion der tilføjer et nyt `teacher`-objekt
// til listen. Sørg for at nye
// `teacher`-objekter vises på websiden.

// import teachers from "./teachers.js";
// console.log(teachers);

// window.addEventListener("load", initApp);

// function initApp() {
//   console.log("42");
//   createTeacher("Thomas", "tneermark@gmail.com");
//   showTeachers();
// }

// function showTeachers() {
//   document.querySelector("#teachers-list").innerHTML = "";
//   for (const teacher of teachers) {
//     showTeacher(teacher);
//   }
// }

// function showTeacher(teachers) {
//   const html = /*html*/ `

//   <article>
//   <ul><li>Navn: ${teachers.name}, Email: ${teachers.email}</li></ul>
//   </article>

//   `;
//   document
//     .querySelector("#teachers-list")
//     .insertAdjacentHTML("beforeend", html);
// }

// function createTeacher(name, email) {
//   const newTeacher = { name: name, email: email };

//   teachers.push(newTeacher);
//   showTeachers(newTeacher);
//   console.log(teachers);
// }
