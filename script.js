"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "📌Correct country🎉 ";
console.log(document.querySelector(".message").textContent);

//number will be change by country
document.querySelector(".number").textContent = "france";
document.querySelector(".score").textContent = 10;

//value
document.querySelector(".guess").value = "france";
console.log(document.querySelector(".guess").value);
*/
//eventlisten

// const x = function () {
//   console.log(france);
// };
//define the guess country

let isClick = false;

const countries_europe = [
  "austria",
  "belgium",
  "england",
  "italy",
  "france",
  "germany",
  "greece",
  "hungary",
  "netherlands",
  "poland",
  "russia",
  "spain",
  "switzerland",
  "turkey",
  "united kingdom",
  "ukraine",
  "portugal",
  "bosnia",
  "bulgaria",
  "denmark",
  "slovakia",
  "finland",
  "norway",
  "ireland",
  "moldova",
  "albania",
  "lithuania",
  "slovenia",
  "estonia",
  "montenegro",
  "andorra",
];

const countries_afrique = [
  "madagascar",
  "zambia",
  "uganda",
  "chad",
  "south africa",
  "kenya",
  "tanzania",
  "ethiopia",
  "republic of congo",
  "algeria",
  "morocco",
  "mauritania",
  "tunisia",
  "egypt",
  "ivory coast",
  "senegal",
  "benin",
  "democratic republic of congo",
  "mali",
  "cameroon",
  "gambia",
  "botswana",
  "namibia",
  "gabon",
  "lesotho",
  "guinea bissau",
  "equatorial guinea",
  "djibouti",
  "burundi",
  "angola",
  "central african republic",
  "nigeria",
];

const countries_amerique = [
  "brazil",
  "argentina",
  "venezuela",
  "peru",
  "colombia",
  "mexico",
  "canada",
  "nicaragua",
  "usa",
  "jamaica",
  "bolivia",
  "chile",
  "ecuador",
  "guatemala",
  "haiti",
  "cuba",
  "dominican republic",
  "honduras",
  "costa rica",
];

const countries_asie = [
  "china",
  "india",
  "japan",
  "malaysia",
  "saudi arabia",
  "south korea",
  "thailand",
  "pakistan",
  "yemen",
  "afghanistan",
  "azerbaijan",
  "tajikistan",
  "uzbekistan",
  "turkmenistan",
  "lebanon",
  "israel",
  "sri lanka",
];

const countries = countries_asie.concat(
  countries_europe,
  countries_afrique,
  countries_amerique
);

function generateAleatoir() {
  let RN = countries[Math.trunc(Math.random() * countries.length)];
  // console.log(RN);
  let pick_country = "./images/flag-" + RN + ".jpeg";

  return { countryName: RN, imagePath: pick_country };
}

let result = generateAleatoir();
let RN = result.countryName;
let pick_country = result.imagePath;

// console.log(RN, pick_country);

let score = 2;
let highscore = 0;

document.querySelectorAll("img")[0].setAttribute("src", pick_country);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// document.querySelector("img").textContent = pick_country;
let nombreClick = 0;

//first you pass the type (what to do )and then the event handler
document.querySelector(".check").addEventListener("click", function () {
  if (!isClick) {
    isClick = true;
    const guess = document.querySelector(".guess").value.toLowerCase().trim();

    //when ther is no input

    if (!guess) {
      isClick = false;
      displayMessage("No country 🧭");
    }

    //when player wins
    else if (guess === RN) {
      isClick = true;
      score++;
      document.querySelector(".score").textContent = score;

      document.querySelector(".message").textContent = "📌Correct country🎉 ";

      document.querySelector(`body`).style.color = `#60b347`;
      document.querySelector(`.message`).style.color = `#60b347`;
      document.querySelector("input").style.borderColor = `#60b347`;
      document.querySelector("input").style.color = `#60b347`;

      if (score > highscore) {
        highscore = score;

        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (countries_asie.includes(RN)) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          "NO but it's in asia🌏 ";
        score -= 1;
        document.querySelector(`.message`).style.color = `red`;
        document.querySelector(`input`).style.color = `red`;
        document.querySelector(".score").textContent = score;
        isClick = false;
      } else {
        document.querySelector(".message").textContent = "you lost the game 💥";
        document.querySelector(".score").textContent = 0;
      }
    }

    //when guess is wrong for amerique
    else if (countries_amerique.includes(RN)) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          "NO but It's in america🌎 ";
        score -= 1;
        document.querySelector(`.message`).style.color = `red`;
        document.querySelector(`input`).style.color = `red`;
        document.querySelector(".score").textContent = score;
        isClick = false;
      } else {
        document.querySelector(".message").textContent = "you lost the game 💥";
        document.querySelector(".score").textContent = 0;
      }
    }
    //when guess is wrong for afrique
    else if (countries_afrique.includes(RN)) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          "NO but It's in africa🌍 ";
        score -= 1;
        document.querySelector(`.message`).style.color = `red`;
        document.querySelector(`input`).style.color = `red`;
        document.querySelector(".score").textContent = score;
        isClick = false;
      } else {
        document.querySelector(".message").textContent = "you lost the game 💥";
        document.querySelector(".score").textContent = 0;
      }
    }
    //when guess is wrong for europe
    else if (countries_europe.includes(RN)) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          "your input is not the name of the country 🌍 ";
        score -= 1;
        document.querySelector(`.message`).style.color = `red`;
        document.querySelector(`input`).style.color = `red`;
        document.querySelector(".score").textContent = score;
        isClick = false;
      } else {
        document.querySelector(".message").textContent = "you lost the game 💥";
        document.querySelector(".score").textContent = 0;
      }
    }
  } else {
    console.log(`already clicked`);
  }
});

//Again touch
document.querySelector(".again").addEventListener("click", function () {
  isClick = false;
  score = 2;
  highscore = 0;

  result = generateAleatoir();
  RN = result.countryName;
  pick_country = result.imagePath;

  document.querySelectorAll("img")[0].setAttribute("src", pick_country);

  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highscore;

  document.querySelector(".guess").value = " ";

  document.querySelector(`body`).style.color = `black`;
  document.querySelector(`.message`).style.color = `black`;
  document.querySelector("input").style.borderColor = `#eee`;
});

document.querySelector(".next").addEventListener("click", function () {
  isClick = false;
  result = generateAleatoir();
  RN = result.countryName;
  pick_country = result.imagePath;

  document.querySelectorAll("img")[0].setAttribute("src", pick_country);
  displayMessage("Start guessing...");
  document.querySelector(`body`).style.color = `black`;
  document.querySelector(`.message`).style.color = `black`;
  document.querySelector("input").style.borderColor = `#eee`;
  document.querySelector("input").style.color = `black`;
  document.querySelector(".guess").value = " ";
});
