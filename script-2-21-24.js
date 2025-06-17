//Define Variables
let windowHeight = window.innerHeight;
let ninetyEightPercentWindowHeight = windowHeight * 0.98;
let expandBttns = document.querySelectorAll(".expand-bttn");
let expandSects = document.querySelectorAll(".expnd-sect");
let cards = document.querySelectorAll(".card");
let cardImgs = document.querySelectorAll(".card-img");
let closeBttns = document.querySelectorAll(".close-card-info");

//Click Listneners
expandBttns.forEach(function (bttn) {
  bttn.addEventListener("click", expandSection);
});
expandBttns.forEach(function (bttn) {
  bttn.addEventListener("click", activeButton);
});

cardImgs.forEach(function (cardImg) {
  cardImg.addEventListener("click", activateCard);
});

//Functions
function expandSection(e) {
  let targetSectId = e.target.dataset.targetSectId;
  expandSects.forEach(function (sect) {
    sect.classList.remove("active");
    if (sect.id == targetSectId) {
      sect.classList.add("active");
    }
  });
}

function activeButton(e) {
  expandBttns.forEach(function (bttn) {
    bttn.classList.remove("active");
  });
  e.target.classList.add("active");
}

function revealShowFeatures() {
  cards.forEach(function (card) {
    var cardImg = card.querySelector(".card-img");
    var distanceFromTop = cardImg.getBoundingClientRect().top;
    var cardImgHeight = cardImg.offsetHeight;
    var bottomDistanceFromTop = distanceFromTop + cardImgHeight;

    if (bottomDistanceFromTop < ninetyEightPercentWindowHeight) {
      card.classList.add("tab-show");
    }
  });
}

function activateCard() {
  if (this.parentElement.classList.contains("active")) {
    this.parentElement.classList.remove("active");
  } else {
    cards.forEach(function (card) {
      card.classList.remove("active");
    });
    this.parentElement.classList.add("active");
  }
}

window.addEventListener("scroll", revealShowFeatures);
