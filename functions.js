/* TO DO
SET UP IMAGES TO SCALE WITH SCREEN SIZE
SET UP EXCLAMATION AREAS WITH FUNCTIONALITY
TREASURE: Empower an element and more likely to draw that element type
MAKE DIFFERENT ENCOUNTERS
Implement animations
Talent tree after each fight

FIRE CARD: Deal damage based on how much youve been burned
WATER CARD: Gain 1 regen per card played this turn

POTIONS: RED POTION: Increase burn by 1
COPY CARD

elite relics
gain 2 block each time you frostbite
windswept also deals 5 damage
start each round with 1 blood siphon
first card you play that deals damage deals 10 more
start each round with 2 regen
each time you inflict burn burn yourself 1

Create point system for balancing value eg. 1 mana = 13 damage, frostbite = .5 mana etc.
SYNERGIES: Wind draw, frost thorn block, water burn heal, blood siphon lightning

BUG: can click card then end turn and play card
CREATE NEW CARD COPIES OF YOUR DECK, THEN WHEN YOU CLICK ON IT, DELETE THEM SO YOU DONT HAVE TO REMOVE EVENTLISTENER AND YOUR WORKING CARDS STAY WHERE THEY ARE
*/
/*
GENERAL FUNCTIONS
*/
function displayNone() {
        for (let i = 0; i < arguments.length; i++) {
                arguments[i].style.display = "none";
        }
}
function displayBlock() {
        for (let i = 0; i < arguments.length; i++) {
                arguments[i].style.display = "block";
              }
}
function displayFlex() {
        for (let i = 0; i < arguments.length; i++) {
                arguments[i].style.display = "flex";
              }
}
function displayInline() {
        for (let i = 0; i < arguments.length; i++) {
                arguments[i].style.display = "inline";
              }
}
function createRandomNumber(minNumber, maxNumber) {
        let randomNumber = minNumber + Math.random() * (maxNumber + 1 - minNumber);
        return Math.floor(randomNumber);
        }
function addGlow() {
        for (let i = 0; i < arguments.length; i++) {
                arguments[i].classList.add("glow");
        }
}
function removeGlow() {
        for (let i = 0; i < arguments.length; i++) {
                arguments[i].classList.remove("glow");
        }
}
function switchArea(block, none) {
        displayNone(arena);
        displayBlock(block);
        displayNone(none);
}
function removeELL1() {
                location1Tiles1.removeEventListener("click", L1T1);
                location1Tiles2.removeEventListener("click", L1T2);
                location1Tiles3.removeEventListener("click", L1T3);
}
function removeELL2() {
                location2Tiles1.removeEventListener("click", L2T1);
                location2Tiles2.removeEventListener("click", L2T2);
                location2Tiles3.removeEventListener("click", L2T3);
                location2Tiles4.removeEventListener("click", L2T4);
}
function removeELL3() {
                location3Tiles1.removeEventListener("click", L3T1);
                location3Tiles2.removeEventListener("click", L3T2);
                location3Tiles3.removeEventListener("click", L3T3);
}
function removeELL4() {
                location4Tiles1.removeEventListener("click", L4T1);
                location4Tiles2.removeEventListener("click", L4T2);
                location4Tiles3.removeEventListener("click", L4T3);
                location4Tiles4.removeEventListener("click", L4T4);
}
function removeELL5() {
                location5Tiles1.removeEventListener("click", L5T1);
                location5Tiles2.removeEventListener("click", L5T2);
                location5Tiles3.removeEventListener("click", L5T3);
}
function removeELL6() {
                location6Tiles1.removeEventListener("click", L6T1);
}
function removeELL7() {
                location7Tiles1.removeEventListener("click", L7T1);
                location7Tiles2.removeEventListener("click", L7T2);
                location7Tiles3.removeEventListener("click", L7T3);
}
function removeELL8() {
                location8Tiles1.removeEventListener("click", L8T1);
                location8Tiles2.removeEventListener("click", L8T2);
                location8Tiles3.removeEventListener("click", L8T3);
}
function removeELL9() {
                location9Tiles1.removeEventListener("click", L9T1);
                location9Tiles2.removeEventListener("click", L9T2);
                location9Tiles3.removeEventListener("click", L9T3);
                location9Tiles4.removeEventListener("click", L9T4);
}
function removeELL10() {
                location10Tiles1.removeEventListener("click", L10T1);
                location10Tiles2.removeEventListener("click", L10T2);
}
function removeELL11() {
                location11Tiles1.removeEventListener("click", L11T1);
}


/*
MAP SECTION
*/
const map = document.querySelector("#map");
const arena = document.querySelector("#arena");
const location1Tiles1 = document.querySelector("#location1-tiles1");
const location1Tiles2 = document.querySelector("#location1-tiles2");
const location1Tiles3 = document.querySelector("#location1-tiles3");
const location2Tiles1 = document.querySelector("#location2-tiles1");
const location2Tiles2 = document.querySelector("#location2-tiles2");
const location2Tiles3 = document.querySelector("#location2-tiles3");
const location2Tiles4 = document.querySelector("#location2-tiles4");
const location3Tiles1 = document.querySelector("#location3-tiles1");
const location3Tiles2 = document.querySelector("#location3-tiles2");
const location3Tiles3 = document.querySelector("#location3-tiles3");
const location4Tiles1 = document.querySelector("#location4-tiles1");
const location4Tiles2 = document.querySelector("#location4-tiles2");
const location4Tiles3 = document.querySelector("#location4-tiles3");
const location4Tiles4 = document.querySelector("#location4-tiles4");
const location5Tiles1 = document.querySelector("#location5-tiles1");
const location5Tiles2 = document.querySelector("#location5-tiles2");
const location5Tiles3 = document.querySelector("#location5-tiles3");
const location6Tiles1 = document.querySelector("#location6-tiles1");
const location7Tiles1 = document.querySelector("#location7-tiles1");
const location7Tiles2 = document.querySelector("#location7-tiles2");
const location7Tiles3 = document.querySelector("#location7-tiles3");
const location8Tiles1 = document.querySelector("#location8-tiles1");
const location8Tiles2 = document.querySelector("#location8-tiles2");
const location8Tiles3 = document.querySelector("#location8-tiles3");
const location9Tiles1 = document.querySelector("#location9-tiles1");
const location9Tiles2 = document.querySelector("#location9-tiles2");
const location9Tiles3 = document.querySelector("#location9-tiles3");
const location9Tiles4 = document.querySelector("#location9-tiles4");
const location10Tiles1 = document.querySelector("#location10-tiles1");
const location10Tiles2 = document.querySelector("#location10-tiles2");
const location11Tiles1 = document.querySelector("#location11-tiles1");
// VARIABLE TO TRACK MAP LOCATION CLICK
let chosenLocation;
const L1T1 = () => {
        chosenLocation = "L1T1";
        chooseLocationPath();
};
location1Tiles1.addEventListener("click", L1T1);
const L1T2 = () => {
        chosenLocation = "L1T2";
        chooseLocationPath();
};
location1Tiles2.addEventListener("click", L1T2);
const L1T3 = () => {
        chosenLocation = "L1T3";
        chooseLocationPath();
};
location1Tiles3.addEventListener("click", L1T3);
const L2T1 = () => {
        chosenLocation = "L2T1";
        chooseLocationPath();
};
const L2T2 = () => {
        chosenLocation = "L2T2";
        chooseLocationPath();
};
const L2T3 = () => {
        chosenLocation = "L2T3";
        chooseLocationPath();
};
const L2T4 = () => {
        chosenLocation = "L2T4";
        chooseLocationPath();
};
const L3T1 = () => {
        chosenLocation = "L3T1";
        chooseLocationPath();
};
const L3T2 = () => {
        chosenLocation = "L3T2";
        chooseLocationPath();
};
const L3T3 = () => {
        chosenLocation = "L3T3";
        chooseLocationPath();
};
const L4T1 = () => {
        chosenLocation = "L4T1";
        chooseLocationPath();
};
const L4T2 = () => {
        chosenLocation = "L4T2";
        chooseLocationPath();
};
const L4T3 = () => {
        chosenLocation = "L4T3";
        chooseLocationPath();
};
const L4T4 = () => {
        chosenLocation = "L4T3";
        chooseLocationPath();
};
const L5T1 = () => {
        chosenLocation = "L5T1";
        chooseLocationPath();
};
const L5T2 = () => {
        chosenLocation = "L5T2";
        chooseLocationPath();
};
const L5T3 = () => {
        chosenLocation = "L5T3";
        chooseLocationPath();
};
const L6T1 = () => {
        chosenLocation = "L6T1";
        chooseLocationPath();
};
const L7T1 = () => {
        chosenLocation = "L7T1";
        chooseLocationPath();
};
const L7T2 = () => {
        chosenLocation = "L7T2";
        chooseLocationPath();
};
const L7T3 = () => {
        chosenLocation = "L7T3";
        chooseLocationPath();
};
const L8T1 = () => {
        chosenLocation = "L8T1";
        chooseLocationPath();
};
const L8T2 = () => {
        chosenLocation = "L8T2";
        chooseLocationPath();
};
const L8T3 = () => {
        chosenLocation = "L8T3";
        chooseLocationPath();
};
const L9T1 = () => {
        chosenLocation = "L9T1";
        chooseLocationPath();
};
const L9T2 = () => {
        chosenLocation = "L9T2";
        chooseLocationPath();
};
const L9T3 = () => {
        chosenLocation = "L9T3";
        chooseLocationPath();
};
const L9T4 = () => {
        chosenLocation = "L9T3";
        chooseLocationPath();
};
const L10T1 = () => {
        chosenLocation = "L10T1";
        chooseLocationPath();
};
const L10T2 = () => {
        chosenLocation = "L10T2";
        chooseLocationPath();
};
const L11T1 = () => {
        chosenLocation = "L11T1";
        chooseLocationPath();
};

