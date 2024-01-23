//Get the Expand Section Buttons and Sections
let expandBttns = document.querySelectorAll(".expand-bttn");
let expandSects = document.querySelectorAll(".expnd-sect");
//Get the Cards
let cards = document.querySelectorAll(".card");

//VIDEO TOGGLE

//Add click listner to each Expand Section Button
expandBttns.forEach(function(bttn) {
    bttn.addEventListener("click", expandSection);
  }
);

//Expand the Section matching the Expand Section Button clicked
function expandSection(e) {
  let targetSectId = e.target.dataset.targetSectId;
  expandSects.forEach(function(sect) {
      sect.classList.remove("active");
      if (sect.id == targetSectId) {
        sect.classList.add("active");
      }
    }
  )
};

//END VIDEO TOGGLE


//SITE CARD INFO TOGGLE

//Add click listner to each each Card
cards.forEach(function(card) {
    card.addEventListener("click", toggleInfo);
  }
);

//Add active class to selected Card. 
function toggleInfo() {
  //remove active class from previously selected cards
  cards.forEach(function(card) {
    card.classList.remove("active");
  })
  //add active class
  this.classList.add("active");
}

//END SITE CARD INFO TOGGLE