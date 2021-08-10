// Create Dino Constructor
function Dino(name, weight, height, diet, location, timeperiod, fact, image) {

    if (typeof name == "string") { //check if input is a string
        this.name = name;
    } else {
        this.name = "Invalid Name"; // "Invalid Name" to indicate something went wrong during debugging
    }

    if (typeof weight == "number") { //check if input is a number
        this.weight = weight;
    } else {
        this.weight = -1; //-1 to indicate something went wrong during debugging
    }

    if (typeof height == "number") { //check if input is a number
        this.height = height;
    } else {
        this.height = -1; //-1 to indicate something went wrong during debugging
    }

    if (typeof diet == "string") { //check if input is a string
        this.diet = diet;
    } else {
        this.diet = "Invalid Diet"; // "Invalid Diet" to indicate something went wrong during debugging
    }

    if (typeof location == "string") { //check if input is a string
        this.location = location;
    } else {
        this.location = "Invalid Location"; // "Invalid Location" to indicate something went wrong during debugging
    }

    if (typeof timeperiod == "string") { //check if input is a string
        this.timeperiod = timeperiod;
    } else {
        this.timeperiod = "invalid Time Period"; // "invalid time period" to indicate something went wrong during debugging
    }

    if (typeof fact == "string") { //check if input is a string
        this.fact = fact;
    } else {
        this.fact = "Invalid Fact"; // "Invalid Location" to indicate something went wrong during debugging
    }

    this.image = image;
}


// Create Dino Objects
const JSONData = '{"Dinos": [{"species": "Triceratops", "weight": 13000, "height": 114, "diet": "herbivore", "where": "North America", "when": "Late Cretaceous", "fact": "First discovered in 1889 by Othniel Charles Marsh"}, ' +
    '{"species": "Tyrannosaurus Rex", "weight": 11905, "height": 144, "diet": "carnivore", "where": "North America", "when": "Late Cretaceous", "fact": "The largest known skull measures in at 5 feet long."}, ' +
    '{"species": "Anklyosaurus", "weight": 10500, "height": 55, "diet": "herbivore", "where": "North America", "when": "Late Cretaceous", "fact": "Anklyosaurus survived for approximately 135 million years."}, ' +
    '{"species": "Brachiosaurus", "weight": 70000, "height": 372, "diet": "herbivore", "where": "North America", "when": "Late Jurasic", "fact": "An asteroid was named 9954 Brachiosaurus in 1991."}, ' +
    '{"species": "Stegosaurus", "weight": 11600, "height": 79, "diet": "herbivore", "where": "North America, Europe, Asia", "when": "Late Jurasic to Early Cretaceous", "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."}, ' +
    '{"species": "Elasmosaurus", "weight": 16000, "height": 59, "diet": "carnivore", "where": "North America", "when": "Late Cretaceous", "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."}, ' +
    '{"species": "Pteranodon", "weight": 44, "height": 20, "diet": "carnivore", "where": "North America", "when": "Late Cretaceous", "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."}, ' +
    '{"species": "Pigeon", "weight": 0.5, "height": 9, "diet": "herbivore", "where": "World Wide", "when": "Holocene", "fact": "All birds are living dinosaurs."}]}'
const dinoData = JSON.parse(JSONData);
const dinoArray = [];
dinoData.Dinos.forEach(element => dinoArray.push(new Dino(element.species, element.weight, element.height, element.diet, element.where, element.when, element.fact, element.species.toLowerCase().concat('.png'))));



// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 
function compare1(dinosaur, human) { //weight
    let fact = '';
    if (dinosaur.weight > human.weight) {
        fact = ''.concat(dinosaur.name, ' is ', (dinosaur.weight - human.weight), ' lbs heavier than you, or about ', Math.floor(dinosaur.weight / human.weight), ' times heavier than you.');
    }
    if (dinosaur.weight < human.weight) {
        fact = ''.concat('You are ', (human.weight - dinosaur.weight), ' lbs heavier than a ', dinosaur.name, ', or about ', Math.floor(human.weight / dinosaur.weight), ' times heavier.');
    }
    if (dinosaur.weight === human.weight) {
        fact = ''.concat('You and ', dinosaur.name, ' are equal in weight, weighing in at ', human.weight, '!');
    }
    return fact;
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compare2(dinosaur, human) { //height
    const height = parseFloat(human.feet) * 12 + parseFloat(human.inches);
    let fact = '';
    if (dinosaur.height > height) {
        fact = ''.concat(dinosaur.name, ' is ', (dinosaur.height - height), ' inches taller than you, or about ', Math.floor(dinosaur.height / height), ' times taller than you.');
    }
    if (dinosaur.height < height) {
        fact = ''.concat('You are ', (height - dinosaur.height), ' inches taller than a ', dinosaur.name, ', or about ', Math.floor(height / dinosaur.height), ' times taller.');
    }
    if (dinosaur.height === height) {
        fact = ''.concat('You and ', dinosaur.name, ' are equal in height, measuring in at ', height, '!');
    }
    return fact;
}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function compare3(dinosaur, human) { //diet
    let fact = '';
    if (dinosaur.diet.toLowerCase() == human.diet.toLowerCase()) {
        fact = ''.concat('You and ', dinosaur.name, ' are both ', dinosaur.diet.toLowerCase(), 's!');
    } else {
        fact = ''.concat(dinosaur.name, ' is a ', dinosaur.diet.toLowerCase(), ', while you are a ', human.diet.toLowerCase(), '!');
    }
    return fact;
}

// Generate Tiles for each Dino in Array

// Add tiles to DOM
function addTilesToDOM(human) {
    const grid = document.getElementById('grid'); //get the grid element
    dinoArray.sort(() => Math.random() - 0.5); //randomize array
    dinoArray.splice(4, 0, human); //put human in the middle
    dinoArray.forEach(dino => {
        const tile = document.createElement('div');
        tile.className = 'grid-item';

        const title = document.createElement('h3');
        title.className = 'h3';
        title.innerHTML = dino.name;

        const fact = document.createElement('p');
        fact.className = 'p';

        if (dino != human) { //pick a random fact to display
            let randomfact = "";
            let num = Math.floor((Math.random() * 4) + 1);
            if (dino.name == "Pigeon") { //Bird can only show its fact, no other random facts
                num = 4;
            }
            if (num === 1) {
                randomfact = compare1(dino, human);
            } else if (num === 2) {
                randomfact = compare2(dino, human);
            } else if (num === 3) {
                randomfact = compare3(dino, human);
            } else if (num === 4) {
                randomfact = dino.fact;
            }
            fact.innerHTML = randomfact
        }

        const image = document.createElement('img'); //get the image of the species
        image.className = 'img';
        image.src = `./images/${dino.image}`;

        tile.appendChild(title);
        tile.appendChild(image);
        if (dino != human) { //human does not display any facts
            tile.appendChild(fact);
        }
        grid.appendChild(tile);
    })
}

// Remove form from screen
function removeForm() {
    document.getElementById('dino-compare').innerHTML = '';
}

// On button click, prepare and display infographic
function buildTile() {
    // Create Human Object

    // Use IIFE to get human data from form

    const human = (function () {
        const name = document.getElementById('name').value;
        const weight = document.getElementById('weight').value;
        const feet = document.getElementById('feet').value;
        const inches = document.getElementById('inches').value;
        const diet = document.getElementById('diet').value;
        
        return {
            name,
            weight,
            feet,
            inches,
            diet,
            image: 'human.png'
        };
    })();
    addTilesToDOM(human);
    removeForm();
}

function buttonClick() {
    buildTile();
}