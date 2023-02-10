import { emotionDB, familyDB, workDB } from "./bd.js";

const root = document.querySelector("#root");
const button = document.querySelector("#button");
const text = document.querySelector("#text");

printNewText(text);

button.addEventListener("click", (event) => printNewText(text));

function printNewText(element) {
  const emotion = getOneFromArray(emotionDB)
  const family = getOneFromArray(familyDB)
  const work = getOneFromArray(workDB)
  return (element.textContent = `${emotion} ${family} ${work}`);
}

function getOneFromArray(bd) {
  let randomNumber = getRandomNumber(0, bd.length);
  return bd[randomNumber]
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}

