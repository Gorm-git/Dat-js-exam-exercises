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

// let playlist = [];

// window.addEventListener("load", initApp);

// async function initApp() {
//   playlist = await fetchPlaylist();
//   console.log("What is the meaning of 42");
//   showPlaylist();
//   console.log(playlist);
// }

// async function fetchPlaylist() {
//   const response = await fetch("playlist.json");
//   const data = response.json();

//   return data;
// }

// function showPlaylist() {
//   document.querySelector("#songlist").innerHTML = "";
//   for (const song of playlist) {
//     showSongs(song);
//   }
// }

// function showSongs(song) {
//   const html = /*html */ `

//   <li>Song Artist: ${song.artist}, Song title: ${song.tilte}, Duration: ${song.duration}. <button> Delete </button></li>

//   `;
//   document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//   document
//     .querySelector("#songlist li:last-child button")
//     .addEventListener("click", () => deleteSong());
// }

// function deleteSong(song) {
//   playlist.splice(playlist.indexOf(song), 1);
//   showPlaylist();
//   console.log(playlist);
// }

// # Øvelse 23

// Environment: `environment-08`

// *Prøveeksamen #5 (sæt 2)*

// 1. Opret en liste af sang-objekter, hvor hver sang indeholder
// `artist`, `title` og `duration` (i form af minutter:sekunder, fx 3:21)

// 2. Lav en funktion til at udskrive listen af sange på websiden
//  - tilføj en `upvote`-knap til hver sang.

// 3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen
// - udskriv derefter listen igen.

// const songs = [
//   { artist: "Jens", title: "Okay", duration: "3:50" },
//   { artist: "Katrine", title: "Yeah", duration: "3:54" },
//   { artist: "Thomas", title: "Kom i byen", duration: "3:52" },
//   { artist: "Sven", title: "Eksamen", duration: "3:53" },
//   { artist: "Gitte", title: "Fire", duration: "3:51" },
// ];

// window.addEventListener("load", initApp);

// function initApp() {
//   console.log("What is 42");
//   addThing();
//   showSongs();
// }

// function showSongs() {
//   document.querySelector("#songlist").innerHTML = "";
//   songs.sort((a, b) => b.score - a.score);
//   for (let i = 0; i < songs.length; i++) {
//     showSong(songs[i]);
//   }
// }

// function showSong(song) {
//   console.log(song);
//   const html = /*html */ `

//   <li>Artist: ${song.artist}, Title: ${song.title}, Duration: ${song.duration}. <button>Upvotes : ${song.score}</button>  </li>
//   `;

//   document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
//   document
//     .querySelector("#songlist li:last-child button")
//     .addEventListener("click", () => moveUp(song));
// }

// function moveUp(song) {
//   console.log(song);
//   song.score++;
//   console.log(song.score);
//   showSongs();
// }

// function addThing() {
//   for (const song of songs) {
//     song.score = 0;
//   }
// }

//Du kan bruge den her version til
// function moveUp(songObject) {
//   const index = songs.findIndex((song) => song === songObject); // Find the index of the clicked song in the songs array

//   if (index > 0) {
//     // Swap positions with the song above if it's not the first song
//     [songs[index - 1], songs[index]] = [songs[index], songs[index - 1]];
//     showSongs(); // Update the song list
//   }
// }

// # Øvelse 24

// Environment: `environment-08`

// *Prøveeksamen #6 (sæt 2)*

// 1. Lav en liste over sange, og lav en funktion til at tilføje et
// sang-objekt med `artist`, `title` og `duration` fra formularen på websiden.

// 2. Lav en funktion til at udskrive listen af sange på websiden.

// 3. Sortér listen alfabetisk efter `artist` eller `
// title` alt efter hvad der bliver valgt på websiden.

// let songs = [];

// window.addEventListener("load", initApp);

// function initApp() {
//   console.log("42");
//   document
//     .querySelector("#add-song-form")
//     .addEventListener("submit", createSongForm);
//   document
//     .querySelector("#sort-songs-form")
//     .addEventListener("change", sortSong);
//   console.log(songs);
// }

// function createSong(artist, title, duration) {
//   const newSong = { artist: artist, title: title, duration: duration };

//   songs.push(newSong);
//   console.log(newSong);
// }

// function createSongForm(event) {
//   event.preventDefault();
//   const form = event.target;

//   const artist = form.name.value;
//   const title = form.title.value;
//   const duration = form.duration.value;

//   createSong(artist, title, duration);
//   showSongs();
//   console.log(songs);
// }

// function showSongs() {
//   document.querySelector("#songlist").innerHTML = "";

//   for (const song of songs) {
//     showSong(song);
//   }
// }

// function showSong(song) {
//   const html = /* html*/ `

//   <li>Artist: ${song.artist}, Title: ${song.title}, Duration: ${song.duration}</li>

//   `;
//   document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
// }

// function sortSong(event) {
//   const sortCriteria = event.target.checked;
//   // let sortedSong = songs;

//   if (sortCriteria === "artist") {
//     songs.sort((a, b) => a.artist.localeCompare(b.artist));
//   } else if (sortCriteria === "title") {
//     songs.sort((a, b) => a.title.localeCompare(b.title));
//   }

//   showSongs();
//   console.log(sortCriteria);
// }
