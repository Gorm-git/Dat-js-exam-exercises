"use strict";

// // # Øvelse 1

// // Environment: `environment-01`

// // 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
// // 2. Lav en funktion der viser listen på websiden - hver user skal vises med navn og hvorvidt de er aktive eller ej.
// // 3. Filtrér listen så den kun viser admin-brugere.

// window.addEventListener("load", initapp);

// async function initapp() {
//   const userList = await getJson();
//   showUsers(userList);
//   console.log(userList);
// }

// async function getJson() {
//   const user = await fetch("users.json");
//   const data = await user.json();

//   return data;
// }

// function showUsers(userList) {
//   document.querySelector("#userlist").innerHTML = "";
//   for (const user of userList) {
//     showUser(user);
//   }
// }

// function showUser(userData) {
//   if (userData.role == "admin") {
//     const html = /*html*/ `
//   <article>
//   <br>
//   <li>Navn: ${userData.name}</li>
//   <li>Aktiv: ${userData.active}</li>
//   <li>Rolle: ${userData.role}</li>
//   <br>
//   </article>
//   `;
//     document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
//   }
// }

// # Øvelse 2

// Environment: `environment-01`

// 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en variabel.
// 2. Lav en funktion der viser listen på websiden.
// 3. Lav en funktion der tæller hvor mange brugere der har rollerne `admin`, `user` og `guest` - og viser antallene på websiden.

// window.addEventListener("load", initApp);

// async function initApp() {
//   console.log("Java is alive");
//   const userList = await fetchJson();
//   fetchJson(userList);
//   console.log(userList);
//   showUsers(userList);
//   countUsers(userList);
// }

// async function fetchJson() {
//   const user = await fetch("users.json");
//   const data = await user.json();

//   return data;
// }

// function showUsers(userList) {
//   document.querySelector("#userlist").innerHTML = "";
//   for (const user of userList) {
//     showUser(user);
//   }
// }

// function showUser(userData) {
//   const html = /*html*/ `
//   <br>
//   <li>Navn: ${userData.name}</li>
//   <li>Aktiv: ${userData.active}</li>
//   <li>Rolle: ${userData.role}</li>
//   <br>

//   `;

//   document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
// }

// function countUsers(userList) {
//   let admin = 0;
//   let user = 0;
//   let guest = 0;

//   for (const count of userList) {
//     if (count.role == "admin") {
//       admin++;
//     }
//     if (count.role == "user") {
//       user++;
//     } else {
//       guest++;
//     }
//   }
//   console.log(admin);
//   console.log(user);
//   console.log(guest);
//   document.getElementById("admin-count").textContent = admin;
//   document.getElementById("user-count").textContent = user;
//   document.getElementById("guest-count").textContent = guest;
// }

// # Øvelse 4

// Environment: `environment-01`

// 1. Lav en funktion der indlæser JSON-filen
// `users.json` og gemmer listen i en global variabel.

// 2. Lav en funktion der viser listen på websiden - vis kun aktive brugere.

// 3. Lav en funktion der modtager `name`, `active` og `role`,
// opretter et `user` objekt med de tre properties,
// og tilføjer objektet til den globale liste.
// Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

window.addEventListener("load", initApp);

let users;

async function initApp() {
  console.log("Java is alive and thinking about 42");
  users = await fetchJson();
  console.log(users);
  showUsers();
}

async function fetchJson() {
  const response = await fetch("users.json");
  users = await response.json();
  // console.log(users);
  return users;
}

function showUsers() {
  document.querySelector("#userlist").innerHTML = "";
  for (const user of users) {
    if (user.active === true) {
      showUser(user);
    }
  }
}

function showUser(users) {
  const html = /*html*/ `
  
  <article>
  <li>Name: ${users.name}</li>
  <li>Aktiv: ${users.active}</li>
  <li>Rolle: ${users.role}</li>
  </article>
  
  `;

  document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}
<<<<<<< Updated upstream

function createUser(name, active, role) {
  const newUser = {
    name: name,
    active: active,
    role: role,
  };
  users.push(newUser);
  console.log(users);
  showUsers();
}
window.addEventListener("load", initApp);

let usersGlobal = [];

async function initApp() {
  usersGlobal = await getUsers();
  displayUsers(usersGlobal);

  // displayAdmins(users);
}

async function getUsers() {
  const response = await fetch("users.json");
  const data = await response.json();
  return data;
}

function displayUsers(listOfUsers) {
  for (const user of listOfUsers) {
    const html = /*html*/ `
            <li>${user.name} (${user.role}), active: ${user.active}</li>
        `;
    console.log(html);
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
  }
}

function displayAdmins() {
  const admins = usersGlobal.filter((user) => user.role === "admin");
  displayUsers(admins);
}
=======
>>>>>>> Stashed changes
