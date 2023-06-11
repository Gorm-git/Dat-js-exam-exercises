"use strict";

// # Øvelse 22

// Environment: `environment-08`

// *Prøveeksamen #4 (sæt 2)*

// 1. Lav en funktion der indlæser JSON-filen
// `playlist.json` og gemmer listen i en variabel.

// 2. Lav en funktion til at udskrive listen af sange
// på websiden- tilføj en `remove`-knap til hver sang.

// 3. Få remove-knappen til at fjerne den pågældende
// sang fra listen, og udskriv listen igen.

let playlist = [];

window.addEventListener("load", initApp);

async function initApp() {
  playlist = await fetchPlaylist();
  console.log("What is the meaning of 42");
  showPlaylist();
  console.log(playlist);
}

async function fetchPlaylist() {
  const response = await fetch("playlist.json");
  const data = response.json();

  return data;
}

function showPlaylist() {
  document.querySelector("#songlist").innerHTML = "";
  for (const song of playlist) {
    showSongs(song);
  }
}

function showSongs(song) {
  const html = /*html */ `

  <li>Song Artist: ${song.artist}, Song title: ${song.tilte}, Duration: ${song.duration}. <button> Delete </button></li>
  
  `;
  document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#songlist li:last-child button")
    .addEventListener("click", () => deleteSong());
}

function deleteSong(song) {
  playlist.splice(playlist.indexOf(song), 1);
  showPlaylist();
  console.log(playlist);
}
