/* TO DO
Talent tree after each fight
SET UP IMAGES TO SCALE WITH SCREEN SIZE
BOSS TREASURE: Empower an element and more likely to draw that element type
Implement animations
when viewing inventory have a sorter based on element type
! DIV
Personality type quiz that grants buff based on answer of what you value most
POTIONS: RED POTION: Increase burn by 1
         BLUE POTION
         COPY CARD

Create point system for balancing value eg. 1 mana = 13 damage, frostbite = .5 mana etc.

BUG: can click card then end turn and play card
transfer burn doing way too much burn
frostfire fusion too much burn
dark elf blood nan
*/
/*
GENERAL FUNCTIONS
*/
const beginningScreen = document.querySelector("#beginning-screen-container");
const startScreen = document.querySelector("#start-screen-container");
const startGame = document.querySelector("#start-game");
const tutorial = document.querySelector("#tutorial");
const options = document.querySelector("#options");
const quitGame = document.querySelector("#quit-game");
const bottomAnchor = document.querySelector("#bottom-anchor");
const arrows = document.querySelectorAll(".arrow");
const boardHeader = document.querySelector("#board-header");
const startScreenMusic = new Audio("audio/start-screen-music.mp3");
window.addEventListener("keydown", () => {
        displayNone(beginningScreen);
        displayFlex(startScreen);
        //startScreenMusic.play();
}, {once: true});
startGame.addEventListener("click", () => {
        displayBlock(map);
        displayFlex(boardHeader);
        location.href="#bottom-anchor";
        displayNone(startScreen);
        mapMusic.play();
        //startScreenMusic.pause();
});
startGame.addEventListener("mouseover", () => {
        displayBlock(arrows[0], arrows[1]);
});
startGame.addEventListener("mouseout", () => {
        displayNone(arrows[0], arrows[1]);
});
tutorial.addEventListener("mouseover", () => {
        displayBlock(arrows[2], arrows[3]);
});
tutorial.addEventListener("mouseout", () => {
        displayNone(arrows[2], arrows[3]);
});
options.addEventListener("mouseover", () => {
        displayBlock(arrows[4], arrows[5]);
});
options.addEventListener("mouseout", () => {
        displayNone(arrows[4], arrows[5]);
});
quitGame.addEventListener("click", () => {
        window.close();
});
quitGame.addEventListener("mouseover", () => {
        displayBlock(arrows[6], arrows[7]);
});
quitGame.addEventListener("mouseout", () => {
        displayNone(arrows[6], arrows[7]);
});
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
const mapMusic = new Audio("audio/map-music.mp3");
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
        arena.classList.remove("dim");
        for (i = 0; i < numberOfEnemies; i++) {
                enemyIsDead[i] = false;
                enemyFrostbite[i] = false;
                enemyWindswept[i] = false;
        }
        enemyLevel++;
        playerWindswept = false;
        playerFrostbite = false;
        playerBurnNumber.innerText = 0;
        displayNone(playerWindsweptImg, playerFrostbiteImg, playerBurnImg, playerBurnNumber, playerRegenImg, playerRegenNumber, playerThornsImg, playerThornsNumber,
                playerBloodImg, playerBloodNumber, playerBlockImg, playerBlockNumber);
        if (thunderTalisman) {
                currentMana.innerText = 6;
        } else {
                currentMana.innerText = 4;
        }
        playerThornsNumber.innerText = 0;
        playerBlockNumber.innerText = 0;
        playerRegenNumber.innerText = 0;
        playerBloodNumber.innerText = 0;
        frostbitten = false;
        for (let i = 0; i < potionCards.length; i++) {
                let spliceCard = potionCards.pop();
                drawPileArray.push(spliceCard);
                handContainer.appendChild(spliceCard);
        }
        essenceOfEmber = [];
        essenceOfEmberUpgrade = [];
        liquidLightning = [];
        liquidLightningUpgrade = [];
        snowfallElixir = false;
        windsOfChange = 5;
        tidalImbuement = false;
        terrasBlessing = [];
        gaiasEmbrace = [];
        gaiasEmbraceUpgrade = [];
        maxHandLength = 5;
        healthGainedThisFight = 0;
        damageThisTurn = 0;
        getEliteRelic = false;
        airBubble = [];
        if (caspiansTear) {
                playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 3;
                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + 3;
                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + 3;
        }
        if (crownOfThorns) {
                playerThornsNumber.innerText = 2;
                displayBlock(playerThornsImg, playerThornsNumber);
        }
        maxHandLength = 5;
        reshuffleCards();
        updateCardText();
        if (windDisc) {
                console.log("WINDDISC");
                drawCards(6);
        } else {
                drawCards(maxHandLength);
        }
        removeCardClicked();
        for (let i = 0; i < drawPileArray.length; i++) {
                if (drawPileArray[i].classList.contains("card-clicked")) {
                        drawPileArray[i].classList.remove("card-clicked");
                }
        }
        enemyContainer.innerHTML = "";
}
let dontRepeatEncounter = [];
const encounterMusic = new Audio("audio/encounter-music.mp3")
function getRandomEncounter() {
        //encounterMusic.play();
        //mapMusic.pause();
        let randomEncounterNumber = createRandomNumber(1, 10);
        while (dontRepeatEncounter.includes(randomEncounterNumber)) {
                randomEncounterNumber = createRandomNumber(1, 10);
                
        }
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
                        dontRepeatEncounter.push(1);
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
                        dontRepeatEncounter.push(2);
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
                        dontRepeatEncounter.push(3);
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
                        dontRepeatEncounter.push(4);
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
                        dontRepeatEncounter.push(5);
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
                        dontRepeatEncounter.push(6);
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
                        enemyAction(5, 6, 2);
                        dontRepeatEncounter.push(7);
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
                        dontRepeatEncounter.push(8);
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
                        dontRepeatEncounter.push(9);
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
                        dontRepeatEncounter.push(10);
                        break;
        }
}
let dontRepeatRelic = [];
let iceEmpower1 = false;
let bloodAmulet = false;
let eternalFlame = false;
let eternalFlameTracking = [false, false, false];
let ringOfFire = false;
let thunderTalisman = false;
let lightningInABottle = false;
let crownOfThorns = false;
let frostHeart = false;
let iceSpear = false;
let vineBracelet = false;
let caspiansTear = false;
let stratus = false;
let windDisc = false;
function getRelic(min, max) {
        let randomRelicNumber = createRandomNumber(min, max);
        while (dontRepeatRelic.includes(randomRelicNumber)) {
                randomRelicNumber = createRandomNumber(min, max);
        }
        const relicContainer = document.querySelector("#relic-container");
        switch (randomRelicNumber) {
                case 1:
                        ringOfFire = true;
                        relicContainer.innerHTML += `
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/ring-of-fire.png">
                                <div class="relic-img-text">
                                        <h4 class="relic-img-text-h4">Ring Of Fire</h4>
                                        <p class="relic-img-text-p">Single target burn duplicates half it's burn and spreads it to all enemies</p>
                                </div>
                        </div>`;                        
                        dontRepeatRelic.push(1);
                        break;
                case 2:
                        eternalFlame = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/eternal-flame2.png">
                                <div class="relic-img-text">
                                        <h4 class="relic-img-text-h4">Eternal Flame</h4>
                                        <p class="relic-img-text-p">Burning an enemy twice in one turn will increase the second burn by 50%</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(2);
                        break;
                case 3:
                        thunderTalisman = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/thunder-talisman2.png">
                                <div class="relic-img-text">
                                        <h4 class="relic-img-text-h4">Thunder Talisman</h4>
                                        <p class="relic-img-text-p">Start each encounter with +2 mana for the first turn</p>
                                </div>
                        </div>`
                        dontRepeatRelic.push(3);
                        break;
                case 4:
                        lightningInABottle = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/lightning-in-a-bottle.png">
                                <div class="relic-img-text">
                                        <h4 class="relic-img-text-h4">Lightning in a Bottle</h4>
                                        <p class="relic-img-text-p">Your unused mana will not be lost</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(4);
                        break;
                case 5:
                        iceSpear = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/ice-spear.png">
                                <div class="relic-img-text">
                                        <h4 class="relic-img-text-h4">Ice Spear</h4>
                                        <p class="relic-img-text-p">Deal 4 more damage to enemies with Frostbite</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(5);
                        break;
                case 6:
                        frostHeart = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/frostheart.png">
                                <div class="relic-img-text">
                                        <h4 class="relic-img-text-h4">Frostheart</h4>
                                        <p class="relic-img-text-p">Frostbite will reduce each enemy buff by 1</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(6);
                        break;
                case 7:
                        stratus = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/stratus.png">
                                <div class="relic-img-text">
                                        <h4 class="relic-img-text-h4">Stratus</h4>
                                        <p class="relic-img-text-p">Windswept will now reflect 25% of the damage enemies intend to attack for back to them</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(7);
                        break;
                case 8:
                        windDisc = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/wind-disc.png">
                                <div class="relic-img-text">
                                        <h4 class="relic-img-text-h4">Wind Disc</h4>
                                        <p class="relic-img-text-p">Start each encounter with one extra card for the first turn</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(8);
                        break;
                case 9:
                        bloodAmulet = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/blood-amulet2.png">
                                <div class="relic-img-text">
                                        <h4 class="relic-img-text-h4">Blood Amulet</h4>
                                        <p class="relic-img-text-p">Gain 1 blood siphon on your second turn</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(9);
                        break;
                case 10:
                        caspiansTear = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/caspians-tear2.png">
                                <div class="relic-img-text">
                                        <h4 class="relic-img-text-h4">Caspian's Tear</h4>
                                        <p class="relic-img-text-p">Gain +3 max health when you start a new encounter</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(10);
                        break;
                case 11:
                        crownOfThorns = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/crown-of-thorns2.png">
                                <div class="relic-img-text">
                                        <h4 class="relic-img-text-h4">Crown of Thorns</h4>
                                        <p class="relic-img-text-p">Start each encounter with 2 thorns</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(11);
                        break;
                case 12:
                        vineBracelet = true;
                        relicContainer.innerHTML += `
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/vine-bracelet.png">
                                <div class="relic-img-text">
                                        <h4 class="relic-img-text-h4">Vine Bracelet</h4>
                                        <p class="relic-img-text-p">When you lose all of your armor gain 10 armor</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(12);
                        break;
                case 13:
                        iceEmpower1 = true;
                        relicContainer.innerHTML += `<img class="relic-img" src="imgs/iceEmpower12.png">`;
                        dontRepeatRelic.push(1);
                        break;
        }
        let relicImg = document.querySelectorAll(".relic-img");
        let relicImgText = document.querySelectorAll(".relic-img-text");
        for (let i = 0; i < relicImg.length; i++) {
                relicImg[i].addEventListener("mouseover", () => {
                        displayFlex(relicImgText[i]);
                });
                relicImg[i].addEventListener("mouseout", () => {
                        displayNone(relicImgText[i]);
                });
        }
}
let getEliteRelic = false;
let dontRepeatEliteEncounter = [];
const eliteMusic = new Audio("audio/elite-encounter-music.mp3");
function getRandomEliteEncounter() {
        eliteMusic.play();
        let randomEliteEncounterNumber = createRandomNumber(1, 4);
        while (dontRepeatEliteEncounter.includes(randomEliteEncounterNumber)) {
                randomEliteEncounterNumber = createRandomNumber(1, 4);
        }
        getEliteRelic = true;
        switchArea(arena, map);
        switch (randomEliteEncounterNumber) {
                case 1:
                        createEnemy(enemiesInformation[10].baseHealth, enemiesInformation[10].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-fly");
                        enemyImg[0].classList.add("elite-enemy-img");
                        enemyHealth[0].classList.add("dragon-enemy-health");
                        enemyActionDiv[0].classList.add("dragon-action-div");
                        enemyBuffDiv[0].classList = ("dragon-enemy-buffs");
                        enemyDebuffDiv[0].classList = ("dragon-enemy-debuffs");
                        numberOfEnemies = 1;
                        enemyLevelUp();
                        enemyAction(10);
                        dontRepeatEliteEncounter.push(1);
                        break;
                case 2:
                        createEnemy(enemiesInformation[11].baseHealth, enemiesInformation[11].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-middle");
                        enemyImg[0].classList.add("giant-enemy-img");
                        enemyHealth[0].classList.add("giant-enemy-health");
                        enemyActionDiv[0].classList.add("giant-action-div");
                        enemyBlockImg[0].classList.add("giant-block-img");
                        enemyBlockNumber[0].classList.add("giant-block-number");
                        enemyBuffDiv[0].classList = ("giant-enemy-buffs");
                        enemyDebuffDiv[0].classList = ("giant-enemy-debuffs");
                        numberOfEnemies = 1;
                        enemyLevelUp();
                        enemyAction(11);
                        dontRepeatEliteEncounter.push(2);
                        break;
                case 3:
                        createEnemy(enemiesInformation[12].baseHealth, enemiesInformation[12].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-middle");
                        enemyImg[0].classList.add("elite-enemy-img");
                        enemyHealth[0].classList.add("unicorn-enemy-health");
                        enemyHealth[0].classList.add("elite-enemy-health");
                        enemyActionDiv[0].classList.add("unicorn-action-div");
                        enemyBuffDiv[0].classList = ("giant-enemy-buffs");
                        enemyDebuffDiv[0].classList = ("giant-enemy-debuffs");
                        numberOfEnemies = 1;
                        enemyLevelUp();
                        enemyAction(12);
                        dontRepeatEliteEncounter.push(3);
                        break;
                case 4:
                        createEnemy(enemiesInformation[13].baseHealth, enemiesInformation[13].img);
                        initializeEnemyVariables();
                        enemy[0].classList.add("position-middle");
                        enemyImg[0].classList.add("elite-enemy-img");
                        enemyHealth[0].classList.add("druid-enemy-health");
                        enemyActionDiv[0].classList.add("druid-action-div");
                        enemyBuffDiv[0].classList = ("druid-enemy-buffs");
                        enemyDebuffDiv[0].classList = ("druid-enemy-debuffs");
                        numberOfEnemies = 1;
                        enemyLevelUp();
                        enemyAction(13);
                        dontRepeatEliteEncounter.push(4);
                        break;
        }
}
function chooseLocationPath() {
        resetArena();
        mapMusic.pause();
        switch (chosenLocation) {
                case "L1T1":
                        removeGlow(location1Tiles1, location1Tiles2, location1Tiles3);
                        addGlow(location2Tiles1, location2Tiles2);
                        removeELL1();
                        location2Tiles1.addEventListener("click", L2T1);
                        location2Tiles2.addEventListener("click", L2T2);
                        getRandomEncounter();
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
                        removeGlow(location2Tiles1, location2Tiles2);
                        addGlow(location3Tiles1);
                        removeELL2();
                        location3Tiles1.addEventListener("click", L3T1);
                        getRandomEncounter();
                        break;
                case "L2T2":
                        removeGlow(location2Tiles1, location2Tiles2);
                        addGlow(location3Tiles2);
                        removeELL2();
                        location3Tiles2.addEventListener("click", L3T2);
                        getRandomExclamation();
                        break;
                case "L2T3":
                        removeGlow(location2Tiles3);
                        addGlow(location3Tiles3);
                        removeELL2();
                        location3Tiles3.addEventListener("click", L3T3);
                        getRandomEncounter();
                        break;
                case "L2T4":
                        removeGlow(location2Tiles4);
                        addGlow(location3Tiles3);
                        removeELL2();
                        location3Tiles3.addEventListener("click", L3T3);
                        break;
                case "L3T1":
                        removeGlow(location3Tiles1);
                        addGlow(location4Tiles1);
                        removeELL3();
                        location4Tiles1.addEventListener("click", L4T1);
                        getRandomExclamation();
                        break;
                case "L3T2":
                        removeGlow(location3Tiles2);
                        addGlow(location4Tiles2);
                        removeELL3();
                        location4Tiles2.addEventListener("click", L4T2);
                        getRandomExclamation();
                        break;
                case "L3T3":
                        removeGlow(location3Tiles3);
                        addGlow(location4Tiles3, location4Tiles4);
                        removeELL3();
                        location4Tiles3.addEventListener("click", L4T3);
                        location4Tiles4.addEventListener("click", L4T4);
                        getRandomEncounter();
                        break;
                case "L4T1":
                        removeGlow(location4Tiles1);
                        addGlow(location5Tiles1);
                        removeELL4();
                        location5Tiles1.addEventListener("click", L5T1);
                        getRandomEliteEncounter();
                        break;
                case "L4T2":
                        removeGlow(location4Tiles2);
                        addGlow(location5Tiles1, location5Tiles2);
                        removeELL4();
                        location5Tiles1.addEventListener("click", L5T1);
                        location5Tiles2.addEventListener("click", L5T2);
                        getRandomEncounter();
                        break;
                case "L4T3":
                        removeGlow(location4Tiles3, location4Tiles4);
                        addGlow(location5Tiles2, location5Tiles3);
                        removeELL4();
                        location5Tiles2.addEventListener("click", L5T2);
                        location5Tiles3.addEventListener("click", L5T3);
                        break;
                case "L4T4":
                        removeGlow(location4Tiles3, location4Tiles4);
                        addGlow(location5Tiles3);
                        removeELL5();
                        location5Tiles3.addEventListener("click", L5T3);
                        break;
                case "L5T1":
                        removeGlow(location5Tiles1, location5Tiles2, location5Tiles3);
                        addGlow(location6Tiles1);
                        removeELL5();
                        location6Tiles1.addEventListener("click", L6T1);
                        getShop();
                        break;
                case "L5T2":
                        removeGlow(location5Tiles1, location5Tiles2, location5Tiles3);
                        addGlow(location6Tiles1);
                        removeELL5();
                        location6Tiles1.addEventListener("click", L6T1);
                        break;
                case "L5T3":
                        removeGlow(location5Tiles2, location5Tiles3);
                        addGlow(location6Tiles1);
                        removeELL5();
                        location6Tiles1.addEventListener("click", L6T1);
                        break;
                case "L6T1":
                        removeGlow(location6Tiles1);
                        addGlow(location7Tiles1, location7Tiles2, location7Tiles3);
                        removeELL6();
                        location7Tiles1.addEventListener("click", L7T1);
                        location7Tiles2.addEventListener("click", L7T2);
                        location7Tiles3.addEventListener("click", L7T3);
                        getRelic(1, 12);
                        break;
                case "L7T1":
                        removeGlow(location7Tiles1, location7Tiles2, location7Tiles3);
                        addGlow(location8Tiles1, location8Tiles2);
                        removeELL7();
                        location8Tiles1.addEventListener("click", L8T1);                      
                        location8Tiles2.addEventListener("click", L8T2);
                        getRandomEncounter();
                        break;
                case "L7T2":
                        removeGlow(location7Tiles1, location7Tiles2, location7Tiles3);
                        addGlow(location8Tiles2);
                        removeELL7();
                        location8Tiles2.addEventListener("click", L8T2);
                        break;
                case "L7T3":
                        removeGlow(location7Tiles1, location7Tiles2, location7Tiles3);
                        addGlow(location8Tiles2, location8Tiles3);
                        removeELL7();
                        location8Tiles2.addEventListener("click", L8T2);
                        location8Tiles3.addEventListener("click", L8T3);
                        getRandomEncounter();
                        break;
                case "L8T1":
                        removeGlow(location8Tiles1, location8Tiles2);
                        addGlow(location9Tiles1, location9Tiles2);
                        removeELL8();
                        location9Tiles1.addEventListener("click", L9T1);
                        location9Tiles2.addEventListener("click", L9T2);
                        getRandomExclamation();
                        break;
                case "L8T2":
                        removeGlow(location8Tiles1, location8Tiles2, location8Tiles3);
                        addGlow(location9Tiles2, location9Tiles3);
                        removeELL8();
                        location9Tiles2.addEventListener("click", L9T2);
                        location9Tiles3.addEventListener("click", L9T3);
                        break;
                case "L8T3":
                        removeGlow(location8Tiles2, location8Tiles3);
                        addGlow(location9Tiles3, location9Tiles4);
                        removeELL8();
                        location9Tiles3.addEventListener("click", L9T3);
                        location9Tiles4.addEventListener("click", L9T4);
                        break;
                case "L9T1":
                        removeGlow(location9Tiles1, location9Tiles2);
                        addGlow(location10Tiles1);
                        removeELL9();
                        location10Tiles1.addEventListener("click", L10T1);
                        getRandomEncounter();
                        break;
                case "L9T2":
                        removeGlow(location9Tiles1, location9Tiles2, location9Tiles3);
                        addGlow(location10Tiles1);
                        removeELL9();
                        location10Tiles1.addEventListener("click", L10T1);
                        getRandomEncounter();
                        break;
                case "L9T3":
                        removeGlow(location9Tiles2, location9Tiles3, location9Tiles4);
                        addGlow(location10Tiles2);
                        removeELL9();
                        location10Tiles2.addEventListener("click", L10T2);
                        break;
                case "L9T4":
                        removeGlow(location9Tiles3, location9Tiles4);
                        addGlow(location10Tiles2);
                        removeELL9();
                        location10Tiles2.addEventListener("click", L10T2);
                        break;
                case "L10T1":          
                        removeGlow(location10Tiles1);
                        addGlow(location11Tiles1);
                        removeELL10();
                        location11Tiles1.addEventListener("click", L11T1);
                        getBlacksmith();
                        break;
                case "L10T2":          
                        removeGlow(location10Tiles2);
                        addGlow(location11Tiles1);
                        removeELL10();
                        location11Tiles1.addEventListener("click", L11T1);
                        break;
                case "L11T1":
                        removeGlow(location11Tiles1);
                        removeELL11();
                        getRandomEliteEncounter();
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
let dontRepeatExclamation = [];
function getRandomExclamation() {
        const exclamationMusic = new Audio("audio/exclamation-music.mp3");
        exclamationMusic.play();
        function switchMusic() {
                mapMusic.play();
                exclamationMusic.pause();
                exclamationMusic.currentTime = 0;
        }
        let randomExclamationNumber = createRandomNumber(1, 3);
        switchArea(exclamationContainer, map);
        while (dontRepeatExclamation.includes(randomExclamationNumber)) {
                randomExclamationNumber = createRandomNumber(1, 4);
        }
        switch (randomExclamationNumber) {
                case 1:
                        createExclamation("King Spookly", "imgs/pixel-forest.jpg", "imgs/ghost.jpg", "A ghost peaks out from a tree up ahead.", 
                                "He beckons you closer with his translucent appendage. You approach.",
                                `"I was once king in this land long ago." His soft whisper echos. "I had all the gold in my possession burried with me. I now realize the arrogance of my actions and would like to make amends for my past mistakes. Please share this amongt the local townsfolk."`);
                        exclamationDiv = document.querySelector(".exclamation-div");
                        exclamationButtonDiv = document.querySelector(".exclamation-button-div");
                        exclamationButtonDiv.innerHTML = `
                        <button class="exclamation-button-1"><span style="color: rgb(206, 83, 83)">Take It All:</span> Gain 200 Aether. Add Avarice to your deck which can't be used</button>
                        <button class="exclamation-button-2"><span style="color: lightgreen">Share It:</span> Gain good fortune healing 10 health and gaining 10 max health</button>
                        `;
                        exclamationButton1 = document.querySelector(".exclamation-button-1");
                        exclamationButton2 = document.querySelector(".exclamation-button-2");
                        exclamationButton1.addEventListener("click", () => {
                                createNewCard(51, 0);
                                playerAether.innerText = parseFloat(playerAether.innerText) + 200;
                                switchArea(map, exclamationContainer);
                                location.href="#bottom-anchor";
                                switchMusic();
                        });
                        exclamationButton2.addEventListener("click", () => {
                                playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 10;
                                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + 10;
                                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + 10;
                                switchArea(map, exclamationContainer);
                                location.href="#bottom-anchor";
                                switchMusic();
                        });
                        dontRepeatExclamation.push(1);
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
                                                let drawIndex = drawPileArray.indexOf(cardType[i]);
                                                let getFireCard = drawPileArray.splice(drawIndex, 1);
                                                destroyedCardsArray.push(getFireCard);
                                        }
                                        if (handArray.includes(cardType[i])) {
                                                let drawIndex = handArray.indexOf(cardType[i]);
                                                let getFireCard = handArray.splice(drawIndex, 1);
                                                destroyedCardsArray.push(getFireCard);
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
                                location.href="#bottom-anchor";
                                switchMusic();
                        });
                        exclamationButton2.addEventListener("click", () => {
                                let lightning = document.querySelectorAll(".lightning");
                                destroyCards(lightning, "lightning");
                                switchArea(map, exclamationContainer);
                                location.href="#bottom-anchor";
                                switchMusic();
                        });
                        exclamationButton3.addEventListener("click", () => {
                                let ice = document.querySelectorAll(".ice");
                                destroyCards(ice, "ice");
                                switchArea(map, exclamationContainer);
                                location.href="#bottom-anchor";
                                switchMusic();
                        });
                        exclamationButton4.addEventListener("click", () => {
                                let air = document.querySelectorAll(".air");
                                destroyCards(air, "air");
                                switchArea(map, exclamationContainer);
                                location.href="#bottom-anchor";
                                switchMusic();
                        });
                        exclamationButton5.addEventListener("click", () => {
                                let water = document.querySelectorAll(".water");
                                destroyCards(water, "water");
                                switchArea(map, exclamationContainer);
                                location.href="#bottom-anchor";
                                switchMusic();
                        });
                        exclamationButton6.addEventListener("click", () => {
                                let earth = document.querySelectorAll(".earth");
                                destroyCards(earth, "earth");
                                switchArea(map, exclamationContainer);
                                location.href="#bottom-anchor";
                                switchMusic();
                        });
                        dontRepeatExclamation.push(2);
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
                                exclamationContainer.innerHTML = `<div id="all-cards-list"></div>`;
                                const allCardsList = document.querySelector("#all-cards-list");
                                allCardsArray.forEach((i) => {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (i.classList.contains(j)) {
                                                        createCard(j, allCardsList, "card-reference", "card-text", 0);
                                                }
                                        }
                                });
                                let cardReference = document.querySelectorAll(".card-reference");
                                cardReference.forEach((i) => {
                                        displayFlex(i);
                                        i.addEventListener("click", () => {
                                                for (let j = 0; j < cardsInformation.length; j++) {
                                                        if (i.classList.contains(j)) {
                                                                createNewCard(j, 0);
                                                                switchArea(map, exclamationContainer);
                                                                location.href="#bottom-anchor";
                                                                switchMusic();
                                                        }
                                                }
                                                for (let k = 0; k < cardReference.length; k++) {
                                                        destroyedCardsArray.push(cardReference[k]);
                                                        destroyedCardsContainer.appendChild(cardReference[k]);
                                                        destroyedCardsArray = [];
                                                        destroyedCardsContainer.innerHTML = ``;
                                                }
                                        });
                                });
                        });    
                        exclamationButton2.addEventListener("click", () => {
                                let allCardsArray = drawPileArray.concat(handArray, discardPileArray);
                                exclamationContainer.innerHTML = `<div id="all-cards-list"></div>`;
                                const allCardsList = document.querySelector("#all-cards-list");
                                allCardsArray.forEach((i) => {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (i.classList.contains(j)) {
                                                        createCard(j, allCardsList, "card-reference", "card-text", 0);
                                                }
                                        }
                                });
                                let cardReference = document.querySelectorAll(".card-reference");
                                cardReference.forEach((i) => {
                                        displayFlex(i);
                                        i.addEventListener("click", () => {
                                                for (let j = 0; j < cardsInformation.length; j++) {
                                                        if (i.classList.contains(j)) {
                                                                function removeCard(pile) {
                                                                        pile.forEach((k) => {
                                                                                if (k.classList.contains(j)) {
                                                                                        let spliceCard = pile.splice(pile.indexOf(k), 1).pop();
                                                                                        destroyedCardsArray.push(spliceCard);
                                                                                        destroyedCardsContainer.appendChild(spliceCard);
                                                                                        destroyedCardsArray = [];
                                                                                        destroyedCardsContainer.innerHTML = ``;
                                                                                        switchArea(map, exclamationContainer);
                                                                                        location.href="#bottom-anchor";
                                                                                        switchMusic();
                                                                                }
                                                                        });
                                                                }
                                                                removeCard(drawPileArray);
                                                                removeCard(handArray);
                                                        }
                                                }
                                                for (let k = 0; k < cardReference.length; k++) {
                                                        destroyedCardsArray.push(cardReference[k]);
                                                        destroyedCardsContainer.appendChild(cardReference[k]);
                                                        destroyedCardsArray = [];
                                                        destroyedCardsContainer.innerHTML = ``;
                                                }
                                        });
                                        
                                });
                        });
                        dontRepeatExclamation.push(3);
                        break;
                case 4:
                        createExclamation("The Hooded Figure", "imgs/meadow-path.jpg", "imgs/rogue.jpg", "You strain to hear barely audible footsteps through the brush.", 
                                `A hooded figure passes by with his head towards the ground. You aren't sure, but you think you see a smirk for a fraction of a second.`,
                                `As you pass by, you bump into each other dropping both of your belongings. "My apologies" the gravely voice says. As you pick up your supplies you realize they have been swapped. You turn to confront the man, but he's nowhere to be found.`);
                        exclamationDiv = document.querySelector(".exclamation-div");
                        exclamationButtonDiv = document.querySelector(".exclamation-button-div");
                        exclamationButtonDiv.innerHTML = `<button class="exclamation-button-1" style="margin-top: 100px;">Your entire starting hand has been swapped!</button>`
                        exclamationButton1 = document.querySelector(".exclamation-button-1");
                        exclamationButton1.addEventListener("click", () => {
                        // DESTROY OPENING HAND CARDS
                        let allCards = document.querySelectorAll(".card");
                        allCards.forEach((i) => {
                                for (let j = 0; j < 12; j++) {
                                        if (i.classList.contains(j)) {
                                                if (drawPileArray.includes(i)) {
                                                        let drawIndex = drawPileArray.indexOf(i);
                                                        let getFireCard = drawPileArray.splice(drawIndex, 1);
                                                        destroyedCardsArray.push(getFireCard);
                                                        destroyedCardsContainer.appendChild(i);
                                                }
                                                if (handArray.includes(i)) {
                                                        let drawIndex = handArray.indexOf(i);
                                                        let getFireCard = handArray.splice(drawIndex, 1);
                                                        destroyedCardsArray.push(getFireCard);
                                                        destroyedCardsContainer.appendChild(i);
                                                }
                                        }
                                }
                                
                        });
                        destroyedCardsContainer.innerHTML = ``;
                        destroyedCardsArray = [];
                        // ADD NEW RANDOM CARDS
                        let newOpeningHand = [];
                        while (newOpeningHand.length < 12) {
                                let newCard = createRandomNumber(0, cardsInformation.length - 2);
                                while (newOpeningHand.includes(newCard)) {
                                        newCard = createRandomNumber(0, cardsInformation.length - 2);
                                }
                                createNewCard(newCard, 0);
                                newOpeningHand.push(newCard);
                        }
                        switchArea(map, exclamationDiv);
                        location.href="#bottom-anchor";
                        switchMusic();
                });
        }
}
function getShop () {
        let shopMusic = new Audio("audio/shop-music.wav");
        shopMusic.play();
        const shopContainer = document.querySelector("#shop-container");
        displayNone(map);
        displayFlex(shopContainer);
        shopContainer.innerHTML = `
        <div id="cards-and-relics-container">
                <div id="shop-cards-div"></div>
                <div id="shop-relic-container"></div>
        </div>
        <button id="leave-shop-button">Leave Shop</button>
        <img id="shopkeeper" src="imgs/gnome-shopkeeper.png">
        `;
        // LEAVE SHOP BUTTON
        const leaveShopButton = document.querySelector("#leave-shop-button");
        leaveShopButton.addEventListener("click", () => {
                switchArea(map, shopContainer);
                location.href="#bottom-anchor";
                mapMusic.play();
                shopMusic.pause();
                shopMusic.currentTime = 0;
        });
        // HEALTH BUTTON
        /*const shopHealthButton = document.querySelector("#shop-health-button");
        shopHealthButton.addEventListener("click", () => {
                if (playerAether.innerText >= 25) {
                        playerAether.innerText -= 25;
                        playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 5;
                        playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + 5;
                        topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + 5;
                }
        });*/
        // SHOP CARDS
        const shopCardsDiv = document.querySelector("#shop-cards-div");
        let shopCards = [];
        let dontRepeatCard = [];
        while (dontRepeatCard.length < 10) {
                let newRandomNumber = createRandomNumber(12, cardsInformation.length - 2);
                if (dontRepeatCard.includes(newRandomNumber)) {
                        newRandomNumber = createRandomNumber(12, cardsInformation.length - 2);
                } else {
                        dontRepeatCard.push(newRandomNumber);
                }
        }
        let index = 0;
        dontRepeatCard.forEach((i) => {
                shopCardsDiv.innerHTML += `<div class="shop-cards-cost-div"></div>`;
                let shopCardsCostDiv = document.querySelectorAll(".shop-cards-cost-div");
                createCard(i, shopCardsCostDiv[index], "card-reference", "card-text", 0);
                shopCardsCostDiv[index].innerHTML += `<img class="shop-aether" src="imgs/aether.png"><p class="shop-aether-cost">50</p>`
                let shopCardsReference = document.querySelectorAll(".card-reference");
                index++;
                shopCards.push(shopCardsReference[shopCardsReference.length - 1]);
        });
        let shopCardsCostDiv = document.querySelectorAll(".shop-cards-cost-div");
        let shopCardsReference = document.querySelectorAll(".card-reference");
        for (let i = 0; i < shopCardsReference.length; i++) {
                displayFlex(shopCardsReference[i]);
                shopCardsReference[i].addEventListener("click", () => {       
                        for (let j = 0; j < cardsInformation.length; j++) {
                                if (shopCardsReference[i].classList.contains(j) && playerAether.innerText >= 50) {
                                        createNewCard(j, 0);
                                        playerAether.innerText -= 50;
                                        displayNone(shopCardsCostDiv[i], map);
                                }
                        }
                        for (let k = 0; k < shopCardsReference.length; k++) {
                                destroyedCardsArray.push(shopCardsReference[k]);
                                destroyedCardsContainer.appendChild(shopCardsReference[k]);
                                destroyedCardsArray = [];
                                destroyedCardsContainer.innerHTML = ``;
                        }
                });
        }
        // SHOP RELICS
        const shopRelicContainer = document.querySelector("#shop-relic-container");
        let dontRepeatShopRelic = [];
        function getShopRelic(timesToRun) {
                for (let i = 0; i < timesToRun; i++) {
                        let randomRelicNumber = createRandomNumber(1, 12);
                        while (dontRepeatRelic.includes(randomRelicNumber) || dontRepeatShopRelic.includes(randomRelicNumber)) {
                                randomRelicNumber = createRandomNumber(1, 12);
                        }
                        switch (randomRelicNumber) {
                                case 1:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 1" src="imgs/ring-of-fire.png">
                                                <div class="shop-relic-img-text">
                                                        <h4 class="relic-img-text-h4">Ring of Fire</h4>
                                                        <p class="relic-img-text-p">Single target burn duplicates half it's burn and spreads it to all enemies</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(1);
                                        break;
                                case 2:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 2" src="imgs/eternal-flame2.png">
                                                <div class="shop-relic-img-text">
                                                        <h4 class="relic-img-text-h4">Eternal Flame</h4>
                                                        <p class="relic-img-text-p">Burning an enemy twice in one turn will increase the second burn by 50%</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(2);
                                        break;
                                case 3:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 3" src="imgs/thunder-talisman2.png">
                                                <div class="shop-relic-img-text">
                                                        <h4 class="relic-img-text-h4">Thunder Talisman</h4>
                                                        <p class="relic-img-text-p">Start each encounter with +1 mana for the first turn</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>;
                                        </div>`
                                        dontRepeatShopRelic.push(3);
                                        break;
                                case 4:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 4" src="imgs/lightning-in-a-bottle.png">
                                                <div class="shop-relic-img-text">
                                                        <h4 class="relic-img-text-h4">Lightning in a Bottle</h4>
                                                        <p class="relic-img-text-p">Your unused mana will not be lost</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(4);
                                        break;
                                case 5:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 5" src="imgs/ice-spear.png">
                                                <div class="shop-relic-img-text">
                                                        <h4 class="relic-img-text-h4">Ice Spear</h4>
                                                        <p class="relic-img-text-p">Deal 4 more damage to enemies with Frostbite</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(5);
                                        break;
                                case 6:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 6" src="imgs/frostheart.png">
                                                <div class="shop-relic-img-text">
                                                        <h4 class="relic-img-text-h4">Frostheart</h4>
                                                        <p class="relic-img-text-p">Frostbite will reduce each enemy buff by 1</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(6);
                                        break;
                                case 7:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 7" src="imgs/stratus.png">
                                                <div class="shop-relic-img-text">
                                                        <h4 class="relic-img-text-h4">Stratus</h4>
                                                        <p class="relic-img-text-p">Windswept will now reflect 25% of the damage enemies intend to attack for back to them</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(7);
                                        break;
                                case 8:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 8" src="imgs/wind-disc.png">
                                                <div class="shop-relic-img-text">
                                                        <h4 class="relic-img-text-h4">Wind Disc</h4>
                                                        <p class="relic-img-text-p">Start each encounter with one extra card for the first turn</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(8);
                                        break;
                                case 9:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 9" src="imgs/blood-amulet2.png">
                                                <div class="shop-relic-img-text">
                                                        <h4 class="relic-img-text-h4">Blood Amulet</h4>
                                                        <p class="relic-img-text-p">Gain 1 blood siphon on your second turn</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(9);
                                        break;
                                case 10:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 10" src="imgs/caspians-tear2.png">
                                                <div class="shop-relic-img-text">
                                                        <h4 class="relic-img-text-h4">Caspian's Tear</h4>
                                                        <p class="relic-img-text-p">Gain +3 max health when you start a new encounter</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(10);
                                        break;
                                case 11:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 11" src="imgs/crown-of-thorns2.png">
                                                <div class="shop-relic-img-text">
                                                        <h4 class="relic-img-text-h4">Crown of Thorns</h4>
                                                        <p class="relic-img-text-p">Start each encounter with 2 thorns</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(11);
                                        break;
                                case 12:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 12" src="imgs/vine-bracelet.png">
                                                <div class="shop-relic-img-text">
                                                        <h4 class="relic-img-text-h4">Vine Bracelet</h4>
                                                        <p class="relic-img-text-p">When you lose all of your armor gain 10 armor</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(12);
                                        break;
                        }
                }
        }
        getShopRelic(4);
        const shopRelicImg = document.querySelectorAll(".shop-relic-img");
        const shopAetherImg = document.querySelectorAll(".shop-aether");
        const shopAetherCost = document.querySelectorAll(".shop-aether-cost");
        const shopRelicImgText = document.querySelectorAll(".shop-relic-img-text");
        for (let i = 0; i < shopRelicImg.length; i++) {
                shopRelicImg[i].addEventListener("click", () => {
                        for (let k = 0; k <= 12; k++) {
                                if (shopRelicImg[i].classList.contains(k) && playerAether.innerText >= 100) {
                                        getRelic(k, k);
                                        displayNone(shopAetherImg[i + 10], shopAetherCost[i + 10],shopRelicImg[i], map);
                                        playerAether.innerText -= 100;
                                }
                        }
                });
                shopRelicImg[i].addEventListener("mouseover", () => {
                        displayFlex(shopRelicImgText[i]);
                });
                shopRelicImg[i].addEventListener("mouseout", () => {
                        displayNone(shopRelicImgText[i]);
                });
        }
}
function getBlacksmith() {
        const blacksmithMusic = new Audio("audio/blacksmith-music.mp3");
        blacksmithMusic.play();
        blacksmithMusic.loop = true;
        const blacksmithAmbience = new Audio("audio/blacksmith-ambience.wav");
        blacksmithAmbience.play();
        blacksmithAmbience.loop = true;
        const blacksmithContainer = document.querySelector("#blacksmith-container");
        displayFlex(blacksmithContainer);
        displayNone(map);
        const blacksmithText = document.querySelector("#blacksmith-text");
        let clickCount = 0;
        if (playerAether.innerText < 75) {
                blacksmithText.innerHTML = `<p>I can infuse your cards with aether to make them stronger if you've got the materials.<br><br>Come back when you have 75 aether for me.</p>`;
                blacksmithText.addEventListener("click", () => {
                        switchArea(map, blacksmithContainer);
                        location.href="#bottom-anchor";
                        mapMusic.play();
                });
        } else {
                blacksmithText.addEventListener("click", () => {
                        blacksmithText.innerHTML = `Leave Blacksmith<br>`;
                        blacksmithContainer.innerHTML += `<div id="blacksmith-cards-list"></div>`
                        const blacksmithCardsList = document.querySelector("#blacksmith-cards-list");
                        let allCardsArray = drawPileArray.concat(handArray, discardPileArray);
                        for (let i = 0; i < allCardsArray.length; i++) {
                                blacksmithCardsList.innerHTML += `<div class="blacksmith-upgrade-pair"></div>`
                        }
                        const blacksmithUpgradePair = document.querySelectorAll(".blacksmith-upgrade-pair");
                        for (let i = 0; i < allCardsArray.length; i++) {
                                for (let j = 0; j < cardsInformation.length; j++) {
                                        if (allCardsArray[i].classList.contains(j)) {
                                                createCard(j, blacksmithUpgradePair[i], "card-reference", "card-text", 0);
                                                createCard(j, blacksmithUpgradePair[i], "card upgraded upgrade-reference", "card-text upgraded-text", 1);
                                                displayNone(map);
                                        }
                                }
                        }
                        let cardReference = document.querySelectorAll(".card-reference");
                        let cardReferenceUpgraded = document.querySelectorAll(".upgrade-reference");
                        let allCurrentCards = document.querySelectorAll(".card");
                        console.log("CARD REFERENCE: ", cardReference, "cardReferenceUpgraded: ", cardReferenceUpgraded);
                        function upgradeCard(cardIndex) {
                                for (let k = 0; k < allCurrentCards.length; k++) {
                                        if (allCurrentCards[k].classList.contains(cardIndex)) {
                                                if (drawPileArray.includes(allCurrentCards[k])) {
                                                        let spliceCard = drawPileArray.splice(drawPileArray.indexOf(allCurrentCards[k]), 1).pop();
                                                        destroyedCardsArray.push(spliceCard);
                                                        destroyedCardsContainer.appendChild(spliceCard);
                                                        destroyedCardsArray = [];
                                                        destroyedCardsContainer.innerHTML = ``;
                                                        createNewCard(cardIndex, 1);
                                                        break;
                                                }
                                                if (handArray.includes(allCurrentCards[k])) {
                                                        let spliceCard = handArray.splice(handArray.indexOf(allCurrentCards[k]), 1).pop();
                                                        destroyedCardsArray.push(spliceCard);
                                                        destroyedCardsContainer.appendChild(spliceCard);
                                                        destroyedCardsArray = [];
                                                        destroyedCardsContainer.innerHTML = ``;
                                                        createNewCard(cardIndex, 1);
                                                        break;
                                                }
                                        }
                                }
                        }
                        for (let i = 0; i < cardReference.length; i++) {
                                displayFlex(cardReference[i]);
                                cardReference[i].addEventListener("click", () => {
                                        clickCount--;
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (cardReference[i].classList.contains(j) && playerAether.innerText >= 75) {
                                                        upgradeCard(j);
                                                        playerAether.innerText -= 75;
                                                        displayNone(cardReference[i], map);
                                                        break;
                                                }
                                        }
                                });
                                cardReference[i].addEventListener("mouseover", () => {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (cardReference[i].classList.contains(j)) {
                                                        if (cardReferenceUpgraded[i].classList.contains(j)) {
                                                                displayFlex(cardReferenceUpgraded[i]);
                                                        }
                                                }
                                        }
                                });
                                cardReference[i].addEventListener("mouseout", () => {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (cardReference[i].classList.contains(j)) {
                                                        if (cardReferenceUpgraded[i].classList.contains(j)) {
                                                                displayNone(cardReferenceUpgraded[i]);
                                                        }
                                                }
                                        }
                                });
                        }
                        this.addEventListener("click", () => {
                                clickCount++;
                                if (clickCount === 2) {
                                        switchArea(map, blacksmithContainer);
                                        location.href="#bottom-anchor";
                                        mapMusic.play();
                                        blacksmithMusic.pause();
                                        blacksmithMusic.currentTime = 0;
                                        blacksmithAmbience.pause();
                                        blacksmithAmbience.currentTime = 0;
                                }
                        });
                });
        }
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

