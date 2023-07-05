"use strict";

// Environment 6

// INDEX LÆRING Til eksamen

const runnerList = [];

function start() {
  console.log("42");
  createRunner("runner1", 50);

  bestRunners();
  showRunner();
}

function createRunner(name, time) {
  const newRunner = {
    name,
    time,
  };

  runnerList.push(newRunner);
  console.log(runnerList);
}

function showRunner() {
  for (let index = 3; index < 6; index++) {
    const runner = runner[index];

    const html =
      /*html */
      `
    <li>${runner.name} - time: ${runner.time}</li>
    `;
    document
      .querySelector("#runnerups-list")
      .insertAdjacentHTML("beforeend", html);
  }
}

function bestRunners() {
  console.log(runnerList);

  runnerList.sort((a, b) => a.time - b.time);
  console.log(runnerList);

  const first = runnerList[0];
  const second = runnerList[1];
  const third = runnerList[2];

  document.querySelector("#gold-name").textContent = first.name;
  document.querySelector("#gold-time").textContent = first.time;

  document.querySelector("#silver-name").textContent = second.name;
  document.querySelector("#silver-time").textContent = second.time;

  document.querySelector("#bronze-name").textContent = third.name;
  document.querySelector("#bronze-time").textContent = third.time;
}