let numberOfEnemies;
let enemyIsDead = [false, false, false];
function resetArena() {
        for (i = 0; i < numberOfEnemies; i++) {
                enemyIsDead[i] = false;
                enemyBurnNumber[i].innerText = 0;
                enemyCurrentHealth[i].innerText = enemyMaxHealth[i].innerText;
                enemyWindswept[i] = false;
                enemyFrostbite[i] = false;
                displayInline(enemyHealth[i]);
        }
        enemyLevel++;
        playerWindswept = false;
        playerFrostbite = false;
        playerBurnNumber.innerText = 0;
        displayNone(playerWindsweptImg, playerFrostbiteImg, playerBurnImg, playerBurnNumber, playerRegenImg, playerRegenNumber, playerThornsImg, playerThornsNumber,
                playerBloodImg, playerBloodNumber, playerBlockImg, playerBlockNumber);
        currentMana.innerText = 4;
        playerThornsNumber.innerText = 0;
        playerBlockNumber.innerText = 0;
        playerRegenNumber.innerText = 0;
        frostbitten = false;
        essenceOfEmber = false;
        liquidLightning = false;
        snowfallElixir = false;
        windsOfChange = 5;
        tidalImbuement = false;
        terrasBlessing = false;
        gaiasEmbrace = false;
        maxHandLength = 5;
        let windsCards = document.querySelectorAll(".winds-card-text");
        for (let i = 0; i < windsCards.length; i++) {
                windsCards[i].innerText = `Deal ${windsOfChange} damage. All Winds of Change gain +3 damage.`;  
        }
        displayNone();
        displayFlex(handContainer);
        reshuffleCards();
        enemyContainer.innerHTML = "";
}
function getRandomEncounter() {
        let randomEncounterNumber = createRandomNumber(1, 10);
        let enemyImg = document.querySelectorAll(".enemy-img");
        switchArea(arena, map);
        switch (randomEncounterNumber) {
                case 1:
                        createEnemy(enemiesInformation[1].baseHealth, enemiesInformation[1].img);
                        createEnemy(enemiesInformation[0].baseHealth, enemiesInformation[0].img);
                        createEnemy(enemiesInformation[2].baseHealth, enemiesInformation[2].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-left");
                        enemy[1].classList.add("position-middle");
                        enemy[2].classList.add("position-right");
                        enemyImg = document.querySelectorAll(".enemy-img");
                        enemyImg[2].classList.add("enemy-img-centaur");
                        numberOfEnemies = 3;
                        enemyLevelUp();
                        enemyAction(1, 0, 2);
                        break;
                case 2:
                        createEnemy(enemiesInformation[5].baseHealth, enemiesInformation[5].img);
                        createEnemy(enemiesInformation[6].baseHealth, enemiesInformation[6].img);
                        createEnemy(enemiesInformation[7].baseHealth, enemiesInformation[7].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-left");
                        enemy[1].classList.add("position-middle");
                        enemy[2].classList.add("position-right");
                        numberOfEnemies = 3;
                        enemyLevelUp();
                        enemyAction(5, 6, 7);
                        break;
                case 3:
                        createEnemy(enemiesInformation[3].baseHealth, enemiesInformation[3].img);
                        createEnemy(enemiesInformation[3].baseHealth, enemiesInformation[3].img);
                        createEnemy(enemiesInformation[4].baseHealth, enemiesInformation[4].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-left");
                        enemy[1].classList.add("position-middle");
                        enemy[2].classList.add("position-right");
                        numberOfEnemies = 3;
                        enemyLevelUp();
                        enemyAction(3, 3, 4);
                        break;
                case 4:
                        createEnemy(enemiesInformation[1].baseHealth, enemiesInformation[1].img);
                        createEnemy(enemiesInformation[9].baseHealth, enemiesInformation[9].img);
                        createEnemy(enemiesInformation[8].baseHealth, enemiesInformation[8].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-left");
                        enemy[1].classList.add("position-middle");
                        enemy[2].classList.add("position-right");
                        numberOfEnemies = 3;
                        enemyLevelUp();
                        enemyAction(1, 9, 8);
                        break;
                case 5:
                        createEnemy(enemiesInformation[1].baseHealth, enemiesInformation[1].img);
                        createEnemy(enemiesInformation[1].baseHealth, enemiesInformation[1].img);
                        createEnemy(enemiesInformation[7].baseHealth, enemiesInformation[7].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-left");
                        enemy[1].classList.add("position-middle");
                        enemy[2].classList.add("position-right");
                        numberOfEnemies = 3;
                        enemyLevelUp();
                        enemyAction(1, 1, 7);
                        break;
                case 6:
                        createEnemy(enemiesInformation[0].baseHealth, enemiesInformation[0].img);
                        createEnemy(enemiesInformation[0].baseHealth, enemiesInformation[0].img);
                        createEnemy(enemiesInformation[3].baseHealth, enemiesInformation[3].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-left");
                        enemy[1].classList.add("position-middle");
                        enemy[2].classList.add("position-right");
                        numberOfEnemies = 3;
                        enemyLevelUp();
                        enemyAction(0, 0, 3);
                        break;
                case 7:
                        createEnemy(enemiesInformation[5].baseHealth, enemiesInformation[5].img);
                        createEnemy(enemiesInformation[6].baseHealth, enemiesInformation[6].img);
                        createEnemy(enemiesInformation[2].baseHealth, enemiesInformation[2].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-left");
                        enemy[1].classList.add("position-middle");
                        enemy[2].classList.add("position-right");
                        enemyImg = document.querySelectorAll(".enemy-img");
                        enemyImg[2].classList.add("enemy-img-centaur");
                        numberOfEnemies = 3;
                        enemyLevelUp();
                        enemyAction(1, 1, 7);
                        break;
                case 8:
                        createEnemy(enemiesInformation[9].baseHealth, enemiesInformation[9].img);
                        createEnemy(enemiesInformation[8].baseHealth, enemiesInformation[8].img);
                        createEnemy(enemiesInformation[2].baseHealth, enemiesInformation[2].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-left");
                        enemy[1].classList.add("position-middle");
                        enemy[2].classList.add("position-right");
                        enemyImg = document.querySelectorAll(".enemy-img");
                        enemyImg[2].classList.add("enemy-img-centaur");
                        numberOfEnemies = 3;
                        enemyLevelUp();
                        enemyAction(9, 8, 2);
                        break;
                case 9:
                        createEnemy(enemiesInformation[4].baseHealth, enemiesInformation[4].img);
                        createEnemy(enemiesInformation[4].baseHealth, enemiesInformation[4].img);
                        createEnemy(enemiesInformation[4].baseHealth, enemiesInformation[4].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-left");
                        enemy[1].classList.add("position-middle");
                        enemy[2].classList.add("position-right");
                        enemyImg = document.querySelectorAll(".enemy-img");
                        numberOfEnemies = 3;
                        enemyLevelUp();
                        enemyAction(4, 4, 4);
                        break;
                case 10:
                        createEnemy(enemiesInformation[9].baseHealth, enemiesInformation[9].img);
                        createEnemy(enemiesInformation[9].baseHealth, enemiesInformation[9].img);
                        createEnemy(enemiesInformation[9].baseHealth, enemiesInformation[9].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-left");
                        enemy[1].classList.add("position-middle");
                        enemy[2].classList.add("position-right");
                        enemyImg = document.querySelectorAll(".enemy-img");
                        numberOfEnemies = 3;
                        enemyLevelUp();
                        enemyAction(9, 9, 9);
                        break;
        }
}
function getRandomEliteEncounter() {
        randomEncounterNumber = createRandomNumber(1, 4);
        switch (randomEncounterNumber) {
                case 1:
                        createEnemy(enemiesInformation[10].baseHealth, enemiesInformation[10].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-middle");
                        numberOfEnemies = 1;
                        enemyLevelUp();
                        enemyAction(10);
                        break;
                case 2:
                        createEnemy(enemiesInformation[11].baseHealth, enemiesInformation[11].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-middle");
                        numberOfEnemies = 1;
                        enemyLevelUp();
                        enemyAction(11);
                        break;
                case 3:
                        createEnemy(enemiesInformation[12].baseHealth, enemiesInformation[12].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-middle");
                        numberOfEnemies = 1;
                        enemyLevelUp();
                        enemyAction(12);
                        break;
                case 4:
                        createEnemy(enemiesInformation[13].baseHealth, enemiesInformation[13].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-middle");
                        numberOfEnemies = 1;
                        enemyLevelUp();
                        enemyAction(13);
                        break;
        }
}

function chooseLocationPath() {
        switch (chosenLocation) {
                case "L1T1":
                        removeGlow(location1Tiles1, location1Tiles2, location1Tiles3);
                        addGlow(location2Tiles1, location2Tiles2);
                        removeELL1();
                        location2Tiles1.addEventListener("click", L2T1);
                        location2Tiles2.addEventListener("click", L2T2);
                        getShop();
                        break;
                case "L1T2":
                        removeGlow(location1Tiles1, location1Tiles2, location1Tiles3);
                        addGlow(location2Tiles3);
                        removeELL1();
                        location2Tiles3.addEventListener("click", L2T3);
                        getRandomEncounter();
                        break;
                case "L1T3":
                        removeGlow(location1Tiles1, location1Tiles2, location1Tiles3);
                        addGlow(location2Tiles4);
                        removeELL1();
                        location2Tiles4.addEventListener("click", L2T4);
                        getRandomEncounter();
                        break;
                case "L2T1":
                        resetArena();
                        removeGlow(location2Tiles1, location2Tiles2);
                        addGlow(location3Tiles1);
                        removeELL2();
                        location3Tiles1.addEventListener("click", L3T1);
                        getRandomEncounter();
                        break;
                case "L2T2":
                        resetArena();
                        removeGlow(location2Tiles1, location2Tiles2);
                        addGlow(location3Tiles2);
                        removeELL2();
                        location3Tiles2.addEventListener("click", L3T2);
                        getRandomExclamation();
                        break;
                case "L2T3":
                        resetArena();
                        removeGlow(location2Tiles3);
                        addGlow(location3Tiles3);
                        removeELL2();
                        location3Tiles3.addEventListener("click", L3T3);
                        getRandomEncounter();
                        break;
                case "L2T4":
                        resetArena();
                        removeGlow(location2Tiles4);
                        addGlow(location3Tiles3);
                        removeELL2();
                        location3Tiles3.addEventListener("click", L3T3);
                        break;
                case "L3T1":
                        resetArena();
                        removeGlow(location3Tiles1);
                        addGlow(location4Tiles1);
                        removeELL3();
                        location4Tiles1.addEventListener("click", L4T1);
                        getRandomEncounter();
                        break;
                case "L3T2":
                        resetArena();
                        removeGlow(location3Tiles2);
                        addGlow(location4Tiles2);
                        removeELL3();
                        location4Tiles2.addEventListener("click", L4T2);
                        getRandomExclamation();
                        break;
                case "L3T3":
                        resetArena();
                        removeGlow(location3Tiles3);
                        addGlow(location4Tiles3, location4Tiles4);
                        removeELL3();
                        location4Tiles3.addEventListener("click", L4T3);
                        location4Tiles4.addEventListener("click", L4T4);
                        getRandomEncounter();
                        break;
                case "L4T1":
                        resetArena();
                        removeGlow(location4Tiles1);
                        addGlow(location5Tiles1);
                        removeELL4();
                        location5Tiles1.addEventListener("click", L5T1);
                        getRandomEliteEncounter();
                        break;
                case "L4T2":
                        resetArena();
                        removeGlow(location4Tiles2);
                        addGlow(location5Tiles1, location5Tiles2);
                        removeELL4();
                        location5Tiles1.addEventListener("click", L5T1);
                        location5Tiles2.addEventListener("click", L5T2);
                        getRandomEncounter();
                        break;
                case "L4T3":
                        resetArena();
                        removeGlow(location4Tiles3, location4Tiles4);
                        addGlow(location5Tiles2, location5Tiles3);
                        removeELL4();
                        location5Tiles2.addEventListener("click", L5T2);
                        location5Tiles3.addEventListener("click", L5T3);
                        break;
                case "L4T4":
                        resetArena();
                        removeGlow(location4Tiles3, location4Tiles4);
                        addGlow(location5Tiles3);
                        removeELL5();
                        location5Tiles3.addEventListener("click", L5T3);
                        break;
                case "L5T1":
                        resetArena();
                        removeGlow(location5Tiles1, location5Tiles2, location5Tiles3);
                        addGlow(location6Tiles1);
                        removeELL5();
                        location6Tiles1.addEventListener("click", L6T1);
                        break;
                case "L5T2":
                        resetArena();
                        removeGlow(location5Tiles1, location5Tiles2, location5Tiles3);
                        addGlow(location6Tiles1);
                        removeELL5();
                        location6Tiles1.addEventListener("click", L6T1);
                        break;
                case "L5T3":
                        resetArena();
                        removeGlow(location5Tiles2, location5Tiles3);
                        addGlow(location6Tiles1);
                        removeELL5();
                        location6Tiles1.addEventListener("click", L6T1);
                        break;
                case "L6T1":
                        resetArena();
                        removeGlow(location6Tiles1);
                        addGlow(location7Tiles1, location7Tiles2, location7Tiles3);
                        removeELL6();
                        location7Tiles1.addEventListener("click", L7T1);
                        location7Tiles2.addEventListener("click", L7T2);
                        location7Tiles3.addEventListener("click", L7T3);
                        break;
                case "L7T1":
                        resetArena();
                        removeGlow(location7Tiles1, location7Tiles2, location7Tiles3);
                        addGlow(location8Tiles1, location8Tiles2);
                        removeELL7();
                        location8Tiles1.addEventListener("click", L8T1);                      
                        location8Tiles2.addEventListener("click", L8T2);
                        getRandomEncounter();
                        break;
                case "L7T2":
                        resetArena();
                        removeGlow(location7Tiles1, location7Tiles2, location7Tiles3);
                        addGlow(location8Tiles2);
                        removeELL7();
                        location8Tiles2.addEventListener("click", L8T2);
                        break;
                case "L7T3":
                        resetArena();
                        removeGlow(location7Tiles1, location7Tiles2, location7Tiles3);
                        addGlow(location8Tiles2, location8Tiles3);
                        removeELL7();
                        location8Tiles2.addEventListener("click", L8T2);
                        location8Tiles3.addEventListener("click", L8T3);
                        getRandomEncounter();
                        break;
                case "L8T1":
                        resetArena();
                        removeGlow(location8Tiles1, location8Tiles2);
                        addGlow(location9Tiles1, location9Tiles2);
                        removeELL8();
                        location9Tiles1.addEventListener("click", L9T1);
                        location9Tiles2.addEventListener("click", L9T2);
                        break;
                case "L8T2":
                        resetArena();
                        removeGlow(location8Tiles1, location8Tiles2, location8Tiles3);
                        addGlow(location9Tiles2, location9Tiles3);
                        removeELL8();
                        location9Tiles2.addEventListener("click", L9T2);
                        location9Tiles3.addEventListener("click", L9T3);
                        break;
                case "L8T3":
                        resetArena();
                        removeGlow(location8Tiles2, location8Tiles3);
                        addGlow(location9Tiles3, location9Tiles4);
                        removeELL8();
                        location9Tiles3.addEventListener("click", L9T3);
                        location9Tiles4.addEventListener("click", L9T4);
                        break;
                case "L9T1":
                        resetArena();
                        removeGlow(location9Tiles1, location9Tiles2);
                        addGlow(location10Tiles1);
                        removeELL9();
                        location10Tiles1.addEventListener("click", L10T1);
                        break;
                case "L9T2":
                        resetArena();
                        removeGlow(location9Tiles1, location9Tiles2, location9Tiles3);
                        addGlow(location10Tiles1);
                        removeELL9();
                        location10Tiles1.addEventListener("click", L10T1);
                        getRandomEncounter();
                        break;
                case "L9T3":
                        resetArena();
                        removeGlow(location9Tiles2, location9Tiles3, location9Tiles4);
                        addGlow(location10Tiles2);
                        removeELL9();
                        location10Tiles2.addEventListener("click", L10T2);
                        break;
                case "L9T4":
                        resetArena();
                        removeGlow(location9Tiles3, location9Tiles4);
                        addGlow(location10Tiles2);
                        removeELL9();
                        location10Tiles2.addEventListener("click", L10T2);
                        break;
                case "L10T1":          
                        resetArena();
                        removeGlow(location10Tiles1);
                        addGlow(location11Tiles1);
                        removeELL10();
                        location11Tiles1.addEventListener("click", L11T1);
                        break;
                case "L10T2":          
                        resetArena();
                        removeGlow(location10Tiles2);
                        addGlow(location11Tiles1);
                        removeELL10();
                        location11Tiles1.addEventListener("click", L11T1);
                        break;
                case "L11T1":
                        removeGlow(location11Tiles1);
                        removeELL11();
                        break;
        }
}
/*
EXCLAMATION SECTION
*/
function createExclamation(title, background, img, text0, text1, text2) {
        const exclamationContainer = document.querySelector("#exclamation-container");
        exclamationContainer.innerHTML = `
        <div class="exclamation-div" style= "background-image: url(${background})">
            <div class="exclamation-information-container">
                <h1 class="exclamation-title">${title}</h1>
                <div class="exclamation-event-img" style= "background-image: url(${img})"></div>
                <div class="exclamation-text-div">
                    <p class="exclamation-text">${text0}<br><br>
                        ${text1}<br><br>
                        ${text2}
                        </p>
                </div>
                <div class="exclamation-button-div">
                    
                </div>
            </div>
        </div>
        `
}
const exclamationContainer = document.querySelector("#exclamation-container");
let exclamationDiv = document.querySelector(".exclamation-div");
let exclamationButtonDiv = document.querySelector(".exclamation-button-div");
let exclamationButton1 = document.querySelector(".exclamation-button-1");
let exclamationButton2 = document.querySelector(".exclamation-button-2");
let exclamationButton3 = document.querySelector(".exclamation-button-3");
let exclamationButton4 = document.querySelector(".exclamation-button-4");
let exclamationButton5 = document.querySelector(".exclamation-button-5");
let exclamationButton6 = document.querySelector(".exclamation-button-6");
const destroyedCardsContainer = document.querySelector("#destroyed-cards-container");
let dontRepeatEncounter = [];
function getRandomExclamation() {
        let randomExclamationNumber = createRandomNumber(1, 3);
        console.log("randum #", randomExclamationNumber);
        switchArea(exclamationContainer, map);
        while (dontRepeatEncounter.includes(randomExclamationNumber)) {
                console.log("randum # start", randomExclamationNumber);
                randomExclamationNumber = createRandomNumber(1, 3);
                console.log("randum # change", randomExclamationNumber);
        }
        switch (randomExclamationNumber) {
                case 1:
                        createExclamation("King Spookly", "imgs/pixel-forest.jpg", "imgs/ghost.jpg", "A ghost peaks out from a tree up ahead.", 
                                "He beckons you closer with his translucent appendage. You approach.",
                                `"I was once a king in this land long ago." His soft whisper echos. "I had all the gold in my possession burried with me. I now realize the arrogance of my actions and would like to make amends for my past mistakes."`);
                        exclamationDiv = document.querySelector(".exclamation-div");
                        exclamationButtonDiv = document.querySelector(".exclamation-button-div");
                        exclamationButtonDiv.innerHTML = `
                        <button class="exclamation-button-1"><span style="color: lightgreen">Accept:</span> Gain 200 Gold, but add a useless card to your deck</button>
                        <button class="exclamation-button-2"><span style="color: rgb(206, 83, 83)">Refuse:</span> Gain 10 max health and heal for 10</button>
                        `;
                        exclamationButton1 = document.querySelector(".exclamation-button-1");
                        exclamationButton2 = document.querySelector(".exclamation-button-2");
                        exclamationButton1.addEventListener("click", () => {
                                createCard(51, newCardsContainer, "card", "card-text");
                                let newCardsArray = document.querySelectorAll(".card");
                                newCardsArray[0].style.background = "linear-gradient(gold, black)";
                                drawPileArray.push(newCardsArray[0]);
                                handContainer.appendChild(newCardsArray[0]);
                                playerGold.innerText = parseFloat(playerGold.innerText) + 200;
                                switchArea(map, exclamationContainer);
                        });
                        exclamationButton2.addEventListener("click", () => {
                                playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 10;
                                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + 10;
                                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + 10;
                                switchArea(map, exclamationContainer);
                        });
                        dontRepeatEncounter.push(1);
                        break;
                case 2:
                        createExclamation("A Goddess's Request", "imgs/pixel-forest.jpg", "imgs/goddess.jpg", "A wise looking woman approaches you with a knowing look.", 
                                `I am the Goddess <span style="color: #81b14f">Terra</span>, spiritual guardian of this world. I appear to you now in physical form to ask of you a sacrifice.`,
                                "This world's natural elemental spirits are slowly withering away due to the dwarves mining operations. I must ask that you lend one of your elemental orbs of power to this land. I would not ask of this if not completely necessary.");
                        exclamationDiv = document.querySelector(".exclamation-div");
                        exclamationButtonDiv = document.querySelector(".exclamation-button-div");
                        exclamationButtonDiv.innerHTML = `
                        <button class="exclamation-button-1" style="text-align: center; width: 50%; height: 50px; margin-top: 20px;">Sacrifice <span style="color: #ba760f">fire</span> cards</button>
                        <button class="exclamation-button-2" style="text-align: center; width: 50%; height: 50px; margin-top: 20px;">Sacrifice <span style="color: #fafba5">lightning</span> cards</button>
                        <button class="exclamation-button-3" style="text-align: center; width: 50%; height: 50px;">Sacrifice <span style="color: #2f989c">ice</span> cards</button>
                        <button class="exclamation-button-4" style="text-align: center; width: 50%; height: 50px;">Sacrifice <span style="color: #86bfdf">air</span> cards</button>
                        <button class="exclamation-button-5" style="text-align: center; width: 50%; height: 50px;">Sacrifice <span style="color: #74ccf4">water</span> cards</button>
                        <button class="exclamation-button-6" style="text-align: center; width: 50%; height: 50px;">Sacrifice <span style="color: #8d624b">earth</span> cards</button>
                        `;
                        exclamationButton1 = document.querySelector(".exclamation-button-1");
                        exclamationButton2 = document.querySelector(".exclamation-button-2");
                        exclamationButton3 = document.querySelector(".exclamation-button-3");
                        exclamationButton4 = document.querySelector(".exclamation-button-4");
                        exclamationButton5 = document.querySelector(".exclamation-button-5");
                        exclamationButton6 = document.querySelector(".exclamation-button-6");
                        function destroyCards(cardType, orb) {
                                for (let i = 0; i < cardType.length; i++) {
                                        if (drawPileArray.includes(cardType[i])) {
                                                console.log("DRAW INCLUDES FIRE");
                                                let drawIndex = drawPileArray.indexOf(cardType[i]);
                                                let getFireCard = drawPileArray.splice(drawIndex, 1);
                                                destroyedCardsArray.push(getFireCard);
                                                console.log("Destroyed :", destroyedCardsArray);        
                                        }
                                        if (handArray.includes(cardType[i])) {
                                                console.log("HAND INCLUDES FIRE");
                                                let drawIndex = handArray.indexOf(cardType[i]);
                                                let getFireCard = handArray.splice(drawIndex, 1);
                                                destroyedCardsArray.push(getFireCard);
                                                console.log("Destroyed :", destroyedCardsArray);        
                                        }
                                        destroyedCardsContainer.appendChild(cardType[i]);
                                }
                                destroyedCardsContainer.innerHTML = ``;
                                destroyedCardsArray = [];
                                const orbImg = document.querySelector(`#${orb}-orb-img`);
                                displayNone(orbImg);
                        }
                        exclamationButton1.addEventListener("click", () => {
                                let fire = document.querySelectorAll(".fire");
                                destroyCards(fire, "fire");
                                switchArea(map, exclamationContainer);
                        });
                        exclamationButton2.addEventListener("click", () => {
                                let lightning = document.querySelectorAll(".lightning");
                                destroyCards(lightning, "lightning");
                                switchArea(map, exclamationContainer);
                        });
                        exclamationButton3.addEventListener("click", () => {
                                let ice = document.querySelectorAll(".ice");
                                destroyCards(ice, "ice");
                                switchArea(map, exclamationContainer);
                        });
                        exclamationButton4.addEventListener("click", () => {
                                let air = document.querySelectorAll(".air");
                                destroyCards(air, "air");
                                switchArea(map, exclamationContainer);
                        });
                        exclamationButton5.addEventListener("click", () => {
                                let water = document.querySelectorAll(".water");
                                destroyCards(water, "water");
                                switchArea(map, exclamationContainer);
                        });
                        exclamationButton6.addEventListener("click", () => {
                                let earth = document.querySelectorAll(".earth");
                                destroyCards(earth, "earth");
                                switchArea(map, exclamationContainer);
                        });
                        dontRepeatEncounter.push(2);
                        break;
                case 3:
                        createExclamation("The Wizard's Apprentice", "imgs/pixel-forest.jpg", "imgs/clone-mage.jpg", "You see a flustered wizard over the next thicket trying and failing to cast a spell.", 
                                `"Are you trying to burn down this entire forest?!" You demand indignantly.`,
                                `"No you damnable fool! I've been trying for days to clone this Terra forsaken thing!" he yells emphatically. "Say...do you think I could get a little bit of practice on one of those spells of yours?"`);
                        exclamationDiv = document.querySelector(".exclamation-div");
                        exclamationButtonDiv = document.querySelector(".exclamation-button-div");
                        exclamationButtonDiv.innerHTML = `
                        <button class="exclamation-button-1" style="margin-top: 20px;"><span style="color: lightgreen">Success:</span> His spell clones the card you choose</button>
                        <button class="exclamation-button-2"><span style="color: rgb(206, 83, 83)">Failure:</span> The card you choose disappears</button>
                        `;
                        exclamationButton1 = document.querySelector(".exclamation-button-1");
                        exclamationButton2 = document.querySelector(".exclamation-button-2");
                        exclamationButton1.addEventListener("click", () => {
                                let allCardsArray = drawPileArray.concat(handArray, discardPileArray);
                                exclamationContainer.innerHTML = `<div class="all-cards-list"></div>`;
                                const allCardsList = document.querySelector(".all-cards-list");
                                let cardIndex;
                                allCardsArray.forEach((i) => {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (i.classList.contains(j)) {
                                                        console.log(cardIndex)
                                                        cardIndex = j;
                                                        createCard(cardIndex, allCardsList, "card-reference", "card-text");
                                                }
                                        }
                                });
                                let cardReference = document.querySelectorAll(".card-reference");
                                cardReference.forEach((i) => {
                                        displayFlex(i);
                                        i.addEventListener("click", () => {
                                                for (let j = 0; j < cardsInformation.length; j++) {
                                                        if (i.classList.contains(j)) {
                                                                console.log("x");
                                                                cardIndex = j;
                                                                createCard(cardIndex, drawPileContainer, "card", "card-text");
                                                                addNewCardInformation(cardIndex);
                                                                switchArea(map, exclamationContainer);
                                                        }
                                                }
                                        });
                                });
                        });    
                        exclamationButton2.addEventListener("click", () => {
                                let allCardsArray = drawPileArray.concat(handArray, discardPileArray);
                                exclamationContainer.innerHTML = `<div class="all-cards-list"></div>`;
                                const allCardsList = document.querySelector(".all-cards-list");
                                let cardIndex;
                                allCardsArray.forEach((i) => {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (i.classList.contains(j)) {
                                                        console.log(cardIndex)
                                                        cardIndex = j;
                                                        createCard(cardIndex, allCardsList, "card-reference", "card-text");
                                                }
                                        }
                                });
                                let cardReference = document.querySelectorAll(".card-reference");
                                cardReference.forEach((i) => {
                                        displayFlex(i);
                                        i.addEventListener("click", () => {
                                                for (let j = 0; j < cardsInformation.length; j++) {
                                                        if (i.classList.contains(j)) {
                                                                drawPileArray.forEach((k) => {
                                                                        if (k.classList.contains(j)) {
                                                                                console.log("x");
                                                                                let drawIndex = drawPileArray.indexOf(k);
                                                                                let getCard = drawPileArray.splice(drawIndex, 1);
                                                                                let holdCard = getCard.pop();
                                                                                destroyedCardsArray.push(holdCard);
                                                                                destroyedCardsContainer.appendChild(holdCard);
                                                                                destroyedCardsArray = [];
                                                                                destroyedCardsContainer.innerHTML = ``;
                                                                                switchArea(map, exclamationContainer);
                                                                        }
                                                                });
                                                        }
                                                }
                                        });
                                        
                                });
                        });
                        dontRepeatEncounter.push(3);
                        break;
        }
}
function getShop () {
        displayNone(map);
        const shopContainer = document.querySelector("#shop-container");
        shopContainer.innerHTML = `
                <div id="shop-div">
                </div>
                <button id="leave-shop-button">Leave Shop</button>
        `;
        const leaveShopButton = document.querySelector("#leave-shop-button");
        leaveShopButton.addEventListener("click", () => {
                switchArea(map, shopContainer);
        });
        const shopDiv = document.querySelector("#shop-div");
        let shopCards = [];
        let dontRepeatCard = [];
        while (dontRepeatCard.length < 10) {
                let newRandomNumber = createRandomNumber(0, cardsInformation.length - 2);
                if (dontRepeatCard.includes(newRandomNumber)) {
                        newRandomNumber = createRandomNumber(0, cardsInformation.length - 2);
                } else {
                        dontRepeatCard.push(newRandomNumber);
                }
        }
        dontRepeatCard.forEach((i) => {
                createCard(i, shopDiv, "card-reference", "card-text");
                let shopCardsReference = document.querySelectorAll(".card-reference");
                shopCards.push(shopCardsReference[shopCardsReference.length - 1]);
        });
        let cardIndex;
        shopCards.forEach((i) => {
                displayFlex(i);
                shopDiv.appendChild(i);
                i.addEventListener("click", () => {       
                        for (let j = 0; j < cardsInformation.length; j++) {
                                if (i.classList.contains(j)) {
                                        cardIndex = j;
                                        createCard(cardIndex, drawPileContainer, "card", "card-text");
                                        addNewCardInformation(cardIndex);
                                        playerGold.innerText -= 50;
                                        displayNone(i, map);
                                }
                        }
                });
        });
                                        
}
/*
CARDS SECTION
*/
const openingCardsContainer = document.querySelector("#opening-cards-container");
const drawPileContainer = document.querySelector("#draw-pile-container");
const drawPileShowCards = document.querySelector("#draw-pile-show-cards");
const exitDrawPileShowCards = document.querySelector("#exit-draw-pile-show-cards");
const discardPileContainer = document.querySelector("#discard-pile-container");
const discardPileShowCards = document.querySelector("#discard-pile-show-cards");
const exitDiscardPileShowCards = document.querySelector("#exit-discard-pile-show-cards");
const handContainer = document.querySelector("#hand-container");
const chooseNewCardDiv = document.querySelector("#choose-new-card-div");

let essenceOfEmber = false;
let liquidLightning = false;
let snowfallElixir = false;
let windsOfChange = 5;
let tidalImbuement = false;
let terrasBlessing = false;
let gaiasEmbrace = false;
// CARD INFO ARRAY TO MAKE CARD DIVS IN HTML
const cardsInformation = [
        {
                manaCost: 1,
                name: "Fireball",
                cardImg: "imgs/fireball2.jpg",
                cardText: "Deal 5 damage and inflict 5 burn",
                chooseEnemyCard: true,
                element: "fire",
                index: 0,
                action: function() {
                        spendMana(0);
                        damageEnemy(5, chosenEnemy);
                        burnEnemy(5, chosenEnemy);
                        playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 2;
                        displayBlock(playerBurnImg, playerBurnNumber); 
                },
        },
        {
                manaCost: 0,
                name: "Combust",
                cardImg: "imgs/combustion.jpg",
                cardText: "Inflict 3 burn",
                chooseEnemyCard: true,
                element: "fire",
                action: function() {
                        burnEnemy(3, chosenEnemy);
                },        
        },
        {
                manaCost: 2,
                name: "Lightning Bolt",
                cardImg: "imgs/lightning2.jpg",
                cardText: "Deal 26 damage to an enemy",                
                chooseEnemyCard: true,
                element: "lightning",
                action: function() {
                        spendMana(2);
                        damageEnemy(26, chosenEnemy);
                },      
        },
        {
                manaCost: 3,
                name: "Chain Lightning",
                cardImg: "imgs/chain-lightning2.jpg",
                cardText: "Deal 20 damage to all enemies",                
                chooseEnemyCard: false,
                element: "lightning",
                action: function() {
                        spendMana(3);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                if (tidalImbuement === true) {
                                        damageEnemy(20, i);
                                        tidalImbuement = true;   
                                } else {
                                        damageEnemy(20000, i);
                                } 
                        }
                        tidalImbuement= false;
                },        
        },
        {
                manaCost: 1,
                name: "Frostbolt",
                cardImg: "imgs/frostbolt.jpeg",
                cardText: "Deal 10 damage and inflict frostbite\nFrostbite: Reduce any buffs gained by 50%",
                chooseEnemyCard: true,
                element: "ice",
                action: function() {
                        spendMana(4);
                        damageEnemy(10, chosenEnemy);
                        inflictFrostbite(chosenEnemy);
                },
        },        
        {
                manaCost: 2,
                name: "Frost Fingers",
                cardImg: "imgs/frost-fingers.jpg",
                cardText: "Deal 18 damage, if you or the enemy has frostbite deal 40 instead",
                chooseEnemyCard: true,
                element: "ice",
                action: function() {
                        spendMana(5);
                        if (playerFrostbite || enemyFrostbite[chosenEnemy]) {
                                damageEnemy(40, chosenEnemy);
                        } else {
                                damageEnemy(18, chosenEnemy);
                        }
                }
        },
        {
                manaCost: 1,
                name: "Tornado",
                cardImg: "imgs/tornado.jpg",
                cardText: "Enemies with windswept take 12 damage. Enemies without gain windswept",
                chooseEnemyCard: false,
                element: "air",
                action: function() {
                        spendMana(6);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                if (enemyWindswept[i]) {
                                        damageEnemy(12, i);
                                } else {
                                        inflictWindswept(i);
                                }
                        }
                }
        },
        {
                manaCost: 1,
                name: "Gale Force",
                cardImg: "imgs/gale.jpg",
                cardText: "Deal 10 damage to an enemy and inflict windswept",
                chooseEnemyCard: true,
                element: "air",
                action: function() {
                        spendMana(7);
                        damageEnemy(10, chosenEnemy);
                        inflictWindswept(chosenEnemy);
                },
        },
        {
                manaCost: 1,
                name: "Fountain of Youth",
                cardImg: "imgs/sanctuary.jpg",
                cardText: "Gain 2 Blood Siphon",                
                chooseEnemyCard: false,
                element: "water",
                action: function() {
                        spendMana(8);
                        gainBloodSiphon(2);
                }
        },
        {
                manaCost: 1,
                name: "Tidal Imbuement",
                cardImg: "imgs/infusion2.jpg",
                cardText: "Your next direct damage spell deals 10 more damage",                
                chooseEnemyCard: false,
                element: "water",
                action: function() {
                        spendMana(9);
                        tidalImbuement = true;
                }
        },
        {
                manaCost: 1,
                name: "Earth Barrier",
                cardImg: "imgs/earth-barrier.jpg",
                cardText: "Gain 12 block",
                chooseEnemyCard: false,
                element: "earth",
                action: function() {
                        spendMana(10);
                        gainBlock(12);
                }
        },
        {
                manaCost: 2,
                name: "Thorn Shield",
                cardImg: "imgs/thorn-shield.jpg",
                cardText: "Gain 16 block and 2 thorns",
                chooseEnemyCard: false,
                element: "earth",
                action: function() {
                        spendMana(11);
                        gainBlock(16);
                        gainThorns(2);
                }
        },
        {
                manaCost: 2,
                name: "Firefall",
                cardImg: "imgs/Rain-of-fire.jpg",
                cardText: "Inflict 8 burn on all enemies",
                chooseEnemyCard: false,
                element: "fire",
                action: function() {
                        spendMana(12);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                burnEnemy(8, i);
                        }
                        
                }
        },
        {
                manaCost: 2,
                name: "Phoenix Fire",
                cardImg: "imgs/phoenix.jpg",
                cardText: "Deal 5 damage plus 2x any burn on the enemy",
                chooseEnemyCard: true,
                element: "fire",
                action: function() {
                        spendMana(13);
                        let phoenixDamage = 5 + (parseFloat(enemyBurnNumber[chosenEnemy].innerText) * 2);
                        damageEnemy(phoenixDamage, chosenEnemy);
                }
        },
        {
                manaCost: 3,
                name: "Cascading Flames",
                cardImg: "imgs/cascading-flames.jpg",
                cardText: "Deal 25 damage, inflict 10 burn and deal 5 damage to yourself",
                chooseEnemyCard: true,
                element: "fire",
                action: function() {
                        spendMana(14);
                        damageEnemy(25, chosenEnemy);
                        burnEnemy(10, chosenEnemy);
                        if (playerBlockNumber.innerText <= 0) {
                                topBarHealthNumber.innerText -= 5;
                                playerCurrentHealth.innerText -= 5;
                        } else if (playerBlockNumber.innerText <= 5) {
                                topBarHealthNumber.innerText -= 5 - parseFloat(playerBlockNumber.innerText);
                                playerCurrentHealth.innerText -= 5 - parseFloat(playerBlockNumber.innerText);
                                playerBlockNumber.innerText = 0;
                                displayNone(playerBlockNumber, playerBlockImg);
                        } else {
                                playerBlockNumber.innerText -= 5;        
                        }
                }
        },
        {
                manaCost: 1,
                name: "Essence of Ember",
                cardImg: "imgs/essence-of-ember.jpg",
                cardText: "[POTION]<br>You apply +5 burn damage",
                chooseEnemyCard: false,
                element: "fire",
                action: function() {
                        spendMana(15);
                        essenceOfEmber = true;
                }
        },
        {
                manaCost: 0,
                name: "Static Shock",
                cardImg: "imgs/static-shock.jpg",
                cardText: "Deal 6 Damage. If you have no mana left deal 12 instead",
                chooseEnemyCard: true,
                element: "lightning",
                action: function() {
                        spendMana(16);
                        if (currentMana.innerText == 0) {
                                damageEnemy(12, chosenEnemy);
                        } else {
                                damageEnemy(6, chosenEnemy);
                        }
                }
        },
        {
                manaCost: 2,
                name: "Ball Lightning",
                cardImg: "imgs/static-electricity.jpg",
                cardText: "Deal 10 damage to a random enemy three times",
                chooseEnemyCard: false,
                element: "lightning",
                action: function() {
                        spendMana(17);
                        for (let i = 0; i < 3; i++) {
                                let randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                damageEnemy(10, randomEnemy);        
                        }  
                }
        },
        {
                manaCost: 1,
                name: "Conduit",
                cardImg: "imgs/conduit2.jpg",
                cardText: "Deal 4 damage for each mana you have remaining",
                chooseEnemyCard: true,
                element: "lightning",
                action: function() {
                        let remainingMana = currentMana.innerText;
                        damageEnemy(4 * remainingMana, chosenEnemy);
                        spendMana(18);  
                }
        },
        {
                manaCost: 1,
                name: "Liquid Lightning",
                cardImg: "imgs/liquid-lightning.jpg",
                cardText: "[POTION]<br>All damage is increased by 5",
                chooseEnemyCard: false,
                element: "lightning",
                action: function() {
                        spendMana(19);
                        liquidLightning = true;
                }
        },
       
        {
                manaCost: 2,
                name: "Ice Nova",
                cardImg: "imgs/ice-nova-12.jpg",
                cardText: "Deal 14 damage to all enemies and inflict frostbite on everyone including yourself",
                chooseEnemyCard: false,
                element: "ice",
                action: function() {
                        spendMana(20);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                damageEnemy(14, i);
                                inflictFrostbite(i);
                        }
                        displayBlock(playerFrostbiteImg);
                        playerFrostbite = true;
                }
        },
        {
                manaCost: 1,
                name: "Frostbitten",
                cardImg: "imgs/frostbitten2.jpg",
                cardText: "When you have frostbite, gain double armor. Inflict frostbite on yourself",
                chooseEnemyCard: false,
                element: "ice",
                action: function() {
                        spendMana(21);
                        playerFrostbite = true;
                        displayBlock(playerFrostbiteImg);
                        frostbitten = true;
                }
        },
        {
                manaCost: 2,
                name: "Ray of Ice",
                cardImg: "imgs/ray-of-ice.jpg",
                cardText: "Deal 10 damage plus your block amount",
                chooseEnemyCard: true,
                element: "ice",
                action: function() {
                        spendMana(22);
                        //let currentBlock = parseFloat(playerBlockNumber.innerText);
                        damageEnemy(10 + parseFloat(playerBlockNumber.innerText), chosenEnemy);
                }
        },
        {
                manaCost: 3,
                name: "Snowfall Elixir",
                cardImg: "imgs/fresh-snowfall.jpg",
                cardText: "[POTION]<br>Spells now damage every enemy",
                chooseEnemyCard: false,
                element: "ice",
                action: function() {
                        spendMana(23);
                        snowfallElixir = true;
                }
        },
        {
                manaCost: 0,
                name: "Winds of Change",
                cardImg: "imgs/winds-of-change2.jpg",
                cardText: "Deal 5 damage. All Winds of Change gain +3 damage.",
                chooseEnemyCard: true,
                element: "air",
                action: function() {
                        damageEnemy(windsOfChange, chosenEnemy);
                        windsOfChange += 3;
                        let windCardsText = document.querySelectorAll(".winds-card-text");
                        for (let i = 0; i < windCardsText.length; i++) {
                                windCardsText[i].innerText = `Deal ${windsOfChange} damage. All Winds of Change gain +3 damage.`;  
                        }
                }
        },
        {
                manaCost: 1,
                name: "Windwalk",
                cardImg: "imgs/windwalk3.jpg",
                cardText: "Draw two cards",
                chooseEnemyCard: false,
                element: "air",
                action: function() {
                        spendMana(25);
                        drawCards(2);
                }
        },
        {
                manaCost: 2,
                name: "Gust",
                cardImg: "imgs/gust.jpg",
                cardText: "Draw one Winds of Change from your draw pile and one from your discard pile",
                chooseEnemyCard: false,
                element: "air",
                action: function() {
                        spendMana(26);
                        let drawCard = false;
                        let discardCard = false;
                        let windCards = document.querySelectorAll(".winds-of-change");
                        //console.log("BEFORE\nDRAW: ", drawPileArray);
                        //console.log("BEFORE\nHAND: ", handArray);
                        //console.log("BEFORE\nDISCARD: ", discardPileArray);
                        for (let i = 0; i < windCards.length; i++) {
                                if (drawPileArray.includes(windCards[i]) && drawCard === false) {
                                        let drawIndex = drawPileArray.indexOf(windCards[i]);
                                        let getWindCard = drawPileArray.splice(drawIndex, 1);
                                        let holdWindCard = getWindCard.pop();
                                        handArray.push(holdWindCard);
                                        displayFlex(windCards[i]);
                                        drawCard = true;
                                        //console.log("DRAW\nDRAW: ", drawPileArray);
                                        //console.log("DRAW\nHAND: ", handArray);
                                        //console.log("DRAW\nDISCARD: ", discardPileArray);
                                }
                                if (discardPileArray.includes(windCards[i]) && discardCard === false) {
                                        let drawIndex = discardPileArray.indexOf(windCards[i]);
                                        let newDraw = discardPileArray.splice(drawIndex, 1);
                                        let newNewDraw = newDraw.pop();
                                        handArray.push(newNewDraw);
                                        displayFlex(windCards[i]);
                                        discardCard = true;
                                        //console.log("DISCARD\nDRAW: ", drawPileArray);
                                        //console.log("DISCARD\nHAND: ", handArray);
                                        //console.log("DISCARD\nDISCARD: ", discardPileArray);
                                }
                        }
                },
        },
        {
                manaCost: 3,
                name: "Zephyr Infusion",
                cardImg: "imgs/zephyr-infusion.jpg",
                cardText: "[POTION]<br>Draw one more card at the end of each turn",
                chooseEnemyCard: false,
                element: "air",
                action: function() {
                        spendMana(27);
                        maxHandLength = 6;
                }
        },
        {
                manaCost: 0,
                name: "Rejuvenate",
                cardImg: "imgs/liquid-regeneration.jpg",
                cardText: "Instantly gain 2 mana",
                chooseEnemyCard: false,
                element: "water",
                action: function() {
                        currentMana.innerText = parseFloat(currentMana.innerText) + 2;
                }      
        },
        {
                manaCost: 2,
                name: "Sanguine Spring",
                cardImg: "imgs/sanguine-spring4.jpg",
                cardText: "Cleanse all debuffs and gain blood siphon for three turns",
                chooseEnemyCard: false,
                element: "water",
                action: function() {
                        spendMana(29);
                        playerWindswept = false;
                        playerFrostbite = false;
                        playerBurnNumber.innerText = 0;
                        displayNone(playerWindsweptImg, playerFrostbiteImg, playerBurnImg, playerBurnImg);
                        gainBloodSiphon(3);
                }
        },
        {
                manaCost: 0,
                name: "Mistborn",
                cardImg: "imgs/mistborn.jpg",
                cardText: "Use all mana to gain 1 regeneration, blood siphon and healing per mana spent",
                chooseEnemyCard: false,
                element: "water",
                action: function() {
                        gainRegen(parseFloat(currentMana.innerText));
                        gainBloodSiphon(parseFloat(currentMana.innerText));
                        playerHeal(parseFloat(currentMana.innerText));
                        currentMana.innerText = 0;
                }
        },
        /*{
                manaCost: 2,
                name: "Downpour",
                cardImg: "imgs/downpour2.jpg",
                cardText: "Gain 5 regeneration",
                chooseEnemyCard: false,
                element: "water",
                action: function() {
                        spendMana(9);
                        gainRegen(5);
        }*/
        {
                manaCost: 2,
                name: "Spring Water",
                cardImg: "imgs/spring-water.jpg",
                cardText: "[POTION]<br>Permanently gain 5 max health",
                chooseEnemyCard: false,
                element: "water",
                action: function() {
                        spendMana(31);
                        playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 5;
                }
        },
        {
                manaCost: 2,
                name: "Earth Shatter",
                cardImg: "imgs/earth-shatter.jpg",
                cardText: "Shatter your armor, losing it all and dealing damage equal to it to all enemies",
                chooseEnemyCard: false,
                element: "earth",
                action: function() {
                        spendMana(32);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                damageEnemy(playerBlockNumber.innerText, i);    
                        }
                        playerBlockNumber.innerText = 0;
                        displayNone(playerBlockImg, playerBlockNumber);
                }
        },
        {
                manaCost: 2,
                name: "Weave of Vines",
                cardImg: "imgs/vine-armor2.jpg",
                cardText: "Gain 4 thorns",
                chooseEnemyCard: false,
                element: "earth",
                action: function() {
                        spendMana(33);
                        gainThorns(4);
                }
        },
        {
                manaCost: 2,
                name: "Thorn Whip",
                cardImg: "imgs/thorn-whip.jpg",
                cardText: "Deal 4 damage plus 2x your thorns",
                chooseEnemyCard: true,
                element: "earth",
                action: function() {
                        spendMana(34);
                        damageEnemy(4 + (playerThornsNumber.innerText * 2), chosenEnemy);
                }
        },
        {
                manaCost: 2,
                name: "Terra's Blessing",
                cardImg: "imgs/terra-infusion.jpg",
                cardText: "[POTION]<br>All block is increased by 5 and thorns increased by 1",
                chooseEnemyCard: false,
                element: "earth",
                action: function() {
                        spendMana(35);
                        terrasBlessing = true;
                }
        },
        {
                manaCost: 3,
                name: "Forest Fire",
                cardImg: "imgs/forest-fire.jpg",
                cardText: "Inflict 5 burn to all enemies. Deal damage equal to their burn",
                chooseEnemyCard: false,
                element: "fire-lightning fire lightning",
                action: function() {
                        spendMana(36);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                burnEnemy(5, i);
                                damageEnemy(enemyBurnNumber[i].innerText, i); 
                        }
                }
        },
        {
                manaCost: 1,
                name: "Frostfire Fusion",
                cardImg: "imgs/frostfire-fusion.jpg",
                cardText: "If the enemy is either burning or inflicted with frostbite they are inflicted with 6 burn and frostbite.",
                chooseEnemyCard: true,
                element: "fire-ice fire ice",
                action: function() {
                        spendMana(37);
                        if (parseFloat(enemyBurnNumber[chosenEnemy].innerText) > 0 || enemyFrostbite[chosenEnemy]) {
                                burnEnemy(6, chosenEnemy);
                                inflictFrostbite(chosenEnemy);
                        }
                }
        },
        {
                manaCost: 2,
                name: "Fan the Flames",
                cardImg: "imgs/fan-the-flames.jpg",
                cardText: "Inflict windswept on all enemies and increase burn count by 6 if they're already burning",
                chooseEnemyCard: false,
                element: "fire-air fire air",
                action: function() {
                        spendMana(38);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                if (enemyBurnNumber[i].innerText > 0) {
                                        inflictWindswept(i);
                                        burnEnemy(6, i);
                                }
                        }
                }
        },
        {
                manaCost: 1,
                name: "Cauterize",
                cardImg: "imgs/cauterize2.jpg",
                cardText: "Damage yourself 10. Gain 2 blood siphon and 4 regen",
                chooseEnemyCard: false,
                element: "fire-water fire water",
                action: function() {
                        spendMana(39);
                        if (playerBlockNumber.innerText <= 0) {
                                topBarHealthNumber.innerText -= Math.floor(10);
                                playerCurrentHealth.innerText -= Math.floor(10);
                        } else if (playerBlockNumber.innerText <= 10) {
                                topBarHealthNumber.innerText -= Math.floor(10) - parseFloat(playerBlockNumber.innerText);
                                playerCurrentHealth.innerText -= Math.floor(10) - parseFloat(playerBlockNumber.innerText);
                                playerBlockNumber.innerText = 0;
                                displayNone(playerBlockNumber, playerBlockImg);
                        } else {
                                playerBlockNumber.innerText -= Math.floor(10);        
                        }
                        gainBloodSiphon(2);
                        gainRegen(4);
                }
        },
        {
                manaCost: 3,
                name: "Magma",
                cardImg: "imgs/magma.jpg",
                cardText: "Inflict 10 burn on an enemy and gain block equal to their burn",
                chooseEnemyCard: true,
                element: "fire-earth fire earth",
                action: function() {
                        spendMana(40);
                        burnEnemy(10, chosenEnemy);
                        gainBlock(parseFloat(enemyBurnNumber[chosenEnemy].innerText));
                }
        },
        {
                manaCost: 1,
                name: "Deep Freeze",
                cardImg: "imgs/deep-freeze.jpg",
                cardText: "Electrucute enemies with frostbite dealing 20 damage",
                chooseEnemyCard: false,
                element: "lightning-ice lightning ice",
                action: function() {
                        spendMana(41);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                if (enemyFrostbite[i]) {
                                        damageEnemy(20, i);
                                }
                        }
                }
        },
        {
                manaCost: 2,
                name: "Stormblessed",
                cardImg: "imgs/stormblessed4.jpg",
                cardText: "Deal 12 damage to all enemies. If they are windswept deal 30 instead.",
                chooseEnemyCard: false,
                element: "lightning-air lightning air",
                action: function() {
                        spendMana(42);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                if (enemyWindswept[i]) {
                                        damageEnemy(30, i);
                                } else {
                                        damageEnemy(12, i);
                                }
                        }
                }
        },
        {
                manaCost: 3,
                name: "Electric Current",
                cardImg: "imgs/electric-current.jpg",
                cardText: "Deal 26 damage to an enemy and heal for 50% of the damage",
                chooseEnemyCard: true,
                element: "lightning-water lightning water",
                action: function() {
                        spendMana(43);
                        damageEnemy(26, chosenEnemy);
                        if (playerWindswept) {
                                playerHeal(6);
                        } else {
                                playerHeal(13);
                        }
                }
        },
        {
                manaCost: 2,
                name: "Quaking Thunder",
                cardImg: "imgs/quaking-thunder3.jpg",
                cardText: "Deal 10 damage to all enemies and gain 1 thorn per enemy hit",
                chooseEnemyCard: false,
                element: "lightning-earth lightning earth",
                action: function() {
                        spendMana(44);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                damageEnemy(10, i);
                                gainThorns(1);
                        }
                }
        },
        {
                manaCost: 1,
                name: "Flurry",
                cardImg: "imgs/flurry.jpg",
                cardText: "Inflict windswept and frostbite to all enemies",              
                chooseEnemyCard: false,
                element: "ice-air ice air",
                action: function() {
                        spendMana(45);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                inflictWindswept(i);
                                inflictFrostbite(i);    
                        }
                        
                }
        },
        {
                manaCost: 0,
                name: "Liquify",
                cardImg: "imgs/liquify.jpg",
                cardText: "Gain 2 regen and 1 blood siphon per enemy afflicted with frostbite",
                chooseEnemyCard: false,
                element: "ice-water ice water",
                action: function() {
                        for (let i = 0; i < numberOfEnemies; i++) {
                                if (enemyFrostbite[i]) {
                                        gainRegen(2);
                                        gainBloodSiphon(1);     
                                }      
                        }
                }
        },
        {
                manaCost: 2,
                name: "Frozen Tundra",
                cardImg: "imgs/frozen-tundra3.jpg",
                cardText: "Inflict everyone with frostbite and gain 5 armor for everyone inflicted",
                chooseEnemyCard: false,
                element: "ice-earth ice earth",
                action: function() {
                        spendMana(47);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                if (enemyFrostbite[i] === false) {
                                        gainBlock(5);
                                        inflictFrostbite(i);      
                                }      
                        }
                        if (playerFrostbite === false) {
                                gainBlock(5);
                                displayBlock(playerFrostbiteImg);
                                playerFrostbite = true;
                        }
                        
                }
        },
        {
                manaCost: 5,
                name: "Hurricane",
                cardImg: "imgs/hurricane.jpg",
                cardText: "Inflict windswept and deal 50 damage to all enemies. Heal 10 health, draw a card, and gain 2 mana.",
                chooseEnemyCard: false,
                element: "air-water air water",
                action: function() {
                        spendMana(48);
                        for (let i = 0; i < numberOfEnemies; i++) {
                                damageEnemy(50, i);    
                                inflictWindswept(i);
                        }
                        playerHeal(10);
                        drawCards(2);
                        currentMana.innerText = parseFloat(currentMana.innerText) + 2;
                }
        },
        {
                manaCost: 0,
                name: "Rock Orbit",
                cardImg: "imgs/rock-orbit.jpg",
                cardText: "Gain 5 block and draw a card",
                chooseEnemyCard: false,
                element: "air-earth air earth",
                action: function() {
                        spendMana(49);
                        gainBlock(5);
                        drawCards(1);
                }
        },
        {
                manaCost: 4,
                name: "Gaia's Embrace",
                cardImg: "imgs/gaia's-embrace.jpg",
                cardText: "Gain 4 block and healing at the end of each turn",
                chooseEnemyCard: false,
                element: "water-earth water earth",
                action: function() {
                        spendMana(50);
                        gaiasEmbrace = true;
                }
        },
    
        {
                manaCost: 0,
                name: "Avarice",
                cardImg: "imgs/avarice.jpg",
                cardText: "[DOES NOTHING] Your greed causes you to look down upon peasants",
                chooseEnemyCard: false,
                element: "gold",
        },        
];
//  CARD CREATION FUNCTION TO ADD TO HTML
function createCard(index, innerLocation, cardClass, cardText) {
        innerLocation.innerHTML +=
        `<div class="${cardClass} ${cardsInformation[index].element} ${index}">
                <p class="card-mana-number">${cardsInformation[index].manaCost}</p>
                <img class="card-mana-img" src="imgs/block-icon.png">
                <h1 class="card-name">${cardsInformation[index].name}</h1>
                <img class="card-img" src="${cardsInformation[index].cardImg}">
                <p class="${cardText}">${cardsInformation[index].cardText}</p>
        </div>`
}

