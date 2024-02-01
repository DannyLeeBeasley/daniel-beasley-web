//--// DEFINE VARIABLES //--//
//Get the Expand Section Buttons and Sections
let expandBttns = document.querySelectorAll(".expand-bttn");
let expandSects = document.querySelectorAll(".expnd-sect");
//Get the Cards
let cards = document.querySelectorAll(".card");
let closeBttns = document.querySelectorAll(".close-card-info");
//--// END DEFINE VARIABLES //--//


//--// VIDEO TOGGLE //--//
//Add click listener to each Expand Section Button
expandBttns.forEach(function (bttn) {
  bttn.addEventListener("click", expandSection);
});
//Add click listener to each Expand Section Button
expandBttns.forEach(function (bttn) {
  bttn.addEventListener("click", activeButton);
});

//Expand the Section matching the Expand Section Button clicked
function expandSection(e) {
  let targetSectId = e.target.dataset.targetSectId;
  expandSects.forEach(function (sect) {
    sect.classList.remove("active");
    if (sect.id == targetSectId) {
      sect.classList.add("active");
    }
  });
}

//Change appearance of buttons based on active or inactive state
function activeButton(e) {
  expandBttns.forEach(function (bttn) {
    bttn.classList.remove("active");
  });
  e.target.classList.add("active");
}
//--// END VIDEO TOGGLE //--//


//--// SITE CARD INFO TOGGLE //--//
//Add click listner to each each Card
cards.forEach(function (card) {
  card.addEventListener("click", toggleCardInfo);
});

//Add active class to selected Card.
function toggleCardInfo() {
  // remove active class from previously selected cards
  cards.forEach(function (card) {
    card.classList.remove("active");
  });
  // add active class
  this.classList.add("active");
}
//--// END SITE CARD INFO TOGGLE //--//


//--// CLOSE CARD INFO //--//
//Add click listener to all close buttons
closeBttns.forEach(function (closeBttn) {
  closeBttn.addEventListener("click", closeCardInfo);
});

//Remove active class from all cards
function closeCardInfo() {
  this.parentElement.parentElement.parentElement.classList.remove("active");
}
//--// END CLOSE CARD INFO //--//
