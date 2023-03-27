"use strict";

window.addEventListener("load", start);

async function start() {
  const southParkPerson = await getCharacter();
  showCharacters(southParkPerson);
}

async function getCharacter() {
  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/05-data/southpark.json"
  );
  const data = await response.json();
  return data;
}

function showCharacters(data) {
  data.forEach(function (character) {
    showCharacter(character);
  });
}

function showCharacter(character) {
  if (
    character.nickname === null ||
    character.nickname === "undefined" ||
    character.nickname === undefined ||
    character.nickname === "Unknown" ||
    character.nickname === "None"
  ) {
    hasNickname(character);
  } else {
    let myHTML = /*html*/ `
     <div><p>Name:<span> ${character.name}</span></p>
      <p>Nickname:<span> ${character.nickname}</span></p>
      <p>Occupation:<span> ${character.occupation}</span></p>
      <img src=${character.image}/>
      </div>`;

    document
      .querySelector("#character")
      .insertAdjacentHTML("beforeend", myHTML);
    document
      .querySelector("#character div:last-child")
      .addEventListener("click", function () {
        showDialog(character);
      });
  }
}

function showDialog(character) {
  document.querySelector("#dialog-image").src = character.image;
  document.querySelector("#dialog-name").textContent = character.name;
  document.querySelector("#dialog-nickName").textContent = character.nickname;
  document.querySelector("#dialog-occupation").textContent =
    character.occupation;
  document.querySelector("#dialog-age").textContent = character.age;
  document.querySelector("#dialog-voicedBy").textContent = character.voicedBy;
  document.querySelector("#dialog-gender").textContent = character.gender;
  document.querySelector("#dialog-religion").textContent = character.religion;
  document.querySelector("#dialog-catchPhrase").textContent =
    character.catchPhrase;
  document.querySelector("#dialog-hairColor").textContent = character.hairColor;
  document.querySelector("#dialog-schoolGrade").textContent =
    character.schoolGrade;
  document.querySelector("#dialog-episodes").textContent = character.episodes;
  document.querySelector("#dialog-appearances").textContent =
    character.appearances;
  document.querySelector("#dialog-firstAppearance").textContent =
    character.firstAppearance;
  document.querySelector("dialog").showModal();
}

function hasNickname(character) {
  const myHTML = /*html*/ `
     <div><p>Name:<span> ${character.name}</span></p>
      <p>Occupation:<span> ${character.occupation}</span></p>
      <img src=${character.image}/>
      </div>`;

  document.querySelector("#character").insertAdjacentHTML("beforeend", myHTML);
  document
    .querySelector("#character div:last-child")
    .addEventListener("click", function () {
      showDialog(character);
    });
}
