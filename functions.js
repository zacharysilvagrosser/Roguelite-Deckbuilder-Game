/* IDEAS
Second Map Hell Third Heaven diablo
Terra searching for two other gods destroying Terra. Search through hell then heaven after they ascend.
Talent tree after each fight
Implement animations
when viewing inventory have a sorter based on element type
! DIV
Personality type quiz that grants buff based on answer of what you value most
POTIONS: RED POTION: Increase burn by 1
         BLUE POTION
         COPY CARD

Create point system for balancing value eg. 1 mana = 13 damage, frostbite = .5 mana etc.
4 and 2 enemy encounters
Light and Dark based class has a light and dark meter based on your actions throughout the game

TO DO
Settings gear when hitting escape for music and sound volume
Probably change ice spear so you dont have to change card text
crop orbs in paint. Hover over orb to see what your gift does; add soundfx
ghost elite becomes opacity: .5 and unable to be attacked
King Spookly becomes hallowwood encounter, replace starting hand becomes heaven encounter

BUGS
///text not reseting after encounter
///blacksmith loads back to cards not his original text
death screen brings you to fae forest arena??
3 elites in hallow inifinit loop
///blacksmith music will be deleted with each new stage
ball lightning had tidal and windswept text said 17 card did 15 damage then it returned to 11 damage
///mana and end turn button need high z index because of hand container; when hovering over card increase card z index

*/
/*
GENERAL FUNCTIONS
*/
const beginningScreen = document.querySelector("#beginning-screen-container");
const startScreen = document.querySelector("#start-screen-container");
const startGame = document.querySelector("#start-game");
const tutorial = document.querySelector("#tutorial");
const options = document.querySelector("#options");
const optionsContainer = document.querySelector("#options-container");
const quitGame = document.querySelector("#quit-game");
const bottomAnchor = document.querySelector("#bottom-anchor");
const arrows = document.querySelectorAll(".arrow");
const boardHeader = document.querySelector("#board-header");
const musicSlider = document.querySelector("#music-slider");
const ambienceSlider = document.querySelector("#ambience-slider");
const soundFXSlider = document.querySelector("#soundfx-slider");
let allMusic = [];
let allAmbience = [];
const [fxPotion, fxFireball, fxCascadingFlames, fxStaticCharge, fxChainLightning, fxFrostbolt, fxFrostFingers, fxTornado, fxGaleForce, fxBloodCocoon, fxTidalImbuement, fxEarthBarrier, fxThornShield,
        fxFirefall, fxKindredSpirits, fxPhoenixFire, fxStormblessed, fxBallLightning, fxConduit, fxIceNova, fxFrostbitten, fxRayOfIce, fxWindsOfChange, fxWindwalk, fxGust, fxSanguineSpring, fxMistborn, fxTsunami,
        fxEarthShatter, fxWeaveOfThorns, fxVineWhip, fxForestFire, fxFrostfireFusion, fxFanTheFlames, fxCauterize, fxMagma, fxDeepFreeze, fxHurricane, fxElectricCurrent, fxQuakingJolt, fxFlurry, fxLiquify,
        fxFrozenTundra, fxAirBubbles, fxRockOrbit, fxCelestialAttunement, fxEnemyAttack, fxEnemyBlock, fxDragonRoar, fxDragonGrowls, fxGiantFootsteps, fxGiantGroans, fxWizardCast, fxSpellSuccess, fxSpellFail] =
        [new Audio("audio/potion.wav"), new Audio("audio/fireball.wav"), new Audio("audio/cascadingFlames.wav"), new Audio("audio/staticCharge.wav"), new Audio("audio/conduit.wav"),
        new Audio("audio/frostbolt.wav"), new Audio("audio/frostFingers.wav"), new Audio("audio/tornado.wav"), new Audio("audio/galeForce.wav"), new Audio("audio/bloodCocoon.wav"),
        new Audio("audio/tidalImbuement.wav"), new Audio("audio/earthBarrier.wav"), new Audio("audio/thornShield.wav"), new Audio("audio/firefall.wav"), new Audio("audio/kindredSpirits.wav"),
        new Audio("audio/phoenixFire.wav"),new Audio("audio/stormblessed.wav"), new Audio("audio/ballLightning.wav"), new Audio("audio/chainLightning.wav"), new Audio("audio/iceNova.wav"),
        new Audio("audio/frostbitten.wav"), new Audio("audio/rayOfIce.wav"), new Audio("audio/windsOfChange.wav"), new Audio("audio/windwalk.wav"), new Audio("audio/gust.wav"), new Audio("audio/sanguineSpring.wav"),
        new Audio("audio/mistborn.wav"), new Audio("audio/tsunami.wav"), new Audio("audio/earthShatter.wav"), new Audio("audio/weaveOfThorns.wav"), new Audio("audio/vineWhip.wav"),
        new Audio("audio/forestFire.wav"), new Audio("audio/frostfireFusion.wav"), new Audio("audio/fanTheFlames.wav"), new Audio("audio/cauterize.wav"), new Audio("audio/magma.wav"),
        new Audio("audio/deepFreeze.wav"), new Audio("audio/hurricane.wav"), new Audio("audio/electricCurrent.wav"), new Audio("audio/quakingJolt.wav"), new Audio("audio/flurry.wav"),
        new Audio("audio/liquify.wav"), new Audio("audio/frozenTundra.wav"), new Audio("audio/airBubbles.wav"), new Audio("audio/rockOrbit.wav"), new Audio("audio/celestial-attunement.wav"),
        new Audio("audio/enemyAttack.wav"), new Audio("audio/enemyBlock.wav"), new Audio("audio/dragonRoar.wav"), new Audio("audio/dragonGrowls.wav"), new Audio("audio/giantFootsteps.wav"),
        new Audio("audio/giantGroans.wav"), new Audio("audio/wizard-cast.wav"), new Audio("audio/spell-success.wav"), new Audio("audio/spell-fail.wav")];
const allSoundFX = [fxPotion, fxFireball, fxCascadingFlames, fxStaticCharge, fxChainLightning, fxFrostbolt, fxFrostFingers, fxTornado, fxGaleForce, fxBloodCocoon, fxTidalImbuement, fxEarthBarrier, fxThornShield,
        fxFirefall, fxKindredSpirits, fxPhoenixFire, fxStormblessed, fxBallLightning, fxConduit, fxIceNova, fxFrostbitten, fxRayOfIce,fxWindsOfChange, fxWindwalk, fxGust, fxSanguineSpring, fxMistborn, fxTsunami,
        fxEarthShatter, fxWeaveOfThorns, fxVineWhip, fxForestFire, fxFrostfireFusion, fxFanTheFlames, fxCauterize, fxMagma, fxDeepFreeze, fxHurricane, fxElectricCurrent, fxQuakingJolt, fxFlurry, fxLiquify,
        fxFrozenTundra, fxAirBubbles, fxRockOrbit, fxCelestialAttunement, fxEnemyAttack, fxEnemyBlock, fxDragonRoar, fxDragonGrowls, fxGiantFootsteps, fxGiantGroans, fxWizardCast, fxSpellSuccess, fxSpellFail];