let essenceOfEmber = [];
let essenceOfEmberUpgrade = [];
let liquidLightning = [];
let liquidLightningUpgrade = [];
let snowfallElixir = false;
let tidalImbuement = false;
let terrasBlessing = [];
let gaiasEmbrace = [];
let gaiasEmbraceUpgrade = [];
let airBubble = [];
function getWindsweptDamage() {
        // STORMBLESSED WILL LIKELY UPDATE BACK TO 100% DAMAGE WHEN WINDSWEPT BECAUSE OF ORDER OF UPDATECARDTEXT()
        let currentCardText = document.querySelectorAll(".card-text");
        if (playerWindswept && playerFrostbite) {
                for (let i = 0; i < handArray.length; i++) {
                        for (let j = 0; j < cardsInformation.length; j++) {
                                if (handArray[i].classList.contains(j)) {
                                        for (let k = 0; k < currentCardText.length; k++) {
                                                if (currentCardText[k].classList.contains(j)) {
                                                        if (currentCardText[k].classList.contains("upgraded")) {
                                                                currentCardText[k].innerHTML = frostWindText[j][1];
                                                        } else {
                                                                currentCardText[k].innerHTML = frostWindText[j][0];
                                                        }
                                                }
                                        }
                                }
                        }
                }
        } else if (playerWindswept) {
                for (let i = 0; i < handArray.length; i++) {
                        for (let j = 0; j < cardsInformation.length; j++) {
                                if (handArray[i].classList.contains(j)) {
                                        for (let k = 0; k < currentCardText.length; k++) {
                                                if (currentCardText[k].classList.contains(j)) {
                                                        if (currentCardText[k].classList.contains("upgraded")) {
                                                                currentCardText[k].innerHTML = windsweptDamage[j][1];
                                                        } else {
                                                                currentCardText[k].innerHTML = windsweptDamage[j][0];
                                                        }
                                                }
                                        }
                                }
                        }
                }
        } else if (playerFrostbite) {
                for (let i = 0; i < handArray.length; i++) {
                        for (let j = 0; j < cardsInformation.length; j++) {
                                if (handArray[i].classList.contains(j)) {
                                        for (let k = 0; k < currentCardText.length; k++) {
                                                if (currentCardText[k].classList.contains(j)) {
                                                        if (currentCardText[k].classList.contains("upgraded")) {
                                                                currentCardText[k].innerHTML = frostbiteBuffs[j][1];
                                                        } else {
                                                                currentCardText[k].innerHTML = frostbiteBuffs[j][0];
                                                        }
                                                }
                                        }
                                }
                        }
                }
        } else {
                for (let i = 0; i < handArray.length; i++) {
                        for (let j = 0; j < cardsInformation.length; j++) {
                                if (handArray[i].classList.contains(j)) {
                                        for (let k = 0; k < currentCardText.length; k++) {
                                                if (currentCardText[k].classList.contains(j)) {
                                                        if (currentCardText[k].classList.contains("upgraded")) {
                                                                currentCardText[k].innerHTML = cardsInformation[j].cardText[1];
                                                        } else {
                                                                currentCardText[k].innerHTML = cardsInformation[j].cardText[0];
                                                        }
                                                }
                                        }
                                }
                        }
                }
        }
}
let damageThisTurn = 0;
let healthGainedThisFight = 0;
let windsOfChange = 5;
const playerThornsNumber = document.querySelector("#player-thorns-number");
const playerCurrentHealth = document.querySelector("#player-current-health");

