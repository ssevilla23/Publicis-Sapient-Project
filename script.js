// Task 1
// Filter PLACES by type. If the type property of an object in PLACES matches the typePreference parameter.
// Step 1: Create a new filteredPlaces array and store it in a variable
// Step 2: Loop through PLACES
// Step 3: If a place object's type property matches the typePreference parameter, add it to filteredPlaces
// Step 4: After the loop, return filteredPlaces

function filterPlacesByType(typePreference) {
  let filteredPlaces = [];
  for (let i = 0; i < PLACES.length; i++) {
    if (typePreference == PLACES[i].type) {
      filteredPlaces.push(PLACES[i]);
    }
  }
  return filteredPlaces;
}

// Task 2
// Step 1: Create a new div element and store it in a variable
// Step 2: Add the col class to the new div element
// Step 3: Set the innerHTML of the div with a template string. It should resemble the structure shown in the readme. Interpolate the values for place.name, place.img, and place.location where needed. More info - https://wesbos.com/template-strings-html
// Step 4: Return the element

function createCard(place) {
  let div = document.createElement("div");
  div.classList.add("col");
  let contents = `
  <div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
    <img src="${place.img}" class="card-img-top h-100" alt="a picture of ${place.name}">
    <div class="card-body">
      <h5 class="card-title">${place.name}</h5>
      <p class="card-text">${place.location}</p>
    </div>
  </div>`;
  div.innerHTML = contents;
  return div;
}

// Task 3
// Step 1: Store the DOM element with the id of "recommendations" in a variable
// Step 2: Clear the "recommendations" innerHTML
// Step 3: Loop through the filteredPlaces array
// Step 4: Create a card for each place using the createCard function
// Step 5: Add/append each card to the recommendations DOM element

function populateRecommendationCards(filteredPlaces) {
  let recommendations = document.getElementById("recommendations");
  recommendations.innerHTML = "";
  for (let i = 0; i < filteredPlaces.length; i++) {
    recommendations.appendChild(createCard(filteredPlaces[i]));
  }
}

// Task 4
// Step 1: Loop through the PLACES array
// Step 2: If a place object's name property matches the placeName parameter, return that place object

function findPlaceByName(placeName) {
  for (let i = 0; i < PLACES.length; i++) {
    if (placeName == PLACES[i].name) {
      return PLACES[i];
    }
  }
}
