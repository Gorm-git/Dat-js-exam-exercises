"use strict";

// # Øvelse 11

// Environment: `environment-05`

// 1. Importer `courses`-listen i `script.js`.

// 2. Lav en funktion, der viser listen af alle
// `course`-objekter på websiden.
// Vis som minimum `name`, `ectsPoints` og `teacher`.

// 3. Lav en funktion der tilføjer et nyt
// `course`-objekt til listen. Sørg for at nye
// `course`-objekter vises på websiden.

// import courses from "./courses.js";

// window.addEventListener("load", initApp);

// function initApp() {
//   console.log("42");
//   createCourse("Thomas", "2023-10-06", "2024-10-06", 15, 42, "Jens Axel");
//   showCourses(courses);
//   console.log(courses);
// }

// function showCourses() {
//   document.querySelector("#courses-list").innerHTML = "";
//   for (const course of courses) {
//     showCourse(course);
//   }
// }

// function showCourse(courses) {
//   const html = /*html */ `
//   <br>
//   <li>Name: ${courses.name}, Start dato: ${courses.startDate}, Slut dato: ${courses.endDate}, ECTS points: ${courses.ectsPoints}, Student max: ${courses.maxStudents}, Lærer: ${courses.teacher}</li>
//   <br>

//   `;
//   document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
// }

// function createCourse(
//   name,
//   startDate,
//   endDate,
//   ectsPoints,
//   maxStudents,
//   teacher
// ) {
//   const newCourse = {
//     name: name,
//     startDate: startDate,
//     endDate: endDate,
//     ectsPoints: Number(ectsPoints),
//     maxStudents: Number(maxStudents),
//     teacher: teacher,
//   };

//   courses.push(newCourse);
//   console.log(newCourse);
//   showCourses();
// }

// # Øvelse 12

// Environment: `environment-05`

// 1. Importer `courses`-listen i `script.js`.

// 2. Lav en funktion, der viser listen af alle

// `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.

// 3. Lav en funktion, der sorterer listen af `courses`
// efter stigende antal ECTS. Vis den sorterde liste på websiden.

// import courses from "./courses.js";

// window.addEventListener("load", initApp);

// function initApp() {
//   console.log("42");
//   console.log(courses);
//   sortEctsPoints();
//   showCourses();
// }

// function showCourses() {
//   const coursesList = document.querySelector("#courses-list");
//   coursesList.innerHTML = "";
//   courses.forEach((course) => {
//     const html = `
//     <li>Navn: ${course.name}, ECTS Points: ${course.ectsPoints}</li>
//   `;
//     coursesList.insertAdjacentHTML("beforeend", html);
//   });
// }

// function sortEctsPoints() {
//   courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
//   return courses;
// }

// # Øvelse 13

// Environment: `environment-05`

// 1. Importér `courses`-listen i `script.js`.
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name` og `ectsPoints`.
// 3. Lav en funktion, der filtrer listen af `courses` på baggrund af valgte `option` i `select` (se `environment-05`). Filtreringen ændrer sig hver gang en ny `option` vælges.

// import courses from "./courses.js";

// console.log(courses);

// window.addEventListener("load", initApp);

// function initApp() {
//   console.log("42");
//   // showCourses();
//   document
//     .querySelector("#select-filter-ects")
//     .addEventListener("change", filterCourses);
//   showCourses(courses);
// }

// function showCourses(list) {
//   document.querySelector("#courses-list").innerHTML = "";
//   for (const course of list) {
//     showCourse(course);
//   }
// }

// function showCourse(courses) {
//   const html = /*html */ `

//   <li>Name: ${courses.name}, ECTS Points: ${courses.ectsPoints}</li>
//   `;
//   document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
// }

// function filterCourses() {
//   const value = document.querySelector("#select-filter-ects").value;
//   console.log(value);
//   if (value == "5") {
//     showCourses(courses.filter((course) => course.ectsPoints == 5));
//   } else if (value == "10") {
//     showCourses(courses.filter((course) => course.ectsPoints == 10));
//   } else if (value == "15") {
//     showCourses(courses.filter((course) => course.ectsPoints == 15));
//   } else if (value == "20") {
//     showCourses(courses.filter((course) => course.ectsPoints == 20));
//   } else {
//     showCourses();
//   }
// }

// function filterCourses() {
//   const value = document.querySelector("#select-filter-ects").value;
//   console.log(value);
//   let filteredCourses = [];

//   if (value == "5") {
//     filteredCourses = courses.filter((course) => course.ectsPoints == 5);
//   } else if (value == "10") {
//     filteredCourses = courses.filter((course) => course.ectsPoints == 10);
//   } else if (value == "15") {
//     filteredCourses = courses.filter((course) => course.ectsPoints == 15);
//   } else if (value == "20") {
//     filteredCourses = courses.filter((course) => course.ectsPoints == 20);
//   } else {
//     filteredCourses = courses;
//   }

//   console.log(filteredCourses); // Log the filtered array
//   showCourses(filteredCourses);
// }

// function filterCourses() {
//   const value = document.querySelector("#select-filter-ects").value;
//   let filteredCourses = [];

//   if (value === "5" || value === "10" || value === "15" || value === "20") {
//     filteredCourses = courses.filter(
//       (course) => course.ectsPoints.toString() === value
//     );
//   } else {
//     filteredCourses = courses;
//   }
//   console.log(filteredCourses);
//   showCourses(filteredCourses);
// }

// # Øvelse 14

// Environment: `environment-05`

// 1. Importér `courses`-listen i `script.js`.

// 2. Lav en funktion, der viser listen af alle
// `course`-objekter på websiden. Vis som minimum
// `name`, `startDate` `ectsPoints`.

// 3. Lav en funktion, der sorterer listen af `courses`
// stigende efter `startDate`. Vis sorteringen på websiden.

// import { courses } from "./courses.js";

// window.addEventListener("load", initApp);

// function initApp() {
//   console.log("42");
//   sortByDate();
//   showCourses();
//   console.log(courses);
// }

// function showCourses() {
//   document.querySelector("#courses-list").innerHTML = "";
//   for (const course of courses) {
//     showCourse(course);
//   }
// }

// function showCourse(course) {
//   const html = /*html */ `

// <li>Name: ${course.name}, startDate: ${course.startDate}</li>
// <li>Ects points: ${course.ectsPoints}</li> <br>
// `;
//   document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
// }

// function sortByDate() {
//   courses.sort((a, b) => b.startDate.localeCompare(a.startDate));
//   console.log("Jup");
//   // showCourses();
// }