// LOOP TO CREATE OPENING 12 CARDS
for (let i = 0; i < 12; i++) {
        createCard(i, openingCardsContainer, "card", "card-text");
}

// SET BLOCK CARD TO ACTIVATE WHEN CLICKED RATHER THAN WHEN ENEMY IS CLICKED
let chooseEnemyCard = false;
let openingCards = document.querySelectorAll(".card");
let openingHand = Array.from(openingCards);
let shuffledCards = openingHand.toSorted(() => 0.5 - Math.random());
let handArray = shuffledCards.slice(0, 5);
let drawPileArray = shuffledCards.slice(5);
let discardPileArray = [];
let destroyedCardsArray = [];
let maxHandLength = 5;

// REMOVE OPENING HAND CARDS FROM DRAW PILE AND ADD THEM TO HAND
function getOpeningHand() {
        for (let i = 0; i < 12; i++) {
                handContainer.appendChild(shuffledCards[i]);
                
        }
        for (let i = 0; i < maxHandLength; i++) {
                displayFlex(handArray[i]);        
        }    
}
function drawCards(numberOfCards) {
        // IF DRAW PILE CANT FILL HAND
        if (drawPileArray.length < numberOfCards) {
                // RESHUFFLE CARDS IN DISCARD PILE
                discardPileArray = discardPileArray.toSorted(() => 0.5 - Math.random());
                // STORE DISCARD PILE LENGTH THEN SHIFT CARDS FROM DISCARD PILE TO DRAW PILE
                let cardsInDiscardPile = discardPileArray.length;
                for (let i = 0; i < cardsInDiscardPile; i++) {
                        let reshuffle = discardPileArray.shift();
                        drawPileArray.push(reshuffle);
                }     
                console.log(`REDRAW\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
 
        }
        // SHIFT CARDS FROM DRAW PILE TO HAND
        for (let i = 0; i < numberOfCards; i++) {
                let drawNewCard = drawPileArray.shift();
                handArray.unshift(drawNewCard);
        }
        console.log(`DRAW TO HAND\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);

        // DISPLAY CARDS IN HAND
        for (let i = 0; i < numberOfCards; i++) {
                displayFlex(handArray[i]);
        }
        console.log(handArray);
}
// GET NEW SET OF 5 CARDS AT THE END OF EACH TURN
function addCardsToHand() {
        // MOVE HAND CONTAINERS TO DISCARD CONTAINERS
        console.log(`BEFORE\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        let cardsInHand = handArray.length;
        for (let i = 0; i < cardsInHand; i++) {
                let discarded = handArray.shift();
                console.log(discarded);
                discardPileArray.unshift(discarded);
        }
        console.log(`HAND TO DISCARD\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        for (let i = 0; i < cardsInHand; i++) {
               displayNone(discardPileArray[i]);
        }
        drawCards(maxHandLength);      
}
function reshuffleCards() {
        console.log(`RESHUFFLE CARDS\nBEFORE\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        let cardsInHand = handArray.length;
        for (let i = 0; i < cardsInHand; i++) {
                let discarded = handArray.shift();
                drawPileArray.unshift(discarded);
        }
        console.log(`RESHUFFLE CARDS\nHAND TO DRAW\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        let cardsInDiscardPile = discardPileArray.length;
        for (let i = 0; i < cardsInDiscardPile; i++) {
                let reshuffle = discardPileArray.shift();
                drawPileArray.push(reshuffle);
        }
        console.log(`RESHUFFLE CARDS\nDISCARD TO DRAW\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
         // RESHUFFLE CARDS IN DRAW PILE
        drawPileArray = drawPileArray.toSorted(() => 0.5 - Math.random());
         // SHIFT CARDS FROM DRAW PILE TO HAND
        for (let i = 0; i < maxHandLength; i++) {
                let drawNewCard = drawPileArray.shift();
                handArray.unshift(drawNewCard);
        }
        console.log(`RESHUFFLE CARDS\nDRAW TO HAND\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        for (let i = 0; i < maxHandLength; i++) {
                displayFlex(handArray[i]);
        }
        for (let i = 0; i < drawPileArray.length; i++) {
                displayNone(drawPileArray[i]);
        }    
}
const allCardsReferenceContainer = document.querySelector("#all-cards-reference-container");
//for (let i = 0; i < cardsInformation.length; i++) {
  //      createCard(i, allCardsReferenceContainer, "card-reference", "card-text");
//}
// TRIGGER SO YOU CANT CLICK CARD MULTIPLE TIMES TO APPLY CARD EFFECT MULTIPLE TIMES ON ENEMY
let cardClicked = false;
// ADD EVENTLISTENERS TO ALL CARDS, STORE CHOSEN CARD IN VARIABLE, PICK ENEMY WHO WILL RECIEVE CARD ACTION
function addCardListeners(cardType, index, CIindex) {
        function addToDiscard() {
                let handIndex = handArray.indexOf(cardType[index]);
                let getCard = handArray.splice(handIndex, 1);
                let holdCard = getCard.pop();
                discardPileArray.push(holdCard);
                displayNone(cardType[index]);
        }
        // IF CARD REQUIRES YOU TO CLICK ON AN ENEMY
        if (cardsInformation[CIindex].chooseEnemyCard) {
                cardType[index].addEventListener("click", () => {
                        chosenCard = CIindex;
                        if (cardClicked === false) {
                                cardClicked = true;
                                chooseEnemy();          
                        }
                });  
        } else {
                cardType[index].addEventListener("click", () => {
                        if (currentMana.innerText >= cardsInformation[CIindex].manaCost) {
                                cardsInformation[CIindex].action();
                                addToDiscard();
                        }
                });
        }
        // ADD EVENTLISTENERS TO ALL ENEMIES
        function chooseEnemy() {
        for (let i = 0; i < numberOfEnemies; i++) {
                // LOG WHICH ENEMY HAS BEEN CLICKED
                enemy[i].addEventListener("click", () => {
                        chosenEnemy = i;
                       
                }, { once: true } );
                // PERFORM CHOSEN CARD ACTION ON CHOSEN ENEMY
                enemy[i].addEventListener("click", clickEnemy);
                }
        }
        // SEPERATE FUNCTION WHEN ENEMY IS CLICKED SO EVENTLISTENER CAN BE REMOVED ON EACH ENEMY AFTER CLICKING
        function clickEnemy() {
                if (currentMana.innerText >= cardsInformation[chosenCard].manaCost && chosenCard === chosenCard) {
                        cardsInformation[CIindex].action();
                        addToDiscard();
                        cardClicked = false;
                        checkHealthIsOverMax();
                        for (let i = 0; i < numberOfEnemies; i++) {
                                enemy[i].removeEventListener("click", clickEnemy);        
                        }  
                }
        }
}
function addNewCardInformation(newRandomCard) {
        chooseNewCardDiv.innerHTML = ``;
        if (newRandomCard == 24) {
                createCard(newRandomCard, newCardsContainer, "card winds-of-change", "card-text winds-card-text");
        } else {
                createCard(newRandomCard, newCardsContainer, "card", "card-text");
        }
        let newCardsArray = document.querySelectorAll(".card");
        addCardListeners(newCardsArray, 0, newRandomCard);
        drawPileArray.push(newCardsArray[0]);
        handContainer.appendChild(newCardsArray[0]);
        switchArea(map, arena);
}        
const allCardsReference = document.querySelectorAll(".card-reference");
const newCardsContainer = document.querySelector("#new-cards-container");
// GET A SELECTION OF 4 CARDS WHEN ENEMIES ARE DEFEATED
function getRandomNewCards () {
        
        // GET FOUR NEW RANDOM CARDS FROM ALL REFERENCE CARDS
        let newRandomCard0 = createRandomNumber(0, cardsInformation.length - 2);
        let newRandomCard1 = createRandomNumber(0, cardsInformation.length - 2);
        let newRandomCard2 = createRandomNumber(0, cardsInformation.length - 2);
        let newRandomCard3 = createRandomNumber(0, cardsInformation.length - 2);
        // CHANGE CARDS IF THEY ARE THE SAME
        while (newRandomCard0 == newRandomCard1 || newRandomCard0 == newRandomCard2 || newRandomCard0 == newRandomCard3 || 
                newRandomCard1 == newRandomCard2 || newRandomCard1 == newRandomCard3 || newRandomCard2 == newRandomCard3) {
                newRandomCard0 = createRandomNumber(0, cardsInformation.length - 2);
                newRandomCard1 = createRandomNumber(0, cardsInformation.length - 2);
                newRandomCard2 = createRandomNumber(0, cardsInformation.length - 2);
                newRandomCard3 = createRandomNumber(0, cardsInformation.length - 2);
        }
        /*if (newRandomCard0 == newRandomCard1 || newRandomCard0 == newRandomCard2 || newRandomCard0 == newRandomCard3) {
                newRandomCard0 += 1;
        }
        if (newRandomCard1 == newRandomCard0 || newRandomCard1 == newRandomCard2 || newRandomCard1 == newRandomCard3) {
                newRandomCard1 += 1;
        }
        if (newRandomCard2 == newRandomCard0 || newRandomCard2 == newRandomCard1 || newRandomCard2 == newRandomCard3) {
                newRandomCard2 += 1;
        }
        if (newRandomCard3 == newRandomCard0 || newRandomCard3 == newRandomCard1 || newRandomCard3 == newRandomCard2) {
                newRandomCard3 += 1;
        }
        if (newRandomCard0 == newRandomCard1 || newRandomCard0 == newRandomCard2 || newRandomCard0 == newRandomCard3) {
                newRandomCard0 += 1;
        }
        if (newRandomCard1 == newRandomCard0 || newRandomCard1 == newRandomCard2 || newRandomCard1 == newRandomCard3) {
                newRandomCard1 += 1;
        }
        if (newRandomCard2 == newRandomCard0 || newRandomCard2 == newRandomCard1 || newRandomCard2 == newRandomCard3) {
                newRandomCard2 += 1;
        }
        if (newRandomCard3 == newRandomCard0 || newRandomCard3 == newRandomCard1 || newRandomCard3 == newRandomCard2) {
                newRandomCard3 += 1;
        }*/
        // ADD REFERENCE CARDS TO CHOOSE NEW CARD DIV
        createCard(newRandomCard0, chooseNewCardDiv, "card", "card-text");
        createCard(newRandomCard1, chooseNewCardDiv, "card", "card-text");
        createCard(newRandomCard2, chooseNewCardDiv, "card", "card-text");
        createCard(newRandomCard3, chooseNewCardDiv, "card", "card-text");
        let newCardChoices = document.querySelectorAll(".card");
        console.log(newCardChoices);
        displayFlex(chooseNewCardDiv, newCardChoices[0], newCardChoices[1], newCardChoices[2], newCardChoices[3]);
        newCardChoices[0].addEventListener("click", () => {addNewCardInformation(newRandomCard0)});
        newCardChoices[1].addEventListener("click", () => {addNewCardInformation(newRandomCard1)});
        newCardChoices[2].addEventListener("click", () => {addNewCardInformation(newRandomCard2)});
        newCardChoices[3].addEventListener("click", () => {addNewCardInformation(newRandomCard3)});
}

/*
PLAYER SECTION
*/
// PLAYER AND UI
const playerDiv = document.querySelector("#player-div");
const topBarHealthNumber = document.querySelector("#top-bar-health-number");
const playerCurrentHealth = document.querySelector("#player-current-health");
const playerMaxHealth = document.querySelector("#player-max-health");
const playerGold = document.querySelector("#top-bar-gold-number");
const currentMana = document.querySelector("#current-mana");
const endTurnButton = document.querySelector("#end-turn-button");
// BUFFS AND DEBUFFS
const playerBlockImg = document.querySelector("#block-img");
const playerBlockNumber = document.querySelector("#block-img-number");
const playerThornsNumber = document.querySelector("#player-thorns-number");
const playerThornsImg = document.querySelector("#player-thorns-img");
const playerRegenNumber = document.querySelector("#player-regen-number");
const playerRegenImg = document.querySelector("#player-regen-img");
const playerBloodNumber = document.querySelector("#player-blood-number");
const playerBloodImg = document.querySelector("#player-blood-img");
const playerBurnNumber = document.querySelector("#player-burn-number");
const playerBurnImg = document.querySelector("#player-burn-img");
const playerWindsweptImg = document.querySelector("#player-windswept-img");
const playerFrostbiteImg = document.querySelector("#player-frostbite-img");

let frostbitten = false;

// TRACK WHEN END TURN BUTTON HAS BEEN CLICKED
endTurnButton.addEventListener("click", endTurn);
// CARD FUNCTIONS WHEN CARD IS PLAYED
function spendMana(cardNumber) {
        currentMana.innerText -= cardsInformation[cardNumber].manaCost;
}
function damageEnemy(damage, enemy) {
        if (liquidLightning) {
                damage += 5;
        }
        if (tidalImbuement) {
                damage += 10;
                tidalImbuement = false;
        }
        // IF ATTACK DEBUFF IS ACTIVE, CUT DAMAGE IN HALF
        if (playerWindswept) {
                damage = Math.floor(damage * .50);
        }
        if (playerBloodNumber.innerText > 0) {
                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + Math.floor((damage * .21));
                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + Math.floor((damage * .21));
        }
        // DAMGE ALL ENEMIES IF SNOWFALL ELIXER HAS BEEN PLAYED
        if (snowfallElixir) {
                for (let i = 0; i < numberOfEnemies; i++) {
                        if (enemyBlockNumber[i].innerText === 0) {
                                enemyCurrentHealth[i].innerText -= damage;
                                displayNone(enemyBlockNumber[i], enemyBlockImg[i]);    
                        } else if (enemyBlockNumber[i].innerText < damage) {
                                enemyCurrentHealth[i].innerText -= damage - parseFloat(enemyBlockNumber[i].innerText);
                                enemyBlockNumber[i].innerText = 0;
                                displayNone(enemyBlockNumber[i], enemyBlockImg[i]);
                        } else {
                                enemyBlockNumber[i].innerText -= damage;
                        }
                        playerCurrentHealth.innerText -= enemyThornsNumber[i].innerText; 
                }
        } else {
                // TAKE DAMAGE AWAY FROM BLOCK BEFORE HEALTH
                if (enemyBlockNumber[enemy].innerText === 0) {
                        enemyCurrentHealth[enemy].innerText -= damage;
                        displayNone(enemyBlockNumber[enemy], enemyBlockImg[enemy]);    
                } else if (enemyBlockNumber[enemy].innerText < damage) {
                        enemyCurrentHealth[enemy].innerText -= damage - parseFloat(enemyBlockNumber[enemy].innerText);
                        enemyBlockNumber[enemy].innerText = 0;
                        displayNone(enemyBlockNumber[enemy], enemyBlockImg[enemy]);
                } else {
                        enemyBlockNumber[enemy].innerText -= damage;
                }
        }
        // CHECK FOR ENEMY THORNS DAMAGE
        if (playerBlockNumber.innerText <= 0) {
                playerCurrentHealth.innerText -= parseFloat(enemyThornsNumber[enemy].innerText)
        } else if (playerBlockNumber.innerText <= parseFloat(enemyThornsNumber[enemy].innerText)) {
                playerCurrentHealth.innerText -= parseFloat(enemyThornsNumber[enemy].innerText) - parseFloat(playerBlockNumber.innerText);
                playerBlockNumber.innerText = 0;
        } else {
                playerBlockNumber.innerText -= parseFloat(enemyThornsNumber[enemy].innerText);
        }          
        checkHealthIsOverMax();
        // IF ENEMY IS DEAD, DELETE THEM
        checkIfEnemyDead();
}
function inflictWindswept (enemy) {
        enemyWindswept[enemy] = true;
        displayBlock(enemyWindsweptImg[enemy]);  
        enemyAttackActionNumber[enemy].innerText = Math.floor(enemyAttackActionNumber[enemy].innerText * .50);    
        enemyBurnActionNumber[enemy].innerText = Math.floor(enemyBurnActionNumber[enemy].innerText * .50);    
}
function inflictFrostbite (enemy) {
        enemyFrostbite[enemy] = true;
        enemyBlockActionNumber[enemy].innerText = Math.floor(enemyBlockActionNumber[enemy].innerText * .50);  
        enemyRegenActionNumber[enemy].innerText = Math.floor(enemyRegenActionNumber[enemy].innerText * .50);  
        enemyBloodActionNumber[enemy].innerText = Math.floor(enemyBloodActionNumber[enemy].innerText * .50);  
        enemyThornsActionNumber[enemy].innerText = Math.floor(enemyThornsActionNumber[enemy].innerText * .50);  
        displayBlock(enemyFrostbiteImg[enemy]);  
}
function checkHealthIsOverMax() {
                if (parseFloat(playerCurrentHealth.innerText) > parseFloat(playerMaxHealth.innerText))  {
                        playerCurrentHealth.innerText = playerMaxHealth.innerText;
                        topBarHealthNumber.innerText = playerMaxHealth.innerText;
                }
        }
function playerHeal(amount) {
        playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + amount;
        topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + amount;
        checkHealthIsOverMax();
}
function gainBlock(blockAmount) {
        if (terrasBlessing) {
                blockAmount += 5;
        }
        if (frostbitten && playerFrostbite) {
                blockAmount = Math.floor(blockAmount * 2);
        } else if (playerFrostbite) {
                blockAmount = Math.floor(blockAmount * .50);
        }
        playerBlockNumber.innerText = parseFloat(playerBlockNumber.innerText) + blockAmount;
        displayBlock(playerBlockImg, playerBlockNumber);
}
function gainThorns(amount) {
        if (terrasBlessing) {
                amount += 1;
        }
        if (playerFrostbite) {
                amount = Math.floor(amount * .5);
        }
        playerThornsNumber.innerText = parseFloat(playerThornsNumber.innerText) + amount;
        displayBlock(playerThornsNumber, playerThornsImg);
}
function burnEnemy(burn, enemy) {
        if (essenceOfEmber) {
                burn += 5;
        }
        enemyBurnNumber[enemy].innerText = parseFloat(enemyBurnNumber[enemy].innerText) + burn;
        displayBlock(enemyBurnImg[enemy], enemyBurnNumber[enemy]);
}
function gainRegen(amount) {
        if (playerFrostbite) {
                amount = Math.floor(amount * .5);
        }
        playerRegenNumber.innerText = parseFloat(playerRegenNumber.innerText) + amount;
        displayBlock(playerRegenNumber, playerRegenImg);
}
function gainBloodSiphon(amount) {
        if (playerFrostbite) {
                amount = Math.floor(amount * .5);
        }
        playerBloodNumber.innerText = parseFloat(playerBloodNumber.innerText) + amount;
        displayBlock(playerBloodImg, playerBloodNumber);
}
function checkPlayerBurn() {
        if (playerBurnNumber.innerText >= 1) {
                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) - parseFloat(playerBurnNumber.innerText);
                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) - parseFloat(playerBurnNumber.innerText);
                playerBurnNumber.innerText--;
        }
        if (playerBurnNumber.innerText == 0) {
                displayNone(playerBurnImg, playerBurnNumber);
        }
}
function checkRegenHeal() {
        if (playerRegenNumber.innerText >= 1) {
                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + parseFloat(playerRegenNumber.innerText);
                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + parseFloat(playerRegenNumber.innerText);
                playerRegenNumber.innerText--;
        }
        if (playerRegenNumber.innerText == 0) {
                displayNone(playerRegenImg, playerRegenNumber);
        }
        checkHealthIsOverMax();
}

function checkBloodSiphon() {
        if (playerBloodNumber.innerText >= 1) {
                playerBloodNumber.innerText--;    
        }
        if (playerBloodNumber.innerText == 0) {
                displayNone(playerBloodImg, playerBloodNumber);
        }
}
function checkGaiasEmbrace() {
        if (gaiasEmbrace) {
                playerHeal(4);
                gainBlock(4);
        }
}

/*
ENEMY SECTION
*/
let enemyLevel = 0;
const enemiesInformation = [
        {
                name: "Dark Elf",
                baseHealth: 50,
                img: "imgs/enemy-dark-elf.png",
                attackChance: 3,
                blockChance: 4,
                healChance: 6,
                regenChance: 8,
                bloodChance: 10,
                attackDamageLow: 8,
                attackDamageHigh: 12,
                blockAmountLow: 8,
                blockAmountHigh: 12,
                healAmountLow: 8,
                healAmountHigh: 12,
                regenAmountLow: 4,
                regenAmountHigh: 5,
                bloodAmountLow: 3,
                bloodAmountHigh: 4,
        },
        {
                name: "Dwarf",
                baseHealth: 80,
                img: "imgs/enemy-dwarf.png",
                attackChance: 3,
                blockChance: 6,
                regenChance: 8,
                thornsChance: 10,
                attackDamageLow: 6,
                attackDamageHigh: 8,
                blockAmountLow: 16,
                blockAmountHigh: 20,
                regenAmountLow: 5,
                regenAmountHigh: 6,
                thornsAmountLow: 2,
                thornsAmountHigh: 3,
        },
        {
                name: "Centaur",
                baseHealth: 35,
                img: "imgs/enemy-centaur.png",
                attackChance: 10,
                attackDamageLow: 18,
                attackDamageHigh: 20,
        },
        {
                name: "Leprechaun",
                baseHealth: 40,
                img: "imgs/enemy-leprechaun.png",
                attackChance: 5,
                healChance: 10,
                //stealChance: ,
                attackDamageLow: 8,
                attackDamageHigh: 12,
                healAmountLow: 8,
                healAmountHigh: 12,
        },
        {
                name: "Fire Fae",
                baseHealth: 40,
                img: "imgs/enemy-fire-fae.png",
                attackChance: 2,
                healChance: 4,
                burnChance: 10,
                attackDamageLow: 10,
                attackDamageHigh: 12,
                healAmountLow: 10,
                healAmountHigh: 12,
                burnAmountLow: 5,
                burnAmountHigh: 6,
        },
        {
                name: "Lightning Fae",
                baseHealth: 40,
                img: "imgs/enemy-lightning-fae.png",
                attackChance: 8,
                healChance: 10,
                attackDamageLow: 15,
                attackDamageHigh: 25,
                healAmountLow: 12,
                healAmountHigh: 14,
        },
        {
                name: "Ice Fae",
                baseHealth: 60,
                img: "imgs/enemy-ice-fae.png",
                attackChance: 2,
                blockChance: 4,
                lowerBlockChance: 10,
                attackDamageLow: 8,
                attackDamageHigh: 10,
                blockAmountLow: 14,
                blockAmountHigh: 16,
        },
        {
                name: "Air Fae",
                baseHealth: 60,
                img: "imgs/enemy-air-fae.png",
                attackChance: 2,
                healChance: 4,
                lowerAttackChance: 10,
                attackDamageLow: 8,
                attackDamageHigh: 10,
                healAmountLow: 14,
                healAmountHigh: 16,
        },
        {
                name: "Water Fae",
                baseHealth: 65,
                img: "imgs/enemy-water-fae.png",
                attackChance: 2,
                regenChance: 6,
                bloodChance: 10,
                attackDamageLow: 10,
                attackDamageHigh: 14,
                regenAmountLow: 3,
                regenAmountHigh: 5,
                bloodAmountLow: 3,
                bloodAmountHigh: 4,
        },
        {
                name: "Forest Fae",
                baseHealth: 70,
                img: "imgs/enemy-earth-fae.png",
                attackChance: 2,
                blockChance: 6,
                thornsChance: 10,
                attackDamageLow: 8,
                attackDamageHigh: 10,
                blockAmountLow: 16,
                blockAmountHigh: 18,
                thornsAmountLow: 2,
                thornsAmountHigh: 3,
        },
        {
                name: "Forest Dragon",
                baseHealth: 150,
                img: "imgs/enemy-elite-dragon.png",
                attackChance: 4,
                burnChance: 10,
                attackDamageLow: 25,
                attackDamageHigh: 28,
                burnAmountLow: 8,
                burnAmountHigh: 10,
        },
        {
                name: "Forest Giant",
                baseHealth: 300,
                img: "imgs/enemy-elite-giant.png",
                attackChance: 2,
                blockChance: 7,
                thornsChance: 10,
                attackDamageLow: 20,
                attackDamageHigh: 23,
                blockAmountLow: 40,
                blockAmountHigh: 45,
                thornsAmountLow: 5,
                thornsAmountHigh: 7,
        },
        {
                name: "Unicorn",
                baseHealth: 250,
                img: "imgs/enemy-elite-unicorn.png",
                attackChance: 2,
                regenChance: 6,
                thornsChance: 10,
                attackDamageLow: 20,
                attackDamageHigh: 24,
                regenAmountLow: 6,
                regenAmountHigh: 8,
                thornsAmountLow: 4,
                thornsAmountHigh: 6,
        },
        {
                name: "Satyr",
                baseHealth: 200,
                img: "imgs/enemy-elite-satyr.png",
                attackChance: 1,
                //damageincreasechance
                bloodChance: 10,
                attackDamageLow: 30,
                attackDamageHigh: 32,
                bloodAmountLow: 3,
                bloodAmountHigh: 4,
        },
]
const enemyContainer = document.querySelector("#enemy-container");
function createEnemy(baseHealth, img) {
        enemyContainer.innerHTML+=
        `<div class="enemy-div">
                <div class="enemy-action-div">
                    <div class="enemy-attack-action-div">
                        <p class="enemy-attack-action-number"></p>
                        <img class="enemy-attack-action-img enemy-action-img" src="imgs/attack-icon.png">                  
                    </div>
                    <div class="enemy-block-action-div">
                        <p class="enemy-block-action-number"></p>
                        <img class="enemy-block-action-img enemy-action-img" src="imgs/block-icon.png">
                    </div>
                    <div class="enemy-heal-action-div">
                        <p class="enemy-heal-action-number"></p>
                        <img class="enemy-heal-action-img enemy-action-img" src="imgs/heal-icon.png">
                    </div>
                    <div class="enemy-burn-action-div">
                        <p class="enemy-burn-action-number"></p>
                        <img class="enemy-burn-action-img enemy-action-img" src="imgs/burn-icon.png">
                    </div>
                    <div class="enemy-regen-action-div">
                        <p class="enemy-regen-action-number"></p>
                        <img class="enemy-regen-action-img enemy-action-img" src="imgs/regen-icon.png">
                    </div>
                    <div class="enemy-blood-action-div">
                        <p class="enemy-blood-action-number"></p>
                        <img class="enemy-blood-action-img enemy-action-img" src="imgs/blood-icon.png">
                    </div>
                    <div class="enemy-thorns-action-div">
                        <p class="enemy-thorns-action-number"></p>
                        <img class="enemy-thorns-action-img enemy-action-img" src="imgs/thorns-icon.png">
                    </div>
                    <img class="enemy-windswept-action-img enemy-action-img" src="imgs/windswept-icon.png">
                    <img class="enemy-frostbite-action-img enemy-action-img" src="imgs/frostbite-icon.png">
                </div>
                <img class="enemy-img" src="${img}">
                <div class="enemy-block-div">
                   <p class="enemy-block-number">0</p>
                   <img class="enemy-block-img" src="imgs/block-icon.png">
                </div>                
                <div class="enemy-health-div">
                    <p class="enemy-health"><span class="enemy-current-health">${baseHealth}</span>/<span class="enemy-max-health">${baseHealth}</span></p>
                </div>
                <div class="enemy-buffs">
                    <div>
                        <p class="enemy-thorns-number">0</p>
                        <img class="enemy-thorns-img" src="imgs/thorns-icon.png">
                    </div>
                    <div>
                        <p class="enemy-regen-number">0</p>
                        <img class="enemy-regen-img" src="imgs/regen-icon.png">
                    </div> 
                    <div>
                        <p class="enemy-blood-number">0</p>
                        <img class="enemy-blood-img" src="imgs/blood-icon.png">
                    </div>
                </div>
                <div class="enemy-debuffs">
                    <div class="enemy-burn-div">
                        <img class="enemy-burn-img" src="imgs/burn-icon.png">
                        <p class="enemy-burn-number">0</p>
                    </div>
                    <img class="enemy-windswept-img" src="imgs/windswept-icon.png">
                    <img class="enemy-frostbite-img" src="imgs/frostbite-icon.png"> 
                </div>  
            </div>`
}
function enemyLevelUp() {
        let enemyCurrentHealth = document.querySelectorAll(".enemy-current-health");
        let enemyMaxHealth = document.querySelectorAll(".enemy-max-health");
        for (let i = 0; i < numberOfEnemies; i++) {
                enemyCurrentHealth[i].innerText = parseFloat(enemyCurrentHealth[i].innerText) + (Math.ceil(parseFloat(enemyCurrentHealth[i].innerText) * enemyLevel * .05));
                enemyMaxHealth[i].innerText = parseFloat(enemyMaxHealth[i].innerText) + (Math.ceil(parseFloat(enemyMaxHealth[i].innerText) * enemyLevel * .05));
        }
}
function initializeEnemyVariables() {
        enemy = document.querySelectorAll(".enemy-div");
        enemyHealth = document.querySelectorAll(".enemy-health");
        enemyCurrentHealth = document.querySelectorAll(".enemy-current-health");
        enemyMaxHealth = document.querySelectorAll(".enemy-max-health");
        // ACTIONS
        enemyActionDiv = document.querySelectorAll(".enemy-action-div");
        enemyAttackActionDiv = document.querySelectorAll(".enemy-attack-action-div");
        enemyAttackActionImg = document.querySelectorAll(".enemy-attack-action-img");
        enemyAttackActionNumber = document.querySelectorAll(".enemy-attack-action-number");
        enemyBlockActionDiv = document.querySelectorAll(".enemy-block-action-div");
        enemyBlockActionImg = document.querySelectorAll(".enemy-block-action-img");
        enemyBlockActionNumber = document.querySelectorAll(".enemy-block-action-number");
        enemyHealActionDiv = document.querySelectorAll(".enemy-heal-action-div");
        enemyHealActionImg = document.querySelectorAll(".enemy-heal-action-img");
        enemyHealActionNumber = document.querySelectorAll(".enemy-heal-action-number");
        enemyThornsActionDiv = document.querySelectorAll(".enemy-thorns-action-div");
        enemyThornsActionImg = document.querySelectorAll(".enemy-thorns-action-img");
        enemyThornsActionNumber = document.querySelectorAll(".enemy-thorns-action-number");
        enemyRegenActionDiv = document.querySelectorAll(".enemy-regen-action-div");
        enemyRegenActionImg = document.querySelectorAll(".enemy-regen-action-img");
        enemyRegenActionNumber = document.querySelectorAll(".enemy-regen-action-number");
        enemyBloodActionDiv = document.querySelectorAll(".enemy-blood-action-div");
        enemyBloodActionImg = document.querySelectorAll(".enemy-blood-action-img");
        enemyBloodActionNumber = document.querySelectorAll(".enemy-blood-action-number");
        enemyBurnActionDiv = document.querySelectorAll(".enemy-burn-action-div");
        enemyBurnActionImg = document.querySelectorAll(".enemy-burn-action-img");
        enemyBurnActionNumber = document.querySelectorAll(".enemy-burn-action-number");
        enemyWindsweptActionImg = document.querySelectorAll(".enemy-windswept-action-img");
        enemyFrostbiteActionImg = document.querySelectorAll(".enemy-frostbite-action-img");
        // BUFFS
        enemyBlockDiv = document.querySelectorAll(".enemy-block-div");
        enemyBlockImg = document.querySelectorAll(".enemy-block-img");
        enemyBlockNumber = document.querySelectorAll(".enemy-block-number");
        enemyRegenImg = document.querySelectorAll(".enemy-regen-img");
        enemyRegenNumber = document.querySelectorAll(".enemy-regen-number");
        enemyBloodImg = document.querySelectorAll(".enemy-blood-img");
        enemyBloodNumber = document.querySelectorAll(".enemy-blood-number");
        enemyThornsImg = document.querySelectorAll(".enemy-thorns-img");
        enemyThornsNumber = document.querySelectorAll(".enemy-thorns-number");
        // DEBUFFS
        enemyWindsweptImg = document.querySelectorAll(".enemy-windswept-img");
        enemyFrostbiteImg = document.querySelectorAll(".enemy-frostbite-img");
        enemyBurnImg = document.querySelectorAll(".enemy-burn-img");
        enemyBurnNumber = document.querySelectorAll(".enemy-burn-number");        
}
// ENEMY AND HEALTH
let enemy = document.querySelectorAll(".enemy-div");
let enemyHealth = document.querySelectorAll(".enemy-health");
let enemyCurrentHealth = document.querySelectorAll(".enemy-current-health");
let enemyMaxHealth = document.querySelectorAll(".enemy-max-health");
// ACTIONS
let enemyActionDiv = document.querySelectorAll(".enemy-action-div");
let enemyAttackActionDiv = document.querySelectorAll(".enemy-attack-action-div");
let enemyAttackActionImg = document.querySelectorAll(".enemy-attack-action-img");
let enemyAttackActionNumber = document.querySelectorAll(".enemy-attack-action-number");
let enemyBlockActionDiv = document.querySelectorAll(".enemy-block-action-div");
let enemyBlockActionImg = document.querySelectorAll(".enemy-block-action-img");
let enemyBlockActionNumber = document.querySelectorAll(".enemy-block-action-number");
let enemyHealActionDiv = document.querySelectorAll(".enemy-heal-action-div");
let enemyHealActionImg = document.querySelectorAll(".enemy-heal-action-img");
let enemyHealActionNumber = document.querySelectorAll(".enemy-heal-action-number");
let enemyThornsActionDiv = document.querySelectorAll(".enemy-thorns-action-div");
let enemyThornsActionImg = document.querySelectorAll(".enemy-thorns-action-img");
let enemyThornsActionNumber = document.querySelectorAll(".enemy-thorns-action-number");
let enemyRegenActionDiv = document.querySelectorAll(".enemy-regen-action-div");
let enemyRegenActionImg = document.querySelectorAll(".enemy-regen-action-img");
let enemyRegenActionNumber = document.querySelectorAll(".enemy-regen-action-number");
let enemyBloodActionDiv = document.querySelectorAll(".enemy-blood-action-div");
let enemyBloodActionImg = document.querySelectorAll(".enemy-blood-action-img");
let enemyBloodActionNumber = document.querySelectorAll(".enemy-blood-action-number");
let enemyBurnActionDiv = document.querySelectorAll(".enemy-burn-action-div");
let enemyBurnActionImg = document.querySelectorAll(".enemy-burn-action-img");
let enemyBurnActionNumber = document.querySelectorAll(".enemy-burn-action-number");
let enemyWindsweptActionImg = document.querySelectorAll(".enemy-windswept-action-img");
let enemyFrostbiteActionImg = document.querySelectorAll(".enemy-frostbite-action-img");
// BUFFS
let enemyBlockDiv = document.querySelectorAll(".enemy-block-div");
let enemyBlockImg = document.querySelectorAll(".enemy-block-img");
let enemyBlockNumber = document.querySelectorAll(".enemy-block-number");
let enemyRegenImg = document.querySelectorAll(".enemy-regen-img");
let enemyRegenNumber = document.querySelectorAll(".enemy-regen-number");
let enemyBloodImg = document.querySelectorAll(".enemy-blood-img");
let enemyBloodNumber = document.querySelectorAll(".enemy-blood-number");
let enemyThornsImg = document.querySelectorAll(".enemy-thorns-img");
let enemyThornsNumber = document.querySelectorAll(".enemy-thorns-number");
// DEBUFFS
let enemyWindsweptImg = document.querySelectorAll(".enemy-windswept-img");
let enemyFrostbiteImg = document.querySelectorAll(".enemy-frostbite-img");
let enemyBurnImg = document.querySelectorAll(".enemy-burn-img");
let enemyBurnNumber = document.querySelectorAll(".enemy-burn-number");        

// FUNCTION ENEMIES TO ATTACK PLAYER
function damagePlayer(damage, index) {
        if (enemyWindswept[index]) {
                damage = Math.floor(damage *= .50);
        }
        if (enemyBloodNumber[index].innerText > 0) {
                enemyCurrentHealth[index].innerText = parseFloat(enemyCurrentHealth[index].innerText) + Math.floor((damage * .21));
        }
        if (playerBlockNumber.innerText <= 0) {
                topBarHealthNumber.innerText -= damage;
                playerCurrentHealth.innerText -= damage;
        } else if (playerBlockNumber.innerText <= damage) {
                topBarHealthNumber.innerText -= damage - parseFloat(playerBlockNumber.innerText);
                playerCurrentHealth.innerText -= damage - parseFloat(playerBlockNumber.innerText);
                playerBlockNumber.innerText = 0;
                displayNone(playerBlockNumber, playerBlockImg);
        } else {
                playerBlockNumber.innerText -= damage; 
        }
        // CHECK FOR PLAYER THORNS DAMAGE
        if (enemyBlockNumber[index].innerText <= 0) {
                enemyCurrentHealth[index].innerText -= parseFloat(playerThornsNumber.innerText)
        } else if (enemyBlockNumber[index].innerText <= parseFloat(playerThornsNumber.innerText)) {
                enemyCurrentHealth[index].innerText -= parseFloat(playerThornsNumber.innerText) - parseFloat(enemyBlockNumber[index].innerText);
                enemyBlockNumber[index].innerText = 0;
        } else {
                enemyBlockNumber[index].innerText -= parseFloat(playerThornsNumber.innerText);
        }
        displayNone(enemyAttackActionDiv[index]);
}
function enemyGainBlock(blockAmount, index) {
        // REDUCE BLOCK BY HALF WHEN ENEMY IS DEBUFFED
        if (enemyFrostbite[index]) {
                blockAmount = Math.floor(blockAmount * .5);
        }
        enemyBlockNumber[index].innerText = parseFloat(enemyBlockNumber[index].innerText) + blockAmount;
        enemyBlockActionNumber[index].innerText += blockAmount;
        displayBlock(enemyBlockNumber[index], enemyBlockImg[index], enemyBlockDiv[index]);
        displayNone(enemyBlockActionDiv[index]);
        enemyFrostbite[index] = false;
}
function enemyHeal(healAmount, index) {
        enemyCurrentHealth[index].innerText = parseFloat(enemyCurrentHealth[index].innerText) + healAmount;
        displayNone(enemyHealActionDiv[[index]]);
}
function enemyBurnPlayer(amount, index) {
        console.log(enemyWindswept[index]);
        if (enemyWindswept[index]) {
                amount = Math.floor(amount * .5);
        }
        playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + amount;
        displayBlock(playerBurnImg, playerBurnNumber);
        displayNone(enemyBurnActionDiv[index]);
}
function enemyGainRegeneration(amount, index) {
        if (enemyFrostbite[index]) {
                amount = Math.floor(amount * .5);
        }
        enemyRegenNumber[index].innerText = parseFloat(enemyRegenNumber[index].innerText) + amount;
        displayBlock(enemyRegenImg[index], enemyRegenNumber[index]);
        displayNone(enemyRegenActionDiv[index]);
}
function enemyGainBloodSiphon(amount, index) {
        if (enemyFrostbite[index]) {
                amount = Math.floor(amount * .5);
        }
        enemyBloodNumber[index].innerText = parseFloat(enemyBloodNumber[index].innerText) + amount;
        displayBlock(enemyBloodImg[index], enemyBloodNumber[index]);
        displayNone(enemyBloodActionDiv[index]);
}
function enemyGainThorns(amount, index) {
        console.log(enemyFrostbite[index]);
        if (enemyFrostbite[index]) {
                amount = Math.floor(amount * .5);
        }
        enemyThornsNumber[index].innerText = parseFloat(enemyThornsNumber[index].innerText) + amount;
        displayBlock(enemyThornsNumber[index], enemyThornsImg[index]);
        displayNone(enemyThornsActionDiv[index]);
}
function checkEnemyBurn(index) {
        if (playerBloodNumber.innerText > 0) {
                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + Math.ceil(enemyBurnNumber[index].innerText * .21);
        }
        if (parseFloat(enemyBurnNumber[index].innerText) >= enemyCurrentHealth[index].innerText) {
                console.log(enemyBurnNumber[index].innerText, enemyCurrentHealth[index].innerText)
                displayNone(enemyBurnImg[index], enemyBurnNumber[index], enemyHealth[index], enemyCurrentHealth[index], enemyBlockDiv[index], enemyActionDiv[index]);
                enemy[index].classList.add("fade-out");
                enemyIsDead[index] = true;
        }
        if (enemyBurnNumber[index].innerText > 0) {
                enemyCurrentHealth[index].innerText = parseFloat(enemyCurrentHealth[index].innerText) - parseFloat(enemyBurnNumber[index].innerText);
                enemyBurnNumber[index].innerText--;
        }
        if (enemyBurnNumber[index].innerText == 0) {
                displayNone(enemyBurnImg[index], enemyBurnNumber[index]);
        }
}
function checkEnemyRegenHeal(index) {
        if (enemyRegenNumber[index].innerText >= 1) {
                enemyCurrentHealth[index].innerText = parseFloat(enemyCurrentHealth[index].innerText) + parseFloat(enemyRegenNumber[index].innerText);
                enemyRegenNumber[index].innerText--;
                
        }
        if (enemyRegenNumber[index].innerText == 0) {
                displayNone(enemyRegenImg[index], enemyRegenNumber[index]);
        }
        if (parseFloat(enemyCurrentHealth[index].innerText) > parseFloat(enemyMaxHealth[index].innerText)) {

                enemyCurrentHealth[index].innerText = enemyMaxHealth[index].innerText;
        }
}
function checkEnemyBloodSiphon(index) {
        if (enemyBloodNumber[index].innerText >= 1) {
                enemyBloodNumber[index].innerText--;    
        }
        if (enemyBloodNumber[index].innerText == 0) {
                displayNone(enemyBloodImg[index], enemyBloodNumber[index]);
        }
}
let enemiesAlive = numberOfEnemies - enemyIsDead.filter(Boolean).length;
function checkIfEnemyDead() {
        // IF ALL ENEMIES ARE DEAD, SWITCH BACK TO MAP AND GET GOLD
        function allEnemiesDead() {
                getRandomNewCards();
                playerGold.innerText = parseFloat(playerGold.innerText) + Math.ceil(20 + ((enemyLevel + 1) * 2.7));
                displayNone(handContainer);        
        }
       
        // IF ENEMY  IS DEAD, DELETE THEM
        for (let i = 0; i < numberOfEnemies; i++) {
                if (enemyCurrentHealth[i].innerText <= 0) {
                        displayNone(enemyBurnImg[i], enemyBurnNumber[i], enemyHealth[i], enemyCurrentHealth[i], enemyBlockDiv[i], enemyActionDiv[i]);
                        enemy[i].classList.add("fade-out");
                        enemyIsDead[i] = true;
                }
        }
        enemiesAlive = numberOfEnemies - enemyIsDead.filter(Boolean).length;
        if (enemiesAlive == 0) {
                allEnemiesDead();
        }

}
// TRACK WHICH CARD AND ENEMY HAS BEEN CLICKED ON
let chosenEnemy;
let chosenCard;
// RANDOM NUMBERS GENERATED FOR ENEMY ACTIONS, DAMAGE, BLOCK, AND HEAL
let actionChoice = [];
let enemyRandomDamage = [];
let enemyRandomBlock = [];
let enemyRandomHeal = [];
let enemyRandomBurn = [];
let enemyRandomRegen = [];
let enemyRandomBlood = [];
let enemyRandomThorns = [];
let trackEnemies = [];
// TRIGGER SO ENEMY ONLY GAINS BLOOD SIPHON WHEN BELOW MAX HEALTH AT START OF THEIR TURN
let enemyCanGainBlood = false;
// TRACK IF ENEMIES HAVE DEBUFF
let enemyWindswept = [false, false, false];
let enemyFrostbite = [false, false, false];
// SET ATTACK AND BLOCK DEBUFFS TO FALSE
let playerWindswept = false;
let playerFrostbite = false;
let eI = 0;
// ENEMIES CHOOSE AN ACTION BASED ON RANDOM ACTION CHOICE
function enemyAction() {
        eI = 0;
        trackEnemies = [...arguments];
        trackEnemies.forEach((i) => {
                // RESET ALL ACTIONS
                actionChoice[eI] = createRandomNumber(1, 10);
                if (actionChoice[eI] <= enemiesInformation[i].attackChance) {          
                        // ATTACK
                        enemyRandomDamage[eI] = createRandomNumber(enemiesInformation[i].attackDamageLow, enemiesInformation[i].attackDamageHigh);
                        enemyAttackActionNumber[eI].innerText = enemyRandomDamage[eI];
                        displayBlock(enemyAttackActionDiv[eI], enemyAttackActionImg[eI], enemyAttackActionNumber[eI]);
                } else if (actionChoice[eI] <= enemiesInformation[i].blockChance) {
                        // BLOCK
                        enemyRandomBlock[eI] = createRandomNumber(enemiesInformation[i].blockAmountLow, enemiesInformation[i].blockAmountHigh);  
                        enemyBlockActionNumber[eI].innerText = enemyRandomBlock[eI];
                        displayBlock(enemyBlockActionDiv[eI], enemyBlockActionImg[eI], enemyBlockActionNumber[eI]);
                } else if (actionChoice[eI] <= enemiesInformation[i].healChance) {  
                        if (enemyCurrentHealth[eI].innerText < enemyMaxHealth[eI].innerText - enemiesInformation[i].healAmountHigh) {
                                // HEAL
                                enemyRandomHeal[eI] = createRandomNumber(enemiesInformation[i].healAmountLow, enemiesInformation[i].healAmountHigh);
                                enemyHealActionNumber[eI].innerText = enemyRandomHeal[eI];
                                displayBlock(enemyHealActionDiv[eI], enemyHealActionImg[eI], enemyHealActionNumber[eI]);
                        } else {
                                // ATTACK
                                enemyRandomDamage[eI] = createRandomNumber(enemiesInformation[i].attackDamageLow, enemiesInformation[i].attackDamageHigh);
                                enemyAttackActionNumber[eI].innerText = enemyRandomDamage[eI];
                                displayBlock(enemyAttackActionDiv[eI], enemyAttackActionImg[eI], enemyAttackActionNumber[eI]);
                        }
                } else if (actionChoice[eI] <= enemiesInformation[i].burnChance) {
                        // BURN
                        enemyRandomBurn[eI] = createRandomNumber(enemiesInformation[i].burnAmountLow, enemiesInformation[i].burnAmountHigh);
                        enemyBurnActionNumber[eI].innerText = enemyRandomBurn[eI];
                        displayBlock(enemyBurnActionImg[eI], enemyBurnActionNumber[eI], enemyBurnActionDiv[eI]);
                } else if (actionChoice[eI] <= enemiesInformation[i].regenChance) {
                        if (enemyCurrentHealth[eI].innerText < enemyMaxHealth[eI].innerText - enemiesInformation[i].regenAmountHigh) {
                                // REGEN
                                enemyRandomRegen[eI] = createRandomNumber(enemiesInformation[i].regenAmountLow, enemiesInformation[i].regenAmountHigh);
                                enemyRegenActionNumber[eI].innerText = enemyRandomRegen[eI];
                                displayBlock(enemyRegenActionImg[eI], enemyRegenActionNumber[eI], enemyRegenActionDiv[eI]);
                        } else {
                                // ATTACK
                                enemyRandomDamage[eI] = createRandomNumber(enemiesInformation[i].attackDamageLow, enemiesInformation[i].attackDamageHigh);
                                enemyAttackActionNumber[eI].innerText = enemyRandomDamage[eI];
                                displayBlock(enemyAttackActionDiv[eI], enemyAttackActionImg[eI], enemyAttackActionNumber[eI]);
                        }
                } else if (actionChoice[eI] <= enemiesInformation[i].bloodChance) {
                        if (parseFloat(enemyCurrentHealth[eI].innerText) < parseFloat(enemyMaxHealth[eI].innerText) && parseFloat(enemyBloodNumber[eI].innerText) <= 1) {
                                // BLOOD
                                enemyRandomBlood[eI] = createRandomNumber(enemiesInformation[i].bloodAmountLow, enemiesInformation[i].bloodAmountHigh);
                                enemyBloodActionNumber[eI].innerText = enemyRandomBlood[eI];
                                displayBlock(enemyBloodActionImg[eI], enemyBloodActionNumber[eI], enemyBloodActionDiv[eI]);
                                enemyCanGainBlood = true;
                        } else {
                                // ATTACK
                                enemyRandomDamage[eI] = createRandomNumber(enemiesInformation[i].attackDamageLow, enemiesInformation[i].attackDamageHigh);
                                enemyAttackActionNumber[eI].innerText = enemyRandomDamage[eI];
                                displayBlock(enemyAttackActionDiv[eI], enemyAttackActionImg[eI], enemyAttackActionNumber[eI]);
                        }
                } else if (actionChoice[eI] <= enemiesInformation[i].thornsChance) {
                        // THORNS
                        enemyRandomThorns[eI] = createRandomNumber(enemiesInformation[i].thornsAmountLow, enemiesInformation[i].thornsAmountHigh);   
                        enemyThornsActionNumber[eI].innerText = enemyRandomThorns[eI];
                        displayBlock(enemyThornsActionImg[eI], enemyThornsActionNumber[eI], enemyThornsActionDiv[eI]);
                } else if (actionChoice[eI] <= enemiesInformation[i].lowerAttackChance) {  
                        if (enemiesAlive > 1) {
                                // LOWER ATTACK
                                displayBlock(enemyWindsweptActionImg[eI]);        
                        } else {
                                // ATTACK
                                enemyRandomDamage[eI] = createRandomNumber(enemiesInformation[i].attackDamageLow, enemiesInformation[i].attackDamageHigh);
                                enemyAttackActionNumber[eI].innerText = enemyRandomDamage[eI];
                                displayBlock(enemyAttackActionDiv[eI], enemyAttackActionImg[eI], enemyAttackActionNumber[eI]);
                        }
                } else if (actionChoice[eI] <= enemiesInformation[i].lowerBlockChance) {                        
                        if (enemiesAlive > 1) {
                                // LOWER BLOCK
                                displayBlock(enemyFrostbiteActionImg[eI]);        
                        } else {
                                // ATTACK
                                enemyRandomDamage[eI] = createRandomNumber(enemiesInformation[i].attackDamageLow, enemiesInformation[i].attackDamageHigh);
                                enemyAttackActionNumber[eI].innerText = enemyRandomDamage[eI];
                                displayBlock(enemyAttackActionDiv[eI], enemyAttackActionImg[eI], enemyAttackActionNumber[eI]);
                        }
                }
                eI++
        });
}
// FUNCTIONS TRIGGERS WHEN END TURN BUTTON IS CLICKED
function endTurn() {
        eI = 0;
        // RESET MANA AND DEBUFFS
        currentMana.innerText = 4;
        playerWindswept = false;
        playerFrostbite = false;
        checkPlayerBurn();
        displayNone(playerWindsweptImg, playerFrostbiteImg);
        trackEnemies.forEach((i) => {
                checkEnemyBurn([eI]);
                // CHECK IF ENEMY IS DEAD
                if (enemyIsDead[eI] === false) {
                        checkEnemyRegenHeal([eI]);
                        checkEnemyBloodSiphon([eI]);
                        if (actionChoice[eI] <= enemiesInformation[i].attackChance) {
                                // ATTACK
                                damagePlayer(enemyRandomDamage[eI], eI);
                        } else if (actionChoice[eI] <= enemiesInformation[i].blockChance) {
                                // BLOCK
                                enemyGainBlock(enemyRandomBlock[eI], eI);
                        } else if (actionChoice[eI] <= enemiesInformation[i].healChance) {
                                if (enemyCurrentHealth[eI].innerText < enemyMaxHealth[eI].innerText - enemyRandomHeal[eI]) {
                                        // HEAL
                                        enemyHeal(enemyRandomHeal[eI], eI);
                                } else {
                                        // ATTACK
                                        damagePlayer(enemyRandomDamage[eI], eI);
                                }
                        } else if (actionChoice[eI] <= enemiesInformation[i].burnChance) {
                                // BURN
                                enemyBurnPlayer(enemyRandomBurn[eI], eI);
                        } else if (actionChoice[eI] <= enemiesInformation[i].regenChance) {
                                if (enemyCurrentHealth[eI].innerText < enemyMaxHealth[eI].innerText - enemyRandomRegen[eI]) {
                                        // REGEN
                                        enemyGainRegeneration(enemyRandomRegen[eI], eI);
                                } else {
                                        // ATTACK
                                        damagePlayer(enemyRandomDamage[eI], eI);
                                }
                        } else if (actionChoice[eI] <= enemiesInformation[i].bloodChance) {
                                if (enemyCanGainBlood === true && parseFloat(enemyCurrentHealth[eI].innerText) < parseFloat(enemyMaxHealth[eI].innerText) && parseFloat(enemyBloodNumber[eI].innerText) <= 1) {
                                        // BLOOD
                                        enemyGainBloodSiphon(enemyRandomBlood[eI], eI);
                                        enemyCanGainBlood = false;
                                } else {
                                        // ATTACK
                                        damagePlayer(enemyRandomDamage[eI], eI);
                                }
                        } else if (actionChoice[eI] <= enemiesInformation[i].thornsChance) {
                                // THORNS
                                enemyGainThorns(enemyRandomThorns[eI], eI);
                        } else if (actionChoice[eI] <= enemiesInformation[i].lowerAttackChance) {
                                if (enemiesAlive > 1) {
                                        // LOWER ATTACK
                                        playerWindswept = true;
                                        displayBlock(playerWindsweptImg);        
                                } else {
                                        // ATTACK
                                        damagePlayer(enemyRandomDamage[eI], eI);
                                }   
                        } else if (actionChoice[eI] <= enemiesInformation[i].lowerBlockChance) {                        
                                if (enemiesAlive > 1) {
                                        // LOWER BLOCK
                                        playerFrostbite = true;
                                        displayBlock(playerFrostbiteImg);        
                                } else {
                                        // ATTACK
                                        damagePlayer(enemyRandomDamage[eI], eI);
                                }   
                        }
                        // RESET ACTIONS
                        displayNone(enemyAttackActionDiv[eI], enemyBlockActionDiv[eI], enemyHealActionDiv[eI], enemyBurnActionDiv[eI], enemyThornsActionDiv[eI],
                                enemyRegenActionDiv[eI], enemyWindsweptActionImg[eI], enemyFrostbiteActionImg[eI], enemyWindsweptImg[eI], enemyFrostbiteImg[eI]);    
                enemyWindswept[eI] = false;
                enemyFrostbite[eI] = false;
                }
                eI++
                
        });
        checkRegenHeal();
        checkBloodSiphon();
        checkGaiasEmbrace();
        addCardsToHand();
        checkIfEnemyDead();
        if (numberOfEnemies === 1) {
                enemyAction(trackEnemies[0]);
        } else if (numberOfEnemies === 2) {
                enemyAction(trackEnemies[0], trackEnemies[1]);
        } else {
                enemyAction(trackEnemies[0], trackEnemies[1], trackEnemies[2]);
        }     
}
getOpeningHand();
for (let i = 0; i < openingCards.length; i++) {
      addCardListeners(openingCards, i, i)  ;      
}