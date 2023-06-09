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