let windsweptDamage = [
        [`Deal 2 damage and inflict 2 burn`, "Inflict 3 burn"],
        ["Deal 7 damage and inflict 4 burn on an enemy and 2 burn on yourself", "Deal 7 damage and inflict 4 burn on an enemy and 2 burn on yourself"],
        ["Energize 2", "Energize 3"],
        ["Deal 10 damage to all enemies", "Deal 10 damage to all enemies and Energize 2"],
        ["Deal 5 damage and inflict frostbite", "Deal 7 damage and inflict frostbite"],
        ["Deal 7 damage, if you or the enemy has frostbite deal 15 instead", "Deal 7 damage, if you or the enemy has frostbite deal 22 instead"],
        ["Enemies with windswept take 6 damage. Enemies without gain windswept", "Enemies with windswept take 6 damage. Enemies without gain windswept. Draw a card."],
        ["Deal 5 damage to an enemy and inflict windswept", "Deal 5 damage to an enemy and inflict windswept. Increase Winds of Wind damage by 3"],
        ["Gain 1 Blood Siphon", "Gain 2 Blood Siphon"],
        ["Your next direct damage spell deals 10 more damage", "Your next direct damage spell deals 10 more damage"],
        ["Gain 12 block", "Gain 22 block"],
        ["Gain 16 block and 2 thorns", "Gain 20 block and 3 thorns"],
        ["Inflict 3 burn on all enemies and 3 on yourself", "Inflict 4 burn on all enemies and 4 on yourself"],
        ["Gain 3 burn and transfer your burn onto the enemy", "Gain 3 burn and transfer your burn onto all enemies"],
        ["Deal 3 damage plus the burn on the enemy", "Deal 1.5x the burn on the enemy"],
        ["[POTION]<br>You apply +2 burn damage", "[POTION]<br>You apply +4 burn damage"],
        [`Deal 25% of the damage you've dealt this turn to an enemy Damage: ${damageThisTurn / 4}`, `Deal 37% of the damage you've dealt this turn to an enemy  Damage: ${(damageThisTurn * .75) / 2}`],
        ["Deal 5 damage to a random enemy three times and gain Energize for each unique enemy damaged",
                "Deal 5 damage to a random enemy four times and gain Energize for each unique enemy damaged"],
        ["Deal 20 damage plus 7 for each mana you have after playing Conduit. Energize 1", "Deal 20 damage plus 10 for each mana you have after playing Conduit. Energize 1"],
        ["[POTION]<br>All damage is increased by 5", "[POTION]<br>All damage is increased by 7"],
        ["Deal 7 damage to all enemies and inflict frostbite on everyone including yourself", "Deal 10 damage to all enemies and inflict frostbite on everyone including yourself"],
        ["When you have frostbite, gain double armor. Inflict frostbite on yourself", "When you have frostbite, gain double armor. Inflict frostbite on yourself"],
        ["Inflict frostbite and deal damage equal to half your block amount", "Gain 10 block, inflict frostbite, and deal damage equal to half your block amount"],
        ["[POTION]<br>Damage and Frostbite now hits every enemy", "[POTION]<br>Damage and Frostbite now hits every enemy"],
        [`Deal ${windsOfChange / 2} damage. All Winds of Change gain +3 damage or +5 damage if enemy is windswept`, `Deal ${windsOfChange / 2} damage. All Winds of Change gain +4 damage or +6 damage if enemy is windswept`],
        ["Draw two cards", "Draw two cards and inflict windswept on a random enemy"],
        ["Draw one Winds of Change from your draw pile and one from your discard pile", "Draw one Winds of Change from your draw pile and one from your discard pile. Winds of Change gain +1 for each drawn."],
        ["[POTION]<br>Draw one more card at the end of each turn", "[POTION]<br>Draw one more card at the end of each turn"],
        ["Cleanse all debuffs and gain blood siphon for two turns", "Cleanse all debuffs and gain blood siphon for three turns"],
        ["Use all mana to gain 1 regeneration, blood siphon and healing per mana spent", "Use all mana to gain 1 regeneration, blood siphon, block and healing per mana spent"],
        [`Deal damage equal to how much you've healed this fight Damage:${healthGainedThisFight / 2}`, `Deal damage to all enemies equal to how much you've healed this fight Damage: ${healthGainedThisFight / 2}`],
        ["[POTION]<br>Permanently gain 5 max health", "[POTION]<br>Permanently gain 6 max health and gain 6 health"],
        ["Lose all of your armor and deal damage equal to half of how much was lost", "Lose all of your armor and deal damage equal to half of how much was lost. Regain 25% of your block."],
        ["Gain 4 thorns", "Gain 6 thorns"],
        [`Deal 2 damage plus 1.5x your thorns Damage:${2 + (playerThornsNumber.innerText * 1.5)}`, `Gain 2 thorns and deal damage equal to 1.5x your thorns Damage:${2 + (playerThornsNumber.innerText * 1.5)}`],
        ["[POTION]<br>All block gained is increased by 5 and thorns increased by 1", "[POTION]<br>Gain 10 block and 2 thorns. All block gained is increased by 5 and thorns increased by 1"],
        ["Inflict 2 burn to all enemies. Deal damage equal to half their burn", "Inflict 2 burn to all enemies. Deal damage equal to half their burn"],
        ["If the enemy is either burning or inflicted with frostbite they are inflicted with 3 burn and frostbite.", "If the enemy is either burning or inflicted with frostbite they are inflicted with 4 burn and frostbite."],
        ["Inflict windswept on all enemies and increase burn count by 3 if they're already burning", "Inflict windswept on all enemies and increase burn count by 4 if they're already burning"],
        ["Gain 4 burn, 4 regen, and 1 blood siphon", "Gain 5 burn, 5 regen, and 2 blood siphon"],
        ["Inflict 3 burn on an enemy and gain block equal to their burn", "Inflict 3 burn on an enemy and gain block equal to their burn"],
        ["Electrucute enemies with frostbite dealing 10 damage", "Electrucute enemies with frostbite dealing 13 damage"],
        ["Inflict windswept and deal 25 damage to all enemies. Draw a card, and gain 2 mana.", "Inflict windswept and deal 25 damage to all enemies. Draw a card, energize 1 and gain 3 mana."],
        [`Deal 1 damage per 5 health you currently have and gain 3 regeneration Damage:${playerCurrentHealth.innerText / 5}`, `Deal 1 damage per 5 health you currently have, gain 2 max health and 3 regeneration Damage:${playerCurrentHealth.innerText / 5}`],
        ["Deal 5 damage to all enemies and gain 1 thorn per enemy hit", "Deal 5 damage to all enemies and gain 1 thorn and 4 block per enemy hit"],
        ["Inflict windswept and frostbite to all enemies", "Inflict windswept and frostbite to all enemies"],
        ["Gain 1 regen and 1 blood siphon for everyone afflicted with frostbite", "Gain 1 regen and 1 blood siphon for everyone afflicted with frostbite"],
        ["Inflict everyone including yourself with frostbite and gain 5 armor for everyone inflicted", "Inflict everyone including yourself with frostbite and gain 7 armor for everyone inflicted"],
        ["Gain 1 regen for each card played this turn", "Gain 1 regen for each card played this turn and draw a card"],
        ["Gain 4 block and draw a card", "Gain 7 block and draw a card"],
        ["[POTION]\nGain 3 block and healing at the end of each turn", "[POTION]\nGain 5 block and healing at the end of each turn"],
        ["[DOES NOTHING] Your greed causes you to look down upon peasants", "[DOES NOTHING] Your greed causes you to look down upon peasants"]
]
let frostbiteBuffs = [
        [`Deal 5 damage and inflict 4 burn`, "Inflict 6 burn"],
        ["Deal 15 damage and inflict 8 burn on an enemy and 2 burn on yourself", "Deal 15 damage and inflict 8 burn on an enemy and 2 burn on yourself"],
        ["Energize 1", "Energize 1"],
        ["Deal 20 damage to all enemies", "Deal 20 damage to all enemies and Energize 1"],
        ["Deal 10 damage and inflict frostbite", "Deal 15 damage and inflict frostbite"],
        ["Deal 15 damage, if you or the enemy has frostbite deal 30 instead", "Deal 15 damage, if you or the enemy has frostbite deal 45 instead"],
        ["Enemies with windswept take 12 damage. Enemies without gain windswept", "Enemies with windswept take 12 damage. Enemies without gain windswept. Draw a card."],
        ["Deal 10 damage to an enemy and inflict windswept", "Deal 10 damage to an enemy and inflict windswept. Increase Winds of Wind damage by 3"],
        ["Gain 0 Blood Siphon", "Gain 1 Blood Siphon"],
        ["Your next direct damage spell deals 10 more damage", "Your next direct damage spell deals 10 more damage"],
        ["Gain 6 block", "Gain 11 block"],
        ["Gain 8 block and 1 thorn", "Gain 10 block and 1 thorn"],
        ["Inflict 6 burn on all enemies and 3 on yourself", "Inflict 8 burn on all enemies and 4 on yourself"],
        ["Gain 3 burn and transfer your burn onto the enemy", "Gain 3 burn and transfer your burn onto all enemies"],
        ["Deal 6 damage plus 2x the burn on the enemy", "Deal 3x the burn on the enemy"],
        ["[POTION]<br>You apply +2 burn damage", "[POTION]<br>You apply +4 burn damage"],
        [`Deal 50% of the damage you've dealt this turn to an enemy Damage: ${damageThisTurn / 2}`, `Deal 75% of the damage you've dealt this turn to an enemy  Damage: ${(damageThisTurn * .75)}`],
        ["Deal 10 damage to a random enemy three times and gain Energize for half of each unique enemy damaged",
                "Deal 10 damage to a random enemy four times and gain Energize for half of each unique enemy damaged"],
        ["Deal 40 damage plus 15 for each mana you have after playing Conduit. Energize 0", "Deal 40 damage plus 20 for each mana you have after playing Conduit. Energize 0"],
        ["[POTION]<br>All damage is increased by 5", "[POTION]<br>All damage is increased by 7"],
        ["Deal 14 damage to all enemies and inflict frostbite on everyone including yourself", "Deal 20 damage to all enemies and inflict frostbite on everyone including yourself"],
        ["When you have frostbite, gain double armor. Inflict frostbite on yourself", "When you have frostbite, gain double armor. Inflict frostbite on yourself"],
        ["Inflict frostbite and deal damage equal to your block amount", "Gain 5 block, inflict frostbite, and deal damage equal to your block amount"],
        ["[POTION]<br>Damage and Frostbite now hits every enemy", "[POTION]<br>Damage and Frostbite now hits every enemy"],
        [`Deal ${windsOfChange} damage. All Winds of Change gain +3 damage or +5 damage if enemy is windswept`, `Deal ${windsOfChange} damage. All Winds of Change gain +4 damage or +6 damage if enemy is windswept`],
        ["Draw two cards", "Draw two cards and inflict windswept on a random enemy"],
        ["Draw one Winds of Change from your draw pile and one from your discard pile", "Draw one Winds of Change from your draw pile and one from your discard pile. Winds of Change gain +1 for each drawn."],
        ["[POTION]<br>Draw one more card at the end of each turn", "[POTION]<br>Draw one more card at the end of each turn"],
        ["Cleanse all debuffs and gain blood siphon", "Cleanse all debuffs and gain blood siphon"],
        ["Use all mana to gain 1 regeneration, blood siphon and healing per 2 mana spent", "Use all mana to gain 1 regeneration, blood siphon, block and healing per 2 mana spent"],
        [`Deal damage equal to how much you've healed this fight Damage:${healthGainedThisFight}`, `Deal damage to all enemies equal to how much you've healed this fight Damage: ${healthGainedThisFight}`],
        ["[POTION]<br>Permanently gain 5 max health", "[POTION]<br>Permanently gain 6 max health and gain 6 health"],
        ["Lose all of your armor and deal damage equal to how much was lost", "Lose all of your armor and deal damage equal to how much was lost. Regain 25% of your block."],
        ["Gain 2 thorns", "Gain 3 thorns"],
        [`Deal 4 damage plus 3x your thorns Damage:${4 + (playerThornsNumber.innerText * 3)}`, `Gain 1 thorn and deal damage equal to 3x your thorns Damage:${1 + (playerThornsNumber.innerText * 3)}`],
        ["[POTION]<br>All block gained is increased by 5 and thorns increased by 1", "[POTION]<br>Gain 5 block and 1 thorn. All block gained is increased by 5 and thorns increased by 1"],
        ["Inflict 4 burn to all enemies. Deal damage equal to their burn", "Inflict 4 burn to all enemies. Deal damage equal to their burn"],
        ["If the enemy is either burning or inflicted with frostbite they are inflicted with 6 burn and frostbite.", "If the enemy is either burning or inflicted with frostbite they are inflicted with 8 burn and frostbite."],
        ["Inflict windswept on all enemies and increase burn count by 6 if they're already burning", "Inflict windswept on all enemies and increase burn count by 8 if they're already burning"],
        ["Gain 4 burn, 2 regen, and 0 blood siphon", "Gain 5 burn, 2 regen, and 1 blood siphon"],
        ["Inflict 6 burn on an enemy and gain block equal to half their burn", "Inflict 6 burn on an enemy and gain block equal to half their burn"],
        ["Electrucute enemies with frostbite dealing 20 damage", "Electrucute enemies with frostbite dealing 26 damage"],
        ["Inflict windswept and deal 50 damage to all enemies. Draw a card, and gain 2 mana.", "Inflict windswept and deal 50 damage to all enemies. Draw a card, energize 0 and gain 3 mana."],
        [`Deal 2 damage per 5 health you currently have and gain 1 regeneration Damage:${playerCurrentHealth.innerText / 2.5}`, `Deal 2 damage per 5 health you currently have, gain 2 max health and 1 regeneration Damage:${playerCurrentHealth.innerText / 2.5}`],
        ["Deal 10 damage to all enemies and gain 0 thorn per 2 enemies hit", "Deal 10 damage to all enemies and gain 0 thorns and 2 block per enemy hit"],
        ["Inflict windswept and frostbite to all enemies", "Inflict windswept and frostbite to all enemies"],
        ["Gain 1 regen and 1 blood siphon for every 2 characters afflicted with frostbite", "Gain 1 regen and 1 blood siphon for every two characters afflicted with frostbite"],
        ["Inflict everyone including yourself with frostbite and gain 2 armor for everyone inflicted", "Inflict everyone including yourself with frostbite and gain 3 armor for everyone inflicted"],
        ["Gain 0 regen for each card played this turn", "Gain 0 regen for each card played this turn and draw a card"],
        ["Gain 2 block and draw a card", "Gain 3 block and draw a card"],
        ["[POTION]\nGain 3 block and healing at the end of each turn", "[POTION]\nGain 5 block and healing at the end of each turn"],
        ["[DOES NOTHING] Your greed causes you to look down upon peasants", "[DOES NOTHING] Your greed causes you to look down upon peasants"]
]
let frostWindText = [
        [`Deal 2 damage and inflict 4 burn`, "Inflict 3 burn"],
        ["Deal 7 damage and inflict 4 burn on an enemy and 2 burn on yourself", "Deal 7 damage and inflict 4 burn on an enemy and 2 burn on yourself"],
        ["Energize 1", "Energize 1"],
        ["Deal 10 damage to all enemies", "Deal 10 damage to all enemies and Energize 1"],
        ["Deal 5 damage and inflict frostbite", "Deal 7 damage and inflict frostbite"],
        ["Deal 7 damage, if you or the enemy has frostbite deal 15 instead", "Deal 7 damage, if you or the enemy has frostbite deal 22 instead"],
        ["Enemies with windswept take 6 damage. Enemies without gain windswept", "Enemies with windswept take 6 damage. Enemies without gain windswept. Draw a card."],
        ["Deal 5 damage to an enemy and inflict windswept", "Deal 5 damage to an enemy and inflict windswept. Increase Winds of Wind damage by 3"],
        ["Gain 0 Blood Siphon", "Gain 1 Blood Siphon"],
        ["Your next direct damage spell deals 10 more damage", "Your next direct damage spell deals 10 more damage"],
        ["Gain 6 block", "Gain 11 block"],
        ["Gain 8 block and 1 thorn", "Gain 10 block and 1 thorn"],
        ["Inflict 3 burn on all enemies and 3 on yourself", "Inflict 4 burn on all enemies and 4 on yourself"],
        ["Gain 3 burn and transfer your burn onto the enemy", "Gain 3 burn and transfer your burn onto all enemies"],
        ["Deal 3 damage plus the burn on the enemy", "Deal 1.5x the burn on the enemy"],
        ["[POTION]<br>You apply +2 burn damage", "[POTION]<br>You apply +4 burn damage"],
        [`Deal 25% of the damage you've dealt this turn to an enemy Damage: ${damageThisTurn / 4}`, `Deal 37% of the damage you've dealt this turn to an enemy  Damage: ${(damageThisTurn * .75) / 2}`],
        ["Deal 5 damage to a random enemy three times and gain Energize for half of each unique enemy damaged",
                "Deal 5 damage to a random enemy four times and gain Energize for half of each unique enemy damaged"],
        ["Deal 20 damage plus 7 for each mana you have after playing Conduit. Energize 0", "Deal 20 damage plus 10 for each mana you have after playing Conduit. Energize 0"],
        ["[POTION]<br>All damage is increased by 5", "[POTION]<br>All damage is increased by 7"],
        ["Deal 7 damage to all enemies and inflict frostbite on everyone including yourself", "Deal 10 damage to all enemies and inflict frostbite on everyone including yourself"],
        ["When you have frostbite, gain double armor. Inflict frostbite on yourself", "When you have frostbite, gain double armor. Inflict frostbite on yourself"],
        ["Inflict frostbite and deal damage equal to half your block amount", "Gain 5 block, inflict frostbite, and deal damage equal to half your block amount"],
        ["[POTION]<br>Damage and Frostbite now hits every enemy", "[POTION]<br>Damage and Frostbite now hits every enemy"],
        [`Deal ${windsOfChange / 2} damage. All Winds of Change gain +3 damage or +5 damage if enemy is windswept`, `Deal ${windsOfChange / 2} damage. All Winds of Change gain +4 damage or +6 damage if enemy is windswept`],
        ["Draw two cards", "Draw two cards and inflict windswept on a random enemy"],
        ["Draw one Winds of Change from your draw pile and one from your discard pile", "Draw one Winds of Change from your draw pile and one from your discard pile. Winds of Change gain +1 for each drawn."],
        ["[POTION]<br>Draw one more card at the end of each turn", "[POTION]<br>Draw one more card at the end of each turn"],
        ["Cleanse all debuffs and gain blood siphon", "Cleanse all debuffs and gain blood siphon"],
        ["Use all mana to gain 1 regeneration, blood siphon and healing per 2 mana spent", "Use all mana to gain 1 regeneration, blood siphon, block and healing per 2 mana spent"],
        [`Deal damage equal to half of how much you've healed this fight Damage:${healthGainedThisFight / 2}`, `Deal damage to all enemies equal to half of how much you've healed this fight Damage: ${healthGainedThisFight / 2}`],
        ["[POTION]<br>Permanently gain 5 max health", "[POTION]<br>Permanently gain 6 max health and gain 6 health"],
        ["Lose all of your armor and deal damage equal to half of how much was lost", "Lose all of your armor and deal damage equal to half of how much was lost. Regain 25% of your block."],
        ["Gain 2 thorns", "Gain 3 thorns"],
        [`Deal 2 damage plus 1.5x your thorns Damage:${2 + (playerThornsNumber.innerText * 1.5)}`, `Gain 1 thorn and deal damage equal to 1.5x your thorns Damage:${1 + (playerThornsNumber.innerText * 1.5)}`],
        ["[POTION]<br>All block gained is increased by 5 and thorns increased by 1", "[POTION]<br>Gain 5 block and 1 thorn. All block gained is increased by 5 and thorns increased by 1"],
        ["Inflict 2 burn to all enemies. Deal damage equal to their burn", "Inflict 2 burn to all enemies. Deal damage equal to their burn"],
        ["If the enemy is either burning or inflicted with frostbite they are inflicted with 3 burn and frostbite.", "If the enemy is either burning or inflicted with frostbite they are inflicted with 4 burn and frostbite."],
        ["Inflict windswept on all enemies and increase burn count by 3 if they're already burning", "Inflict windswept on all enemies and increase burn count by 4 if they're already burning"],
        ["Gain 4 burn, 2 regen, and 0 blood siphon", "Gain 5 burn, 2 regen, and 1 blood siphon"],
        ["Inflict 3 burn on an enemy and gain block equal to half their burn", "Inflict 3 burn on an enemy and gain block equal to half their burn"],
        ["Electrucute enemies with frostbite dealing 10 damage", "Electrucute enemies with frostbite dealing 13 damage"],
        ["Inflict windswept and deal 25 damage to all enemies. Draw a card, and gain 2 mana.", "Inflict windswept and deal 25 damage to all enemies. Draw a card, energize 0 and gain 3 mana."],
        [`Deal 1 damage per 5 health you currently have and gain 1 regeneration Damage:${playerCurrentHealth.innerText / 5}`, `Deal 1 damage per 5 health you currently have, gain 2 max health and 1 regeneration Damage:${playerCurrentHealth.innerText / 5}`],
        ["Deal 5 damage to all enemies and gain 0 thorn per 2 enemies hit", "Deal 5 damage to all enemies and gain 0 thorns and 2 block per enemy hit"],
        ["Inflict windswept and frostbite to all enemies", "Inflict windswept and frostbite to all enemies"],
        ["Gain 1 regen and 1 blood siphon for every 2 characters afflicted with frostbite", "Gain 1 regen and 1 blood siphon for every two characters afflicted with frostbite"],
        ["Inflict everyone including yourself with frostbite and gain 2 armor for everyone inflicted", "Inflict everyone including yourself with frostbite and gain 3 armor for everyone inflicted"],
        ["Gain 0 regen for each card played this turn", "Gain 0 regen for each card played this turn and draw a card"],
        ["Gain 2 block and draw a card", "Gain 3 block and draw a card"],
        ["[POTION]\nGain 3 block and healing at the end of each turn", "[POTION]\nGain 5 block and healing at the end of each turn"],
        ["[DOES NOTHING] Your greed causes you to look down upon peasants", "[DOES NOTHING] Your greed causes you to look down upon peasants"]
]
// CARD INFO ARRAY TO MAKE CARD DIVS IN HTML
const cardsInformation = [
        {
                manaCost: [1, 1],
                name: "Fireball",
                cardImg: "imgs/fireball2.jpg",
                cardText: [`Deal 5 damage and inflict 4 burn`, "Inflict 6 burn"],
                chooseEnemyCard: true,
                index: 0,
                element: "fire",
                action: 
                [
                        function () {
                                spendMana(1);
                                damageEnemy(5, chosenEnemy);
                                burnEnemy(4, chosenEnemy);
                                new Audio("audio/fireball.wav").play();
                        },
                        function () {
                                spendMana(1);
                                burnEnemy(6, chosenEnemy);
                                new Audio("audio/fireball.wav").play();
                        }
                ]
        },
        {
                manaCost: [3, 2],
                name: "Cascading Flames",
                cardImg: "imgs/cascading-flames.jpg",
                cardText: ["Deal 15 damage and inflict 8 burn on an enemy and 2 burn on yourself", "Deal 15 damage and inflict 8 burn on an enemy and 2 burn on yourself"],
                chooseEnemyCard: true,
                index: 1,
                element: "fire",
                action: 
                [
                        function() {
                                spendMana(3);
                                damageEnemy(15, chosenEnemy);
                                burnEnemy(8, chosenEnemy);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 2;
                                displayBlock(playerBurnImg, playerBurnNumber);
                                new Audio("audio/cascadingFlames.wav").play();
                        },
                        function() {
                                spendMana(2);
                                damageEnemy(15, chosenEnemy);
                                burnEnemy(8, chosenEnemy);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 2;
                                displayBlock(playerBurnImg, playerBurnNumber);
                                new Audio("audio/cascadingFlames.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Static Charge",
                cardImg: "imgs/static-charge.jpg",
                cardText: ["Energize 2", "Energize 3"],
                chooseEnemyCard: false,
                index: 2,
                element: "lightning",
                action:
                [
                        function() {
                                spendMana(1);
                                gainEnergize(2);
                                new Audio("audio/staticCharge.wav").play();
                        },    
                        function() {
                                spendMana(1);
                                gainEnergize(3);
                                new Audio("audio/staticCharge.wav").play();
                        },    
                ]
        },
        {
                manaCost: [3, 3],
                name: "Chain Lightning",
                cardImg: "imgs/chain-lightning2.jpg",
                cardText: ["Deal 20 damage to all enemies", "Deal 20 damage to all enemies and Energize 2"],                
                chooseEnemyCard: false,
                index: 3,
                element: "lightning",
                action:
                [
                        function() {
                                spendMana(3);
                                damageAllEnemies(20);
                                new Audio("audio/chainLightning.wav").play();
                        },
                        function() {
                                spendMana(3);
                                damageAllEnemies(20);
                                gainEnergize(2);
                                new Audio("audio/chainLightning.wav").play();
                        },
                ]        
        },
        {
                manaCost: [1, 0],
                name: "Frostbolt",
                cardImg: "imgs/frostbolt.jpeg",
                cardText: ["Deal 10 damage and inflict frostbite", "Deal 15 damage and inflict frostbite"],
                chooseEnemyCard: true,
                index: 4,
                element: "ice",
                action: 
                [
                        function() {
                                spendMana(1);
                                damageEnemy(10, chosenEnemy);
                                inflictFrostbite(chosenEnemy);
                                new Audio("audio/frostbolt.wav").play();
                        },
                        function() {
                                spendMana(0);
                                damageEnemy(15, chosenEnemy);
                                inflictFrostbite(chosenEnemy);
                                new Audio("audio/frostbolt.wav").play();
                        }
                ]
        },        
        {
                manaCost: [2, 2],
                name: "Frost Fingers",
                cardImg: "imgs/frost-fingers.jpg",
                cardText: ["Deal 15 damage, if you or the enemy has frostbite deal 30 instead", "Deal 15 damage, if you or the enemy has frostbite deal 45 instead"],
                chooseEnemyCard: true,
                index: 5,
                element: "ice",
                action:
                [       
                        function() {
                                spendMana(2);
                                if (playerFrostbite || enemyFrostbite[chosenEnemy]) {
                                        damageEnemy(30, chosenEnemy);
                                } else {
                                        damageEnemy(15, chosenEnemy);
                                }
                                new Audio("audio/frostFingers.wav").play();
                        },
                        function() {
                                spendMana(2);
                                if (playerFrostbite || enemyFrostbite[chosenEnemy]) {
                                        damageEnemy(45, chosenEnemy);
                                } else {
                                        damageEnemy(15, chosenEnemy);
                                }
                                new Audio("audio/frostFingers.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Tornado",
                cardImg: "imgs/tornado.jpg",
                cardText: ["Enemies with windswept take 12 damage. Enemies without gain windswept", "Enemies with windswept take 12 damage. Enemies without gain windswept. Draw a card."],
                chooseEnemyCard: false,
                index: 6,
                element: "air",
                action:
                [ 
                        function() {
                                spendMana(1);
                                let enemyIsWindswept = [];
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                if (enemyWindswept[i]) {
                                                        enemyIsWindswept.push(true);
                                                        if (tidalImbuement) {
                                                                damageEnemy(22, i);
                                                                tidalImbuement = true;   
                                                        } else {
                                                                damageEnemy(12, i);
                                                        }
                                                } else {
                                                        inflictWindswept(i);
                                                }
                                        }
                                }
                                if (enemyIsWindswept.length > 0) {
                                        tidalImbuement = false;
                                        displayNone(playerTidalImbuementImg);
                                }
                                new Audio("audio/tornado.wav").play();
                        },
                        function() {
                                spendMana(1);
                                drawCards(1);
                                let enemyIsWindswept = [];
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                if (enemyWindswept[i]) {
                                                        enemyIsWindswept.push(true);
                                                        if (tidalImbuement) {
                                                                damageEnemy(22, i);
                                                                tidalImbuement = true;   
                                                        } else {
                                                                damageEnemy(12, i);
                                                        }
                                                } else {
                                                        inflictWindswept(i);
                                                }
                                        }
                                }
                                if (enemyIsWindswept.length > 0) {
                                        tidalImbuement = false;
                                        displayNone(playerTidalImbuementImg);
                                }
                                new Audio("audio/tornado.wav").play();
                        },
                ]
        },
        {
                manaCost: [1, 1],
                name: "Gale Force",
                cardImg: "imgs/gale.jpg",
                cardText: ["Deal 10 damage to an enemy and inflict windswept", "Deal 10 damage to an enemy and inflict windswept. Increase Winds of Wind damage by 3"],
                chooseEnemyCard: true,
                index: 7,
                element: "air",
                action:
                [ 
                        function() {
                                spendMana(1);
                                damageEnemy(10, chosenEnemy);
                                inflictWindswept(chosenEnemy);
                                new Audio("audio/galeForce.wav").play();
                        },
                        function() {
                                spendMana(1);
                                damageEnemy(10, chosenEnemy);
                                inflictWindswept(chosenEnemy);
                                windsOfChange += 3;
                                new Audio("audio/galeForce.wav").play();
                        },
                ]
        },
        {
                manaCost: [1, 1],
                name: "Blood Cocoon",
                cardImg: "imgs/blood-cocoon2.jpg",
                cardText: ["Gain 1 Blood Siphon", "Gain 2 Blood Siphon"],                
                chooseEnemyCard: false,
                index: 8,
                element: "water",
                action:
                [ 
                        function() {
                                spendMana(1);
                                gainBloodSiphon(1);
                                new Audio("audio/bloodCocoon.wav").play();
                        },
                        function() {
                                spendMana(1);
                                gainBloodSiphon(2);
                                new Audio("audio/bloodCocoon.wav").play();
                        },
                ]
        },
        {
                manaCost: [1, 0],
                name: "Tidal Imbuement",
                cardImg: "imgs/infusion2.jpg",
                cardText: ["Your next direct damage spell deals 10 more damage", "Your next direct damage spell deals 10 more damage"],                
                chooseEnemyCard: false,
                index: 9,
                element: "water",
                action:
                [
                        function() {
                                spendMana(1);
                                tidalImbuement = true;
                                displayBlock(playerTidalImbuementImg);
                                new Audio("audio/tidalEmbuement.wav").play();
                        },
                        function() {
                                spendMana(0);
                                tidalImbuement = true;
                                displayBlock(playerTidalImbuementImg);
                                new Audio("audio/tidalEmbuement.wav").play();
                        },
                ]
        },
        {
                manaCost: [1, 1],
                name: "Earth Barrier",
                cardImg: "imgs/earth-barrier.jpg",
                cardText: ["Gain 12 block", "Gain 22 block"],
                chooseEnemyCard: false,
                index: 10,
                element: "earth",
                action:
                [ 
                        function() {
                                spendMana(1);
                                gainBlock(12);
                                new Audio("audio/earthBarrier.wav").play();
                        },
                        function() {
                                spendMana(1);
                                gainBlock(22);
                                new Audio("audio/earthBarrier.wav").play();
                        },
                ]
        },
        {
                manaCost: [2, 2],
                name: "Thorn Shield",
                cardImg: "imgs/thorn-shield.jpg",
                cardText: ["Gain 16 block and 2 thorns", "Gain 20 block and 3 thorns"],
                chooseEnemyCard: false,
                index: 11,
                element: "earth",
                action:
                [
                        function() {
                                spendMana(2);
                                gainBlock(16);
                                gainThorns(2);
                                new Audio("audio/thornShield.wav").play();
                        },
                        function() {
                                spendMana(2);
                                gainBlock(20);
                                gainThorns(3);
                                new Audio("audio/thornShield.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Firefall",
                cardImg: "imgs/Rain-of-fire.jpg",
                cardText: ["Inflict 6 burn on all enemies and 3 on yourself", "Inflict 8 burn on all enemies and 4 on yourself"],
                chooseEnemyCard: false,
                index: 12,
                element: "fire",
                action:
                [
                        function() {
                                spendMana(2);
                                burnAllEnemies(6);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 3;
                                displayBlock(playerBurnImg, playerBurnNumber);
                                new Audio("audio/firefall.wav").play();
                        },
                        function() {
                                spendMana(2);
                                burnAllEnemies(8);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 4;
                                displayBlock(playerBurnImg, playerBurnNumber);
                                new Audio("audio/firefall.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Kindred Spirits",
                cardImg: "imgs/combustion.jpg",
                cardText: ["Gain 3 burn and transfer your burn onto the enemy", "Gain 3 burn and transfer your burn onto all enemies"],
                chooseEnemyCard: true,
                index: 13,
                element: "fire",
                action:
                [
                        function() {
                                spendMana(1);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 3;
                                burnEnemy(parseFloat(playerBurnNumber.innerText), chosenEnemy);
                                playerBurnNumber.innerText = 0;
                                displayNone(playerBurnImg, playerBurnNumber); 
                                new Audio("audio/kindredSpirits.wav").play();
                        },
                        function() {
                                spendMana(1);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 3;
                                burnAllEnemies(parseFloat(playerBurnNumber.innerText));
                                playerBurnNumber.innerText = 0;
                                displayNone(playerBurnImg, playerBurnNumber); 
                                new Audio("audio/kindredSpirits.wav").play();
                        }
                ]        
        },
        {
                manaCost: [2, 2],
                name: "Phoenix Fire",
                cardImg: "imgs/phoenix.jpg",
                cardText: ["Deal 6 damage plus 2x the burn on the enemy", "Deal 3x the burn on the enemy"],
                chooseEnemyCard: true,
                index: 14,
                element: "fire",
                action:
                [
                        function() {
                                spendMana(2);
                                damageEnemy(6 + (parseFloat(enemyBurnNumber[chosenEnemy].innerText) * 2), chosenEnemy);
                                new Audio("audio/phoenixFire.wav").play();
                        },
                        function() {
                                spendMana(2);
                                damageEnemy((parseFloat(enemyBurnNumber[chosenEnemy].innerText) * 3), chosenEnemy);
                                new Audio("audio/phoenixFire.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 2],
                name: "Essence of Ember",
                cardImg: "imgs/essence-of-ember.jpg",
                cardText: ["[POTION]<br>You apply +2 burn damage", "[POTION]<br>You apply +4 burn damage"],
                chooseEnemyCard: false,
                index: 15,
                element: "fire",
                action:
                [
                        function() {
                                spendMana(1);
                                essenceOfEmber.push(true);
                                new Audio("audio/potion.wav").play();
                        },
                        function() {
                                spendMana(2);
                                essenceOfEmberUpgrade.push(true);
                                new Audio("audio/potion.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Stormblessed",
                cardImg: "imgs/stormblessed4.jpg",
                cardText: ["Deal 50% of the damage you've dealt this turn to an enemy", "Deal 75% of the damage you've dealt this turn to an enemy"],
                chooseEnemyCard: true,
                index: 16,
                element: "lightning",
                action:
                [
                        function() {
                                spendMana(1);
                                damageEnemy(Math.floor(damageThisTurn / 2), chosenEnemy);
                        },
                        function() {
                                spendMana(1);
                                damageEnemy(Math.floor(damageThisTurn * .75), chosenEnemy);
                        }
                ]
        },
        {
                manaCost: [3, 3],
                name: "Ball Lightning",
                cardImg: "imgs/static-electricity.jpg",
                cardText: ["Deal 10 damage to a random enemy three times and gain Energize for each unique enemy damaged",
                        "Deal 10 damage to a random enemy four times and gain Energize for each unique enemy damaged"],
                chooseEnemyCard: false,
                index: 17,
                element: "lightning",
                action:
                [
                        function() {
                                spendMana(3);
                                let randomEnemies = [];
                                let randomEnemy;
                                let index = 0;
                                for (let i = 0; i < 3; i++) {
                                        randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                        while (enemyIsDead[randomEnemy]) {
                                                randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                                if (enemyIsDead[0] && enemyIsDead[1] && enemyIsDead[2]) {
                                                        return;
                                                }
                                        }
                                        damageEnemy(10, randomEnemy);
                                        if (!randomEnemies.includes(randomEnemy)) {
                                                randomEnemies[index] = randomEnemy;
                                                index++;
                                        }
                                }
                                gainEnergize(randomEnemies.length);        
                        },
                        function() {
                                spendMana(3);
                                let randomEnemies = [];
                                let randomEnemy;
                                let index = 0;
                                for (let i = 0; i < 4; i++) {
                                        randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                        while (enemyIsDead[randomEnemy]) {
                                                randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                        }
                                        damageEnemy(10, randomEnemy);
                                        if (!randomEnemies.includes(randomEnemy)) {
                                                randomEnemies[index] = randomEnemy;
                                                index++;
                                        }
                                }
                                gainEnergize(randomEnemies.length);        
                        }
                ]
        },
        {
                manaCost: [4, 4],
                name: "Conduit",
                cardImg: "imgs/conduit2.jpg",
                cardText: ["Deal 40 damage plus 15 for each mana you have after playing Conduit. Energize 1", "Deal 40 damage plus 20 for each mana you have after playing Conduit. Energize 1"],
                chooseEnemyCard: true,
                index: 18,
                element: "lightning",
                action:
                [
                        function() {
                                spendMana(4);  
                                damageEnemy(40 + (currentMana.innerText * 15), chosenEnemy);
                                gainEnergize(1);
                                new Audio("audio/conduit.wav").play();
                        },
                        function() {
                                spendMana(4);  
                                damageEnemy(40 + (currentMana.innerText * 20), chosenEnemy);
                                gainEnergize(1);
                                new Audio("audio/conduit.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Liquid Lightning",
                cardImg: "imgs/liquid-lightning.jpg",
                cardText: ["[POTION]<br>All damage is increased by 5", "[POTION]<br>All damage is increased by 7"],
                chooseEnemyCard: false,
                index: 19,
                element: "lightning",
                action:
                [
                        function() {
                                spendMana(2);
                                liquidLightning.push(true);
                                new Audio("audio/potion.wav").play();
                        },
                        function() {
                                spendMana(2);
                                liquidLightningUpgrade.push(true);
                                new Audio("audio/potion.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Ice Nova",
                cardImg: "imgs/ice-nova-12.jpg",
                cardText: ["Deal 14 damage to all enemies and inflict frostbite on everyone including yourself", "Deal 20 damage to all enemies and inflict frostbite on everyone including yourself"],
                chooseEnemyCard: false,
                index: 20,
                element: "ice",
                action:
                [
                        function() {
                                spendMana(2);
                                damageAllEnemies(14);
                                inflictAllFrostbite();
                                displayBlock(playerFrostbiteImg);
                                playerFrostbite = true;
                                frostbiteTotal++;
                                new Audio("audio/iceNova.wav").play();
                        },
                        function() {
                                spendMana(2);
                                damageAllEnemies(20);
                                inflictAllFrostbite();
                                displayBlock(playerFrostbiteImg);
                                playerFrostbite = true;
                                frostbiteTotal++;
                                new Audio("audio/iceNova.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 0],
                name: "Frostbitten",
                cardImg: "imgs/frostbitten2.jpg",
                cardText: ["When you have frostbite, gain double armor. Inflict frostbite on yourself", "When you have frostbite, gain double armor. Inflict frostbite on yourself"],
                chooseEnemyCard: false,
                index: 21,
                element: "ice",
                action:
                [
                        function() {
                                spendMana(1);
                                playerFrostbite = true;
                                displayBlock(playerFrostbiteImg);
                                frostbitten = true;
                                frostbiteTotal++;
                                new Audio("audio/frostbitten.wav").play();
                        },
                        function() {
                                spendMana(0);
                                playerFrostbite = true;
                                displayBlock(playerFrostbiteImg);
                                frostbitten = true;
                                frostbiteTotal++;
                                new Audio("audio/frostbitten.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Ray of Ice",
                cardImg: "imgs/ray-of-ice.jpg",
                cardText: ["Inflict frostbite and deal damage equal to your block amount", "Gain 10 block, inflict frostbite, and deal damage equal to your block amount"],
                chooseEnemyCard: true,
                index: 22,
                element: "ice",
                action:
                [
                        function() {
                                spendMana(2);
                                inflictFrostbite(chosenEnemy);
                                damageEnemy(parseFloat(playerBlockNumber.innerText), chosenEnemy);
                                new Audio("audio/rayOfIce.wav").play();
                        },
                        function() {
                                spendMana(2);
                                gainBlock(10);
                                inflictFrostbite(chosenEnemy);
                                damageEnemy(parseFloat(playerBlockNumber.innerText), chosenEnemy);
                                new Audio("audio/rayOfIce.wav").play();
                        }
                ]
        },
        {
                manaCost: [3, 2],
                name: "Snowfall Elixir",
                cardImg: "imgs/fresh-snowfall.jpg",
                cardText: ["[POTION]<br>Damage and Frostbite now hits every enemy", "[POTION]<br>Damage and Frostbite now hits every enemy"],
                chooseEnemyCard: false,
                index: 23,
                element: "ice",
                action:
                [
                        function() {
                                spendMana(3);
                                snowfallElixir = true;
                                new Audio("audio/potion.wav").play();
                        },
                        function() {
                                spendMana(2);
                                snowfallElixir = true;
                                new Audio("audio/potion.wav").play();
                        }
                ]
        },
        {
                manaCost: [0, 0],
                name: "Winds of Change",
                cardImg: "imgs/winds-of-change2.jpg",
                cardText: ["Deal 5 damage. All Winds of Change gain +3 damage or +5 damage if enemy is windswept", "Deal 5 damage. All Winds of Change gain +4 damage or +6 damage if enemy is windswept"],
                chooseEnemyCard: true,
                index: 24,
                element: "air",
                action:
                [
                        function() {
                                damageEnemy(windsOfChange, chosenEnemy);
                                if (enemyWindswept[chosenEnemy]) {
                                        windsOfChange += 5;
                                } else {
                                        windsOfChange += 3;
                                }
                                new Audio("audio/windsOfChange.wav").play();
                        },
                        function() {
                                damageEnemy(windsOfChange, chosenEnemy);
                                if (enemyWindswept[chosenEnemy]) {
                                        windsOfChange += 6;
                                } else {
                                        windsOfChange += 4;
                                }
                                new Audio("audio/windsOfChange.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Windwalk",
                cardImg: "imgs/windwalk3.jpg",
                cardText: ["Draw two cards", "Draw two cards and inflict windswept on a random enemy"],
                chooseEnemyCard: false,
                index: 25,
                element: "air",
                action:
                [
                        function() {
                                spendMana(1);
                                drawCards(2);
                                new Audio("audio/windwalk.wav").play();
                        },
                        function() {
                                spendMana(1);
                                drawCards(2);
                                randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                while (enemyIsDead[randomEnemy]) {
                                        randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                }
                                inflictWindswept(randomEnemy);
                                new Audio("audio/windwalk.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Gust",
                cardImg: "imgs/gust.jpg",
                cardText: ["Draw one Winds of Change from your draw pile and one from your discard pile", "Draw one Winds of Change from your draw pile and one from your discard pile. Winds of Change gain +1 for each drawn."],
                chooseEnemyCard: false,
                index: 26,
                element: "air",
                action:
                [
                        function() {
                                spendMana(2);
                                let drawCard = false;
                                let discardCard = false;
                                let windCards = document.querySelectorAll(".winds-of-change");
                                //console.log("BEFORE\nDRAW: ", drawPileArray);
                                //console.log("BEFORE\nHAND: ", handArray);
                                //console.log("BEFORE\nDISCARD: ", discardPileArray);
                                for (let i = 0; i < windCards.length; i++) {
                                        if (drawPileArray.includes(windCards[i]) && drawCard === false) {
                                                let spliceCard = drawPileArray.splice(drawPileArray.indexOf(windCards[i]), 1).pop();
                                                handArray.push(spliceCard);
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
                                new Audio("audio/gust.wav").play();
                        },
                        function() {
                                spendMana(2);
                                let drawCard = false;
                                let discardCard = false;
                                let windCards = document.querySelectorAll(".winds-of-change");
                                //console.log("BEFORE\nDRAW: ", drawPileArray);
                                //console.log("BEFORE\nHAND: ", handArray);
                                //console.log("BEFORE\nDISCARD: ", discardPileArray);
                                for (let i = 0; i < windCards.length; i++) {
                                        if (drawPileArray.includes(windCards[i]) && drawCard === false) {
                                                windsOfChange += 1;
                                                let spliceCard = drawPileArray.splice(drawPileArray.indexOf(windCards[i]), 1).pop();
                                                handArray.push(spliceCard);
                                                displayFlex(windCards[i]);
                                                drawCard = true;
                                                //console.log("DRAW\nDRAW: ", drawPileArray);
                                                //console.log("DRAW\nHAND: ", handArray);
                                                //console.log("DRAW\nDISCARD: ", discardPileArray);
                                        }
                                        if (discardPileArray.includes(windCards[i]) && discardCard === false) {
                                                windsOfChange += 1;
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
                                new Audio("audio/gust.wav").play();
                        }
                ]
        },
        {
                manaCost: [3, 2],
                name: "Zephyr Infusion",
                cardImg: "imgs/zephyr-infusion.jpg",
                cardText: ["[POTION]<br>Draw one more card at the end of each turn", "[POTION]<br>Draw one more card at the end of each turn"],
                chooseEnemyCard: false,
                index: 27,
                element: "air",
                action:
                [
                        function() {
                                spendMana(3);
                                maxHandLength++;
                                new Audio("audio/potion.wav").play();
                        },
                        function() {
                                spendMana(2);
                                maxHandLength++;
                                new Audio("audio/potion.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Sanguine Spring",
                cardImg: "imgs/sanguine.jpg",
                cardText: ["Cleanse all debuffs and gain blood siphon for two turns", "Cleanse all debuffs and gain blood siphon for three turns"],
                chooseEnemyCard: false,
                index: 28,
                element: "water",
                action:
                [
                        function() {
                                spendMana(2);
                                playerWindswept = false;
                                playerFrostbite = false;
                                playerBurnNumber.innerText = 0;
                                displayNone(playerWindsweptImg, playerFrostbiteImg, playerBurnImg, playerBurnNumber);
                                gainBloodSiphon(2);
                                new Audio("audio/sanguineSpring.wav").play();
                        },
                        function() {
                                spendMana(2);
                                playerWindswept = false;
                                playerFrostbite = false;
                                playerBurnNumber.innerText = 0;
                                displayNone(playerWindsweptImg, playerFrostbiteImg, playerBurnImg, playerBurnNumber);
                                gainBloodSiphon(3);
                                new Audio("audio/sanguineSpring.wav").play();
                        }
                ]
        },
        {
                manaCost: [0, 0],
                name: "Mistborn",
                cardImg: "imgs/mistborn.jpg",
                cardText: ["Use all mana to gain 1 regeneration, blood siphon and healing per mana spent", "Use all mana to gain 1 regeneration, blood siphon, block and healing per mana spent"],
                chooseEnemyCard: false,
                index: 29,
                element: "water",
                action:
                [
                        function() {
                                gainRegen(parseFloat(currentMana.innerText));
                                gainBloodSiphon(parseFloat(currentMana.innerText));
                                playerHeal(parseFloat(currentMana.innerText));
                                currentMana.innerText = 0;
                                new Audio("audio/mistborn.wav").play();
                        },
                        function() {
                                gainRegen(parseFloat(currentMana.innerText));
                                gainBloodSiphon(parseFloat(currentMana.innerText));
                                gainBlock(parseFloat(currentMana.innerText));
                                playerHeal(parseFloat(currentMana.innerText));
                                currentMana.innerText = 0;
                                new Audio("audio/mistborn.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Tsunami",
                cardImg: "imgs/tsunami-2.jpg",
                cardText: ["Deal damage equal to how much you've healed this fight", "Deal damage to all enemies equal to how much you've healed this fight"],
                chooseEnemyCard: false,
                index: 30,
                element: "water",
                action:
                [
                        function() {
                                spendMana(2);
                                damageEnemy(healthGainedThisFight);
                                new Audio("audio/tsunami.wav").play();
                        },
                        function() {
                                spendMana(2);
                                damageAllEnemies(healthGainedThisFight);
                                new Audio("audio/tsunami.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Spring Water",
                cardImg: "imgs/spring-water.jpg",
                cardText: ["[POTION]<br>Permanently gain 5 max health", "[POTION]<br>Permanently gain 7 max health and gain 5 regeneration"],
                chooseEnemyCard: false,
                index: 31,
                element: "water",
                action:
                [
                        function() {
                                spendMana(2);
                                playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 5;
                                new Audio("audio/potion.wav").play();
                        },
                        function() {
                                spendMana(2);
                                playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 7;
                                gainRegen(5);
                                new Audio("audio/potion.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Earth Shatter",
                cardImg: "imgs/earth-shatter.jpg",
                cardText: ["Lose all of your armor and deal damage to all enemies equal to how much was lost", "Lose all of your armor and deal damage to all enemies equal to how much was lost. Regain 25% of your block."],
                chooseEnemyCard: false,
                index: 32,
                element: "earth",
                action:
                [
                        function() {
                                spendMana(2);
                                damageAllEnemies(playerBlockNumber.innerText);
                                playerBlockNumber.innerText = 0;
                                displayNone(playerBlockImg, playerBlockNumber);
                                new Audio("audio/earthShatter.wav").play();
                        },
                        function() {
                                spendMana(2);
                                damageAllEnemies(playerBlockNumber.innerText);
                                let playerBlockRecovery = parseFloat(playerBlockNumber.innerText * .25);
                                playerBlockNumber.innerText = 0;
                                gainArmor(playerBlockRecovery);
                                new Audio("audio/earthShatter.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Weave of Thorns",
                cardImg: "imgs/vine-armor2.jpg",
                cardText: ["Gain 4 thorns", "Gain 6 thorns"],
                chooseEnemyCard: false,
                index: 33,
                element: "earth",
                action:
                [
                        function() {
                                spendMana(2);
                                gainThorns(4);
                                new Audio("audio/weaveOfThorns.wav").play();
                        },
                        function() {
                                spendMana(2);
                                gainThorns(6);
                                new Audio("audio/weaveOfThorns.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Vine Whip",
                cardImg: "imgs/thorn-whip.jpg",
                cardText: ["Deal 4 damage plus 3x your thorns", "Gain 2 thorns and deal damage equal to 3x your thorns"],
                chooseEnemyCard: true,
                index: 34,
                element: "earth",
                action:
                [
                        function() {
                                spendMana(2);
                                damageEnemy(4 + (playerThornsNumber.innerText * 3), chosenEnemy);
                                new Audio("audio/vineWhip.wav").play();
                        },
                        function() {
                                spendMana(2);
                                gainThorns(2);
                                damageEnemy((playerThornsNumber.innerText * 3), chosenEnemy);
                                new Audio("audio/vineWhip.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Terra's Blessing",
                cardImg: "imgs/terra-infusion.jpg",
                cardText: ["[POTION]<br>All block gained is increased by 5 and thorns increased by 1", "[POTION]<br>Gain 10 block and 2 thorns. All block gained is increased by 5 and thorns increased by 1"],
                chooseEnemyCard: false,
                index: 35,
                element: "earth",
                action:
                [
                        function() {
                                spendMana(2);
                                terrasBlessing.push(true);
                                new Audio("audio/potion.wav").play();
                        },
                        function() {
                                spendMana(2);
                                gainBlock(10);
                                gainThorns(2);
                                terrasBlessing.push(true);
                                new Audio("audio/potion.wav").play();
                        }
                ]
        },
        {
                manaCost: [0, 1],
                name: "Forest Fire",
                cardImg: "imgs/forest-fire.jpg",
                cardText: ["Energize 1 for each enemy burning", "Burn all enemies for 3 and Energize 1 for each enemy burning"],
                chooseEnemyCard: false,
                index: 36,
                element: "fire-lightning fire lightning",
                action:
                [
                        function() {
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        console.log(enemyIsDead[i] === false, parseFloat(enemyBurnNumber[i].innerText));
                                        if (enemyIsDead[i] === false) {
                                                if (enemyBurnNumber[i].innerText > 0) {
                                                        gainEnergize(1)
                                                }
                                        }
                                }
                                new Audio("audio/forestFire.wav").play();
                        },
                        function() {
                                burnAllEnemies(3);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                if (enemyBurnNumber[i].innerText > 0) {
                                                        gainEnergize(1)
                                                }
                                        }
                                }
                                new Audio("audio/forestFire.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Frostfire Fusion",
                cardImg: "imgs/frostfire-fusion.jpg",
                cardText: ["If the enemy is either burning or inflicted with frostbite they are inflicted with 6 burn and frostbite.", "If the enemy is either burning or inflicted with frostbite they are inflicted with 8 burn and frostbite."],
                chooseEnemyCard: true,
                index: 37,
                element: "fire-ice fire ice",
                action:
                [
                        function() {
                                spendMana(1);
                                if (parseFloat(enemyBurnNumber[chosenEnemy].innerText) > 0 || enemyFrostbite[chosenEnemy]) {
                                        burnEnemy(6, chosenEnemy);
                                        inflictFrostbite(chosenEnemy);
                                }
                                new Audio("audio/frostfireFusion.wav").play();
                        },
                        function() {
                                spendMana(1);
                                if (parseFloat(enemyBurnNumber[chosenEnemy].innerText) > 0 || enemyFrostbite[chosenEnemy]) {
                                        burnEnemy(8, chosenEnemy);
                                        inflictFrostbite(chosenEnemy);
                                }
                                new Audio("audio/frostfireFusion.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Fan the Flames",
                cardImg: "imgs/fan-the-flames.jpg",
                cardText: ["Inflict windswept on all enemies and increase burn count by 6 if they're already burning", "Inflict windswept on all enemies and increase burn count by 8 if they're already burning"],
                chooseEnemyCard: false,
                index: 38,
                element: "fire-air fire air",
                action: 
                [
                        function() {
                                spendMana(2);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                if (enemyBurnNumber[i].innerText > 0) {
                                                        inflictWindswept(i);
                                                        burnEnemy(6, i);
                                                }
                                        }
                                }
                                new Audio("audio/fanTheFlames.wav").play();
                        },
                        function() {
                                spendMana(2);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                if (enemyBurnNumber[i].innerText > 0) {
                                                        inflictWindswept(i);
                                                        burnEnemy(8, i);
                                                }
                                        }
                                }
                                new Audio("audio/fanTheFlames.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Cauterize",
                cardImg: "imgs/cauterize2.jpg",
                cardText: ["Gain 4 burn, 4 regen, and 1 blood siphon", "Gain 5 burn, 5 regen, and 2 blood siphon"],
                chooseEnemyCard: false,
                index: 39,
                element: "fire-water fire water",
                action:
                [
                        function() {
                                spendMana(1);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 4;
                                displayBlock(playerBurnImg, playerBurnNumber);
                                gainBloodSiphon(1);
                                gainRegen(4);
                                new Audio("audio/cauterize.wav").play();
                        },
                        function() {
                                spendMana(1);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 5;
                                displayBlock(playerBurnImg, playerBurnNumber);
                                gainBloodSiphon(2);
                                gainRegen(5);
                                new Audio("audio/cauterize.wav").play();
                        }
                ]
        },
        {
                manaCost: [3, 2],
                name: "Magma",
                cardImg: "imgs/magma.jpg",
                cardText: ["Inflict 6 burn on an enemy and gain block equal to their burn", "Inflict 6 burn on an enemy and gain block equal to their burn"],
                chooseEnemyCard: true,
                index: 40,
                element: "fire-earth fire earth",
                action: 
                [
                        function() {
                                spendMana(3);
                                burnEnemy(6, chosenEnemy);
                                gainBlock(parseFloat(enemyBurnNumber[chosenEnemy].innerText));
                                new Audio("audio/magma.wav").play();
                        },
                        function() {
                                spendMana(2);
                                burnEnemy(6, chosenEnemy);
                                gainBlock(parseFloat(enemyBurnNumber[chosenEnemy].innerText));
                                new Audio("audio/magma.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Deep Freeze",
                cardImg: "imgs/deep-freeze.jpg",
                cardText: ["Electrucute enemies with frostbite dealing 20 damage", "Electrucute enemies with frostbite dealing 26 damage"],
                chooseEnemyCard: false,
                index: 41,
                element: "lightning-ice lightning ice",
                action:
                [
                        function() {
                                spendMana(1);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false && enemyFrostbite[i]) {
                                                damageEnemy(20, i);
                                        }
                                }
                                new Audio("audio/deepFreeze.wav").play();
                        },
                        function() {
                                spendMana(1);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false && enemyFrostbite[i]) {
                                                damageEnemy(26, i);
                                        }
                                }
                                new Audio("audio/deepFreeze.wav").play();
                        }
                ]
        },
        {
                manaCost: [6, 6],
                name: "Hurricane",
                cardImg: "imgs/hurricane.jpg",
                cardText: ["Inflict windswept and deal 50 damage to all enemies. Draw a card, energize 1 and gain 2 mana.", "Inflict windswept and deal 50 damage to all enemies. Draw a card, energize 2 and gain 3 mana."],
                chooseEnemyCard: false,
                index: 42,
                element: "lightning-air lightning air",
                action:
                [
                        function() {
                                spendMana(6);
                                damageAllEnemies(50);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                inflictWindswept(i);
                                        }
                                }
                                gainEnergize(1);
                                drawCards(1);
                                currentMana.innerText = parseFloat(currentMana.innerText) + 2;
                                new Audio("audio/hurricane.wav").play();
                        },
                        function() {
                                spendMana(6);
                                damageAllEnemies(50);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                inflictWindswept(i);
                                        }
                                }
                                drawCards(1);
                                currentMana.innerText = parseFloat(currentMana.innerText) + 3;
                                gainEnergize(2);
                                new Audio("audio/hurricane.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Electric Current",
                cardImg: "imgs/electric-current.jpg",
                cardText: ["Deal 2 damage per 5 health you currently have and gain 3 regeneration", "Deal 2 damage per 5 health you currently have, gain 2 max health and 3 regeneration"],
                chooseEnemyCard: true,
                index: 43,
                element: "lightning-water lightning water",
                action:
                [
                        function() {
                                spendMana(2);
                                gainRegen(3);
                                damageEnemy(Math.floor(2 * playerCurrentHealth.innerText / 5), chosenEnemy);
                                new Audio("audio/electricCurrent.wav").play();
                        },
                        function() {
                                spendMana(2);
                                gainRegen(3);
                                playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 2;
                                damageEnemy(Math.floor(2 * playerCurrentHealth.innerText / 5), chosenEnemy);
                                new Audio("audio/electricCurrent.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Quaking Jolt",
                cardImg: "imgs/quaking-thunder3.jpg",
                cardText: ["Gain 1 thorn and energize for each enemy alive", "Gain 1 thorn, 4 block and 1 energize for each enemy alive"],
                chooseEnemyCard: false,
                index: 44,
                element: "lightning-earth lightning earth",
                action:
                [
                        function() {
                                spendMana(2);
                                damageAllEnemies(10);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                gainThorns(1);
                                                gainEnergize(1);
                                        }
                                }
                                new Audio("audio/quakingJolt.wav").play();
                        },
                        function() {
                                spendMana(2);
                                damageAllEnemies(10);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                gainThorns(1);
                                                gainEnergize(1);
                                                gainArmor(4);
                                        }
                                }
                                new Audio("audio/quakingJolt.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 0],
                name: "Flurry",
                cardImg: "imgs/flurry.jpg",
                cardText: ["Inflict windswept and frostbite to all enemies", "Inflict windswept and frostbite to all enemies"],              
                chooseEnemyCard: false,
                index: 45,
                element: "ice-air ice air",
                action:
                [
                        function() {
                                spendMana(1);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                inflictWindswept(i);
                                                inflictFrostbite(i);
                                        }  
                                }
                                new Audio("audio/flurry.wav").play();
                        },
                        function() {
                                spendMana(0);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                inflictWindswept(i);
                                                inflictFrostbite(i);  
                                        }  
                                }
                                new Audio("audio/flurry.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 0],
                name: "Liquify",
                cardImg: "imgs/liquify.jpg",
                cardText: ["Gain 1 regen and 1 blood siphon for everyone afflicted with frostbite", "Gain 1 regen and 1 blood siphon for everyone afflicted with frostbite"],
                chooseEnemyCard: false,
                index: 46,
                element: "ice-water ice water",
                action:
                [
                        function() {
                                spendMana(1);
                                // ADD ALL FROSTBITTEN ENEMIES FIRST SO WHEN YOU ARE FROSTBITTEN YOU GAIN 4 / 2 BLOOD NOT 1 / .5 EACH TIME
                                let addFrostbittenEnemies = [];
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false && enemyFrostbite[i]) {
                                                addFrostbittenEnemies.push(true);
                                        }      
                                }
                                if (playerFrostbite) {
                                        addFrostbittenEnemies.push(true);
                                }
                                gainRegen(addFrostbittenEnemies.length);
                                gainBloodSiphon(addFrostbittenEnemies.length);     
                                new Audio("audio/liquify.wav").play();
                        },
                        function() {
                                spendMana(0);
                                // ADD ALL FROSTBITTEN ENEMIES FIRST SO WHEN YOU ARE FROSTBITTEN YOU GAIN 4 / 2 BLOOD NOT 1 / .5 EACH TIME
                                let addFrostbittenEnemies = [];
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false && enemyFrostbite[i]) {
                                                addFrostbittenEnemies.push(true);
                                        }      
                                }
                                if (playerFrostbite) {
                                        addFrostbittenEnemies.push(true);
                                }
                                gainRegen(addFrostbittenEnemies.length);
                                gainBloodSiphon(addFrostbittenEnemies.length);
                                new Audio("audio/liquify.wav").play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Frozen Tundra",
                cardImg: "imgs/frozen-tundra3.jpg",
                cardText: ["Inflict everyone including yourself with frostbite and gain 5 armor for everyone inflicted", "Inflict everyone including yourself with frostbite and gain 7 armor for everyone inflicted"],
                chooseEnemyCard: false,
                index: 47,
                element: "ice-earth ice earth",
                action:
                [
                        function() {
                                spendMana(2);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false && enemyFrostbite[i] === false) {
                                                gainBlock(5);
                                                inflictFrostbite(i);      
                                        }      
                                }
                                if (playerFrostbite === false) {
                                        gainBlock(5);
                                        if (iceEmpower1) {
                                                gainBlock(4);
                                        }
                                        displayBlock(playerFrostbiteImg);
                                        playerFrostbite = true;
                                        frostbiteTotal++;
                                }
                                new Audio("audio/frozenTundra.wav").play();
                        },
                        function() {
                                spendMana(2);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false && enemyFrostbite[i] === false) {
                                                gainBlock(5);
                                                inflictFrostbite(i);      
                                        }      
                                }
                                if (playerFrostbite === false) {
                                        gainBlock(7);
                                        if (iceEmpower1) {
                                                gainBlock(4);
                                        }
                                        displayBlock(playerFrostbiteImg);
                                        playerFrostbite = true;
                                        frostbiteTotal++;
                                }
                                new Audio("audio/frozenTundra.wav").play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Air Bubbles",
                cardImg: "imgs/air-bubbles4.jpg",
                cardText: ["Gain 1 regen for each card played this turn", "Gain 1 regen for each card played this turn and draw a card"],
                chooseEnemyCard: false,
                index: 48,
                element: "air-water air water",
                action:
                [
                        function() {
                                spendMana(1);
                                airBubble.push(true);
                                new Audio("audio/airBubbles.wav").play();
                        },
                        function() {
                                spendMana(1);
                                drawCards(1);
                                airBubble.push(true);
                                new Audio("audio/airBubbles.wav").play();
                        }
                ]
        },
        {
                manaCost: [0, 0],
                name: "Rock Orbit",
                cardImg: "imgs/rock-orbit.jpg",
                cardText: ["Gain 4 block and draw a card", "Gain 7 block and draw a card"],
                chooseEnemyCard: false,
                index: 49,
                element: "air-earth air earth",
                action:
                [
                        function() {
                                gainBlock(4);
                                drawCards(1);
                                new Audio("audio/rockOrbit.wav").play();
                        },
                        function() {
                                gainBlock(7);
                                drawCards(1);
                                new Audio("audio/rockOrbit.wav").play();
                        }
                ]
        },
        {
                manaCost: [4, 4],
                name: "Gaia's Embrace",
                cardImg: "imgs/gaias-embrace2.jpg",
                cardText: ["[POTION]\nGain 3 block and healing at the end of each turn", "[POTION]\nGain 5 block and healing at the end of each turn"],
                chooseEnemyCard: false,
                index: 50,
                element: "water-earth water earth",
                action:
                [
                        function() {
                                spendMana(4);
                                gaiasEmbrace.push(true);
                                new Audio("audio/potion.wav").play();
                        },
                        function() {
                                spendMana(4);
                                gaiasEmbraceUpgrade.push(true);
                                new Audio("audio/potion.wav").play();
                        }
                ]
        },
        {
                manaCost: [0, 0],
                name: "Avarice",
                cardImg: "imgs/avarice.jpg",
                cardText: ["Your greed causes you to look down upon peasants", "Your greed causes you to look down upon peasants"],
                chooseEnemyCard: false,
                index: 51,
                element: "gold",
        },        
];
//  CARD CREATION FUNCTION TO ADD TO HTML
function createCard(index, innerLocation, cardClass, cardText, upgradeIndex) {
        let element, element2;
        switch (index) {
                case 0: case 1: case 12: case 13: case 14: case 15:
                        element = "fire2";
                        break;
                case 2: case 3: case 16: case 17: case 18: case 19:
                        element = "energize";
                        break;
                case 4: case 5: case 20: case 21: case 22: case 23:
                        element = "ice2";
                        break;
                case 6: case 7: case 24: case 25: case 26: case 27:
                        element = "windswept";
                        break;
                case 8: case 9: case 28: case 29: case 30: case 31:
                        element = "regen";
                        break;
                case 10: case 11: case 32: case 33: case 34: case 35:
                        element = "earth2";
                        break;
                case 36:
                        element = "fire2";
                        element2 = "energize";
                        break;
                case 37:
                        element = "fire2";
                        element2 = "ice2";
                        break;
                case 38:
                        element = "windswept";
                        element2 = "fire2";
                        break;
                case 39:
                        element = "fire2";
                        element2 = "regen";
                        break;
                case 40:
                        element = "fire2";
                        element2 = "earth2";
                        break;
                case 41:
                        element = "ice2";
                        element2 = "energize";
                        break;
                case 42:
                        element = "windswept";
                        element2 = "energize";
                        break;
                case 43:
                        element = "regen";
                        element2 = "energize";
                        break;
                case 44:
                        element = "fire2";
                        element2 = "earth2";
                        break;
                case 45:
                        element = "windswept";
                        element2 = "ice2";
                        break;
                case 46:
                        element = "ice2";
                        element2 = "regen";
                        break;
                case 47:
                        element = "ice2";
                        element2 = "earth2";
                        break;
                case 48:
                        element = "windswept";
                        element2 = "regen";
                        break;
                case 49:
                        element = "windswept";
                        element2 = "earth2";
                        break;
                case 50:
                        element = "regen";
                        element2 = "earth2";
                        break;
        }
        innerLocation.innerHTML +=
        `<div class="${cardClass} ${cardsInformation[index].element} ${index}">
                <p class="card-mana-number">${cardsInformation[index].manaCost[upgradeIndex]}</p>
                <img class="card-mana-img" src="imgs/block-icon.png">
                <div class="card-name-element-div">
                        <h1 class="card-name">${cardsInformation[index].name}</h1>
                        <img src="imgs/${element}-icon.png" class="card-element">
                        <img src="imgs/${element2}-icon.png" class="card-element-2">
                </div>
                <img class="card-img" src="${cardsInformation[index].cardImg}">
                <p class="${cardText} ${index}">${cardsInformation[index].cardText[upgradeIndex]}</p>
        </div>`
}
arena.classList.remove("darken");
// LOOP TO CREATE OPENING 12 CARDS
for (let i = 0; i < 12; i++) {
        createCard(i, handContainer, "card", "card-text", 0);
}
// SET CARDS TO ACTIVATE WHEN CLICKED RATHER THAN WHEN ENEMY IS CLICKED
let chooseEnemyCard = false;
let [...openingCards] = document.querySelectorAll(".card");
let handArray = [];
let drawPileArray = openingCards.toSorted(() => 0.5 - Math.random());
let discardPileArray = [];
let destroyedCardsArray = [];
let maxHandLength = 5;

function drawCards(numberOfCards) {
        // IF DRAW PILE CANT FILL HAND
        if (drawPileArray.length < numberOfCards) {
                // RESHUFFLE CARDS IN DISCARD PILE
                discardPileArray = discardPileArray.toSorted(() => 0.5 - Math.random());
                // STORE DISCARD PILE LENGTH THEN SHIFT CARDS FROM DISCARD PILE TO DRAW PILE
                let cardsInDiscardPile = discardPileArray.length;
                for (let i = 0; i < cardsInDiscardPile; i++) {
                        drawPileArray.push(discardPileArray.shift());
                }     
                console.log(`REDRAW\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        }
        // SHIFT CARDS FROM DRAW PILE TO HAND
        for (let i = 0; i < numberOfCards; i++) {
                handArray.unshift(drawPileArray.shift());
                displayFlex(handArray[0]);
        }
        handContainer.style = `width: ${numberOfCards - 1}7%`;
        console.log(`DRAW TO HAND\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        console.log(handArray);
}
// GET NEW SET OF 5 CARDS AT THE END OF EACH TURN
let cardsInHand;
function addCardsToHand() {
        console.log(`BEFORE\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        cardsInHand = handArray.length;
        for (let i = 0; i < cardsInHand; i++) {
                discardPileArray.unshift(handArray.shift());
                displayNone(discardPileArray[0]);
        }
        console.log(`HAND TO DISCARD\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        drawCards(maxHandLength);      
}
function reshuffleCards() {
        console.log(`RESHUFFLE CARDS\nBEFORE\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        let cardsInHand = handArray.length;
        for (let i = 0; i < cardsInHand; i++) {
                drawPileArray.unshift(handArray.shift());
        }
        console.log(`RESHUFFLE CARDS\nHAND TO DRAW\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        let cardsInDiscardPile = discardPileArray.length;
        for (let i = 0; i < cardsInDiscardPile; i++) {
                drawPileArray.unshift(discardPileArray.shift());
        }
        for (let i = 0; i < drawPileArray.length; i++) {
                displayNone(drawPileArray[i]);
        }
        console.log(`RESHUFFLE CARDS\nDISCARD TO DRAW\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        // RESHUFFLE CARDS IN DRAW PILE
        drawPileArray = drawPileArray.toSorted(() => 0.5 - Math.random());
}
// TRIGGER SO YOU CANT CLICK CARD MULTIPLE TIMES TO APPLY CARD EFFECT MULTIPLE TIMES ON ENEMY
let cardClicked = false;
let potionCards = [];
let potionCardsContainer = document.querySelector("#potion-cards-container");
// ADD EVENTLISTENERS TO ALL CARDS, STORE CHOSEN CARD IN VARIABLE, PICK ENEMY WHO WILL RECIEVE CARD ACTION
function addCardListeners(cardType, index, CIindex, upgradeIndex) {
        function addToDiscard() {
                let spliceCard = handArray.splice(handArray.indexOf(cardType[index]), 1).pop();
                if (CIindex === 15 || CIindex === 19 || CIindex === 23 || CIindex === 27 || CIindex === 31 || CIindex === 35 || CIindex === 50) {
                        potionCards.push(cardType[index]);
                        potionCardsContainer.appendChild(cardType[index]);
                } else {
                        discardPileArray.push(spliceCard);
                }
                displayNone(cardType[index]);
        }
        function playCard() {
                cardsInformation[CIindex].action[upgradeIndex]();
                addToDiscard();
                updateCardText();
                checkHealth();
                handContainer.style = `width: ${handArray.length- 1}9.5%`;
                if (airBubble.length > 0) {
                        playerRegenNumber.innerText = parseFloat(playerRegenNumber.innerText) + airBubble.length;
                        displayBlock(playerRegenImg, playerRegenNumber);
                }
        }
        // IF CARD REQUIRES YOU TO CLICK ON AN ENEMY
        if (cardsInformation[CIindex].chooseEnemyCard) {
                cardType[index].addEventListener("click", () => {
                        if (cardClicked === false) {
                                cardClicked = true;
                                chosenCard = CIindex;
                                cardType[index].classList.add("card-clicked");
                                chooseEnemy();          
                        } else {
                                removeCardClicked();
                                cardType[index].classList.add("card-clicked");
                                chosenCard = CIindex;
                                chooseEnemy();
                        }
                });  
        } else {
                cardType[index].addEventListener("click", () => {
                        removeCardClicked();
                        if (currentMana.innerText >= cardsInformation[CIindex].manaCost[upgradeIndex]) {
                                playCard();
                        }
                });
        }
        // ADD EVENTLISTENERS TO ALL ENEMIES
        function chooseEnemy() {
        for (let i = 0; i < numberOfEnemies; i++) {
                if (enemyIsDead[i] === false) {
                        // LOG WHICH ENEMY HAS BEEN CLICKED
                        enemy[i].addEventListener("click", () => {
                                chosenEnemy = i;
                        }, { once: true } );
                        // PERFORM CHOSEN CARD ACTION ON CHOSEN ENEMY
                        enemy[i].addEventListener("click", clickEnemy);
                        }
                }
        }
        // SEPERATE FUNCTION WHEN ENEMY IS CLICKED SO EVENTLISTENER CAN BE REMOVED ON EACH ENEMY AFTER CLICKING
        function clickEnemy() {
                if (currentMana.innerText >= cardsInformation[chosenCard].manaCost[upgradeIndex] && chosenCard === CIindex) {
                        playCard();
                        cardClicked = false;
                        removeCardClicked();
                        for (let i = 0; i < numberOfEnemies; i++) {
                                if (enemyIsDead[i] === false) {
                                        enemy[i].removeEventListener("click", clickEnemy);   
                                }     
                        }  
                }
        }
}
function removeCardClicked() {
        for (let i = 0; i < handArray.length; i++) {
                if (handArray[i].classList.contains("card-clicked")) {
                        handArray[i].classList.remove("card-clicked");
                }
        } 
}
function createNewCard(newRandomCard, upgradeIndex) {
        console.log("CREATING CARD NEW RANDOM CARD", newRandomCard);
        chooseNewCardDiv.innerHTML = ``;
        displayNone(chooseNewCardDiv);
        // THIS WONT WORK ANYMORE UPDATE IN CREATECARD
        if (newRandomCard == 24) {
                createCard(newRandomCard, destroyedCardsContainer, "card winds-of-change", "card-text winds-card-text", upgradeIndex);
        } else if (newRandomCard == 43) {
                createCard(newRandomCard, destroyedCardsContainer, "card", "card-text electric-card-text", upgradeIndex);
        } else if (newRandomCard == 16) {
                createCard(newRandomCard, destroyedCardsContainer, "card", "card-text storm-card-text", upgradeIndex);
        } else if (newRandomCard == 30) {
                createCard(newRandomCard, destroyedCardsContainer, "card", "card-text downpour-card-text", upgradeIndex);
        } else {
                createCard(newRandomCard, destroyedCardsContainer, "card", "card-text", upgradeIndex);
        }
        let newCardsArray = document.querySelectorAll(".card");
        console.log("1 NEWCARDSARRAY[0]", newCardsArray[0]);
        let newCardsText = document.querySelectorAll(".card-text");
        if (upgradeIndex === 1) {
                newCardsArray[0].classList.add("upgraded");
                newCardsText[0].classList.add("upgraded-text");
        }
        addCardListeners(newCardsArray, 0, newRandomCard, upgradeIndex);
        drawPileArray.push(newCardsArray[0]);
        handContainer.appendChild(newCardsArray[0]);
        console.log("2 NEWCARDSARRAY[0]", newCardsArray[0]);
        switchArea(map, arena);
        location.href="#bottom-anchor";
        mapMusic.play();
}        
// GET A SELECTION OF 4 CARDS WHEN ENEMIES ARE DEFEATED
function getRandomNewCards () {
        arena.classList.add("dim");
        // GET FOUR NEW RANDOM CARDS FROM ALL REFERENCE CARDS
        let newRandomCard0 = createRandomNumber(12, cardsInformation.length - 2);
        let newRandomCard1 = createRandomNumber(12, cardsInformation.length - 2);
        let newRandomCard2 = createRandomNumber(12, cardsInformation.length - 2);
        let newRandomCard3 = createRandomNumber(12, cardsInformation.length - 2);
        console.log("BEFORE 0", newRandomCard0, "1", newRandomCard1, "2", newRandomCard2, "3", newRandomCard3);
        // CHANGE CARDS IF THEY ARE THE SAME
        while (newRandomCard0 == newRandomCard1 || newRandomCard0 == newRandomCard2 || newRandomCard0 == newRandomCard3 || 
                newRandomCard1 == newRandomCard2 || newRandomCard1 == newRandomCard3 || newRandomCard2 == newRandomCard3) {
                newRandomCard0 = createRandomNumber(12, cardsInformation.length - 2);
                newRandomCard1 = createRandomNumber(12, cardsInformation.length - 2);
                newRandomCard2 = createRandomNumber(12, cardsInformation.length - 2);
                newRandomCard3 = createRandomNumber(12, cardsInformation.length - 2);
        }
        console.log("REPEAT 0", newRandomCard0, "1", newRandomCard1, "2", newRandomCard2, "3", newRandomCard3);
        // ADD REFERENCE CARDS TO CHOOSE NEW CARD DIV
        createCard(newRandomCard0, chooseNewCardDiv, "card-reference", "card-text", 0);
        createCard(newRandomCard1, chooseNewCardDiv, "card-reference", "card-text", 0);
        createCard(newRandomCard2, chooseNewCardDiv, "card-reference", "card-text", 0);
        createCard(newRandomCard3, chooseNewCardDiv, "card-reference", "card-text", 0);
        let newCardChoices = document.querySelectorAll(".card-reference");
        console.log("NEW CARD CHOICES", newCardChoices);
        displayFlex(chooseNewCardDiv, newCardChoices[0], newCardChoices[1], newCardChoices[2], newCardChoices[3]);
        newCardChoices[0].addEventListener("click", () => {createNewCard(newRandomCard0, 0)});
        newCardChoices[1].addEventListener("click", () => {createNewCard(newRandomCard1, 0)});
        newCardChoices[2].addEventListener("click", () => {createNewCard(newRandomCard2, 0)});
        newCardChoices[3].addEventListener("click", () => {createNewCard(newRandomCard3, 0)});
        return;
}
function displayCardPiles(container, pile) {
        displayFlex(container);
        arena.classList.add("dim");
        pile.forEach((i) => {
                for (let j = 0; j < cardsInformation.length; j++) {
                        if (i.classList.contains(j)) {
                                createCard(j, container, "card-reference", "card-text", 0);
                        }
                }
        });
        let cardReference = document.querySelectorAll(".card-reference");
        cardReference.forEach(i => {
                displayFlex(i);
        });
}
function removeCardPiles(pile) {
        pile.innerHTML = ``;
        displayNone(pile);
        arena.classList.remove("dim");
}
const drawPileImg = document.querySelector("#draw-pile-img");
const discardPileImg = document.querySelector("#discard-pile-img");
drawPileImg.addEventListener("mouseover", () => {
        displayCardPiles(drawPileContainer, drawPileArray);
});
discardPileImg.addEventListener("mouseover", () => {
        displayCardPiles(discardPileContainer, discardPileArray);
});
drawPileImg.addEventListener("mouseout", () => {
        removeCardPiles(drawPileContainer);
        drawPileArray = drawPileArray.toSorted(() => 0.5 - Math.random());
});
discardPileImg.addEventListener("mouseout", () => {
        removeCardPiles(discardPileContainer);
});

/*
PLAYER SECTION
*/
// PLAYER AND UI
const playerDiv = document.querySelector("#player-div");
const topBarHealthNumber = document.querySelector("#top-bar-health-number");
const playerMaxHealth = document.querySelector("#player-max-health");
const playerAether = document.querySelector("#top-bar-aether-number");
const currentMana = document.querySelector("#current-mana");
const endTurnButton = document.querySelector("#end-turn-button");
// BUFFS AND DEBUFFS
const playerBlockImg = document.querySelector("#block-img");
const playerBlockNumber = document.querySelector("#block-img-number");
const playerEnergizeImg = document.querySelector("#player-energize-img");
const playerEnergizeNumber = document.querySelector("#player-energize-number");
const playerThornsImg = document.querySelector("#player-thorns-img");
const playerRegenNumber = document.querySelector("#player-regen-number");
const playerRegenImg = document.querySelector("#player-regen-img");
const playerBloodNumber = document.querySelector("#player-blood-number");
const playerBloodImg = document.querySelector("#player-blood-img");
const playerTidalImbuementImg = document.querySelector("#player-tidal-imbuement-img");
const playerBurnNumber = document.querySelector("#player-burn-number");
const playerBurnImg = document.querySelector("#player-burn-img");
const playerWindsweptImg = document.querySelector("#player-windswept-img");
const playerFrostbiteImg = document.querySelector("#player-frostbite-img");
const playerBurnDiv = document.querySelector("#player-burn-div");
const playerEnergizeDiv = document.querySelector("#player-energize-div");
const playerRegenDiv = document.querySelector("#player-regen-div");
const playerBloodDiv = document.querySelector("#player-blood-div");
const playerThornsDiv = document.querySelector("#player-thorns-div");
const playerImgText = document.querySelectorAll(".player-img-text");
function addActionText(div, text) {                
        div.addEventListener("mouseover", () => {
                displayFlex(text);
        });
        div.addEventListener("mouseout", () => {
                displayNone(text);
        });
}
addActionText(playerEnergizeDiv, playerImgText[0]);
addActionText(playerRegenDiv, playerImgText[1]);
addActionText(playerBloodDiv, playerImgText[2]);
addActionText(playerThornsDiv, playerImgText[3]);
addActionText(playerFrostbiteImg, playerImgText[4]);
addActionText(playerWindsweptImg, playerImgText[5]);
addActionText(playerBurnDiv, playerImgText[6]);

let frostbitten = false;
// TRACK WHEN END TURN BUTTON HAS BEEN CLICKED
endTurnButton.addEventListener("click", endTurn);
// CARD FUNCTIONS WHEN CARD IS PLAYED
function spendMana(manaCost) {
        currentMana.innerText -= manaCost;
}
function damageEnemy(damage, enemy) {
        // DAMGE ALL ENEMIES IF SNOWFALL ELIXER HAS BEEN PLAYED
        if (snowfallElixir) {
                damageAllEnemies(damage);
                return;
        }
        if (liquidLightning) {
                damage += liquidLightning.length * 5;
        } else if (liquidLightningUpgrade) {
                damage += liquidLightningUpgrade * 7;
        }
        if (iceSpear && enemyFrostbite[enemy]) {
                damage += 4;
        }
        // IF ATTACK DEBUFF IS ACTIVE, CUT DAMAGE IN HALF
        if (playerWindswept) {
                damage = Math.floor(damage * .50);
        }
        if (tidalImbuement) {
                damage += 10;
                tidalImbuement = false;
                displayNone(playerTidalImbuementImg);
        }
        if (playerBloodNumber.innerText > 0) {
                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + Math.floor((damage * .21));
                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + Math.floor((damage * .21));
                healthGainedThisFight += Math.floor((damage * .21));
                healthRestoredTotal += Math.floor((damage * .21));
        }
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
        // CHECK FOR ENEMY THORNS DAMAGE
        if (playerBlockNumber.innerText <= 0) {
                playerCurrentHealth.innerText -= parseFloat(enemyThornsNumber[enemy].innerText)
                topBarHealthNumber.innerText -= parseFloat(enemyThornsNumber[enemy].innerText)
        } else if (playerBlockNumber.innerText <= parseFloat(enemyThornsNumber[enemy].innerText)) {
                playerCurrentHealth.innerText -= parseFloat(enemyThornsNumber[enemy].innerText) - parseFloat(playerBlockNumber.innerText);
                topBarHealthNumber.innerText -= parseFloat(enemyThornsNumber[enemy].innerText) - parseFloat(playerBlockNumber.innerText);
                playerBlockNumber.innerText = 0;
        } else {
                playerBlockNumber.innerText -= parseFloat(enemyThornsNumber[enemy].innerText);
        }          
        checkHealth();
        // IF ENEMY IS DEAD, DELETE THEM
        checkIfEnemyDead();
        damageThisTurn += damage;
}
function damageAllEnemies(damage) {
        for (let i = 0; i < numberOfEnemies; i++) {
                if (enemyIsDead[i] === false && iceSpear && enemyFrostbite[i]) {
                        damageEnemy(4, i);
                }
        }
        if (liquidLightning.length > 0) {
                damage += 5;
        } else if (liquidLightningUpgrade.length > 0) {
                damage += 7;
        }
        if (playerWindswept) {
                damage = Math.floor(damage * .50);
        }
        if (tidalImbuement) {
                damage += 10;
        }
        for (let i = 0; i < numberOfEnemies; i++) {
                if (enemyIsDead[i] === false) {
                        if (playerBloodNumber.innerText > 0) {
                                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + Math.floor((damage * .21));
                                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + Math.floor((damage * .21));
                                healthGainedThisFight += Math.floor((damage * .21));
                                healthRestoredTotal += Math.floor((damage * .21));
                        }
                        // CHECK ARMOR
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
                        // CHECK THORNS 
                        if (playerBlockNumber.innerText <= 0) {
                                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) - parseFloat(enemyThornsNumber[i].innerText);
                                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) - parseFloat(enemyThornsNumber[i].innerText);                
                        } else if (playerBlockNumber.innerText <= parseFloat(enemyThornsNumber[i].innerText)) {
                                playerCurrentHealth.innerText =  parseFloat(playerCurrentHealth.innerText) - (parseFloat(enemyThornsNumber[i].innerText) - parseFloat(playerBlockNumber.innerText));
                                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) - (parseFloat(enemyThornsNumber[i].innerText) - parseFloat(playerBlockNumber.innerText));
                                playerBlockNumber.innerText = 0;
                        } else {
                                playerBlockNumber.innerText = parseFloat(playerBlockNumber.innerText) - parseFloat(enemyThornsNumber[i].innerText);
                        }          
                }
                checkHealth();
                checkIfEnemyDead();
                damageThisTurn += damage;
        }
        tidalImbuement = false;
        displayNone(playerTidalImbuementImg);
}
function inflictWindswept(enemy) {
        if (enemyWindswept[enemy] === false) {
                enemyWindswept[enemy] = true;
                displayBlock(enemyWindsweptImg[enemy]);
                if (stratus) {
                        enemyCurrentHealth[enemy].innerText = parseFloat(enemyCurrentHealth[enemy].innerText) -  Math.floor(enemyAttackActionNumber[enemy].innerText * .25);
                }
                enemyAttackActionNumber[enemy].innerText = Math.floor(enemyAttackActionNumber[enemy].innerText * .50);    
                enemyBurnActionNumber[enemy].innerText = Math.floor(enemyBurnActionNumber[enemy].innerText * .50);
                windsweptTotal++;
        }
}
function inflictFrostbite(enemy) {
        if (snowfallElixir) {
                inflictAllFrostbite();
                return;
        }
        if (enemyFrostbite[enemy] === false) {
                if (iceEmpower1) {
                        gainBlock(4);
                        blockTotal += 4;
                }
                if (frostHeart) {
                        if (enemyBlockNumber[enemy].innerText > 0) {
                                enemyBlockNumber[enemy].innerText = parseFloat(enemyBlockNumber[enemy].innerText) - 1;
                        }
                        if (enemyRegenNumber[enemy].innerText > 0) {
                                enemyRegenNumber[enemy].innerText = parseFloat(enemyRegenNumber[enemy].innerText) - 1;
                        }
                        if (enemyBloodNumber[enemy].innerText > 0) {
                                enemyBloodNumber[enemy].innerText = parseFloat(enemyBloodNumber[enemy].innerText) - 1;
                        }
                        if (enemyThornsNumber[enemy].innerText > 0) {
                                enemyThornsNumber[enemy].innerText = parseFloat(enemyThornsNumber[enemy].innerText) - 1;
                        }
                }
                enemyFrostbite[enemy] = true;
                enemyBlockActionNumber[enemy].innerText = Math.floor(enemyBlockActionNumber[enemy].innerText * .50);  
                enemyRegenActionNumber[enemy].innerText = Math.floor(enemyRegenActionNumber[enemy].innerText * .50);  
                enemyBloodActionNumber[enemy].innerText = Math.floor(enemyBloodActionNumber[enemy].innerText * .50);  
                enemyThornsActionNumber[enemy].innerText = Math.floor(enemyThornsActionNumber[enemy].innerText * .50);  
                displayBlock(enemyFrostbiteImg[enemy]);
                frostbiteTotal++;
        }
}
function inflictAllFrostbite() {
        for (let i = 0; i < numberOfEnemies; i++) {
                if (enemyIsDead[i] === false && enemyFrostbite[i] === false) {
                        if (iceEmpower1) {
                                gainBlock(4);
                                blockTotal += 4;
                        }
                        if (frostHeart) {
                                if (enemyBlockNumber[i].innerText > 0) {
                                        enemyBlockNumber[i].innerText = parseFloat(enemyBlockNumber[i].innerText) - 1;
                                        if (enemyBlockNumber[i].innerText == 0) {
                                                displayNone(enemyBlockImg[i], enemyBlockNumber[i]);
                                        }
                                }
                                if (enemyRegenNumber[i].innerText > 0) {
                                        enemyRegenNumber[i].innerText = parseFloat(enemyRegenNumber[i].innerText) - 1;
                                        if (enemyRegenNumber[i].innerText == 0) {
                                                displayNone(enemyRegenImg[i], enemyRegenNumber[i]);
                                        }
                                }
                                if (enemyBloodNumber[i].innerText > 0) {
                                        enemyBloodNumber[i].innerText = parseFloat(enemyBloodNumber[i].innerText) - 1;
                                        if (enemyBloodNumber[i].innerText == 0) {
                                                displayNone(enemyBloodImg[i], enemyBloodNumber[i]);
                                        }
                                }
                                if (enemyThornsNumber[i].innerText > 0) {
                                        enemyThornsNumber[i].innerText = parseFloat(enemyThornsNumber[i].innerText) - 1;
                                        if (enemyThornsNumber[i].innerText == 0) {
                                                displayNone(enemyThornsImg[i], enemyThornsNumber[i]);
                                        }
                                }
                        }
                        enemyFrostbite[i] = true;
                        enemyBlockActionNumber[i].innerText = Math.floor(enemyBlockActionNumber[i].innerText * .50);  
                        enemyRegenActionNumber[i].innerText = Math.floor(enemyRegenActionNumber[i].innerText * .50);  
                        enemyBloodActionNumber[i].innerText = Math.floor(enemyBloodActionNumber[i].innerText * .50);  
                        enemyThornsActionNumber[i].innerText = Math.floor(enemyThornsActionNumber[i].innerText * .50);  
                        displayBlock(enemyFrostbiteImg[i]);  
                        frostbiteTotal++;
                }
        }
}
let [enemiesKilled, elitesKilled, bossesKilled, burnTotal, manaEnergized, frostbiteTotal, windsweptTotal, healthRestoredTotal, blockTotal, thornsTotal] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function checkHealth() {
        if (parseFloat(playerCurrentHealth.innerText) > parseFloat(playerMaxHealth.innerText))  {
                playerCurrentHealth.innerText = playerMaxHealth.innerText;
                topBarHealthNumber.innerText = playerMaxHealth.innerText;
        }
        for (let i = 0; i < numberOfEnemies.length; i++) {
                if (enemyIsDead[i] === false) {
                        if (parseFloat(enemyCurrentHealth[i].innerText) > parseFloat(enemyMaxHealth[i].innerText))  {
                                enemyCurrentHealth[i].innerText = enemyMaxHealth[i].innerText;
                        }
                }
        }
        if (parseFloat(playerCurrentHealth.innerText) <= 0)  {
                const deathScreenContainer = document.querySelector("#death-screen-container");
                arena.classList.add("dim");
                arena.style = "position: absolute";
                displayFlex(deathScreenContainer);
                displayBlock(arena);
                displayNone(handContainer);
                deathScreenContainer.innerHTML = `
                <div id="death-screen">
                        <h1 style="color: red">You Died!</h1>
                        <p>Enemies Killed:<span>${enemiesKilled}</span></p>
                        <p>Elites Killed:<span>${elitesKilled}</span></p>
                        <p>Bosses Killed:<span>${bossesKilled}</span></p>
                        <p>Burn Inflicted:<span>${burnTotal}</span></p>
                        <p>Mana Energized:<span>${manaEnergized}</span></p>
                        <p>Frostbite Inflicted:<span>${frostbiteTotal}</span></p>
                        <p>Windswept Inflicted:<span>${windsweptTotal}</span></p>
                        <p>Health Restored:<span>${healthRestoredTotal}</span></p>
                        <p>Block Gained:<span>${blockTotal}</span></p>
                        <p>Thorns Gained:<span>${thornsTotal}</span></p>
                        <button id="play-again-button">Play Again</button>
                </div>`
                const playAgainButton = document.querySelector("#play-again-button");
                playAgainButton.addEventListener("click", () => {
                        location.reload();
                });
        }
}
function playerHeal(amount) {
        playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + amount;
        topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + amount;
        healthGainedThisFight += (amount);
        healthRestoredTotal += amount;
        checkHealth();
}
function gainEnergize (amount) {
        if (playerFrostbite) {
                amount = Math.floor(amount * .5);
        }
        playerEnergizeNumber.innerText = parseFloat(playerEnergizeNumber.innerText) + amount;
        displayBlock(playerEnergizeImg, playerEnergizeNumber);
        manaEnergized += amount;
}
function gainBlock(blockAmount) {
        if (terrasBlessing.length > 0) {
                blockAmount += terrasBlessing.length * 5;
        }
        if (frostbitten && playerFrostbite) {
                blockAmount = Math.floor(blockAmount * 2);
        } else if (playerFrostbite) {
                blockAmount = Math.floor(blockAmount * .50);
        }
        playerBlockNumber.innerText = parseFloat(playerBlockNumber.innerText) + blockAmount;
        displayBlock(playerBlockImg, playerBlockNumber);
        blockTotal += blockAmount;
}
function gainThorns(amount) {
        if (terrasBlessing.length > 0) {
                amount += terrasBlessing.length;
        }
        if (playerFrostbite) {
                amount = Math.floor(amount * .5);
        }
        playerThornsNumber.innerText = parseFloat(playerThornsNumber.innerText) + amount;
        displayBlock(playerThornsNumber, playerThornsImg);
        thornsTotal += amount;
}
function burnEnemy(burn, enemy) {
        if (essenceOfEmber.length > 0) {
                burn += essenceOfEmber.length * 2;
        } else if (essenceOfEmberUpgrade.length > 0) {
                burn += essenceOfEmberUpgrade.length * 4;
        }
        if (eternalFlameTracking[enemy]) {
                burn = Math.floor(burn * 1.5);
                eternalFlameTracking[enemy] = false;
        }
        if (eternalFlame) {
                eternalFlameTracking[enemy] = true;
        }
        if (playerWindswept) {
                burn *= .5;
        }
        if (ringOfFire) {
                for (let i = 0; i < numberOfEnemies; i++) {
                        if (enemyIsDead[i] === false) {
                                enemyBurnNumber[i].innerText = parseFloat(enemyBurnNumber[i].innerText) + Math.floor(burn / 2);
                                displayBlock(enemyBurnImg[i], enemyBurnNumber[i]);
                                enemyBurnNumber[enemy].innerText = parseFloat(enemyBurnNumber[i].innerText) - Math.floor(burn / 2);
                        }
                }
        }
        enemyBurnNumber[enemy].innerText = parseFloat(enemyBurnNumber[enemy].innerText) + burn;
        displayBlock(enemyBurnImg[enemy], enemyBurnNumber[enemy]);
        burnTotal += burn;
}
function burnAllEnemies(burn) {
        if (essenceOfEmber) {
                burn += 2;
        } else if (essenceOfEmberUpgrade) {
                burn += 4;
        }
        for (let i = 0; i < numberOfEnemies; i++) {
                if (enemyIsDead[i] === false) {
                        if (eternalFlameTracking[i]) {
                                burn = Math.floor(burn * 1.5);
                                eternalFlameTracking[i] = false;
                        }
                        if (eternalFlame) {
                                eternalFlameTracking[i] = true;
                        }
                        enemyBurnNumber[i].innerText = parseFloat(enemyBurnNumber[i].innerText) + burn;
                        displayBlock(enemyBurnImg[i], enemyBurnNumber[i]);  
                        burnTotal += burn;
                }      
        }
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
function checkPlayerEnergize() {
        currentMana.innerText = parseFloat(currentMana.innerText) + parseFloat(playerEnergizeNumber.innerText);
        playerEnergizeNumber.innerText = 0;
        displayNone(playerEnergizeImg, playerEnergizeNumber);
}
function checkRegenHeal() {
        if (playerRegenNumber.innerText >= 1) {
                healthGainedThisFight += parseFloat(playerRegenNumber.innerText);
                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + parseFloat(playerRegenNumber.innerText);
                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + parseFloat(playerRegenNumber.innerText);
                healthRestoredTotal += parseFloat(playerRegenNumber.innerText);
                playerRegenNumber.innerText--;
        }
        if (playerRegenNumber.innerText == 0) {
                displayNone(playerRegenImg, playerRegenNumber);
        }
        checkHealth();
}
function checkBloodSiphon() {
        if (playerBloodNumber.innerText >= 1) {
                playerBloodNumber.innerText--;    
        }
        if (playerBloodNumber.innerText == 0) {
                displayNone(playerBloodImg, playerBloodNumber);
        }
}
function updateCardText() {
        getWindsweptDamage();
        document.querySelectorAll(".winds-card-text").forEach((i) => {
                i.innerText = `Deal ${windsOfChange} damage. All Winds of Change gain +3 damage or +5 damage if enemy is windswept.`;  
        });
        document.querySelectorAll(".electric-card-text").forEach((i) => {
                i.innerText = `Deal 2 damage per 5 health you currently have. Damage: ${Math.floor(2 * playerCurrentHealth.innerText / 5)}`;  
        });
        document.querySelectorAll(".storm-card-text").forEach((i) => {
                if (playerWindswept) {
                        i.innerText = `Deal 25% of the damage you've dealt this turn to an enemy. Damage: ${Math.floor(damageThisTurn / 4)}`;
                } else {
                        i.innerText = `Deal 50% of the damage you've dealt this turn to an enemy. Damage: ${Math.floor(damageThisTurn / 2)}`;
                }
        });
        document.querySelectorAll(".downpour-card-text").forEach((i) => {
                if (playerWindswept) {
                        i.innerText = `Deal damage to all enemies equal to how much you've healed this fight. Damage: ${healthGainedThisFight / 2}`;
                } else {
                        i.innerText = `Deal damage to all enemies equal to how much you've healed this fight. Damage: ${healthGainedThisFight}`;
                }
        });
}
function checkGaiasEmbrace() {
        if (gaiasEmbrace.length > 0) {
                playerHeal(gaiasEmbrace.length * 3);
                gainBlock(gaiasEmbrace.length * 3);
                blockTotal += gaiasEmbrace.length * 3;
                if (playerFrostbite && frostbitten) {
                        gainBlock(gaiasEmbrace.length * 3);
                        blockTotal += gaiasEmbrace.length * 3;
                }
        }
        if (gaiasEmbraceUpgrade.length > 0) {
                playerHeal(gaiasEmbraceUpgrade.length * 5);
                gainBlock(gaiasEmbraceUpgrade.length * 5);
                blockTotal += gaiasEmbrace.length * 5;
                if (playerFrostbite && frostbitten) {
                        gainBlock(gaiasEmbraceUpgrade.length * 5);
                        blockTotal += gaiasEmbrace.length * 5;
                }
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
                attackDamageLow: 15,
                attackDamageHigh: 18,
        },
        {
                name: "Leprechaun",
                baseHealth: 40,
                img: "imgs/enemy-leprechaun.png",
                attackChance: 5,
                healChance: 10,
                //stealChance: ,
                attackDamageLow: 8,
                attackDamageHigh: 11,
                healAmountLow: 16,
                healAmountHigh: 20,
        },
        {
                name: "Fire Fae",
                baseHealth: 40,
                img: "imgs/enemy-fire-fae.png",
                attackChance: 2,
                healChance: 4,
                burnChance: 10,
                attackDamageLow: 8,
                attackDamageHigh: 10,
                healAmountLow: 10,
                healAmountHigh: 12,
                burnAmountLow: 4,
                burnAmountHigh: 5,
        },
        {
                name: "Lightning Fae",
                baseHealth: 40,
                img: "imgs/enemy-lightning-fae.png",
                attackChance: 9,
                healChance: 10,
                attackDamageLow: 15,
                attackDamageHigh: 20,
                healAmountLow: 18,
                healAmountHigh: 20,
        },
        {
                name: "Ice Fae",
                baseHealth: 60,
                img: "imgs/enemy-ice-fae.png",
                attackChance: 2,
                blockChance: 4,
                frostbiteChance: 10,
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
                windsweptChance: 10,
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
                attackChance: 3,
                burnChance: 10,
                attackDamageLow: 20,
                attackDamageHigh: 24,
                burnAmountLow: 5,
                burnAmountHigh: 7,
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
                img: "imgs/enemy-elite-water-unicorn.png",
                attackChance: 2,
                regenChance: 6,
                thornsChance: 10,
                attackDamageLow: 18,
                attackDamageHigh: 20,
                regenAmountLow: 6,
                regenAmountHigh: 8,
                thornsAmountLow: 3,
                thornsAmountHigh: 5,
        },
        {
                name: "Druid",
                baseHealth: 200,
                img: "imgs/enemy-elite-druid.png",
                attackChance: 1,
                //damageincreasechance
                bloodChance: 10,
                attackDamageLow: 24,
                attackDamageHigh: 26,
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
                        <div class="attack-img-text">
                                <h4 class="relic-img-text-h4">Attack</h4>
                                <p class="relic-img-text-p">Take this much damage at the end of the turn.</p>
                        </div>
                        <p class="enemy-attack-action-number"></p>
                        <img class="enemy-attack-action-img enemy-action-img" src="imgs/attack-icon.png">                  
                    </div>
                    <div class="enemy-block-action-div">
                        <div class="block-img-text">
                                <h4 class="relic-img-text-h4">Block</h4>
                                <p class="relic-img-text-p">Gain a shield that blocks damage.</p>
                        </div>
                        <p class="enemy-block-action-number"></p>
                        <img class="enemy-block-action-img enemy-action-img" src="imgs/block-icon.png">
                    </div>
                    <div class="enemy-heal-action-div">
                        <div class="heal-img-text">
                                <h4 class="relic-img-text-h4">Heal</h4>
                                <p class="relic-img-text-p">Regain this much health at the end of the turn.</p>
                        </div>
                        <p class="enemy-heal-action-number"></p>
                        <img class="enemy-heal-action-img enemy-action-img" src="imgs/heal-icon.png">
                    </div>
                    <div class="enemy-burn-action-div">
                        <div class="burn-img-text">
                                <h4 class="relic-img-text-h4">Burn</h4>
                                <p class="relic-img-text-p">Take this much damage at the end of each turn. Decreases by one each turn.</p>
                        </div>
                        <p class="enemy-burn-action-number"></p>
                        <img class="enemy-burn-action-img enemy-action-img" src="imgs/burn-icon.png">
                    </div>
                    <div class="enemy-regen-action-div">
                        <div class="regen-img-text">
                                <h4 class="relic-img-text-h4">Regeneration</h4>
                                <p class="relic-img-text-p">Heal this much at the end of each turn. Decreases by one at the end of each turn.</p>
                        </div>
                        <p class="enemy-regen-action-number"></p>
                        <img class="enemy-regen-action-img enemy-action-img" src="imgs/regen-icon.png">
                    </div>
                    <div class="enemy-blood-action-div">
                        <div class="blood-img-text">
                                <h4 class="relic-img-text-h4">Blood Siphon</h4>
                                <p class="relic-img-text-p">Heal for 20% of damage done. Decreases by one at the end of each turn.</p>
                        </div>
                        <p class="enemy-blood-action-number"></p>
                        <img class="enemy-blood-action-img enemy-action-img" src="imgs/blood-icon.png">
                    </div>
                    <div class="enemy-thorns-action-div">
                        <div class="thorns-img-text">
                                <h4 class="relic-img-text-h4">Thorns</h4>
                                <p class="relic-img-text-p">Take this much damage when attacking.</p>
                        </div>
                        <p class="enemy-thorns-action-number"></p>
                        <img class="enemy-thorns-action-img enemy-action-img" src="imgs/thorns-icon.png">
                    </div>
                    <div class="enemy-frostbite-action-div">
                        <div class="frostbite-img-text">
                                <h4 class="relic-img-text-h4">Frostbite</h4>
                                <p class="relic-img-text-p">Reduce all buffs gained by 50%.</p>
                        </div>
                        <img class="enemy-frostbite-action-img enemy-action-img" src="imgs/frostbite-icon.png">
                   </div>
                   <div class="enemy-windswept-action-div">
                        <div class="windswept-img-text">
                                <h4 class="relic-img-text-h4">Windswept</h4>
                                <p class="relic-img-text-p">Reduce all attack and burn by 50%.</p>
                        </div>
                    <img class="enemy-windswept-action-img enemy-action-img" src="imgs/windswept-icon.png">
                   </div>
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
                        <div class="burn-img-debuff">
                                <h4 class="relic-img-text-h4">Burn</h4>
                                <p class="relic-img-text-p">Take this much damage at the end of each turn. Decreases by one each turn.</p>
                        </div>
                        <img class="enemy-burn-img" src="imgs/burn-icon.png">
                        <p class="enemy-burn-number">0</p>
                    </div>
                    <div class="enemy-windswept-div">
                        <div class="windswept-img-debuff">
                                <h4 class="relic-img-text-h4">Windswept</h4>
                                <p class="relic-img-text-p">Reduces damage and burn by 50%</p>
                        </div>
                    <img class="enemy-windswept-img" src="imgs/windswept-icon.png">
                    </div>
                    <div class="enemy-frostbite-div">
                        <div class="frostbite-img-debuff">
                                <h4 class="relic-img-text-h4">Frostbite</h4>
                                <p class="relic-img-text-p">Reduces buffs gained by 50%</p>
                        </div>
                        <img class="enemy-frostbite-img" src="imgs/frostbite-icon.png"> 
                    </div>
                </div>  
            </div>`
            const attackImgText = document.querySelectorAll(".attack-img-text");
            const enemyAttackActionDiv = document.querySelectorAll(".enemy-attack-action-div");
            const blockImgText = document.querySelectorAll(".block-img-text");
            const enemyBlockActionDiv = document.querySelectorAll(".enemy-block-action-div");
            const healImgText = document.querySelectorAll(".heal-img-text");
            const enemyHealActionDiv = document.querySelectorAll(".enemy-heal-action-div");
            const burnImgText = document.querySelectorAll(".burn-img-text");
            const burnImgDebuff = document.querySelectorAll(".burn-img-debuff");
            const enemyBurnActionDiv = document.querySelectorAll(".enemy-burn-action-div");
            const enemyBurnDiv = document.querySelectorAll(".enemy-burn-div");
            const regenImgText = document.querySelectorAll(".regen-img-text");
            const enemyRegenActionDiv = document.querySelectorAll(".enemy-regen-action-div");
            const bloodImgText = document.querySelectorAll(".blood-img-text");
            const enemyBloodActionDiv = document.querySelectorAll(".enemy-blood-action-div");
            const thornsImgText = document.querySelectorAll(".thorns-img-text");
            const enemyThornsActionDiv = document.querySelectorAll(".enemy-thorns-action-div");
            const frostbiteImgText = document.querySelectorAll(".frostbite-img-text");
            const frostbiteImgDebuff = document.querySelectorAll(".frostbite-img-debuff");
            const enemyFrostbiteActionDiv = document.querySelectorAll(".enemy-frostbite-action-div");
            const enemyFrostbiteDiv = document.querySelectorAll(".enemy-frostbite-div");
            const windsweptImgText = document.querySelectorAll(".windswept-img-text");
            const windsweptImgDebuff = document.querySelectorAll(".windswept-img-debuff");
            const enemyWindsweptActionDiv = document.querySelectorAll(".enemy-windswept-action-div");
            const enemyWindsweptDiv = document.querySelectorAll(".enemy-windswept-div");
            function addEnemyActionText(actionDiv, text) {
                for (let i = 0; i < actionDiv.length; i++) {
                            actionDiv[i].addEventListener("mouseover", () => {
                                    displayFlex(text[i]);
                            });
                    }
                    for (let i = 0; i < actionDiv.length; i++) {
                            actionDiv[i].addEventListener("mouseout", () => {
                                    displayNone(text[i]);
                            });
                    }
            }
            addEnemyActionText(enemyAttackActionDiv, attackImgText);
            addEnemyActionText(enemyBlockActionDiv, blockImgText);
            addEnemyActionText(enemyHealActionDiv, healImgText);
            addEnemyActionText(enemyBurnActionDiv, burnImgText);
            addEnemyActionText(enemyBurnDiv, burnImgDebuff);
            addEnemyActionText(enemyRegenActionDiv, regenImgText);
            addEnemyActionText(enemyBloodActionDiv, bloodImgText);
            addEnemyActionText(enemyThornsActionDiv, thornsImgText);
            addEnemyActionText(enemyFrostbiteActionDiv, frostbiteImgText);
            addEnemyActionText(enemyFrostbiteDiv, frostbiteImgDebuff);
            addEnemyActionText(enemyWindsweptActionDiv, windsweptImgText);
            addEnemyActionText(enemyWindsweptDiv, windsweptImgDebuff);
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
        enemyImg = document.querySelectorAll(".enemy-img");
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
        enemyBuffDiv = document.querySelectorAll(".enemy-buffs");
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
        enemyDebuffDiv = document.querySelectorAll(".enemy-debuffs");
        enemyWindsweptImg = document.querySelectorAll(".enemy-windswept-img");
        enemyFrostbiteImg = document.querySelectorAll(".enemy-frostbite-img");
        enemyBurnImg = document.querySelectorAll(".enemy-burn-img");
        enemyBurnNumber = document.querySelectorAll(".enemy-burn-number");        
}
// ENEMY AND HEALTH
let enemy = document.querySelectorAll(".enemy-div");
let enemyImg = document.querySelectorAll(".enemy-img");
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
let enemyBuffDiv = document.querySelectorAll(".enemy-buffs");
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
let enemyDebuffDiv = document.querySelectorAll(".enemy-debuffs");
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
                if (vineBracelet) {
                        playerBlockNumber.innerText = 10
                } else {
                        playerBlockNumber.innerText = 0;        
                        displayNone(playerBlockNumber, playerBlockImg);
                }
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
                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + Math.ceil(enemyBurnNumber[index].innerText * .21);
        }
        if (parseFloat(enemyBurnNumber[index].innerText) >= enemyCurrentHealth[index].innerText) {
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
        // IF ALL ENEMIES ARE DEAD, SWITCH BACK TO MAP AND GET AETHER
        function allEnemiesDead() {
                playerAether.innerText = parseFloat(playerAether.innerText) + Math.ceil(30 + ((enemyLevel + 1) * 2.7));
                if (getEliteRelic) {
                        getRelic(1, 12);
                        elitesKilled++;
                        eliteMusic.pause();
                        eliteMusic.currentTime = 0;
                } else {
                        enemiesKilled++
                        encounterMusic.pause();
                        encounterMusic.currentTime = 0;
                }
                getRandomNewCards();
                return;
        }
       
        // IF ENEMY  IS DEAD, DELETE THEM
        for (let i = 0; i < numberOfEnemies; i++) {
                if (enemyIsDead[i] === false && enemyCurrentHealth[i].innerText <= 0) {
                        displayNone(enemyBurnImg[i], enemyBurnNumber[i], enemyHealth[i], enemyCurrentHealth[i], enemyBlockDiv[i], enemyActionDiv[i]);
                        enemy[i].classList.add("fade-out");
                        enemyIsDead[i] = true;
                        enemiesKilled++;
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
                } else if (actionChoice[eI] <= enemiesInformation[i].windsweptChance) {  
                        if (enemiesAlive > 1) {
                                // LOWER ATTACK
                                displayBlock(enemyWindsweptActionImg[eI]);        
                        } else {
                                // ATTACK
                                enemyRandomDamage[eI] = createRandomNumber(enemiesInformation[i].attackDamageLow, enemiesInformation[i].attackDamageHigh);
                                enemyAttackActionNumber[eI].innerText = enemyRandomDamage[eI];
                                displayBlock(enemyAttackActionDiv[eI], enemyAttackActionImg[eI], enemyAttackActionNumber[eI]);
                        }
                } else if (actionChoice[eI] <= enemiesInformation[i].frostbiteChance) {                        
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
        if (lightningInABottle) {
                currentMana.innerText = parseFloat(currentMana.innerText) + 4;
        } else {
                currentMana.innerText = 4;
        }
        checkPlayerBurn();
        displayNone(playerWindsweptImg, playerFrostbiteImg);
        playerWindswept = false;
        playerFrostbite = false;
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
                        } else if (actionChoice[eI] <= enemiesInformation[i].windsweptChance) {
                                if (enemiesAlive > 1) {
                                        // LOWER ATTACK
                                        playerWindswept = true;
                                        displayBlock(playerWindsweptImg);        
                                } else {
                                        // ATTACK
                                        damagePlayer(enemyRandomDamage[eI], eI);
                                }   
                        } else if (actionChoice[eI] <= enemiesInformation[i].frostbiteChance) {                        
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
                eternalFlameTracking[eI] = false;
                }
                eI++     
        });
        removeCardClicked();
        checkPlayerEnergize();
        checkRegenHeal();
        checkBloodSiphon();
        checkGaiasEmbrace();
        addCardsToHand();
        checkIfEnemyDead();
        updateCardText();
        if (numberOfEnemies === 1) {
                enemyAction(trackEnemies[0]);
        } else if (numberOfEnemies === 2) {
                enemyAction(trackEnemies[0], trackEnemies[1]);
        } else {
                enemyAction(trackEnemies[0], trackEnemies[1], trackEnemies[2]);
        }
        damageThisTurn = 0;
        airBubble = [];
        if (bloodAmulet) {
                playerBloodNumber.innerText = parseFloat(playerBloodNumber.innerText) + 1;
                displayBlock(playerBloodImg, playerBloodNumber);
                bloodAmulet = false;
        }
        checkHealth();
}
for (let i = 0; i < openingCards.length; i++) {
      addCardListeners(openingCards, i, i, 0);      
}