function switchMusic() {
        allMusic.forEach(i => {
                i.pause();
        });
        for (let i = 0; i < arguments.length; i++) {
                if (!allMusic.includes(arguments[i])) {
                        allMusic.push(arguments[i]);
                }
                if (arguments[i] !== allMusic[mapMusicIndex]) {
                        arguments[i].currentTime = 0;
                } else {
                        if ((faeForest && (!waterGift || !earthGift)) || (hallowwood && (!iceGift || !airGift)) || (!faeForest && !hallowwood && (!fireGift || !lightningGift))) {
                                location.href = "#bottom-anchor";
                        }
                }
                arguments[i].play();
                arguments[i].loop = true;
        }
        allMusic.forEach(i => {
                i.volume = musicSlider.value;
        });
        allSoundFX.forEach(i => {
                i.volume = soundFXSlider.value;
        });
}
function switchAmbience() {
        allAmbience.forEach(i => {
                i.pause();
        });
        for (let i = 0; i < arguments.length; i++) {
                if (!allAmbience.includes(arguments[i])) {
                        allAmbience.push(arguments[i]);
                }
                arguments[i].play();
                arguments[i].loop = true;
        }
        allAmbience.forEach(i => {
                i.volume = ambienceSlider.value;
        });
}
function playSoundFX() {
        for (let i = 0; i < arguments.length; i++) {
                if (!allSoundFX.includes(arguments[i])) {
                        allSoundFX.push(arguments[i]);
                }
                arguments[i].currentTime = 0;
                arguments[i].play();
        }
}
window.addEventListener("keydown", () => {
        displayNone(beginningScreen);
        displayFlex(startScreen);
        const startScreenMusic = new Audio("audio/start-screen-music.wav");
        //switchMusic(startScreenMusic);
}, {once: true});
let [easyDifficulty, normalDifficulty, hardDifficulty] = [false, false, false];
let mapMusicIndex;
startGame.addEventListener("click", () => {
        function start() {
                displayBlock(map);
                displayFlex(boardHeader);
                displayNone(startScreen, document.querySelector("#difficulty-container"));
                const mapMusic = new Audio("audio/map-music.wav");
                //switchMusic(mapMusic);
                mapMusicIndex = allMusic.indexOf(mapMusic);
                const forestAmbience = new Audio("audio/forest-ambience.wav");
                switchAmbience(forestAmbience);
                location.href = "#bottom-anchor";
        }
        displayFlex(document.querySelector("#difficulty-container"));
        document.querySelector("#easy").addEventListener("click", () => {
                start();
                easyDifficulty = true;
                playerAether.innerText = 200;
        });
        document.querySelector("#normal").addEventListener("click", () => {
                start();
                normalDifficulty = true;
                playerAether.innerText = 100;
        });
        document.querySelector("#hard").addEventListener("click", () => {
                start();
                hardDifficulty = true;
        });
});
startGame.addEventListener("mouseover", () => {
        displayBlock(arrows[0], arrows[1]);
});
startGame.addEventListener("mouseout", () => {
        displayNone(arrows[0], arrows[1]);
});
tutorial.addEventListener("click", () => {
        displayFlex(document.querySelector("#tutorial-container"));
        document.querySelector("#tutorial-exit").addEventListener("click", () => {
                displayNone(document.querySelector("#tutorial-container"));
        }, {once: true});
});
tutorial.addEventListener("mouseover", () => {
        displayBlock(arrows[2], arrows[3]);
});
tutorial.addEventListener("mouseout", () => {
        displayNone(arrows[2], arrows[3]);
});
document.querySelector("#options-screen-exit-button").addEventListener("click", () => {
        displayNone(optionsContainer);
});
window.addEventListener("keydown", e => {
        if (e.key === "Escape" && (optionsContainer.style.display == "" || optionsContainer.style.display == "none")) {
                displayFlex(optionsContainer);
                return;
        }
        if (e.key === "Escape" && optionsContainer.style.display == "flex") {
                displayNone(optionsContainer);
                return;
        }
});
options.addEventListener("click", () => {
        displayFlex(optionsContainer);
});
options.addEventListener("mouseover", () => {
        displayBlock(arrows[4], arrows[5]);
});
options.addEventListener("mouseout", () => {
        displayNone(arrows[4], arrows[5]);
});
musicSlider.addEventListener("input", () => {
        allMusic.forEach(i => {
                i.volume = musicSlider.value;
        });
});
ambienceSlider.addEventListener("input", () => {
        allAmbience.forEach(i => {
                i.volume = ambienceSlider.value;
        });
});
soundFXSlider.addEventListener("input", () => {
        allSoundFX.forEach(i => {
                i.volume = soundFXSlider.value;
        });
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
const L1T1 = () => {
        chooseLocationPath("L1T1");
};
location1Tiles1.addEventListener("click", L1T1);
const L1T2 = () => {
        chooseLocationPath("L1T2");
};
location1Tiles2.addEventListener("click", L1T2);
const L1T3 = () => {
        chooseLocationPath("L1T3");
};
location1Tiles3.addEventListener("click", L1T3);
const L2T1 = () => {
        chooseLocationPath("L2T1");
};
const L2T2 = () => {
        chooseLocationPath("L2T2");
};
const L2T3 = () => {
        chooseLocationPath("L2T3");
};
const L2T4 = () => {
        chooseLocationPath("L2T4");
};
const L3T1 = () => {
        chooseLocationPath("L3T1");
};
const L3T2 = () => {
        chooseLocationPath("L3T2");
};
const L3T3 = () => {
        chooseLocationPath("L3T3");
};
const L4T1 = () => {
        chooseLocationPath("L4T1");
};
const L4T2 = () => {
        chooseLocationPath("L4T2");
};
const L4T3 = () => {
        chooseLocationPath("L4T3");
};
const L4T4 = () => {
        chooseLocationPath("L4T4");
};
const L5T1 = () => {
        chooseLocationPath("L5T1");
};
const L5T2 = () => {
        chooseLocationPath("L5T2");
};
const L5T3 = () => {
        chooseLocationPath("L5T3");
};
const L6T1 = () => {
        chooseLocationPath("L6T1");
};
const L7T1 = () => {
        chooseLocationPath("L7T1");
};
const L7T2 = () => {
        chooseLocationPath("L7T2");
};
const L7T3 = () => {
        chooseLocationPath("L7T3");
};
const L8T1 = () => {
        chooseLocationPath("L8T1");
};
const L8T2 = () => {
        chooseLocationPath("L8T2");
};
const L8T3 = () => {
        chooseLocationPath("L8T3");
};
const L9T1 = () => {
        chooseLocationPath("L9T1");
};
const L9T2 = () => {
        chooseLocationPath("L9T2");
};
const L9T3 = () => {
        chooseLocationPath("L9T3");
};
const L9T4 = () => {
        chooseLocationPath("L9T3");
};
const L10T1 = () => {
        chooseLocationPath("L10T1");
};
const L10T2 = () => {
        chooseLocationPath("L10T2");
};
const L11T1 = () => {
        chooseLocationPath("L11T1");
};
location11Tiles1.addEventListener("click", L11T1);
let numberOfEnemies;
let enemyIsDead = [false, false, false];
function resetArena() {
        arena.classList.remove("dim");
        enemiesAreDead = false;
        for (i = 0; i < numberOfEnemies; i++) {
                enemyIsDead[i] = false;
                enemyFrostbite[i] = false;
                enemyWindswept[i] = false;
        }
        enemyLevel++;
        if (waterGift) {
                waterGiftTrigger = true;
                document.getElementById("water-orb-img").classList.add("water-glow");
        }
        if (earthGift) {
                earthGiftTrigger = true;
                document.getElementById("earth-orb-img").classList.add("earth-glow");
        }
        if (iceGift) {
                iceGiftTrigger = true;
                document.getElementById("ice-orb-img").classList.add("ice-glow");
        }
        if (airGift) {
                airGiftTrigger = true;
                document.getElementById("air-orb-img").classList.add("air-glow");
        }
        if (fireGift) {
                fireGiftTrigger = true;
                document.getElementById("fire-orb-img").classList.add("fire-glow");
        }
        if (lightningGift) {
                lightningGiftTrigger = true;
                document.getElementById("lightning-orb-img").classList.add("lightning-glow");
        }
        playerWindswept = false;
        playerFrostbite = false;
        playerBurnNumber.innerText = 0;
        displayNone(playerWindsweptImg, playerFrostbiteImg, playerBurnImg, playerBurnNumber, playerRegenImg, playerRegenNumber, playerThornsImg, playerThornsNumber,
                playerBloodImg, playerBloodNumber, playerBlockImg, playerBlockNumber);
        if (stormchaser) {
                currentMana.innerText = 5;
        } else {
                currentMana.innerText = 4;
        }
        if (thunderTalisman) {
                currentMana.innerText = parseFloat(currentMana.innerText) + 2;
        }
        playerThornsNumber.innerText = 0;
        playerBlockNumber.innerText = 0;
        playerRegenNumber.innerText = 0;
        playerBloodNumber.innerText = 0;
        frostbitten = false;
        console.log("HAND CONTAINER BEFORE: ", handContainer.childElementCount);
        console.log("POTION CARDS: ", potionCards);
        let potionLength = potionCards.length;
        for (let i = 0; i < potionLength; i++) {
                let spliceCard = potionCards.pop();
                console.log(spliceCard);
                displayFlex(spliceCard);
                drawPileArray.push(spliceCard);
                handContainer.appendChild(spliceCard);
        }
        console.log("HAND CONTAINER AFTER: ", handContainer.childElementCount);
        essenceOfEmber = [];
        essenceOfEmberUpgrade = [];
        liquidLightning = [];
        liquidLightningUpgrade = [];
        snowfallElixir = false;
        windsOfChange = 8;
        tidalImbuement = false;
        terrasBlessing = [];
        gaiasEmbrace = [];
        gaiasEmbraceUpgrade = [];
        if (!windrunner) {
                maxHandLength = 5;
        } else {
                maxHandLength = 6;
        }
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
        reshuffleCards();
        if (windDisc) {
                drawCards(maxHandLength + 1);
        } else {
                drawCards(maxHandLength);
        }
        removeCardClicked();
        for (let i = 0; i < drawPileArray.length; i++) {
                if (drawPileArray[i].classList.contains("card-clicked")) {
                        drawPileArray[i].classList.remove("card-clicked");
                }
        }
        if (stoneshaper) {
                playerBlockNumber.innerText = parseFloat(playerBlockNumber.innerText) + 50;
                displayBlock(playerBlockImg, playerBlockNumber);
        }
        enemyContainer.innerHTML = "";
}
let dontRepeatEncounter = [];
let encounterMusicTrigger = false;
let encounterMusicIndex;
function encounter() {
        if (!encounterMusicTrigger) {
                if (faeForest) {
                        const encounterMusic = new Audio("audio/forest-encounter-music.wav");
                        //switchMusic(encounterMusic);
                        encounterMusicTrigger = true;
                        encounterMusicIndex = allMusic.indexOf(encounterMusic);
                } else if (hallowwood) {
                        const hallowwoodEncounterMusic = new Audio("audio/hallowwood-encounter-music.wav");
                        //switchMusic(hallowwoodEncounterMusic);
                        encounterMusicTrigger = true;
                        encounterMusicIndex = allMusic.indexOf(hallowwoodEncounterMusic);
                } else {
                        const heavenEncounterMusic = new Audio("audio/heaven-encounter-music.wav");
                        //switchMusic(heavenEncounterMusic);
                        encounterMusicTrigger = true;
                        encounterMusicIndex = allMusic.indexOf(heavenEncounterMusic);
                }
        }
        //switchMusic(allMusic[encounterMusicIndex]);
        let randomEncounterNumber;
        if (faeForest) {
                randomEncounterNumber = createRandomNumber(1, 9);
                while (dontRepeatEncounter.includes(randomEncounterNumber)) {
                        randomEncounterNumber = createRandomNumber(1, 9);        
                }
        } else if (hallowwood) {
                randomEncounterNumber = createRandomNumber(10, 18);
                while (dontRepeatEncounter.includes(randomEncounterNumber)) {
                        randomEncounterNumber = createRandomNumber(10, 18);        
                }
        } else {
                randomEncounterNumber = createRandomNumber(19, 27);
                while (dontRepeatEncounter.includes(randomEncounterNumber)) {
                        randomEncounterNumber = createRandomNumber(19, 27);        
                }
        }
        switchArea(arena, map);
        displayFlex(arena);
        function createEncounterEnemies(name0, name1, name2, action0, action1, action2, repeat) {
                numberOfEnemies = 3;
                if (name2 === "") {
                        numberOfEnemies = 2;
                }
                createEnemy(`${name0}`);
                createEnemy(`${name1}`);
                if (name2 !== "") {
                        createEnemy(`${name2}`);
                }
                initializeEnemyVariables();
                enemyLevelUp();
                if (name2 !== "") {
                        enemyAction(action0, action1, action2);
                } else {
                        enemyAction(action0, action1);
                        enemyImg.forEach(i => {
                                i.style = "width: 458px";
                        });
                }
                dontRepeatEncounter.push(repeat);
        }
        switch (randomEncounterNumber) {
                case 1:
                        createEncounterEnemies("Mushroom", "Dwarf", "Water Wolf", 1, 2, 6, 1);
                        break;
                case 2:
                        createEncounterEnemies("Dwarf", "Stag", "Centaur", 2, 5, 4, 2);
                        break;
                case 3:
                        createEncounterEnemies("Dark Elf", "Will-o-the-Wisp", "Water Wolf", 0, 3, 6, 3);
                        break;
                case 4:
                        createEncounterEnemies("Mushroom", "Frost Dragon", "Water Wolf", 1, 8, 6, 4);
                        break;
                case 5:
                        createEncounterEnemies("Stag", "Frost Dragon", "Fairy", 5, 8, 7, 5);
                        break;
                case 6:
                        createEncounterEnemies("Dark Elf", "Will-o-the-Wisp", "Fairy", 0, 3, 7, 6);
                        break;
                case 7:
                        createEncounterEnemies("Dwarf", "Dark Elf", "Centaur", 2, 0, 4, 7);
                        break;
                case 8:
                        createEncounterEnemies("Will-o-the-Wisp", "Stag", "Fairy", 3, 5, 7, 8);
                        break;
                case 9:
                        createEncounterEnemies("Mushroom", "Frost Dragon", "Centaur", 1, 8, 4, 9);
                        break;
                case 10:
                        createEncounterEnemies("Skeleton", "Pumpkinhead", "Bat", 16, 14, 20, 10);
                        break;
                case 11:
                        createEncounterEnemies("Mummy", "White Witch", "Black Witch", 17, 15, 19, 11);
                        break;
                case 12:
                        createEncounterEnemies("Mummy", "Horseman", "Spirit", 17, 22, 18, 12);
                        break;
                case 13:
                        createEncounterEnemies("Zombie", "Pumpkinhead", "Black Witch", 21, 14, 19, 13);
                        break;
                case 14:
                        createEncounterEnemies("Zombie", "White Witch", "Bat", 21, 15, 20, 14);
                        break;
                case 15:
                        createEncounterEnemies("Skeleton", "Horseman", "Spirit", 16, 22, 18, 15);
                        break;
                case 16:
                        createEncounterEnemies("Skeleton", "White Witch", "Bat", 16, 15, 20, 16);
                        break;
                case 17:
                        createEncounterEnemies("Mummy", "Pumpkinhead", "Spirit", 17, 14, 18, 17);
                        break;
                case 18:
                        createEncounterEnemies("Zombie", "Horseman", "Black Witch", 21, 22, 19, 18);
                        break;
                case 19:
                        createEncounterEnemies("Athena", "Artemis", "", 36, 37, 0, 19);
                        break;
                case 20:
                        createEncounterEnemies("Poseidon", "Artemis", "", 35, 37, 0, 22);
                        break;
                case 21:
                        createEncounterEnemies("Athena", "Demeter", "", 36, 34, 0, 19);
                        break;
                case 22:
                        createEncounterEnemies("Thor", "Loki", "", 31, 32, 0, 20);
                        break;
                case 23:
                        createEncounterEnemies("Thor", "Fenrir", "", 31, 33, 0, 20);
                        break;
                case 24:
                        createEncounterEnemies("Anubis", "Ra", "", 28, 30, 0, 21);
                        break;
                case 25:
                        createEncounterEnemies("Bastet", "Ra", "", 29, 30, 0, 21);
                        break;
                case 26:
                        createEncounterEnemies("Ganesha", "Brahma", "", 38, 39, 0, 23);
                        break;
                case 27:
                        createEncounterEnemies("Sun Wukong", "Hebo", "", 40, 41, 0, 24);
                        break;
        }
}
let dontRepeatGoldEncounter = [];
let goldEncounterGold = false;
function goldEncounter() {
        //switchMusic(allMusic[encounterMusicIndex]);
        goldEncounterGold = true;
        let randomGoldEncounterNumber;
        if (faeForest) {
                randomGoldEncounterNumber = createRandomNumber(1, 3);
                while (dontRepeatGoldEncounter.includes(randomGoldEncounterNumber)) {
                        randomGoldEncounterNumber = createRandomNumber(1, 3);
                }
        } else if (hallowwood) {
                randomGoldEncounterNumber = createRandomNumber(4, 6);
                while (dontRepeatGoldEncounter.includes(randomGoldEncounterNumber)) {
                        randomGoldEncounterNumber = createRandomNumber(4, 6);
                }
        }
        switchArea(arena, map);
        numberOfEnemies = 3;
        function createGoldEnemies(name, action, repeat) {
                createEnemy(`${name}`);
                createEnemy(`${name}`);
                createEnemy(`${name}`);
                initializeEnemyVariables();
                enemyLevelUp();
                enemyAction(action, action, action);
                dontRepeatEncounter.push(repeat);
        }
        switch (randomGoldEncounterNumber) {
                case 1:
                        createGoldEnemies("Will-o-the-Wisp", 3, 1);
                        break;
                case 2:
                        createGoldEnemies("Stag", 5, 2);
                        break;
                case 3:
                        createGoldEnemies("Centaur", 4, 3);
                        break;
                case 4:
                        createGoldEnemies("White Witch", 15, 4);
                        break;
                case 5:
                        createGoldEnemies("Mummy", 17, 5);
                        break;
                case 6:
                        createGoldEnemies("Horseman", 22, 6);
                        break;
                case 7:
                        createGoldEnemies("Ra", 30, 7);
                        break;
                case 8:
                        createGoldEnemies("Artemis", 37, 8);
                        break;
                case 9:
                        createGoldEnemies("Thor", 31, 9);
                        break;
        }
}
let dontRepeatRelic = [];
let [concentratedFire, ringOfFire, thunderTalisman, lightningInABottle, iceSpear, frostHeart, stratus, windDisc, bloodAmulet, caspiansTear, crownOfThorns, vineBracelet] = 
[false, false, false, false, false, false, false, false, false, false, false, false];
let concentratedFireTracking = [false, false, false];
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
                                <div class="relic-img-text img-text">
                                        <h4 class="img-text-h4">Ring Of Fire</h4>
                                        <p class="img-text-p">Single target burn duplicates half it's burn and spreads it to all enemies</p>
                                </div>
                        </div>`;                        
                        dontRepeatRelic.push(1);
                        break;
                case 2:
                        concentratedFire = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/eternal-flame2.png">
                                <div class="relic-img-text img-text">
                                        <h4 class="img-text-h4">Concentrated Fire</h4>
                                        <p class="img-text-p">Burning an enemy twice in one turn will increase the second burn by 50%</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(2);
                        break;
                case 3:
                        thunderTalisman = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/thunder-talisman2.png">
                                <div class="relic-img-text img-text">
                                        <h4 class="img-text-h4">Thunder Talisman</h4>
                                        <p class="img-text-p">Start each encounter with +2 mana for the first turn</p>
                                </div>
                        </div>`
                        dontRepeatRelic.push(3);
                        break;
                case 4:
                        lightningInABottle = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/lightning-in-a-bottle.png">
                                <div class="relic-img-text img-text">
                                        <h4 class="img-text-h4">Lightning in a Bottle</h4>
                                        <p class="img-text-p">Your unused mana will not be lost</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(4);
                        break;
                case 5:
                        iceSpear = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/ice-spear.png">
                                <div class="relic-img-text img-text">
                                        <h4 class="img-text-h4">Ice Spear</h4>
                                        <p class="img-text-p">Deal 4 more damage to enemies with Frostbite</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(5);
                        break;
                case 6:
                        frostHeart = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/frostheart.png">
                                <div class="relic-img-text img-text">
                                        <h4 class="img-text-h4">Frostheart</h4>
                                        <p class="img-text-p">Gain 4 block when inflicting enemy with frostbite</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(6);
                        break;
                case 7:
                        stratus = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/stratus.png">
                                <div class="relic-img-text img-text">
                                        <h4 class="img-text-h4">Stratus</h4>
                                        <p class="img-text-p">Windswept will now reflect 25% of the damage enemies intend to attack for back to them</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(7);
                        break;
                case 8:
                        windDisc = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/wind-disc.png">
                                <div class="relic-img-text img-text">
                                        <h4 class="img-text-h4">Wind Disc</h4>
                                        <p class="img-text-p">Start each encounter with one extra card for the first turn</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(8);
                        break;
                case 9:
                        bloodAmulet = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/blood-amulet2.png">
                                <div class="relic-img-text img-text">
                                        <h4 class="img-text-h4">Blood Amulet</h4>
                                        <p class="img-text-p">Gain 1 blood siphon on your second turn</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(9);
                        break;
                case 10:
                        caspiansTear = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/caspians-tear2.png">
                                <div class="relic-img-text img-text">
                                        <h4 class="img-text-h4">Caspian's Tear</h4>
                                        <p class="img-text-p">Gain +3 max health when you start a new encounter</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(10);
                        break;
                case 11:
                        crownOfThorns = true;
                        relicContainer.innerHTML += `                        
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/crown-of-thorns2.png">
                                <div class="relic-img-text img-text">
                                        <h4 class="img-text-h4">Crown of Thorns</h4>
                                        <p class="img-text-p">Start each encounter with 2 thorns</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(11);
                        break;
                case 12:
                        vineBracelet = true;
                        relicContainer.innerHTML += `
                        <div class="relic-div">
                                <img class="relic-img" src="imgs/vine-bracelet.png">
                                <div class="relic-img-text img-text">
                                        <h4 class="img-text-h4">Vine Bracelet</h4>
                                        <p class="img-text-p">When you lose all of your block gain 10 block</p>
                                </div>
                        </div>`;
                        dontRepeatRelic.push(12);
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
let eliteEncounterMusicTrigger = false;
let eliteEncounterMusicIndex;
function eliteEncounter() {
        if (!eliteEncounterMusicTrigger) {
                if (faeForest) {
                        const eliteEncounterMusic = new Audio("audio/elite-encounter-music.wav");
                        //switchMusic(eliteEncounterMusic);
                        eliteEncounterMusicTrigger = true;
                        eliteEncounterMusicIndex = allMusic.indexOf(eliteEncounterMusic);
                } else if (hallowwood) {
                        const hallowwoodEliteMusic = new Audio("audio/hallowwood-elite-music.wav");
                        //switchMusic(hallowwoodEliteMusic);
                        eliteEncounterMusicTrigger = true;
                        eliteEncounterMusicIndex = allMusic.indexOf(hallowwoodEliteMusic);
                } else {
                        const heavenEliteMusic = new Audio("audio/heaven-elite-music.wav");
                        //switchMusic(heavenEliteMusic);
                        eliteEncounterMusicTrigger = true;
                        eliteEncounterMusicIndex = allMusic.indexOf(heavenEliteMusic);
                }
        }
        //switchMusic(allMusic[eliteEncounterMusicIndex]);
        let randomEliteNumber;
        if (faeForest) {
                randomEliteNumber = createRandomNumber(1, 3);
                while (dontRepeatEncounter.includes(randomEliteNumber)) {
                        randomEliteNumber = createRandomNumber(1, 3);        
                }
        } else if (hallowwood) {
                randomEliteNumber = createRandomNumber(4, 6);
                while (dontRepeatEncounter.includes(randomEliteNumber)) {
                        randomEliteNumber = createRandomNumber(4, 6);        
                }
        } else {
                randomEliteNumber = createRandomNumber(7, 9);
                while (dontRepeatEncounter.includes(randomEliteNumber)) {
                        randomEliteNumber = createRandomNumber(7, 9);        
                }
        }
        getEliteRelic = true;
        switchArea(arena, map);
        numberOfEnemies = 1;
        function createEliteEnemy(name, action, repeat) {
                createEnemy(`${name}`);
                initializeEnemyVariables();
                enemyLevelUp();
                enemyAction(action);
                dontRepeatEncounter.push(repeat);
        }
        switch (randomEliteNumber) {
                case 1:
                        createEliteEnemy("Fae Fox", 9 , 1);
                        document.querySelector(".enemy-img").style = "width: 500px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: 1rem; bottom: 9rem";
                        break;
                case 2:
                        createEliteEnemy("Dryad", 10, 2);
                        document.querySelector(".enemy-img").style = "width: 500px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: -2rem; bottom: 9rem";
                        document.querySelector(".enemy-action-div").style = "margin-bottom: -3rem";
                        document.querySelector(".enemy-debuffs").style = "margin-bottom: -1rem";
                        break;
                case 3:
                        createEliteEnemy("Frost Sprite", 11, 3);
                        document.querySelector(".enemy-img").style = "width: 450px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: -2rem; bottom: 9rem";
                        break;
                case 4:
                        createEliteEnemy("Reaper", 23, 4);
                        document.querySelector(".enemy-img").style = "width: 550px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: -2rem; bottom: 7rem";
                        break;
                case 5:
                        createEliteEnemy("Spectre", 24, 5);
                        document.querySelector(".enemy-img").style = "width: 510px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: -2rem; bottom: 9rem";
                        break;
                case 6:
                        createEliteEnemy("Gargoyle", 25, 6);
                        document.querySelector(".enemy-img").style = "width: 450px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: -2rem; bottom: 9rem";
                        break;
                case 7:
                        createEliteEnemy("Zeus", 42, 7);
                        document.querySelector(".enemy-img").style = "width: 450px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: -2rem; bottom: 9rem";
                        break;
                case 8:
                        createEliteEnemy("Odin", 43, 8);
                        document.querySelector(".enemy-img").style = "width: 450px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: -2rem; bottom: 9rem";
                        break;
                case 9:
                        createEliteEnemy("Jesus", 44, 9);
                        document.querySelector(".enemy-img").style = "width: 450px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: -2rem; bottom: 9rem";
                        break;
        }
}
let bossDefeated = [false, false];
function boss() {
        if (faeForest) {
                const bossMusic = new Audio("audio/forest-boss-music.wav");
                //switchMusic(bossMusic);
        } else if (hallowwood) {
                const hallowwoodBossMusic = new Audio("audio/hallowwood-boss-music.wav");
                //switchMusic(hallowwoodBossMusic);
        }
        numberOfEnemies = 1;
        let randomBossNumber;
        if (faeForest) {
                randomBossNumber = createRandomNumber(1, 2);
        } else if (hallowwood) {
                randomBossNumber = createRandomNumber(3, 4);
        } else {
                randomBossNumber = createRandomNumber(5, 6);
        }
        switchArea(arena, map);
        function createBossEnemy(name, action, boss) {
                createEnemy(`${name}`);
                initializeEnemyVariables();
                enemyLevelUp();
                enemyAction(action);
                bossDefeated[boss] = true;
        }
        switch (randomBossNumber) {
                case 1:
                        createBossEnemy("Fae Dragon", 12, 0);
                        fxDragonRoar.play();
                        fxDragonGrowls.play();
                        fxDragonGrowls.loop = true;
                        document.querySelector(".enemy-img").style = "width: 600px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: 32rem; bottom: 15rem";
                        document.querySelector(".enemy-action-div").style = "position: absolute; bottom: 30rem";
                        document.querySelector(".enemy-debuffs").style = "position: absolute; bottom: 36rem";
                        break;
                case 2:
                        createBossEnemy("Forest Giant", 13, 0);
                        fxGiantFootsteps.play();
                        fxGiantGroans.play();
                        fxGiantGroans.loop = true;
                        document.querySelector(".enemy-img").style = "width: 600px; margin-left: -8rem";
                        document.querySelector(".enemy-health-bar").style = "margin-top: -2.5rem";
                        document.querySelector(".enemy-div").style = "margin-bottom: -2rem";
                        document.querySelector(".enemy-action-div").style = "position: absolute; bottom: 45.5rem";
                        document.querySelector(".enemy-debuffs").style = "position: absolute; bottom: 51.1rem";
                        break;
                case 3:
                        createBossEnemy("Vampire", 26, 1);
                        document.querySelector(".enemy-img").style = "width: 500px";
                        break;
                case 4:
                        createBossEnemy("Werewolf", 27, 1);
                        document.querySelector(".enemy-img").style = "width: 500px";
                        document.querySelector(".enemy-action-div").style = "position: absolute; bottom: 45.5rem";
                        document.querySelector(".enemy-debuffs").style = "position: absolute; bottom: 51.1rem";
                        break;
                case 5:
                        createBossEnemy("Life", 45, 1);
                        document.querySelector(".enemy-img").style = "width: 500px";
                        break;
                case 6:
                        createBossEnemy("Death", 46, 1);
                        document.querySelector(".enemy-img").style = "width: 500px";
                        break;
        }
}
let [fireGift, fireGiftTrigger, lightningGift, lightningGiftTrigger, iceGift, iceGiftTrigger, airGift, airGiftTrigger, waterGift, waterGiftTrigger, earthGift, earthGiftTrigger, empowerBloodSiphon, stealBuffs, reduceAllAttack, doubleMana] =
[false, false, false, false, false, false, false, false, false, false, false, false, false, false];
function treasure() {
        displayNone(map);
        displayFlex(exclamationContainer);
        if (faeForest) {
                exclamationContainer.innerHTML = `
                <div id="treasure-container">
                        <div style="text-align: center">
                                <h1>Choose a Blessing</h1>
                                <h2>Gain a gift you can use once per battle</h2>
                        </div>
                        <div class="treasure-element-div">
                                <h2 style="color: #74ccf4">Aquatas' Gift</h2>
                                <div class="treasure-choice-div">
                                        <div class="treasure-choices">
                                                <p>Empower your blood siphon this turn to heal for 40% more health</p>
                                                <button id="water-gift" style="color: #74ccf4">Aquatas' Gift</button>
                                        </div>
                                </div>
                        </div>
                        <div class="treasure-element-div">
                                <h2 style="color: #81b14f">Gaia's Gift</h2>
                                <div class="treasure-choice-div">
                                        <div class="treasure-choices">
                                                <p>Double your armor</p>
                                                <button id="earth-gift" style="color: #81b14f">Gaia's Gift</button>
                                        </div>
                                </div>
                        </div>
                </div>
                `
                document.getElementById("water-gift").addEventListener("click", () => {
                        waterGift = true;
                        waterGiftTrigger = true;
                        document.getElementById("water-orb-img").classList.add("water-glow");
                        document.getElementById("water-orb-img").addEventListener("click", () => {
                                if (waterGift && waterGiftTrigger && playerBloodNumber.innerText > 0) {
                                        empowerBloodSiphon = true;
                                        waterGiftTrigger = false;
                                        document.getElementById("water-orb-img").classList.remove("water-glow");
                                }
                        });
                        switchArea(map, exclamationContainer);
                });
                document.getElementById("earth-gift").addEventListener("click", () => {
                        earthGift = true;
                        earthGiftTrigger = true;
                        document.getElementById("earth-orb-img").classList.add("earth-glow");
                        document.getElementById("earth-orb-img").addEventListener("click", () => {
                                if (earthGift && earthGiftTrigger) {
                                        playerBlockNumber.innerText *= 2;
                                        document.getElementById("earth-orb-img").classList.remove("earth-glow");
                                        earthGiftTrigger = false;
                                }
                        });
                        switchArea(map, exclamationContainer);
                });
        } else if (hallowwood) {
                exclamationContainer.innerHTML = `
                <div id="treasure-container">
                        <div style="text-align: center">
                                <h1>Choose a Blessing</h1>
                                <h2>Gain a gift you can use once per battle</h2>
                        </div>
                        <div class="treasure-element-div">
                                <h2 style="color: #2f989c">Glacia's Gift</h2>
                                <div class="treasure-choice-div">
                                        <div class="treasure-choices">
                                                <p>The next enemies you frostbite will steal all of their buffs</p>
                                                <button id="ice-gift" style="color: #2f989c">Glacia's Gift</button>
                                        </div>
                                </div>
                        </div>
                        <div class="treasure-element-div">
                                <h2 style="color: #86bfdf">Tempia's Gift</h2>
                                <div class="treasure-choice-div">
                                        <div class="treasure-choices">
                                                <p>Windswept reduces attack to 0 this turn</p>
                                                <button id="air-gift" style="color: #86bfdf">Tempia's Gift</button>
                                        </div>
                                </div>
                        </div>
                </div>
                `
                document.getElementById("treasure-container").style = "background-image: url(imgs/hallowwood-treasure.jpeg)";
                document.getElementById("ice-gift").addEventListener("click", () => {
                        iceGift = true;
                        iceGiftTrigger = true;
                        document.getElementById("air-orb-img").style = "margin-left: 80px; z-index: 0;"
                        document.getElementById("ice-orb-img").style = "margin-left: 130px; z-index: 2;"
                        document.getElementById("ice-orb-img").classList.add("ice-glow");
                        document.getElementById("ice-orb-img").addEventListener("click", () => {
                                if (iceGift && iceGiftTrigger) {
                                        stealBuffs = true;
                                        iceGiftTrigger = false;
                                        document.getElementById("ice-orb-img").classList.remove("ice-glow");
                                }
                        });
                        switchArea(map, exclamationContainer);
                });
                document.getElementById("air-gift").addEventListener("click", () => {
                        airGift = true;
                        airGiftTrigger = true;
                        reduceAllAttack = true;
                        document.getElementById("air-orb-img").classList.add("air-glow");
                        document.getElementById("air-orb-img").addEventListener("click", () => {
                                if (airGift && airGiftTrigger) {
                                        for (let i = 0; i < numberOfEnemies; i++) {
                                                if (!enemyIsDead[i]) {
                                                        inflictWindswept(i);
                                                        enemyAttackActionNumber[i].innerText = 0;
                                                }
                                        }
                                        document.getElementById("air-orb-img").classList.remove("air-glow");
                                        airGiftTrigger = false;
                                        reduceAllAttack = true;
                                }
                        });
                        switchArea(map, exclamationContainer);
                });
        } else {
                exclamationContainer.innerHTML = `
                <div id="treasure-container">
                        <div style="text-align: center">
                                <h1>Choose a Blessing</h1>
                                <h2>Gain a gift you can use once per battle</h2>
                        </div>
                        <div class="treasure-element-div">
                                <h2 style="color: #2f989c">Ember's Gift</h2>
                                <div class="treasure-choice-div">
                                        <div class="treasure-choices">
                                                <p>Consume all burn dealing double it's damage</p>
                                                <button id="fire-gift" style="color: #2f989c">Ember's Gift</button>
                                        </div>
                                </div>
                        </div>
                        <div class="treasure-element-div">
                                <h2 style="color: #86bfdf">Lectra's Gift</h2>
                                <div class="treasure-choice-div">
                                        <div class="treasure-choices">
                                                <p>Double your mana next turn</p>
                                                <button id="lightning-gift" style="color: #86bfdf">Lectra's Gift</button>
                                        </div>
                                </div>
                        </div>
                </div>
                `
                document.getElementById("treasure-container").style = "background-image: url(imgs/hallowwood-treasure.jpeg)";
                document.getElementById("fire-gift").addEventListener("click", () => {
                        fireGift = true;
                        fireGiftTrigger = true;
                        document.getElementById("fire-orb-img").classList.add("fire-glow");
                        document.getElementById("fire-orb-img").addEventListener("click", () => {
                                if (fireGift && fireGiftTrigger) {
                                        for (let i = 0; i < numberOfEnemies; i++) {
                                                if (!enemyIsDead[i]) {
                                                        enemyCurrentHealth[i].innerText -= (enemyBurnNumber[i].innerText * 2);
                                                        enemyBurnNumber[i].innerText = 0;
                                                        displayNone(enemyBurnActionDiv[i]);
                                                }
                                        }
                                        fireGiftTrigger = false;
                                        document.getElementById("fire-orb-img").classList.remove("fire-glow");
                                }
                        });
                        switchArea(map, exclamationContainer);
                });
                document.getElementById("lightning-gift").addEventListener("click", () => {
                        lightningGift = true;
                        lightningGiftTrigger = true;
                        doubleMana = true;
                        document.getElementById("lightning-orb-img").style = "margin-left: -130px; z-index: 2;"
                        document.getElementById("fire-orb-img").style = "margin-left: -85px; z-index: 1;"
                        document.getElementById("lightning-orb-img").classList.add("lightning-glow");
                        document.getElementById("lightning-orb-img").addEventListener("click", () => {
                                if (lightningGift && lightningGiftTrigger) {
                                        lightningGiftTrigger = false;
                                        doubleMana = true;
                                        document.getElementById("lightning-orb-img").classList.remove("lightning-glow");
                                }
                        });
                        switchArea(map, exclamationContainer);
                });
        }
}
function spaceEndTurn(e) {
        if (e.key === " ") {
                endTurn();
        }
}
function randomizeLocations() {
        function getLocations(location) {
                let randomLocation = createRandomNumber(1, 100);
                if (randomLocation <= 50) {
                        location.innerHTML = `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`;
                } else if (randomLocation <= 70) {
                        location.innerHTML = `<img class="exclamation-img" src="imgs/icons8-exclamation-64.png" alt="Mystery Zone">`;
                } else if (randomLocation <= 80) {
                        location.innerHTML = `<img class="hard-monster-img" src="imgs/icons8-monster-80.png" alt="Hard Monster">`;
                } else if (randomLocation <= 90) {
                        location.innerHTML = `<img class="gold-img" src="imgs/icons8-gold-bars-64.png" alt="Gold">`;
                } else if (randomLocation <= 95) {
                        location.innerHTML = `<img class="blacksmith-img" src="imgs/icons8-blacksmith-50.png" alt="Blacksmith">`;
                } else {
                        location.innerHTML = `<img class="merchant-img" src="imgs/icons8-stand-50.png" alt="Merchant">`;
                }
        }
        document.querySelectorAll(".location-tiles").forEach(i => {
                getLocations(i);
        });
        location1Tiles1.innerHTML = `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`;
        location1Tiles2.innerHTML = `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`;
        location1Tiles3.innerHTML = `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`;
        location6Tiles1.innerHTML = `<img class="treasure-img" src="imgs/icons8-treasure-chest-50.png" alt="Treasure">`;
        location11Tiles1.innerHTML = `<img class="boss-monster-img" src="imgs/icons8-monster-50.png" alt="Boss Monster">`;
}
randomizeLocations();
function matchEncounter(locationTile) {
        console.log(locationTile.innerHTML);
        if (locationTile.innerHTML == `<img class="exclamation-img" src="imgs/icons8-exclamation-64.png" alt="Mystery Zone">`) {
                mystery();
        } else if (locationTile.innerHTML == `<img class="gold-img" src="imgs/icons8-gold-bars-64.png" alt="Gold">`) {
                goldEncounter();
        } else if (locationTile.innerHTML == `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`) {
                encounter();
        } else if (locationTile.innerHTML == `<img class="hard-monster-img" src="imgs/icons8-monster-80.png" alt="Hard Monster">`) {
                eliteEncounter();
        } else if (locationTile.innerHTML == `<img class="blacksmith-img" src="imgs/icons8-blacksmith-50.png" alt="Blacksmith">`) {
                blacksmith();
        } else if (locationTile.innerHTML == `<img class="merchant-img" src="imgs/icons8-stand-50.png" alt="Merchant">`) {
                shop();
        }
}
function chooseLocationPath(location) {
        resetArena();
        window.addEventListener("keydown", spaceEndTurn);
        switch (location) {
                case "L1T1":
                        removeGlow(location1Tiles1, location1Tiles2, location1Tiles3);
                        addGlow(location2Tiles1, location2Tiles2);
                        removeELL1();
                        location2Tiles1.addEventListener("click", L2T1);
                        location2Tiles2.addEventListener("click", L2T2);
                        encounter();
                        break;
                case "L1T2":
                        removeGlow(location1Tiles1, location1Tiles2, location1Tiles3);
                        addGlow(location2Tiles3);
                        removeELL1();
                        location2Tiles3.addEventListener("click", L2T3);
                        encounter();
                        break;
                case "L1T3":
                        removeGlow(location1Tiles1, location1Tiles2, location1Tiles3);
                        addGlow(location2Tiles4);
                        removeELL1();
                        location2Tiles4.addEventListener("click", L2T4);
                        encounter();
                        break;
                case "L2T1":
                        removeGlow(location2Tiles1, location2Tiles2);
                        addGlow(location3Tiles1);
                        removeELL2();
                        location3Tiles1.addEventListener("click", L3T1);
                        matchEncounter(location2Tiles1);
                        break;
                case "L2T2":
                        removeGlow(location2Tiles1, location2Tiles2);
                        addGlow(location3Tiles2);
                        removeELL2();
                        location3Tiles2.addEventListener("click", L3T2);
                        matchEncounter(location2Tiles2);
                        break;
                case "L2T3":
                        removeGlow(location2Tiles3);
                        addGlow(location3Tiles3);
                        removeELL2();
                        location3Tiles3.addEventListener("click", L3T3);
                        matchEncounter(location2Tiles3);
                        break;
                case "L2T4":
                        removeGlow(location2Tiles4);
                        addGlow(location3Tiles3);
                        removeELL2();
                        location3Tiles3.addEventListener("click", L3T3);
                        matchEncounter(location2Tiles4);
                        break;
                case "L3T1":
                        removeGlow(location3Tiles1);
                        addGlow(location4Tiles1);
                        removeELL3();
                        location4Tiles1.addEventListener("click", L4T1);
                        matchEncounter(location3Tiles1);
                        break;
                case "L3T2":
                        removeGlow(location3Tiles2);
                        addGlow(location4Tiles2);
                        removeELL3();
                        location4Tiles2.addEventListener("click", L4T2);
                        matchEncounter(location3Tiles2);
                        break;
                case "L3T3":
                        removeGlow(location3Tiles3);
                        addGlow(location4Tiles3, location4Tiles4);
                        removeELL3();
                        location4Tiles3.addEventListener("click", L4T3);
                        location4Tiles4.addEventListener("click", L4T4);
                        matchEncounter(location3Tiles3);
                        break;
                case "L4T1":
                        removeGlow(location4Tiles1);
                        addGlow(location5Tiles1);
                        removeELL4();
                        location5Tiles1.addEventListener("click", L5T1);
                        matchEncounter(location4Tiles1);
                        break;
                case "L4T2":
                        removeGlow(location4Tiles2);
                        addGlow(location5Tiles1, location5Tiles2);
                        removeELL4();
                        location5Tiles1.addEventListener("click", L5T1);
                        location5Tiles2.addEventListener("click", L5T2);
                        matchEncounter(location4Tiles2);
                        break;
                case "L4T3":
                        removeGlow(location4Tiles3, location4Tiles4);
                        addGlow(location5Tiles2, location5Tiles3);
                        removeELL4();
                        location5Tiles2.addEventListener("click", L5T2);
                        location5Tiles3.addEventListener("click", L5T3);
                        matchEncounter(location4Tiles3);
                        break;
                case "L4T4":
                        removeGlow(location4Tiles3, location4Tiles4);
                        addGlow(location5Tiles3);
                        removeELL5();
                        location5Tiles3.addEventListener("click", L6T1);
                        matchEncounter(location4Tiles4);
                        break;
                case "L5T1":
                        removeGlow(location5Tiles1, location5Tiles2, location5Tiles3);
                        addGlow(location6Tiles1);
                        removeELL5();
                        location6Tiles1.addEventListener("click", L6T1);
                        matchEncounter(location5Tiles1);
                        break;
                case "L5T2":
                        removeGlow(location5Tiles1, location5Tiles2, location5Tiles3);
                        addGlow(location6Tiles1);
                        removeELL5();
                        location6Tiles1.addEventListener("click", L6T1);
                        matchEncounter(location5Tiles2);
                        break;
                case "L5T3":
                        removeGlow(location5Tiles2, location5Tiles3);
                        addGlow(location6Tiles1);
                        removeELL5();
                        location6Tiles1.addEventListener("click", L6T1);
                        matchEncounter(location5Tiles3);
                        break;
                case "L6T1":
                        removeGlow(location6Tiles1);
                        addGlow(location7Tiles1, location7Tiles2, location7Tiles3);
                        removeELL6();
                        location7Tiles1.addEventListener("click", L7T1);
                        location7Tiles2.addEventListener("click", L7T2);
                        location7Tiles3.addEventListener("click", L7T3);
                        treasure();
                        break;
                case "L7T1":
                        removeGlow(location7Tiles1, location7Tiles2, location7Tiles3);
                        addGlow(location8Tiles1, location8Tiles2);
                        removeELL7();
                        location8Tiles1.addEventListener("click", L8T1);                      
                        location8Tiles2.addEventListener("click", L8T2);
                        matchEncounter(location7Tiles1);
                        break;
                case "L7T2":
                        removeGlow(location7Tiles1, location7Tiles2, location7Tiles3);
                        addGlow(location8Tiles2);
                        removeELL7();
                        location8Tiles2.addEventListener("click", L8T2);
                        matchEncounter(location7Tiles2);
                        break;
                case "L7T3":
                        removeGlow(location7Tiles1, location7Tiles2, location7Tiles3);
                        addGlow(location8Tiles2, location8Tiles3);
                        removeELL7();
                        location8Tiles2.addEventListener("click", L8T2);
                        location8Tiles3.addEventListener("click", L8T3);
                        matchEncounter(location7Tiles3);
                        break;
                case "L8T1":
                        removeGlow(location8Tiles1, location8Tiles2);
                        addGlow(location9Tiles1, location9Tiles2);
                        removeELL8();
                        location9Tiles1.addEventListener("click", L9T1);
                        location9Tiles2.addEventListener("click", L9T2);
                        matchEncounter(location8Tiles1);
                        break;
                case "L8T2":
                        removeGlow(location8Tiles1, location8Tiles2, location8Tiles3);
                        addGlow(location9Tiles2, location9Tiles3);
                        removeELL8();
                        location9Tiles2.addEventListener("click", L9T2);
                        location9Tiles3.addEventListener("click", L9T3);
                        matchEncounter(location8Tiles2);
                        break;
                case "L8T3":
                        removeGlow(location8Tiles2, location8Tiles3);
                        addGlow(location9Tiles3, location9Tiles4);
                        removeELL8();
                        location9Tiles3.addEventListener("click", L9T3);
                        location9Tiles4.addEventListener("click", L9T4);
                        matchEncounter(location8Tiles3);
                        break;
                case "L9T1":
                        removeGlow(location9Tiles1, location9Tiles2);
                        addGlow(location10Tiles1);
                        removeELL9();
                        location10Tiles1.addEventListener("click", L10T1);
                        matchEncounter(location9Tiles1);
                        break;
                case "L9T2":
                        removeGlow(location9Tiles1, location9Tiles2, location9Tiles3);
                        addGlow(location10Tiles1);
                        removeELL9();
                        location10Tiles1.addEventListener("click", L10T1);
                        matchEncounter(location9Tiles2);
                        break;
                case "L9T3":
                        removeGlow(location9Tiles2, location9Tiles3, location9Tiles4);
                        addGlow(location10Tiles2);
                        removeELL9();
                        location10Tiles2.addEventListener("click", L10T2);
                        matchEncounter(location9Tiles3);
                        break;
                case "L9T4":
                        removeGlow(location9Tiles3, location9Tiles4);
                        addGlow(location10Tiles2);
                        removeELL9();
                        location10Tiles2.addEventListener("click", L10T2);
                        matchEncounter(location9Tiles4);
                        break;
                case "L10T1":          
                        removeGlow(location10Tiles1);
                        addGlow(location11Tiles1);
                        removeELL10();
                        location11Tiles1.addEventListener("click", L11T1);
                        matchEncounter(location10Tiles1);
                        break;
                case "L10T2":          
                        removeGlow(location10Tiles2);
                        addGlow(location11Tiles1);
                        removeELL10();
                        location11Tiles1.addEventListener("click", L11T1);
                        matchEncounter(location10Tiles2);
                        break;
                case "L11T1":
                        removeGlow(location11Tiles1);
                        removeELL11();
                        boss();
                        break;
        }
}
/*
EXCLAMATION SECTION
*/
function createExclamation(title, background, img, text0, text1, text2) {
        const exclamationContainer = document.querySelector("#exclamation-container");
        exclamationContainer.innerHTML = `
        <div class="exclamation-div" style="background-image: url(${background})">
            <div class="exclamation-information-container">
                <div style="width: 100%"><h1 class="exclamation-title">${title}</h1></div>
                <div class="exclamation-event-img" style= "background-image: url(${img})"></div>
                <div class="exclamation-text-button-div">
                        <div class="exclamation-text-div">
                        <p class="exclamation-text">${text0}<br><br>
                                ${text1}<br><br>
                                ${text2}
                        </p>
                        <div class="exclamation-button-div"></div>
                        </div>
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
let exclamationMusicTrigger = false;
let exclamationMusicIndex;
let [aquatasBlessing, gaiaBlessing] = [false, false];
function mystery() {
        if (exclamationMusicTrigger === false) {
                if (faeForest) {
                        const exclamationMusic = new Audio("audio/exclamation-music.wav");
                        //switchMusic(exclamationMusic);
                        exclamationMusicTrigger = true;
                        exclamationMusicIndex = allMusic.indexOf(exclamationMusic);
                } else if (hallowwood) {
                        const hallowwoodMysteryMusic = new Audio("audio/hallowwood-mystery-music.wav");
                        //switchMusic(hallowwoodMysteryMusic);
                        exclamationMusicTrigger = true;
                        exclamationMusicIndex = allMusic.indexOf(hallowwoodMysteryMusic);
                } else {
                        const heavenMysteryMusic = new Audio("audio/heaven-mystery-music.wav");
                        //switchMusic(heavenMysteryMusic);
                        exclamationMusicTrigger = true;
                        exclamationMusicIndex = allMusic.indexOf(heavenMysteryMusic);
                }
        }
        //switchMusic(allMusic[exclamationMusicIndex]);
        const randomExclamationNumber = createRandomNumber(1, 5);
        switchArea(exclamationContainer, map);
        while (dontRepeatExclamation.includes(randomExclamationNumber)) {
                randomExclamationNumber = createRandomNumber(1, 5);
        }
        switch (randomExclamationNumber) {
                case 1:
                        createExclamation("A Goddess's Request", "imgs/fae-forest-mystery.jpeg", "imgs/goddess.jpg", "A wise looking woman approaches you with a knowing look.", 
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
                                //switchMusic(allMusic[mapMusicIndex]);
                        });
                        exclamationButton2.addEventListener("click", () => {
                                let lightning = document.querySelectorAll(".lightning");
                                destroyCards(lightning, "lightning");
                                switchArea(map, exclamationContainer);
                                //switchMusic(allMusic[mapMusicIndex]);
                        });
                        exclamationButton3.addEventListener("click", () => {
                                let ice = document.querySelectorAll(".ice");
                                destroyCards(ice, "ice");
                                switchArea(map, exclamationContainer);
                                //switchMusic(allMusic[mapMusicIndex]);
                        });
                        exclamationButton4.addEventListener("click", () => {
                                let air = document.querySelectorAll(".air");
                                destroyCards(air, "air");
                                switchArea(map, exclamationContainer);
                                //switchMusic(allMusic[mapMusicIndex]);
                        });
                        exclamationButton5.addEventListener("click", () => {
                                let water = document.querySelectorAll(".water");
                                destroyCards(water, "water");
                                switchArea(map, exclamationContainer);
                                //switchMusic(allMusic[mapMusicIndex]);
                        });
                        exclamationButton6.addEventListener("click", () => {
                                let earth = document.querySelectorAll(".earth");
                                destroyCards(earth, "earth");
                                switchArea(map, exclamationContainer);
                                //switchMusic(allMusic[mapMusicIndex]);
                        });
                        dontRepeatExclamation.push(1);
                        break;
                case 2:
                        createExclamation("The Wizard's Apprentice", "imgs/fae-forest-mystery.jpeg", "imgs/clone-mage.jpg", "You see a flustered wizard over the next thicket trying and failing to cast a spell.", 
                                `"Are you trying to burn down this entire forest?!" You demand indignantly.`,
                                `"No you damnable fool! I've been trying for days to clone this Terra forsaken thing!" he yells emphatically. "Say...do you think I could get a little bit of practice on one of those spells of yours?"`);
                        exclamationDiv = document.querySelector(".exclamation-div");
                        exclamationButtonDiv = document.querySelector(".exclamation-button-div");
                        exclamationButtonDiv.innerHTML = `
                        <button class="exclamation-button-1" style="margin-top: 20px;"><span style="color: lightgreen">Agree:</span> He doesn't look like he's taking no for an answer</button>
                        `;
                        exclamationButton1 = document.querySelector(".exclamation-button-1");
                        exclamationButton1.addEventListener("click", () => {
                                fxWizardCast.play();
                                function wizardCast() {
                                        const randomNumber = createRandomNumber(1, 2);
                                        if (randomNumber === 1) {
                                                fxSpellSuccess.play();
                                                exclamationButtonDiv.innerHTML = `
                                                <button class="exclamation-button-1" style="margin-top: 20px;"><span style="color: lightgreen">Success:</span> His spell clones the card you choose</button>`;
                                                exclamationButton1 = document.querySelector(".exclamation-button-1");
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
                                                                                        addCardToDeck(j, 0, true);
                                                                                        switchArea(map, exclamationContainer);
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
                                        } else {
                                                fxSpellFail.play();
                                                exclamationButtonDiv.innerHTML = `<button class="exclamation-button-1"><span style="color: rgb(206, 83, 83)">Failure:</span> The card you choose disappears</button>`;
                                                exclamationButton1 = document.querySelector(".exclamation-button-1");
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
                                                                                        function removeCard(pile) {
                                                                                                pile.forEach((k) => {
                                                                                                        if (k.classList.contains(j)) {
                                                                                                                let spliceCard = pile.splice(pile.indexOf(k), 1).pop();
                                                                                                                destroyedCardsArray.push(spliceCard);
                                                                                                                destroyedCardsContainer.appendChild(spliceCard);
                                                                                                                destroyedCardsArray = [];
                                                                                                                destroyedCardsContainer.innerHTML = ``;
                                                                                                                switchArea(map, exclamationContainer);
                                                                                                                //switchMusic(allMusic[mapMusicIndex]);
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
                                        }
                                }
                                setTimeout(wizardCast, 4000);
                        }, {once: true});
                        dontRepeatExclamation.push(2);
                        break;
                case 3:
                        createExclamation("Aquatas' Assistance", "imgs/fae-forest-mystery.jpeg", "imgs/aquatis.jpeg", "The physical incarnation of Terra's water spirit looms over you. You feel a sudden sense of serenity wash over you.", 
                                `"I speak to you on behalf of Gaia and myself." his voice envelops you reverberating throughout your mind.`,
                                `"The path forward to stop Illuminia and her sister will be demanding. We offer a choice of blessings to help in your plight. Choose wisely."`);
                        exclamationDiv = document.querySelector(".exclamation-div");
                        exclamationButtonDiv = document.querySelector(".exclamation-button-div");
                        exclamationButtonDiv.innerHTML = `
                        <button class="exclamation-button-1" style="margin-top: 20px;"><span style="color: #74ccf4">Aquatas' Blessing:</span> Gain 8 regeneration next fight.</button>
                        <button class="exclamation-button-2"><span style="color: #81b14f">Gaia's Blessing:</span> Gain 6 thorns next fight.</button>
                        `;
                        exclamationButton1 = document.querySelector(".exclamation-button-1");
                        exclamationButton2 = document.querySelector(".exclamation-button-2");
                        exclamationButton1.addEventListener("click", () => {
                                aquatasBlessing = true;
                                switchArea(map, exclamationDiv);
                                //switchMusic(allMusic[mapMusicIndex]);
                        });    
                        exclamationButton2.addEventListener("click", () => {
                                gaiaBlessing = true;
                                switchArea(map, exclamationDiv);
                                //switchMusic(allMusic[mapMusicIndex]);
                        });
                        dontRepeatExclamation.push(3);
                        break;
                case 4:
                        createExclamation(`<span style="color: #81b14f">Gaia's</span> Embrace`, "imgs/fae-forest-mystery.jpeg", "imgs/gaia.jpeg", "You see Terra's earth spirit gleefully skipping through the forest. A sudden rush of dirt and cedar pines floods your nose.", 
                                `"So you're the one here to save all of Terra, huh?" she giggles. "Hmm...you don't really look like someone ready to save the world."`,
                                `"And your spell book looks <em>awfully</em> empty! Take this tome so you can at least put up a good fight. I'd love to tell the plants about your valiant effort!" the sound of her laugh slowly fades as she skips away.`);
                        exclamationDiv = document.querySelector(".exclamation-div");
                        exclamationButtonDiv = document.querySelector(".exclamation-button-div");
                        exclamationButtonDiv.innerHTML = `
                        <button class="exclamation-button-1" style="margin-top: 20px;"><span style="color: #81b14f">Let Gaia embrace you:</span> Gain a card that generates 5 block and healing each turn.</button>
                        <button class="exclamation-button-2"><span style="color: rgb(206, 83, 83">Refuse:</span> Lose all of your earth cards.</button>
                        `;
                        exclamationButton1 = document.querySelector(".exclamation-button-1");
                        exclamationButton2 = document.querySelector(".exclamation-button-2");
                        exclamationButton1.addEventListener("click", () => {
                                addCardToDeck(50, 1, true);
                                switchArea(map, exclamationDiv);
                        });    
                        exclamationButton2.addEventListener("click", () => {
                                let earth = document.querySelectorAll(".earth");
                                for (let i = 0; i < earth.length; i++) {
                                        if (drawPileArray.includes(earth[i])) {
                                                destroyedCardsArray.push(drawPileArray.splice(drawPileArray.indexOf(earth[i]), 1));
                                        }
                                        if (handArray.includes(earth[i])) {
                                                destroyedCardsArray.push(handArray.splice(handArray.indexOf(earth[i]), 1));
                                        }
                                        destroyedCardsContainer.appendChild(earth[i]);
                                }
                                destroyedCardsContainer.innerHTML = ``;
                                destroyedCardsArray = [];
                                switchArea(map, exclamationDiv);
                                //switchMusic(allMusic[mapMusicIndex]);
                        });
                        dontRepeatExclamation.push(4);
                        break;
                case 5:
                        createExclamation(`Celestial Intervention`, "imgs/fae-forest-mystery.jpeg", "imgs/fae-mystery-spirit.jpeg", "You've set up camp for the night. You stare into the warm kindling of the campfire, resting your head on the frigid ground. Just before dozing off, you see the stars form into the shape of a woman.", 
                                `"My power grows weaker each day. The betrayal of the spirits of life and death have affected even me. I'm afraid it may be too late."`,
                                `"I can use the last of my power to infuse a spell with each of the six elemental Terran spirits power." She says weakly. "Use it in your fight to restore balance to this realm...for the sake of us all."`);
                        exclamationDiv = document.querySelector(".exclamation-div");
                        exclamationButtonDiv = document.querySelector(".exclamation-button-div");
                        exclamationButtonDiv.innerHTML = `
                        <button class="exclamation-button-1" style="margin-top: 20px;"><span style="color: rgb(123, 240, 238)">Attune with the stars:</span> Gain a celestially infused card.</button>
                        <button class="exclamation-button-2"><span style="color: #81b14f">Stay Grounded:</span> Gain a potion card that increases block and thorns.</button>
                        `;
                        exclamationButton1 = document.querySelector(".exclamation-button-1");
                        exclamationButton2 = document.querySelector(".exclamation-button-2");
                        exclamationButton1.addEventListener("click", () => {
                                addCardToDeck(52, 0, true);
                                switchArea(map, exclamationDiv);
                        });    
                        exclamationButton2.addEventListener("click", () => {
                                addCardToDeck(35, 0, true);
                                switchArea(map, exclamationDiv);
                                //switchMusic(allMusic[mapMusicIndex]);
                        });
                        dontRepeatExclamation.push(5);
                        break;
                case 6:
                        createExclamation("King Spookly", "imgs/hallowwood-mystery.jpeg", "imgs/king-spookly2.jpeg", "A ghost peaks out from a tree up ahead.", 
                                "He beckons you closer with his translucent appendage. You approach.",
                                `"I was once king in this land long ago." His soft whisper echos. "I had all the gold in my possession burried with me. I now realize the arrogance of my actions and would like to make amends for my past mistakes. Please share this amongt the local townsfolk."`);
                        exclamationDiv = document.querySelector(".exclamation-div");
                        exclamationButtonDiv = document.querySelector(".exclamation-button-div");
                        exclamationButtonDiv.innerHTML = `
                        <button class="exclamation-button-1"><span style="color: rgb(206, 83, 83)">Take It All:</span> Gain 200 Aether and Avarice; a useless card.</button>
                        <button class="exclamation-button-2"><span style="color: lightgreen">Share It:</span> Your integrity causes you to gain 10 health and max health.</button>
                        `;
                        exclamationButton1 = document.querySelector(".exclamation-button-1");
                        exclamationButton2 = document.querySelector(".exclamation-button-2");
                        exclamationButton1.addEventListener("click", () => {
                                addCardToDeck(51, 0, true);
                                playerAether.innerText = parseFloat(playerAether.innerText) + 200;
                                switchArea(map, exclamationContainer);
                                //switchMusic(allMusic[mapMusicIndex]);
                        });
                        exclamationButton2.addEventListener("click", () => {
                                playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 10;
                                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + 10;
                                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + 10;
                                switchArea(map, exclamationContainer);
                                //switchMusic(allMusic[mapMusicIndex]);
                        });
                        dontRepeatExclamation.push(6);
                        break;
                case 7:
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
                                addCardToDeck(newCard, 0, false);
                                newOpeningHand.push(newCard);
                        }
                        switchArea(map, exclamationDiv);
                        //switchMusic(allMusic[mapMusicIndex]);
                });
        }
}
let shopMusicTrigger = false;
let shopMusicIndex;
function shop() {
        if (!shopMusicTrigger) {
                if (faeForest) {
                        const shopMusic = new Audio("audio/shop-music.wav");
                        //switchMusic(shopMusic);
                        shopMusicTrigger = true;
                        shopMusicIndex = allMusic.indexOf(shopMusic);
                } else if (hallowwood) {
                        const hallowwoodShopMusic = new Audio("audio/hallowwood-shop-music.wav");
                        //switchMusic(hallowwoodShopMusic);
                        shopMusicTrigger = true;
                        shopMusicIndex = allMusic.indexOf(hallowwoodShopMusic);
                }
        }
        //switchMusic(allMusic[shopMusicIndex]);
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
        if (hallowwood) {
                document.getElementById("shop-container").style.backgroundImage = "url(imgs/hallowwood-shop2.jpeg)"
                document.getElementById("shopkeeper").src = "imgs/hallowwood-shopkeeper2.png";
                document.getElementById("shopkeeper").style = "margin-top: 0rem";
        } else if (!faeForest && !hallowwood) {
                document.getElementById("shop-container").style.backgroundImage = "url(imgs/heaven-shop.jpeg)"
                document.getElementById("shopkeeper").src = "imgs/heaven-shopkeeper.png";
                document.getElementById("shopkeeper").style = "margin-top: 0rem";
        }
        // LEAVE SHOP BUTTON
        const leaveShopButton = document.querySelector("#leave-shop-button");
        leaveShopButton.addEventListener("click", () => {
                switchArea(map, shopContainer);
                //switchMusic(allMusic[mapMusicIndex]);
                let shopCardsReference = document.querySelectorAll(".card-reference");
                for (let k = 0; k < shopCardsReference.length; k++) {
                        destroyedCardsArray.push(shopCardsReference[k]);
                        destroyedCardsContainer.appendChild(shopCardsReference[k]);
                        destroyedCardsArray = [];
                        destroyedCardsContainer.innerHTML = ``;
                }
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
                                        addCardToDeck(j, 0, false);
                                        playerAether.innerText -= 50;
                                        displayNone(shopCardsCostDiv[i], map);
                                }
                        }
                });
        }
        // SHOP RELICS
        const shopRelicContainer = document.querySelector("#shop-relic-container");
        let dontRepeatShopRelic = [];
        function shopRelic(timesToRun) {
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
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Ring of Fire</h4>
                                                        <p class="img-text-p">Single target burn duplicates half it's burn and spreads it to all enemies</p>
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
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Concentrated Fire</h4>
                                                        <p class="img-text-p">Burning an enemy twice in one turn will increase the second burn by 50%</p>
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
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Thunder Talisman</h4>
                                                        <p class="img-text-p">Start each encounter with +1 mana for the first turn</p>
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
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Lightning in a Bottle</h4>
                                                        <p class="img-text-p">Your unused mana will not be lost</p>
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
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Ice Spear</h4>
                                                        <p class="img-text-p">Deal 4 more damage to enemies with Frostbite</p>
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
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Frostheart</h4>
                                                        <p class="img-text-p">Gain 4 block when inflicting enemy with frostbite</p>
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
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Stratus</h4>
                                                        <p class="img-text-p">Windswept will now reflect 25% of the damage enemies intend to attack for back to them</p>
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
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Wind Disc</h4>
                                                        <p class="img-text-p">Start each encounter with one extra card for the first turn</p>
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
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Blood Amulet</h4>
                                                        <p class="img-text-p">Gain 1 blood siphon on your second turn</p>
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
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Caspian's Tear</h4>
                                                        <p class="img-text-p">Gain +3 max health when you start a new encounter</p>
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
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Crown of Thorns</h4>
                                                        <p class="img-text-p">Start each encounter with 2 thorns</p>
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
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Vine Bracelet</h4>
                                                        <p class="img-text-p">When you lose all of your block gain 10 block</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether.png">
                                                <p class="shop-aether-cost">100</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(12);
                                        break;
                        }
                }
        }
        shopRelic(4);
        const shopRelicImg = document.querySelectorAll(".shop-relic-img");
        const shopAetherImg = document.querySelectorAll(".shop-aether");
        const shopAetherCost = document.querySelectorAll(".shop-aether-cost");
        const shopRelicImgText = document.querySelectorAll(".shop-relic-img-text");
        for (let i = 0; i < shopRelicImg.length; i++) {
                console.log(shopRelicImg[i]);
                console.log(shopRelicImgText[i]);
                shopRelicImg[i].addEventListener("click", () => {
                        for (let k = 0; k <= 12; k++) {
                                if (shopRelicImg[i].classList.contains(k) && playerAether.innerText >= 100) {
                                        getRelic(k, k);
                                        displayNone(shopAetherImg[i + 10], shopAetherCost[i + 10], shopRelicImg[i], map);
                                        playerAether.innerText -= 100;
                                }
                        }
                });
                shopRelicImg[i].addEventListener("mouseover", () => {
                        console.log(shopRelicImg[i]);
                console.log(shopRelicImgText[i]);
                        displayFlex(shopRelicImgText[i]);
                });
                shopRelicImg[i].addEventListener("mouseout", () => {
                        displayNone(shopRelicImgText[i]);
                });
        }
}
let blacksmithMusicTrigger = false;
let blacksmithMusicIndex;
function blacksmith() {
        if (!blacksmithMusicTrigger) {
                const blacksmithMusic = new Audio("audio/blacksmith-music.wav");
                const blacksmithAmbience =  new Audio("audio/blacksmith-ambience.wav");
                //switchMusic(blacksmithMusic);
                switchAmbience(blacksmithAmbience);
                blacksmithMusicTrigger = true;
                blacksmithMusicIndex = allMusic.indexOf(blacksmithMusic);
        }
        //switchMusic(allMusic[blacksmithMusicIndex], allMusic[blacksmithMusicIndex + 1]);
        const blacksmithContainer = document.querySelector("#blacksmith-container");
        displayFlex(blacksmithContainer);
        displayNone(map);
        const blacksmithText = document.querySelector("#blacksmith-text");
        blacksmithContainer.innerHTML = `
        <div id="blacksmith-dwarf-div">
                <div id="blacksmith-text">
                        <p>I can infuse your cards with aether to make them stronger if you've got the materials.<br><br>75 aether should do.</p>
                        <div class="dialogue"></div>
                </div>
                <img id="blacksmith-dwarf" src="imgs/blacksmith-dwarf.png">
        </div>`
        let clickCount = 0;
        if (playerAether.innerText < 75) {
                blacksmithText.innerHTML = `<p>I can infuse your cards with aether to make them stronger if you've got the materials.<br><br>Come back when you have 75 aether for me.</p>`;
                blacksmithText.addEventListener("click", () => {
                        switchArea(map, blacksmithContainer);
                        if (faeForest) {
                                //switchMusic(allMusic[mapMusicIndex]);
                        } else if (hallowwood) {
                                //switchMusic(allMusic[hallowoodMapMusicIndex]);
                        }
                });
        } else {
                blacksmithText.addEventListener("click", () => {
                        blacksmithText.innerHTML = `Leave Blacksmith<br>`;
                        blacksmithText.style = `margin-top: 60px`;
                        blacksmithContainer.innerHTML += `<div id="blacksmith-cards-list"></div>`
                        const blacksmithCardsList = document.querySelector("#blacksmith-cards-list");
                        let allCardsArray = drawPileArray.concat(handArray, discardPileArray);
                        for (let i = 0; i < allCardsArray.length; i++) {
                                blacksmithCardsList.innerHTML += `<div class="blacksmith-upgrade-pair"></div>`
                        }
                        const blacksmithUpgradePair = document.querySelectorAll(".blacksmith-upgrade-pair");
                        for (let i = 0; i < allCardsArray.length; i++) {
                                for (let j = 0; j < cardsInformation.length; j++) {
                                        if (allCardsArray[i].classList.contains(j) && !allCardsArray[i].classList.contains("upgraded")) {
                                                createCard(j, blacksmithUpgradePair[i], "card-reference", "card-text", 0);
                                                createCard(j, blacksmithUpgradePair[i], "upgraded upgrade-reference", "card-text upgraded-text", 1);
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
                                                console.log(allCurrentCards[k]);
                                                if (drawPileArray.includes(allCurrentCards[k])) {
                                                        let spliceCard = drawPileArray.splice(drawPileArray.indexOf(allCurrentCards[k]), 1).pop();
                                                        destroyedCardsArray.push(spliceCard);
                                                        destroyedCardsContainer.appendChild(spliceCard);
                                                        destroyedCardsArray = [];
                                                        destroyedCardsContainer.innerHTML = ``;
                                                        addCardToDeck(cardIndex, 1, false);
                                                        break;
                                                }
                                                if (handArray.includes(allCurrentCards[k])) {
                                                        let spliceCard = handArray.splice(handArray.indexOf(allCurrentCards[k]), 1).pop();
                                                        destroyedCardsArray.push(spliceCard);
                                                        destroyedCardsContainer.appendChild(spliceCard);
                                                        destroyedCardsArray = [];
                                                        destroyedCardsContainer.innerHTML = ``;
                                                        addCardToDeck(cardIndex, 1, false);
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
                                                        cardReferenceUpgraded[i].style = "visibility: collapse";
                                                        break;
                                                }
                                        }
                                });
                                cardReference[i].addEventListener("mouseover", () => {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (cardReference[i].classList.contains(j)) {
                                                        if (cardReferenceUpgraded[i].classList.contains(j)) {
                                                                cardReferenceUpgraded[i].style = "visibility: visible";
                                                                console.log("mouseover" + i);
                                                        }
                                                }
                                        }
                                });
                                cardReference[i].addEventListener("mouseout", () => {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (cardReference[i].classList.contains(j)) {
                                                        if (cardReferenceUpgraded[i].classList.contains(j)) {
                                                                cardReferenceUpgraded[i].style = "visibility: collapse";
                                                        }
                                                }
                                        }
                                });
                        }
                        this.addEventListener("click", () => {
                                clickCount++;
                                if (clickCount === 2) {
                                        switchArea(map, blacksmithContainer);
                                        //switchMusic(allMusic[mapMusicIndex]);
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
                
        } else if (playerWindswept) {
                for (let i = 0; i < handArray.length; i++) {
                        for (let j = 0; j < cardsInformation.length; j++) {
                                if (handArray[i].classList.contains(j)) {
                                        for (let k = 0; k < currentCardText.length; k++) {
                                                if (currentCardText[k].classList.contains(j)) {
                                                        if (currentCardText[k].classList.contains("upgraded")) {
                                                                currentCardText[k].innerHTML = windsweptDamage[j][1];
                                                        } else {
                                                                
                                                                currentCardText[k].innerHTML = updateCardTextStats[j][0];
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
let windsOfChange = 8;
const playerThornsNumber = document.querySelector("#player-thorns-number");
const playerCurrentHealth = document.querySelector("#player-current-health");
const playerBlockNumber = document.querySelector("#player-block-number");
// CARD INFO ARRAY TO MAKE CARD DIVS IN HTML
const cardsInformation = [
        {
                manaCost: [1, 1],
                name: "Fireball",
                cardImg: "imgs/fireball2.jpg",
                cardText: [`Deal 5 damage and inflict 4 burn`, "Inflict 6 burn"],
                damage: [5, 0],
                burn: [4, 6],
                chooseEnemyCard: true,
                index: 0,
                element: "fire",
                action: 
                [
                        function () {
                                spendMana(1);
                                damageEnemy(5, chosenEnemy);
                                burnEnemy(4, chosenEnemy);
                                fxFireball.play();
                        },
                        function () {
                                spendMana(1);
                                burnEnemy(6, chosenEnemy);
                                fxFireball.play();
                        }
                ]
        },
        {
                manaCost: [3, 2],
                name: "Cascading Flames",
                cardImg: "imgs/cascading-flames.jpg",
                cardText: ["Deal 15 damage and inflict 8 burn on an enemy and 2 burn on yourself", "Deal 15 damage and inflict 8 burn on an enemy and 2 burn on yourself"],
                damage: [15, 15],
                burn: [8, 8],
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
                                fxCascadingFlames.play();
                        },
                        function() {
                                spendMana(2);
                                damageEnemy(15, chosenEnemy);
                                burnEnemy(8, chosenEnemy);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 2;
                                displayBlock(playerBurnImg, playerBurnNumber);
                                fxCascadingFlames.play();
                        }
                ]
        },
        {
                manaCost: [1, 0],
                name: "Static Charge",
                cardImg: "imgs/static-charge.jpg",
                cardText: ["Your next direct damage spell deals 10 more damage", "Your next direct damage spell deals 10 more damage"],
                energize: [2, 3],
                chooseEnemyCard: false,
                index: 2,
                element: "lightning",
                action:
                [
                        function() {
                                spendMana(1);
                                tidalImbuement = true;
                                displayBlock(playerTidalImbuementImg);
                                fxStaticCharge.play();
                        },
                        function() {
                                spendMana(0);
                                tidalImbuement = true;
                                displayBlock(playerTidalImbuementImg);
                                fxStaticCharge.play();
                        },   
                ]
        },
        {
                manaCost: [3, 3],
                name: "Chain Lightning",
                cardImg: "imgs/chain-lightning2.jpg",
                cardText: ["Deal 16 damage to all enemies<br>Energize 2", "Deal 20 damage to all enemies<br>Energize 3"],
                damage: [16, 20],
                energize: [2, 3],
                chooseEnemyCard: false,
                index: 3,
                element: "lightning",
                action:
                [
                        function() {
                                spendMana(3);
                                damageAllEnemies(16);
                                gainEnergize(2);
                                fxChainLightning.play();
                        },
                        function() {
                                spendMana(3);
                                damageAllEnemies(20);
                                gainEnergize(3);
                                fxChainLightning.play();
                        },
                ]        
        },
        {
                manaCost: [1, 0],
                name: "Frostbolt",
                cardImg: "imgs/frostbolt.jpeg",
                cardText: ["Deal 10 damage and inflict frostbite", "Deal 15 damage and inflict frostbite"],
                damage: [10, 15],
                chooseEnemyCard: true,
                index: 4,
                element: "ice",
                action: 
                [
                        function() {
                                spendMana(1);
                                damageEnemy(10, chosenEnemy);
                                inflictFrostbite(chosenEnemy);
                                fxFrostbolt.play();
                        },
                        function() {
                                spendMana(0);
                                damageEnemy(15, chosenEnemy);
                                inflictFrostbite(chosenEnemy);
                                fxFrostbolt.play();
                        }
                ]
        },        
        {
                manaCost: [2, 2],
                name: "Frost Fingers",
                cardImg: "imgs/frost-fingers.jpg",
                cardText: ["Deal 15 damage. if you or the enemy has frostbite deal double instead.", "Deal 15 damage. if you or the enemy has frostbite deal triple instead."],
                damage: [15, 15],
                chooseEnemyCard: true,
                index: 5,
                element: "ice",
                action:
                [       
                        function() {
                                spendMana(2);
                                if (playerFrostbite || enemyFrostbite[chosenEnemy]) {
                                        if (tidalImbuement) {
                                                damageEnemy(35, chosenEnemy);
                                        } else {
                                                damageEnemy(15, chosenEnemy);
                                        }
                                }
                                damageEnemy(15, chosenEnemy);
                                fxFrostFingers.play();
                        },
                        function() {
                                spendMana(2);
                                if (playerFrostbite || enemyFrostbite[chosenEnemy]) {
                                        if (tidalImbuement) {
                                                damageEnemy(60, chosenEnemy);
                                        } else {
                                                damageEnemy(30, chosenEnemy);
                                        }
                                }
                                damageEnemy(15, chosenEnemy);
                                fxFrostFingers.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Tornado",
                cardImg: "imgs/tornado.jpg",
                cardText: ["Enemies with windswept take 12 damage. Enemies without gain windswept", "Enemies with windswept take 12 damage. Enemies without gain windswept. Draw a card."],
                damage: [12, 12],
                chooseEnemyCard: false,
                index: 6,
                element: "air",
                action:
                [ 
                        function() {
                                spendMana(1);
                                damageAllEnemies(20);
                                let enemyIsWindswept = [];
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                if (enemyWindswept[i]) {
                                                        enemyIsWindswept.push(true);
                                                        if (tidalImbuement) {
                                                                damageEnemy(12, i);
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
                                fxTornado.play();
                        },
                        function() {
                                spendMana(1);
                                if (!aeroshift) {
                                        drawCards(1);
                                } else {
                                        drawCards(2);
                                }
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
                                fxTornado.play();
                        },
                ]
        },
        {
                manaCost: [1, 1],
                name: "Gale Force",
                cardImg: "imgs/gale.jpg",
                cardText: ["Deal 10 damage to an enemy and inflict windswept", "Deal 10 damage to an enemy and inflict windswept. Increase Winds of Wind damage by 3"],
                damage: [10, 10],
                chooseEnemyCard: true,
                index: 7,
                element: "air",
                action:
                [ 
                        function() {
                                spendMana(1);
                                damageEnemy(10, chosenEnemy);
                                inflictWindswept(chosenEnemy);
                                fxGaleForce.play();
                        },
                        function() {
                                spendMana(1);
                                damageEnemy(10, chosenEnemy);
                                inflictWindswept(chosenEnemy);
                                windsOfChange += 3;
                                fxGaleForce.play();
                        },
                ]
        },
        {
                manaCost: [1, 1],
                name: "Blood Cocoon",
                cardImg: "imgs/blood-cocoon2.jpg",
                cardText: ["Gain 1 Blood Siphon", "Gain 2 Blood Siphon"],
                blood: [1, 2],
                chooseEnemyCard: false,
                index: 8,
                element: "water",
                action:
                [ 
                        function() {
                                spendMana(1);
                                gainBloodSiphon(1);
                                fxBloodCocoon.play();
                        },
                        function() {
                                spendMana(1);
                                gainBloodSiphon(2);
                                fxBloodCocoon.play();
                        },
                ]
        },
        {
                manaCost: [2, 2],
                name: "Tidal Trident",
                cardImg: "imgs/infusion2.jpg",
                cardText: ["Deal 18 damage and half that to adjacent targets<br>Gain 1 regen for each target hit", "Deal 18 damage and half that to adjacent targets<br>Gain 1 regen and blood siphon for each target hit"],
                damage: [18, 18],
                damageThird: [8, 8],
                regen: [1, 1],
                blood: [0, 1],            
                chooseEnemyCard: true,
                index: 9,
                element: "water",
                action:
                [
                        function() {
                                spendMana(2);
                                let tidalDamage = (damageEnemy(18, chosenEnemy));
                                if (playerWindswept) {
                                        tidalDamage *= 2;
                                }
                                console.log(tidalDamage);
                                gainRegen(1);
                                if (chosenEnemy === 1) {
                                        if (!enemyIsDead[0]) {
                                                damageEnemy((tidalDamage) / 2, 0);
                                                gainRegen(1);
                                        }
                                        if (!enemyIsDead[2] && numberOfEnemies === 3) {
                                                damageEnemy((tidalDamage) / 2, 2);
                                                gainRegen(1);
                                        }
                                } else {
                                        if (!enemyIsDead[1]) {
                                                damageEnemy((tidalDamage) / 2, 1);
                                                gainRegen(1);
                                        }
                                }
                                fxTidalImbuement.play();
                        },
                        function() {
                                spendMana(2);
                                let tidalDamage = (damageEnemy(18, chosenEnemy));
                                if (playerWindswept) {
                                        tidalDamage *= 2;
                                }
                                console.log(tidalDamage);
                                gainRegen(1);
                                gainBloodSiphon(1);
                                if (chosenEnemy === 1) {
                                        if (!enemyIsDead[0]) {
                                                damageEnemy((tidalDamage) / 2, 0);
                                                gainRegen(1);
                                                gainBloodSiphon(1);
                                        }
                                        if (!enemyIsDead[2] && numberOfEnemies === 3) {
                                                damageEnemy((tidalDamage) / 2, 2);
                                                gainRegen(1);
                                                gainBloodSiphon(1);
                                        }
                                } else {
                                        if (!enemyIsDead[1]) {
                                                damageEnemy((tidalDamage) / 2, 1);
                                                gainRegen(1);
                                                gainBloodSiphon(1);
                                        }
                                }
                                fxTidalImbuement.play();
                        },
                ]
        },
        {
                manaCost: [1, 1],
                name: "Earth Barrier",
                cardImg: "imgs/earth-barrier.jpg",
                cardText: ["Gain 12 block", "Gain 20 block"],
                block: [12, 20],
                chooseEnemyCard: false,
                index: 10,
                element: "earth",
                action:
                [ 
                        function() {
                                spendMana(1);
                                gainBlock(12);
                                fxEarthBarrier.play();
                        },
                        function() {
                                spendMana(1);
                                gainBlock(20);
                                fxEarthBarrier.play();
                        },
                ]
        },
        {
                manaCost: [2, 2],
                name: "Thorn Shield",
                cardImg: "imgs/thorn-shield.jpg",
                cardText: ["Gain 16 block and 2 thorns", "Gain 16 block and 3 thorns"],
                block: [16, 20],
                thorns: [2, 3],
                chooseEnemyCard: false,
                index: 11,
                element: "earth",
                action:
                [
                        function() {
                                spendMana(2);
                                gainBlock(16);
                                gainThorns(2);
                                fxThornShield.play();
                        },
                        function() {
                                spendMana(2);
                                gainBlock(16);
                                gainThorns(3);
                                fxThornShield.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Firefall",
                cardImg: "imgs/Rain-of-fire.jpg",
                cardText: ["Inflict 6 burn on all enemies and 3 on yourself", "Inflict 8 burn on all enemies and 4 on yourself"],
                burn: [6, 8],
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
                                fxFirefall.play();
                        },
                        function() {
                                spendMana(2);
                                burnAllEnemies(8);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 4;
                                displayBlock(playerBurnImg, playerBurnNumber);
                                fxFirefall.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Kindred Spirits",
                cardImg: "imgs/combustion.jpg",
                cardText: ["Gain 3 burn and transfer your burn onto the enemy", "Gain 3 burn and transfer your burn onto all enemies"],
                burn: [3, 3],
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
                                fxKindredSpirits.play();
                        },
                        function() {
                                spendMana(1);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 3;
                                burnAllEnemies(parseFloat(playerBurnNumber.innerText));
                                playerBurnNumber.innerText = 0;
                                displayNone(playerBurnImg, playerBurnNumber); 
                                fxKindredSpirits.play();
                        }
                ]        
        },
        {
                manaCost: [2, 3],
                name: "Phoenix Fire",
                cardImg: "imgs/phoenix.jpg",
                cardText: [`Deal damage equal to 2x the amount of burn on the enemy`, `Deal damage equal to 4x the amount of burn on the enemy`],
                damage: [2, 3],
                chooseEnemyCard: true,
                index: 14,
                element: "fire",
                action:
                [
                        function() {
                                spendMana(2);
                                damageEnemy((parseFloat(enemyBurnNumber[chosenEnemy].innerText) * 2), chosenEnemy);
                                fxPhoenixFire.play();
                        },
                        function() {
                                spendMana(3);
                                damageEnemy((parseFloat(enemyBurnNumber[chosenEnemy].innerText) * 4), chosenEnemy);
                                fxPhoenixFire.play();
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
                                fxPotion.play();
                        },
                        function() {
                                spendMana(2);
                                essenceOfEmberUpgrade.push(true);
                                fxPotion.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Stormblessed",
                cardImg: "imgs/stormblessed4.jpg",
                cardText: ["Deal 50% of the damage you've dealt this turn to an enemy", "Deal 75% of the damage you've dealt this turn to an enemy"],
                damage: [damageThisTurn * .5, damageThisTurn * .75],
                chooseEnemyCard: true,
                index: 16,
                element: "lightning",
                action:
                [
                        function() {
                                spendMana(1);
                                damageEnemy(Math.floor(damageThisTurn / 2), chosenEnemy);
                                fxStormblessed.play();
                        },
                        function() {
                                spendMana(1);
                                damageEnemy(Math.floor(damageThisTurn * .75), chosenEnemy);
                                fxStormblessed.play();
                        }
                ]
        },
        {
                manaCost: [3, 3],
                name: "Ball Lightning",
                cardImg: "imgs/static-electricity.jpg",
                cardText: ["Deal 10 damage to a random enemy three times and Energize 1 for each enemy damaged",
                        "Deal 10 damage to a random enemy four times and Energize 1 for each enemy damaged"],
                damage: [10, 10],
                energize: [1, 1],
                chooseEnemyCard: false,
                index: 17,
                element: "lightning",
                action:
                [
                        function() {
                                spendMana(3);
                                fxBallLightning.play();
                                let randomEnemies = [];
                                let index = 0;
                                function ballAttack() {
                                        if (enemiesAreDead) {
                                                return;
                                        }
                                        let randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                        while (enemyIsDead[randomEnemy]) {
                                                randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                                if (enemyCurrentHealth[randomEnemy].innerText <= 0) {
                                                        enemyIsDead[randomEnemy] = true;
                                                        if ((numberOfEnemies === 1 && enemyIsDead[0]) || (numberOfEnemies === 2 && enemyIsDead[0] && enemyIsDead[1]) || (numberOfEnemies === 3  && enemyIsDead[0] && enemyIsDead[1] && enemyIsDead[2])) {
                                                                return;
                                                        } 
                                                }
                                        }
                                        damageEnemy(10, randomEnemy);
                                        if (!randomEnemies.includes(randomEnemy)) {
                                                randomEnemies[index] = randomEnemy;
                                                index++;
                                                gainEnergize(1);
                                        }
                                }
                                ballAttack();
                                setTimeout(ballAttack, 200);
                                setTimeout(ballAttack, 400);
                        },
                        function() {
                                spendMana(3);
                                fxBallLightning.play();
                                let randomEnemies = [];
                                let index = 0;
                                function ballAttack() {
                                        if (enemiesAreDead) {
                                                return;
                                        }
                                        let randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                        while (enemyIsDead[randomEnemy]) {
                                                randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                                if (enemyCurrentHealth[randomEnemy].innerText <= 0) {
                                                        enemyIsDead[randomEnemy] = true;
                                                        if ((numberOfEnemies === 1 && enemyIsDead[0]) || (numberOfEnemies === 2 && enemyIsDead[0] && enemyIsDead[1]) || (numberOfEnemies === 3  && enemyIsDead[0] && enemyIsDead[1] && enemyIsDead[2])) {
                                                                return;
                                                        } 
                                                }
                                        }
                                        damageEnemy(10, randomEnemy);
                                        if (!randomEnemies.includes(randomEnemy)) {
                                                randomEnemies[index] = randomEnemy;
                                                index++;
                                                gainEnergize(1);
                                        }
                                }
                                ballAttack();
                                setTimeout(ballAttack, 200);
                                setTimeout(ballAttack, 400);
                                setTimeout(ballAttack, 600);
                        }
                ]
        },
        {
                manaCost: [4, 4],
                name: "Conduit",
                cardImg: "imgs/conduit2.jpg",
                cardText: ["Deal 40 damage plus 20 for each mana you have after playing Conduit. Energize 1", "Deal 40 damage plus 30 for each mana you have after playing Conduit. Energize 1"],
                damage: [40, 40],
                damageSecond: [15, 20],
                energize: [1, 1],
                chooseEnemyCard: true,
                index: 18,
                element: "lightning",
                action:
                [
                        function() {
                                spendMana(4);  
                                damageEnemy(40 + (currentMana.innerText * 20), chosenEnemy);
                                gainEnergize(1);
                                fxConduit.play();
                        },
                        function() {
                                spendMana(4);  
                                damageEnemy(40 + (currentMana.innerText * 30), chosenEnemy);
                                gainEnergize(1);
                                fxConduit.play();
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
                                fxPotion.play();
                        },
                        function() {
                                spendMana(2);
                                liquidLightningUpgrade.push(true);
                                fxPotion.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Ice Nova",
                cardImg: "imgs/ice-nova-12.jpg",
                cardText: ["Deal 14 damage to all enemies and inflict frostbite on everyone including yourself", "Deal 20 damage to all enemies and inflict frostbite on everyone including yourself"],
                damage: [14, 20],
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
                                fxIceNova.play();
                        },
                        function() {
                                spendMana(2);
                                damageAllEnemies(20);
                                inflictAllFrostbite();
                                displayBlock(playerFrostbiteImg);
                                playerFrostbite = true;
                                frostbiteTotal++;
                                fxIceNova.play();
                        }
                ]
        },
        {
                manaCost: [1, 0],
                name: "Frostbitten",
                cardImg: "imgs/frostbitten2.jpg",
                cardText: ["For the rest of the fight when you have frostbite, gain double block. Inflict frostbite on yourself", "For the rest of the fight when you have frostbite, gain double block. Inflict frostbite on yourself"],
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
                                fxFrostbitten.play();
                        },
                        function() {
                                spendMana(0);
                                playerFrostbite = true;
                                displayBlock(playerFrostbiteImg);
                                frostbitten = true;
                                frostbiteTotal++;
                                fxFrostbitten.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Ray of Ice",
                cardImg: "imgs/ray-of-ice.jpg",
                cardText: ["Inflict frostbite and deal damage equal to your block amount", "Gain 10 block, inflict frostbite, and deal damage equal to your block amount"],
                block: [0, 10],
                chooseEnemyCard: true,
                index: 22,
                element: "ice",
                action:
                [
                        function() {
                                spendMana(2);
                                inflictFrostbite(chosenEnemy);
                                damageEnemy(parseFloat(playerBlockNumber.innerText), chosenEnemy);
                                fxRayOfIce.play();
                        },
                        function() {
                                spendMana(2);
                                gainBlock(10);
                                inflictFrostbite(chosenEnemy);
                                damageEnemy(parseFloat(playerBlockNumber.innerText), chosenEnemy);
                                fxRayOfIce.play();
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
                                fxPotion.play();
                        },
                        function() {
                                spendMana(2);
                                snowfallElixir = true;
                                fxPotion.play();
                        }
                ]
        },
        {
                manaCost: [0, 0],
                name: "Winds of Change",
                cardImg: "imgs/winds-of-change2.jpg",
                cardText: ["Deal 8 damage. All Winds of Change gain +3 damage or +6 damage if enemy is windswept", "Deal 5 damage. All Winds of Change gain +4 damage or +8 damage if enemy is windswept"],
                damage: [5, 5],
                chooseEnemyCard: true,
                index: 24,
                element: "air",
                action:
                [
                        function() {
                                damageEnemy(windsOfChange, chosenEnemy);
                                if (enemyWindswept[chosenEnemy]) {
                                        windsOfChange += 6;
                                } else {
                                        windsOfChange += 3;
                                }
                                fxWindsOfChange.play();
                        },
                        function() {
                                damageEnemy(windsOfChange, chosenEnemy);
                                if (enemyWindswept[chosenEnemy]) {
                                        windsOfChange += 8;
                                } else {
                                        windsOfChange += 4;
                                }
                                fxWindsOfChange.play();
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
                                if (!aeroshift) {
                                        drawCards(2);
                                } else {
                                        drawCards(3);
                                }
                                fxWindwalk.play();
                        },
                        function() {
                                spendMana(1);
                                if (!aeroshift) {
                                        drawCards(2);
                                } else {
                                        drawCards(3);
                                }
                                randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                while (enemyIsDead[randomEnemy]) {
                                        randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                }
                                inflictWindswept(randomEnemy);
                                fxWindwalk.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Gust",
                cardImg: "imgs/gust.jpg",
                cardText: ["Draw a Winds of Change from your draw pile and discard pile", "Draw a Winds of Change from your draw pile and discard pile. They gain +2 damage for each drawn."],
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
                                fxGust.play();
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
                                                windsOfChange += 2;
                                                let spliceCard = drawPileArray.splice(drawPileArray.indexOf(windCards[i]), 1).pop();
                                                handArray.push(spliceCard);
                                                displayFlex(windCards[i]);
                                                drawCard = true;
                                                //console.log("DRAW\nDRAW: ", drawPileArray);
                                                //console.log("DRAW\nHAND: ", handArray);
                                                //console.log("DRAW\nDISCARD: ", discardPileArray);
                                        }
                                        if (discardPileArray.includes(windCards[i]) && discardCard === false) {
                                                windsOfChange += 2;
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
                                fxGust.play();
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
                                fxPotion.play();
                        },
                        function() {
                                spendMana(2);
                                maxHandLength++;
                                fxPotion.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Sanguine Spring",
                cardImg: "imgs/sanguine.jpg",
                cardText: ["Cleanse all debuffs and gain 2 blood siphon", "Cleanse all debuffs and gain 3 blood siphon"],
                blood: [2, 3],
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
                                fxSanguineSpring.play();
                        },
                        function() {
                                spendMana(2);
                                playerWindswept = false;
                                playerFrostbite = false;
                                playerBurnNumber.innerText = 0;
                                displayNone(playerWindsweptImg, playerFrostbiteImg, playerBurnImg, playerBurnNumber);
                                gainBloodSiphon(3);
                                fxSanguineSpring.play();
                        }
                ]
        },
        {
                manaCost: [0, 0],
                name: "Mistborn",
                cardImg: "imgs/mistborn.jpg",
                cardText: ["Use all mana to gain 1 regeneration and blood siphon per mana spent", "Use all mana to gain 2 regeneration and 1 blood siphon per mana spent"],
                regen: [1, 2],
                blood: [1, 1],
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
                                fxMistborn.play();
                        },
                        function() {
                                gainRegen(parseFloat(currentMana.innerText));
                                gainBloodSiphon(parseFloat(currentMana.innerText));
                                gainBlock(parseFloat(currentMana.innerText));
                                playerHeal(parseFloat(currentMana.innerText));
                                currentMana.innerText = 0;
                                fxMistborn.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Tsunami",
                cardImg: "imgs/tsunami-2.jpg",
                cardText: ["Deal damage to all enemies equal to how much you've healed this fight", "Deal damage to all enemies equal to how much you've healed this fight. Gain +1 max health for each enemy hit."],
                damage: [healthGainedThisFight, healthGainedThisFight],
                chooseEnemyCard: false,
                index: 30,
                element: "water",
                action:
                [
                        function() {
                                spendMana(2);
                                damageAllEnemies(healthGainedThisFight);
                                fxTsunami.play();
                        },
                        function() {
                                spendMana(2);
                                damageAllEnemies(healthGainedThisFight);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead === false) {
                                                playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 1;
                                        }
                                };
                                fxTsunami.play();
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
                                fxPotion.play();
                        },
                        function() {
                                spendMana(2);
                                playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 7;
                                gainRegen(5);
                                fxPotion.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Earth Shatter",
                cardImg: "imgs/earth-shatter.jpg",
                cardText: ["Lose all of your block and deal damage to all enemies equal to how much was lost", "Lose all of your block and deal damage to all enemies equal to how much was lost. Regain 50% of your block."],
                block: [0, 50],
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
                                fxEarthShatter.play();
                        },
                        function() {
                                spendMana(2);
                                damageAllEnemies(parseFloat(playerBlockNumber.innerText));
                                const halfBlock = parseFloat(playerBlockNumber.innerText) * .5;
                                playerBlockNumber.innerText = 0;
                                gainBlock(halfBlock);
                                fxEarthShatter.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Weave of Thorns",
                cardImg: "imgs/vine-armor2.jpg",
                cardText: ["Gain 4 thorns", "Gain 6 thorns"],
                thorns: [4, 6],
                chooseEnemyCard: false,
                index: 33,
                element: "earth",
                action:
                [
                        function() {
                                spendMana(2);
                                gainThorns(4);
                                fxWeaveOfThorns.play();
                        },
                        function() {
                                spendMana(2);
                                gainThorns(6);
                                fxWeaveOfThorns.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Vine Whip",
                cardImg: "imgs/thorn-whip.jpg",
                cardText: ["Deal damage equal to 3x your thorns", "Gain 2 thorns and deal damage equal to 3x your thorns"],
                thorns: [0, 2],
                chooseEnemyCard: true,
                index: 34,
                element: "earth",
                action:
                [
                        function() {
                                spendMana(2);
                                damageEnemy((playerThornsNumber.innerText * 3), chosenEnemy);
                                fxVineWhip.play();
                        },
                        function() {
                                spendMana(2);
                                gainThorns(2);
                                damageEnemy((playerThornsNumber.innerText * 3), chosenEnemy);
                                fxVineWhip.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Terra's Blessing",
                cardImg: "imgs/terra-infusion.jpg",
                cardText: ["[POTION]<br>All block gained is increased by 5 and thorns by 1", "[POTION]<br>Gain 10 block and 2 thorns. All block gained is increased by 5 and thorns by 1"],
                block: [0, 10],
                thorns: [0, 2],
                chooseEnemyCard: false,
                index: 35,
                element: "earth",
                action:
                [
                        function() {
                                spendMana(2);
                                terrasBlessing.push(true);
                                fxPotion.play();
                        },
                        function() {
                                spendMana(2);
                                gainBlock(10);
                                gainThorns(2);
                                terrasBlessing.push(true);
                                fxPotion.play();
                        }
                ]
        },
        {
                manaCost: [0, 1],
                name: "Forest Fire",
                cardImg: "imgs/forest-fire.jpg",
                cardText: ["Energize 1 for each enemy burning", "Burn all enemies for 3 and Energize 1 for each enemy burning"],
                burn: [0, 3],
                energize: [1, 1],
                chooseEnemyCard: false,
                index: 36,
                element: "fire-lightning fire lightning",
                action:
                [
                        function() {
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                if (enemyBurnNumber[i].innerText > 0) {
                                                        gainEnergize(1)
                                                }
                                        }
                                }
                                fxForestFire.play();
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
                                fxForestFire.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Frostfire Fusion",
                cardImg: "imgs/frostfire-fusion.jpg",
                cardText: ["If the enemy is either burning or inflicted with frostbite they are inflicted with 6 burn and frostbite.", "If the enemy is either burning or inflicted with frostbite they are inflicted with 8 burn and frostbite."],
                burn: [6, 8],
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
                                fxFrostfireFusion.play();
                        },
                        function() {
                                spendMana(1);
                                if (parseFloat(enemyBurnNumber[chosenEnemy].innerText) > 0 || enemyFrostbite[chosenEnemy]) {
                                        burnEnemy(8, chosenEnemy);
                                        inflictFrostbite(chosenEnemy);
                                }
                                fxFrostfireFusion.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Fan the Flames",
                cardImg: "imgs/fan-the-flames.jpg",
                cardText: ["Inflict windswept on all enemies and increase burn count by 6 if they're already burning", "Inflict windswept on all enemies and increase burn count by 8 if they're already burning"],
                burn: [6, 8],
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
                                fxFanTheFlames.play();
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
                                fxFanTheFlames.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Cauterize",
                cardImg: "imgs/cauterize2.jpg",
                cardText: ["Gain 4 burn, 4 regen, and 1 blood siphon", "Gain 5 burn, 5 regen, and 2 blood siphon"],
                burn: [4, 5],
                regen: [4, 5],
                blood: [1, 2],
                chooseEnemyCard: false,
                index: 39,
                element: "fire-water fire water",
                action:
                [
                        function() {
                                spendMana(1);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 4 + (essenceOfEmber.length * 2) + (essenceOfEmberUpgrade.length * 4);
                                displayBlock(playerBurnImg, playerBurnNumber);
                                gainBloodSiphon(1);
                                gainRegen(4);
                                fxCauterize.play();
                        },
                        function() {
                                spendMana(1);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 4 + (essenceOfEmber.length * 2) + (essenceOfEmberUpgrade.length * 4);
                                displayBlock(playerBurnImg, playerBurnNumber);
                                gainBloodSiphon(2);
                                gainRegen(5);
                                fxCauterize.play();
                        }
                ]
        },
        {
                manaCost: [3, 2],
                name: "Magma",
                cardImg: "imgs/magma.jpg",
                cardText: ["Inflict 6 burn on an enemy and gain block equal to 100% of their burn", "Inflict 6 burn on an enemy and gain block equal to 100% their burn"],
                burn: [6, 6],
                block: [100, 100],
                chooseEnemyCard: true,
                index: 40,
                element: "fire-earth fire earth",
                action: 
                [
                        function() {
                                spendMana(3);
                                burnEnemy(6, chosenEnemy);
                                gainBlock(parseFloat(enemyBurnNumber[chosenEnemy].innerText));
                                fxMagma.play();
                        },
                        function() {
                                spendMana(2);
                                burnEnemy(6, chosenEnemy);
                                gainBlock(parseFloat(enemyBurnNumber[chosenEnemy].innerText));
                                fxMagma.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Deep Freeze",
                cardImg: "imgs/deep-freeze.jpg",
                cardText: ["Electrucute enemies with frostbite dealing 20 damage", "Electrucute enemies with frostbite dealing 26 damage"],
                damage: [20, 26],
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
                                fxDeepFreeze.play();
                        },
                        function() {
                                spendMana(1);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false && enemyFrostbite[i]) {
                                                damageEnemy(26, i);
                                        }
                                }
                                fxDeepFreeze.play();
                        }
                ]
        },
        {
                manaCost: [6, 6],
                name: "Hurricane",
                cardImg: "imgs/hurricane.jpg",
                cardText: ["Inflict windswept and deal 50 damage to all enemies. Draw a card, energize 1 and gain 2 mana.", "Inflict windswept and deal 50 damage to all enemies. Draw a card, energize 2 and gain 3 mana."],
                damage: [50, 50],
                energize: [1, 2],
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
                                if (!aeroshift) {
                                        drawCards(1);
                                } else {
                                        drawCards(2);
                                }
                                currentMana.innerText = parseFloat(currentMana.innerText) + 2;
                                fxHurricane.play();
                        },
                        function() {
                                spendMana(6);
                                damageAllEnemies(50);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                inflictWindswept(i);
                                        }
                                }
                                if (!aeroshift) {
                                        drawCards(1);
                                } else {
                                        drawCards(2);
                                }
                                currentMana.innerText = parseFloat(currentMana.innerText) + 3;
                                gainEnergize(2);
                                fxHurricane.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Electric Current",
                cardImg: "imgs/electric-current.jpg",
                cardText: ["Deal 2 damage per 5 health you currently have and gain 3 regeneration", "Deal 2 damage per 5 health you currently have, gain 2 max health and 3 regeneration"],
                damage: [(parseFloat(playerCurrentHealth.innerText) * 2) / 5, (parseFloat(playerCurrentHealth.innerText) * 2) / 5],
                damageSecond: [2, 2],
                regen: [3, 3],
                chooseEnemyCard: true,
                index: 43,
                element: "lightning-water lightning water",
                action:
                [
                        function() {
                                spendMana(2);
                                gainRegen(3);
                                damageEnemy(Math.floor(2 * playerCurrentHealth.innerText / 5), chosenEnemy);
                                fxElectricCurrent.play();
                        },
                        function() {
                                spendMana(2);
                                gainRegen(3);
                                playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 2;
                                damageEnemy(Math.floor(2 * playerCurrentHealth.innerText / 5), chosenEnemy);
                                fxElectricCurrent.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Quaking Jolt",
                cardImg: "imgs/quaking-thunder3.jpg",
                cardText: ["Gain 1 thorn and energize for each enemy alive", "Gain 4 block, 1 thorn and energize for each enemy alive"],
                thorns: [1, 1],
                block: [0, 4],
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
                                fxQuakingJolt.play();
                        },
                        function() {
                                spendMana(2);
                                damageAllEnemies(10);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                gainThorns(1);
                                                gainEnergize(1);
                                                gainBlock(4);
                                        }
                                }
                                fxQuakingJolt.play();
                        }
                ]
        },
        {
                manaCost: [2, 1],
                name: "Flurry",
                cardImg: "imgs/flurry.jpg",
                cardText: ["Inflict windswept and frostbite to all enemies", "Inflict windswept and frostbite to all enemies"],           
                chooseEnemyCard: false,
                index: 45,
                element: "ice-air ice air",
                action:
                [
                        function() {
                                spendMana(2);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                inflictWindswept(i);
                                                inflictFrostbite(i);
                                        }  
                                }
                                fxFlurry.play();
                        },
                        function() {
                                spendMana(1);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false) {
                                                inflictWindswept(i);
                                                inflictFrostbite(i);  
                                        }  
                                }
                                fxFlurry.play();
                        }
                ]
        },
        {
                manaCost: [1, 0],
                name: "Liquify",
                cardImg: "imgs/liquify.jpg",
                cardText: ["Gain 2 regeneration for everyone afflicted with frostbite", "Gain 2 regeneration for everyone afflicted with frostbite"],
                regen: [2, 2],
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
                                                //addFrostbittenEnemies.push(true);
                                                gainRegen(2);
                                        }      
                                }
                                if (playerFrostbite) {
                                        //addFrostbittenEnemies.push(true);
                                        gainRegen(2);
                                }
                                //gainRegen(addFrostbittenEnemies.length);
                                //gainBloodSiphon(addFrostbittenEnemies.length);     
                                fxLiquify.play();
                        },
                        function() {
                                // ADD ALL FROSTBITTEN ENEMIES FIRST SO WHEN YOU ARE FROSTBITTEN YOU GAIN 4 / 2 BLOOD NOT 1 / .5 EACH TIME
                                let addFrostbittenEnemies = [];
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (enemyIsDead[i] === false && enemyFrostbite[i]) {
                                                //addFrostbittenEnemies.push(true);
                                                gainRegen(2);
                                        }      
                                }
                                if (playerFrostbite) {
                                        //addFrostbittenEnemies.push(true);
                                        gainRegen(2);
                                }
                                //gainRegen(addFrostbittenEnemies.length);
                                //gainBloodSiphon(addFrostbittenEnemies.length);     
                                fxLiquify.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Frozen Tundra",
                cardImg: "imgs/frozen-tundra3.jpg",
                cardText: ["Inflict everyone including yourself with frostbite and gain 5 block for everyone inflicted", "Inflict everyone including yourself with frostbite and gain 7 block for everyone inflicted"],
                block: [5, 7],
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
                                        if (frostHeart) {
                                                gainBlock(4);
                                        }
                                        displayBlock(playerFrostbiteImg);
                                        playerFrostbite = true;
                                        frostbiteTotal++;
                                }
                                fxFrozenTundra.play();
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
                                        if (frostHeart) {
                                                gainBlock(4);
                                        }
                                        displayBlock(playerFrostbiteImg);
                                        playerFrostbite = true;
                                        frostbiteTotal++;
                                }
                                fxFrozenTundra.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Air Bubbles",
                cardImg: "imgs/air-bubbles4.jpg",
                cardText: ["Gain 1 regen for each card played this turn", "Gain 1 regen for each card played this turn and draw a card"],
                regen: [1, 1],
                chooseEnemyCard: false,
                index: 48,
                element: "air-water air water",
                action:
                [
                        function() {
                                spendMana(1);
                                airBubble.push(true);
                                fxAirBubbles.play();
                        },
                        function() {
                                spendMana(1);
                                if (!aeroshift) {
                                        drawCards(1);
                                } else {
                                        drawCards(2);
                                }
                                airBubble.push(true);
                                fxAirBubbles.play();
                        }
                ]
        },
        {
                manaCost: [0, 0],
                name: "Rock Orbit",
                cardImg: "imgs/rock-orbit.jpg",
                cardText: ["Gain 4 block and draw a card", "Gain 7 block and draw a card"],
                block: [4, 7],
                chooseEnemyCard: false,
                index: 49,
                element: "air-earth air earth",
                action:
                [
                        function() {
                                gainBlock(4);
                                if (!aeroshift) {
                                        drawCards(1);
                                } else {
                                        drawCards(2);
                                }
                                fxRockOrbit.play();
                        },
                        function() {
                                gainBlock(7);
                                if (!aeroshift) {
                                        drawCards(1);
                                } else {
                                        drawCards(2);
                                }
                                fxRockOrbit.play();
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
                                fxPotion.play();
                        },
                        function() {
                                spendMana(4);
                                gaiasEmbraceUpgrade.push(true);
                                fxPotion.play();
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
        {
                manaCost: [3, 2],
                name: "Celestial Attunement",
                cardImg: "imgs/celestial-attunement.jpeg",
                cardText: ["Inflict frostbite, windswept, and 4 burn. Gain 1 energize, 2 blood siphon, and 10 block", "Inflict frostbite, windswept, and 4 burn.Gain 1 energize, 2 blood siphon, and 10 block"],
                burn: [4, 4],
                energize: [1, 1],
                blood: [2, 2],
                block: [10, 10],
                chooseEnemyCard: true,
                index: 52,
                element: "celestial",
                action:
                [
                        function() {
                                spendMana(3);
                                inflictFrostbite(chosenEnemy);
                                inflictWindswept(chosenEnemy);
                                burnEnemy(4, chosenEnemy);
                                gainEnergize(1);
                                gainBloodSiphon(2);
                                gainBlock(10);
                                fxCelestialAttunement.play();
                        },
                        function() {
                                spendMana(2);
                                inflictFrostbite(chosenEnemy);
                                inflictWindswept(chosenEnemy);
                                burnEnemy(4, chosenEnemy);
                                gainEnergize(1);
                                gainBloodSiphon(2);
                                gainBlock(10);
                                fxCelestialAttunement.play();
                        }
                ]
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
                case 51:
                        element = "gold";
                        break;
                case 52:
                        element = "celestial";
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
        updateCardText();
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
// VARIABLE FOR ENSURING YOU CANT PLAY A CARD AFTER ENDING YOUR TURN
let turnEnded = false;
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
                if (!turnEnded && !enemiesAreDead) {
                        if (waterweaver && cardsInformation[CIindex].element.includes("water")) {
                                gainRegen(1);
                                playerMaxHealth.innerText++;
                        }
                        cardsInformation[CIindex].action[upgradeIndex]();
                        addToDiscard();
                        checkHealth();
                        handContainer.style = `width: ${handArray.length- 1}9.5%`;
                        if (airBubble.length > 0) {
                                playerRegenNumber.innerText = parseFloat(playerRegenNumber.innerText) + airBubble.length;
                                displayBlock(playerRegenImg, playerRegenNumber);
                        }
                        console.log("UPDATING CARD TEXT");
                        updateCardText();
                        document.querySelectorAll(".enemy-div").forEach(i => {
                                i.style = "cursor: default";
                        });
                }
        }
        // IF CARD REQUIRES YOU TO CLICK ON AN ENEMY
        if (cardsInformation[CIindex].chooseEnemyCard) {
                cardType[index].addEventListener("click", () => {
                        turnEnded = false;
                        if (!cardClicked) {
                                cardClicked = true;
                                chosenCard = CIindex;
                                cardType[index].classList.add("card-clicked");
                                chooseEnemy();
                        } else {
                                console.log("WEEEEEEEEEEE");
                                removeCardClicked();
                                cardType[index].classList.add("card-clicked");
                                chosenCard = CIindex;
                                chooseEnemy();
                        }
                });  
        } else {
                cardType[index].addEventListener("click", () => {
                        turnEnded = false;
                        removeCardClicked();
                        if (currentMana.innerText >= cardsInformation[CIindex].manaCost[upgradeIndex]) {
                                playCard();
                        }
                });
        }
        // ADD EVENTLISTENERS TO ALL ENEMIES
        function chooseEnemy() {
                document.querySelectorAll(".enemy-div").forEach(i => {
                        i.style = "cursor: crosshair";
                });
                        
                for (let i = 0; i < numberOfEnemies; i++) {
                        if (!enemyIsDead[i]) {
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
        for (let i = 0; i < discardPileArray.length; i++) {
                if (discardPileArray[i].classList.contains("card-clicked")) {
                        discardPileArray[i].classList.remove("card-clicked");
                }
        }
}
function addCardToDeck(newRandomCard, upgradeIndex, switchMapMusic) {
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
                console.log("UPGRADE INDEX: ", upgradeIndex);
                createCard(newRandomCard, destroyedCardsContainer, "card", "card-text", upgradeIndex);
        }
        let currentCards = document.querySelectorAll(".card");
        console.log("1 currentCards", currentCards);
        let newCardsText = document.querySelectorAll(".card-text");
        if (upgradeIndex === 1) {
                currentCards[currentCards.length - 1 - potionCards.length].classList.add("upgraded");
                newCardsText[[currentCards.length - 1 - potionCards.length]].classList.add("upgraded-text");
        }
        addCardListeners(currentCards, [currentCards.length - 1 - potionCards.length], newRandomCard, upgradeIndex);
        handContainer.appendChild(currentCards[currentCards.length - 1 - potionCards.length]);
        drawPileArray.push(currentCards[currentCards.length - 1 - potionCards.length]);
        console.log("2 currentCards[currentCards.length - 1 - potionCards.length]", currentCards[currentCards.length - 1 - potionCards.length]);
        switchArea(map, arena);
        if (switchMapMusic) {
                //switchMusic(allMusic[mapMusicIndex]);
        }
        windsOfChange = 8;
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
        newCardChoices[0].addEventListener("click", () => {addCardToDeck(newRandomCard0, 0, true)});
        newCardChoices[1].addEventListener("click", () => {addCardToDeck(newRandomCard1, 0, true)});
        newCardChoices[2].addEventListener("click", () => {addCardToDeck(newRandomCard2, 0, true)});
        newCardChoices[3].addEventListener("click", () => {addCardToDeck(newRandomCard3, 0, true)});
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
const playerBlockImg = document.querySelector("#player-block-img");
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
const playerTidalDiv = document.querySelector("#player-tidal-div");
const playerManaDiv = document.querySelector("#mana-bar-div");
const playerImgText = document.querySelectorAll(".player-img-text");
function addActionText(div, text) {                
        div.addEventListener("mouseover", () => {
                displayFlex(text);
        });
        div.addEventListener("mouseout", () => {
                displayNone(text);
        });
}
addActionText(playerFrostbiteImg, playerImgText[0]);
addActionText(playerWindsweptImg, playerImgText[1]);
addActionText(playerBurnDiv, playerImgText[2]);
addActionText(playerEnergizeDiv, playerImgText[3]);
addActionText(playerRegenDiv, playerImgText[4]);
addActionText(playerBloodDiv, playerImgText[5]);
addActionText(playerThornsDiv, playerImgText[6]);
addActionText(playerTidalDiv, playerImgText[7]);
addActionText(playerManaDiv, playerImgText[8]);
playerImgText[8].style = "margin-top: -10rem";

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
        } else {
                if (liquidLightning) {
                        damage += liquidLightning.length * 5;
                }
                if (liquidLightningUpgrade) {
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
                        let healPercentage = .2;
                        if (bloodbender) {
                                healPercentage = .4;
                        }
                        if (empowerBloodSiphon) {
                                healPercentage += .4;
                                empowerBloodSiphon = false;
                        }
                        playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + Math.floor((damage * healPercentage));
                        topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + Math.floor((damage * healPercentage));
                        healthGainedThisFight += Math.floor((damage * healPercentage));
                        healthRestoredTotal += Math.floor((damage * healPercentage));
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
        return damage;
}
function damageAllEnemies(damage) {
        for (let i = 0; i < numberOfEnemies; i++) {
                if (enemyIsDead[i] === false && iceSpear && enemyFrostbite[i]) {
                        damageEnemy(4, i);
                }
        }
        if (liquidLightning.length > 0) {
                damage += 5;
        }
        if (liquidLightningUpgrade.length > 0) {
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
                                let healPercentage = .2;
                                if (bloodbender) {
                                        healPercentage = .4;
                                }
                                if (empowerBloodSiphon) {
                                        healPercentage += .4;
                                        empowerBloodSiphon = false;
                                }
                                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + Math.floor((damage * healPercentage));
                                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + Math.floor((damage * healPercentage));
                                healthGainedThisFight += Math.floor((damage * healPercentage));
                                healthRestoredTotal += Math.floor((damage * healPercentage));
                        }
                        // CHECK block
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
                if (ghostIndex === 11) {
                        enemyAttackActionNumber[enemy].innerText = Math.floor(enemyAttackActionNumber[enemy].innerText * .50);    
                        enemyBurnActionNumber[enemy].innerText = Math.floor(enemyBurnActionNumber[enemy].innerText * .50);
                        windsweptTotal++;
                }
        }
}
function leechBuffs(enemy, leech) {
        if (leech) {
                function checkBuffs(buff, enemyImg, playerImg, playerNumber, total) {
                        if (buff[enemy].innerText > 0) {
                                if (buff[enemy].innerText > 1) {
                                        buff[enemy].innerText = parseFloat(buff[enemy].innerText) - 2;
                                        playerNumber.innerText = parseFloat(playerNumber.innerText) + 2;
                                        total += 2;
                                } else {
                                        buff[enemy].innerText = parseFloat(buff[enemy].innerText) - 1;
                                        playerNumber.innerText = parseFloat(playerNumber.innerText) + 1;
                                        total++;
                                }
                                if (playerNumber.innerText > 0) {
                                        displayBlock(playerImg, playerNumber);
                                }
                                if (buff[enemy].innerText == 0) {
                                        displayNone(enemyImg[enemy], buff[enemy]);
                                }
                        }
                }
                checkBuffs(enemyBlockNumber, enemyBlockImg, playerBlockImg, playerBlockNumber, blockTotal);
                checkBuffs(enemyRegenNumber, enemyRegenImg, playerRegenImg, playerRegenNumber, null);
                checkBuffs(enemyBloodNumber, enemyBloodImg, playerBloodImg, playerBloodNumber, null);
                checkBuffs(enemyThornsNumber, enemyThornsImg, playerThornsImg, playerThornsNumber, thornsTotal);
        } else {
                function checkBuffs(buff, enemyImg, playerImg, playerNumber, total) {
                        if (buff[enemy].innerText > 0) {
                                if (buff[enemy].innerText > 0) {
                                        playerNumber.innerText = parseFloat(playerNumber.innerText) + parseFloat(buff[enemy].innerText);
                                        total += buff[enemy].innerText;
                                        buff[enemy].innerText = parseFloat(buff[enemy].innerText) - (buff[enemy].innerText);
                                }
                                if (playerNumber.innerText > 0) {
                                        displayBlock(playerImg, playerNumber);
                                }
                                if (buff[enemy].innerText == 0) {
                                        displayNone(enemyImg[enemy], buff[enemy]);
                                }
                        }
                }
                checkBuffs(enemyBlockNumber, enemyBlockImg, playerBlockImg, playerBlockNumber, blockTotal);
                checkBuffs(enemyRegenNumber, enemyRegenImg, playerRegenImg, playerRegenNumber, null);
                checkBuffs(enemyBloodNumber, enemyBloodImg, playerBloodImg, playerBloodNumber, null);
                checkBuffs(enemyThornsNumber, enemyThornsImg, playerThornsImg, playerThornsNumber, thornsTotal);
                stealBuffs = false;
        }
}
function inflictFrostbite(enemy) {
        if (snowfallElixir) {
                inflictAllFrostbite();
        } else {
                if (enemyFrostbite[enemy] === false) {
                        if (frostHeart) {
                                gainBlock(4);
                                blockTotal += 4;
                        }
                        if (cryocast) {
                                leechBuffs(enemy, true);
                        }
                        if (stealBuffs) {
                                leechBuffs(enemy, false);
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
}
function inflictAllFrostbite() {
        for (let i = 0; i < numberOfEnemies; i++) {
                if (enemyIsDead[i] === false && enemyFrostbite[i] === false) {
                        if (frostHeart) {
                                gainBlock(4);
                                blockTotal += 4;
                        }
                        if (cryocast) {
                                leechBuffs(i, true);
                        }
                        if (stealBuffs) {
                                leechBuffs(i, false);
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
                const deathMusic = new Audio("audio/death-music.wav");
                //switchMusic(deathMusic);
                arena.classList.add("dim");
                //arena.style = "position: absolute";
                displayFlex(deathScreenContainer);
                //displayBlock(arena);
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
                document.querySelector("#play-again-button").addEventListener("click", () => {
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
        if (surgebinder) {
                amount *= 2;
        }
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
        if (concentratedFireTracking[enemy]) {
                burn = Math.floor(burn * 1.5);
                concentratedFireTracking[enemy] = false;
        }
        if (concentratedFire) {
                concentratedFireTracking[enemy] = true;
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
        if (essenceOfEmber.length > 0) {
                burn += 2;
        } else if (essenceOfEmberUpgrade.length > 0) {
                burn += 4;
        }
        for (let i = 0; i < numberOfEnemies; i++) {
                if (enemyIsDead[i] === false) {
                        if (concentratedFireTracking[i]) {
                                burn = Math.floor(burn * 1.5);
                                concentratedFireTracking[i] = false;
                        }
                        if (concentratedFire) {
                                concentratedFireTracking[i] = true;
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
        if (parseFloat(playerBurnNumber.innerText) > 0) {
                if (playerBlockNumber.innerText <= 0) {
                        playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) - parseFloat(playerBurnNumber.innerText);
                        topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) - parseFloat(playerBurnNumber.innerText);
                } else if (playerBlockNumber.innerText <= parseFloat(playerBurnNumber.innerText)) {
                        topBarHealthNumber.innerText -= parseFloat(playerBurnNumber.innerText) - parseFloat(playerBlockNumber.innerText);
                        playerCurrentHealth.innerText -= parseFloat(playerBurnNumber.innerText) - parseFloat(playerBlockNumber.innerText);
                        displayNone(playerBlockNumber, playerBlockImg);
                        if (vineBracelet) {
                                playerBlockNumber.innerText = 10
                        }
                } else {
                        playerBlockNumber.innerText -= parseFloat(playerBurnNumber.innerText); 
                }
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
function updateCardText() {
        let currentCardText = document.querySelectorAll(".card-text");
        let [oddDamage, oddDamageSecond, oddBurn, oddEnergize, oddRegen, oddBlood, oddBlock, oddThorns] = [[], [], [], [], [], [], [], []];
        for (let i = 0; i < handArray.length; i++) {
                oddDamage[i] = false;
                oddDamageSecond[i] = false;
                oddBurn[i] = false;
                oddEnergize[i] = false;
                oddRegen[i] = false;
                oddBlood[i] = false;
                oddBlock[i] = false;
                oddThorns[i] = false;
        }
        function updateText(debuff, energized, frostbit, tidal, ember, emberUpgrade, liquid, liquidUpgrade, terraBlock, terraThorns) {
                for (let i = 0; i < handArray.length; i++) {
                        for (let j = 0; j < cardsInformation.length; j++) {
                                if (handArray[i].classList.contains(j)) {
                                        for (let k = 0; k < currentCardText.length; k++) {
                                                if (currentCardText[k].classList.contains(j)) {
                                                        if (debuff === .5) {
                                                                if (cardsInformation[j].name === "Stormblessed") {
                                                                        cardsInformation[j].damage[0] = Math.floor(damageThisTurn * .5);
                                                                        cardsInformation[j].damage[1] = Math.floor(damageThisTurn * .75);
                                                                }
                                                                if (cardsInformation[j].name === "Winds of Change") {
                                                                        cardsInformation[j].damage[0] = windsOfChange;
                                                                        cardsInformation[j].damage[1] = windsOfChange;
                                                                }
                                                                if (cardsInformation[j].name === "Tsunami") {
                                                                        cardsInformation[j].damage[0] = healthGainedThisFight;
                                                                        cardsInformation[j].damage[1] = healthGainedThisFight;
                                                                }
                                                                if (cardsInformation[j].name === "Electric Current") {
                                                                        cardsInformation[j].damage[0] = Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5));
                                                                        cardsInformation[j].damage[1] = Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5));
                                                                }
                                                        }
                                                        function update(type, oddType) {
                                                                let upgradeIndex = 0;
                                                                if (currentCardText[k].classList.contains("upgraded-text")) {
                                                                        upgradeIndex = 1;
                                                                }
                                                                if (debuff === 2) {
                                                                        if (playerFrostbite && frostbitten && type === cardsInformation[j].block) {
                                                                                type[upgradeIndex] *= frostbit;
                                                                        }
                                                                        if (tidalImbuement && type === cardsInformation[j].damage) {
                                                                                type[upgradeIndex] += tidal;
                                                                        }
                                                                        if (playerFrostbite && (type === cardsInformation[j].block || type === cardsInformation[j].regen || type === cardsInformation[j].blood || type === cardsInformation[j].thorns)) {
                                                                                if (frostbitten && type === cardsInformation[j].block) {
                                                                                        type[upgradeIndex] *= frostbit
                                                                                } else {
                                                                                        type[upgradeIndex] = Math.floor(type[upgradeIndex] * debuff);
                                                                                }
                                                                                if (oddType[i]) {
                                                                                        type[upgradeIndex]++;
                                                                                }
                                                                        }
                                                                        if (playerWindswept && (type === cardsInformation[j].damage || type === cardsInformation[j].burn)) {
                                                                                type[upgradeIndex] = Math.floor(type[upgradeIndex] * debuff);
                                                                                if (oddType[i]) {
                                                                                        type[upgradeIndex]++;
                                                                                }
                                                                                if ("damageSecond" in cardsInformation[j]) {
                                                                                        cardsInformation[j].damageSecond[upgradeIndex] = Math.floor(cardsInformation[j].damageSecond[upgradeIndex] * debuff);
                                                                                        if (oddDamageSecond[i] && debuff === 2) {
                                                                                                cardsInformation[j].damageSecond[upgradeIndex]++;
                                                                                        }
                                                                                }
                                                                                
                                                                        }
                                                                }
                                                                if (type === cardsInformation[j].burn && (essenceOfEmber.length > 0 || essenceOfEmberUpgrade.length > 0)) {
                                                                        type[upgradeIndex] += (essenceOfEmber.length * ember) + (essenceOfEmberUpgrade * emberUpgrade);
                                                                }
                                                                if (type === cardsInformation[j].damage && (liquidLightning.length > 0 || liquidLightningUpgrade.length > 0)) {
                                                                        type[upgradeIndex] += (liquidLightning.length * liquid) + (liquidLightningUpgrade * liquidUpgrade);
                                                                }
                                                                if (type === cardsInformation[j].energize && surgebinder) {
                                                                        type[upgradeIndex] *= energized;
                                                                }
                                                                if (terrasBlessing.length > 0) {
                                                                        if (type === cardsInformation[j].block) {
                                                                                type[upgradeIndex] += terrasBlessing.length * terraBlock;
                                                                        }
                                                                        if (type === cardsInformation[j].block) {
                                                                                type[upgradeIndex] += terrasBlessing.length * terraThorns;
                                                                        }
                                                                }
                                                                if (debuff === .5) {
                                                                        if (type[upgradeIndex] % 2 === 1) {
                                                                                oddType[i] = true;
                                                                        }
                                                                        if (playerFrostbite && (type === cardsInformation[j].block || type === cardsInformation[j].regen || type === cardsInformation[j].blood || type === cardsInformation[j].thorns)) {
                                                                                if (frostbitten && type === cardsInformation[j].block) {
                                                                                        type[upgradeIndex] *= frostbit
                                                                                } else {
                                                                                        type[upgradeIndex] = Math.floor(type[upgradeIndex] * debuff);
                                                                                }
                                                                        }
                                                                        if (playerWindswept && (type === cardsInformation[j].damage || type === cardsInformation[j].burn)) {
                                                                                type[upgradeIndex] = Math.floor(type[upgradeIndex] * debuff);
                                                                                if ("damageSecond" in cardsInformation[j]) {
                                                                                        cardsInformation[j].damageSecond[upgradeIndex] = Math.floor(cardsInformation[j].damageSecond[upgradeIndex] * debuff);
                                                                                        if (oddDamageSecond[i] && debuff === 2) {
                                                                                                cardsInformation[j].damageSecond[upgradeIndex]++;
                                                                                        }
                                                                                }
                                                                        }
                                                                        if (tidalImbuement && type === cardsInformation[j].damage) {
                                                                                type[upgradeIndex] += tidal;
                                                                        }
                                                                }
                                                        }
                                                        if ("damage" in cardsInformation[j]) {
                                                                update(cardsInformation[j].damage, oddDamage);
                                                        }
                                                        if ("energize" in cardsInformation[j]) {
                                                                update(cardsInformation[j].energize, oddEnergize);
                                                        }
                                                        if ("regen" in cardsInformation[j]) {
                                                                update(cardsInformation[j].regen, oddRegen);
                                                        }
                                                        if ("blood" in cardsInformation[j]) {
                                                                update(cardsInformation[j].blood, oddBlood);
                                                        }
                                                        if ("block" in cardsInformation[j]) {
                                                                update(cardsInformation[j].block, oddBlock);
                                                        }
                                                        if ("thorns" in cardsInformation[j]) {
                                                                update(cardsInformation[j].thorns, oddThorns);
                                                        }
                                                }
                                        }
                                }
                        }
                }
        }
        console.log("UPDATE TEXT");
        updateText(.5, 2, 2, 10, 2, 4, 5, 7, 5, 1);
        // UPDATE ARRAY WITH NEW CHANGED STATS
        let updateCardTextStats = [
                [`Deal ${cardsInformation[0].damage[0]} damage and inflict ${cardsInformation[0].burn[0]} burn`, `Inflict ${cardsInformation[1].burn[1]} burn`],
                [`Deal ${cardsInformation[1].damage[0]} damage and inflict ${cardsInformation[1].burn[0]} burn on an enemy and 2 burn on yourself`, `Deal ${cardsInformation[1].damage[1]} damage and inflict ${cardsInformation[1].burn[1]} burn on an enemy and 2 burn on yourself`],
                [`Your next direct damage spell deals 10 more damage`, `Your next direct damage spell deals 10 more damage`],
                [`Deal ${cardsInformation[3].damage[0]} damage to all enemies<br>Energize ${cardsInformation[3].energize[0]}`, `Deal ${cardsInformation[3].damage[1]} damage to all enemies<br>Energize ${cardsInformation[3].energize[1]}`],
                [`Deal ${cardsInformation[4].damage[0]} damage and inflict frostbite`, `Deal ${cardsInformation[4].damage[1]} damage and inflict frostbite`],
                [`Deal ${cardsInformation[5].damage[0]} damage.<br>If you or the enemy has frostbite deal double instead.`, `Deal ${cardsInformation[5].damage[1]} damage.<br>If you or the enemy has frostbite deal triple instead.`],
                [`Enemies with windswept take ${cardsInformation[6].damage[0]} damage. Enemies without gain windswept`, `Enemies with windswept take ${cardsInformation[6].damage[1]} damage. Enemies without gain windswept. Draw a card.`],
                [`Deal ${cardsInformation[7].damage[0]} damage to an enemy and inflict windswept`, `Deal ${cardsInformation[7].damage[1]} damage to an enemy and inflict windswept. Increase Winds of Wind damage by 3`],
                [`Gain ${cardsInformation[8].blood[0]} Blood Siphon`, `Gain ${cardsInformation[8].blood[1]} Blood Siphon`],
                [`Deal ${cardsInformation[9].damage[0]} damage and ${cardsInformation[9].damage[0] / 2} damage to adjacent targets<br>Gain ${cardsInformation[9].regen[0]} regen for each target hit`, `Deal ${cardsInformation[9].damage[1]} damage and ${cardsInformation[9].damage[1] / 2} damage to adjacent targets<br>Gain ${cardsInformation[9].regen[1]} regen and blood siphon for each target hit`],
                [`Gain ${cardsInformation[10].block[0]} block`, `Gain ${cardsInformation[10].block[1]} block`],
                [`Gain ${cardsInformation[11].block[0]} block and ${cardsInformation[11].thorns[0]} thorns`, `Gain ${cardsInformation[11].block[1]} block and ${cardsInformation[11].thorns[1]} thorns`],
                [`Inflict ${cardsInformation[12].burn[0]} burn on all enemies and 3 on yourself`, `Inflict ${cardsInformation[12].burn[1]} burn on all enemies and 4 on yourself`],
                [`Gain ${cardsInformation[13].burn[0]} burn and transfer your burn onto the enemy`, `Gain ${cardsInformation[13].burn[1]} burn and transfer your burn onto all enemies`],
                [`Deal damage equal to ${cardsInformation[14].damage[0]}x the amount of burn on the enemy`, `Deal damage equal to ${cardsInformation[14].damage[1]}x the amount of burn on the enemy`],
                ["[POTION]<br>You apply +2 burn damage", "[POTION]<br>You apply +4 burn damage"],
                [`Deal 50% of the damage you've dealt this turn to an enemy<br>Damage: ${cardsInformation[16].damage[0]}`, `Deal 50% of the damage you've dealt this turn to an enemy<br>Damage: ${cardsInformation[16].damage[1]}`],
                [`Deal ${cardsInformation[17].damage[0]} damage to a random enemy three times and Energize ${cardsInformation[17].energize[0]} for each enemy damaged`, `Deal ${cardsInformation[17].damage[0]} damage to a random enemy four times and Energize ${cardsInformation[17].energize[1]} for each enemy damaged`],
                [`Deal ${cardsInformation[18].damage[0]} damage plus ${cardsInformation[18].damageSecond[0]} for each mana you have after playing Conduit. Energize ${cardsInformation[18].energize[0]}`, `Deal ${cardsInformation[18].damage[1]} damage plus ${cardsInformation[18].damageSecond[1]} for each mana you have after playing Conduit. Energize ${cardsInformation[17].energize[1]}`],
                ["[POTION]<br>All damage is increased by 5", "[POTION]<br>All damage is increased by 7"],
                [`Deal ${cardsInformation[20].damage[0]} damage to all enemies and inflict frostbite on everyone including yourself`, `Deal ${cardsInformation[20].damage[1]} damage to all enemies and inflict frostbite on everyone including yourself`],
                ["For the rest of the fight when you have frostbite, gain double block. Inflict frostbite on yourself", "For the rest of the fight when you have frostbite, gain double block. Inflict frostbite on yourself"],
                [`Inflict frostbite and deal damage equal to your block amount`, `Gain ${cardsInformation[22].block[1]} block, inflict frostbite, and deal damage equal to your block amount`],
                ["[POTION]<br>Damage and Frostbite now hits every enemy", "[POTION]<br>Damage and Frostbite now hits every enemy"],
                [`Deal ${windsOfChange} damage. All Winds of Change gain +3 damage or +6 damage if enemy is windswept`, `Deal ${windsOfChange} damage. All Winds of Change gain +4 damage or +8 damage if enemy is windswept`],
                ["Draw two cards", "Draw two cards and inflict windswept on a random enemy"],
                ["Draw a Winds of Change from your draw pile and discard pile", "Draw a Winds of Change from your draw pile and discard pile. Winds of Change gains +2 damage for each drawn."],
                ["[POTION]<br>Draw one more card at the end of each turn", "[POTION]<br>Draw one more card at the end of each turn"],
                [`Cleanse all debuffs and gain ${cardsInformation[28].blood[0]} blood siphon`, `Cleanse all debuffs and gain ${cardsInformation[28].blood[1]} blood siphon`],
                [`Use all mana to gain ${cardsInformation[29].regen[0]} regeneration and blood siphon per mana spent`, `Use all mana to gain ${cardsInformation[29].regen[1]} regeneration and ${cardsInformation[29].blood[1]} blood siphon per mana spent`],
                [`Deal damage equal to how much you've healed this fight<br>Damage: ${cardsInformation[30].damage[0]}`, `Deal damage to all enemies equal to how much you've healed this fight<br>Damage: ${cardsInformation[30].damage[1]}`],
                ["[POTION]<br>Permanently gain 5 max health", "[POTION]<br>Permanently gain 6 max health and gain 6 health"],
                ["Lose all of your block and deal damage equal to how much was lost", `Lose all of your block and deal damage equal to how much was lost. Regain ${cardsInformation[32].block[1]}% of your block.`],
                [`Gain ${cardsInformation[33].thorns[1]} thorns`, `Gain ${cardsInformation[33].thorns[1]} thorns`],
                [`Deal damage equal to 3x your thorns<br>Damage:${(parseFloat(playerThornsNumber.innerText) * 3)}`, `Gain ${cardsInformation[34].thorns[1]} thorns and deal damage equal to 3x your thorns<br>Damage:${2 + (parseFloat(playerThornsNumber.innerText) * 3)}`],
                ["[POTION]<br>All block gained is increased by 5 and thorns increased by 1", `[POTION]<br>Gain ${cardsInformation[35].block[1]} block and ${cardsInformation[35].thorns[1]} thorns. All block gained is increased by 5 and thorns increased by 1`],
                [`Energize ${cardsInformation[36].energize[0]} for each enemy burning`, `Burn all enemies for ${cardsInformation[36].burn[1]} and Energize ${cardsInformation[36].energize[1]} for each enemy burning`],
                [`If the enemy is either burning or inflicted with frostbite they are inflicted with ${cardsInformation[37].burn[0]} burn and frostbite`, `If the enemy is either burning or inflicted with frostbite they are inflicted with ${cardsInformation[37].burn[1]} burn and frostbite`],
                [`Inflict windswept on all enemies and increase burn count by ${cardsInformation[38].burn[0]} if they're already burning`, `Inflict windswept on all enemies and increase burn count by ${cardsInformation[38].burn[1]} if they're already burning`],
                [`Gain ${cardsInformation[39].burn[0]} burn, ${cardsInformation[39].regen[0]} regen, and ${cardsInformation[39].blood[0]} blood siphon`, `Gain ${cardsInformation[39].burn[1]} burn, ${cardsInformation[39].regen[1]} regen, and ${cardsInformation[39].blood[1]} blood siphon`],
                [`Inflict ${cardsInformation[40].burn[0]} burn on an enemy and gain block equal to ${cardsInformation[40].block[0]}% of their burn`, `Inflict ${cardsInformation[40].burn[1]} burn on an enemy and gain block equal to ${cardsInformation[40].block[1]}% of their burn`],
                [`Electrucute enemies with frostbite dealing ${cardsInformation[41].damage[0]} damage`, `Electrucute enemies with frostbite dealing ${cardsInformation[41].damage[1]} damage`],
                [`Inflict windswept and deal ${cardsInformation[42].damage[0]} damage to all enemies. Draw a card, energize ${cardsInformation[42].energize[0]}, and gain 2 mana.`, `Inflict windswept and deal ${cardsInformation[42].damage[1]} damage to all enemies. Draw a card, energize ${cardsInformation[42].energize[1]}, and gain 3 mana.`],
                [`Deal ${cardsInformation[43].damageSecond[0]} damage per 5 health you currently have and gain ${cardsInformation[43].regen[0]} regeneration<br>Damage: ${cardsInformation[43].damage[0]}`, `Deal ${cardsInformation[43].damageSecond[1]} damage per 5 health you currently have, gain 2 max health and ${cardsInformation[43].regen[1]} regeneration<br>Damage: ${cardsInformation[43].damage[1]}`],
                [`Gain ${cardsInformation[44].thorns[0]} thorn and energize for each enemy alive`, `Gain ${cardsInformation[44].block[1]} block, ${cardsInformation[44].thorns[1]} thorn, and energize for each enemy alive`],
                ["Inflict windswept and frostbite to all enemies", "Inflict windswept and frostbite to all enemies"],
                [`Gain ${cardsInformation[46].regen[0]} regen for everyone afflicted with frostbite`, `Gain ${cardsInformation[46].regen[1]} regen for everyone afflicted with frostbite`],
                [`Inflict everyone including yourself with frostbite and gain ${cardsInformation[47].block[0]} block for everyone inflicted`, `Inflict everyone including yourself with frostbite and gain ${cardsInformation[47].block[1]} block for everyone inflicted`],
                [`Gain ${cardsInformation[48].regen[0]} regen for each card played this turn`, `Gain ${cardsInformation[48].regen[1]} regen for each card played this turn and draw a card`],
                [`Gain ${cardsInformation[49].block[0]} block and draw a card`, `Gain ${cardsInformation[49].block[1]} block and draw a card`],
                ["[POTION]\nGain 3 block and healing at the end of each turn", "[POTION]\nGain 5 block and healing at the end of each turn"],
                ["[DOES NOTHING] Your greed causes you to look down upon peasants", "You enslave a peasant gaining 10 aether"],
                [`Inflict frostbite, windswept, and ${cardsInformation[52].burn[0]} burn. Gain ${cardsInformation[52].energize[0]} energize, ${cardsInformation[52].blood[0]} blood siphon, and ${cardsInformation[52].block[0]} block`, `Inflict frostbite, windswept, and ${cardsInformation[52].burn[1]} burn. Gain ${cardsInformation[52].energize[1]} energize, ${cardsInformation[52].blood[1]} blood siphon, and ${cardsInformation[52].block[1]} block`]
        ];
        // UPDATE CARD TEXT TO MATCH CORRECT STATS
        for (let i = 0; i < handArray.length; i++) {
                for (let j = 0; j < cardsInformation.length; j++) {
                        if (handArray[i].classList.contains(j)) {
                                for (let k = 0; k < currentCardText.length; k++) {
                                        if (currentCardText[k].classList.contains(j)) {
                                                if (currentCardText[k].classList.contains("upgraded-text")) {
                                                        currentCardText[k].innerHTML = updateCardTextStats[j][1];
                                                } else {
                                                        currentCardText[k].innerHTML = updateCardTextStats[j][0];
                                                }
                                        }
                                }
                        }
                }
        }
        // CHANGE CARD BACK TO ORIGINAL STATS
        updateText(2, .5, .5, -10, -2, -4, -5, -7, -5, -1);
        /*document.querySelectorAll(".winds-card-text").forEach((i) => {
                if (i.classList.contains("upgraded-text")) {
                        if (playerWindswept && tidalImbuement) {
                                i.innerText = `Deal ${(windsOfChange + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2) + 10} damage. All Winds of Change gain +4 damage or +8 damage if enemy is windswept.`;
                        } else if (playerWindswept) {
                                i.innerText = `Deal ${windsOfChange + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2} damage. All Winds of Change gain +4 damage or +8 damage if enemy is windswept.`;
                        } else if (tidalImbuement) {
                                i.innerText = `Deal ${windsOfChange + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) + 10} damage. All Winds of Change gain +4 damage or +8 damage if enemy is windswept.`;
                        } else {
                                i.innerText = `Deal ${windsOfChange + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)} damage. All Winds of Change gain +4 damage or +8 damage if enemy is windswept.`;
                        }
                } else {
                        if (playerWindswept && tidalImbuement) {
                                i.innerText = `Deal ${(windsOfChange + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2) + 10} damage. All Winds of Change gain +3 damage or +6 damage if enemy is windswept.`;
                        } else if (playerWindswept) {
                                i.innerText = `Deal ${windsOfChange + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2} damage. All Winds of Change gain +3 damage or +6 damage if enemy is windswept.`;
                        } else if (tidalImbuement) {
                                i.innerText = `Deal ${windsOfChange + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) + 10} damage. All Winds of Change gain +3 damage or +6 damage if enemy is windswept.`;
                        } else {
                                i.innerText = `Deal ${windsOfChange + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)} damage. All Winds of Change gain +3 damage or +6 damage if enemy is windswept.`;
                        }
                }
        });
        document.querySelectorAll(".electric-card-text").forEach((i) => {
                if (i.classList.contains("upgraded-text")) {
                        if (playerWindswept && tidalImbuement && playerFrostbite) {
                                i.innerText = `Deal 1 damage per 5 health you currently have, gain 2 max health and 1 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)) + 10}`;
                        } else if (playerWindswept && tidalImbuement) {
                                i.innerText = `Deal 1 damage per 5 health you currently have, gain 2 max health and 3 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)) + 10}`;
                        } else if (playerWindswept && playerFrostbite) {
                                i.innerText = `Deal 1 damage per 5 health you currently have, gain 2 max health and 1 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2)}`;
                        } else if (tidalImbuement && playerFrostbite) {
                                i.innerText = `Deal 2 damage per 5 health you currently have, gain 2 max health and 1 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)) + 10}`;
                        } else if (playerWindswept) {
                                i.innerText = `Deal 1 damage per 5 health you currently have, gain 2 max health and 3 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)) / 2}`;
                        } else if (tidalImbuement) {
                                i.innerText = `Deal 2 damage per 5 health you currently have, gain 2 max health and 3 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)) + 10}`;
                        } else if (playerFrostbite) {
                                i.innerText = `Deal 2 damage per 5 health you currently have, gain 2 max health and 1 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7))}`;
                        } else {
                                i.innerText = `Deal 2 damage per 5 health you currently have, gain 2 max health and 3 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7))}`;
                        }
                } else {
                        if (playerWindswept && tidalImbuement && playerFrostbite) {
                                i.innerText = `Deal 1 damage per 5 health you currently have and 1 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)) + 10}`;
                        } else if (playerWindswept && tidalImbuement) {
                                i.innerText = `Deal 1 damage per 5 health you currently have and 3 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)) + 10}`;
                        } else if (playerWindswept && playerFrostbite) {
                                i.innerText = `Deal 1 damage per 5 health you currently have and 1 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2)}`;
                        } else if (tidalImbuement && playerFrostbite) {
                                i.innerText = `Deal 2 damage per 5 health you currently have and 1 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)) + 10}`;
                        } else if (playerWindswept) {
                                i.innerText = `Deal 1 damage per 5 health you currently have and 3 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2)}`;
                        } else if (tidalImbuement) {
                                i.innerText = `Deal 2 damage per 5 health you currently have and 3 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)) + 10}`;
                        } else if (playerFrostbite) {
                                i.innerText = `Deal 2 damage per 5 health you currently have and 1 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7))}`;
                        } else {
                                i.innerText = `Deal 2 damage per 5 health you currently have and 3 regeneration Damage: ${Math.floor((2 * parseFloat(playerCurrentHealth.innerText) / 5) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7))}`;
                        }
                }
        });
        document.querySelectorAll(".storm-card-text").forEach((i) => {
                if (i.classList.contains("upgraded-text")) {
                        if (playerWindswept && tidalImbuement) {
                                i.innerText = `Deal 37% of the damage you've dealt this turn to an enemy Damage: ${Math.floor(((damageThisTurn * 75) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2)) + 10}` ;
                        } else if (playerWindswept) {
                                i.innerText = `Deal 37% of the damage you've dealt this turn to an enemy Damage: ${Math.floor((damageThisTurn * .75) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2)}` ;
                        } else if (tidalImbuement) {
                                i.innerText = `Deal 75% of the damage you've dealt this turn to an enemy Damage: ${Math.floor((damageThisTurn * .75)) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) + 10}` ;
                        } else {
                                i.innerText = `Deal 75% of the damage you've dealt this turn to an enemy Damage: ${Math.floor((damageThisTurn * .75)) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)}` ;
                        }
                } else {
                        if (playerWindswept && tidalImbuement) {
                                i.innerText = `Deal 25% of the damage you've dealt this turn to an enemy Damage: ${Math.floor((damageThisTurn / 4)) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) + 10}` ;
                        } else if (playerWindswept) {
                                i.innerText = `Deal 25% of the damage you've dealt this turn to an enemy Damage: ${Math.floor((damageThisTurn / 4)) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)}` ;
                        } else if (tidalImbuement) {
                                i.innerText = `Deal 50% of the damage you've dealt this turn to an enemy Damage: ${Math.floor((damageThisTurn / 2)) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) + 10}` ;
                        } else {
                                i.innerText = `Deal 50% of the damage you've dealt this turn to an enemy Damage: ${Math.floor((damageThisTurn / 2)) + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)}` ;
                        }
                }
        });
        document.querySelectorAll(".downpour-card-text").forEach((i) => {
                if (i.classList.contains("upgraded-text")) {
                        if (playerWindswept && tidalImbuement) {
                                i.innerText = `Deal damage to all enemies equal to how much you've healed this fight. Gain +1 max health for each enemy hit. Damage: ${(healthGainedThisFight + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2) + 10}` ;
                        } else if (playerWindswept) {
                                i.innerText = `Deal damage to all enemies equal to how much you've healed this fight. Gain +1 max health for each enemy hit. Damage: ${healthGainedThisFight + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2}` ;
                        } else if (tidalImbuement) {
                                i.innerText = `Deal damage to all enemies equal to how much you've healed this fight. Gain +1 max health for each enemy hit. Damage: ${healthGainedThisFight + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) + 10}` ;
                        } else {
                                i.innerText = `Deal damage to all enemies equal to how much you've healed this fight. Gain +1 max health for each enemy hit. Damage: ${healthGainedThisFight + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)}` ;
                        }
                } else {
                        if (playerWindswept && tidalImbuement) {
                                i.innerText = `Deal damage to all enemies equal to how much you've healed this fight. Damage: ${(healthGainedThisFight + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2) + 10}` ;
                        } else if (playerWindswept) {
                                i.innerText = `Deal damage to all enemies equal to how much you've healed this fight. Damage: ${healthGainedThisFight + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) / 2}` ;
                        } else if (tidalImbuement) {
                                i.innerText = `Deal damage to all enemies equal to how much you've healed this fight. Damage: ${healthGainedThisFight + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7) + 10}` ;
                        } else {
                                i.innerText = `Deal damage to all enemies equal to how much you've healed this fight. Damage: ${healthGainedThisFight + (liquidLightning.length * 5 + liquidLightningUpgrade.length * 7)}` ;
                        }
                }
        });*/
}
/*
ENEMY SECTION
*/
let enemyLevel = 0;
const enemiesInformation = [
        {
                name: "Dark Elf",
                index: 0,
                baseHealth: 50,
                img: "imgs/enemy-dark-elf.png",
                attackChance: 4,
                blockChance: 6,
                bloodChance: 10,
                attackDamageLow: 9,
                attackDamageHigh: 14,
                blockAmountLow: 20,
                blockAmountHigh: 25,
                bloodAmountLow: 5,
                bloodAmountHigh: 5,
        },
        {
                name: "Mushroom",
                index: 1,
                baseHealth: 75,
                img: "imgs/enemy-mushroom.png",
                attackChance: 2,
                healChance: 7,
                regenChance: 10,
                attackDamageLow: 7,
                attackDamageHigh: 9,
                healAmountLow: 20,
                healAmountHigh: 25,
                regenAmountLow: 6,
                regenAmountHigh: 8,
        },
        {
                name: "Dwarf",
                index: 2,
                baseHealth: 80,
                img: "imgs/enemy-dwarf.png",
                attackChance: 2,
                blockChance: 7,
                thornsChance: 10,
                attackDamageLow: 7,
                attackDamageHigh: 9,
                blockAmountLow: 24,
                blockAmountHigh: 28,
                thornsAmountLow: 2,
                thornsAmountHigh: 2
        },
        {
                name: "Will-o-the-Wisp",
                index: 3,
                baseHealth: 40,
                img: "imgs/enemy-will-o-the-wisp.png",
                attackChance: 2,
                burnChance: 10,
                attackDamageLow: 7,
                attackDamageHigh: 9,
                burnAmountLow: 4,
                burnAmountHigh: 5
        },
        {
                name: "Centaur",
                index: 4,
                baseHealth: 35,
                img: "imgs/enemy-centaur3.png",
                attackChance: 10,
                attackDamageLow: 14,
                attackDamageHigh: 16,
        },
        {
                name: "Stag",
                index: 5,
                baseHealth: 65,
                img: "imgs/enemy-deer.png",
                attackChance: 1,
                blockChance: 4,
                thornsChance: 10,
                attackDamageLow: 5,
                attackDamageHigh: 7,
                blockAmountLow: 18,
                blockAmountHigh: 22,
                thornsAmountLow: 2,
                thornsAmountHigh: 3,
        },
        {
                name: "Water Wolf",
                index: 6,
                baseHealth: 60,
                img: "imgs/enemy-wolf.png",
                attackChance: 4,
                regenChance: 10,
                attackDamageLow: 7,
                attackDamageHigh: 11,
                regenAmountLow: 8,
                regenAmountHigh: 10,
        },
        {
                name: "Fairy",
                index: 7,
                baseHealth: 45,
                img: "imgs/enemy-fairy.png",
                attackChance: 3,
                windsweptChance: 10,
                attackDamageLow: 7,
                attackDamageHigh: 11,
        },
        {
                name: "Frost Dragon",
                index: 8,
                baseHealth: 55,
                img: "imgs/enemy-baby-dragon.png",
                attackChance: 1,
                blockChance: 3,
                frostbiteChance: 10,
                attackDamageLow: 7,
                attackDamageHigh: 9,
                blockAmountLow: 18,
                blockAmountHigh: 20,
        },
        {
                name: "Fae Fox",
                index: 9,
                baseHealth: 200,
                img: "imgs/elite-fae-fox.png",
                attackChance: 5,
                regenChance: 10,
                attackDamageLow: 22,
                attackDamageHigh: 25,
                regenAmountLow: 10,
                regenAmountHigh: 12,
        },
        {
                name: "Dryad",
                index: 10,
                baseHealth: 150,
                img: "imgs/enemy-elite-dryad.png",
                thornsChance: 10,
                thornsAmountLow: 3,
                thornsAmountHigh: 5
        },
        {
                name: "Frost Sprite",
                index: 11,
                baseHealth: 220,
                img: "imgs/elite-frost-sprite.png",
                attackChance: 5,
                blockChance: 10,
                attackDamageLow: 18,
                attackDamageHigh: 22,
                blockAmountLow: 30,
                blockAmountHigh: 40,
        },
        {
                name: "Fae Dragon",
                index: 12,
                baseHealth: 150,
                img: "imgs/boss-fae-dragon.png",
                attackChance: 3,
                burnChance: 10,
                attackDamageLow: 20,
                attackDamageHigh: 24,
                burnAmountLow: 5,
                burnAmountHigh: 7,
        },
        {
                name: "Forest Giant",
                index: 13,
                baseHealth: 300,
                img: "imgs/enemy-elite-giant.png",
                attackChance: 2,
                blockChance: 7,
                thornsChance: 10,
                attackDamageLow: 20,
                attackDamageHigh: 24,
                blockAmountLow: 40,
                blockAmountHigh: 45,
                thornsAmountLow: 5,
                thornsAmountHigh: 7,
        },
        {
                name: "Pumpkinhead",
                index: 14,
                baseHealth: 50,
                img: "imgs/enemy-pumpkinhead2.png",
                attackChance: 5,
                healChance: 8,
                thornsChance: 10,
                attackDamageLow: 10,
                attackDamageHigh: 14,
                healAmountLow: 20,
                healAmountHigh: 26,
                thornsAmountLow: 3,
                thornsAmountHigh: 4,
        },
        {
                name: "White Witch",
                index: 15,
                baseHealth: 60,
                img: "imgs/enemy-witch2.png",
                attackChance: 0,
                burnChance: 5,
                regenChance: 10,
                attackDamageLow: 10,
                attackDamageHigh: 12,
                burnAmountLow: 4,
                burnAmountHigh: 4,
                regenAmountLow: 8,
                regenAmountHigh: 10,
        },
        {
                name: "Skeleton",
                index: 16,
                baseHealth: 70,
                img: "imgs/enemy-skeleton2.png",
                attackChance: 5,
                blockChance: 10,
                attackDamageLow: 14,
                attackDamageHigh: 18,
                blockAmountLow: 24,
                blockAmountHigh: 28,
        },
        {
                name: "Mummy",
                index: 17,
                baseHealth: 80,
                img: "imgs/enemy-mummy.png",
                attackChance: 1,
                blockChance: 5,
                thornsChance: 10,
                attackDamageLow: 8,
                attackDamageHigh: 10,
                blockAmountLow: 24,
                blockAmountHigh: 28,
                thornsAmountLow: 3,
                thornsAmountHigh: 4,
        },
        {
                name: "Spirit",
                index: 18,
                baseHealth: 45,
                img: "imgs/enemy-spirit.png",
                attackChance: 3,
                frostbiteChance: 10,
                attackDamageLow: 10,
                attackDamageHigh: 12,
        },
        {
                name: "Black Witch",
                index: 19,
                baseHealth: 40,
                img: "imgs/enemy-black-witch.png",
                burnChance: 4,
                frostbiteChance: 7,
                windsweptChance: 10,
                attackDamageLow: 8,
                attackDamageHigh: 10,
                burnAmountLow: 5,
                burnAmountHigh: 5,
        },
        {
                name: "Bat",
                index: 20,
                baseHealth: 45,
                img: "imgs/enemy-bat2.png",
                attackChance: 3,
                windsweptChance: 10,
                attackDamageLow: 10,
                attackDamageHigh: 12,
        },
        {
                name: "Zombie",
                index: 21,
                baseHealth: 80,
                img: "imgs/enemy-zombie.png",
                attackChance: 1,
                bloodChance: 10,
                attackDamageLow: 10,
                attackDamageHigh: 14,
                healAmountLow: 22,
                healAmountHigh: 24,
                bloodAmountLow: 6,
                bloodAmountHigh: 7,
        },
        {
                name: "Horseman",
                index: 22,
                baseHealth: 40,
                img: "imgs/enemy-horseman.png",
                attackChance: 10,
                attackDamageLow: 18,
                attackDamageHigh: 20,
        },
        {
                name: "Reaper",
                index: 23,
                baseHealth: 350,
                img: "imgs/elite-reaper.png",
        },
        {
                name: "Spectre",
                index: 24,
                baseHealth: 300,
                img: "imgs/boss-spectre.png",
                attackChance: 1,
                bloodChance: 10,
                attackDamageLow: 40,
                attackDamageHigh: 50,
                bloodAmountLow: 2,
                bloodAmountHigh: 2
        },
        {
                name: "Gargoyle",
                index: 25,
                baseHealth: 240,
                img: "imgs/elite-gargoyle.png",
                blockChance: 6,
                burnChance: 10,
                blockAmountLow: 30,
                blockAmountHigh: 40,
                burnAmountLow: 5,
                burnAmountHigh: 7
        },
        {
                name: "Vampire",
                index: 26,
                baseHealth: 300,
                img: "imgs/elite-vampire.png",
                attackChance: 0,
                bloodChance: 10,
                attackDamageLow: 30,
                attackDamageHigh: 40,
                bloodAmountLow: 2,
                bloodAmountHigh: 2
        },
        {
                name: "Werewolf",
                index: 27,
                baseHealth: 300,
                img: "imgs/enemy-werewolf.png",
                attackChance: 0,
                bloodChance: 10,
                attackDamageLow: 20,
                attackDamageHigh: 20,
                bloodAmountLow: 99,
                bloodAmountHigh: 99
        },
        {
                name: "Anubis",
                index: 28,
                baseHealth: 130,
                img: "imgs/enemy-anubis.png",
                attackChance: 4,
                blockChance: 8,
                windsweptChance: 10,
                attackDamageLow: 18,
                attackDamageHigh: 22,
                blockAmountLow: 36,
                blockAmountHigh: 40,
        },
        {
                name: "Bastet",
                index: 29,
                baseHealth: 80,
                img: "imgs/enemy-bastet.png",
                attackChance: 5,
                bloodChance: 10,
                attackDamageLow: 25,
                attackDamageHigh: 30,
                bloodAmountLow: 9,
                bloodAmountHigh: 9
        },
        {
                name: "Ra",
                index: 30,
                baseHealth: 85,
                img: "imgs/enemy-ra.png",
                burnChance: 10,
                burnAmountLow: 10,
                burnAmountHigh: 11
        },
        {
                name: "Thor",
                index: 31,
                baseHealth: 150,
                img: "imgs/enemy-thor.png",
                attackChance: 10,
                attackDamageLow: 18,
                attackDamageHigh: 25,
        },
        {
                name: "Loki",
                index: 32,
                baseHealth: 120,
                img: "imgs/enemy-loki.png",
                attackChance: 10,
                attackDamageLow: 22,
                attackDamageHigh: 28,
        },
        {
                name: "Fenrir",
                index: 33,
                baseHealth: 100,
                img: "imgs/enemy-fenrir.png",
                attackChance: 2,
                bloodChance: 10,
                attackDamageLow: 24,
                attackDamageHigh: 30,
                bloodAmountLow: 8,
                bloodAmountHigh: 10
        },
        {
                name: "Demeter",
                index: 34,
                baseHealth: 105,
                img: "imgs/enemy-demeter2.png",
                attackChance: 1,
                blockChance: 5,
                frostbiteChance: 10,
                attackDamageLow: 16,
                attackDamageHigh: 20,
                blockAmountLow: 36,
                blockAmountHigh: 40,
        },
        {
                name: "Poseidon",
                index: 35,
                baseHealth: 120,
                img: "imgs/enemy-poseidon.png",
                attackChance: 5,
                regenChance: 10,
                attackDamageLow: 19,
                attackDamageHigh: 23,
                regenAmountLow: 15,
                regenAmountHigh: 20,
        },
        {
                name: "Athena",
                index: 36,
                baseHealth: 200,
                img: "imgs/enemy-athena.png",
                attackChance: 1,
                blockChance: 7,
                thornsChance: 10,
                attackDamageLow: 16,
                attackDamageHigh: 18,
                blockAmountLow: 50,
                blockAmountHigh: 55,
                thornsAmountLow: 4,
                thornsAmountHigh: 5
        },
        {
                name: "Artemis",
                index: 37,
                baseHealth: 90,
                img: "imgs/enemy-artemis.png",
                attackChance: 10,
                attackDamageLow: 38,
                attackDamageHigh: 40,
        },
        {
                name: "Ganesha",
                index: 38,
                baseHealth: 160,
                img: "imgs/enemy-ganesha2.png",
                attackChance: 4,
                healChance: 10,
                attackDamageLow: 24,
                attackDamageHigh: 26,
                healAmountLow: 40,
                healAmountHigh: 50,
        },
        {
                name: "Brahma",
                index: 39,
                baseHealth: 160,
                img: "imgs/enemy-brahma.png",
                attackChance: 4,
                blockChance: 10,
                frostbiteChance: 10,
                attackDamageLow: 24,
                attackDamageHigh: 26,
                blockAmountLow: 40,
                blockAmountHigh: 50,
        },
        {
                name: "Sun Wukong",
                index: 40,
                baseHealth: 125,
                img: "imgs/enemy-wukong.png",
                attackChance: 3,
                blockChance: 7,
                windsweptChance: 10,
                attackDamageLow: 25,
                attackDamageHigh: 28,
                blockAmountLow: 36,
                blockAmountHigh: 40,
        },
        {
                name: "Hebo",
                index: 41,
                baseHealth: 140,
                img: "imgs/enemy-hebo.png",
                attackChance: 3,
                blockChance: 5,
                regenChance: 10,
                attackDamageLow: 25,
                attackDamageHigh: 28,
                regenAmountLow: 16,
                regenAmountHigh: 17,
        },
        {
                name: "Zeus",
                index: 42,
                baseHealth: 300,
                img: "imgs/elite-zeus.png",
                attackChance: 10,
                attackDamageLow: 45,
                attackDamageHigh: 50,
        },
        {
                name: "Odin",
                index: 43,
                baseHealth: 300,
                img: "imgs/elite-odin.png",
                attackChance: 10,
                attackDamageLow: 45,
                attackDamageHigh: 50,
        },
        {
                name: "Jesus",//when you kill him he resurrects off the cross lol
                index: 44,
                baseHealth: 300,
                img: "imgs/elite-jesus.png",
                attackChance: 10,
                attackDamageLow: 45,
                attackDamageHigh: 50,
        },
        {
                name: "Life",
                index: 45,
                baseHealth: 500,
                img: "imgs/boss-life.png",
                attackChance: 4,
                healChance: 8,
                regenChance: 10,
                attackDamageLow: 45,
                attackDamageHigh: 50,
                healAmountLow: 50,
                healAmountHigh: 75,
                regenAmountLow: 20,
                regenAmountHigh: 25
        },
        {
                name: "Death",
                index: 46,
                baseHealth: 500,
                img: "imgs/boss-death2.png",
                attackChance: 10,
                attackDamageLow: 45,
                attackDamageHigh: 50,
        },
]
const enemyContainer = document.querySelector("#enemy-container");
let siphonAll = false;
function createEnemy(name) {
        let index;
        for (let i = 0; i < enemiesInformation.length; i++) {
                if (enemiesInformation[i].name === name) {
                        index = enemiesInformation[i];
                }
        }
        enemyContainer.innerHTML +=
        `<div class="enemy-div">
                <div class="enemy-debuffs">
                        <div class="enemy-burn-div">
                        <div class="burn-img-debuff img-text">
                                <h4 class="img-text-h4">Burn</h4>
                                <p class="img-text-p">Take this much damage at the end of each turn. Decreases by one each turn.</p>
                        </div>
                        <img class="enemy-burn-img" src="imgs/burn-icon.png">
                        <p class="enemy-burn-number">0</p>
                        </div>
                        <div class="enemy-windswept-div">
                        <div class="windswept-img-debuff img-text">
                                <h4 class="img-text-h4">Windswept</h4>
                                <p class="img-text-p">Reduces damage and burn by 50%</p>
                        </div>
                        <img class="enemy-windswept-img" src="imgs/windswept-icon.png">
                        </div>
                        <div class="enemy-frostbite-div">
                        <div class="frostbite-img-debuff img-text">
                                <h4 class="img-text-h4">Frostbite</h4>
                                <p class="img-text-p">Reduces buffs gained by 50%</p>
                        </div>
                        <img class="enemy-frostbite-img" src="imgs/frostbite-icon.png"> 
                        </div>
                </div>
                <div class="enemy-action-div">
                        <div class="enemy-attack-action-div">
                        <div class="attack-img-text img-text">
                                <h4 class="img-text-h4">Attack</h4>
                                <p class="img-text-p">Take this much damage at the end of the turn.</p>
                        </div>
                        <p class="enemy-action-number enemy-attack-action-number"></p>
                        <img class="enemy-attack-action-img enemy-action-img" src="imgs/attack-icon.png">                  
                        </div>
                        <div class="enemy-block-action-div">
                        <div class="block-img-text img-text">
                                <h4 class="img-text-h4">Block</h4>
                                <p class="img-text-p">Gain a shield that blocks damage.</p>
                        </div>
                        <p class="enemy-action-number enemy-block-action-number"></p>
                        <img class="enemy-block-action-img enemy-action-img" src="imgs/block-icon.png">
                        </div>
                        <div class="enemy-heal-action-div">
                        <div class="heal-img-text img-text">
                                <h4 class="img-text-h4">Heal</h4>
                                <p class="img-text-p">Regain this much health at the end of the turn.</p>
                        </div>
                        <p class="enemy-action-number enemy-heal-action-number"></p>
                        <img class="enemy-heal-action-img enemy-action-img" src="imgs/heal-icon.png">
                        </div>
                        <div class="enemy-burn-action-div">
                        <div class="burn-img-text img-text">
                                <h4 class="img-text-h4">Burn</h4>
                                <p class="img-text-p">Take this much damage at the end of each turn. Decreases by one each turn.</p>
                        </div>
                        <p class="enemy-action-number enemy-burn-action-number"></p>
                        <img class="enemy-burn-action-img enemy-action-img" src="imgs/burn-icon.png">
                        </div>
                        <div class="enemy-energize-action-div">
                        <div class="energize-img-text img-text">
                                <h4 class="img-text-h4">Energize</h4>
                                <p class="img-text-p">Enemy gains extra actions next turn.</p>
                        </div>
                        <p class="enemy-action-number enemy-energize-action-number"></p>
                        <img class="enemy-energize-action-img enemy-action-img" src="imgs/energize-icon.png">
                        </div>
                        <div class="enemy-regen-action-div">
                        <div class="regen-img-text img-text">
                                <h4 class="img-text-h4">Regeneration</h4>
                                <p class="img-text-p">Heal this much at the end of each turn. Decreases by one at the end of each turn.</p>
                        </div>
                        <p class="enemy-action-number enemy-regen-action-number"></p>
                        <img class="enemy-regen-action-img enemy-action-img" src="imgs/regen-icon.png">
                        </div>
                        <div class="enemy-blood-action-div">
                        <div class="blood-img-text img-text">
                                <h4 class="img-text-h4">Blood Siphon</h4>
                                <p class="img-text-p">Heal for 20% of damage done. Decreases by one at the end of each turn.</p>
                        </div>
                        <p class="enemy-action-number enemy-blood-action-number"></p>
                        <img class="enemy-blood-action-img enemy-action-img" src="imgs/blood-icon.png">
                        </div>
                        <div class="enemy-thorns-action-div">
                        <div class="thorns-img-text img-text">
                                <h4 class="img-text-h4">Thorns</h4>
                                <p class="img-text-p">Take this much damage when attacking.</p>
                        </div>
                        <p class="enemy-action-number enemy-thorns-action-number"></p>
                        <img class="enemy-thorns-action-img enemy-action-img" src="imgs/thorns-icon.png">
                        </div>
                        <div class="enemy-frostbite-action-div">
                        <div class="frostbite-img-text img-text">
                                <h4 class="img-text-h4">Frostbite</h4>
                                <p class="img-text-p">Reduce all buffs gained by 50%.</p>
                        </div>
                        <img class="enemy-frostbite-action-img enemy-action-img" src="imgs/frostbite-icon.png">
                        </div>
                        <div class="enemy-windswept-action-div">
                        <div class="windswept-img-text img-text">
                                <h4 class="img-text-h4">Windswept</h4>
                                <p class="img-text-p">Reduce all attack and burn by 50%.</p>
                        </div>
                        <img class="enemy-windswept-action-img enemy-action-img" src="imgs/windswept-icon.png">
                        </div>
                </div>
                <img class="enemy-img" src="${index.img}">
                <div class="enemy-health-bar">
                        <img class="enemy-block-img" src="imgs/block-icon.png">
                        <p class="enemy-block-number">0</p>
                        <p class="enemy-health"><span class="enemy-current-health">${index.baseHealth}</span>/<span class="enemy-max-health">${index.baseHealth}</span></p>
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
                </div>`
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
        addEnemyActionText(document.getElementsByClassName("enemy-attack-action-div"), document.getElementsByClassName("attack-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-block-action-div"), document.getElementsByClassName("block-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-heal-action-div"), document.getElementsByClassName("heal-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-burn-action-div"), document.getElementsByClassName("burn-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-burn-div"), document.getElementsByClassName("burn-img-debuff"));
        addEnemyActionText(document.getElementsByClassName("enemy-regen-action-div"), document.getElementsByClassName("regen-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-blood-action-div"), document.getElementsByClassName("blood-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-thorns-action-div"), document.getElementsByClassName("thorns-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-frostbite-action-div"), document.getElementsByClassName("frostbite-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-frostbite-div"), document.getElementsByClassName("frostbite-img-debuff"));
        addEnemyActionText(document.getElementsByClassName("enemy-windswept-action-div"), document.getElementsByClassName("windswept-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-windswept-div"), document.getElementsByClassName("windswept-img-debuff"));
        const enemyDiv = document.querySelectorAll(".enemy-div");
        const enemyImg = document.querySelectorAll(".enemy-img");
        switch (index.name) {
                case "Dark Elf":
                        enemyDiv[enemyDiv.length - 1].style = "animation: 3s ease-in-out 0s 1 stealthAppear";
                        break;
                case "Water Wolf":
                        enemyImg[enemyDiv.length - 1].classList.add("enemy-img-flip");
                        enemyDiv[enemyDiv.length - 1].style = "animation: 2s ease-out 0s 1 slideInTop";
                        break;
                case "Fairy":
                        enemyDiv[enemyDiv.length - 1].style = "animation: 2.3s ease-out 0s 1 slideInTop; margin-bottom: 2rem;";
                        break;
                case "Mushroom":
                        enemyImg[enemyDiv.length - 1].style = "animation: 3.5s ease-in-out 0s 1 grow";
                        break;
                case "Artemis": case "Athena": case "Centaur": case "Fenrir":
                        enemyImg[enemyDiv.length - 1].classList.add("enemy-img-flip");
                        enemyDiv[enemyDiv.length - 1].style = `animation: ${((enemyDiv.length - 1) * .25) + 1}s ease-out 0s 1 slideInRight`;
                        break;
                default:
                        enemyDiv[enemyDiv.length - 1].style = `animation: ${((enemyDiv.length - 1) * .25) + 1}s ease-out 0s 1 slideInRight`;
        }
        if (document.querySelector(".enemy-max-health").innerText > 99) {
                document.querySelector(".enemy-block-img").style = "margin-right: 11rem";
                document.querySelector(".enemy-block-number").style = "margin-right: 11rem";
        }
        if (hallowwood) {
                for (let i = 0; i < document.getElementsByClassName("enemy-health").length; i++) {
                        document.getElementsByClassName("enemy-health")[i].style = "color: white";
                }
        }
        if (name === "Vampire") {
                siphonAll = true;
        }
}
function enemyLevelUp() {
        function scaleEnemies(health, attack, block, burn, regen, blood, thorns) {
                let enemyCurrentHealth = document.querySelectorAll(".enemy-current-health");
                let enemyMaxHealth = document.querySelectorAll(".enemy-max-health");
                for (let i = 0; i < numberOfEnemies; i++) {
                        enemyCurrentHealth[i].innerText = parseFloat(enemyCurrentHealth[i].innerText) + Math.floor((parseFloat(enemyCurrentHealth[i].innerText) * health));
                        enemyMaxHealth[i].innerText = parseFloat(enemyMaxHealth[i].innerText) + Math.floor((parseFloat(enemyMaxHealth[i].innerText) * health));
                }
                for (let i = 0; i < enemiesInformation.length; i++) {
                        enemiesInformation[i].attackDamageLow = enemiesInformation[i].attackDamageLow + (enemiesInformation[i].attackDamageLow * attack);
                        enemiesInformation[i].attackDamageHigh = enemiesInformation[i].attackDamageHigh + (enemiesInformation[i].attackDamageHigh * attack);
                        enemiesInformation[i].blockAmountLow = enemiesInformation[i].blockAmountLow + (enemiesInformation[i].blockAmountLow * block);
                        enemiesInformation[i].blockAmountHigh = enemiesInformation[i].blockAmountHigh + (enemiesInformation[i].blockAmountHigh * block);
                        enemiesInformation[i].burnAmountLow = enemiesInformation[i].burnAmountLow + (enemiesInformation[i].burnAmountLow * burn);
                        enemiesInformation[i].burnAmountHigh = enemiesInformation[i].burnAmountHigh + (enemiesInformation[i].burnAmountHigh * burn);
                        enemiesInformation[i].regenAmountLow = enemiesInformation[i].regenAmountLow + (enemiesInformation[i].regenAmountLow * regen);
                        enemiesInformation[i].regenAmountHigh = enemiesInformation[i].regenAmountHigh + (enemiesInformation[i].regenAmountHigh * regen);
                        enemiesInformation[i].bloodAmountLow = enemiesInformation[i].bloodAmountLow + (enemiesInformation[i].bloodAmountLow * blood);
                        enemiesInformation[i].bloodAmountHigh = enemiesInformation[i].bloodAmountHigh + (enemiesInformation[i].bloodAmountHigh * blood);
                        enemiesInformation[i].thornsAmountLow = enemiesInformation[i].thornsAmountLow + (enemiesInformation[i].thornsAmountLow * thorns);
                        enemiesInformation[i].thornsAmountHigh = enemiesInformation[i].thornsAmountHigh + (enemiesInformation[i].thornsAmountHigh * thorns);
                }
        }
        if (normalDifficulty) {
                scaleEnemies(.075, .02, .02, .015, .03, .03, .02);
        } else if (hardDifficulty) {
                scaleEnemies(.1, .03, .03, .025, .04, .04, .035);
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
let enemyEnergizeActionDiv = document.querySelectorAll(".enemy-energize-action-div");
let enemyEnergizeActionImg = document.querySelectorAll(".enemy-energize-action-img");
let enemyBurnActionImg = document.querySelectorAll(".enemy-burn-action-img");
let enemyBurnActionNumber = document.querySelectorAll(".enemy-burn-action-number");
let enemyWindsweptActionImg = document.querySelectorAll(".enemy-windswept-action-img");
let enemyFrostbiteActionImg = document.querySelectorAll(".enemy-frostbite-action-img");
// BUFFS
let enemyBuffDiv = document.querySelectorAll(".enemy-buffs");
let enemyBlockImg = document.querySelectorAll(".enemy-block-img");
let enemyBlockNumber = document.querySelectorAll(".enemy-block-number");
let enemyEnergizeImg = document.querySelectorAll(".enemy-energize-img");
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
        fxEnemyAttack.currentTime = 0;
        fxEnemyAttack.play();
        if (airGift && !airGiftTrigger && reduceAllAttack) {
                damage = 0;
        }
        if (enemyWindswept[index]) {
                damage = Math.floor(damage *= .50);
        }
        if (enemyBloodNumber[index].innerText > 0) {
                let siphonAmount = .2;
                if (siphonAll) {
                        siphonAmount = 1;
                }
                enemyCurrentHealth[index].innerText = parseFloat(enemyCurrentHealth[index].innerText) + Math.floor((damage * siphonAmount));                        
        }
        if (playerBlockNumber.innerText <= 0) {
                topBarHealthNumber.innerText -= damage;
                playerCurrentHealth.innerText -= damage;
        } else if (playerBlockNumber.innerText <= damage) {
                topBarHealthNumber.innerText -= damage - parseFloat(playerBlockNumber.innerText);
                playerCurrentHealth.innerText -= damage - parseFloat(playerBlockNumber.innerText);
                displayNone(playerBlockNumber, playerBlockImg);
                if (vineBracelet) {
                        playerBlockNumber.innerText = 10
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
        checkIfEnemyDead();
        displayNone(enemyAttackActionDiv[index]);
}
function enemyGainBlock(blockAmount, index) {
        fxEnemyBlock.currentTime = 0;
        fxEnemyBlock.play();
        // REDUCE BLOCK BY HALF WHEN ENEMY IS DEBUFFED
        if (enemyFrostbite[index]) {
                blockAmount = Math.floor(blockAmount * .5);
        }
        enemyBlockNumber[index].innerText = parseFloat(enemyBlockNumber[index].innerText) + blockAmount;
        enemyBlockActionNumber[index].innerText += blockAmount;
        displayBlock(enemyBlockNumber[index], enemyBlockImg[index]);
        displayNone(enemyBlockActionDiv[index]);
        enemyFrostbite[index] = false;
}
function enemyHeal(healAmount, index) {
        enemyCurrentHealth[index].innerText = parseFloat(enemyCurrentHealth[index].innerText) + healAmount;
        displayNone(enemyHealActionDiv[[index]]);
}
function enemyBurnPlayer(amount, index) {
        fxFireball.currentTime = 0;
        fxFireball.play();
        if (enemyWindswept[index]) {
                amount = Math.floor(amount * .5);
        }
        playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + amount;
        displayBlock(playerBurnImg, playerBurnNumber);
        displayNone(enemyBurnActionDiv[index]);
}
function enemyGainRegeneration(amount, index) {
        fxTidalImbuement.currentTime = 0;
        fxTidalImbuement.play();
        if (enemyFrostbite[index]) {
                amount = Math.floor(amount * .5);
        }
        enemyRegenNumber[index].innerText = parseFloat(enemyRegenNumber[index].innerText) + amount;
        displayBlock(enemyRegenImg[index], enemyRegenNumber[index]);
        displayNone(enemyRegenActionDiv[index]);
}
function enemyGainBloodSiphon(amount, index) {
        fxBloodCocoon.currentTime = 0;
        fxBloodCocoon.play();
        if (enemyFrostbite[index]) {
                amount = Math.floor(amount * .5);
        }
        enemyBloodNumber[index].innerText = parseFloat(enemyBloodNumber[index].innerText) + amount;
        displayBlock(enemyBloodImg[index], enemyBloodNumber[index]);
        displayNone(enemyBloodActionDiv[index]);
}
function enemyGainThorns(amount, index) {
        fxWeaveOfThorns.currentTime = 0;
        fxWeaveOfThorns.play();
        if (enemyFrostbite[index]) {
                amount = Math.floor(amount * .5);
        }
        enemyThornsNumber[index].innerText = parseFloat(enemyThornsNumber[index].innerText) + amount;
        displayBlock(enemyThornsNumber[index], enemyThornsImg[index]);
        displayNone(enemyThornsActionDiv[index]);
}
function checkEnemyBurn(index) {
        if (playerBloodNumber.innerText > 0 && !enemyIsDead[index]) {
                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + Math.ceil(enemyBurnNumber[index].innerText * .2);
                topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + Math.ceil(enemyBurnNumber[index].innerText * .2);
        }
        if (parseFloat(enemyBurnNumber[index].innerText) >= enemyCurrentHealth[index].innerText) {
                enemy[index].classList.add("fade-out");
                enemyIsDead[index] = true;
        }
        if (parseFloat(enemyBurnNumber[index].innerText) > 0) {
                enemyHealth[index].style = "animation: burn 1.5s linear infinite alternate;";
                if (hallowwood) {
                        enemyHealth[index].style = "animation: burn 1.5s linear infinite alternate; color: white";
                }
                if (enemyBlockNumber[index].innerText <= 0) {
                        enemyCurrentHealth[index].innerText = parseFloat(enemyCurrentHealth[index].innerText) - parseFloat(enemyBurnNumber[index].innerText);
                } else if (enemyBlockNumber[index].innerText <= parseFloat(enemyBurnNumber[index].innerText)) {
                        enemyCurrentHealth[index].innerText -= parseFloat(enemyBurnNumber[index].innerText) - parseFloat(enemyBlockNumber[index].innerText);
                        displayNone(enemyBlockImg[index], enemyBlockNumber[index]);
                        if (vineBracelet) {
                                enemyBlockNumber[index].innerText = 10
                        }
                } else {
                        enemyBlockNumber[index].innerText -= parseFloat(enemyBurnNumber[index].innerText); 
                }
                if (flameWarden) {
                        enemyBurnNumber[index].innerText++;
                } else {
                        enemyBurnNumber[index].innerText--;
                }
        }
        if (enemyBurnNumber[index].innerText == 0) {
                enemyHealth[index].style = "animation: burn 0s linear infinite alternate";
                if (hallowwood) {
                        enemyHealth[index].style = "animation: burn 0s linear infinite alternate; color: white";
                }
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
function createEncounters() {
        document.getElementById("location2-tiles1").innerHTML = `<img class="exclamation-img" src="imgs/icons8-exclamation-64.png" alt="Mystery Zone">`
        document.getElementById("location2-tiles3").innerHTML = `<img class="gold-img" src="imgs/icons8-gold-bars-64.png" alt="Gold">`
        document.getElementById("location3-tiles1").innerHTML = `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`
        document.getElementById("location3-tiles2").innerHTML = `<img class="hard-monster-img" src="imgs/icons8-monster-80.png" alt = "Hard Monster">`
        document.getElementById("location3-tiles3").innerHTML = `<img class="hard-monster-img" src="imgs/icons8-monster-80.png" alt = "Hard Monster">`
        document.getElementById("location4-tiles1").innerHTML = `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`
        document.getElementById("location4-tiles2").innerHTML = `<img class="exclamation-img" src="imgs/icons8-exclamation-64.png" alt="Mystery Zone">`
        document.getElementById("location4-tiles4").innerHTML = `<img class="blacksmith-img" src="imgs/icons8-blacksmith-50.png" alt="Blacksmith">`
        document.getElementById("location5-tiles1").innerHTML = `<img class="gold-img" src="imgs/icons8-gold-bars-64.png" alt="Gold">`
        document.getElementById("location5-tiles2").innerHTML = `<img class="merchant-img" src="imgs/icons8-stand-50.png" alt="Merchant">`
        document.getElementById("location5-tiles3").innerHTML = `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`
        document.getElementById("location7-tiles2").innerHTML = `<img class="hard-monster-img" src="imgs/icons8-monster-80.png" alt = "Hard Monster">`
        document.getElementById("location8-tiles1").innerHTML = `<img class="exclamation-img" src="imgs/icons8-exclamation-64.png" alt="Mystery Zone">`
        document.getElementById("location9-tiles1").innerHTML = `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`
        document.getElementById("location9-tiles2").innerHTML = `<img class="blacksmith-img" src="imgs/icons8-blacksmith-50.png" alt="Blacksmith">`
        document.getElementById("location9-tiles3").innerHTML = `<img class="merchant-img" src="imgs/icons8-stand-50.png" alt="Merchant">`
        document.getElementById("location9-tiles4").innerHTML = `<img class="gold-img" src="imgs/icons8-gold-bars-64.png" alt="Gold">`
        document.getElementById("location10-tiles1").innerHTML = `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`
        document.getElementById("location10-tiles2").innerHTML = `<img class="hard-monster-img" src="imgs/icons8-monster-80.png" alt = "Hard Monster">`
}
let enemiesAlive = numberOfEnemies - enemyIsDead.filter(Boolean).length;
let enemiesAreDead = false;
let [flameWarden, pyromancer, surgebinder, stormchaser, cryocast, winterWarrior, aeroshift, windrunner, bloodbender, waterweaver, grovertender, stoneshaper] =
[false, false, false, false, false, false, false, false, false, false, false, false];
let [faeForest, hallowwood] = [true, false];
function checkIfEnemyDead() {
        // IF ALL ENEMIES ARE DEAD, SWITCH BACK TO MAP AND GET AETHER
        function allEnemiesDead() {
                if ((!bossDefeated[0] && !bossDefeated[1] && faeForest) || (bossDefeated[0] && !bossDefeated[1] && hallowwood) || (bossDefeated[0] && bossDefeated[1] && !hallowwood)) {
                        getRandomNewCards();
                }
                window.removeEventListener("keydown", spaceEndTurn);
                if (goldEncounterGold) {
                        playerAether.innerText = parseFloat(playerAether.innerText) + Math.ceil(30 + ((enemyLevel + 1) * 5.4));
                        goldEncounterGold = false;
                } else {
                        playerAether.innerText = parseFloat(playerAether.innerText) + Math.ceil(30 + ((enemyLevel + 1) * 2.7));
                }
                if (getEliteRelic) {
                        ghostIndex = 11;
                        getRelic(1, 12);
                }
                enemiesKilled++
                siphonAll = false;
                const empowerContainer = document.getElementById("empower-container");
                if (bossDefeated[0] && !bossDefeated[1] && !hallowwood) {
                        fxDragonGrowls.pause();
                        fxGiantGroans.pause();
                        allMusic.forEach(i => {
                                i.pause();
                        });
                        allMusic = [];
                        allAmbience = [];
                        const hallowwoodAmbience = new Audio("audio/hallowwood-ambience.wav");
                        switchAmbience(hallowwoodAmbience);
                        const hallowwoodMapMusic = new Audio("audio/hallowwood-map-music.wav");
                        //switchMusic(hallowwoodMapMusic);
                        mapMusicIndex = allMusic.indexOf(hallowwoodMapMusic);
                        displayFlex(empowerContainer);
                        displayNone(arena);
                        map.style.backgroundImage = "url(imgs/hallowwood-map3.jpeg)";
                        arena.style.backgroundImage = "url(imgs/hallowwood-arena4.jpeg)";
                        arena.style.backgroundImage = "url(imgs/hallowwood-arena4.jpeg)";
                        empowerContainer.innerHTML = `
                        <h1>Empower an Element</h1>
                        <div class="empower-element-div">
                                <h2 style="color: #b23d1a">Fire</h2>
                                <div class="empower-choice-div">
                                        <div class="empower-choices">
                                                <button id="eternal-flame" style="color: #aa4203">Flame Warden</button>
                                                <p>Burn increases by one each turn</p>
                                        </div>
                                        <div class="empower-choices">
                                                <button id="scorched-earth" style="color: #ba760f">Pyromancer</button>
                                                <p>Enemies burn twice per turn</p>
                                        </div>
                                </div>
                        </div>
                        <div class="empower-element-div">
                                <h2 style="color: #f0fb3e">Lightning</h2>
                                <div class="empower-choice-div">
                                        <div class="empower-choices">
                                                <button id="surgebinder" style="color: #fafba5">Surgebinder</button>
                                                <p>Double all energize</p>
                                        </div>
                                        <div class="empower-choices">
                                                <button id="lightning-jewel" style="color: #5e65c5">Stormchaser</button>
                                                <p>Gain +1 mana</p>
                                        </div>
                                </div>
                        </div>
                        <div class="empower-element-div">
                                <h2 style="color: #2f989c">Ice</h2>
                                <div class="empower-choice-div">
                                        <div class="empower-choices">
                                                <button id="leeching-cold" style="color: #51a9ac">Cryocast</button>
                                                <p>Inflicting frostbite will steal two of each buff</p>
                                        </div>
                                        <div class="empower-choices">
                                                <button id="everlasting-winter" style="color: #b9e8ea">Winter Warrior</button>
                                                <p>Frostbite lasts for two turns</p>
                                        </div>
                                </div>
                        </div>
                        <div class="empower-element-div">
                                <h2 style="color: #86bfdf">Air</h2>
                                <div class="empower-choice-div">
                                        <div class="empower-choices">
                                                <button id="shifting-winds" style="color: #9edafd">Aeroshift</button>
                                                <p>Your cards that draw cards draw one more card</p>
                                        </div>
                                        <div class="empower-choices">
                                                <button id="windrunner" style="color: white">Windrunner</button>
                                                <p>Draw one more card each turn</p>
                                        </div>
                                </div>
                        </div>
                        <div class="empower-element-div">
                                <h2 style="color: #0f5e9c">Water</h2>
                                <div class="empower-choice-div">
                                        <div class="empower-choices">
                                                <button id="blood-transfusion" style="color: #be291e">Bloodbender</button>
                                                <p>Blood siphon now heals for 30% of damage dealt</p>
                                        </div>
                                        <div class="empower-choices">
                                                <button id="cleansing-currents" style="color: #74ccf4">Waterweaver</button>
                                                <p>Heal to full health and gain +1 max health and regen when you play water cards</p>
                                        </div>
                                </div>
                        </div>
                        <div class="empower-element-div">
                                <h2 style="color: #7a4b31">Earth</h2>
                                <div class="empower-choice-div">
                                        <div class="empower-choices">
                                                <button id="venomous-vines" style="color: #81b14f">Grovetender</button>
                                                <p>Gain 2 thorns at the end of every turn</p>
                                        </div>
                                        <div class="empower-choices">
                                                <button id="stonewall" style="color: #757575">Stoneshaper</button>
                                                <p>Start each encounter with 50 block</p>
                                        </div>
                                </div>
                        </div>
                        `
                        function nextStage() {
                                location1Tiles1.addEventListener("click", L1T1);
                                location1Tiles2.addEventListener("click", L1T2);
                                location1Tiles3.addEventListener("click", L1T3);
                                if (faeForest) {
                                        faeForest = false;
                                        hallowwood = true;
                                } else if (hallowwood) {
                                        hallowwood = false;
                                }
                                document.getElementById("player-health-numbers").style = "color: white";
                                encounterMusicTrigger = false;
                                eliteEncounterMusicTrigger = false;
                                exclamationMusicTrigger = false;
                                shopMusicTrigger = false;
                                blacksmithMusicTrigger = false;
                                switchArea(map, empowerContainer);
                                randomizeLocations();
                                location.href = "#bottom-anchor";
                        }
                        document.getElementById("eternal-flame").addEventListener("click", () => {
                                flameWarden = true;
                                nextStage();
                        });
                        document.getElementById("scorched-earth").addEventListener("click", () => {
                                pyromancer = true;
                                nextStage();
                        });
                        document.getElementById("surgebinder").addEventListener("click", () => {
                                surgebinder = true;
                                nextStage();
                        });
                        document.getElementById("lightning-jewel").addEventListener("click", () => {
                                stormchaser = true;
                                nextStage();
                        });
                        document.getElementById("leeching-cold").addEventListener("click", () => {
                                cryocast = true;
                                nextStage();
                        });
                        document.getElementById("everlasting-winter").addEventListener("click", () => {
                                winterWarrior = true;
                                nextStage();
                        });
                        document.getElementById("shifting-winds").addEventListener("click", () => {
                                aeroshift = true;
                                nextStage();
                        });
                        document.getElementById("windrunner").addEventListener("click", () => {
                                windrunner = true;
                                nextStage();
                        });
                        document.getElementById("blood-transfusion").addEventListener("click", () => {
                                bloodbender = true;
                                playerImgText[5].innerHTML = `
                                        <h4 class="img-text-h4">Blood Siphon</h4>
                                        <p class="img-text-p">Heal for 40% of damage done. Decreases by one at the end of each turn.</p>
                                `
                                nextStage();
                        });
                        document.getElementById("cleansing-currents").addEventListener("click", () => {
                                waterweaver = true;
                                playerCurrentHealth.innerText = playerMaxHealth.innerText;
                                topBarHealthNumber.innerText = playerMaxHealth.innerText;
                                nextStage();
                        });
                        document.getElementById("venomous-vines").addEventListener("click", () => {
                                grovertender = true;
                                nextStage();
                        });
                        document.getElementById("stonewall").addEventListener("click", () => {
                                stoneshaper = true;
                                nextStage();
                        });
                } else if (bossDefeated[0] && bossDefeated[1] && hallowwood) {
                                allMusic.forEach(i => {
                                        i.pause();
                                });
                                allMusic = [];
                                allAmbience = [];
                                const heavenMapMusic = new Audio("audio/heaven-map-music.wav");
                                //switchMusic(heavenMapMusic);
                                mapMusicIndex = allMusic.indexOf(heavenMapMusic);
                                const heavenAmbience = new Audio("audio/heaven-ambience.wav");
                                switchAmbience(heavenAmbience);
                                displayFlex(empowerContainer);
                                displayNone(arena);
                                empowerContainer.style.backgroundImage = "url(imgs/heaven-portal2.jpeg)";
                                arena.style.backgroundImage = "url(imgs/heaven-arena.jpeg)";
                                map.style.backgroundImage = "url(imgs/heaven-map.jpeg)";
                                const empowerElementDiv = document.querySelectorAll(".empower-element-div");
                                if (flameWarden || pyromancer) {
                                        empowerElementDiv[0].innerHTML = ``;
                                } else if (surgebinder || stormchaser) {
                                        empowerElementDiv[1].innerHTML = ``;
                                } else if (cryocast || winterWarrior) {
                                        empowerElementDiv[2].innerHTML = ``;
                                } else if (aeroshift || windrunner) {
                                        empowerElementDiv[3].innerHTML = ``;
                                } else if (bloodbender || waterweaver) {
                                        empowerElementDiv[4].innerHTML = ``;
                                } else if (grovertender || stoneshaper) {
                                        empowerElementDiv[5].innerHTML = ``;
                                }
                }
                return;
        }
        // IF ENEMY  IS DEAD, DELETE THEM
        for (let i = 0; i < numberOfEnemies; i++) {
                if (enemyIsDead[i] === false && enemyCurrentHealth[i].innerText <= 0) {
                        enemy[i].classList.add("fade-out");
                        enemyIsDead[i] = true;
                        enemiesKilled++;
                }
        }
        if (enemiesAlive > 0) {
                enemiesAlive = numberOfEnemies - enemyIsDead.filter(Boolean).length;                
        }
        if (enemiesAlive == 0 && !enemiesAreDead) {
                enemiesAreDead = true;
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
//let energizeIndex = 1;
let ghostIndex = 11;
// ENEMIES CHOOSE AN ACTION BASED ON RANDOM ACTION CHOICE
function enemyAction() {
        eI = 0;
        trackEnemies = [...arguments];
        if (trackEnemies[0] == 11) {
                playerFrostbite = true;
                displayBlock(playerFrostbiteImg);
                updateCardText();
        }
        if (aquatasBlessing) {
                playerRegenNumber.innerText = 8;
                aquatasBlessing = false;
                displayBlock(playerRegenDiv, playerRegenImg, playerRegenNumber);
        } else if (gaiaBlessing) {
                playerRegenNumber.innerText = 6;
                gaiaBlessing = false;
                displayBlock(playerThornsDiv, playerThornsImg, playerThornsNumber);
        }
        enemiesAlive = numberOfEnemies - enemyIsDead.filter(Boolean).length;
        trackEnemies.forEach((i) => {
                //for (let k = 0; k < energizeIndex; k++) {
                        // RESET ALL ACTIONS
                        actionChoice[eI] = createRandomNumber(1, 10);
                        if (numberOfEnemies === 3 && enemiesAlive === 1) {
                                actionChoice[eI] = 1;
                        }
                        if (actionChoice[eI] <= enemiesInformation[i].attackChance) {          
                                // ATTACK
                                enemyRandomDamage[eI] = createRandomNumber(enemiesInformation[i].attackDamageLow, enemiesInformation[i].attackDamageHigh);
                                // BOOST DAMAGE ON LAST ENEMY SO YOU CANT HEAL TO FULL HEALTH ON LAST ENEMY BEING WEAK
                                if (numberOfEnemies === 3 && enemiesAlive === 1) {
                                        enemyRandomDamage[eI] += 7;
                                }
                                enemyAttackActionNumber[eI].innerText = enemyRandomDamage[eI];
                                displayBlock(enemyAttackActionDiv[eI], enemyAttackActionImg[eI], enemyAttackActionNumber[eI]);
                        } else if (actionChoice[eI] <= enemiesInformation[i].blockChance) {
                                // BLOCK
                                enemyRandomBlock[eI] = createRandomNumber(enemiesInformation[i].blockAmountLow, enemiesInformation[i].blockAmountHigh);
                                if (winterWarriorTracking[eI] === true) {
                                        enemyRandomBlock[eI] = Math.floor(enemyRandomBlock[eI] / 2);
                                }
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
                        } /*else if (actionChoice[eI] <= enemiesInformation[i].energizeChance) {
                                // ENERGIZE
                                displayBlock(enemyEnergizeActionImg[eI], enemyEnergizeActionDiv[eI]);
                        }*/ else if (actionChoice[eI] <= enemiesInformation[i].regenChance) {
                                if (enemyCurrentHealth[eI].innerText < enemyMaxHealth[eI].innerText - enemiesInformation[i].regenAmountHigh) {
                                        // REGEN
                                        enemyRandomRegen[eI] = createRandomNumber(enemiesInformation[i].regenAmountLow, enemiesInformation[i].regenAmountHigh);
                                        if (winterWarriorTracking[eI] === true) {
                                                enemyRandomRegen[eI] = Math.floor(enemyRandomRegen[eI] / 2);
                                        }
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
                                        if (winterWarriorTracking[eI] === true) {
                                                enemyRandomBlood[eI] = Math.floor(enemyRandomBlood[eI] / 2);
                                        }
                                        enemyBloodActionNumber[eI].innerText = enemyRandomBlood[eI];
                                        displayBlock(enemyBloodActionImg[eI], enemyBloodActionNumber[eI], enemyBloodActionDiv[eI]);
                                        enemyCanGainBlood = true;
                                } else if ((trackEnemies[eI] === 26 || trackEnemies[eI] === 27) && enemyBloodNumber[eI].innerText <= 1) {
                                        // BLOOD
                                        enemyRandomBlood[eI] = createRandomNumber(enemiesInformation[i].bloodAmountLow, enemiesInformation[i].bloodAmountHigh);
                                        if (winterWarriorTracking[eI] === true) {
                                                enemyRandomBlood[eI] = Math.floor(enemyRandomBlood[eI] / 2);
                                        }
                                        enemyBloodActionNumber[eI].innerText = enemyRandomBlood[eI];
                                        displayBlock(enemyBloodActionImg[eI], enemyBloodActionNumber[eI], enemyBloodActionDiv[eI]);
                                        enemyCanGainBlood = true;
                                } else {
                                        // ATTACK
                                        if (trackEnemies[0] == 27) {
                                                enemiesInformation[27].attackDamageLow += 2;
                                                enemiesInformation[27].attackDamageHigh += 2;
                                        }
                                        enemyRandomDamage[eI] = createRandomNumber(enemiesInformation[i].attackDamageLow, enemiesInformation[i].attackDamageHigh);
                                        enemyAttackActionNumber[eI].innerText = enemyRandomDamage[eI];
                                        displayBlock(enemyAttackActionDiv[eI], enemyAttackActionImg[eI], enemyAttackActionNumber[eI]);
                                }
                        } else if (actionChoice[eI] <= enemiesInformation[i].thornsChance) {
                                // THORNS
                                enemyRandomThorns[eI] = createRandomNumber(enemiesInformation[i].thornsAmountLow, enemiesInformation[i].thornsAmountHigh);
                                if (winterWarriorTracking[eI] === true) {
                                        enemyRandomThorns[eI] = Math.floor(enemyRandomThorns[eI] / 2);
                                }
                                enemyThornsActionNumber[eI].innerText = enemyRandomThorns[eI];
                                displayBlock(enemyThornsActionImg[eI], enemyThornsActionNumber[eI], enemyThornsActionDiv[eI]);
                        } else if (actionChoice[eI] <= enemiesInformation[i].windsweptChance) {  
                                // LOWER ATTACK
                                displayBlock(enemyWindsweptActionImg[eI]);        
                        } else if (actionChoice[eI] <= enemiesInformation[i].frostbiteChance) {                        
                                // LOWER BLOCK
                                displayBlock(enemyFrostbiteActionImg[eI]);
                        } else {
                                ghostIndex--;
                                enemyAttackActionNumber[eI].innerText = ghostIndex;
                                enemyAttackActionNumber[eI].classList = ("ghost-number");
                                enemyAttackActionNumber[eI].style = `opacity: ${ghostIndex + 2}0%`
                                displayBlock(enemyAttackActionDiv[eI], enemyAttackActionNumber[eI]);
                        }
                        /*if (energizeIndex > 1) {
                                energizeIndex--;
                        }*/
                //}
                eI++
        });
        eI = 0;
}
let winterWarriorTracking = [false, false, false];
function endTurn() {
        if (!enemiesAreDead) {
                // RESET MANA AND DEBUFFS
                if (lightningInABottle) { 
                        if (stormchaser) {
                                currentMana.innerText = parseFloat(currentMana.innerText) + 5;
                        } else {
                                currentMana.innerText = parseFloat(currentMana.innerText) + 4;                 
                        }
                } else {
                        if (stormchaser) {
                                currentMana.innerText = 5;
                        } else {
                                currentMana.innerText = 4;
                        }
                }
                if (doubleMana) {
                        currentMana.innerText *= 2;
                        doubleMana = false;
                }
                checkPlayerBurn();
                if (trackEnemies[0] !== 11) {
                        playerWindswept = false;
                        playerFrostbite = false;
                        displayNone(playerWindsweptImg, playerFrostbiteImg);
                }
                enemiesAlive = numberOfEnemies - enemyIsDead.filter(Boolean).length;
                // FUNCTIONS TRIGGERS WHEN END TURN BUTTON IS CLICKED
                const enemyTurn = () => {
                        checkEnemyBurn([eI]);
                        if (pyromancer) {
                                checkEnemyBurn([eI]);
                        }
                        // CHECK IF ENEMY IS DEAD
                        if (enemyIsDead[eI] === false) {
                                        checkEnemyRegenHeal([eI]);
                                        checkEnemyBloodSiphon([eI]);
                                        if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].attackChance) {
                                                // ATTACK
                                                damagePlayer(enemyRandomDamage[eI], eI);
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].blockChance) {
                                                // BLOCK
                                                fxEnemyBlock.play();
                                                enemyGainBlock(enemyRandomBlock[eI], eI);
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].healChance) {
                                                if (enemyCurrentHealth[eI].innerText < enemyMaxHealth[eI].innerText - enemyRandomHeal[eI]) {
                                                        // HEAL
                                                        enemyHeal(enemyRandomHeal[eI], eI);
                                                } else {
                                                        // ATTACK
                                                        damagePlayer(enemyRandomDamage[eI], eI);
                                                }
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].burnChance) {
                                                // BURN
                                                enemyBurnPlayer(enemyRandomBurn[eI], eI);
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].energizeChance) {
                                                // ENERGIZE
                                                //energizeIndex = 3;
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].regenChance) {
                                                if (enemyCurrentHealth[eI].innerText < enemyMaxHealth[eI].innerText - enemyRandomRegen[eI]) {
                                                        // REGEN
                                                        enemyGainRegeneration(enemyRandomRegen[eI], eI);
                                                } else {
                                                        // ATTACK
                                                        damagePlayer(enemyRandomDamage[eI], eI);
                                                }
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].bloodChance) {
                                                if (enemyCanGainBlood === true && parseFloat(enemyCurrentHealth[eI].innerText) < parseFloat(enemyMaxHealth[eI].innerText) && parseFloat(enemyBloodNumber[eI].innerText) <= 1) {
                                                        // BLOOD
                                                        enemyGainBloodSiphon(enemyRandomBlood[eI], eI);
                                                        enemyCanGainBlood = false;
                                                } else if ((trackEnemies[eI] === 26 || trackEnemies[eI] === 27) && enemyBloodNumber[eI].innerText == 0) {
                                                        // BLOOD
                                                        enemyGainBloodSiphon(enemyRandomBlood[eI], eI);
                                                        enemyCanGainBlood = false;
                                                } else {
                                                        // ATTACK
                                                        damagePlayer(enemyRandomDamage[eI], eI);
                                                }
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].thornsChance) {
                                                // THORNS
                                                enemyGainThorns(enemyRandomThorns[eI], eI);
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].windsweptChance) {
                                                // LOWER ATTACK
                                                fxWindsOfChange.currentTime = 0;
                                                fxWindsOfChange.play();
                                                playerWindswept = true;
                                                displayBlock(playerWindsweptImg);
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].frostbiteChance) {                        
                                                // LOWER BLOCK
                                                fxFlurry.currentTime = 0;
                                                fxFlurry.play();
                                                playerFrostbite = true;
                                                displayBlock(playerFrostbiteImg);        
                                        } else {
                                                if (ghostIndex === 1) {
                                                        playerCurrentHealth.innerText -= 1000;
                                                        topBarHealthNumber.innerText -= 1000;
                                                }
                                        }
                                // RESET ACTIONS
                                displayNone(enemyAttackActionDiv[eI], enemyBlockActionDiv[eI], enemyHealActionDiv[eI], enemyBurnActionDiv[eI], enemyThornsActionDiv[eI],
                                        enemyRegenActionDiv[eI], enemyWindsweptActionImg[eI], enemyFrostbiteActionImg[eI], enemyWindsweptImg[eI]);
                                if (winterWarrior && !winterWarriorTracking[eI] && enemyFrostbite[eI]) {
                                        winterWarriorTracking[eI] = true;
                                } else {
                                        enemyWindswept[eI] = false;
                                        enemyFrostbite[eI] = false;
                                        winterWarriorTracking[eI] = false;
                                        displayNone(enemyFrostbiteImg[eI]);
                                }
                                concentratedFireTracking[eI] = false;
                        }
                        eI++;
                }
                enemyTurn();
                if (numberOfEnemies > 1) {
                        setTimeout(enemyTurn, 400);
                }
                if (numberOfEnemies === 3) {
                        setTimeout(enemyTurn, 800);
                }
                setTimeout(function() {
                        removeCardClicked();
                        checkPlayerEnergize();
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
                        reduceAllAttack = false;
                }, (numberOfEnemies - 1) * 500);
                damageThisTurn = 0;
                airBubble = [];
                if (bloodAmulet) {
                        playerBloodNumber.innerText = parseFloat(playerBloodNumber.innerText) + 1;
                        displayBlock(playerBloodImg, playerBloodNumber);
                        bloodAmulet = false;
                }
                turnEnded = true;
                if (grovertender) {
                        playerThornsNumber.innerText = parseFloat(playerThornsNumber.innerText) + 2;
                        displayBlock(playerThornsImg, playerThornsNumber);
                }
                checkHealth();
        }
}
for (let i = 0; i < openingCards.length; i++) {
      addCardListeners(openingCards, i, i, 0);      
}
mystery();
/*faeForest = false;
hallowwood = false;
bossDefeated[0] = true;
bossDefeated[1] = true;
arena.style.backgroundImage = "url(imgs/heaven-arena.jpeg)";
map.style.backgroundImage = "url(imgs/heaven-map.jpeg)";*/