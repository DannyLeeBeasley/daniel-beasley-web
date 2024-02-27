//Define Variables
let windowHeight = window.innerHeight;
let ninetyEightPercentWindowHeight = windowHeight * 0.98;
let expandBttns = document.querySelectorAll(".expand-bttn");
let expandSects = document.querySelectorAll(".expnd-sect");
let cards = document.querySelectorAll(".card");
let closeBttns = document.querySelectorAll(".close-card-info");
//End Variables

//Click Listneners
expandBttns.forEach(function (bttn) {
  bttn.addEventListener("click", expandSection);
});
expandBttns.forEach(function (bttn) {
  bttn.addEventListener("click", activeButton);
});

cards.forEach(function (card) {
  card.addEventListener("click", activateCard);
});
//End Click Listeners

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

function revealReadMore() {
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
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    cards.forEach(function (card) {
      card.classList.remove("active");
    });
    this.classList.add("active");
  }
}
//End Functions

window.addEventListener("scroll", revealReadMore);
