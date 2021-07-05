const dinos = [];
const form = document.getElementById("dino-compare");
const grid = document.getElementById("grid");

form.style.display = "initial";
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
dinos.push(
  new Dino(
    "Pigeon",
    0.5,
    9,
    "herbavor",
    "World Wide",
    "Holocene",
    "All birds are living dinosaurs.",
    "./images/pigeon.png"
  )
);
dinos.push(
  new Dino(
    "Triceratops",
    13000,
    114,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "First discovered in 1889 by Othniel Charles Marsh",
    "./images/triceratops.png"
  )
);

dinos.push(
  new Dino(
    "Tyrannosaurus Rex",
    11905,
    144,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "The largest known skull measures in at 5 feet long.",
    "./images/tyrannosaurusrex.png"
  )
);

dinos.push(
  new Dino(
    "Anklyosaurus",
    10500,
    55,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "Anklyosaurus survived for approximately 135 million years.",
    "./images/anklyosaurus.png"
  )
);

dinos.push(
  new Dino(
    "Brachiosaurus",
    70000,
    372,
    "herbavor",
    "North America",
    "Late Jurasic",
    "An asteroid was named 9954 Brachiosaurus in 1991.",
    "./images/brachiosaurus.png"
  )
);

dinos.push(
  new Dino(
    "Stegosaurus",
    11600,
    79,
    "herbavor",
    "North America, Europe, Asia",
    "Late Jurasic to Early Cretaceous",
    "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
    "./images/stegosaurus.png"
  )
);

dinos.push(
  new Dino(
    "Elasmosaurus",
    16000,
    59,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Elasmosaurus was a marine reptile first discovered in Kansas.",
    "./images/elasmosaurus.png"
  )
);

dinos.push(
  new Dino(
    "Pteranodon",
    44,
    20,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Actually a flying reptile, the Pteranodon is not a dinosaur.",
    "./images/pteranodon.png"
  )
);

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
  const name = document.getElementById("name");
  const feet = document.getElementById("feet");
  const inches = document.getElementById("inches");
  const weight = document.getElementById("weight");
  const diet = document.getElementById("diet");

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
// NOTE: Weight in JSON file is in lbs, height in inches.
const compWeight = () => {
  let num = Math.floor(Math.random() * 8);
  if (num == 4) num += 1; // skip human
  console.log("weight", human);
  if (dinos[num].species == "Pigeon") num += 1; // skip bird
  if (human.weight > dinos[num].weight) {
    dinos[num].fact = `${human.name} is heavier than ${dinos[num].species}`;
  } else {
    dinos[num].fact = `${dinos[num].species} is heavier than ${human.name}`;
  }
};

// Create Dino Compare Method 2  *** compares to random dinosaur from the list
// NOTE: Weight in JSON file is in lbs, height in inches.
const compHeight = () => {
  let num = Math.floor(Math.random() * 8);
  console.log("height", human);
  if (num == 4) num += 2; // skip human and previous dinosaur in Method 1
  if (dinos[num].species == "Pigeon") num += 1; // skip bird
  if (human.height > dinos[num].height) {
    dinos[num].fact = `${human.name} is taller than ${dinos[num].species}`;
  } else {
    dinos[num].fact = `${dinos[num].species} is higher than ${human.name}`;
  }
};

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
const compDiet = () => {
  let num = Math.floor(Math.random() * 8);
  console.log("diet", human);
  if (num == 4) num += 3; // skip human and previous dinosaurs in Method 1, 2
  if (dinos[num].species == "Pigeon") num += 1; // skip bird
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
  dinos.splice(4, 0, human);
  const tiles = [];
  dinos.forEach((d, idx) => {
    const tile = document.createElement("DIV");
    tile.classList.add("grid-item");

    tile.innerHTML = `
                      <h3>${d.name ? d.name : d.species}</h3>
                      <img src='${d.img}' />
                      <p>${d.name ? "" : d.fact}</p>`;
    tiles.push(tile);
  });
  console.log(tiles);
  return tiles;
};

// Add tiles to DOM
const addTilesToDom = () => {
  const frag = document.createDocumentFragment();
  const tiles = generateTiles();
  tiles.forEach((d, idx) => {
    frag.appendChild(d);
  });
  grid.innerHTML = "";
  grid.appendChild(frag);
};

// Remove form from screen
const hideForm = () => {
  form.style.display = "none";
  grid.style.display = "flex";
};

// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  human = getHumanData();
  compWeight();
  compHeight();
  compDiet();
  addTilesToDom();
  hideForm();
});
