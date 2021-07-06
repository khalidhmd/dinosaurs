const form = document.getElementById("dino-compare");
const grid = document.getElementById("grid");

form.style.display = "block";
grid.style.display = "none";

// Create Dino Constructor
class Dino {
  constructor(
    species = "",
    weight = 0,
    height = 0,
    diet = "",
    where = "",
    when = "",
    fact = "",
    img = ""
  ) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.img = img;
  }
}

// Create Dino Objects
const dinos = Dinos.map((d) => {
  const imgFile = "./images/" + d.species.toLowerCase() + ".png";
  const newDino = new Dino(...Object.values(d), imgFile);
  return newDino;
});

// Create Human Object
let human = {
  name: "",
  weight: 0,
  height: 0,
  diet: "",
  img: "./images/human.png",
};

// Use IIFE to get human data from form
const getHumanData = (function () {
  // get the form controls
  const name = document.getElementById("name");
  const feet = document.getElementById("feet");
  const inches = document.getElementById("inches");
  const weight = document.getElementById("weight");
  const diet = document.getElementById("diet");

  // function to read values from controls
  const getHumanData = () => {
    return {
      ...human,
      name: name.value,
      height: parseInt(feet.value) * 12 + parseInt(inches.value),
      weight: parseInt(weight.value),
      diet: diet.value,
    };
  };
  return getHumanData;
})();

// Create Dino Compare Method 1 *** compares to random dinosaur from the list
// This function will generate a randon fact based on comparison by weight
const compWeight = () => {
  // generate a random number between 0 and 7
  let num = Math.floor(Math.random() * 8);
  if (num == 4) num += 1; // skip human
  if (dinos[num].species == "Pigeon") {
    if (num == 7) num -= 1;
    else num += 1;
  } // skip bird
  //compare human to dino based on weight
  if (human.weight > dinos[num].weight) {
    dinos[num].fact = `${human.name} is heavier than ${dinos[num].species}`;
  } else {
    dinos[num].fact = `${dinos[num].species} is heavier than ${human.name}`;
  }
};

// Create Dino Compare Method 2  *** compares to random dinosaur from the list
// This function will generate a randon fact based on comparison by height
const compHeight = () => {
  // generate a random number between 0 and 7
  let num = Math.floor(Math.random() * 8);
  if (num == 4) num += 2; // skip human and previous dinosaur in Method 1
  if (dinos[num].species == "Pigeon") num += 1; // skip bird
  //compare human to dino based on height
  if (human.height > dinos[num].height) {
    dinos[num].fact = `${human.name} is taller than ${dinos[num].species}`;
  } else {
    dinos[num].fact = `${dinos[num].species} is higher than ${human.name}`;
  }
};

// Create Dino Compare Method 3
// This function will generate a randon fact based on comparison by diet
const compDiet = () => {
  // generate a random number between 0 and 7
  let num = Math.floor(Math.random() * 8);
  if (num == 4) num += 3; // skip human and previous dinosaurs in Method 1, 2
  if (dinos[num].species == "Pigeon") num += 1; // skip bird
  //compare human to dino based on diet
  if (human.diet === dinos[num].diet) {
    dinos[
      num
    ].fact = `${human.name} is ${human.diet} as well as ${dinos[num].diet}`;
  } else {
    dinos[
      num
    ].fact = `${dinos[num].species} is ${dinos[num].diet} unlike ${human.name} who is ${human.diet}`;
  }
};

// Generate Tiles for each Dino in dinosay
const generateTiles = () => {
  dinos.splice(4, 0, human); // insert human object in correct position
  const tiles = []; // array of tiles
  dinos.forEach((d) => {
    const tile = document.createElement("DIV"); // create grid element
    tile.classList.add("grid-item");
    // set tile contenet. If the object has name, that's a human
    tile.innerHTML = `
                      <h3>${d.name ? d.name : d.species}</h3> 
                      <img src='${d.img}' />
                      <p>${d.name ? "" : d.fact}</p>`;
    tiles.push(tile); // append new tile to the array
  });
  return tiles;
};

// Add tiles to DOM
const addTilesToDom = () => {
  const frag = document.createDocumentFragment(); //create a dom fragment
  const tiles = generateTiles(); // get the array of tile elemenents
  tiles.forEach((d) => {
    frag.appendChild(d); // append tiles to the document fragment
  });
  grid.innerHTML = "";
  grid.appendChild(frag); // insert the tiles into the grid element on dom
};

// Remove form from screen
const hideForm = () => {
  form.style.display = "none";
  grid.style.display = "flex";
};

// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  human = getHumanData(); // set human object to the data from user
  compWeight();
  compHeight();
  compDiet();
  addTilesToDom();
  hideForm();
});
