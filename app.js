const arr = [];

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

arr.push(
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

arr.push(
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

arr.push(
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

arr.push(
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

arr.push(
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

arr.push(
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

arr.push(
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

arr.push(
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

// Create Human Object
const human = {
  name: "",
  weight: 0,
  height: 0,
  diet: "herbavor",
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
      name: name.value,
      height: parseInt(feet.value) * 12 + parseInt(inches.value),
      weight: parseInt(weight.value),
      diet: diet.value,
    };
  };
  return getHumanData;
})();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  arr.splice(4, 0, getHumanData());

  console.log(arr);
});
