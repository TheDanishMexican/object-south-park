"use strict";

window.addEventListener("load", start);

function start() {}

const tuongLuKim = {
  name: "Tuong Lu Kim",
  nickname: "None",
  image:
    "https://static.wikia.nocookie.net/southpark/images/c/cd/City-wok-guy.png",
  occupation: "Owner of City Wok restaurant",
  age: "Unknown",
  voicedBy: "Trey Parker",
  gender: "Male",
  religion: "Unknown",
  catchPhrase: "Shitty Wok!",
  hairColor: "Black",
  schoolGrade: "N/A",
  episodes:
    "S03E01, S05E01, S05E02, S05E03, S05E09, S11E04, S11E13, S13E03, S14E03, S14E09, S15E06, S16E12, S18E05, S22E03, S23E02.",
  appearances: 15,
  firstAppearance:
    " S03E01, Tuong Lu Kim first appeared in the third season of South Park, in the episode 'Rainforest Shmainforest.'",
};

function showCharacter(character) {
  const myHTML = /*html*/ `
     <div><p>Name:<span> ${character.name}</span></p>
      <p>Nickname:<span> ${character.nickname}</span></p>
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

showCharacter(tuongLuKim);
showCharacter(tuongLuKim);
showCharacter(tuongLuKim);
showCharacter(tuongLuKim);
