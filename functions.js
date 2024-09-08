/* IDEAS.
Light and Dark/Summoner/Celestial/Temporal based class has a light and dark meter based on your actions throughout the game
face corrupted elemental spirits as boss battle
Have hallowwood monsters (witches) either rez as ghost or zombie/skeleton
jesus turns water cards to wine cards; set sun background to night 3 times before jesus rezes
zeus lighting cards get empowered
Shifting cards evolve after reaching a certain damage threshold

TO DO
Tutorial lists what are buffs and debuffs and what they do
Add a tutorial reference guide button staight onto the top board UI

BUGS
?keep lumaishas enemy health bars black
?dynamic update cards windswept isnt working
clicking two winds of change uses both cards when played
*/
/*
START SCREEN SECTION
*/
const startScreen = document.querySelector("#start-screen-container");
const startGame = document.querySelector("#start-game");
const tutorial = document.querySelector("#tutorial");
const options = document.querySelector("#options");
const optionsContainer = document.querySelector("#options-container");
const quitGame = document.querySelector("#quit-game");
const arrows = document.querySelectorAll(".arrow");
const musicSlider = document.querySelector("#music-slider");
const ambienceSlider = document.querySelector("#ambience-slider");
const soundFXSlider = document.querySelector("#soundfx-slider");
let allMusic = [];
let allAmbience = [];
const [fxFireball, fxCascadingFlames, fxStaticCharge, fxChainLightning, fxFrostbolt, fxFrostFingers, fxTornado, fxGaleForce, fxBloodCocoon, fxAerwynasTrident, fxRockSmash, fxThornShield,
        fxFirefall, fxKindredSpirits, fxPyromania, fxSummerSolstice, fxPotion, fxPhoenixFire, fxSurge, fxLectrasTouch, fxStormblessed, fxBallLightning, fxThunderCrash, fxStormForm, fxSiphonHeat,
        fxWintersBreath, fxSnowNova, fxGlaciasSoul, fxIceRay, fxIcyImbuement, fxWindsOfChange, fxWindwalk, fxSphereOfAir, fxConvergingCurrent, fxTempiasFury, fxZephyrInfusion, fxWaterWall,
        fxSanguineSpring, fxDownpour, fxTidalBinding, fxTsunami, fxEarthSpikes, fxStoneBarricade, fxVineSheath, fxWeaveOfThorns, fxVineWhip, fxGaiasEmbrace, fxEssenceLeech, fxFrostfireFusion,
        fxFanTheFlames, fxCauterize, fxMagmaBlast, fxDeepFreeze, fxHurricane, fxElectricCurrent, fxEnergyAegis, fxFlurry, fxLiquify, fxFrozenTundra, fxAirBubbles, fxRockOrbit, fxCelestialAttunement, fxEnemyAttack,
        fxEnemyBlock, fxDragonRoar, fxDragonGrowls, fxGiantFootsteps, fxGiantGroans, fxWizardCast, fxSpellSuccess, fxSpellFail] =
        [new Audio("audio/fireball.wav"), new Audio("audio/cascading-flames.wav"), new Audio("audio/static-charge.wav"), new Audio("audio/chain-lightning.wav"), new Audio("audio/frostbolt.wav"), new Audio("audio/frost-fingers.wav"),
        new Audio("audio/tornado.wav"), new Audio("audio/gale-force.wav"), new Audio("audio/blood-cocoon.wav"), new Audio("audio/aerwynas-trident.wav"), new Audio("audio/rock-smash.wav"), new Audio("audio/thorn-shield.wav"),
        new Audio("audio/firefall.wav"), new Audio("audio/kindred-spirits.wav"), new Audio("audio/pyromania.wav"), new Audio("audio/summer-solstice.wav"), new Audio("audio/potion.wav"), new Audio("audio/phoenix-fire.wav"), 
        new Audio("audio/surge.wav"), new Audio("audio/lectras-touch.wav"), new Audio("audio/stormblessed.wav"), new Audio("audio/ball-lightning.wav"), new Audio("audio/thunder-crash.wav"), new Audio("audio/storm-form.wav"),
        new Audio("audio/siphon-heat.wav"), new Audio("audio/winters-breath.wav"), new Audio("audio/snow-nova.wav"), new Audio("audio/glacias-soul.wav"), new Audio("audio/ice-ray.wav"), new Audio("audio/icy-imbuement.wav"),
        new Audio("audio/winds-of-change.wav"), new Audio("audio/windwalk.wav"), new Audio("audio/sphere-of-air.wav"), new Audio("audio/converging-current.wav"), new Audio("audio/tempias-fury.wav"), new Audio("audio/zephyr-infusion.wav"),
        new Audio("audio/water-wall.wav"), new Audio("audio/sanguine-spring.wav"), new Audio("audio/downpour.wav"), new Audio("audio/tidal-binding.wav"), new Audio("audio/tsunami.wav"),
        new Audio("audio/earth-spikes.wav"), new Audio("audio/stone-barricade.wav"), new Audio("audio/vine-sheath.wav"), new Audio("audio/weave-of-thorns.wav"), new Audio("audio/vine-whip.wav"), new Audio("audio/gaias-embrace.wav"),
        new Audio("audio/essence-leech.wav"), new Audio("audio/frostfire-fusion.wav"), new Audio("audio/fan-the-flames.wav"), new Audio("audio/cauterize.wav"), new Audio("audio/magma-blast.wav"), new Audio("audio/deep-freeze.wav"),
        new Audio("audio/hurricane.wav"), new Audio("audio/electric-current.wav"), new Audio("audio/energy-aegis.wav"), new Audio("audio/flurry.wav"), new Audio("audio/liquify.wav"), new Audio("audio/frozen-tundra.wav"),
        new Audio("audio/air-bubbles.wav"), new Audio("audio/rock-orbit.wav"), new Audio("audio/celestial-attunement.wav"), new Audio("audio/enemy-attack.wav"), new Audio("audio/enemy-block.wav"), new Audio("audio/dragon-roar.wav"),
        new Audio("audio/dragon-growls.wav"), new Audio("audio/giant-footsteps.wav"), new Audio("audio/giant-groans.wav"), new Audio("audio/wizard-cast.wav"), new Audio("audio/spell-success.wav"), new Audio("audio/spell-fail.wav")];
const allSoundFX = [fxFireball, fxCascadingFlames, fxStaticCharge, fxChainLightning, fxFrostbolt, fxFrostFingers, fxTornado, fxGaleForce, fxBloodCocoon, fxAerwynasTrident, fxRockSmash, fxThornShield,
        fxFirefall, fxKindredSpirits, fxPyromania, fxSummerSolstice, fxPhoenixFire, fxPotion, fxSurge, fxLectrasTouch, fxStormblessed, fxBallLightning, fxThunderCrash, fxStormForm, fxSiphonHeat,
        fxWintersBreath, fxSnowNova, fxGlaciasSoul, fxIceRay, fxIcyImbuement, fxWindsOfChange, fxWindwalk, fxSphereOfAir, fxConvergingCurrent, fxTempiasFury, fxZephyrInfusion, fxWaterWall,
        fxSanguineSpring, fxDownpour, fxTidalBinding, fxTsunami, fxEarthSpikes, fxStoneBarricade, fxVineSheath, fxWeaveOfThorns, fxVineWhip, fxGaiasEmbrace, fxEssenceLeech, fxFrostfireFusion,
        fxFanTheFlames, fxCauterize, fxMagmaBlast, fxDeepFreeze, fxHurricane, fxElectricCurrent, fxEnergyAegis, fxFlurry, fxLiquify, fxFrozenTundra, fxAirBubbles, fxRockOrbit, fxCelestialAttunement, fxEnemyAttack,
        fxEnemyBlock, fxDragonRoar, fxDragonGrowls, fxGiantFootsteps, fxGiantGroans, fxWizardCast, fxSpellSuccess, fxSpellFail];
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
function switchAmbience(ambience) {
        if (!allAmbience.includes(ambience)) {
                allAmbience.push(ambience);
        }
        ambience.play();
        ambience.loop = true;
        ambience.volume = ambienceSlider.value;
}
window.addEventListener("keydown", () => {
        displayNone(document.querySelector("#beginning-screen-container"));
        displayFlex(startScreen);
        const startScreenMusic = new Audio("audio/start-screen-music.wav");
        //switchMusic(startScreenMusic);
        window.addEventListener("keydown", e => {
            if (e.key === "t" && (document.querySelector("#tutorial-container").style.display == "" || document.querySelector("#tutorial-container").style.display == "none")) {
                    displayFlex(document.querySelector("#tutorial-container"));
                    return;
            }
            if (e.key === "t" && document.querySelector("#tutorial-container").style.display == "flex") {
                    displayNone(document.querySelector("#tutorial-container"));
                    return;
            }
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
}, {once: true});
let [easyDifficulty, normalDifficulty, hardDifficulty] = [false, false, false];
let mapMusicIndex;
startGame.addEventListener("click", () => {
        function start() {
                switchArea(map, exclamationContainer);
                location.href = "#bottom-anchor";
                randomizeLocations();
                location1Tiles1.addEventListener("click", L1T1);
                location1Tiles2.addEventListener("click", L1T2);
                location1Tiles3.addEventListener("click", L1T3);
                // LOOP TO CREATE OPENING 12 CARDS
                for (let i = 0; i < 12; i++) {
                        addCardToDeck(i, 0, false);
                }
                handArray = handArray.toSorted(() => 0.5 - Math.random());
        }
        function storyStart() {
                displayFlex(document.querySelector("#board-header"), exclamationContainer);
                exclamationContainer.innerHTML = `
                <div class="exclamation-div" style="background-image: url(imgs/fae-forest-mystery.jpeg)">
                        <div class="exclamation-information-container">
                                <div style="width: 100%"><h1 class="exclamation-title">Fae Forest</h1></div>
                                <div class="exclamation-event-img">
                                        <img src="imgs/terra.jpeg">
                                </div>
                                <div class="exclamation-text-button-div">
                                        <div class="exclamation-text-div">
                                        <p class="exclamation-text">Hello hero. I am Terra, the physical manifestation of this world formed of flesh and bone. I've come with dire news.<br><br>
                                                Deathbinder Maluminia, spirit of Terra's underworld, has seemingly grown frustrated with my rule. She seeks to turn the creatures of the world against us and sieze power for herself. I lament that we must send these innocent creatures to Maluminia's realm, but if we are to stop her we have no other choice. Your journey begins in the Fae Forest. Seek answers from the creature at the end of the forest.<br><br>
                                                Know that you won't be alone in this adventure. The six elemental spirits have lent you some of their power to help return balance. Seek their council and accept their blessings or you'll have no chance of surviving. Go, the fate of the world depends upon it.  
                                        </p>
                                        </div>
                                        <div class="exclamation-button-div">
                                                <button class="exclamation-button-1">Venture through Fae Forest</button>
                                        </div>
                                </div>
                        </div>
                </div>`;
                document.querySelector(".exclamation-button-1").addEventListener("click", start);
                const mapMusic = new Audio("audio/map-music.wav");
                //switchMusic(mapMusic);
                mapMusicIndex = allMusic.indexOf(mapMusic);
                const forestAmbience = new Audio("audio/forest-ambience.wav");
                switchAmbience(forestAmbience);
                displayNone(startScreen, document.querySelector("#difficulty-container"));
                document.getElementById("settings").addEventListener("click", () => {
                        if ((optionsContainer.style.display == "" || optionsContainer.style.display == "none")) {
                                displayFlex(optionsContainer);
                                return;
                        }
                        if (optionsContainer.style.display == "flex") {
                                displayNone(optionsContainer);
                                return;
                        }
                });
                document.getElementById("settings").addEventListener("mouseover", () => {
                        document.getElementById("settings").style.opacity = "1";
                });
                document.getElementById("settings").addEventListener("mouseout", () => {
                        document.getElementById("settings").style.opacity = ".6";
                });
        }
        displayFlex(document.querySelector("#difficulty-container"));
        document.querySelector("#easy").addEventListener("click", () => {
                storyStart();
                easyDifficulty = true;
                playerAether.innerText = 200;
        });
        document.querySelector("#normal").addEventListener("click", () => {
                storyStart();
                normalDifficulty = true;
                playerAether.innerText = 100;
        });
        document.querySelector("#hard").addEventListener("click", () => {
                storyStart();
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
document.getElementById("options-tutorial-button").addEventListener("click", () => {
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
        if (block === map) {
                destroyReferenceCards();
                //switchMusic(allMusic[mapMusicIndex]);
                if ((faeForest && (!waterGift && !earthGift)) || (hallowwood && (!iceGift && !airGift)) || (!faeForest && !hallowwood && (!fireGift && !lightningGift))) {
                        location.href = "#bottom-anchor";
                }
                exclamationContainer.innerHTML = ``;
        }
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
// VARIABLE FUNCTION TO TRACK MAP LOCATION CLICK
const L1T1 = () => {
        chooseLocationPath("L1T1");
};
const L1T2 = () => {
        chooseLocationPath("L1T2");
};
const L1T3 = () => {
        chooseLocationPath("L1T3");
};
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
        chooseLocationPath("L9T4");
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
        displayNone(playerWindsweptImg, playerFrostbiteImg, playerGlaciasSoulImg, playerBurnImg, playerBurnNumber, playerEnergizeImg, playerEnergizeNumber, playerRegenImg, playerRegenNumber, playerThornsImg, playerThornsNumber,
                playerBloodImg, playerBloodNumber, playerBlockImg, playerBlockNumber);
        if (stormchaser) {
                currentMana.innerText = 5;
        } else {
                currentMana.innerText = 4;
        }
        if (thunderTalisman) {
                currentMana.innerText = parseFloat(currentMana.innerText) + 2;
        }
        playerEnergizeNumber.innerText = 0;
        playerThornsNumber.innerText = 0;
        playerBurnNumber.innerText = 0;
        playerBlockNumber.innerText = 0;
        playerRegenNumber.innerText = 0;
        playerBloodNumber.innerText = 0;
        frostbitten = false;
        let etherealLength = etherealCards.length;
        for (let i = 0; i < etherealLength; i++) {
                let spliceCard = etherealCards.pop();
                displayFlex(spliceCard);
                drawPileArray.push(spliceCard);
                handContainer.appendChild(spliceCard);
        }
        essenceOfEmber = [];
        essenceOfEmberEmpowered = [];
        stormForm = [];
        stormFormEmpowered = [];
        icyEmbuement = false;
        windsOfChange = 8;
        sphereOfAir = 3;
        staticCharge = false;
        gaiasEmbrace = [];
        terrasBlessing = [];
        terrasBlessingEmpowered = [];
        skippingRocks = [];
        skippingRocksTurn3 = [];
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
                playerHeal(3)
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
        if (stoneshaper) {
                playerBlockNumber.innerText = parseFloat(playerBlockNumber.innerText) + 25;
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
                if (dontRepeatGoldEncounter.includes(1) && dontRepeatGoldEncounter.includes(2) && dontRepeatGoldEncounter.includes(3)) {
                        encounter();
                } else {
                        randomGoldEncounterNumber = createRandomNumber(1, 3);
                        while (dontRepeatGoldEncounter.includes(randomGoldEncounterNumber)) {
                                randomGoldEncounterNumber = createRandomNumber(1, 3);
                        }
                }
        } else if (hallowwood) {
                if (dontRepeatGoldEncounter.includes(4) && dontRepeatGoldEncounter.includes(5) && dontRepeatGoldEncounter.includes(6)) {
                        encounter();
                } else {
                        randomGoldEncounterNumber = createRandomNumber(4, 6);
                        while (dontRepeatGoldEncounter.includes(randomGoldEncounterNumber)) {
                                randomGoldEncounterNumber = createRandomNumber(4, 6);
                        }
                }
        } else {
                if (dontRepeatGoldEncounter.includes(7) && dontRepeatGoldEncounter.includes(8) && dontRepeatGoldEncounter.includes(9)) {
                        encounter();
                } else {
                        randomGoldEncounterNumber = createRandomNumber(7, 9);
                        while (dontRepeatGoldEncounter.includes(randomGoldEncounterNumber)) {
                                randomGoldEncounterNumber = createRandomNumber(7, 9);
                        }
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
                for (let i = 0; i < enemyMaxHealth.length; i++) {
                        enemyMaxHealth[i].innerText = parseFloat(enemyMaxHealth[i].innerText) + enemyLevel;
                        enemyCurrentHealth[i].innerText = parseFloat(enemyCurrentHealth[i].innerText) + enemyLevel;
                }
                dontRepeatGoldEncounter.push(repeat);
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
const relicsInformation = [
        `<div class="relic-div">
                <img class="relic-img" src="imgs/ring-of-fire.png">
                <div class="relic-img-text img-text">
                        <h4 class="img-text-h4">Ring Of Fire</h4>
                        <p class="img-text-p">Single target burn duplicates half it's burn and spreads it to all enemies</p>
                </div>
        </div>`,                      
        `<div class="relic-div">
                <img class="relic-img" src="imgs/eternal-flame.png">
                <div class="relic-img-text img-text">
                        <h4 class="img-text-h4">Concentrated Fire</h4>
                        <p class="img-text-p">Burning an enemy twice in one turn will increase the second burn by 50%</p>
                </div>
        </div>`,                     
        `<div class="relic-div">
                <img class="relic-img" src="imgs/thunder-talisman.png">
                <div class="relic-img-text img-text">
                        <h4 class="img-text-h4">Thunder Talisman</h4>
                        <p class="img-text-p">Start each encounter with +2 mana for the first turn</p>
                </div>
        </div>`,
        `<div class="relic-div">
                <img class="relic-img" src="imgs/lightning-in-a-bottle.png">
                <div class="relic-img-text img-text">
                        <h4 class="img-text-h4">Lightning in a Bottle</h4>
                        <p class="img-text-p">Your unused mana will not be lost</p>
                </div>
        </div>`,
        `<div class="relic-div">
                <img class="relic-img" src="imgs/ice-spear.png">
                <div class="relic-img-text img-text">
                        <h4 class="img-text-h4">Ice Spear</h4>
                        <p class="img-text-p">Deal 4 more damage to enemies with Frostbite</p>
                </div>
        </div>`,
        `<div class="relic-div">
                <img class="relic-img" src="imgs/frostheart.png">
                <div class="relic-img-text img-text">
                        <h4 class="img-text-h4">Frostheart</h4>
                        <p class="img-text-p">Gain 4 block when inflicting enemy with frostbite</p>
                </div>
        </div>`,
        `<div class="relic-div">
                <img class="relic-img" src="imgs/stratus.png">
                <div class="relic-img-text img-text">
                        <h4 class="img-text-h4">Stratus</h4>
                        <p class="img-text-p">Windswept will now reflect 25% of the damage enemies intend to attack for back to them</p>
                </div>
        </div>`,
        `<div class="relic-div">
                <img class="relic-img" src="imgs/wind-disc.png">
                <div class="relic-img-text img-text">
                        <h4 class="img-text-h4">Wind Disc</h4>
                        <p class="img-text-p">Start each encounter with one extra card for the first turn</p>
                </div>
        </div>`,
        `<div class="relic-div">
                <img class="relic-img" src="imgs/blood-amulet.png">
                <div class="relic-img-text img-text">
                        <h4 class="img-text-h4">Blood Amulet</h4>
                        <p class="img-text-p">Gain 1 blood siphon on your second turn</p>
                </div>
        </div>`,
        `<div class="relic-div">
                <img class="relic-img" src="imgs/caspians-tear.png">
                <div class="relic-img-text img-text">
                        <h4 class="img-text-h4">Caspian's Tear</h4>
                        <p class="img-text-p">Gain +3 max health when you start a new encounter</p>
                </div>
        </div>`,
        `<div class="relic-div">
                <img class="relic-img" src="imgs/crown-of-thorns.png">
                <div class="relic-img-text img-text">
                        <h4 class="img-text-h4">Crown of Thorns</h4>
                        <p class="img-text-p">Start each encounter with 2 thorns</p>
                </div>
        </div>`,
        `<div class="relic-div">
                <img class="relic-img" src="imgs/vine-bracelet.png">
                <div class="relic-img-text img-text">
                        <h4 class="img-text-h4">Vine Bracelet</h4>
                        <p class="img-text-p">When you lose all of your block gain 10 block</p>
                </div>
        </div>`,
];
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
                        relicContainer.innerHTML += relicsInformation[0];
                        dontRepeatRelic.push(1);
                        break;
                case 2:
                        concentratedFire = true;
                        relicContainer.innerHTML += relicsInformation[1];
                        dontRepeatRelic.push(2);
                        break;
                case 3:
                        thunderTalisman = true;
                        relicContainer.innerHTML += relicsInformation[2];
                        dontRepeatRelic.push(3);
                        break;
                case 4:
                        lightningInABottle = true;
                        relicContainer.innerHTML += relicsInformation[3];
                        dontRepeatRelic.push(4);
                        break;
                case 5:
                        iceSpear = true;
                        relicContainer.innerHTML += relicsInformation[4];
                        dontRepeatRelic.push(5);
                        break;
                case 6:
                        frostHeart = true;
                        relicContainer.innerHTML += relicsInformation[5];
                        dontRepeatRelic.push(6);
                        break;
                case 7:
                        stratus = true;
                        relicContainer.innerHTML += relicsInformation[6];
                        dontRepeatRelic.push(7);
                        break;
                case 8:
                        windDisc = true;
                        relicContainer.innerHTML += relicsInformation[7];
                        dontRepeatRelic.push(8);
                        break;
                case 9:
                        bloodAmulet = true;
                        relicContainer.innerHTML += relicsInformation[8];
                        dontRepeatRelic.push(9);
                        break;
                case 10:
                        caspiansTear = true;
                        relicContainer.innerHTML += relicsInformation[9];
                        dontRepeatRelic.push(10);
                        break;
                case 11:
                        crownOfThorns = true;
                        relicContainer.innerHTML += relicsInformation[10];
                        dontRepeatRelic.push(11);
                        break;
                case 12:
                        vineBracelet = true;
                        relicContainer.innerHTML += relicsInformation[11];
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
let jesusHasRisen = false;
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
                if (dontRepeatEliteEncounter.includes(1) && dontRepeatEliteEncounter.includes(2) && dontRepeatEliteEncounter.includes(3)) {
                        encounter();
                } else {
                        randomEliteNumber = createRandomNumber(1, 3);
                        while (dontRepeatEliteEncounter.includes(randomEliteNumber)) {
                                randomEliteNumber = createRandomNumber(1, 3);        
                        }
                }
        } else if (hallowwood) {
                if (dontRepeatEliteEncounter.includes(4) && dontRepeatEliteEncounter.includes(5) && dontRepeatEliteEncounter.includes(6)) {
                        encounter();
                } else {
                        randomEliteNumber = createRandomNumber(4, 6);
                        while (dontRepeatEliteEncounter.includes(randomEliteNumber)) {
                                randomEliteNumber = createRandomNumber(4, 6);        
                        }
                }
        } else {
                if (dontRepeatEliteEncounter.includes(7) && dontRepeatEliteEncounter.includes(8)/* && dontRepeatEliteEncounter.includes(9)*/) {
                        encounter();
                } else {
                        randomEliteNumber = createRandomNumber(9, 9);
                        while (dontRepeatEliteEncounter.includes(randomEliteNumber)) {
                                randomEliteNumber = createRandomNumber(7, 8);        
                        }
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
                dontRepeatEliteEncounter.push(repeat);
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
                        document.querySelector(".enemy-img").style = "width: 500px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: -2rem; bottom: 7rem";
                        break;
                case 5:
                        createEliteEnemy("Spectre", 24, 5);
                        document.querySelector(".enemy-img").style = "width: 420px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: 16rem; bottom: 10rem";
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
                        document.querySelector(".enemy-img").style = "width: 360px";
                        document.querySelector(".enemy-div").style = "position: absolute; left: -2rem; bottom: 9rem";
                        document.querySelectorAll(".card").forEach(i => {
                                for (let j = 0; j < cardsInformation.length; j++) {
                                        if (i.classList.contains(j) && cardsInformation[j].element === "water") {
                                                function holdCard(pile) {
                                                        pile.forEach((k) => {
                                                                if (k.classList.contains(j)) {
                                                                        let spliceCard = pile.splice(pile.indexOf(k), 1).pop();
                                                                        etherealCards.push(spliceCard);
                                                                        etherealCardsContainer.appendChild(spliceCard);
                                                                }
                                                        });
                                                }
                                                holdCard(drawPileArray);
                                                holdCard(handArray);
                                                addCardToDeck(65, 0, false);
                                        }
                                }
                                reshuffleCards();
                                drawCards(maxHandLength);
                        });
                        jesusHasRisen = true;
                        break;
        }
}
let bossDefeated = [false, false];
function boss() {
        numberOfEnemies = 1;
        let randomBossNumber;
        switchArea(arena, map);
        if (faeForest) {
                const bossMusic = new Audio("audio/forest-boss-music.wav");
                //switchMusic(bossMusic);
                randomBossNumber = createRandomNumber(1, 2);
        } else if (hallowwood) {
                const hallowwoodBossMusic = new Audio("audio/hallowwood-boss-music.wav");
                //switchMusic(hallowwoodBossMusic);
                if (slainWerewolf) {
                        randomBossNumber = 3;
                } else if (slainVampire) {
                        randomBossNumber = 4;
                } else {
                        randomBossNumber = createRandomNumber(3, 4);
                }
        } else {
                displayFlex(exclamationContainer);
                const fire = document.querySelectorAll(".fire");
                const lightning = document.querySelectorAll(".lightning");
                const ice = document.querySelectorAll(".ice");
                const air = document.querySelectorAll(".air");
                const water = document.querySelectorAll(".water");
                const earth = document.querySelectorAll(".earth");
                let mostElements = "no element in particular";
                let elementalSpirit
                if (fire.length > lightning.length && fire.length > ice.length && fire.length > air.length && fire.length > water.length && fire.length > earth.length) {
                        randomBossNumber = 7;
                        mostElements = "fire";
                        elementalSpirit = "Glacia";
                } else if (lightning.length > fire.length && lightning.length > ice.length && lightning.length > air.length && lightning.length > water.length && lightning.length > earth.length) {
                        randomBossNumber = 8;
                        mostElements = "lightning";
                        elementalSpirit = "Tempia";
                } else if (ice.length > fire.length && ice.length > lightning.length && ice.length > air.length && ice.length > water.length && ice.length > earth.length) {
                        randomBossNumber = 10;
                        mostElements = "ice";
                        elementalSpirit = "Gaia";
                } else if (air.length > fire.length && air.length > lightning.length && air.length > ice.length && air.length > water.length && air.length > earth.length) {
                        randomBossNumber = 9;
                        mostElements = "air";
                        elementalSpirit = "Aerwyna";
                } else if (water.length > fire.length && water.length > lightning.length && water.length > ice.length && water.length > air.length && water.length > earth.length) {
                        randomBossNumber = 5;
                        mostElements = "water";
                        elementalSpirit = "Ember";
                }  else if (earth.length > fire.length && earth.length > lightning.length && earth.length > ice.length && earth.length > air.length && earth.length > water.length) {
                        randomBossNumber = 6;
                        mostElements = "earth";
                        elementalSpirit = "Lectra";
                } else {
                        randomBossNumber = createRandomNumber(5, 10);
                        switch (randomBossNumber) {
                                case 5:
                                        elementalSpirit = "Ember"
                                        break;
                                case 6:
                                        elementalSpirit = "Lectra"
                                        break;
                                case 7:
                                        elementalSpirit = "Glacia"
                                        break;
                                case 8:
                                        elementalSpirit = "Tempia"
                                        break;
                                case 9:
                                        elementalSpirit = "Aerwyna"
                                        break;
                                case 10:
                                        elementalSpirit = "Gaia"
                                        break;
                        }
                }
                exclamationContainer.innerHTML = `
                <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                        <div class="exclamation-information-container">
                                <div style="width: 100%"><h1 class="exclamation-title">Maluminia's Corruption</h1></div>
                                <div class="exclamation-event-img">
                                        <img src="imgs/maluminia.jpeg">
                                </div>
                                <div class="exclamation-text-button-div">
                                        <div class="exclamation-text-div">
                                        <p class="exclamation-text">I must say, I truly didn't expect you to make it this far. Luckily I planned for this...<br><br>
                                                I'm far too weak in this realm for a good fight so I'll use the last of my power to corrupt one of your little elemental spirit friends.<br><br>
                                                I see you favor ${mostElements} so I'll corrupt ${elementalSpirit} and force her to fight you! Let's see how you fare when she's trying to kill you instead of help you!
                                        </p>
                                        </div>
                                        <div class="exclamation-button-div">
                                                <button class="exclamation-button-1">Face the final challenge</button>
                                        </div>
                                </div>
                        </div>
                </div>`;
                document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                        const heavenBossMusic = new Audio("audio/heaven-boss-music.wav");
                        //switchMusic(heavenBossMusic);
                        switchArea(arena, exclamationContainer);
                });
                displayNone(arena);
        }
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
                        document.querySelector(".enemy-img").style = "width: 540px; margin-left: -8rem";
                        document.querySelector(".enemy-health-bar").style = "margin-top: -2.5rem";
                        document.querySelector(".enemy-div").style = "margin-bottom: -2rem";
                        document.querySelector(".enemy-action-div").style = "position: absolute; bottom: 45.5rem";
                        document.querySelector(".enemy-debuffs").style = "position: absolute; bottom: 51.1rem";
                        break;
                case 3:
                        createBossEnemy("Vampire", 26, 1);
                        document.querySelector(".enemy-img").style = "width: 450px";
                        break;
                case 4:
                        createBossEnemy("Werewolf", 27, 1);
                        document.querySelector(".enemy-img").style = "width: 500px";
                        document.querySelector(".enemy-action-div").style = "position: absolute; bottom: 45.5rem";
                        document.querySelector(".enemy-debuffs").style = "position: absolute; bottom: 51.1rem";
                        break;
                case 5:
                        createBossEnemy("Ember", 46, 2);
                        document.querySelector(".enemy-img").style = "width: 450px";
                        break;
                case 6:
                        createBossEnemy("Lectra", 47, 2);
                        document.querySelector(".enemy-img").style = "width: 450px";
                        break;
                case 7:
                        createBossEnemy("Glacia", 48, 2);
                        document.querySelector(".enemy-img").style = "width: 450px";
                        break;
                case 8:
                        createBossEnemy("Tempia", 49, 2);
                        document.querySelector(".enemy-img").style = "width: 450px";
                        break;
                case 9:
                        createBossEnemy("Aerwyna", 50, 2);
                        document.querySelector(".enemy-img").style = "width: 450px";
                        break;
                case 10:
                        createBossEnemy("Gaia", 51, 2);
                        document.querySelector(".enemy-img").style = "width: 450px";
                        break;
        }
}
let [fireGift, fireGiftTrigger, lightningGift, lightningGiftTrigger, iceGift, iceGiftTrigger, airGift, airGiftTrigger, waterGift, waterGiftTrigger, earthGift, earthGiftTrigger, empowerBloodSiphon, reduceAllAttack, doubleMana] =
[false, false, false, false, false, false, false, false, false, false, false, false, false];
function treasure() {
        displayNone(map);
        displayFlex(exclamationContainer);
        if (faeForest) {
                exclamationContainer.innerHTML = `
                <div id="treasure-container">
                        <div style="text-align: center">
                                <h1>Choose a Blessing</h1>
                                <h2>Click on your glowing elemental orb to use your blessing once per battle</h2>
                        </div>
                        <div class="treasure-element-div">
                                <h2 style="color: #74ccf4">Aerwyna's Gift</h2>
                                <div class="treasure-choice-div">
                                        <div class="treasure-choices">
                                                <p>Empower your blood siphon this turn to heal for 40% more health</p>
                                                <button id="water-gift" style="color: #74ccf4">Aerwyna's Gift</button>
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
                        addActionText(document.getElementById("water-orb-div"), orbImgText[4]);
                        document.getElementById("water-orb-img").addEventListener("click", () => {
                                if (waterGift && waterGiftTrigger && playerBloodNumber.innerText > 0) {
                                        empowerBloodSiphon = true;
                                        waterGiftTrigger = false;
                                        document.getElementById("water-orb-img").classList.remove("water-glow");
                                        fxBloodCocoon.play();
                                }
                        });
                        switchArea(map, exclamationContainer);
                });
                document.getElementById("earth-gift").addEventListener("click", () => {
                        earthGift = true;
                        earthGiftTrigger = true;
                        document.getElementById("earth-orb-img").classList.add("earth-glow");
                        addActionText(document.getElementById("earth-orb-div"), orbImgText[5]);
                        document.getElementById("earth-orb-img").addEventListener("click", () => {
                                if (earthGift && earthGiftTrigger) {
                                        playerBlockNumber.innerText *= 2;
                                        document.getElementById("earth-orb-img").classList.remove("earth-glow");
                                        earthGiftTrigger = false;
                                        fxThornShield.play();
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
                                                <p>Steal all buffs from enemies that have frostbite</p>
                                                <button id="ice-gift" style="color: #2f989c">Glacia's Gift</button>
                                        </div>
                                </div>
                        </div>
                        <div class="treasure-element-div">
                                <h2 style="color: #86bfdf">Tempia's Gift</h2>
                                <div class="treasure-choice-div">
                                        <div class="treasure-choices">
                                                <p>Reduce damage to 0 for enemies that are windswept</p>
                                                <button id="air-gift" style="color: #86bfdf">Tempia's Gift</button>
                                        </div>
                                </div>
                        </div>
                </div>`
                document.getElementById("treasure-container").style = "background-image: url(imgs/hallowwood-treasure.jpeg)";
                document.getElementById("ice-gift").addEventListener("click", () => {
                        iceGift = true;
                        iceGiftTrigger = true;
                        document.getElementById("air-orb-img").style = "margin-left: 80px; z-index: 0;"
                        document.getElementById("ice-orb-img").style = "margin-left: 130px; z-index: 2;"
                        document.getElementById("ice-orb-img").classList.add("ice-glow");
                        addActionText(document.getElementById("ice-orb-div"), orbImgText[2]);
                        document.getElementById("ice-orb-img").addEventListener("click", () => {
                                if (iceGift && iceGiftTrigger) {
                                        for (let i = 0; i < numberOfEnemies; i++) {
                                                if (!enemyIsDead[i] && enemyFrostbite[i]) {
                                                        leechBuffs(i, false);
                                                }
                                        }
                                        iceGiftTrigger = false;
                                        document.getElementById("ice-orb-img").classList.remove("ice-glow");
                                        fxSnowNova.play();
                                        updateCardText();
                                }
                        });
                        switchArea(map, exclamationContainer);
                });
                document.getElementById("air-gift").addEventListener("click", () => {
                        airGift = true;
                        airGiftTrigger = true;
                        document.getElementById("air-orb-img").classList.add("air-glow");
                        addActionText(document.getElementById("air-orb-div"), orbImgText[3]);
                        document.getElementById("air-orb-img").addEventListener("click", () => {
                                if (airGift && airGiftTrigger) {
                                        for (let i = 0; i < numberOfEnemies; i++) {
                                                if (!enemyIsDead[i] && enemyWindswept[i]) {
                                                        enemyAttackActionNumber[i].innerText = 0;
                                                }
                                        }
                                        document.getElementById("air-orb-img").classList.remove("air-glow");
                                        airGiftTrigger = false;
                                        reduceAllAttack = true;
                                        fxTornado.play();
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
                                                <p>Consume all burn dealing damage equal to double enemies current burn number</p>
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
                </div>`
                document.getElementById("treasure-container").style = "background-image: url(imgs/heaven-treasure.jpeg)";
                document.getElementById("fire-gift").addEventListener("click", () => {
                        fireGift = true;
                        fireGiftTrigger = true;
                        document.getElementById("fire-orb-img").classList.add("fire-glow");
                        addActionText(document.getElementById("fire-orb-div"), orbImgText[0]);
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
                                        checkIfEnemyDead();
                                        document.getElementById("fire-orb-img").classList.remove("fire-glow");
                                        fxFirefall.play();
                                }
                        });
                        switchArea(map, exclamationContainer);
                });
                document.getElementById("lightning-gift").addEventListener("click", () => {
                        lightningGift = true;
                        lightningGiftTrigger = true;
                        doubleMana = false;
                        document.getElementById("lightning-orb-img").style = "margin-left: -130px; z-index: 2;"
                        document.getElementById("fire-orb-img").style = "margin-left: -85px; z-index: 1;"
                        document.getElementById("lightning-orb-img").classList.add("lightning-glow");
                        addActionText(document.getElementById("lightning-orb-div"), orbImgText[1]);
                        document.getElementById("lightning-orb-img").addEventListener("click", () => {
                                if (lightningGift && lightningGiftTrigger) {
                                        lightningGiftTrigger = false;
                                        doubleMana = true;
                                        document.getElementById("lightning-orb-img").classList.remove("lightning-glow");
                                        fxStormblessed.play();
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
    let hasBlacksmith = false;
    let hasShop = false;
        function getLocations(location) {
                let randomLocation = createRandomNumber(1, 100);
                if (randomLocation <= 45) {
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
        document.querySelectorAll(".location-tiles").forEach(i => {
                if (i.innerHTML === `<img class="blacksmith-img" src="imgs/icons8-blacksmith-50.png" alt="Blacksmith">`) {
                    hasBlacksmith = true;
                }
                if (i.innerHTML === `<img class="merchant-img" src="imgs/icons8-stand-50.png" alt="Merchant">`) {
                    hasShop = true;
                }
        });
        if (!hasBlacksmith) {
            location10Tiles1.innerHTML = `<img class="blacksmith-img" src="imgs/icons8-blacksmith-50.png" alt="Blacksmith">`;
        }
        if (!hasShop) {
            location10Tiles2.innerHTML = `<img class="merchant-img" src="imgs/icons8-stand-50.png" alt="Merchant">`;
        }
        location1Tiles1.innerHTML = `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`;
        location1Tiles2.innerHTML = `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`;
        location1Tiles3.innerHTML = `<img class="normal-monster-img" src="imgs/icons8-monster-face-48.png" alt="Normal Monster">`;
        location6Tiles1.innerHTML = `<img class="treasure-img" src="imgs/icons8-treasure-chest-50.png" alt="Treasure">`;
        location11Tiles1.innerHTML = `<img class="boss-monster-img" src="imgs/icons8-monster-50.png" alt="Boss Monster">`;
}
function matchEncounter(locationTile) {
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
                        location5Tiles3.addEventListener("click", L5T3);
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
                <div class="exclamation-event-img">
                        <img src="${img}">
                </div>
                <div class="exclamation-text-button-div">
                        <div class="exclamation-text-div">
                        <p class="exclamation-text">${text0}<br><br>
                                ${text1}<br><br>
                                ${text2}
                        </p>
                        </div>
                        <div class="exclamation-button-div"></div>
                </div>
            </div>
        </div>`
}
function destroyReferenceCards() {
        document.querySelectorAll(".card-reference").forEach(i => {
                destroyedCardsArray.push(i);
                destroyedCardsContainer.appendChild(i);
        });
        destroyedCardsContainer.innerHTML = ``;
        destroyedCardsArray = [];
}
const exclamationContainer = document.querySelector("#exclamation-container");
const destroyedCardsContainer = document.querySelector("#destroyed-cards-container");
let dontRepeatExclamation = [];
let exclamationMusicTrigger = false;
let exclamationMusicIndex;
let [aquatasBlessing, gaiaBlessing, slainWerewolf, slainVampire, emberBurned] = [false, false, false, false, false];
let playerEmberNumber = 0;
function mystery() {
        switchArea(exclamationContainer, map);
        if (!exclamationMusicTrigger) {
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
        } else {
                //switchMusic(allMusic[exclamationMusicIndex]);
        }
        let randomExclamationNumber;
        if (faeForest) {
                if (dontRepeatExclamation.includes(1) && dontRepeatExclamation.includes(2) && dontRepeatExclamation.includes(3) && dontRepeatExclamation.includes(4) && dontRepeatExclamation.includes(5)) {
                        encounter();
                } else {
                        randomExclamationNumber = createRandomNumber(1, 5);
                        while (dontRepeatExclamation.includes(randomExclamationNumber)) {
                                randomExclamationNumber = createRandomNumber(1, 5);
                        }
                }
        } else if (hallowwood) {
                if (dontRepeatExclamation.includes(6) && dontRepeatExclamation.includes(7) && dontRepeatExclamation.includes(8) && dontRepeatExclamation.includes(9) && dontRepeatExclamation.includes(10)) {
                        encounter();
                } else {
                        randomExclamationNumber = createRandomNumber(6, 10);
                        while (dontRepeatExclamation.includes(randomExclamationNumber)) {
                                randomExclamationNumber = createRandomNumber(6, 10);
                        }
                        if (randomExclamationNumber === 8 && !dontRepeatExclamation.includes(10)) {
                                randomExclamationNumber = 10;
                        } else if (dontRepeatExclamation.includes(10) && !dontRepeatExclamation.includes(8)) {
                                randomExclamationNumber = 8;
                        }
                } 
        } else {
                if (dontRepeatExclamation.includes(11) && dontRepeatExclamation.includes(12) && dontRepeatExclamation.includes(13) && dontRepeatExclamation.includes(14) && dontRepeatExclamation.includes(15)) {
                        encounter();
                } else {
                        randomExclamationNumber = createRandomNumber(11, 15);
                        while (dontRepeatExclamation.includes(randomExclamationNumber)) {
                                randomExclamationNumber = createRandomNumber(11, 15);
                        }
                        if (randomExclamationNumber === 12 && !dontRepeatExclamation.includes(11)) {
                                randomExclamationNumber = 11;
                        } else if (dontRepeatExclamation.includes(11) && !dontRepeatExclamation.includes(12)) {
                                randomExclamationNumber = 12;
                        }
                }
        }
        let noDuplicates = [];
        switch (randomExclamationNumber) {
                case 1:
                        createExclamation("A Necessary Sacrifice", "imgs/fae-forest-mystery.jpeg", "imgs/terra2.jpeg", `<span style="color: #81b14f">Terra</span> approaches you again with a warm kind visage.`, 
                                `"I had hoped our next meeting would be under better circumstances." she says regretfully. "But I can feel my elemental spirits weakening each day as Maluminia grows stronger."`,
                                "I must ask that you sacrifice one of your elemental orbs of power to me so the very foundations of existence aren't torn asunder. I would not ask of this if not completely necessary.");
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1" style="text-align: center; width: 50%; height: 50px; margin-top: 20px;">Sacrifice <span style="color: #ba760f">fire</span> cards</button>
                        <button class="exclamation-button-2" style="text-align: center; width: 50%; height: 50px; margin-top: 20px;">Sacrifice <span style="color: #fafba5">lightning</span> cards</button>
                        <button class="exclamation-button-3" style="text-align: center; width: 50%; height: 50px;">Sacrifice <span style="color: #2f989c">ice</span> cards</button>
                        <button class="exclamation-button-4" style="text-align: center; width: 50%; height: 50px;">Sacrifice <span style="color: #86bfdf">air</span> cards</button>
                        <button class="exclamation-button-5" style="text-align: center; width: 50%; height: 50px;">Sacrifice <span style="color: #74ccf4">water</span> cards</button>
                        <button class="exclamation-button-6" style="text-align: center; width: 50%; height: 50px;">Sacrifice <span style="color: #8d624b">earth</span> cards</button>
                        <div id="mystery-card-display-container"></div>`;
                        function destroyCards(cardType, orb) {
                                for (let i = 0; i < cardType.length; i++) {
                                        if (drawPileArray.includes(cardType[i])) {
                                                let drawIndex = drawPileArray.indexOf(cardType[i]);
                                                let getCard = drawPileArray.splice(drawIndex, 1);
                                                destroyedCardsArray.push(getCard);
                                        }
                                        if (handArray.includes(cardType[i])) {
                                                let drawIndex = handArray.indexOf(cardType[i]);
                                                let getCard = handArray.splice(drawIndex, 1);
                                                destroyedCardsArray.push(getCard);
                                        }
                                        destroyedCardsContainer.appendChild(cardType[i]);
                                }
                                displayNone(document.querySelector(`#${orb}-orb-img`));
                        }
                        function createElementCards(elementCards) {
                                for (let i = 0; i < elementCards.length; i++) {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (!noDuplicates.includes(j)) {
                                                        if (elementCards[i].classList.contains(j) && !elementCards[i].classList.contains("upgraded")) {
                                                                createCard(j, document.getElementById("mystery-card-display-container"), "card-reference", "card-text", 0);
                                                                noDuplicates.push(j);
                                                        } else if (elementCards[i].classList.contains(j) && elementCards[i].classList.contains("upgraded")) {
                                                                createCard(j, document.getElementById("mystery-card-display-container"), "card-reference", "card-text", 1);
                                                                noDuplicates.push(j);
                                                        }
                                                }
                                        }
                                }
                        }
                        createElementCards(document.querySelectorAll(".fire"));
                        createElementCards(document.querySelectorAll(".lightning"));
                        createElementCards(document.querySelectorAll(".ice"));
                        createElementCards(document.querySelectorAll(".air"));
                        createElementCards(document.querySelectorAll(".water"));
                        createElementCards(document.querySelectorAll(".earth"));
                        let fireCards = document.querySelectorAll(".fire");
                        let lightningCards = document.querySelectorAll(".lightning");
                        let iceCards = document.querySelectorAll(".ice");
                        let airCards = document.querySelectorAll(".air");
                        let waterCards = document.querySelectorAll(".water");
                        let earthCards = document.querySelectorAll(".earth");
                        document.querySelector(".exclamation-button-1").addEventListener("mouseover", () => {
                                fireCards.forEach(i => {
                                        displayFlex(i);
                                });
                        });
                        document.querySelector(".exclamation-button-1").addEventListener("mouseout", () => {
                                fireCards.forEach(i => {
                                        displayNone(i);
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("mouseover", () => {
                                lightningCards.forEach(i => {
                                        displayFlex(i);
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("mouseout", () => {
                                lightningCards.forEach(i => {
                                        displayNone(i);
                                });
                        });
                        document.querySelector(".exclamation-button-3").addEventListener("mouseover", () => {
                                iceCards.forEach(i => {
                                        displayFlex(i);
                                });
                        });
                        document.querySelector(".exclamation-button-3").addEventListener("mouseout", () => {
                                iceCards.forEach(i => {
                                        displayNone(i);
                                });
                        });
                        document.querySelector(".exclamation-button-4").addEventListener("mouseover", () => {
                                airCards.forEach(i => {
                                        displayFlex(i);
                                });
                        });
                        document.querySelector(".exclamation-button-4").addEventListener("mouseout", () => {
                                airCards.forEach(i => {
                                        displayNone(i);
                                });
                        });
                        document.querySelector(".exclamation-button-5").addEventListener("mouseover", () => {
                                waterCards.forEach(i => {
                                        displayFlex(i);
                                });
                        });
                        document.querySelector(".exclamation-button-5").addEventListener("mouseout", () => {
                                waterCards.forEach(i => {
                                        displayNone(i);
                                });
                        });
                        document.querySelector(".exclamation-button-6").addEventListener("mouseover", () => {
                                earthCards.forEach(i => {
                                        displayFlex(i);
                                });
                        });
                        document.querySelector(".exclamation-button-6").addEventListener("mouseout", () => {
                                earthCards.forEach(i => {
                                        displayNone(i);
                                });
                        });
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                destroyCards(document.querySelectorAll(".fire"), "fire");
                                switchArea(map, exclamationContainer);
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                destroyCards(document.querySelectorAll(".lightning"), "lightning");
                                switchArea(map, exclamationContainer);
                        });
                        document.querySelector(".exclamation-button-3").addEventListener("click", () => {
                                destroyCards(document.querySelectorAll(".ice"), "ice");
                                switchArea(map, exclamationContainer);
                        });
                        document.querySelector(".exclamation-button-4").addEventListener("click", () => {
                                destroyCards(document.querySelectorAll(".air"), "air");
                                switchArea(map, exclamationContainer);
                        });
                        document.querySelector(".exclamation-button-5").addEventListener("click", () => {
                                destroyCards(document.querySelectorAll(".water"), "water");
                                switchArea(map, exclamationContainer);
                        });
                        document.querySelector(".exclamation-button-6").addEventListener("click", () => {
                                destroyCards(document.querySelectorAll(".earth"), "earth");
                                switchArea(map, exclamationContainer);
                        });
                        dontRepeatExclamation.push(1);
                        break;
                case 2:
                        createExclamation("The Wizard's Apprentice", "imgs/fae-forest-mystery.jpeg", "imgs/clone-wizard.jpeg", "You see a flustered wizard over the next thicket trying and failing to cast a spell.", 
                                `"Are you trying to burn down this entire forest?!" You demand indignantly.`,
                                `"No you damnable fool! I've been trying for days to clone this Terra forsaken thing!" he yells emphatically. "Say...do you think I could get a little bit of practice on one of those spells of yours?"`);
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1" style="margin-top: 20px;"><span style="color: lightgreen">Agree:</span> He doesn't look like he's taking no for an answer</button>`;
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                fxWizardCast.play();
                                function wizardCast() {
                                        const randomNumber = createRandomNumber(1, 2);
                                        if (randomNumber === 1) {
                                                fxSpellSuccess.play();
                                                document.querySelector(".exclamation-button-div").innerHTML = `
                                                <button class="exclamation-button-1" style="margin-top: 20px;"><span style="color: lightgreen">Success:</span> His spell clones the card you choose</button>`;
                                                document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                        let allCardsArray = drawPileArray.concat(handArray, discardPileArray);
                                                        exclamationContainer.innerHTML = `<div id="all-cards-list"></div>`;
                                                        const allCardsList = document.querySelector("#all-cards-list");
                                                        allCardsArray.forEach((i) => {
                                                                for (let j = 0; j < cardsInformation.length; j++) {
                                                                        if (i.classList.contains(j) && !i.classList.contains("upgraded")) {
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
                                                                });
                                                        });
                                                });
                                        } else {
                                                fxSpellFail.play();
                                                document.querySelector(".exclamation-button-div").innerHTML = `<button class="exclamation-button-1"><span style="color: rgb(206, 83, 83)">Failure:</span> The card you choose disappears</button>`;
                                                document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                        let allCardsArray = drawPileArray.concat(handArray, discardPileArray);
                                                        exclamationContainer.innerHTML = `<div id="all-cards-list"></div>`;
                                                        const allCardsList = document.querySelector("#all-cards-list");
                                                        allCardsArray.forEach((i) => {
                                                                for (let j = 0; j < cardsInformation.length; j++) {
                                                                        if (i.classList.contains(j) && !i.classList.contains("upgraded")) {
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
                                                                                                        }
                                                                                                });
                                                                                        }
                                                                                        removeCard(drawPileArray);
                                                                                        removeCard(handArray);
                                                                                }
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
                        createExclamation("Aerwyna's Assistance", "imgs/fae-forest-mystery.jpeg", "imgs/aerwyna.jpeg", "You pass by a river when you hear an alluring feminine voice echoing under the water. You need to keep moving forward, but you find yourself peering deep into the water to find the source of that enchanting voice. As you get closer you begin to feel a sudden sense of serenity wash over you.", 
                                `"I speak to you on behalf of Gaia and myself." her delicate voice envelops you reverberating throughout your mind. "We wish we could be of more help, but I'm afraid we're preoccupied. While she is busy holding our ecosystem together, I am tempering the seas."`,
                                `"We can at least offer you a choice of blessings. Choose wisely."`);
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1"><span style="color: #74ccf4">Aerwyna's Blessing:</span> Gain 8 regeneration next fight.</button>
                        <button class="exclamation-button-2"><span style="color: #81b14f">Gaia's Blessing:</span> Gain 10 thorns next fight.</button>`;
                        fxSanguineSpring.play();
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                aquatasBlessing = true;
                                fxWaterWall.play();
                                switchArea(map, exclamationContainer);
                        });    
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                gaiaBlessing = true;
                                fxGaiasEmbrace.play();
                                switchArea(map, exclamationContainer);
                        });
                        dontRepeatExclamation.push(3);
                        break;
                case 4:
                        createExclamation(`Celestial Intervention`, "imgs/fae-forest-mystery.jpeg", "imgs/fae-mystery-spirit.jpeg", "You've set up camp for the night. You stare into the warm kindling of the campfire, resting your head on the frigid ground. Just before dozing off, you see the stars form into the shape of a woman.", 
                                `"My power grows weaker each day now that the spirits of life and death left their rightful realms. I'm afraid it may be too late for me."`,
                                `"I can use the last of my power to infuse a spell with each of the six elemental Terran spirits power." She says weakly. "Use it in your fight to restore balance to this realm...for the sake of us all."`);
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1""><span style="color: rgb(123, 240, 238)">Attune with the stars:</span> Gain a celestially infused card</button>
                        <button class="exclamation-button-2"><span style="color: #81b14f">Stay Grounded:</span> Gain an Earth Spikes spell</button>
                        <button class="exclamation-button-3"><span style="color: rgb(206, 83, 83)">Refuse:</span> Leave the area</button>
                        <div id="mystery-card-display-container"></div>`;
                        createCard(64, document.getElementById("mystery-card-display-container"), "card-reference", "card-text", 0);
                        createCard(42, document.getElementById("mystery-card-display-container"), "card-reference", "card-text", 0);
                        document.querySelector(".exclamation-button-1").addEventListener("mouseover", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("64")) {
                                                displayFlex(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-1").addEventListener("mouseout", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("64")) {
                                                displayNone(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("mouseover", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("42")) {
                                                displayFlex(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("mouseout", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("42")) {
                                                displayNone(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                addCardToDeck(64, 0, true);
                                fxCelestialAttunement.play();
                                switchArea(map, exclamationContainer);
                        });    
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                addCardToDeck(42, 0, true);
                                fxWeaveOfThorns.play();
                                switchArea(map, exclamationContainer);
                        });
                        document.querySelector(".exclamation-button-3").addEventListener("click", () => {
                                switchArea(map, exclamationContainer);
                        });
                        dontRepeatExclamation.push(4);
                        break;
                case 5:
                        createExclamation(`Gaia's Embrace`, "imgs/fae-forest-mystery.jpeg", "imgs/gaia.jpeg", "You see Terra's earth spirit gleefully skipping through the forest. A sudden rush of dirt and cedar pines floods your nose.", 
                                `"So you're the one here to save all of Terra, huh?" she giggles. "Hmm...you don't really look like someone ready to save the world."`,
                                `"And your spell book looks <em>awfully</em> empty! Take my spell so you can at least give them a good fight. I'll tell the plants about your valiant effort!" the sound of her laughter slowly fades as she skips away.`);
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1" style="margin-top: 20px;"><span style="color: #81b14f">Let Gaia embrace you:</span> Gain a Gaia's Embrace spell</button>
                        <button class="exclamation-button-2"><span style="color: rgb(206, 83, 83)">Forsake Gaia:</span> Lose all of your earth cards</button>
                        <div id="mystery-card-display-container"></div>`;
                        createElementCards(document.querySelectorAll(".earth"));
                        document.querySelector(".exclamation-button-2").addEventListener("mouseover", () => {
                                document.querySelectorAll(".earth").forEach(i => {
                                        displayFlex(i);
                                });
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("47")) {
                                                displayNone(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("mouseout", () => {
                                document.querySelectorAll(".earth").forEach(i => {
                                        displayNone(i);
                                });
                        });
                        createCard(47, document.getElementById("mystery-card-display-container"), "card-reference", "card-text", 0);
                        document.querySelector(".exclamation-button-1").addEventListener("mouseover", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("47")) {
                                                displayFlex(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-1").addEventListener("mouseout", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("47")) {
                                                displayNone(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                addCardToDeck(47, 0, true);
                                fxGaiasEmbrace.play();
                                switchArea(map, exclamationContainer);
                        });    
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
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
                                switchArea(map, exclamationContainer);
                        });
                        dontRepeatExclamation.push(5);
                        break;
                case 6:
                        createExclamation("King Spookly", "imgs/hallowwood-mystery.jpeg", "imgs/king-spookly.jpeg", "You're feeling exhausted from the long walk through the forest. You go to sit down and rest when you notice a ghost sitting on a large pile of aether.", 
                                "He beckons you closer with his translucent appendage. You approach.",
                                `"I was once king in this land long ago." His soft whisper echos. "I had all the aether in my possession burried with me. I realize the arrogance of my actions and would like to make amends for my past. Please share this amongst the local townsfolk."`);
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1" style="height: 45%"><span style="color: rgb(206, 83, 83)">Take It All:</span> Gain 300 Aether and Avarice</button>
                        <button class="exclamation-button-2" style="height: 45%"><span style="color: lightgreen">Share It:</span> Your integrity causes you to gain 10 health and max health</button>
                        <div id="mystery-card-display-container"></div>`;
                        createCard(63, document.getElementById("mystery-card-display-container"), "card-reference", "card-text", 0);
                        document.querySelector(".exclamation-button-1").addEventListener("mouseover", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("63")) {
                                                displayFlex(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-1").addEventListener("mouseout", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("63")) {
                                                displayNone(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                addCardToDeck(63, 0, true);
                                playerAether.innerText = parseFloat(playerAether.innerText) + 300;
                                switchArea(map, exclamationContainer);
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 10;
                                playerHeal(10);
                                switchArea(map, exclamationContainer);
                        });
                        dontRepeatExclamation.push(6);
                        break;
                case 7:
                        createExclamation("Hallowwood Haunting", "imgs/hallowwood-mystery.jpeg", "imgs/haunted-house.jpeg", "You stumble upon a dark and gloomy house seemingly grown within a tree.", 
                                "You feel a strange sense of foreboding emanating from the house. You get the distinct feeling there's something inside that doesn't want you to enter.",
                                `There could be something of interest inside though...you ponder in the chilly night air what to do.`);
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1"><span style="color: lightgreen">Enter anyway:</span> You didn't specialize in wisdom!</button>
                        <button class="exclamation-button-2"><span style="color: rgb(206, 83, 83)">Run away as fast as possible:</span> Gain windwalk</button>
                        <div id="mystery-card-display-container"></div>`;
                        const fxGhostAudio = new Audio("audio/ghost-audio.wav");
                        fxGhostAudio.play();
                        createCard(31, document.getElementById("mystery-card-display-container"), "card-reference", "card-text", 0);
                        document.querySelector(".exclamation-button-2").addEventListener("mouseover", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("31")) {
                                                displayFlex(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("mouseout", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("31")) {
                                                displayNone(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                exclamationContainer.innerHTML = `
                                <div class="exclamation-div" style="background-image: url(imgs/hallowwood-mystery.jpeg)">
                                <div class="exclamation-information-container">
                                        <div style="width: 100%"><h1 class="exclamation-title">Hallowwood Haunting</h1></div>
                                        <div class="exclamation-event-img">
                                                <img src="imgs/haunting-ghost.jpeg">
                                        </div>
                                        <div class="exclamation-text-button-div">
                                                <div class="exclamation-text-div">
                                                <p class="exclamation-text">You slowly open the creaky door to find a haunting spirit with deep red eyes peering spitefully at you.<br><br></p>
                                                <div class="exclamation-button-div">
                                                        <button class="exclamation-button-1"><span style="color: lightblue">Freeze in fear:</span> Gain an empowered deep freeze</button>
                                                        <button class="exclamation-button-2"><span style="color: rgb(206, 83, 83)">Run away as fast as possible:</span> You come to your senses finally and run</button>
                                                        <div id="mystery-card-display-container"></div>
                                                </div>
                                                </div>
                                        </div>
                                        </div>
                                </div>`;
                                createCard(53, document.getElementById("mystery-card-display-container"), "card-reference", "card-text", 1);
                                document.querySelector(".exclamation-button-1").addEventListener("mouseover", () => {
                                        document.querySelectorAll(".card-reference").forEach(i => {
                                                if (i.classList.contains("53")) {
                                                        displayFlex(i);
                                                }
                                        });
                                });
                        document.querySelector(".exclamation-button-1").addEventListener("mouseout", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("53")) {
                                                displayNone(i);
                                        }
                                });
                        });
                                document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                        addCardToDeck(53, 1, true);
                                        fxGhostAudio.pause();
                                        switchArea(map, exclamationContainer);
                                });
                                document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                        fxGhostAudio.pause();
                                        switchArea(map, exclamationContainer);
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                addCardToDeck(31, 0, true);
                                fxGhostAudio.pause();
                                switchArea(map, exclamationContainer);
                        });
                        dontRepeatExclamation.push(7);
                        break;
                case 8:
                        createExclamation("Glacia's Posession", "imgs/hallowwood-mystery.jpeg", "imgs/glacia.jpeg", "The air grows increasingly frigid as you walk around Hallowwood lake. Ice spirit Glacia gracefully glides across, freezing it with each step. She has a hollow look to her face and her eyes glow faintly red.", 
                                `"Please help me!" she shouts. "I visited an old friend in town, but I felt an abhorrent revulsion deep within his soul. His essence coalesced inside of me and now I feel his presence within me, leeching the cold from my body."`,
                                `"Please! Do you have anything that can save me?"`);
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1" style="height: 35%"><span style="color: lightblue">Cleanse her:</span> Glacia gives you an empowered ice card of your choice</button>
                        <button class="exclamation-button-2" style="height: 35%"><span style="color: rgb(115, 215, 215)">Change your mind:</span> Gain an empowered winds of change card</button>
                        <button class="exclamation-button-3" style="height: 35%; color: rgb(206, 83, 83)">You never learned the healing spell</button>
                        <div id="mystery-card-display-container"></div>`;
                        createCard(30, document.getElementById("mystery-card-display-container"), "card-reference upgraded", "card-text upgrade-text", 1);
                        document.querySelector(".exclamation-button-2").addEventListener("mouseover", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("30")) {
                                                displayFlex(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("mouseout", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("30")) {
                                                displayNone(i);
                                        }
                                });
                        });
                        const allCurrentCards = document.querySelectorAll(".card");
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                for (let i = 0; i < allCurrentCards.length; i++) {
                                        if (allCurrentCards[i].classList.contains(37) && allCurrentCards[i].classList.contains("upgraded")) {
                                                fxSanguineSpring.play();
                                                exclamationContainer.innerHTML = `<div id="all-cards-list"></div>`;
                                                for (let j = 0; j < cardsInformation.length; j++) {
                                                        if (cardsInformation[j].element.includes("ice") && j !== 63) {
                                                                createCard(j, document.getElementById("all-cards-list"), "card-reference upgraded", "card-text upgraded-text", 1);
                                                        }
                                                }
                                                document.querySelectorAll(".card-reference").forEach((i) => {
                                                        displayFlex(i);
                                                        i.addEventListener("click", () => {
                                                                for (let j = 0; j < cardsInformation.length; j++) {
                                                                        if (i.classList.contains(j)) {
                                                                                addCardToDeck(j, 1, true);
                                                                                switchArea(map, exclamationContainer);
                                                                        }
                                                                }
                                                                for (let k = 0; k < cardReference.length; k++) {
                                                                        destroyedCardsArray.push(cardReference[k]);
                                                                        destroyedCardsContainer.appendChild(cardReference[k]);
                                                                }
                                                                destroyedCardsArray = [];
                                                                destroyedCardsContainer.innerHTML = ``;
                                                        });
                                                });
                                        }
                                }
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                for (let i = 0; i < allCurrentCards.length; i++) {
                                        if (allCurrentCards[i].classList.contains(37) && allCurrentCards[i].classList.contains("upgraded")) {
                                                fxWindsOfChange.play();
                                                addCardToDeck(30, 1, true);
                                                switchArea(map, exclamationContainer);
                                        }
                                }
                        });
                        document.querySelector(".exclamation-button-3").addEventListener("click", () => {
                                switchArea(map, exclamationContainer);
                        });
                        dontRepeatExclamation.push(8);
                        break;
                case 9:
                        createExclamation("A Tavern Bounty", "imgs/tavern.jpeg", "imgs/bounty-hunter.jpeg", "You enter the local tavern looking for a hot beverage to quench your thirst after the last fight. Just as soon as you take a seat, a skeletal disheveled man pulls up a chair at your table.", 
                                `"I've had my eye on you for some time." the gaunt man says. "You seem capable enough of what I need. You see, I'm a bounty hunter of sorts. Lots of business in these parts. My next bounty is slightly... more challenging than I'm used to."`,
                                `"I could use someone of your talents. What do you say?"`);
                        document.querySelector(".exclamation-button-div").innerHTML = `
                                <button class="exclamation-button-1" style="height: 35%"> <span style="color: rgb(206, 83, 83)">Slay the Werewolf:</span> Gain 150 aether and lose 20 health</button>
                                <button class="exclamation-button-2" style="height: 35%"> <span style="color: rgb(206, 83, 83)">Slay the Vampire:</span> Empower all of your blood siphon cards and lose 25 health</button>
                                <button class="exclamation-button-3" style="height: 35%"> <span style="color: lightgreen">You don't trust the man:</span> Grab your drink and head for the door</button>
                                <div id="mystery-card-display-container"></div>`;
                        document.querySelectorAll(".card").forEach(i => {
                                for (let j = 0; j < cardsInformation.length; j++) {
                                        if (i.classList.contains(j) && "blood" in cardsInformation[j] && cardsInformation[j].blood[0] !== 0) {
                                                createCard(j, document.getElementById("mystery-card-display-container"), "card-reference", "card-text", 1);
                                        }
                                }
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("mouseover", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                                displayFlex(i);
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("mouseout", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                                displayNone(i);
                                });
                        });
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                slainWerewolf = true;
                                playerAether.innerText = parseFloat(playerAether.innerText) + 150;
                                playerCurrentHealth.innerText -= 20;
                                topBarHealthNumber.innerText -= 20;
                                checkHealth();
                                switchArea(map, exclamationContainer);
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                slainVampire = true;
                                playerCurrentHealth.innerText -= 25;
                                topBarHealthNumber.innerText -= 25;
                                checkHealth();
                                fxBloodCocoon.play();
                                document.querySelectorAll(".card").forEach((i) => {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (i.classList.contains(j) && "blood" in cardsInformation[j] && cardsInformation[j].blood[0] !== 0) {
                                                        if (drawPileArray.includes(i)) {
                                                                destroyedCardsArray.push(drawPileArray.splice(drawPileArray.indexOf(i), 1));
                                                                destroyedCardsContainer.appendChild(i);
                                                                addCardToDeck(j, 1, true);
                                                        }
                                                        if (handArray.includes(i)) {
                                                                destroyedCardsArray.push(handArray.splice(handArray.indexOf(i), 1));
                                                                destroyedCardsContainer.appendChild(i);
                                                                addCardToDeck(j, 1, true);
                                                        }
                                                }
                                        }
                                });
                                destroyedCardsArray = [];
                                destroyedCardsContainer.innerHTML = ``;
                                switchArea(map, exclamationContainer);
                        });
                        document.querySelector(".exclamation-button-3").addEventListener("click", () => {
                                switchArea(map, exclamationContainer);
                                function hunter() {
                                        switchArea(exclamationContainer, map);
                                        exclamationContainer.innerHTML = `
                                        <div class="exclamation-div" style="background-image: url(imgs/tavern.jpeg)">
                                                <div class="exclamation-information-container">
                                                        <div style="width: 100%"><h1 class="exclamation-title">An Angry Bounter Hunter</h1></div>
                                                        <div class="exclamation-event-img"><img src="imgs/bounty-hunter.jpeg"></div>
                                                        <div class="exclamation-text-button-div">
                                                                <div class="exclamation-text-div">
                                                                        <p class="exclamation-text">"Now wait just a minute!" You feel yourself lurch backward as a hand grabs you from behind.<br><br>
                                                                        "Nobody denies an offer from me!" he angrily slams his fist on the counter.<br><br>
                                                                        "Now you'll pay up 50 aether for wasting my time or you'll be my next bounty."</p>
                                                                </div>
                                                                <div class="exclamation-button-div">
                                                                        <button class="exclamation-button-1"><span style="color: pink">Cower in fear:</span> Pay the man 50 aether</button>
                                                                        <button class="exclamation-button-2"><span style="color: rgb(206, 83, 83)">Start a tavern brawl:</span> Lose 10 health</button>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>`;
                                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                playerAether.innerText -= 50;
                                                switchArea(map, exclamationContainer);
                                        });
                                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                                playerCurrentHealth.innerText -= 10;
                                                topBarHealthNumber.innerText -= 10;
                                                switchArea(map, exclamationContainer);
                                        });
                                }
                                setTimeout(hunter, 700);
                        });
                        dontRepeatExclamation.push(9);
                        break;
                case 10:
                        createExclamation("Tempia's Reverie", "imgs/hallowwood-mystery.jpeg", "imgs/tempia.jpeg", "As you're walking through the forest you feel the air suddenly shift. You look up towards the sky to see the shape of a dragon form from the winds. You stare in awe.", 
                                `"What, were you expecting me to be in human form like the other spirits?" his words gently touch your ears as if floating on a breeze. "Know that I go where the winds take me and I don't change for anyone human."`,
                                `"I've come to you because I can be of no assistance in this matter. My sibling Glacia, spirit of ice, seems to have been possesed by a vengeful spirit herself. I can give you a cleansing spell that will heal her or give you a sliver of my power. I will honor either decision."`);
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1" style="height: 45%"><span style="color: lightblue">Agree to heal Glacia:</span> Gain a sanguine spring spell</button>
                        <button class="exclamation-button-2" style="height: 45%"><span style="color: rgb(115, 215, 215)">Fuse with Tempia:</span> Gain a Tempia's fury spell</button>
                        <div id="mystery-card-display-container"></div>`;
                        createCard(37, document.getElementById("mystery-card-display-container"), "card-reference", "card-text", 0);
                        createCard(34, document.getElementById("mystery-card-display-container"), "card-reference", "card-text", 0);
                        document.querySelector(".exclamation-button-1").addEventListener("mouseover", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("37")) {
                                                displayFlex(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-1").addEventListener("mouseout", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("37")) {
                                                displayNone(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("mouseover", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("34")) {
                                                displayFlex(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("mouseout", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("34")) {
                                                displayNone(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                addCardToDeck(37, 1, true);
                                fxSanguineSpring.play();
                                switchArea(map, exclamationContainer);
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                addCardToDeck(34, 0, true);
                                fxTempiasFury.play();
                                switchArea(map, exclamationContainer);
                        });
                        dontRepeatExclamation.push(10);
                        break;
                case 11:
                        createExclamation("Ember's Vexation", "imgs/heaven-mystery.jpeg", "imgs/ember.jpeg", "You feel yourself get more and more dehydrated as you continue on your journey. Unfortunately you ran out of water a while ago. The heat is becoming unbearable and you feel like you're going to faint. You see a woman in the distance and approach her to ask for some water.", 
                                `"Can you believe Lectra thinks she's stronger than I am?!" the fiery woman yells furiously. "She has none of the passion or desire for true power and that makes her weak. Pitiful thing doesn't even realize that lightning could never stand against fire in a battle."`,
                                `"<em>Surely</em> you know that I am more powerful than my sister, yes?!"`);
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1" style="height: 45%"><span style="color: #ba760f">Agree that Ember is stronger:</span> Empower a fire card</button>
                        <button class="exclamation-button-2" style="height: 45%"><span style="color: #f0fb3e">Disagree; Lectra is stronger:</span> She seems well adjusted. You'll be fine probably.</button>`
                        const allCards = document.querySelectorAll(".card");
                        function coolOff() {
                                if (document.querySelectorAll(".water").length > 0) {
                                        exclamationContainer.innerHTML = `<div id="all-cards-list"></div>`;
                                        allCards.forEach(i => {
                                                for (let j = 0; j < cardsInformation.length; j++) {
                                                        if (i.classList.contains(j) && cardsInformation[j].element.includes("water")) {
                                                                if (i.classList.contains("upgraded")) {
                                                                        createCard(j, document.getElementById("all-cards-list"), "card-reference", "card-text", 1);
                                                                } else {
                                                                        createCard(j, document.getElementById("all-cards-list"), "card-reference", "card-text", 0);
                                                                }
                                                        }
                                                }
                                        });
                                        document.querySelectorAll(".card-reference").forEach((i) => {
                                                displayFlex(i);
                                                i.addEventListener("click", () => {
                                                        if (i.classList.contains(36) || i.classList.contains(37) || i.classList.contains(38) || i.classList.contains(39) || i.classList.contains(41) || i.classList.contains(60) || i.classList.contains(60)) {
                                                                fxTsunami.play();
                                                                exclamationContainer.innerHTML = `
                                                                <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                                                                        <div class="exclamation-information-container">
                                                                                <div style="width: 100%"><h1 class="exclamation-title">Ember's Cooled Off</h1></div>
                                                                                <div class="exclamation-event-img"><img src="imgs/ember-after.jpeg"></div>
                                                                                <div class="exclamation-text-button-div">
                                                                                        <div class="exclamation-text-div">
                                                                                                <p class="exclamation-text">Her eyes suddenly lose their intensity and her stern face is replaced by a soft angelic glow.<br><br>
                                                                                                "Sorry I can get a little heated sometimes when it comes to my sister...we share a long history."<br><br>
                                                                                                "Good luck on your journey mortal...our fate depends on it."</p>
                                                                                        </div>
                                                                                        <div class="exclamation-button-div">
                                                                                                <button class="exclamation-button-1"><span style="color: #74ccf4">You've cooled her off:</span> Empower a water card</button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>`;
                                                                document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                                        exclamationContainer.innerHTML = `<div id="all-cards-list"></div>`;
                                                                        allCards.forEach(i => {
                                                                                for (let j = 0; j < cardsInformation.length; j++) {
                                                                                        if (i.classList.contains(j) && cardsInformation[j].element.includes("water") && !i.classList.contains("upgraded")) {
                                                                                                createCard(j, document.getElementById("all-cards-list"), "card-reference upgraded", "card-text upgraded-text", 1);
                                                                                        }
                                                                                }
                                                                        });
                                                                        document.querySelectorAll(".card-reference").forEach(i => {
                                                                                displayFlex(i);
                                                                                i.addEventListener("click", () => {
                                                                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                                                                if (i.classList.contains(j)) {
                                                                                                        addCardToDeck(j, 1, true);
                                                                                                        switchArea(map, exclamationContainer);
                                                                                                }
                                                                                        }
                                                                                });
                                                                        });
                                                                });
                                                        } else {
                                                                exclamationContainer.innerHTML = `
                                                                <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                                                                        <div class="exclamation-information-container">
                                                                                <div style="width: 100%"><h1 class="exclamation-title">Ember's Wrath</h1></div>
                                                                                <div class="exclamation-event-img"><img src="imgs/ember-angry.jpeg"></div>
                                                                                <div class="exclamation-text-button-div">
                                                                                        <div class="exclamation-text-div">
                                                                                                <p class="exclamation-text">"NOW YOU'RE TRYING TO KILL ME?!"<br><br>
                                                                                                "I'M IMMORTAL! NOT THAT YOU COULD TAKE ME IN A FIGHT ANYWAY!"<br><br>
                                                                                                "GO BEG AT LECTRA'S FEET YOU CRAVEN BLIND IMBECILE"</p>
                                                                                        </div>
                                                                                        <div class="exclamation-button-div">
                                                                                                <button class="exclamation-button-1"><span style="color: pink">Get burned:</span> You burn for 10 next fight</button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>`;
                                                                document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                                        playerEmberNumber = 10;
                                                                        fxCascadingFlames.play();
                                                                        displayBlock(playerBurnDiv, playerBurnImg, playerBurnNumber);
                                                                        switchArea(map, exclamationContainer);
                                                                });
                                                        }
                                                });
                                        });
                                } else {
                                        switchArea(map, exclamationContainer);
                                }
                        }
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                let fireCards = 0;
                                let lightningCards = 0;
                                for (let i = 0; i < allCards.length; i++) {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (allCards[i].classList.contains(j) && cardsInformation[j].element.includes("fire")) {
                                                        fireCards++;
                                                }
                                                if (allCards[i].classList.contains(j) && cardsInformation[j].element.includes("lightning")) {
                                                        lightningCards++;
                                                }
                                        }
                                }
                                if (fireCards > lightningCards) {
                                        exclamationContainer.innerHTML = `
                                        <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                                                <div class="exclamation-information-container">
                                                        <div style="width: 100%"><h1 class="exclamation-title">Ember's Satisfaction</h1></div>
                                                        <div class="exclamation-event-img"><img src="imgs/ember-after.jpeg"></div>
                                                        <div class="exclamation-text-button-div">
                                                                <div class="exclamation-text-div">
                                                                        <p class="exclamation-text">Her eyes suddenly lose their intensity and her stern face is replaced by a soft angelic glow<br><br>
                                                                        "I can see you're telling the truth since you're using more of my spells than hers"<br><br>
                                                                        "Let's make sure that doesn't change..." You slowly step away hoping she stays this congenial</p>
                                                                </div>
                                                                <div class="exclamation-button-div">
                                                                        <button class="exclamation-button-1"><span style="color: #ba760f">Be thankful you survived:</span> Empower a fire card</button>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>`;
                                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                exclamationContainer.innerHTML = `<div id="all-cards-list"></div>`;
                                                allCards.forEach(i => {
                                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                                if (i.classList.contains(j) && cardsInformation[j].element.includes("fire") && !i.classList.contains("upgraded")) {
                                                                        createCard(j, document.getElementById("all-cards-list"), "card-reference upgraded", "card-text upgraded-text", 1);
                                                                }
                                                        }
                                                });
                                                document.querySelectorAll(".card-reference").forEach(i => {
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
                                                                                                }
                                                                                        });
                                                                                }
                                                                                removeCard(drawPileArray);
                                                                                removeCard(handArray);
                                                                                destroyedCardsArray = [];
                                                                                destroyedCardsContainer.innerHTML = ``;
                                                                                addCardToDeck(j, 1, true);
                                                                        }
                                                                }
                                                        });
                                                });
                                        });
                                } else {
                                        fxFirefall.play();
                                        exclamationContainer.innerHTML = `
                                        <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                                                <div class="exclamation-information-container">
                                                        <div style="width: 100%"><h1 class="exclamation-title">Ember's Wrath</h1></div>
                                                        <div class="exclamation-event-img"><img src="imgs/ember-angry.jpeg"></div>
                                                        <div class="exclamation-text-button-div">
                                                                <div class="exclamation-text-div">
                                                                        <p class="exclamation-text">She somehow manages to become even more infuriated.<br><br>
                                                                        "YOU DARE LIE TO THE SPIRIT OF FIRE!" she furiously bellows. "I SHOULD SMITE YOU WEAR YOU STAND!"<br><br>
                                                                        "NOT EVEN TERRA HERSELF COULD SAVE YOU FROM MY WRATH!!!" You look for any way you could possibly calm her.</p>
                                                                </div>
                                                                <div class="exclamation-button-div">
                                                                        <button class="exclamation-button-1"><span style="color: #74ccf4">Douse her with water:</span> Use a water card to extinguish her flames</button>
                                                                        <button class="exclamation-button-2"><span style="color: #ba760f">Get burned:</span> You burn for 7 next fight</button>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>`;
                                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                coolOff();
                                        });
                                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                                playerEmberNumber = 7;
                                                fxKindredSpirits.play();
                                                displayBlock(playerBurnDiv, playerBurnImg, playerBurnNumber);
                                                switchArea(map, exclamationContainer);
                                        });
                                }
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                exclamationContainer.innerHTML = `
                                <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                                        <div class="exclamation-information-container">
                                                <div style="width: 100%"><h1 class="exclamation-title">Ember's Wrath</h1></div>
                                                <div class="exclamation-event-img"><img src="imgs/ember-angry.jpeg"></div>
                                                <div class="exclamation-text-button-div">
                                                        <div class="exclamation-text-div">
                                                                <p class="exclamation-text">She somehow manages to become even more infuriated.<br><br>
                                                                "YOU KNOW NOTHING OF POWER YOU MISCREANT WORTHLESS MORTAL!" she furiously bellows. "I WILL SMITE YOU WEAR YOU STAND!"<br><br>
                                                                "NOT EVEN TERRA HERSELF COULD SAVE YOU FROM MY WRATH!!!" You look for any way you could possibly calm her.</p>
                                                        </div>
                                                        <div class="exclamation-button-div">
                                                                <button class="exclamation-button-1"><span style="color: #74ccf4">Douse her with water:</span> Use a water card to extinguish her flames</button>
                                                                <button class="exclamation-button-2"><span style="color: #ba760f">Get burned:</span> You burn for 7 next fight</button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>`;
                                document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                        coolOff();
                                });
                                document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                        playerEmberNumber = 7;
                                        fxKindredSpirits.play();
                                        displayBlock(playerBurnDiv, playerBurnImg, playerBurnNumber);
                                        switchArea(map, exclamationContainer);
                                });
                        });
                        dontRepeatExclamation.push(11);
                        break;
                case 12:
                        if (emberBurned) {
                                createExclamation("Lectra", "imgs/heaven-mystery.jpeg", "imgs/lectra.jpeg", "You look across the next floating island contemplating how to reach it when you start to feel your hair slowly stand on end.", 
                                        `"I see by those burn marks you've already met my sister...I'm sorry about her. She's got a fiery temper about her. She blames me for our father's death and has never forgiven me."`,
                                        `"Even though it wasn't my fault, I want to restore peace to this land and stop Maluminia. Please, take my boon. You'll need it."`);
                        } else {
                                createExclamation("Lectra", "imgs/heaven-mystery.jpeg", "imgs/lectra.jpeg", "You look across the next floating island contemplating how to reach it when you start to feel your hair slowly stand on end.", 
                                        `"I see by your empowered spell there that you've already met my sister. I hope she didn't give you too much trouble...she's got a fiery temper about her. She blames me for our father's death and has never forgiven me."`,
                                        `"Even though it wasn't my fault, I want to restore peace to this land and stop Maluminia. Please, take my boon. You'll need it."`);
                        }
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1" style="height: 45%"><span style="color: #f0fb3e">Accept Lectra's Boon:</span> Empower a lightning card</button>
                        <button class="exclamation-button-2" style="height: 45%"><span style="color: #ba760f">Ember is still better sorry:</span> Gain essence of ember</button>
                        <div id="mystery-card-display-container"></div>`;
                        createCard(17, document.getElementById("mystery-card-display-container"), "card-reference", "card-text", 0);
                        document.querySelector(".exclamation-button-2").addEventListener("mouseover", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("17")) {
                                                displayFlex(i);
                                        }
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("mouseout", () => {
                                document.querySelectorAll(".card-reference").forEach(i => {
                                        if (i.classList.contains("17")) {
                                                displayNone(i);
                                        }
                                });
                        });
                        if (document.querySelectorAll(".lightning").length > 0) {
                                document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                        fxThunderCrash.play();
                                        exclamationContainer.innerHTML = `<div id="all-cards-list"></div>`;
                                        document.querySelectorAll(".card").forEach((i) => {
                                                for (let j = 0; j < cardsInformation.length; j++) {
                                                        if (i.classList.contains(j) && !i.classList.contains("upgraded") && cardsInformation[j].element.includes("lightning")) {
                                                                createCard(j, document.getElementById("all-cards-list"), "card-reference upgraded", "card-text upgraded-text", 1);
                                                        }
                                                }
                                        });
                                        document.querySelectorAll(".card-reference").forEach((i) => {
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
                                                                                        }
                                                                                });
                                                                        }
                                                                        removeCard(drawPileArray);
                                                                        removeCard(handArray);
                                                                        destroyedCardsArray = [];
                                                                        destroyedCardsContainer.innerHTML = ``;
                                                                        addCardToDeck(j, 1, true);
                                                                        for (let k = 0; k < cardReference.length; k++) {
                                                                                destroyedCardsArray.push(cardReference[k]);
                                                                                destroyedCardsContainer.appendChild(cardReference[k]);
                                                                        }
                                                                        destroyedCardsArray = [];
                                                                        destroyedCardsContainer.innerHTML = ``;
                                                                }
                                                        }
                                                });
                                        });
                                });
                        }
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                addCardToDeck(17, 0, true);
                                fxPotion.play();
                                switchArea(map, exclamationContainer);
                        });
                        dontRepeatExclamation.push(12);
                        break;
                case 13:
                        createExclamation("Glowing Crystal", "imgs/heaven-mystery.jpeg", "imgs/magical-relic.jpeg", `You've been leaping from island to island all day and feel like the sun should have gone down by now. "I wonder if the sun ever goes down here..." You think to yourself.`, 
                                `As you lie down to rest for the "night" you see one of the islands to the right has what looks to be a glowing crystal infused with aether. It's a much further distance than the other islands though and you're not sure you can reach it.`,
                                `"Maybe one of my spells can help get me across..."`);
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1"><span style="color: lightgreen">Use spell:</span> Try a spell to reach the island</button>
                        <button class="exclamation-button-2"><span style="color: pink">Rest:</span> Heal 10 health. You're not sure you have a spell for that</button>`
                        function empowerCard() {
                                exclamationContainer.innerHTML = `<div id="all-cards-list"></div>`;
                                document.querySelectorAll(".card").forEach((i) => {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (i.classList.contains(j) && !i.classList.contains("upgraded")) {
                                                        createCard(j, document.getElementById("all-cards-list"), "card-reference upgraded", "card-text upgraded-text", 1);
                                                }
                                        }
                                });
                                document.querySelectorAll(".card-reference").forEach((i) => {
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
                                                                        console.log(k);
                                                                    }
                                                                });
                                                            }
                                                            removeCard(drawPileArray);
                                                            removeCard(handArray);
                                                            addCardToDeck(j, 1, true);
                                                        }
                                                }
                                                for (let k = 0; k < document.querySelectorAll(".card-reference").length; k++) {
                                                        destroyedCardsArray.push(document.querySelectorAll(".card-reference")[k]);
                                                        destroyedCardsContainer.appendChild(document.querySelectorAll(".card-reference")[k]);
                                                }
                                                destroyedCardsArray = [];
                                                destroyedCardsContainer.innerHTML = ``;
                                        });
                                });
                        }
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                exclamationContainer.innerHTML = `<div id="all-cards-list"></div>`;
                                document.querySelectorAll(".card").forEach(i => {
                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                if (i.classList.contains(j)) {
                                                        if (i.classList.contains("upgraded")) {
                                                                createCard(j, document.getElementById("all-cards-list"), "card-reference", "card-text", 1);
                                                        } else {
                                                                createCard(j, document.getElementById("all-cards-list"), "card-reference", "card-text", 0);
                                                        }
                                                }
                                        }
                                });
                                document.querySelectorAll(".card-reference").forEach((i) => {
                                        displayFlex(i);
                                        i.addEventListener("click", () => {
                                                if (i.classList.contains(25) || i.classList.contains(26) || i.classList.contains(28) || i.classList.contains(57) || i.classList.contains(59)) {
                                                        fxSnowNova.play();
                                                        exclamationContainer.innerHTML = `
                                                        <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                                                                <div class="exclamation-information-container">
                                                                        <div style="width: 100%"><h1 class="exclamation-title">Ice Pathway</h1></div>
                                                                        <div class="exclamation-event-img"><img src="imgs/magical-relic.jpeg"></div>
                                                                        <div class="exclamation-text-button-div">
                                                                                <div class="exclamation-text-div">
                                                                                        <p class="exclamation-text">You launch an ice spell toward the island.<br><br>
                                                                                        The air freezes around you creating a path of ice surrounding your feet. You think this gives you just enough extra space to make the leap.<br><br>
                                                                                        You jump from the ice platform and safely land on the island with the glowing crystal. The aether from the crystal begins to drain and infuse itself onto one of your spells.</p>
                                                                                </div>
                                                                                <div class="exclamation-button-div">
                                                                                        <button class="exclamation-button-1"><span style="color: rgb(190, 105, 209">Gain aether infusion:</span> Empower a card</button>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>`;
                                                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                                empowerCard();
                                                        });
                                                } else if (i.classList.contains(30) || i.classList.contains(31) || i.classList.contains(32) || i.classList.contains(33)) {
                                                        fxConvergingCurrent.play();
                                                        exclamationContainer.innerHTML = `
                                                        <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                                                                <div class="exclamation-information-container">
                                                                        <div style="width: 100%"><h1 class="exclamation-title">Air Pull</h1></div>
                                                                        <div class="exclamation-event-img"><img src="imgs/magical-relic.jpeg"></div>
                                                                        <div class="exclamation-text-button-div">
                                                                                <div class="exclamation-text-div">
                                                                                        <p class="exclamation-text">You launch an air spell toward the island.<br><br>
                                                                                        A gust of wind surrounds the bottom of the crystal uprooting it. You shift the winds toward you and pull the crystal to your island until it lands in front of you.<br><br>
                                                                                        The aether from the crystal begins to drain and infuse itself onto one of your spells.</p>
                                                                                </div>
                                                                                <div class="exclamation-button-div">
                                                                                        <button class="exclamation-button-1"><span style="color: rgb(190, 105, 209">Gain aether infusion:</span> Empower a card</button>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>`;
                                                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                                empowerCard();
                                                        });
                                                } else if (i.classList.contains(46)) {
                                                        fxVineWhip.play();
                                                        exclamationContainer.innerHTML = `
                                                        <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                                                                <div class="exclamation-information-container">
                                                                        <div style="width: 100%"><h1 class="exclamation-title">Vine Pull</h1></div>
                                                                        <div class="exclamation-event-img"><img src="imgs/magical-relic.jpeg"></div>
                                                                        <div class="exclamation-text-button-div">
                                                                                <div class="exclamation-text-div">
                                                                                        <p class="exclamation-text">You launch your vine whip toward the island.<br><br>
                                                                                        The whip wraps around the crystal and uproots it. You pull the crystal to your island until it lands in front of you.<br><br>
                                                                                        The aether from the crystal begins to drain and infuse itself onto one of your spells.</p>
                                                                                </div>
                                                                                <div class="exclamation-button-div">
                                                                                        <button class="exclamation-button-1"><span style="color: rgb(190, 105, 209">Gain aether infusion:</span> Empower a card</button>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>`;
                                                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                                empowerCard();
                                                        });
                                                } else if (i.classList.contains(52)) {
                                                        fxMagmaBlast.play();
                                                        exclamationContainer.innerHTML = `
                                                        <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                                                                <div class="exclamation-information-container">
                                                                        <div style="width: 100%"><h1 class="exclamation-title">Magma Shot</h1></div>
                                                                        <div class="exclamation-event-img"><img src="imgs/magical-relic.jpeg"></div>
                                                                        <div class="exclamation-text-button-div">
                                                                                <div class="exclamation-text-div">
                                                                                        <p class="exclamation-text">You launch your magma blast toward the island.<br><br>
                                                                                        Land begins to form in front of you in a direct path toward the crystal. You carefully step across until you safely reach the other island.<br><br>
                                                                                        The aether from the crystal begins to drain and infuse itself onto one of your spells.</p>
                                                                                </div>
                                                                                <div class="exclamation-button-div">
                                                                                        <button class="exclamation-button-1"><span style="color: rgb(190, 105, 209">Gain aether infusion:</span> Empower a card</button>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>`;
                                                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                                empowerCard();
                                                        });
                                                } else if (i.classList.contains(60)) {
                                                        fxAirBubbles.play();
                                                        exclamationContainer.innerHTML = `
                                                        <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                                                                <div class="exclamation-information-container">
                                                                        <div style="width: 100%"><h1 class="exclamation-title">Air Bubble</h1></div>
                                                                        <div class="exclamation-event-img"><img src="imgs/magical-relic.jpeg"></div>
                                                                        <div class="exclamation-text-button-div">
                                                                                <div class="exclamation-text-div">
                                                                                        <p class="exclamation-text">You create a giant air bubble in front of you.<br><br>
                                                                                        You slowly step into the air bubble and gently push yourself toward the island. Just before reaching the island you look down and begin to panic. You can only see the incredibly long drop to the ground from here. The bubble pops.<br><br>
                                                                                        You grab onto the ledge just before falling and pull yourself up. The aether from the crystal begins to drain and infuse itself onto one of your spells.</p>
                                                                                </div>
                                                                                <div class="exclamation-button-div">
                                                                                        <button class="exclamation-button-1"><span style="color: rgb(190, 105, 209">Gain aether infusion:</span> Empower a card</button>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>`;
                                                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                                empowerCard();
                                                        });
                                                } else {
                                                        fxSpellFail.play();
                                                        exclamationContainer.innerHTML = `
                                                        <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                                                                <div class="exclamation-information-container">
                                                                        <div style="width: 100%"><h1 class="exclamation-title">Failure</h1></div>
                                                                        <div class="exclamation-event-img"><img src="imgs/magical-relic.jpeg"></div>
                                                                        <div class="exclamation-text-button-div">
                                                                                <div class="exclamation-text-div">
                                                                                        <p class="exclamation-text">You cast your spell.<br><br>
                                                                                        Though the spell was successfully cast, it failed to create a way over to the island. "What a waste of mana..." you think to yourself.<br><br>
                                                                                        You lie your head down and try to get some rest thinking about what that crystal could have been.</p>
                                                                                </div>
                                                                                <div class="exclamation-button-div">
                                                                                        <button class="exclamation-button-1"><span style="color: lightgreen">Take a rest:</span> Recover 5 health</button>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>`;
                                                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                                playerHeal(5);
                                                                switchArea(map, exclamationContainer);
                                                        });
                                                }
                                        });
                                });
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                playerHeal(10);
                        });
                        dontRepeatExclamation.push(13);
                        break;
                case 14:
                        createExclamation("A Worthy Hero", "imgs/heaven-mystery.jpeg", "imgs/god-statue.jpeg", "As you journey closer to your fate, you notice a beam of light glowing in the distance. Your curiousity gets the best of you as you charter a course toward it.", 
                                `After a few hours, you finally reach the light. It's shining upon a heroic statue with large angelic wings. "Greetings hero." You jump as you realize the statue just spoke to you.`,
                                `"I've seen your journey thus far" his gravelly voice booms. "and yet I cannot see what is in your heart. Tell me hero, what is the best way to dispatch a foe?"`);
                        document.querySelector(".exclamation-button-div").innerHTML = `
                        <button class="exclamation-button-1" style="height: 30%">Ensuring you always have an answer to whatever they throw at you</button>
                        <button class="exclamation-button-2" style="height: 30%">Finding their weakness and expoiting it</button>
                        <button class="exclamation-button-3" style="height: 30%">Overpowering them through brute force</button>`
                        let [firePoints, lightningPoints, icePoints, airPoints, waterPoints, earthPoints] = [0, 0, 0, 0, 0, 0];
                        let elementChoice;
                        function getUpgrade() {
                                function upgradeCard(element) {
                                        let elementUpgradedTotal = [];
                                        let randomCardArray = [];
                                        document.querySelectorAll(".card").forEach(i => {
                                                for (let j = 0; j < cardsInformation.length; j++) {
                                                        if (i.classList.contains(j) && !i.classList.contains("upgraded") && (cardsInformation[j].element.includes(`${element}`) || element === "none")) {
                                                                randomCardArray.push(j);
                                                        } else if (i.classList.contains(j) && i.classList.contains("upgraded") && (cardsInformation[j].element.includes(`${element}`) || element === "none")) {
                                                                elementUpgradedTotal.push(true);
                                                        }
                                                }
                                        });
                                        let randomCardUpgrade;
                                        if (element === "none") {
                                                randomCardUpgrade = createRandomNumber(0, document.querySelectorAll(`.card`).length - elementUpgradedTotal.length - 1);
                                        } else {
                                                randomCardUpgrade = createRandomNumber(0, document.querySelectorAll(`.${element}`).length - elementUpgradedTotal.length - 1);
                                        }
                                        function removeCard(pile) {
                                                pile.forEach((k) => {
                                                        if (k.classList.contains(randomCardArray[randomCardUpgrade])) {
                                                                let spliceCard = pile.splice(pile.indexOf(k), 1).pop();
                                                                destroyedCardsArray.push(spliceCard);
                                                                destroyedCardsContainer.appendChild(spliceCard);
                                                        }
                                                });
                                        }
                                        removeCard(drawPileArray);
                                        removeCard(handArray);
                                        addCardToDeck(randomCardArray[randomCardUpgrade], 1, false);
                                        destroyedCardsArray = [];
                                        destroyedCardsContainer.innerHTML = ``;
                                }
                                if (firePoints > lightningPoints && firePoints > icePoints && firePoints > airPoints && firePoints > waterPoints && firePoints > earthPoints) {
                                        elementChoice = "fire";
                                        fxFireball.play();
                                        upgradeCard(elementChoice);
                                } else if (lightningPoints > firePoints && lightningPoints > icePoints && lightningPoints > airPoints && lightningPoints > waterPoints && lightningPoints > earthPoints) {
                                        elementChoice = "lightning";
                                        fxLectrasTouch.play();
                                        upgradeCard(elementChoice);
                                } else if (icePoints > firePoints && icePoints > lightningPoints && icePoints > airPoints && icePoints > waterPoints && icePoints > earthPoints) {
                                        elementChoice = "ice";
                                        fxGlaciasSoul.play();
                                        upgradeCard(elementChoice);
                                } else if (airPoints > firePoints && airPoints > lightningPoints && airPoints > icePoints && airPoints > waterPoints && airPoints > earthPoints) {
                                        elementChoice = "air";
                                        fxConvergingCurrent.play();
                                        upgradeCard(elementChoice);
                                } else if (waterPoints > firePoints && waterPoints > lightningPoints && waterPoints > icePoints && waterPoints > airPoints && waterPoints > earthPoints) {
                                        elementChoice = "water";
                                        fxWaterWall.play();
                                        upgradeCard(elementChoice);
                                } else if (earthPoints > firePoints && earthPoints > lightningPoints && earthPoints > icePoints && earthPoints > airPoints && earthPoints > waterPoints) {
                                        elementChoice = "earth";
                                        fxStoneBarricade.play();
                                        upgradeCard(elementChoice);
                                } else {
                                        elementChoice = "none";
                                        upgradeCard("none");
                                        document.querySelector(".exclamation-text").innerHTML = `
                                        <p class="exclamation-text">You feel the earth tremble as he considers your answers.<br><br>
                                        "You are well balanced and don't align with any particular element."<br><br>
                                        "I've empowered a random spell of yours. Now go." The statue seems to become inanimate again.</p>`
                                        document.querySelector(".exclamation-button-div").innerHTML = `
                                                <button class="exclamation-button-1">Thank him for the blessing and depart</button>`
                                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                switchArea(map, exclamationContainer);
                                        });
                                }
                                if (elementChoice !== "none") {
                                        document.querySelector(".exclamation-text").innerHTML = `
                                        <p class="exclamation-text">You feel the earth tremble as he considers your answers.<br><br>
                                        "You most align with the element ${elementChoice}"<br><br>
                                        "I've empowered one of your ${elementChoice} spells. Now go." The statue seems to become inanimate again.</p>`
                                        document.querySelector(".exclamation-button-div").innerHTML = `
                                                <button class="exclamation-button-1">Thank him for the blessing and depart</button>`
                                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                                switchArea(map, exclamationContainer);
                                        });
                                }
                        }
                        function questionThree() {
                                document.querySelector(".exclamation-text").innerHTML = `
                                        <p class="exclamation-text">"Yes...yes I can see the value in this."<br><br>
                                        "I have one last question for you."<br><br>
                                        "If someone was in need of aid, what would you do?"</p>`
                                document.querySelector(".exclamation-button-div").innerHTML = `
                                        <button class="exclamation-button-1">Carefully plan before jumping in to save them</button>
                                        <button class="exclamation-button-2">Help them as long as you aren't put in danger</button>
                                        <button class="exclamation-button-3">Your strong resolve gives you the courage to immediately jump in</button>`
                                document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                        icePoints++;
                                        airPoints++;
                                        lightningPoints += 2;
                                        firePoints--;
                                        getUpgrade();
                                });
                                document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                        airPoints += 2;
                                        waterPoints--;
                                        earthPoints -= 2;
                                        getUpgrade();
                                });
                                document.querySelector(".exclamation-button-3").addEventListener("click", () => {
                                        earthPoints += 2;
                                        firePoints += 2;
                                        icePoints--;
                                        airPoints -= 2;
                                        lightningPoints -= 2;
                                        getUpgrade();
                                });
                        }
                        function questionTwo() {
                                document.querySelector(".exclamation-text").innerHTML = `
                                        <p class="exclamation-text">The statue considers your answer.<br><br>
                                        "I can see how that would be effective."<br><br>
                                        "What then would you say you would like to gain most in this life?"</p>`  
                                document.querySelector(".exclamation-button-div").innerHTML = `
                                        <button class="exclamation-button-1" style="text-align: center; height: 50px;">Unremitted thorough wisdom</button>
                                        <button class="exclamation-button-2" style="text-align: center; height: 50px;">Overwhelming power at any cost</button>
                                        <button class="exclamation-button-3" style="text-align: center; height: 50px;">The ability to protect my loved ones</button>
                                        <button class="exclamation-button-4" style="text-align: center; height: 50px;">Being known as a caring and loving person</button>
                                        <button class="exclamation-button-5" style="text-align: center; height: 50px;">Having the freedom to do whatever pleases me</button>
                                        <button class="exclamation-button-6" style="text-align: center; height: 50px;">Ability to intuitively anticipate what's coming next</button>`
                                document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                        icePoints += 2;
                                        lightningPoints++;
                                        questionThree();
                                });
                                document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                        firePoints += 2;
                                        lightningPoints++;
                                        earthPoints--;
                                        waterPoints--;
                                        icePoints--;
                                        questionThree();
                                });
                                document.querySelector(".exclamation-button-3").addEventListener("click", () => {
                                        earthPoints += 2;
                                        waterPoints++;
                                        firePoints--;
                                        lightningPoints -= 2;
                                        airPoints -= 2;
                                        questionThree();
                                });
                                document.querySelector(".exclamation-button-4").addEventListener("click", () => {
                                        waterPoints += 2;
                                        lightningPoints--;
                                        firePoints--;
                                        airPoints--;
                                        questionThree();
                                });
                                document.querySelector(".exclamation-button-5").addEventListener("click", () => {
                                        airPoints += 2;
                                        questionThree();
                                });
                                document.querySelector(".exclamation-button-6").addEventListener("click", () => {
                                        lightningPoints += 2;
                                        airPoints++;
                                        icePoints--;
                                        questionThree();
                                });
                        }
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                waterPoints++;
                                earthPoints++;
                                lightningPoints -= 2;
                                airPoints--;
                                questionTwo();
                        });
                        document.querySelector(".exclamation-button-2").addEventListener("click", () => {
                                icePoints++;
                                airPoints++;
                                firePoints--;
                                questionTwo();
                        });
                        document.querySelector(".exclamation-button-3").addEventListener("click", () => {
                                firePoints += 2;
                                lightningPoints++;
                                earthPoints -= 2;
                                waterPoints -= 2;
                                airPoints--;
                                icePoints--;
                                questionTwo();
                        });
                        dontRepeatExclamation.push(14);
                        break;
                case 15:
                        createExclamation("Maluminia's Entropy", "imgs/heaven-night.jpeg", "imgs/maluminia.jpeg", "After days of trekking with daylight constantly permeating the confines of this realm, darkness settles in. You suppose the days must be much longer here.", 
                                `An angelic woman slowly descends from the sky adorned with armor as black as night. "I know you seek to stop my sister and I. You've come far and for that I'm impressed, but you shall join me in my realm soon."`,
                                `Fast as lightning, she reaches for your spell book. Before you have a chance to react, she engulfs your spells in a dark liquid emenating from her hands. She swiftly flies away and is gone in a blink.`);
                        document.querySelector(".exclamation-button-div").innerHTML = `<button class="exclamation-button-1">Your entire starting hand has been swapped!</button>`
                        document.querySelector(".exclamation-button-1").addEventListener("click", () => {
                                fxPyromania.play();
                                // DESTROY OPENING HAND CARDS
                                document.querySelectorAll(".card").forEach((i) => {
                                        for (let j = 0; j < 12; j++) {
                                                if (i.classList.contains(j)) {
                                                        if (drawPileArray.includes(i)) {
                                                                destroyedCardsArray.push(drawPileArray.splice(drawPileArray.indexOf(i), 1));
                                                                destroyedCardsContainer.appendChild(i);
                                                        }
                                                        if (handArray.includes(i)) {
                                                                destroyedCardsArray.push(handArray.splice(handArray.indexOf(i), 1));
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
                                        let newCard = createRandomNumber(0, cardsInformation.length - 4);
                                        while (newOpeningHand.includes(newCard)) {
                                                newCard = createRandomNumber(0, cardsInformation.length - 4);
                                        }
                                        addCardToDeck(newCard, 0, false);
                                        newOpeningHand.push(newCard);
                                }
                                switchArea(map, exclamationContainer);
                        });
                        dontRepeatExclamation.push(15);
                        break;
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
                } else {
                        const heavenShopMusic = new Audio("audio/heaven-shop-music.wav");
                        //switchMusic(heavenShopMusic);
                        shopMusicTrigger = true;
                        shopMusicIndex = allMusic.indexOf(heavenShopMusic);
                }
        } else {
                //switchMusic(allMusic[shopMusicIndex]);
        }
        const shopContainer = document.querySelector("#shop-container");
        displayNone(map);
        displayFlex(shopContainer);
        shopContainer.innerHTML = `
        <div id="cards-and-relics-container">
                <div id="shop-cards-div"></div>
                <div id="shop-button-container">
                        <div id="shop-relic-container"></div>
                        <button id="leave-shop-button">Leave Shop</button>
                        <img id="shopkeeper" src="imgs/gnome-shopkeeper.png">
                </div>
        </div>
        `;
        if (hallowwood) {
                document.getElementById("shop-container").style.backgroundImage = "url(imgs/hallowwood-shop.jpeg)"
                document.getElementById("shopkeeper").src = "imgs/hallowwood-shopkeeper.png";
                document.getElementById("shopkeeper").style = "margin-top: 0rem";
        } else if (!faeForest && !hallowwood) {
                document.getElementById("shop-container").style.backgroundImage = "url(imgs/heaven-shop.jpeg)"
                document.getElementById("shopkeeper").src = "imgs/heaven-shopkeeper.png";
                document.getElementById("shopkeeper").style = "margin-top: 0rem";
        }
        // LEAVE SHOP BUTTON
        document.querySelector("#leave-shop-button").addEventListener("click", () => {
                switchArea(map, shopContainer);
                let shopCardsReference = document.querySelectorAll(".card-reference");
                for (let k = 0; k < shopCardsReference.length; k++) {
                        destroyedCardsArray.push(shopCardsReference[k]);
                        destroyedCardsContainer.appendChild(shopCardsReference[k]);
                        destroyedCardsArray = [];
                        destroyedCardsContainer.innerHTML = ``;
                }
        });
        // SHOP CARDS
        let dontRepeatCard = [];
        let cardCost = [];
        while (dontRepeatCard.length < 10) {
                let newRandomNumber = createRandomNumber(12, cardsInformation.length - 4);
                if (dontRepeatCard.includes(newRandomNumber)) {
                        newRandomNumber = createRandomNumber(12, cardsInformation.length - 4);
                } else {
                        dontRepeatCard.push(newRandomNumber);
                }
        }
        for (let i = 0; i < dontRepeatCard.length; i++) {
                if (cardsInformation[dontRepeatCard[i]].rarity === "common") {
                        cardCost[i] = createRandomNumber(50, 70);
                } else if (cardsInformation[dontRepeatCard[i]].rarity === "rare") {
                        cardCost[i] = createRandomNumber(80, 100);
                } else {
                        cardCost[i] = createRandomNumber(110, 130);
                }
        }
        for (let i = 0; i < dontRepeatCard.length; i++) {
                document.querySelector("#shop-cards-div").innerHTML += `<div class="shop-cards-cost-div"></div>`;
                createCard(dontRepeatCard[i], document.querySelectorAll(".shop-cards-cost-div")[i], "card-reference", "card-text", 0);
                document.querySelectorAll(".shop-cards-cost-div")[i].innerHTML += `<img class="shop-aether" src="imgs/aether-icon.png"><p class="shop-aether-cost">${cardCost[i]}</p>`
        }
        let shopCardsReference = document.querySelectorAll(".card-reference");
        for (let i = 0; i < shopCardsReference.length; i++) {
                displayFlex(shopCardsReference[i]);
                shopCardsReference[i].addEventListener("click", () => {       
                        for (let j = 0; j < cardsInformation.length; j++) {
                                if (shopCardsReference[i].classList.contains(j) && playerAether.innerText >= cardCost[i]) {
                                        addCardToDeck(j, 0, false);
                                        playerAether.innerText -= cardCost[i];
                                        displayNone(document.querySelectorAll(".shop-cards-cost-div")[i]);
                                }
                        }
                });
        }
        // SHOP RELICS
        const shopRelicContainer = document.querySelector("#shop-relic-container");
        let dontRepeatShopRelic = [];
        let relicCost = [];
        function shopRelic() {
                for (let i = 0; i < 4; i++) {
                        let randomRelicNumber = createRandomNumber(1, 12);
                        while (dontRepeatRelic.includes(randomRelicNumber) || dontRepeatShopRelic.includes(randomRelicNumber)) {
                                randomRelicNumber = createRandomNumber(1, 12);
                        }
                        relicCost.push(createRandomNumber(100, 150));
                        switch (randomRelicNumber) {
                                case 1:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 1" src="imgs/ring-of-fire.png">
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Ring Of Fire</h4>
                                                        <p class="img-text-p">Single target burn duplicates half it's burn and spreads it to all enemies</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether-icon.png">
                                                <p class="shop-aether-cost">${relicCost[i]}</p>
                                        </div>`
                                        dontRepeatShopRelic.push(1);
                                        break;
                                case 2:
                                        shopRelicContainer.innerHTML += `
                                        <div class="shop-relic-div">
                                                <img class="shop-relic-img 2" src="imgs/eternal-flame.png">
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Concentrated Fire</h4>
                                                        <p class="img-text-p">Burning an enemy twice in one turn will increase the second burn by 50%</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether-icon.png">
                                                <p class="shop-aether-cost">${relicCost[i]}</p>
                                        </div>`
                                        dontRepeatShopRelic.push(2);
                                        break;
                                case 3:
                                        shopRelicContainer.innerHTML += 
                                        `<div class="shop-relic-div">
                                                <img class="shop-relic-img 3" src="imgs/thunder-talisman.png">
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Thunder Talisman</h4>
                                                        <p class="img-text-p">Start each encounter with +2 mana for the first turn</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether-icon.png">
                                                <p class="shop-aether-cost">${relicCost[i]}</p>
                                        </div>`
                                        
                                        dontRepeatShopRelic.push(3);
                                        break;
                                case 4:
                                        shopRelicContainer.innerHTML += 
                                        `<div class="shop-relic-div">
                                                <img class="shop-relic-img 4" src="imgs/lightning-in-a-bottle.png">
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Lightning in a Bottle</h4>
                                                        <p class="img-text-p">Your unused mana will not be lost</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether-icon.png">
                                                <p class="shop-aether-cost">${relicCost[i]}</p>
                                        </div>`,
                                        dontRepeatShopRelic.push(4);
                                        break;
                                case 5:
                                        shopRelicContainer.innerHTML += 
                                        `<div class="shop-relic-div">
                                                <img class="shop-relic-img 5" src="imgs/ice-spear.png">
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Ice Spear</h4>
                                                        <p class="img-text-p">Deal 4 more damage to enemies with Frostbite</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether-icon.png">
                                                <p class="shop-aether-cost">${relicCost[i]}</p>
                                        </div>`
                                        
                                        dontRepeatShopRelic.push(5);
                                        break;
                                case 6:
                                        shopRelicContainer.innerHTML += 
                                        `<div class="shop-relic-div">
                                                <img class="shop-relic-img 6" src="imgs/frostheart.png">
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Frostheart</h4>
                                                        <p class="img-text-p">Gain 4 block when inflicting enemy with frostbite</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether-icon.png">
                                                <p class="shop-aether-cost">${relicCost[i]}</p>
                                        </div>`
                                        dontRepeatShopRelic.push(6);
                                        break;
                                case 7:
                                        shopRelicContainer.innerHTML += 
                                        `<div class="shop-relic-div">
                                                <img class="shop-relic-img 7" src="imgs/stratus.png">
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Stratus</h4>
                                                        <p class="img-text-p">Windswept will now reflect 25% of the damage enemies intend to attack for back to them</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether-icon.png">
                                                <p class="shop-aether-cost">${relicCost[i]}</p>
                                        </div>`
                                        dontRepeatShopRelic.push(7);
                                        break;
                                case 8:
                                        shopRelicContainer.innerHTML += 
                                        `<div class="shop-relic-div">
                                                <img class="shop-relic-img 8" src="imgs/wind-disc.png">
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Wind Disc</h4>
                                                        <p class="img-text-p">Start each encounter with one extra card for the first turn</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether-icon.png">
                                                <p class="shop-aether-cost">${relicCost[i]}</p>
                                        </div>`
                                        dontRepeatShopRelic.push(8);
                                        break;
                                case 9:
                                        shopRelicContainer.innerHTML +=
                                        `<div class="shop-relic-div">
                                                <img class="shop-relic-img 9" src="imgs/blood-amulet.png">
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Blood Amulet</h4>
                                                        <p class="img-text-p">Gain 1 blood siphon on your second turn</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether-icon.png">
                                                <p class="shop-aether-cost">${relicCost[i]}</p>
                                        </div>`;
                                        dontRepeatShopRelic.push(9);
                                        break;
                                case 10:
                                        shopRelicContainer.innerHTML += 
                                        `<div class="shop-relic-div">
                                                <img class="shop-relic-img 10" src="imgs/caspians-tear.png">
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Caspian's Tear</h4>
                                                        <p class="img-text-p">Gain +3 max health when you start a new encounter</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether-icon.png">
                                                <p class="shop-aether-cost">${relicCost[i]}</p>
                                        </div>`
                                        dontRepeatShopRelic.push(10);
                                        break;
                                case 11:
                                        shopRelicContainer.innerHTML += 
                                        `<div class="shop-relic-div">
                                                <img class="shop-relic-img 11" src="imgs/crown-of-thorns.png">
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Crown of Thorns</h4>
                                                        <p class="img-text-p">Start each encounter with 2 thorns</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether-icon.png">
                                                <p class="shop-aether-cost">${relicCost[i]}</p>
                                        </div>`
                                        dontRepeatShopRelic.push(11);
                                        break;
                                case 12:
                                        shopRelicContainer.innerHTML += 
                                        `<div class="shop-relic-div">
                                                <img class="shop-relic-img 12" src="imgs/vine-bracelet.png">
                                                <div class="shop-relic-img-text img-text">
                                                        <h4 class="img-text-h4">Vine Bracelet</h4>
                                                        <p class="img-text-p">When you lose all of your block gain 10 block</p>
                                                </div>
                                                <img class="shop-aether" src="imgs/aether-icon.png">
                                                <p class="shop-aether-cost">${relicCost[i]}</p>
                                        </div>`
                                        dontRepeatShopRelic.push(12);
                                        break;
                        }
                }
        }
        shopRelic();
        const shopRelicImg = document.querySelectorAll(".shop-relic-img");
        const shopAetherImg = document.querySelectorAll(".shop-aether");
        const shopAetherCost = document.querySelectorAll(".shop-aether-cost");
        const shopRelicImgText = document.querySelectorAll(".shop-relic-img-text");
        for (let i = 0; i < shopRelicImg.length; i++) {
                shopRelicImg[i].addEventListener("click", () => {
                        for (let k = 0; k <= 12; k++) {
                                if (shopRelicImg[i].classList.contains(k) && playerAether.innerText >= relicCost[i]) {
                                        getRelic(k, k);
                                        displayNone(shopAetherImg[i + 10], shopAetherCost[i + 10], shopRelicImg[i], map);
                                        playerAether.innerText -= relicCost[i];
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
let blacksmithMusicTrigger = false;
let blacksmithMusicIndex;
function blacksmith() {
        if (!blacksmithMusicTrigger) {
                const blacksmithMusic = new Audio("audio/blacksmith-music.wav");
                //switchMusic(blacksmithMusic);
                blacksmithMusicTrigger = true;
                blacksmithMusicIndex = allMusic.indexOf(blacksmithMusic);
        }
        //switchMusic(allMusic[blacksmithMusicIndex]);
        const blacksmithAmbience =  new Audio("audio/blacksmith-ambience.wav");
        switchAmbience(blacksmithAmbience);
        const blacksmithContainer = document.querySelector("#blacksmith-container");
        displayFlex(blacksmithContainer);
        displayNone(map);
        blacksmithContainer.innerHTML = `
        <div id="blacksmith-dwarf-div">
                <div id="blacksmith-text">
                        <p>I can infuse your cards with aether to make them stronger if you've got the materials.<br><br>100 aether should do.</p>
                        <div class="dialogue"></div>
                </div>
                <img id="blacksmith-dwarf" src="imgs/blacksmith-dwarf.png">
        </div>`
        let clickCount = 0;
        if (playerAether.innerText < 100) {
                document.querySelector("#blacksmith-text").innerHTML = `<p>I can infuse your cards with aether to make them stronger if you've got the materials.<br><br>Come back when you have 100 aether for me.</p>`;
                document.querySelector("#blacksmith-text").addEventListener("click", () => {
                        switchArea(map, blacksmithContainer);
                        blacksmithAmbience.pause();
                        blacksmithAmbience.currentTime = 0;
                });
        } else {
                document.querySelector("#blacksmith-text").addEventListener("click", () => {
                        document.querySelector("#blacksmith-text").innerHTML = `Leave Blacksmith<br>`;
                        document.querySelector("#blacksmith-text").style = `margin-top: 60px`;
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
                        //console.log("CARD REFERENCE: ", cardReference, "cardReferenceUpgraded: ", cardReferenceUpgraded);
                        function upgradeCard(cardIndex) {
                                for (let k = 0; k < allCurrentCards.length; k++) {
                                        if (allCurrentCards[k].classList.contains(cardIndex)) {
                                                //console.log(allCurrentCards[k]);
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
                                                if (cardReference[i].classList.contains(j) && playerAether.innerText >= 100) {
                                                        upgradeCard(j);
                                                        playerAether.innerText -= 100;
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
                                                                //console.log("mouseover" + i);
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
const drawPileContainer = document.querySelector("#draw-pile-container");
const discardPileContainer = document.querySelector("#discard-pile-container");
const handContainer = document.querySelector("#hand-container");
const chooseNewCardContainer = document.querySelector("#choose-new-card-container");
const chooseNewCardDiv = document.querySelector("#choose-new-card-div");
let [essenceOfEmber, essenceOfEmberEmpowered, stormForm, stormFormEmpowered, gaiasEmbrace, terrasBlessing, terrasBlessingEmpowered, airBubble, skippingRocks, skippingRocksTurn3] = [[], [], [], [], [], [], [], [], [], []];
let [icyEmbuement, staticCharge, pyromania, waterOrb, siphonHeat, siphonHeatEmpowered, tempiasFury] = [false, false, false, false, false, false, false];
let damageThisTurn = 0;
let healthGainedThisFight = 0;
let windsOfChange = 8;
let sphereOfAir = 3;
const playerThornsNumber = document.querySelector("#player-thorns-number");
const playerCurrentHealth = document.querySelector("#player-current-health");
const playerBlockNumber = document.querySelector("#player-block-number");
// CARD INFO ARRAY TO MAKE CARD DIVS IN HTML
const cardsInformation = [
        {
                manaCost: [1, 1],
                name: "Fireball",
                cardImg: "imgs/fireball.jpeg",
                cardText: [`Deal 8 damage and inflict 4 burn`, "Inflict 7 burn on an enemy and 2 on yourself"],
                damage: [8, 0],
                burn: [4, 7],
                chooseEnemyCard: true,
                index: 0,
                element: "fire",
                rarity: "starter",
                action: 
                [
                        function () {
                                spendMana(1);
                                damageEnemy(8, chosenEnemy);
                                burnEnemy(4, chosenEnemy);
                                fxFireball.play();
                        },
                        function () {
                                spendMana(1);
                                burnEnemy(7, chosenEnemy);
                                playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + 2;
                                fxFireball.play();
                        }
                ]
        },
        {
                manaCost: [3, 2],
                name: "Cascading Flames",
                cardImg: "imgs/cascading-flames.jpeg",
                cardText: ["Inflict 10 burn on an enemy and 3 on yourself", "Inflict 12 burn on an enemy and 5 on yourself"],
                burn: [10, 12],
                chooseEnemyCard: true,
                index: 1,
                element: "fire",
                rarity: "starter",
                action: 
                [
                        function() {
                                spendMana(3);
                                burnEnemy(10, chosenEnemy);
                                burnSelf(3);
                                fxCascadingFlames.play();
                        },
                        function() {
                                spendMana(2);
                                burnEnemy(12, chosenEnemy);
                                burnSelf(5);
                                fxCascadingFlames.play();
                        }
                ]
        },
        {
                manaCost: [1, 0],
                name: "Static Charge",
                cardImg: "imgs/static-charge.jpeg",
                cardText: ["Your next direct damage spell deals 10 more damage", "Your next direct damage spell deals 10 more damage"],
                energize: [2, 3],
                chooseEnemyCard: false,
                index: 2,
                element: "lightning",
                rarity: "starter",
                action:
                [
                        function() {
                                spendMana(1);
                                staticCharge = true;
                                displayBlock(playerTidalImbuementImg);
                                fxStaticCharge.play();
                        },
                        function() {
                                spendMana(0);
                                staticCharge = true;
                                displayBlock(playerTidalImbuementImg);
                                fxStaticCharge.play();
                        },   
                ]
        },
        {
                manaCost: [3, 3],
                name: "Chain Lightning",
                cardImg: "imgs/chain-lightning.jpeg",
                cardText: ["Deal 20 damage to all enemies<br>Energize 2", "Deal 30 damage to all enemies<br>Energize 3"],
                damage: [20, 30],
                energize: [2, 3],
                chooseEnemyCard: false,
                index: 3,
                element: "lightning",
                rarity: "starter",
                action:
                [
                        function() {
                                spendMana(3);
                                damageAllEnemies(20);
                                gainEnergize(2);
                                fxChainLightning.play();
                        },
                        function() {
                                spendMana(3);
                                damageAllEnemies(30);
                                gainEnergize(3);
                                fxChainLightning.play();
                        },
                ]        
        },
        {
                manaCost: [1, 0],
                name: "Frostbolt",
                cardImg: "imgs/frostbolt.jpeg",
                cardText: ["Deal 12 damage and inflict frostbite", "Deal 16 damage and inflict frostbite"],
                damage: [12, 16],
                chooseEnemyCard: true,
                index: 4,
                element: "ice",
                rarity: "starter",
                action: 
                [
                        function() {
                                spendMana(1);
                                damageEnemy(12, chosenEnemy);
                                inflictFrostbite(chosenEnemy);
                                fxFrostbolt.play();
                        },
                        function() {
                                spendMana(0);
                                damageEnemy(16, chosenEnemy);
                                inflictFrostbite(chosenEnemy);
                                fxFrostbolt.play();
                        }
                ]
        },        
        {
                manaCost: [2, 2],
                name: "Frost Fingers",
                cardImg: "imgs/frost-fingers.jpeg",
                cardText: ["Deal 15 damage. if you or the enemy has frostbite deal double instead.", "Deal 15 damage. if you or the enemy has frostbite deal triple instead."],
                damage: [15, 15],
                chooseEnemyCard: true,
                index: 5,
                element: "ice",
                rarity: "starter",
                action:
                [       
                        function() {
                                spendMana(2);
                                if (playerFrostbite || enemyFrostbite[chosenEnemy]) {
                                        if (staticCharge) {
                                                damageEnemy(25, chosenEnemy);
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
                                        if (staticCharge) {
                                                damageEnemy(50, chosenEnemy);
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
                cardImg: "imgs/tornado.jpeg",
                cardText: ["Enemies with windswept take 20 damage. Enemies without gain windswept", "Enemies with windswept take 20 damage. Enemies without gain windswept. Draw a card."],
                damage: [20, 20],
                chooseEnemyCard: false,
                index: 6,
                element: "air",
                rarity: "starter",
                action:
                [ 
                        function() {
                                spendMana(1);
                                let enemyIsWindswept = [];
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i]) {
                                                if (enemyWindswept[i]) {
                                                        enemyIsWindswept.push(true);
                                                        if (staticCharge) {
                                                                damageEnemy(30, i);
                                                                staticCharge = true;   
                                                        } else {
                                                                damageEnemy(20, i);
                                                        }
                                                } else {
                                                        inflictWindswept(i);
                                                }
                                        }
                                }
                                if (enemyIsWindswept.length > 0) {
                                        staticCharge = false;
                                        displayNone(playerTidalImbuementImg);
                                }
                                fxTornado.play();
                        },
                        function() {
                                spendMana(1);
                                drawCards(1);
                                let enemyIsWindswept = [];
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i]) {
                                                if (enemyWindswept[i]) {
                                                        enemyIsWindswept.push(true);
                                                        if (staticCharge) {
                                                                damageEnemy(30, i);
                                                                staticCharge = true;   
                                                        } else {
                                                                damageEnemy(20, i);
                                                        }
                                                } else {
                                                        inflictWindswept(i);
                                                }
                                        }
                                }
                                if (enemyIsWindswept.length > 0) {
                                        staticCharge = false;
                                        displayNone(playerTidalImbuementImg);
                                }
                                fxTornado.play();
                        },
                ]
        },
        {
                manaCost: [1, 1],
                name: "Gale Force",
                cardImg: "imgs/gale-force.jpeg",
                cardText: ["Deal 10 damage to an enemy and inflict windswept", "Deal 10 damage to an enemy and inflict windswept. Increase Shifting cards damage by 3"],
                damage: [10, 10],
                chooseEnemyCard: true,
                index: 7,
                element: "air",
                rarity: "starter",
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
                                sphereOfAir += 3;
                                fxGaleForce.play();
                        },
                ]
        },
        {
                manaCost: [1, 1],
                name: "Blood Cocoon",
                cardImg: "imgs/blood-cocoon.jpeg",
                cardText: ["Gain 1 Blood Siphon", "Gain 2 Blood Siphon"],
                blood: [1, 2],
                chooseEnemyCard: false,
                index: 8,
                element: "water",
                rarity: "starter",
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
                name: "Aerwyna's Trident",
                cardImg: "imgs/tidal-trident.jpeg",
                cardText: ["Deal 20 damage and half that to adjacent targets<br>Gain 1 regen for each target hit", "Deal 20 damage and half that to adjacent targets<br>Gain 1 regen and blood siphon for each target hit"],
                damage: [20, 20],
                damageThird: [8, 8],
                regen: [1, 1],
                blood: [0, 1],            
                chooseEnemyCard: true,
                index: 9,
                element: "water",
                rarity: "starter",
                action:
                [
                        function() {
                                fxAerwynasTrident.play();
                                spendMana(2);
                                let tempiasActive = false;
                                if (tempiasFury) {
                                        tempiasActive = true;
                                }
                                if (icyEmbuement) {
                                        damageAllEnemies(20);
                                        for (let i = 0; i < numberOfEnemies; i++) {
                                                if (!enemyIsDead[i]) {
                                                        gainRegen(1);
                                                }
                                        }
                                } else {
                                        let tidalDamage = (damageEnemy(20, chosenEnemy));
                                        if (playerWindswept) {
                                                tidalDamage *= 2;
                                        }
                                        //console.log(tidalDamage);
                                        gainRegen(1);
                                        if (chosenEnemy === 1) {
                                                if (!enemyIsDead[0]) {
                                                        if (tempiasActive) {
                                                                inflictWindswept(0);
                                                        }
                                                        damageEnemy(Math.floor((tidalDamage) / 2), 0);
                                                        gainRegen(1);
                                                }
                                                if (!enemyIsDead[2] && numberOfEnemies === 3) {
                                                        if (tempiasActive) {
                                                                inflictWindswept(2);
                                                        }
                                                        damageEnemy(Math.floor((tidalDamage) / 2), 2);
                                                        gainRegen(1);
                                                }
                                        } else {
                                                if (!enemyIsDead[1] && numberOfEnemies !== 1) {
                                                        if (tempiasActive) {
                                                                inflictWindswept(1);
                                                        }
                                                        damageEnemy(Math.floor((tidalDamage) / 2), 1);
                                                        gainRegen(1);
                                                }
                                        }
                                }
                        },
                        function() {
                                fxAerwynasTrident.play();
                                spendMana(2);
                                if (icyEmbuement) {
                                        damageAllEnemies(20);
                                        for (let i = 0; i < numberOfEnemies; i++) {
                                                if (!enemyIsDead[i]) {
                                                        gainRegen(1);
                                                        gainBloodSiphon(1);
                                                }
                                        }
                                } else {
                                        let tidalDamage = (damageEnemy(20, chosenEnemy));
                                        if (playerWindswept) {
                                                tidalDamage *= 2;
                                        }
                                        //console.log(tidalDamage);
                                        gainRegen(1);
                                        gainBloodSiphon(1);
                                        if (chosenEnemy === 1) {
                                                if (!enemyIsDead[0]) {
                                                        damageEnemy(Math.floor((tidalDamage) / 2), 0);
                                                        gainRegen(1);
                                                        gainBloodSiphon(1);
                                                }
                                                if (!enemyIsDead[2] && numberOfEnemies === 3) {
                                                        damageEnemy(Math.floor((tidalDamage) / 2), 2);
                                                        gainRegen(1);
                                                        gainBloodSiphon(1);
                                                }
                                        } else {
                                                if (!enemyIsDead[1] && numberOfEnemies !== 1) {
                                                        damageEnemy(Math.floor((tidalDamage) / 2), 1);
                                                        gainRegen(1);
                                                        gainBloodSiphon(1);
                                                }
                                        }
                                }                                
                        },
                ]
        },
        {
                manaCost: [1, 1],
                name: "Rock Smash",
                cardImg: "imgs/rock-shot.jpeg",
                cardText: ["Deal 8 damage and gain block equal to the damage dealt", "Deal 12 damage and gain block equal to the damage dealt"],
                damage: [8, 12],
                chooseEnemyCard: true,
                index: 10,
                element: "earth",
                rarity: "starter",
                action:
                [ 
                        function() {
                                fxRockSmash.play();
                                spendMana(1);
                                let damageDone = damageEnemy(8, chosenEnemy);
                                if (icyEmbuement) {
                                        for (let i = 0; i < numberOfEnemies; i++) {
                                                if (!enemyIsDead) {
                                                        gainBlock(damageDone);
                                                }
                                        }
                                } else {
                                        gainBlock(damageDone);
                                }
                        },
                        function() {
                                fxRockSmash.play();
                                spendMana(1);
                                let damageDone = damageEnemy(12, chosenEnemy);
                                if (icyEmbuement) {
                                        for (let i = 0; i < numberOfEnemies; i++) {
                                                if (!enemyIsDead) {
                                                        gainBlock(damageDone);
                                                }
                                        }
                                } else {
                                        gainBlock(damageDone);
                                }
                        },
                ]
        },
        {
                manaCost: [2, 2],
                name: "Thorn Shield",
                cardImg: "imgs/thorn-shield.jpeg",
                cardText: ["Gain 14 block and 2 thorns", "Gain 21 block and 3 thorns"],
                block: [14, 21],
                thorns: [2, 3],
                chooseEnemyCard: false,
                index: 11,
                element: "earth",
                rarity: "starter",
                action:
                [
                        function() {
                                spendMana(2);
                                gainBlock(14);
                                gainThorns(2);
                                fxThornShield.play();
                        },
                        function() {
                                spendMana(2);
                                gainBlock(21);
                                gainThorns(3);
                                fxThornShield.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Firefall",
                cardImg: "imgs/firefall.jpeg",
                cardText: ["Inflict 6 burn on all enemies and 3 on yourself", "Inflict 8 burn on all enemies and 4 on yourself"],
                burn: [6, 8],
                chooseEnemyCard: false,
                index: 12,
                element: "fire",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(2);
                                burnAllEnemies(6);
                                burnSelf(3);
                                fxFirefall.play();
                        },
                        function() {
                                spendMana(2);
                                burnAllEnemies(8);
                                burnSelf(4);
                                fxFirefall.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Kindred Spirits",
                cardImg: "imgs/kindred-spirits.jpeg",
                cardText: ["Transfer your burn onto the enemy", "Transfer your burn onto all enemies"],
                chooseEnemyCard: true,
                index: 13,
                element: "fire",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(1);
                                burnEnemy(parseFloat(playerBurnNumber.innerText), chosenEnemy);
                                playerBurnNumber.innerText = 0;
                                displayNone(playerBurnImg, playerBurnNumber); 
                                fxKindredSpirits.play();
                        },
                        function() {
                                spendMana(1);
                                burnAllEnemies(parseFloat(playerBurnNumber.innerText));
                                playerBurnNumber.innerText = 0;
                                displayNone(playerBurnImg, playerBurnNumber); 
                                fxKindredSpirits.play();
                        }
                ]        
        },
        {
                manaCost: [1, 1],
                name: "Pyromania",
                cardImg: "imgs/pyromania.jpeg",
                cardText: ["Gain 5 burn<br>Burn heals you this turn", "Gain 8 burn<br>Burn heals you this turn"],
                chooseEnemyCard: false,
                index: 14,
                element: "fire",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(1);
                                burnSelf(5);
                                pyromania = true;
                                displayBlock(playerBurnImg, playerBurnNumber);
                                fxPyromania.play();
                        },
                        function() {
                                burnSelf(8);
                                pyromania = true;
                                displayBlock(playerBurnImg, playerBurnNumber);
                                fxPyromania.play();
                        }
                ]        
        },
        {
                manaCost: [1, 1],
                name: "Summer Solstice",
                cardImg: "imgs/summer-solstice.jpeg",
                cardText: ["[Ethereal]<br>Increase everyone's burn by 50%", "[Ethereal]<br>Increase everyone's burn by 75%"],
                chooseEnemyCard: false,
                index: 15,
                element: "fire",
                rarity: "rare",
                action:
                [
                        function() {
                                spendMana(1);
                                if (playerBurnNumber.innerText > 0) {
                                        playerBurnNumber.innerText = parseFloat(Math.floor(playerBurnNumber.innerText * 1.5));
                                }
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i] && enemyBurnNumber[i].innerText > 0) {
                                                enemyBurnNumber[i].innerText = parseFloat(Math.floor(enemyBurnNumber[i].innerText * 1.5));
                                        }
                                }
                                fxSummerSolstice.play();
                        },
                        function() {
                                spendMana(1);
                                if (playerBurnNumber.innerText > 0) {
                                        playerBurnNumber.innerText = parseFloat(Math.floor(playerBurnNumber.innerText * 1.75));
                                }
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i] && enemyBurnNumber[i].innerText > 0) {
                                                enemyBurnNumber[i].innerText = parseFloat(Math.floor(enemyBurnNumber[i].innerText * 1.75));
                                        }
                                }
                                fxSummerSolstice.play();
                        }
                ]
        },
        {
                manaCost: [2, 3],
                name: "Phoenix Fire",
                cardImg: "imgs/phoenix-fire.jpeg",
                cardText: [`Deal damage equal to 2x the amount of burn on the enemy`, `Deal damage equal to 4x the amount of burn on the enemy`],
                damageSecond: [2, 4],
                chooseEnemyCard: true,
                index: 16,
                element: "fire",
                rarity: "rare",
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
                cardImg: "imgs/essence-of-ember.jpeg",
                cardText: ["[Ethereal] [Aura]<br>You apply +1 burn", "[Ethereal] [Aura]<br>You apply +2 burn"],
                chooseEnemyCard: false,
                index: 17,
                element: "fire",
                rarity: "deific",
                action:
                [
                        function() {
                                spendMana(1);
                                essenceOfEmber.push(true);
                                fxPotion.play();
                        },
                        function() {
                                spendMana(2);
                                essenceOfEmberEmpowered.push(true);
                                fxPotion.play();
                        }
                ]
        },
        {
                manaCost: [0, 0],
                name: "Surge",
                cardImg: "imgs/surge.jpeg",
                cardText: ["Gain 1 mana for each energize you have", "Gain 1 mana and deal 1 damage to a random enemy for each energize you have"],
                chooseEnemyCard: false,
                index: 18,
                element: "lightning",
                rarity: "common",
                action:
                [
                        function() {
                                currentMana.innerText = parseFloat(currentMana.innerText) + parseFloat(playerEnergizeNumber.innerText);
                                fxSurge.play();
                        },
                        function() {
                                currentMana.innerText = parseFloat(currentMana.innerText) + parseFloat(playerEnergizeNumber.innerText);
                                let randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                while (enemyIsDead[randomEnemy]) {
                                        randomEnemy = createRandomNumber(0, numberOfEnemies - 1);
                                }
                                damageEnemy(playerEnergizeNumber.innerText, randomEnemy);
                                fxSurge.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Lectra's Touch",
                cardImg: "imgs/lectra's-touch.jpeg",
                cardText: ["Deal 5 damage<br>Gain 1 energize for every 5 damage this deals", "Deal 10 damage<br>Gain 1 energize for every 5 damage this deals"],
                damage: [5, 10],
                chooseEnemyCard: true,
                index: 19,
                element: "lightning",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(1);
                                let electrocuteDamage = damageEnemy(5, chosenEnemy);
                                gainEnergize(Math.floor(electrocuteDamage / 5));
                                fxLectrasTouch.play();
                        },
                        function() {
                                spendMana(1);
                                let electrocuteDamage = damageEnemy(10, chosenEnemy);
                                gainEnergize(Math.floor(electrocuteDamage / 5));
                                fxLectrasTouch.play();
                        }
                ]
        },
        {
                manaCost: [3, 3],
                name: "Ball Lightning",
                cardImg: "imgs/ball-lightning.jpeg",
                cardText: ["Deal 10 damage to a random enemy three times and Energize 1 for each enemy damaged",
                        "Deal 10 damage to a random enemy four times and Energize 1 for each enemy damaged"],
                damage: [10, 10],
                energize: [1, 1],
                chooseEnemyCard: false,
                index: 20,
                element: "lightning",
                rarity: "common",
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
                                setTimeout(ballAttack, 175);
                                setTimeout(ballAttack, 350);
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
                                setTimeout(ballAttack, 175);
                                setTimeout(ballAttack, 350);
                                setTimeout(ballAttack, 350);
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Stormblessed",
                cardImg: "imgs/stormblessed.jpeg",
                cardText: ["Deal 50% of the damage you've dealt this turn to an enemy", "Deal 75% of the damage you've dealt this turn to an enemy"],
                damage: [damageThisTurn * .5, damageThisTurn * .75],
                chooseEnemyCard: true,
                index: 21,
                element: "lightning",
                rarity: "rare",
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
                manaCost: [4, 4],
                name: "Thunder Crash",
                cardImg: "imgs/thundercrash.jpeg",
                cardText: ["Deal 40 damage plus 20 for each mana you have after playing Thunder Crash", "Deal 40 damage plus 30 for each mana you have after playing Thunder Crash"],
                damage: [40, 40],
                damageSecond: [20, 30],
                chooseEnemyCard: true,
                index: 22,
                element: "lightning",
                rarity: "rare",
                action:
                [
                        function() {
                                spendMana(4);  
                                damageEnemy(40 + (currentMana.innerText * 20), chosenEnemy);
                                fxThunderCrash.play();
                        },
                        function() {
                                spendMana(4);  
                                damageEnemy(40 + (currentMana.innerText * 30), chosenEnemy);
                                fxThunderCrash.play();
                        }
                ]
        },
        {
                manaCost: [2, 3],
                name: "Storm Form",
                cardImg: "imgs/storm-form.jpeg",
                cardText: ["[Ethereal] [Aura]<br>All damage is increased by 5", "[Ethereal] [Aura]<br>All damage is increased by 10"],
                chooseEnemyCard: false,
                index: 23,
                element: "lightning",
                rarity: "deific",
                action:
                [
                        function() {
                                spendMana(2);
                                stormForm.push(true);
                                fxStormForm.play();
                        },
                        function() {
                                spendMana(2);
                                stormFormEmpowered.push(true);
                                fxStormForm.play();
                        }
                ]
        },
        {
                manaCost: [0, 0],
                name: "Siphon Heat",
                cardImg: "imgs/siphon-heat.jpeg",
                cardText: ["Inflict frostbite and steal any buffs that were reduced", "Inflict frostbite and gain all buffs the enemy is intending to gain"],
                chooseEnemyCard: true,
                index: 24,
                element: "ice",
                rarity: "common",
                action:
                [
                        function() {
                                siphonHeat = true;
                                inflictFrostbite(chosenEnemy);
                                fxSiphonHeat.play();
                        },
                        function() {
                                siphonHeatEmpowered = true;
                                inflictFrostbite(chosenEnemy);
                                fxSiphonHeat.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Winter's Breath",
                cardImg: "imgs/winters-breath.jpeg",
                cardText: ["If you have frostbite, transfer it to the enemy and deal 40 damage", "If you have frostbite, transfer it to the enemy and deal 60 damage"],
                damage: [40, 60],
                chooseEnemyCard: true,
                index: 25,
                element: "ice",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(1);
                                if (playerFrostbite) {
                                        damageEnemy(40, chosenEnemy);
                                        inflictFrostbite(chosenEnemy);
                                        playerFrostbite = false;
                                        displayNone(playerFrostbiteImg);                 
                                }
                                fxWintersBreath.play();
                        },
                        function() {
                                spendMana(1);
                                if (playerFrostbite) {
                                        damageEnemy(60, chosenEnemy);
                                        inflictFrostbite(chosenEnemy);
                                        playerFrostbite = false;
                                        displayNone(playerFrostbiteImg);                 
                                }
                                fxWintersBreath.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Snow Nova",
                cardImg: "imgs/snow-nova.jpeg",
                cardText: ["Deal 20 damage to all enemies and inflict frostbite to everyone", "Deal 30 damage to all enemies and inflict frostbite to everyone"],
                damage: [20, 30],
                chooseEnemyCard: false,
                index: 26,
                element: "ice",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(2);
                                damageAllEnemies(20);
                                inflictAllFrostbite();
                                frostbiteSelf();
                                fxSnowNova.play();
                        },
                        function() {
                                spendMana(2);
                                damageAllEnemies(30);
                                inflictAllFrostbite();
                                frostbiteSelf();
                                fxSnowNova.play();
                        }
                ]
        },
        {
                manaCost: [1, 0],
                name: "Glacia's Soul",
                cardImg: "imgs/frostbitten.jpeg",
                cardText: ["[Aura]<br>Gain 50% increased buffs when you have frostbite<br>Inflict frostbite on yourself", "[Aura]<br>Gain 50% increased buffs when you have frostbite<br>Inflict frostbite on yourself"],
                chooseEnemyCard: false,
                index: 27,
                element: "ice",
                rarity: "rare",
                action:
                [
                        function() {
                                spendMana(1);
                                frostbiteSelf();
                                frostbitten = true;
                                displayBlock(playerGlaciasSoulImg);
                                fxGlaciasSoul.play();
                        },
                        function() {
                                frostbiteSelf();
                                frostbitten = true;
                                displayBlock(playerGlaciasSoulImg);
                                fxGlaciasSoul.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Ice Ray",
                cardImg: "imgs/ice-ray.jpeg",
                cardText: ["Deal 10 damage for each enemy that has frostbite<br>Transfer frostbite from all enemies to you", "Deal 15 damage for each enemy that has frostbite<br>Transfer frostbite from all enemies to you"],
                damage: [10, 15],
                chooseEnemyCard: true,
                index: 28,
                element: "ice",
                rarity: "rare",
                action:
                [
                        function() {
                                spendMana(1);
                                let frostbiteEnemies = [];
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i] && enemyFrostbite[i]) {
                                                frostbiteEnemies.push(true);
                                                enemyFrostbite[i] = false;
                                                displayNone(enemyFrostbiteImg[i]);
                                                frostbiteSelf();
                                        }
                                }
                                damageEnemy((frostbiteEnemies.length) * 10, chosenEnemy);
                                fxIceRay.play();
                        },
                        function() {
                                spendMana(1);
                                let frostbiteEnemies = [];
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i] && enemyFrostbite[i]) {
                                                frostbiteEnemies.push(true);
                                                enemyFrostbite[i] = false;
                                                displayNone(enemyFrostbiteImg[i]);
                                                frostbiteSelf();
                                        }
                                }
                                damageEnemy((frostbiteEnemies.length) * 15, chosenEnemy);
                                fxIceRay.play();
                        }
                ]
        },
        {
                manaCost: [3, 2],
                name: "Icy Imbuement",
                cardImg: "imgs/icy-imbuement.jpeg",
                cardText: ["[Ethereal] [Aura]<br>Damage hits every enemy and frostbite hits everyone", "[Ethereal] [Aura]<br>Damage hits every enemy and frostbite hits everyone"],
                chooseEnemyCard: false,
                index: 29,
                element: "ice",
                rarity: "deific",
                action:
                [
                        function() {
                                spendMana(3);
                                icyEmbuement = true;
                                fxIcyImbuement.play();
                        },
                        function() {
                                spendMana(2);
                                icyEmbuement = true;
                                fxIcyImbuement.play();
                        }
                ]
        },
        {
                manaCost: [0, 0],
                name: "Winds of Change",
                cardImg: "imgs/winds-of-change.jpeg",
                cardText: ["[Shifting]<br>Deal 8 damage.<br>All Shifting cards gain +3 damage or +6 if target is windswept", "[Shifting]<br>Deal 8 damage.<br>All Shifting cards gain +4 damage or +8 if target is windswept"],
                damage: [5, 5],
                chooseEnemyCard: true,
                index: 30,
                element: "air",
                rarity: "common",
                action:
                [
                        function() {
                                damageEnemy(windsOfChange, chosenEnemy);
                                if (enemyWindswept[chosenEnemy]) {
                                        windsOfChange += 6;
                                        sphereOfAir += 6;
                                } else {
                                        windsOfChange += 3;
                                        sphereOfAir += 3;
                                }
                                fxWindsOfChange.play();
                        },
                        function() {
                                damageEnemy(windsOfChange, chosenEnemy);
                                if (enemyWindswept[chosenEnemy]) {
                                        windsOfChange += 8;
                                        sphereOfAir += 8;
                                } else {
                                        windsOfChange += 4;
                                        sphereOfAir += 4;
                                }
                                fxWindsOfChange.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Windwalk",
                cardImg: "imgs/windwalk.jpeg",
                cardText: ["Draw two cards", "Draw two cards and inflict windswept on a random enemy"],
                chooseEnemyCard: false,
                index: 31,
                element: "air",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(1);
                                drawCards(2);
                                fxWindwalk.play();
                        },
                        function() {
                                spendMana(1);
                                drawCards(2);
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
                manaCost: [0, 0],
                name: "Sphere of Air",
                cardImg: "imgs/sphere-of-air.jpeg",
                cardText: ["[Shifting]<br>Deal 3 damage to all enemies and Shifting cards gain +4 damage for each windswept enemy", "[Shifting]<br>Deal 3 damage to all enemies and Shifting cards gain +6 damage for each windswept enemy"],
                chooseEnemyCard: false,
                index: 32,
                element: "air",
                rarity: "common",
                action:
                [
                        function() {
                                damageAllEnemies(sphereOfAir);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i] && enemyWindswept[i]) {
                                                windsOfChange += 4;
                                                sphereOfAir += 4;
                                        }
                                }
                                fxSphereOfAir.play();
                        },
                        function() {
                                damageAllEnemies(sphereOfAir);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i] && enemyWindswept[i]) {
                                                windsOfChange += 6;
                                                sphereOfAir += 6;
                                        }
                                }
                                fxSphereOfAir.play();
                        }
                ]
        },
        {
                manaCost: [2, 1],
                name: "Converging Current",
                cardImg: "imgs/converging-current.jpeg",
                cardText: ["Draw a card from your draw pile and discard pile", "Draw a card from your draw pile and discard pile"],
                chooseEnemyCard: false,
                index: 33,
                element: "air",
                rarity: "rare",
                action:
                [
                        function() {
                                spendMana(2);
                                function drawCard(container, pile) {
                                        displayCardPiles(container, pile);
                                        document.querySelectorAll(".card-reference").forEach(i => {
                                                i.addEventListener("click", () => {
                                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                                if (i.classList.contains(j)) {
                                                                        document.querySelectorAll(".card").forEach(k => {
                                                                                if (k.classList.contains(j)) {
                                                                                        handArray.push(pile.splice(pile.indexOf(k), 1).pop());
                                                                                        displayFlex(k);
                                                                                        destroyReferenceCards();
                                                                                }
                                                                        });
                                                                        displayNone(container);
                                                                        handContainer.style = `width: ${handArray.length - 1}9.5%`;
                                                                        if (discardPileArray.length > 0 && pile === drawPileArray) {
                                                                                drawCard(discardPileContainer, discardPileArray);
                                                                        } else if (pile === discardPileArray) {
                                                                                arena.classList.remove("dim2");
                                                                        }
                                                                }
                                                        }
                                                });
                                        });
                                }
                                if (drawPileArray.length > 0) {
                                        drawCard(drawPileContainer, drawPileArray);
                                } else if (discardPileArray.length > 0) {
                                        drawCard(discardPileContainer, discardPileArray);
                                }
                                fxConvergingCurrent.play();
                        },
                        function() {
                                spendMana(1);
                                function drawCard(container, pile) {
                                        displayCardPiles(container, pile);
                                        document.querySelectorAll(".card-reference").forEach(i => {
                                                i.addEventListener("click", () => {
                                                        for (let j = 0; j < cardsInformation.length; j++) {
                                                                if (i.classList.contains(j)) {
                                                                        document.querySelectorAll(".card").forEach(k => {
                                                                                if (k.classList.contains(j)) {
                                                                                        handArray.push(pile.splice(pile.indexOf(k), 1).pop());
                                                                                        displayFlex(k);
                                                                                        destroyReferenceCards();
                                                                                }
                                                                        });
                                                                        displayNone(container);
                                                                        handContainer.style = `width: ${handArray.length - 1}9.5%`;
                                                                        if (discardPileArray.length > 0 && pile === drawPileArray) {
                                                                                drawCard(discardPileContainer, discardPileArray);
                                                                        } else if (pile === discardPileArray) {
                                                                                arena.classList.remove("dim2");
                                                                        }
                                                                }
                                                        }
                                                });
                                        });
                                }
                                if (drawPileArray.length > 0) {
                                        drawCard(drawPileContainer, drawPileArray);
                                } else if (discardPileArray.length > 0) {
                                        drawCard(discardPileContainer, discardPileArray);
                                }
                                fxConvergingCurrent.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Tempia's Fury",
                cardImg: "imgs/tempias-fury.jpeg",
                cardText: ["[Ethereal]<br>The next card that deals damage will first inflict windswept to all enemies damaged", "The next card that deals damage will first inflict windswept to all enemies damaged"],
                chooseEnemyCard: false,
                index: 34,
                element: "air",
                rarity: "rare",
                action:
                [
                        function() {
                                spendMana(1);
                                tempiasFury = true;
                                displayBlock(playerTempiasFuryImg);
                                fxTempiasFury.play();
                        },
                        function() {
                                spendMana(1);
                                tempiasFury = true;
                                displayBlock(playerTempiasFuryImg);
                                fxTempiasFury.play();
                        }
                ]
        },
        {
                manaCost: [3, 2],
                name: "Zephyr Infusion",
                cardImg: "imgs/zephyr-infusion.jpeg",
                cardText: ["[Ethereal] [Aura]<br>Draw one more card at the end of each turn", "[Ethereal] [Aura]<br>Draw one more card at the end of each turn"],
                chooseEnemyCard: false,
                index: 35,
                element: "air",
                rarity: "deific",
                action:
                [
                        function() {
                                spendMana(3);
                                maxHandLength++;
                                fxZephyrInfusion.play();
                        },
                        function() {
                                spendMana(2);
                                maxHandLength++;
                                fxZephyrInfusion.play();
                        }
                ]
        },
        {
                manaCost: [2, 1],
                name: "Water Wall",
                cardImg: "imgs/water-wall.jpeg",
                cardText: ["At the end of your turn, heal for 50% of the damage you took this turn", "At the end of your turn, heal for 50% of the damage you took this turn"],
                chooseEnemyCard: false,
                index: 36,
                element: "water",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(2);
                                waterOrb = true;
                                fxWaterWall.play();
                        },
                        function() {
                                spendMana(1);
                                waterOrb = true;
                                fxWaterWall.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Sanguine Spring",
                cardImg: "imgs/sanguine-spring3.jpeg",
                cardText: ["Cleanse all debuffs and gain 2 blood siphon", "Cleanse all debuffs and gain 3 blood siphon"],
                blood: [2, 3],
                chooseEnemyCard: false,
                index: 37,
                element: "water",
                rarity: "common",
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
                name: "Downpour",
                cardImg: "imgs/downpour.jpeg",
                cardText: ["Use all mana to gain 1 regeneration and blood siphon per mana spent", "Use all mana to gain 2 regeneration and 1 blood siphon per mana spent"],
                regen: [1, 2],
                blood: [1, 1],
                chooseEnemyCard: false,
                index: 38,
                element: "water",
                rarity: "common",
                action:
                [
                        function() {
                                gainRegen(parseFloat(currentMana.innerText));
                                gainBloodSiphon(parseFloat(currentMana.innerText));
                                playerHeal(parseFloat(currentMana.innerText));
                                currentMana.innerText = 0;
                                fxDownpour.play();
                        },
                        function() {
                                gainRegen(parseFloat(currentMana.innerText));
                                gainBloodSiphon(parseFloat(currentMana.innerText));
                                gainBlock(parseFloat(currentMana.innerText));
                                playerHeal(parseFloat(currentMana.innerText));
                                currentMana.innerText = 0;
                                fxDownpour.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Tidal Binding",
                cardImg: "imgs/tidal-binding.jpeg",
                cardText: ["[Ethereal]<br>Heal for 20% of your missing health", "[Ethereal]<br>Heal for 30% of your missing health"],
                chooseEnemyCard: false,
                index: 39,
                element: "water",
                rarity: "rare",
                action:
                [
                        function() {
                                spendMana(1);
                                playerHeal(Math.floor((playerCurrentHealth.innerText - playerMaxHealth.innerText) * -.2));
                                fxTidalBinding.play();
                        },
                        function() {
                                spendMana(1);
                                playerHeal(Math.floor((playerCurrentHealth.innerText - playerMaxHealth.innerText) * -.3));
                                fxTidalBinding.play();
                        }
                ]
        },
        {
                manaCost: [4, 4],
                name: "Tsunami",
                cardImg: "imgs/tsunami.jpeg",
                cardText: ["Deal damage to all enemies equal to how much you've healed this fight", "Deal damage to all enemies equal to how much you've healed this fight. Gain +1 max health for each enemy hit."],
                damage: [healthGainedThisFight, healthGainedThisFight],
                chooseEnemyCard: false,
                index: 40,
                element: "water",
                rarity: "rare",
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
                                        if (!enemyIsDead[i]) {
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
                cardImg: "imgs/spring-water.jpeg",
                cardText: ["[Ethereal]<br>Permanently gain 5 max health", "[Ethereal]<br>Permanently gain 7 max health and gain 5 regeneration"],
                chooseEnemyCard: false,
                index: 41,
                element: "water",
                rarity: "deific",
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
                manaCost: [3, 2],
                name: "Earth Spikes",
                cardImg: "imgs/earth-spikes.jpeg",
                cardText: ["Turn 1: Gain 4 block and 1 thorn<br>Turn 2: Gain 8 block and 2 thorns<br>Turn 3: Gain 16 block and 4 thorns", "Turn 1: Gain 4 block and 1 thorn<br>Turn 2: Gain 8 block and 2 thorns<br>Turn 3: Gain 16 block and 4 thorns"],
                block: [4, 4],
                thorns: [1, 1],
                chooseEnemyCard: false,
                index: 42,
                element: "earth",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(3);
                                gainBlock(4);
                                gainThorns(1);
                                skippingRocks.push(true);
                                fxEarthSpikes.play();
                        },
                        function() {
                                spendMana(2);
                                gainBlock(4);
                                gainThorns(1);
                                skippingRocks.push(true);
                                fxEarthSpikes.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Stone Barricade",
                cardImg: "imgs/stone-wall.jpeg",
                cardText: ["Gain 26 block if you have no block", "Gain 40 block if you have no block"],
                block: [26, 40],
                chooseEnemyCard: false,
                index: 43,
                element: "earth",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(2);
                                if (playerBlockNumber.innerText == 0) {
                                        gainBlock(26);
                                }
                                fxStoneBarricade.play();
                        },
                        function() {
                                spendMana(2);
                                if (playerBlockNumber.innerText == 0) {
                                        gainBlock(40);
                                }
                                fxStoneBarricade.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Weave of Thorns",
                cardImg: "imgs/weave-of-thorns.jpeg",
                cardText: ["Gain 4 thorns", "Gain 6 thorns"],
                thorns: [4, 6],
                chooseEnemyCard: false,
                index: 44,
                element: "earth",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(1);
                                gainThorns(4);
                                fxWeaveOfThorns.play();
                        },
                        function() {
                                spendMana(1);
                                gainThorns(6);
                                fxWeaveOfThorns.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Vine Sheath",
                cardImg: "imgs/vine-sheath.jpeg",
                cardText: ["[Ethereal]<br>Double your thorns", "[Ethereal]<br>Triple your thorns."],
                chooseEnemyCard: false,
                index: 45,
                element: "earth",
                rarity: "rare",
                action:
                [
                        function() {
                                spendMana(2);
                                playerThornsNumber.innerText = parseFloat(playerThornsNumber.innerText) * 2;
                                fxVineSheath.play();
                        },
                        function() {
                                spendMana(2);
                                playerThornsNumber.innerText = parseFloat(playerThornsNumber.innerText) * 3;
                                fxVineSheath.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Vine Whip",
                cardImg: "imgs/vine-whip.jpeg",
                cardText: ["Deal damage equal to 2x your thorns", "Gain 3 thorns and deal damage equal to 2x your thorns"],
                thorns: [0, 3],
                chooseEnemyCard: true,
                index: 46,
                element: "earth",
                rarity: "rare",
                action:
                [
                        function() {
                                spendMana(2);
                                //damageEnemy(playerBlockNumber.innerText);
                                damageEnemy((playerThornsNumber.innerText * 2), chosenEnemy);
                                fxVineWhip.play();
                        },
                        function() {
                                spendMana(2);
                                gainThorns(3);
                                //damageEnemy(playerBlockNumber.innerText);
                                damageEnemy((playerThornsNumber.innerText * 2), chosenEnemy);
                                fxVineWhip.play();
                        }
                ]
        },
        {
                manaCost: [3, 3],
                name: "Gaia's Embrace",
                cardImg: "imgs/gaias-embrace.jpeg",
                cardText: ["[Ethereal]  [Aura]<br>All block gained is increased by 4 and thorns by 1", "[Ethereal]  [Aura]<br>Gain 20 block and 4 thorns. All block gained is increased by 4 and thorns by 1"],
                block: [0, 20],
                thorns: [0, 4],
                chooseEnemyCard: false,
                index: 47,
                element: "earth",
                rarity: "deific",
                action:
                [
                        function() {
                                spendMana(3);
                                gaiasEmbrace.push(true);
                                fxGaiasEmbrace.play();
                        },
                        function() {
                                spendMana(3);
                                gainBlock(20);
                                gainThorns(4);
                                gaiasEmbrace.push(true);
                                fxGaiasEmbrace.play();
                        }
                ]
        },
        {
                manaCost: [0, 1],
                name: "Essence Leech",
                cardImg: "imgs/essence-leech.jpeg",
                cardText: ["Energize 1 for each enemy burning", "Burn all enemies for 3 and Energize 1 for each enemy burning"],
                burn: [0, 3],
                energize: [1, 1],
                chooseEnemyCard: false,
                index: 48,
                element: "fire-lightning fire lightning",
                rarity: "common",
                action:
                [
                        function() {
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i]) {
                                                if (enemyBurnNumber[i].innerText > 0) {
                                                        gainEnergize(1)
                                                }
                                        }
                                }
                                fxEssenceLeech.play();
                        },
                        function() {
                                spendMana(1);
                                burnAllEnemies(3);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i]) {
                                                if (enemyBurnNumber[i].innerText > 0) {
                                                        gainEnergize(1)
                                                }
                                        }
                                }
                                fxEssenceLeech.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Frostfire Fusion",
                cardImg: "imgs/frostfire-fusion.jpeg",
                cardText: ["If the enemy is either burning or inflicted with frostbite they are inflicted with 6 burn and frostbite.", "If the enemy is either burning or inflicted with frostbite they are inflicted with 8 burn and frostbite."],
                burn: [6, 8],
                chooseEnemyCard: true,
                index: 49,
                element: "fire-ice fire ice",
                rarity: "common",
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
                cardImg: "imgs/fan-the-flames.jpeg",
                cardText: ["Inflict windswept on all enemies and increase burn count by 6 if they're already burning", "Inflict windswept on all enemies and increase burn count by 8 if they're already burning"],
                burn: [6, 8],
                chooseEnemyCard: false,
                index: 50,
                element: "fire-air fire air",
                rarity: "rare",
                action: 
                [
                        function() {
                                spendMana(2);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i]) {
                                                inflictWindswept(i);
                                                if (enemyBurnNumber[i].innerText > 0) {
                                                        burnEnemy(6, i);
                                                }
                                        }
                                }
                                fxFanTheFlames.play();
                        },
                        function() {
                                spendMana(2);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i]) {
                                                inflictWindswept(i);
                                                if (enemyBurnNumber[i].innerText > 0) {
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
                cardImg: "imgs/cauterize.jpeg",
                cardText: ["Gain 5 burn, 5 regenernation, and 1 blood siphon", "Gain 7 burn, 7 regeneration, and 2 blood siphon"],
                burn: [5, 7],
                regen: [5, 7],
                blood: [1, 2],
                chooseEnemyCard: false,
                index: 51,
                element: "fire-water fire water",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(1);
                                burnSelf(5);
                                displayBlock(playerBurnImg, playerBurnNumber);
                                gainBloodSiphon(1);
                                gainRegen(5);
                                fxCauterize.play();
                        },
                        function() {
                                spendMana(1);
                                burnSelf(7);
                                displayBlock(playerBurnImg, playerBurnNumber);
                                gainBloodSiphon(2);
                                gainRegen(7);
                                fxCauterize.play();
                        }
                ]
        },
        {
                manaCost: [3, 2],
                name: "Magma Blast",
                cardImg: "imgs/magma.jpeg",
                cardText: ["Inflict 6 burn on an enemy and gain block equal to 100% of their burn", "Inflict 6 burn on an enemy and gain block equal to 100% their burn"],
                burn: [6, 6],
                chooseEnemyCard: true,
                index: 52,
                element: "fire-earth fire earth",
                rarity: "rare",
                action: 
                [
                        function() {
                                spendMana(3);
                                burnEnemy(6, chosenEnemy);
                                gainBlock(parseFloat(enemyBurnNumber[chosenEnemy].innerText));
                                fxMagmaBlast.play();
                        },
                        function() {
                                spendMana(2);
                                burnEnemy(6, chosenEnemy);
                                gainBlock(parseFloat(enemyBurnNumber[chosenEnemy].innerText));
                                fxMagmaBlast.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Deep Freeze",
                cardImg: "imgs/deep-freeze.jpeg",
                cardText: ["Electrucute enemies with frostbite dealing damage equal to 10 times your current mana", "Electrucute enemies with frostbite dealing damage equal to 15 times your current mana"],
                damage: [0, 0],
                damageSecond: [10, 15],
                chooseEnemyCard: false,
                index: 53,
                element: "lightning-ice lightning ice",
                rarity: "rare",
                action:
                [
                        function() {
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i] && enemyFrostbite[i]) {
                                                damageEnemy(parseFloat(currentMana.innerText * 10), i);
                                        }
                                }
                                spendMana(1);
                                fxDeepFreeze.play();
                        },
                        function() {
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i] && enemyFrostbite[i]) {
                                                damageEnemy(parseFloat(currentMana.innerText * 15), i);
                                        }
                                }
                                spendMana(1);
                                fxDeepFreeze.play();
                        }
                ]
        },
        {
                manaCost: [6, 6],
                name: "Hurricane",
                cardImg: "imgs/hurricane.jpeg",
                cardText: ["Inflict windswept and deal 50 damage to all enemies. Draw a card, energize 1 and gain 2 mana.", "Inflict windswept and deal 50 damage to all enemies. Draw a card, energize 2 and gain 3 mana."],
                damage: [50, 50],
                energize: [1, 2],
                chooseEnemyCard: false,
                index: 54,
                element: "lightning-air lightning air",
                rarity: "rare",
                action:
                [
                        function() {
                                spendMana(6);
                                damageAllEnemies(50);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i]) {
                                                inflictWindswept(i);
                                        }
                                }
                                gainEnergize(1);
                                drawCards(1);
                                currentMana.innerText = parseFloat(currentMana.innerText) + 2;
                                fxHurricane.play();
                        },
                        function() {
                                spendMana(6);
                                damageAllEnemies(50);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i]) {
                                                inflictWindswept(i);
                                        }
                                }
                                drawCards(1);
                                currentMana.innerText = parseFloat(currentMana.innerText) + 3;
                                gainEnergize(2);
                                fxHurricane.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Electric Current",
                cardImg: "imgs/electric-current.jpeg",
                cardText: [`Deal damage based on your current health (25% of current health). Energize 1`, `Deal damage based on your current health (25% of current health). Energize 1 and gain 2 max health`],
                damage: [parseFloat(playerCurrentHealth.innerText) / 4, parseFloat(playerCurrentHealth.innerText) / 4],
                energize: [1, 1],
                chooseEnemyCard: true,
                index: 55,
                element: "lightning-water lightning water",
                rarity: "rare",
                action:
                [
                        function() {
                                spendMana(2);
                                gainEnergize(1);
                                damageEnemy(Math.floor(playerCurrentHealth.innerText / 4), chosenEnemy);
                                fxElectricCurrent.play();
                        },
                        function() {
                                spendMana(2);
                                gainEnergize(1);
                                playerMaxHealth.innerText = parseFloat(playerMaxHealth.innerText) + 2;
                                damageEnemy(Math.floor(playerCurrentHealth.innerText / 4), chosenEnemy);
                                fxElectricCurrent.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Energy Aegis",
                cardImg: "imgs/energy-aegis.jpeg",
                cardText: ["Energize 1<br>Gain 8 block for each energize you have", "Energize 2<br>Gain 8 block for each energize you have"],
                energize: [1, 2],
                block: [8, 8],
                chooseEnemyCard: false,
                index: 56,
                element: "lightning-earth lightning earth",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(1);
                                gainEnergize(1);
                                gainBlock(parseFloat(playerEnergizeNumber.innerText) * 8);
                                fxEnergyAegis.play();
                        },
                        function() {
                                spendMana(1);
                                gainEnergize(2);
                                gainBlock(parseFloat(playerEnergizeNumber.innerText) * 8);
                                fxEnergyAegis.play();
                        }
                ]
        },
        {
                manaCost: [2, 1],
                name: "Flurry",
                cardImg: "imgs/flurry.jpeg",
                cardText: ["Inflict windswept and frostbite to everyone", "Inflict windswept and frostbite to everyone"],           
                chooseEnemyCard: false,
                index: 57,
                element: "ice-air ice air",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(2);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i]) {
                                                inflictWindswept(i);
                                                inflictFrostbite(i);
                                        }  
                                }
                                frostbiteSelf();
                                playerWindswept = true;
                                displayBlock(playerWindsweptImg);
                                fxFlurry.play();
                        },
                        function() {
                                spendMana(1);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i]) {
                                                inflictWindswept(i);
                                                inflictFrostbite(i);  
                                        }  
                                }
                                frostbiteSelf();
                                playerWindswept = true;
                                displayBlock(playerWindsweptImg);
                                fxFlurry.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Liquify",
                cardImg: "imgs/liquify.jpeg",
                cardText: ["Gain 2 regeneration for everyone afflicted with frostbite", "Inflict everyone with frostbite then gain 2 regeneration for everyone afflicted with frostbite"],
                regen: [2, 2],
                chooseEnemyCard: false,
                index: 58,
                element: "ice-water ice water",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(1);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i] && enemyFrostbite[i]) {
                                                gainRegen(2);
                                        }      
                                }
                                if (playerFrostbite) {
                                        gainRegen(2);
                                }  
                                fxLiquify.play();
                        },
                        function() {
                                spendMana(1);
                                inflictAllFrostbite();
                                frostbiteSelf();
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i] && enemyFrostbite[i]) {
                                                gainRegen(2);
                                        }      
                                }
                                if (playerFrostbite) {
                                        gainRegen(2);
                                }
                                fxLiquify.play();
                        }
                ]
        },
        {
                manaCost: [2, 2],
                name: "Frozen Tundra",
                cardImg: "imgs/frozen-tundra.jpeg",
                cardText: ["Inflict everyone with frostbite and gain 5 block for everyone inflicted", "Inflict everyone with frostbite and gain 7 block for everyone inflicted"],
                block: [5, 7],
                chooseEnemyCard: false,
                index: 59,
                element: "ice-earth ice earth",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(2);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i] && !enemyFrostbite[i]) {
                                                gainBlock(5);
                                                inflictFrostbite(i);      
                                        }      
                                }
                                if (!playerFrostbite) {
                                        gainBlock(5);
                                        frostbiteSelf();
                                }
                                fxFrozenTundra.play();
                        },
                        function() {
                                spendMana(2);
                                for (let i = 0; i < numberOfEnemies; i++) {
                                        if (!enemyIsDead[i] && !enemyFrostbite[i]) {
                                                gainBlock(5);
                                                inflictFrostbite(i);      
                                        }      
                                }
                                if (!playerFrostbite) {
                                        gainBlock(7);
                                        frostbiteSelf();
                                }
                                fxFrozenTundra.play();
                        }
                ]
        },
        {
                manaCost: [1, 1],
                name: "Air Bubbles",
                cardImg: "imgs/air-bubbles.jpeg",
                cardText: ["Gain 1 regen for each card played this turn", "Gain 1 regen for each card played this turn and draw a card"],
                regen: [1, 1],
                chooseEnemyCard: false,
                index: 60,
                element: "air-water air water",
                rarity: "common",
                action:
                [
                        function() {
                                spendMana(1);
                                airBubble.push(true);
                                fxAirBubbles.play();
                        },
                        function() {
                                spendMana(1);
                                drawCards(1);
                                airBubble.push(true);
                                fxAirBubbles.play();
                        }
                ]
        },
        {
                manaCost: [0, 0],
                name: "Rock Orbit",
                cardImg: "imgs/rock-orbit.jpeg",
                cardText: ["Gain 4 block and draw a card", "Gain 7 block and draw a card"],
                block: [4, 7],
                chooseEnemyCard: false,
                index: 61,
                element: "air-earth air earth",
                rarity: "common",
                action:
                [
                        function() {
                                gainBlock(4);
                                drawCards(1);
                                fxRockOrbit.play();
                        },
                        function() {
                                gainBlock(7);
                                drawCards(1);
                                fxRockOrbit.play();
                        }
                ]
        },
        {
                manaCost: [4, 4],
                name: "Terra's Blessing",
                cardImg: "imgs/terras-blessing.jpeg",
                cardText: ["[Ethereal]<br>Gain 3 block and healing at the end of each turn", "[Ethereal]<br>Gain 5 block and healing at the end of each turn"],
                chooseEnemyCard: false,
                index: 62,
                element: "water-earth water earth",
                rarity: "deific",
                action:
                [
                        function() {
                                spendMana(4);
                                terrasBlessing.push(true);
                                fxGaiasEmbrace.play();
                        },
                        function() {
                                spendMana(4);
                                terrasBlessingEmpowered.push(true);
                                fxGaiasEmbrace.play();
                        }
                ]
        },
        {
                manaCost: [0, 0],
                name: "Avarice",
                cardImg: "imgs/avarice.jpeg",
                cardText: ["Your greed causes you to look down upon peasants", "Your greed causes you to look down upon peasants...and enslave them gaining 20 aether"],
                chooseEnemyCard: false,
                index: 63,
                element: "avarice",
                rarity: "unique",
                action:
                [
                        function() {
                                
                        },
                        function() {
                                playerAether.innerText = parseFloat(playerAether.innerText) + 20;
                        }
                ]
        },        
        {
                manaCost: [2, 1],
                name: "Celestial Attunement",
                cardImg: "imgs/celestial-attunement.jpeg",
                cardText: ["Inflict frostbite, windswept, and 4 burn. Gain 1 energize and blood siphon, and 8 block", "Inflict frostbite, windswept, and 4 burn. Gain 1 energize and blood siphon, and 8 block"],
                burn: [4, 4],
                energize: [1, 1],
                blood: [1, 1],
                block: [8, 8],
                chooseEnemyCard: true,
                index: 64,
                element: "celestial",
                rarity: "unique",
                action:
                [
                        function() {
                                spendMana(2);
                                inflictFrostbite(chosenEnemy);
                                inflictWindswept(chosenEnemy);
                                burnEnemy(4, chosenEnemy);
                                gainEnergize(1);
                                gainBloodSiphon(1);
                                gainBlock(8);
                                fxCelestialAttunement.play();
                        },
                        function() {
                                spendMana(1);
                                inflictFrostbite(chosenEnemy);
                                inflictWindswept(chosenEnemy);
                                burnEnemy(4, chosenEnemy);
                                gainEnergize(1);
                                gainBloodSiphon(1);
                                gainBlock(8);
                                fxCelestialAttunement.play();
                        }
                ]
        },        
        {
                manaCost: [2, 2],
                name: "Wine",
                cardImg: "imgs/wine.jpeg",
                cardText: ["Gain 2 blood siphon<br>Your water cards turned into wine! You feel this would pair well with some bread...", "Gain 2 blood siphon<br>Your water cards turned into wine! You feel this would pair well with some bread..."],
                blood: [2, 2],
                chooseEnemyCard: false,
                index: 65,
                element: "wine",
                rarity: "unique",
                action:
                [
                        function() {
                                spendMana(2);
                                gainBloodSiphon(2);
                                fxPotion.play();
                        },
                        function() {
                                spendMana(2);
                                gainBloodSiphon(2);
                                fxPotion.play();
                        }
                ]
        },        
];
//  CARD CREATION FUNCTION TO ADD TO HTML
function createCard(index, innerLocation, cardClass, cardText, upgradeIndex) {
        let element, element2;
        switch (index) {
                case 0: case 1: case 12: case 13: case 14: case 15: case 16: case 17:
                        element = "fire";
                        break;
                case 2: case 3: case 18: case 19: case 20: case 21: case 22: case 23:
                        element = "energize";
                        break;
                case 4: case 5: case 24: case 25: case 26: case 27: case 28: case 29:
                        element = "ice";
                        break;
                case 6: case 7: case 30: case 31: case 32: case 33: case 34: case 35:
                        element = "windswept";
                        break;
                case 8: case 9: case 36: case 37: case 38: case 39: case 40: case 41:
                        element = "regen";
                        break;
                case 10: case 11: case 42: case 43: case 44: case 45: case 46: case 47:
                        element = "earth";
                        break;
                case 48:
                        element = "fire";
                        element2 = "energize";
                        break;
                case 49:
                        element = "fire";
                        element2 = "ice";
                        break;
                case 50:
                        element = "windswept";
                        element2 = "fire";
                        break;
                case 51:
                        element = "fire";
                        element2 = "regen";
                        break;
                case 52:
                        element = "fire";
                        element2 = "earth";
                        break;
                case 53:
                        element = "ice";
                        element2 = "energize";
                        break;
                case 54:
                        element = "windswept";
                        element2 = "energize";
                        break;
                case 55:
                        element = "regen";
                        element2 = "energize";
                        break;
                case 56:
                        element = "energize";
                        element2 = "earth";
                        break;
                case 57:
                        element = "windswept";
                        element2 = "ice";
                        break;
                case 58:
                        element = "ice";
                        element2 = "regen";
                        break;
                case 59:
                        element = "ice";
                        element2 = "earth";
                        break;
                case 60:
                        element = "windswept";
                        element2 = "regen";
                        break;
                case 61:
                        element = "windswept";
                        element2 = "earth";
                        break;
                case 62:
                        element = "regen";
                        element2 = "earth";
                        break;
                case 63:
                        element = "aether";
                        break;
                case 64:
                        element = "celestial";
                        break;
                case 65:
                        element = "wine";
                        break;
        }
        innerLocation.innerHTML +=
        `<div class="${cardClass} ${cardsInformation[index].element} ${cardsInformation[index].rarity} ${index}">
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
// SET CARDS TO ACTIVATE WHEN CLICKED RATHER THAN WHEN ENEMY IS CLICKED
let chooseEnemyCard = false;
let [...openingCards] = document.querySelectorAll(".card");
let handArray = [];
let drawPileArray = openingCards.toSorted(() => 0.5 - Math.random());
let discardPileArray = [];
let destroyedCardsArray = [];
let maxHandLength = 5;

function drawCards(numberOfCards) {
        if (numberOfCards !== maxHandLength && aeroshift) {
                numberOfCards++;
        }
        if (handArray.length + numberOfCards > 10) {
                drawCards(10 - handArray.length);
        }
        // IF DRAW PILE CANT FILL HAND
        if (drawPileArray.length < numberOfCards) {
                // RESHUFFLE CARDS IN DISCARD PILE
                discardPileArray = discardPileArray.toSorted(() => 0.5 - Math.random());
                // STORE DISCARD PILE LENGTH THEN SHIFT CARDS FROM DISCARD PILE TO DRAW PILE
                let cardsInDiscardPile = discardPileArray.length;
                for (let i = 0; i < cardsInDiscardPile; i++) {
                        drawPileArray.push(discardPileArray.shift());
                }     
                //console.log(`REDRAW\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        }
        // SHIFT CARDS FROM DRAW PILE TO HAND
        for (let i = 0; i < numberOfCards; i++) {
                handArray.unshift(drawPileArray.shift());
                displayFlex(handArray[0]);
        }
        handContainer.style = `width: ${handArray.length - 1}9.5%`;
        updateCardText();
        //console.log(`DRAW TO HAND\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        //console.log(handArray);
}
// GET NEW SET OF 5 CARDS AT THE END OF EACH TURN
let cardsInHand;
function addCardsToHand() {
        //console.log(`BEFORE\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        cardsInHand = handArray.length;
        for (let i = 0; i < cardsInHand; i++) {
                discardPileArray.unshift(handArray.shift());
                displayNone(discardPileArray[0]);
        }
        //console.log(`HAND TO DISCARD\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        drawCards(maxHandLength);      
}
function reshuffleCards() {
        //console.log(`RESHUFFLE CARDS\nBEFORE\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        let cardsInHand = handArray.length;
        for (let i = 0; i < cardsInHand; i++) {
                drawPileArray.unshift(handArray.shift());
        }
        //console.log(`RESHUFFLE CARDS\nHAND TO DRAW\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        let cardsInDiscardPile = discardPileArray.length;
        for (let i = 0; i < cardsInDiscardPile; i++) {
                drawPileArray.unshift(discardPileArray.shift());
        }
        for (let i = 0; i < drawPileArray.length; i++) {
                displayNone(drawPileArray[i]);
        }
        //console.log(`RESHUFFLE CARDS\nDISCARD TO DRAW\nDraw Pile: ${drawPileArray.length}\nHand Pile: ${handArray.length}\nDiscard Pile: ${discardPileArray.length}`);
        // RESHUFFLE CARDS IN DRAW PILE
        drawPileArray = drawPileArray.toSorted(() => 0.5 - Math.random());
}
// TRIGGER SO YOU CANT CLICK CARD MULTIPLE TIMES TO APPLY CARD EFFECT MULTIPLE TIMES ON ENEMY
let cardClicked = false;
let etherealCards = [];
let etherealCardsContainer = document.querySelector("#potion-cards-container");
// VARIABLE FOR ENSURING YOU CANT PLAY A CARD AFTER ENDING YOUR TURN
let turnEnded = false;
// ADD EVENTLISTENERS TO ALL CARDS, STORE CHOSEN CARD IN VARIABLE, PICK ENEMY WHO WILL RECIEVE CARD ACTION
function addCardListeners(cardType, index, CIindex, upgradeIndex) {
        function addToDiscard() {
                let spliceCard = handArray.splice(handArray.indexOf(cardType[index]), 1).pop();
                if (CIindex === 15 || CIindex === 17 || CIindex === 23 || CIindex === 29 || (CIindex === 34 && upgradeIndex === 0) || CIindex === 35 || CIindex === 39 || CIindex === 41 || CIindex === 45 || CIindex === 47 || CIindex === 62) {
                        etherealCards.push(cardType[index]);
                        etherealCardsContainer.appendChild(cardType[index]);
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
                        updateCardText();
                        addToDiscard();
                        handContainer.style = `width: ${handArray.length - 1}9.5%`;
                        checkHealth();
                        if (airBubble.length > 0 && !playerFrostbite) {
                                playerRegenNumber.innerText = parseFloat(playerRegenNumber.innerText) + airBubble.length;
                                displayBlock(playerRegenImg, playerRegenNumber);
                        }
                        //console.log("UPDATING CARD TEXT");
                        document.querySelectorAll(".enemy-div").forEach(i => {
                                i.style.cursor = "default";
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
                                if (cardType[index].classList.contains("fire")) {
                                        cardType[index].classList.add("card-clicked-fire");
                                } else if (cardType[index].classList.contains("lightning")) {
                                        cardType[index].classList.add("card-clicked-lightning");
                                } else if (cardType[index].classList.contains("ice")) {
                                        cardType[index].classList.add("card-clicked-ice");
                                } else if (cardType[index].classList.contains("air")) {
                                        cardType[index].classList.add("card-clicked-air");
                                } else if (cardType[index].classList.contains("water")) {
                                        cardType[index].classList.add("card-clicked-water");
                                } else if (cardType[index].classList.contains("earth")) {
                                        cardType[index].classList.add("card-clicked-earth");
                                } else if (cardType[index].classList.contains("unique")) {
                                        cardType[index].classList.add("card-clicked-unique");
                                }
                                chooseEnemy();
                        } else {
                                removeCardClicked();
                                if (cardType[index].classList.contains("fire")) {
                                        cardType[index].classList.add("card-clicked-fire");
                                } else if (cardType[index].classList.contains("lightning")) {
                                        cardType[index].classList.add("card-clicked-lightning");
                                } else if (cardType[index].classList.contains("ice")) {
                                        cardType[index].classList.add("card-clicked-ice");
                                } else if (cardType[index].classList.contains("air")) {
                                        cardType[index].classList.add("card-clicked-air");
                                } else if (cardType[index].classList.contains("water")) {
                                        cardType[index].classList.add("card-clicked-water");
                                } else if (cardType[index].classList.contains("earth")) {
                                        cardType[index].classList.add("card-clicked-earth");
                                } else if (cardType[index].classList.contains("unique")) {
                                        cardType[index].classList.add("card-clicked-unique");
                                }
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
                        i.style.cursor = "crosshair";
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
                                if (!enemyIsDead[i]) {
                                        enemy[i].removeEventListener("click", clickEnemy);   
                                }     
                        }
                }
        }
}
function removeCardClicked() {
        let elements = ["fire", "lightning", "ice", "air", "water", "earth", "unique"];
        for (let i = 0; i < handArray.length; i++) {
                elements.forEach(j => {
                        if (handArray[i].classList.contains(`card-clicked-${j}`)) {
                                handArray[i].classList.remove(`card-clicked-${j}`);
                                
                        }
                });
        }
        for (let i = 0; i < drawPileArray.length; i++) {
                elements.forEach(j => {
                        if (drawPileArray[i].classList.contains(`card-clicked-${j}`)) {
                                drawPileArray[i].classList.remove(`card-clicked-${j}`);
                        }
                });
        }
        for (let i = 0; i < discardPileArray.length; i++) {
                elements.forEach(j => {
                        if (discardPileArray[i].classList.contains(`card-clicked-${j}`)) {
                                discardPileArray[i].classList.remove(`card-clicked-${j}`);
                        }
                });
        }
}
function addCardToDeck(newRandomCard, upgradeIndex, switchToMap) {
        //console.log("CREATING CARD NEW RANDOM CARD", newRandomCard);
        chooseNewCardDiv.innerHTML = ``;
        displayNone(chooseNewCardContainer);
        //console.log("UPGRADE INDEX: ", upgradeIndex);
        createCard(newRandomCard, destroyedCardsContainer, "card", "card-text", upgradeIndex);
        let currentCards = document.querySelectorAll(".card");
        //console.log("1 currentCards", currentCards);
        let newCardsText = document.querySelectorAll(".card-text");
        if (upgradeIndex === 1) {
                currentCards[currentCards.length - 1 - etherealCards.length].classList.add("upgraded");
                newCardsText[[currentCards.length - 1 - etherealCards.length]].classList.add("upgraded-text");
        }
        addCardListeners(currentCards, [currentCards.length - 1 - etherealCards.length], newRandomCard, upgradeIndex);
        handContainer.appendChild(currentCards[currentCards.length - 1 - etherealCards.length]);
        handArray.push(currentCards[currentCards.length - 1 - etherealCards.length]);//changed drawpilearray to handarray
        //console.log("2 currentCards[currentCards.length - 1 - etherealCards.length]", currentCards[currentCards.length - 1 - etherealCards.length]);
        if (switchToMap) {
                switchArea(map, arena);
                document.querySelectorAll(".relic-img-text").forEach(i => {
                        displayNone(i);
                });
                destroyReferenceCards();
        }
}        
// GET A SELECTION OF 4 CARDS WHEN ENEMIES ARE DEFEATED
function getRandomNewCards () {
        document.getElementById("skip-button").addEventListener("click", () => {
                chooseNewCardDiv.innerHTML = ``;
                displayNone(chooseNewCardContainer);
                document.querySelectorAll(".relic-img-text").forEach(i => {
                        displayNone(i);
                });
                switchArea(map, arena);
        });
        arena.classList.add("dim");
        let commonCards = [];
        let rareCards = [];
        let deificCards = [];
        cardsInformation.forEach(j => {
                if (j.rarity === "common") {
                        commonCards.push(j.index);
                } else if (j.rarity === "rare") {
                        rareCards.push(j.index);
                } else if (j.rarity === "deific") {
                        deificCards.push(j.index);
                }
        });
        // GET FOUR NEW RANDOM CARDS FROM ALL REFERENCE CARDS
        let newRandomCards = [];
        for (let i = 0; i < 4; i++) {
                let getCardRarity = createRandomNumber(0, 100);
                if (getCardRarity <= 60) {
                        let newCommonCard = commonCards[Math.floor(Math.random() * commonCards.length)];
                        while (newRandomCards.includes(newCommonCard)) {
                                newCommonCard = commonCards[Math.floor(Math.random() * commonCards.length)];
                        }
                        newRandomCards[i] = newCommonCard;
                } else if (getCardRarity <= 85) {
                        let newRareCard = rareCards[Math.floor(Math.random() * rareCards.length)];
                        while (newRandomCards.includes(newRareCard)) {
                                newRareCard = rareCards[Math.floor(Math.random() * rareCards.length)];
                        }
                        newRandomCards[i] = newRareCard;
                } else {
                        let newDeificCard = deificCards[Math.floor(Math.random() * deificCards.length)];
                        while (newRandomCards.includes(newDeificCard)) {
                                newDeificCard = deificCards[Math.floor(Math.random() * deificCards.length)];
                        }
                        newRandomCards[i] = newDeificCard;
                }
        }
        // ADD REFERENCE CARDS TO CHOOSE NEW CARD DIV
        createCard(newRandomCards[0], chooseNewCardDiv, "card-reference", "card-text", 0);
        createCard(newRandomCards[1], chooseNewCardDiv, "card-reference", "card-text", 0);
        createCard(newRandomCards[2], chooseNewCardDiv, "card-reference", "card-text", 0);
        createCard(newRandomCards[3], chooseNewCardDiv, "card-reference", "card-text", 0);
        let newCardChoices = document.querySelectorAll(".card-reference");
        //console.log("NEW CARD CHOICES", newCardChoices);
        displayFlex(chooseNewCardContainer, newCardChoices[0], newCardChoices[1], newCardChoices[2], newCardChoices[3]);
        newCardChoices[0].addEventListener("click", () => {addCardToDeck(newRandomCards[0], 0, true)});
        newCardChoices[1].addEventListener("click", () => {addCardToDeck(newRandomCards[1], 0, true)});
        newCardChoices[2].addEventListener("click", () => {addCardToDeck(newRandomCards[2], 0, true)});
        newCardChoices[3].addEventListener("click", () => {addCardToDeck(newRandomCards[3], 0, true)});
        return;
}
function displayCardPiles(container, pile) {
        displayFlex(container);
        arena.classList.add("dim2");
        pile.forEach((i) => {
                for (let j = 0; j < cardsInformation.length; j++) {
                        if (i.classList.contains(j)) {
                                createCard(j, container, "card-reference", "card-text", 0);
                        }
                }
        });
        document.querySelectorAll(".card-reference").forEach(i => {
                displayFlex(i);
        });
        displayNone(chooseNewCardContainer);
}
function removeCardPiles(pile) {
        pile.innerHTML = ``;
        displayNone(pile);
        if (enemiesAlive === 0) {
                displayFlex(chooseNewCardContainer);
        } else {
                destroyReferenceCards();
        }
        arena.classList.remove("dim2");
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
const playerTempiasFuryImg = document.querySelector("#player-tempias-fury-img");
const playerGlaciasSoulImg = document.querySelector("#player-glacias-soul-img");
const playerBurnDiv = document.querySelector("#player-burn-div");
const playerEnergizeDiv = document.querySelector("#player-energize-div");
const playerRegenDiv = document.querySelector("#player-regen-div");
const playerBloodDiv = document.querySelector("#player-blood-div");
const playerThornsDiv = document.querySelector("#player-thorns-div");
const playerTidalDiv = document.querySelector("#player-tidal-div");
const playerManaDiv = document.querySelector("#mana-bar-div");
const playerTempiasFuryDiv = document.querySelector("#player-tempias-fury-div");
const playerGlaciasSoulDiv = document.querySelector("#player-glacias-soul-div");
const playerImgText = document.querySelectorAll(".player-img-text");
const orbImgText = document.querySelectorAll(".orb-img-text");
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
addActionText(playerTempiasFuryDiv, playerImgText[8]);
addActionText(playerGlaciasSoulDiv, playerImgText[9]);
addActionText(playerManaDiv, playerImgText[10]);
playerImgText[10].style = "margin-top: -10rem";

let frostbitten = false;
// TRACK WHEN END TURN BUTTON HAS BEEN CLICKED
endTurnButton.addEventListener("click", endTurn);
// CARD FUNCTIONS WHEN CARD IS PLAYED
function spendMana(manaCost) {
        currentMana.innerText -= manaCost;
}
let icyEmbuementTrigger = false;
let staticChargeTrigger = false;
let tempiasFuryTrigger = false;
function damageEnemy(damage, enemy) {
        // DAMAGE ALL ENEMIES IF ICY EMBUEMENT HAS BEEN PLAYED
        if (icyEmbuement && !icyEmbuementTrigger) {
                icyEmbuementTrigger = true;
                damageAllEnemies(damage, i);
        } else {
                if (!enemyIsDead[enemy]) {
                        if (stormForm) {
                                damage += stormForm.length * 5;
                        }
                        if (stormFormEmpowered) {
                                damage += stormFormEmpowered * 10;
                        }
                        if (iceSpear && enemyFrostbite[enemy]) {
                                damage += 4;
                        }
                        // IF ATTACK DEBUFF IS ACTIVE, CUT DAMAGE IN HALF
                        if (playerWindswept) {
                                damage = Math.floor(damage * .50);
                        }
                        if (staticCharge) {
                                damage += 10;
                                displayNone(playerTidalImbuementImg);
                                if (!staticChargeTrigger) {
                                        staticCharge = false;
                                }
                        }
                        if ((enemyCurrentHealth[enemy].innerText + enemyBlockNumber[enemy].innerText) < damage) {
                                damage = enemyCurrentHealth[enemy].innerText + enemyBlockNumber[enemy].innerText;
                        }
                        if (tempiasFury) {
                                inflictWindswept(enemy);
                                displayNone(playerTempiasFuryImg);
                                if (!tempiasFuryTrigger) {
                                        tempiasFury = false;
                                }
                        }
                        if (enemyFade[enemy]) {
                                damage = 0;
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
                                //console.log("Health before blood: ", playerCurrentHealth.innerText);
                                playerHeal(Math.floor((damage * healPercentage)));
                                //console.log("Health after blood: ", playerCurrentHealth.innerText);
                        }
                        // TAKE DAMAGE AWAY FROM BLOCK BEFORE HEALTH
                        if (enemyBlockNumber[enemy].innerText == 0) {
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
                       //console.log("Health before thorns: ", playerCurrentHealth.innerText);
                        if (playerBlockNumber.innerText <= 0) {
                                playerCurrentHealth.innerText -= parseFloat(enemyThornsNumber[enemy].innerText);
                                topBarHealthNumber.innerText -= parseFloat(enemyThornsNumber[enemy].innerText);
                                damageTakenThisTurn += parseFloat(enemyThornsNumber[enemy].innerText);
                                displayNone(playerBlockImg, playerBlockNumber);
                        } else if (playerBlockNumber.innerText <= parseFloat(enemyThornsNumber[enemy].innerText)) {
                                playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) - (parseFloat(enemyThornsNumber[enemy].innerText) - parseFloat(playerBlockNumber.innerText));
                                topBarHealthNumber.innerText -= parseFloat(enemyThornsNumber[enemy].innerText) - parseFloat(playerBlockNumber.innerText);
                                damageTakenThisTurn += (parseFloat(enemyThornsNumber[enemy].innerText) - parseFloat(playerBlockNumber.innerText));
                                playerBlockNumber.innerText = 0;
                                //console.log("Health after thorns: ", playerCurrentHealth.innerText);
                        } else {
                                playerBlockNumber.innerText -= parseFloat(enemyThornsNumber[enemy].innerText);
                        }
             
                        checkHealth();
                        // IF ENEMY IS DEAD, DELETE THEM
                        checkIfEnemyDead();
                        damageThisTurn += damage;
                }
        }
        if (enemy === (numberOfEnemies - 1)) {
                if (icyEmbuementTrigger) {
                        icyEmbuementTrigger = false;
                }

        }
        return damage;
}
function damageAllEnemies(damage) {
        if (icyEmbuement) {
                icyEmbuementTrigger = true;
        }
        if (tempiasFury) {
                tempiasFuryTrigger = true;
        }
        if (staticCharge) {
                staticChargeTrigger = true;
        }
        for (let i = 0; i < numberOfEnemies; i++) {
                damageEnemy(damage, i);
        }
        tempiasFury = false;
        tempiasFuryTrigger = false;
        staticCharge = false;
        staticChargeTrigger = false; 
}
function inflictWindswept(enemy) {
        if (!enemyWindswept[enemy]) {
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
        checkIfEnemyDead();
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
                                playerNumber.innerText = parseFloat(playerNumber.innerText) + parseFloat(buff[enemy].innerText);
                                total += buff[enemy].innerText;
                                buff[enemy].innerText = 0;
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
        }
}
function inflictFrostbite(enemy) {
        if (icyEmbuement && !icyEmbuementTrigger) {
                icyEmbuementTrigger = true;
                inflictAllFrostbite();
        } else {
                if (!enemyIsDead[enemy] && !enemyFrostbite[enemy]) {
                        if (frostHeart) {
                                gainBlock(4);
                                blockTotal += 4;
                        }
                        if (cryocast) {
                                leechBuffs(enemy, true);
                        }
                        if (siphonHeat) {
                                let buffSteal = .50;
                                if (siphonHeatEmpowered) {
                                        buffSteal = 1;
                                }
                                if (enemyBlockActionNumber[enemy].innerText > 0) {
                                        playerBlockNumber.innerText = parseFloat(playerBlockNumber.innerText) + Math.ceil(enemyBlockActionNumber[enemy].innerText * buffSteal);
                                        displayBlock(playerBlockImg, playerBlockNumber);
                                } else if (enemyRegenActionNumber[enemy].innerText > 0) {
                                        playerRegenNumber.innerText = parseFloat(playerRegenNumber.innerText) + Math.ceil(enemyRegenActionNumber[enemy].innerText * buffSteal);
                                        displayBlock(playerRegenImg, playerRegenNumber);
                                } else if (enemyBloodActionNumber[enemy].innerText > 0) {
                                        playerBloodNumber.innerText = parseFloat(playerBloodNumber.innerText) + Math.ceil(enemyBloodActionNumber[enemy].innerText * buffSteal);
                                        displayBlock(playerBloodImg, playerBloodNumber);
                                } else if (enemyThornsActionNumber[enemy].innerText > 0) {
                                        playerThornsNumber.innerText = parseFloat(playerThornsNumber.innerText) + Math.ceil(enemyThornsActionNumber[enemy].innerText * buffSteal);
                                        displayBlock(playerThornsImg, playerThornsNumber);
                                }
                                if (!icyEmbuement) {
                                        siphonHeat = false;
                                }
                        }
                        if (icyEmbuement) {
                                frostbiteSelf();
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
        if (icyEmbuementTrigger && enemy === (numberOfEnemies - 1)) {
                icyEmbuementTrigger = false;
                siphonHeat = false;
        }
}
function inflictAllFrostbite() {
        for (let i = 0; i < numberOfEnemies; i++) {
                inflictFrostbite(i);
        }
}
function frostbiteSelf() {
        if (!playerFrostbite) {
                if (frostHeart) {
                        gainBlock(4);
                        blockTotal += 4;
                }
                if (winterWarrior) {
                        winterWarriorTracking[3] = true;
                }
                playerFrostbite = true;
                displayBlock(playerFrostbiteImg);
                frostbiteTotal++;
        }
}
let [enemiesKilled, elitesKilled, bossesKilled, burnTotal, manaEnergized, frostbiteTotal, windsweptTotal, healthRestoredTotal, blockTotal, thornsTotal] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function checkHealth() {
        if (parseFloat(playerCurrentHealth.innerText) > parseFloat(playerMaxHealth.innerText))  {
                //console.log("Health before overmax: ", playerCurrentHealth.innerText);
                playerCurrentHealth.innerText = playerMaxHealth.innerText;
                topBarHealthNumber.innerText = playerMaxHealth.innerText;
                //console.log("Health after overmax: ", playerCurrentHealth.innerText);
        }
        for (let i = 0; i < numberOfEnemies.length; i++) {
                if (!enemyIsDead[i]) {
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
        //console.log("Health before healing: ", playerCurrentHealth.innerText);
        playerCurrentHealth.innerText = parseFloat(playerCurrentHealth.innerText) + parseFloat(amount);
        topBarHealthNumber.innerText = parseFloat(topBarHealthNumber.innerText) + parseFloat(amount);
        healthGainedThisFight += parseFloat(amount);
        healthRestoredTotal += parseFloat(amount);
        //console.log("Health after healing: ", playerCurrentHealth.innerText);
        checkHealth();
}
function gainEnergize (amount) {
        if (surgebinder) {
                amount *= 2;
        }
        if (frostbitten && playerFrostbite) {
                amount = Math.floor(amount * 1.5);
        } else if (playerFrostbite) {
                amount = Math.floor(amount * .50);
        }
        playerEnergizeNumber.innerText = parseFloat(playerEnergizeNumber.innerText) + amount;
        displayBlock(playerEnergizeImg, playerEnergizeNumber);
        manaEnergized += amount;
}
function gainBlock(amount) {
        if (gaiasEmbrace.length > 0) {
                amount += gaiasEmbrace.length * 4;
        }
        if (frostbitten && playerFrostbite) {
                amount = Math.floor(amount * 1.5);
        } else if (playerFrostbite) {
                amount = Math.floor(amount * .50);
        }
        playerBlockNumber.innerText = parseFloat(playerBlockNumber.innerText) + amount;
        displayBlock(playerBlockImg, playerBlockNumber);
        blockTotal += amount;
}
function gainThorns(amount) {
        if (gaiasEmbrace.length > 0) {
                amount += gaiasEmbrace.length;
        }
        if (frostbitten && playerFrostbite) {
                amount = Math.floor(amount * 1.5);
        } else if (playerFrostbite) {
                amount = Math.floor(amount * .50);
        }
        playerThornsNumber.innerText = parseFloat(playerThornsNumber.innerText) + amount;
        displayBlock(playerThornsNumber, playerThornsImg);
        thornsTotal += amount;
}
function burnSelf(burn) {
        if (essenceOfEmber.length > 0) {
                burn += essenceOfEmber.length * 1;
        }
        if (essenceOfEmberEmpowered.length > 0) {
                burn += essenceOfEmberEmpowered.length * 2;
        }
        if (playerWindswept) {
                burn = Math.floor(burn * .5);
        }
        if (ringOfFire) {
                for (let i = 0; i < numberOfEnemies; i++) {
                        if (!enemyIsDead[i]) {
                                enemyBurnNumber[i].innerText = parseFloat(enemyBurnNumber[i].innerText) + Math.floor(burn / 2);
                                displayBlock(enemyBurnImg[i], enemyBurnNumber[i]);
                        }
                }
        }
        playerBurnNumber.innerText = parseFloat(playerBurnNumber.innerText) + burn;
        displayBlock(playerBurnImg, playerBurnNumber);
        burnTotal += burn;
}
function burnEnemy(burn, enemy) {
        if (essenceOfEmber.length > 0) {
                burn += essenceOfEmber.length * 1;
        }
        if (essenceOfEmberEmpowered.length > 0) {
                burn += essenceOfEmberEmpowered.length * 2;
        }
        if (concentratedFireTracking[enemy]) {
                burn = Math.floor(burn * 1.5);
                concentratedFireTracking[enemy] = false;
        }
        if (concentratedFire) {
                concentratedFireTracking[enemy] = true;
        }
        if (playerWindswept) {
                burn = Math.floor(burn * .5);
        }
        if (ringOfFire) {
                for (let i = 0; i < numberOfEnemies; i++) {
                        if (!enemyIsDead[i]) {
                                enemyBurnNumber[i].innerText = parseFloat(enemyBurnNumber[i].innerText) + Math.floor(burn / 2);
                                displayBlock(enemyBurnImg[i], enemyBurnNumber[i]);
                        }
                }
                enemyBurnNumber[enemy].innerText = parseFloat(enemyBurnNumber[enemy].innerText) - Math.floor(burn / 2);
        }
        enemyBurnNumber[enemy].innerText = parseFloat(enemyBurnNumber[enemy].innerText) + burn;
        displayBlock(enemyBurnImg[enemy], enemyBurnNumber[enemy]);
        burnTotal += burn;
}
function burnAllEnemies(burn) {
        for (let i = 0; i < numberOfEnemies; i++) {
                if (!enemyIsDead[i]) {
                        burnEnemy(burn, i);
                }
        }
}
function gainRegen(amount) {
        if (frostbitten && playerFrostbite) {
                amount = Math.floor(amount * 1.5);
        } else if (playerFrostbite) {
                amount = Math.floor(amount * .50);
        }
        playerRegenNumber.innerText = parseFloat(playerRegenNumber.innerText) + amount;
        displayBlock(playerRegenNumber, playerRegenImg);
}
function gainBloodSiphon(amount) {
        if (frostbitten && playerFrostbite) {
                amount = Math.floor(amount * 1.5);
        } else if (playerFrostbite) {
                amount = Math.floor(amount * .50);
        }
        playerBloodNumber.innerText = parseFloat(playerBloodNumber.innerText) + amount;
        displayBlock(playerBloodImg, playerBloodNumber);
}
function checkPlayerBurn() {
        if (parseFloat(playerBurnNumber.innerText) > 0) {
                if (pyromania) {
                        playerHeal(playerBurnNumber.innerText);
                        pyromania = false;
                } else {
                        if (playerBlockNumber.innerText <= 0) {
                                //console.log("Health before burn: ", playerCurrentHealth.innerText);
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
                }
                damageTakenThisTurn += parseFloat(playerBurnNumber.innerText);
                if (flameWarden) {
                        playerBurnNumber.innerText++;
                } else {
                        playerBurnNumber.innerText--;
                }
                fxKindredSpirits.play();
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
                playerHeal(playerRegenNumber.innerText);
                playerRegenNumber.innerText--;
                fxDownpour.play();
                checkHealth();
                return 1;
        }
        if (playerRegenNumber.innerText == 0) {
                displayNone(playerRegenImg, playerRegenNumber);
                return 0;
        }
}
function checkBloodSiphon() {
        if (playerBloodNumber.innerText >= 1) {
                playerBloodNumber.innerText--;    
        }
        if (playerBloodNumber.innerText == 0) {
                displayNone(playerBloodImg, playerBloodNumber);
        }
}
function checkTerrasBlessing() {
        if (terrasBlessing.length > 0) {
                playerHeal(terrasBlessing.length * 3);
                gainBlock(terrasBlessing.length * 3);
                if (playerFrostbite && frostbitten) {
                        gainBlock(terrasBlessing.length * 1);
                }
        }
        if (terrasBlessingEmpowered.length > 0) {
                playerHeal(terrasBlessingEmpowered.length * 5);
                gainBlock(terrasBlessingEmpowered.length * 5);
                if (playerFrostbite && frostbitten) {
                        gainBlock(terrasBlessingEmpowered.length * 2);
                }
        }
}
let cardsInformationDefaultValues = JSON.parse(JSON.stringify(cardsInformation));
function updateCardText() {
        const currentCardText = document.querySelectorAll(".card-text");
        function updateText() {
                for (let i = 0; i < handArray.length; i++) {
                        for (let j = 0; j < cardsInformation.length; j++) {
                                if (handArray[i].classList.contains(j)) {
                                        for (let k = 0; k < currentCardText.length; k++) {
                                                if (currentCardText[k].classList.contains(j)) {
                                                        function update(type) {
                                                                let upgradeIndex = 0;
                                                                if (currentCardText[k].classList.contains("upgraded-text")) {
                                                                        upgradeIndex = 1;
                                                                }
                                                                //console.log(cardsInformation[j].name, " ", type[upgradeIndex]);
                                                                // RESET VALUES TO DEFAULT
                                                                if (type === cardsInformation[j].damage) {
                                                                        type[upgradeIndex] = cardsInformationDefaultValues[j].damage[upgradeIndex];
                                                                }
                                                                if (type === cardsInformation[j].burn) {
                                                                        type[upgradeIndex] = cardsInformationDefaultValues[j].burn[upgradeIndex];
                                                                }
                                                                if (type === cardsInformation[j].energize) {
                                                                        type[upgradeIndex] = cardsInformationDefaultValues[j].energize[upgradeIndex];
                                                                }
                                                                if (type === cardsInformation[j].regen) {
                                                                        type[upgradeIndex] = cardsInformationDefaultValues[j].regen[upgradeIndex];
                                                                }
                                                                if (type === cardsInformation[j].blood) {
                                                                        type[upgradeIndex] = cardsInformationDefaultValues[j].blood[upgradeIndex];
                                                                }
                                                                if (type === cardsInformation[j].block) {
                                                                        type[upgradeIndex] = cardsInformationDefaultValues[j].block[upgradeIndex];
                                                                }
                                                                //console.log(cardsInformation[j].name, " ", type[upgradeIndex]);
                                                                if (type === cardsInformation[j].thorns) {
                                                                        type[upgradeIndex] = cardsInformationDefaultValues[j].thorns[upgradeIndex];
                                                                }
                                                                // UPDATE NEW VALUES
                                                                if (cardsInformation[j].name === "Stormblessed") {
                                                                        cardsInformation[j].damage[0] = Math.floor(damageThisTurn * .5);
                                                                        cardsInformation[j].damage[1] = Math.floor(damageThisTurn * .75);
                                                                }
                                                                if (cardsInformation[j].name === "Winds of Change") {
                                                                        cardsInformation[j].damage[0] = windsOfChange;
                                                                        cardsInformation[j].damage[1] = windsOfChange;
                                                                }
                                                                if (cardsInformation[j].name === "Sphere Of Air") {
                                                                        cardsInformation[j].damage[0] = sphereOfAir;
                                                                        cardsInformation[j].damage[1] = sphereOfAir;
                                                                }
                                                                if (cardsInformation[j].name === "Tsunami") {
                                                                        cardsInformation[j].damage[0] = healthGainedThisFight;
                                                                        cardsInformation[j].damage[1] = healthGainedThisFight;
                                                                }
                                                                if (cardsInformation[j].name === "Deep Freeze") {
                                                                        cardsInformation[j].damage[0] = Math.floor((parseFloat(currentMana.innerText) * 10));
                                                                        cardsInformation[j].damage[1] = Math.floor((parseFloat(currentMana.innerText) * 15));
                                                                }
                                                                if (cardsInformation[j].name === "Electric Current") {
                                                                        cardsInformation[j].damage[0] = Math.floor((parseFloat(playerCurrentHealth.innerText) / 4));
                                                                        cardsInformation[j].damage[1] = Math.floor((parseFloat(playerCurrentHealth.innerText) / 4));
                                                                }
                                                                if (type === cardsInformation[j].burn) {
                                                                        if (essenceOfEmber.length > 0) {
                                                                                type[upgradeIndex] += essenceOfEmber.length;
                                                                        }
                                                                        if (essenceOfEmberEmpowered/length > 0) {
                                                                                type[upgradeIndex] += (essenceOfEmberEmpowered * 2);
                                                                        }
                                                                }
                                                                if (type === cardsInformation[j].damage && (stormForm.length > 0 || stormFormEmpowered.length > 0)) {
                                                                        type[upgradeIndex] += (stormForm.length * 5) + (stormFormEmpowered * 10);
                                                                }
                                                                if (type === cardsInformation[j].energize && surgebinder) {
                                                                        type[upgradeIndex] *= 2;
                                                                }
                                                                if (gaiasEmbrace.length > 0) {
                                                                        if (type === cardsInformation[j].block) {
                                                                                type[upgradeIndex] += gaiasEmbrace.length * 4;
                                                                        }
                                                                        if (type === cardsInformation[j].thorns) {
                                                                                type[upgradeIndex] += gaiasEmbrace.length;
                                                                        }
                                                                }
                                                                if (playerFrostbite && (type === cardsInformation[j].energize || type === cardsInformation[j].block || type === cardsInformation[j].regen || type === cardsInformation[j].blood || type === cardsInformation[j].thorns)) {
                                                                        if (frostbitten) {
                                                                                type[upgradeIndex] = Math.floor(type[upgradeIndex] * 1.5);
                                                                        } else {
                                                                                type[upgradeIndex] = Math.floor(type[upgradeIndex] * .5);
                                                                        }
                                                                }
                                                                if (playerWindswept && (type === cardsInformation[j].damage || type === cardsInformation[j].burn)) {
                                                                        type[upgradeIndex] = Math.floor(type[upgradeIndex] * .5);
                                                                        if ("damageSecond" in cardsInformation[j]) {
                                                                                cardsInformation[j].damageSecond[upgradeIndex] = Math.floor(cardsInformation[j].damageSecond[upgradeIndex] * .5);
                                                                        }
                                                                }
                                                                if (staticCharge && type === cardsInformation[j].damage) {
                                                                        type[upgradeIndex] += 10;
                                                                }
                                                                //console.log(cardsInformation[j].name, " ", type[upgradeIndex]);
                                                        }
                                                        if ("damage" in cardsInformation[j]) {
                                                                update(cardsInformation[j].damage);
                                                        }
                                                        if ("burn" in cardsInformation[j]) {
                                                                update(cardsInformation[j].burn);
                                                        }
                                                        if ("energize" in cardsInformation[j]) {
                                                                update(cardsInformation[j].energize);
                                                        }
                                                        if ("regen" in cardsInformation[j]) {
                                                                update(cardsInformation[j].regen);
                                                        }
                                                        if ("blood" in cardsInformation[j]) {
                                                                update(cardsInformation[j].blood);
                                                        }
                                                        if ("block" in cardsInformation[j]) {
                                                                update(cardsInformation[j].block);
                                                        }
                                                        if ("thorns" in cardsInformation[j]) {
                                                                update(cardsInformation[j].thorns);
                                                        }
                                                }
                                        }
                                }
                        }
                }
        }
        //console.log("UPDATE TEXT");
        updateText();
        // UPDATE ARRAY WITH NEW CHANGED STATS
        let updateCardTextStats = [
                [`Deal ${cardsInformation[0].damage[0]} damage and inflict ${cardsInformation[0].burn[0]} burn`, `Inflict ${cardsInformation[0].burn[1]} burn on an enemy and 2 on yourself`],
                [`Inflict ${cardsInformation[1].burn[0]} burn on an enemy and 3 on yourself`, `Inflict ${cardsInformation[1].burn[1]} burn on an enemy and 5 on yourself`],
                [`Your next direct damage spell deals 10 more damage`, `Your next direct damage spell deals 10 more damage`],
                [`Deal ${cardsInformation[3].damage[0]} damage to all enemies<br>Energize ${cardsInformation[3].energize[0]}`, `Deal ${cardsInformation[3].damage[1]} damage to all enemies<br>Energize ${cardsInformation[3].energize[1]}`],
                [`Deal ${cardsInformation[4].damage[0]} damage and inflict frostbite`, `Deal ${cardsInformation[4].damage[1]} damage and inflict frostbite`],
                [`Deal ${cardsInformation[5].damage[0]} damage.<br>If you or the enemy has frostbite deal double instead.`, `Deal ${cardsInformation[5].damage[1]} damage.<br>If you or the enemy has frostbite deal triple instead.`],
                [`Enemies with windswept take ${cardsInformation[6].damage[0]} damage. Enemies without gain windswept`, `Enemies with windswept take ${cardsInformation[6].damage[1]} damage. Enemies without gain windswept. Draw a card.`],
                [`Deal ${cardsInformation[7].damage[0]} damage to an enemy and inflict windswept`, `Deal ${cardsInformation[7].damage[1]} damage to an enemy and inflict windswept. Increase Shifting cards damage by 3`],
                [`Gain ${cardsInformation[8].blood[0]} Blood Siphon`, `Gain ${cardsInformation[8].blood[1]} Blood Siphon`],
                [`Deal ${cardsInformation[9].damage[0]} damage and ${Math.floor(cardsInformation[9].damage[0] / 2)} damage to adjacent targets<br>Gain ${cardsInformation[9].regen[0]} regen for each target hit`, `Deal ${cardsInformation[9].damage[1]} damage and ${Math.floor(cardsInformation[9].damage[1] / 2)} damage to adjacent targets<br>Gain ${cardsInformation[9].regen[1]} regen and blood siphon for each target hit`],
                [`Deal ${cardsInformation[10].damage[0]} damage and gain block equal to the damage dealt`, `Deal ${cardsInformation[10].damage[1]} damage and gain block equal to the damage dealt`],
                [`Gain ${cardsInformation[11].block[0]} block and ${cardsInformation[11].thorns[0]} thorns`, `Gain ${cardsInformation[11].block[1]} block and ${cardsInformation[11].thorns[1]} thorns`],
                [`Inflict ${cardsInformation[12].burn[0]} burn on all enemies and 3 on yourself`, `Inflict ${cardsInformation[12].burn[1]} burn on all enemies and 4 on yourself`],
                [`Transfer your burn onto the enemy`, `Transfer your burn onto all enemies`],
                [`Gain 5 burn<br>Burn heals you this turn`, `Gain 8 burn<br>Burn heals you this turn`],
                ["[Ethereal]<br>Increase everyone's burn by 50%", "[Ethereal]<br>Increase everyone's burn by 75%"],
                [`Deal damage equal to ${cardsInformation[16].damageSecond[0]}x the amount of burn on the enemy`, `Deal damage equal to ${cardsInformation[16].damageSecond[1]}x the amount of burn on the enemy`],
                ["[Ethereal] [Aura]<br>You apply +1 burn", "[Ethereal] [Aura]<br>You apply +2 burn"],
                ["Gain 1 mana for each energize you have", "Gain 1 mana for each energize you have"],
                [`Deal ${cardsInformation[19].damage[0]} damage<br>Gain 1 energize for every 5 damage this deals`, `Deal ${cardsInformation[19].damage[1]} damage<br>Gain 1 energize for every 5 damage this deals`],
                [`Deal ${cardsInformation[20].damage[0]} damage to a random enemy three times and Energize ${cardsInformation[20].energize[0]} for each enemy damaged`, `Deal ${cardsInformation[20].damage[0]} damage to a random enemy four times and Energize ${cardsInformation[20].energize[1]} for each enemy damaged`],
                [`Deal 50% of the damage you've dealt this turn to an enemy<br>Damage: ${cardsInformation[21].damage[0]}`, `Deal 50% of the damage you've dealt this turn to an enemy<br>Damage: ${cardsInformation[21].damage[1]}`],
                [`Deal ${cardsInformation[22].damage[0]} damage plus 20 for each mana you have after playing Thunder Crash.<br>Damage: ${cardsInformation[22].damage[0] + ((currentMana.innerText - 4) * 20)}`, `Deal ${cardsInformation[22].damage[0]} damage plus 20 for each mana you have after playing Thunder Crash.<br>Damage: ${cardsInformation[22].damage[0] + ((currentMana.innerText - 4) * 30)}`],
                ["[Ethereal] [Aura]<br>All damage is increased by 5", "[Ethereal] [Aura]<br>All damage is increased by 7"],
                ["Inflict frostbite and steal any buffs that were reduced", "Inflict frostbite and gain all buffs the enemy is intending to gain"],
                [`If you have frostbite, transfer it to the enemy and deal ${cardsInformation[25].damage[0]} damage`, `If you have frostbite, transfer it to the enemy and deal ${cardsInformation[25].damage[1]} damage`],
                [`Deal ${cardsInformation[26].damage[0]} damage to all enemies and inflict frostbite to everyone`, `Deal ${cardsInformation[26].damage[1]} damage to all enemies and inflict frostbite to everyone`],
                ["[Aura]<br>Gain 50% increased buffs when you have frostbite<br>Inflict frostbite on yourself", "[Aura]<br>Gain 50% increased buffs when you have frostbite<br>Inflict frostbite on yourself"],
                [`Deal ${cardsInformation[28].damage[0]} damage for each enemy that has frostbite<br>Transfer frostbite from all enemies to you`, `Deal ${cardsInformation[28].damage[1]} damage for each enemy that has frostbite<br>Transfer frostbite from all enemies to you`],
                ["[Ethereal]  [Aura]<br>Damage hits every enemy and frostbite hits everyone", "[Ethereal] [Aura]<br>Damage hits every enemy and frostbite hits everyone"],
                [`Deal ${windsOfChange} damage.<br>All Winds of Change gain +3 damage or +6 damage if enemy is windswept`, `Deal ${windsOfChange} damage.<br>All Winds of Change gain +4 damage or +8 damage if enemy is windswept`],
                ["Draw two cards", "Draw two cards and inflict windswept on a random enemy"],
                [`[Shifting]<br>Deal ${sphereOfAir} damage to all enemies and Shifting cards gain +4 damage for each windswept enemy`, `[Shifting]<br>Deal ${sphereOfAir} damage to all enemies and Shifting cards gain +6 damage for each windswept enemy`],
                ["Draw a card from your draw pile and discard pile", "Draw a card from your draw pile and discard pile"],
                [`[Ethereal]<br>The next card that deals damage will first inflict windswept to all enemies damaged`, `The next card that deals damage will first inflict windswept to all enemies damaged`],
                ["[Ethereal] [Aura]<br>Draw one more card at the end of each turn", "[Ethereal] [Aura]<br>Draw one more card at the end of each turn"],
                ["At the end of your turn, heal for 50% of the damage you took this turn", "At the end of your turn, heal for 50% of the damage you took this turn"],
                [`Cleanse all debuffs and gain ${cardsInformation[37].blood[0]} blood siphon`, `Cleanse all debuffs and gain ${cardsInformation[37].blood[1]} blood siphon`],
                [`Use all mana to gain ${cardsInformation[38].regen[0]} regeneration and blood siphon per mana spent`, `Use all mana to gain ${cardsInformation[38].regen[1]} regeneration and ${cardsInformation[38].blood[1]} blood siphon per mana spent`],
                [`[Ethereal]<br>Heal for 20% of your missing health<br>Heal: ${Math.floor((playerCurrentHealth.innerText - playerMaxHealth.innerText) * -.2)}`, `[Ethereal]<br>Heal for 30% of your missing health<br>Heal: ${Math.floor((playerCurrentHealth.innerText - playerMaxHealth.innerText) * -.3)}`],
                [`Deal damage equal to how much you've healed this fight<br>Damage: ${cardsInformation[40].damage[0]}`, `Deal damage to all enemies equal to how much you've healed this fight<br>Damage: ${cardsInformation[40].damage[1]}`],
                ["[Ethereal]<br>Permanently gain 5 max health", "[Ethereal]<br>Permanently gain 6 max health and gain 6 health"],
                [`Turn 1: Gain ${cardsInformation[42].block[0]} block and ${cardsInformation[42].thorns[0]} thorn<br>Turn 2: Gain 8 block and 2 thorns<br>Turn 3: Gain 16 block and 4 thorns`, `Turn 1: Gain ${cardsInformation[42].block[1]} block and ${cardsInformation[42].thorns[1]} thorn<br>Turn 2: Gain 8 block and 2 thorns<br>Turn 3: Gain 16 block and 4 thorns`],
                [`Gain ${cardsInformation[43].block[0]} block if you have no block`, `Gain ${cardsInformation[43].block[1]} block if you have no block`],
                [`Gain ${cardsInformation[44].thorns[0]} thorns`, `Gain ${cardsInformation[44].thorns[1]} thorns`],
                ["[Ethereal]<br>Double your thorns", "[Ethereal]<br>Triple your thorns."],
                [`Deal damage equal to 2x your thorns<br>Damage: ${(parseFloat(playerThornsNumber.innerText) * 2)}`, `Gain ${cardsInformation[46].thorns[1]} thorns and deal damage equal to 2x your thorns<br>Damage: ${3 + (parseFloat(playerThornsNumber.innerText) * 2)}`],
                ["[Ethereal] [Aura]<br>All block gained is increased by 4 and thorns increased by 1", `[Ethereal] [Aura]<br>Gain ${cardsInformation[47].block[1]} block and ${cardsInformation[47].thorns[1]} thorns. All block gained is increased by 4 and thorns increased by 1`],
                [`Energize ${cardsInformation[48].energize[0]} for each enemy burning`, `Burn all enemies for ${cardsInformation[48].burn[1]} and Energize ${cardsInformation[48].energize[1]} for each enemy burning`],
                [`If the enemy is either burning or inflicted with frostbite they are inflicted with ${cardsInformation[49].burn[0]} burn and frostbite`, `If the enemy is either burning or inflicted with frostbite they are inflicted with ${cardsInformation[49].burn[1]} burn and frostbite`],
                [`Inflict windswept on all enemies and increase burn count by ${cardsInformation[50].burn[0]} if they're already burning`, `Inflict windswept on all enemies and increase burn count by ${cardsInformation[50].burn[1]} if they're already burning`],
                [`Gain ${cardsInformation[51].burn[0]} burn, ${cardsInformation[51].regen[0]} regeneration, and ${cardsInformation[51].blood[0]} blood siphon`, `Gain ${cardsInformation[51].burn[1]} burn, ${cardsInformation[51].regen[1]} regeneration, and ${cardsInformation[51].blood[1]} blood siphon`],
                [`Inflict ${cardsInformation[52].burn[0]} burn on an enemy and gain block equal to 100% of their burn`, `Inflict ${cardsInformation[52].burn[1]} burn on an enemy and gain block equal to 100% of their burn`],
                [`Electrucute enemies with frostbite dealing damage equal to ${cardsInformation[53].damageSecond[0]} times your current mana<br>Damage: ${cardsInformation[53].damage[0]}`, `Electrucute enemies with frostbite dealing damage equal to ${cardsInformation[53].damageSecond[1]} times your current mana</br>Damage: ${cardsInformation[53].damage[0]}`],
                [`Inflict windswept and deal ${cardsInformation[54].damage[0]} damage to all enemies<br>Draw a card, energize ${cardsInformation[54].energize[0]}, and gain 2 mana.`, `Inflict windswept and deal ${cardsInformation[54].damage[1]} damage to all enemies. Draw a card, energize ${cardsInformation[54].energize[1]}, and gain 3 mana.`],
                [`Deal damage based on your current health. Energize ${cardsInformation[55].energize[0]}<br>Damage: ${cardsInformation[55].damage[0]}`, `Deal damage based on your current health. Energize ${cardsInformation[55].energize[1]} and gain 2 max health<br>Damage: ${cardsInformation[55].damage[1]}`],
                [`Energize ${cardsInformation[56].energize[0]}<br>Gain ${cardsInformation[56].block[0]} block for each energize you have`, `Energize ${cardsInformation[56].energize[1]}<br>Gain ${cardsInformation[56].block[1]} block for each energize you have`],
                ["Inflict windswept and frostbite to everyone", "Inflict windswept and frostbite to everyone"],
                [`Gain ${cardsInformation[58].regen[0]} regeneration for everyone afflicted with frostbite`, `Inflict everyone with frostbite then gain 2 regeneration for everyone afflicted with frostbite`],
                [`Inflict everyone with frostbite and gain ${Math.floor(cardsInformation[59].block[0])} block for everyone inflicted`, `Inflict everyone with frostbite and gain ${Math.floor(cardsInformation[59].block[1])} block for everyone inflicted`],
                [`Gain ${cardsInformation[60].regen[0]} regen for each card played this turn`, `Gain ${cardsInformation[60].regen[1]} regen for each card played this turn and draw a card`],
                [`Gain ${cardsInformation[61].block[0]} block and draw a card`, `Gain ${cardsInformation[61].block[1]} block and draw a card`],
                ["[Ethereal] [Aura]<br>Gain 3 block and healing at the end of each turn", "[Ethereal] [Aura]<br>Gain 5 block and healing at the end of each turn"],
                ["[DOES NOTHING]<br>Your greed causes you to look down upon peasants", "Your greed causes you to look down upon peasants...and enslave them gaining 20 aether"],
                [`Inflict frostbite, windswept, and ${cardsInformation[64].burn[0]} burn. Gain ${cardsInformation[64].energize[0]} energize and blood siphon, and ${cardsInformation[64].block[0]} block`, `Inflict frostbite, windswept, and ${cardsInformation[64].burn[1]} burn. Gain ${cardsInformation[64].energize[1]} energize and blood siphon, and ${cardsInformation[64].block[1]} block`],
                ["Gain 2 blood siphon<br>Your water cards turned into wine! You feel this would pair well with some bread...", "Gain 2 blood siphon<br>Your water cards turned into wine! You feel this would pair well with some bread..."]
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
                attackDamageLow: 7,
                attackDamageHigh: 10,
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
                attackDamageLow: 4,
                attackDamageHigh: 6,
                healAmountLow: 30,
                healAmountHigh: 35,
                regenAmountLow: 10,
                regenAmountHigh: 12,
        },
        {
                name: "Dwarf",
                index: 2,
                baseHealth: 80,
                img: "imgs/enemy-dwarf.png",
                attackChance: 2,
                blockChance: 7,
                thornsChance: 10,
                attackDamageLow: 5,
                attackDamageHigh: 6,
                blockAmountLow: 24,
                blockAmountHigh: 28,
                thornsAmountLow: 2,
                thornsAmountHigh: 3
        },
        {
                name: "Will-o-the-Wisp",
                index: 3,
                baseHealth: 40,
                img: "imgs/enemy-will-o-the-wisp.png",
                attackChance: 0,
                burnChance: 6,
                fadeChance: 10,
                attackDamageLow: 5,
                attackDamageHigh: 6,
                burnAmountLow: 3,
                burnAmountHigh: 4
        },
        {
                name: "Centaur",
                index: 4,
                baseHealth: 35,
                img: "imgs/enemy-centaur.png",
                attackChance: 10,
                attackDamageLow: 12,
                attackDamageHigh: 14,
        },
        {
                name: "Stag",
                index: 5,
                baseHealth: 65,
                img: "imgs/enemy-deer.png",
                attackChance: 1,
                blockChance: 4,
                thornsChance: 10,
                attackDamageLow: 4,
                attackDamageHigh: 5,
                blockAmountLow: 18,
                blockAmountHigh: 22,
                thornsAmountLow: 3,
                thornsAmountHigh: 4,
        },
        {
                name: "Water Wolf",
                index: 6,
                baseHealth: 60,
                img: "imgs/enemy-wolf.png",
                attackChance: 4,
                regenChance: 10,
                attackDamageLow: 6,
                attackDamageHigh: 7,
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
                attackDamageLow: 5,
                attackDamageHigh: 6,
        },
        {
                name: "Frost Dragon",
                index: 8,
                baseHealth: 55,
                img: "imgs/enemy-baby-dragon.png",
                attackChance: 1,
                blockChance: 3,
                frostbiteChance: 10,
                attackDamageLow: 5,
                attackDamageHigh: 6,
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
                attackDamageLow: 16,
                attackDamageHigh: 20,
                regenAmountLow: 10,
                regenAmountHigh: 12,
        },
        {
                name: "Dryad",
                index: 10,
                baseHealth: 150,
                img: "imgs/elite-dryad.png",
                thornsChance: 10,
                thornsAmountLow: 3,
                thornsAmountHigh: 4
        },
        {
                name: "Frost Sprite",
                index: 11,
                baseHealth: 220,
                img: "imgs/elite-frost-sprite.png",
                attackChance: 5,
                blockChance: 10,
                attackDamageLow: 12,
                attackDamageHigh: 16,
                blockAmountLow: 25,
                blockAmountHigh: 30,
        },
        {
                name: "Fae Dragon",
                index: 12,
                baseHealth: 180,
                img: "imgs/boss-fae-dragon.png",
                attackChance: 3,
                burnChance: 10,
                attackDamageLow: 20,
                attackDamageHigh: 24,
                burnAmountLow: 6,
                burnAmountHigh: 8,
        },
        {
                name: "Forest Giant",
                index: 13,
                baseHealth: 300,
                img: "imgs/boss-giant.png",
                attackChance: 2,
                blockChance: 7,
                thornsChance: 10,
                attackDamageLow: 14,
                attackDamageHigh: 18,
                blockAmountLow: 30,
                blockAmountHigh: 40,
                thornsAmountLow: 4,
                thornsAmountHigh: 5,
        },
        {
                name: "Pumpkinhead",
                index: 14,
                baseHealth: 50,
                img: "imgs/enemy-pumpkinhead.png",
                attackChance: 5,
                healChance: 8,
                thornsChance: 10,
                attackDamageLow: 7,
                attackDamageHigh: 9,
                healAmountLow: 20,
                healAmountHigh: 26,
                thornsAmountLow: 3,
                thornsAmountHigh: 4,
        },
        {
                name: "White Witch",
                index: 15,
                baseHealth: 60,
                img: "imgs/enemy-white-witch.png",
                attackChance: 0,
                burnChance: 5,
                regenChance: 10,
                attackDamageLow: 9,
                attackDamageHigh: 10,
                burnAmountLow: 4,
                burnAmountHigh: 4,
                regenAmountLow: 8,
                regenAmountHigh: 10,
        },
        {
                name: "Skeleton",
                index: 16,
                baseHealth: 70,
                img: "imgs/enemy-skeleton.png",
                attackChance: 5,
                blockChance: 10,
                attackDamageLow: 12,
                attackDamageHigh: 14,
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
                attackDamageLow: 6,
                attackDamageHigh: 7,
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
                attackChance: 0,
                frostbiteChance: 5,
                fadeChance: 10,
                attackDamageLow: 7,
                attackDamageHigh: 8,
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
                img: "imgs/enemy-bat.png",
                attackChance: 3,
                windsweptChance: 10,
                attackDamageLow: 8,
                attackDamageHigh: 9,
        },
        {
                name: "Zombie",
                index: 21,
                baseHealth: 80,
                img: "imgs/enemy-zombie.png",
                attackChance: 1,
                bloodChance: 10,
                attackDamageLow: 8,
                attackDamageHigh: 10,
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
                attackDamageLow: 14,
                attackDamageHigh: 16,
        },
        {
                name: "Reaper",
                index: 23,
                baseHealth: 450,
                img: "imgs/elite-reaper.png",
        },
        {
                name: "Spectre",
                index: 24,
                baseHealth: 170,
                img: "imgs/boss-spectre.png",
                attackChance: 0,
                fadeChance: 10,
                attackDamageLow: 12,
                attackDamageHigh: 14,
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
                burnAmountHigh: 6
        },
        {
                name: "Vampire",
                index: 26,
                baseHealth: 300,
                img: "imgs/elite-vampire.png",
                attackChance: 0,
                bloodChance: 10,
                attackDamageLow: 24,
                attackDamageHigh: 30,
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
                attackDamageHigh: 20,
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
                attackDamageLow: 20,
                attackDamageHigh: 22,
                bloodAmountLow: 9,
                bloodAmountHigh: 9
        },
        {
                name: "Ra",
                index: 30,
                baseHealth: 85,
                img: "imgs/enemy-ra.png",
                burnChance: 10,
                burnAmountLow: 6,
                burnAmountHigh: 7
        },
        {
                name: "Thor",
                index: 31,
                baseHealth: 150,
                img: "imgs/enemy-thor.png",
                attackChance: 10,
                attackDamageLow: 16,
                attackDamageHigh: 20,
        },
        {
                name: "Loki",
                index: 32,
                baseHealth: 80,
                img: "imgs/enemy-loki.png",
                attackChance: 5,
                fadeChance: 10,
                attackDamageLow: 16,
                attackDamageHigh: 20,
        },
        {
                name: "Fenrir",
                index: 33,
                baseHealth: 100,
                img: "imgs/enemy-fenrir.png",
                attackChance: 2,
                bloodChance: 10,
                attackDamageLow: 18,
                attackDamageHigh: 20,
                bloodAmountLow: 8,
                bloodAmountHigh: 10
        },
        {
                name: "Demeter",
                index: 34,
                baseHealth: 105,
                img: "imgs/enemy-demeter.png",
                attackChance: 1,
                blockChance: 5,
                frostbiteChance: 10,
                attackDamageLow: 20,
                attackDamageHigh: 24,
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
                attackChance: 2,
                blockChance: 7,
                thornsChance: 10,
                attackDamageLow: 10,
                attackDamageHigh: 12,
                blockAmountLow: 45,
                blockAmountHigh: 50,
                thornsAmountLow: 4,
                thornsAmountHigh: 5
        },
        {
                name: "Artemis",
                index: 37,
                baseHealth: 90,
                img: "imgs/enemy-artemis.png",
                attackChance: 10,
                attackDamageLow: 20,
                attackDamageHigh: 22,
        },
        {
                name: "Ganesha",
                index: 38,
                baseHealth: 160,
                img: "imgs/enemy-ganesha.png",
                attackChance: 4,
                healChance: 10,
                attackDamageLow: 18,
                attackDamageHigh: 20,
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
                attackDamageLow: 18,
                attackDamageHigh: 20,
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
                attackDamageLow: 16,
                attackDamageHigh: 18,
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
                attackDamageLow: 18,
                attackDamageHigh: 20,
                blockAmountLow: 20,
                blockAmountHigh: 24,
                regenAmountLow: 16,
                regenAmountHigh: 17,
        },
        {
                name: "Zeus",
                index: 42,
                baseHealth: 300,
                img: "imgs/elite-zeus2.png",
                attackChance: 10,
                attackDamageLow: 20,
                attackDamageHigh: 30,
        },
        {
                name: "Odin",
                index: 43,
                baseHealth: 300,
                img: "imgs/elite-odin.png",
                attackChance: 10,
                attackDamageLow: 20,
                attackDamageHigh: 30,
        },
        {
                name: "Jesus",
                index: 44,
                baseHealth: 200,
                img: "imgs/elite-jesus2.png",
                attackChance: 0,
                healChance: 3,
                regenChance: 6,
                thornsChance: 10,
                attackDamageLow: 0,
                attackDamageHigh: 0,
                healAmountLow: 50,
                healAmountHigh: 55,
                regenAmountLow: 20,
                regenAmountHigh: 30,
                thornsAmountLow: 5,
                thornsAmountHigh: 6
        },
        {
                name: "Jesus Risen",
                index: 45,
                baseHealth: 300,
                img: "imgs/elite-jesus-risen2.png",
                attackChance: 5,
                healChance: 8,
                regenChance: 10,
                attackDamageLow: 25,
                attackDamageHigh: 35,
                healAmountLow: 50,
                healAmountHigh: 55,
                regenAmountLow: 20,
                regenAmountHigh: 30,
        },
        {
                name: "Ember",
                index: 46,
                baseHealth: 400,
                img: "imgs/boss-ember.png",
                burnChance: 10,
                burnAmountLow: 6,
                burnAmountHigh: 8
        },
        {
                name: "Lectra",
                index: 47,
                baseHealth: 300,
                img: "imgs/boss-lectra.png",
                attackChance: 10,
                attackDamageLow: 26,
                attackDamageHigh: 30,
        },
        {
                name: "Glacia",
                index: 48,
                baseHealth: 500,
                img: "imgs/boss-glacia.png",
                attackChance: 3,
                blockChance: 7,
                fadeChance: 10,
                attackDamageLow: 22,
                attackDamageHigh: 26,
                blockAmountLow: 40,
                blockAmountHigh: 50
        },
        {
                name: "Tempia",
                index: 49,
                baseHealth: 350,
                img: "imgs/boss-tempia.png",
                attackChance: 8,
                fadeChance: 10,
                attackDamageLow: 2,
                attackDamageHigh: 2,
        },
        {
                name: "Aerwyna",
                index: 50,
                baseHealth: 550,
                img: "imgs/boss-aerwyna.png",
                attackChance: 4,
                healChance: 6,
                regenChance: 10,
                attackDamageLow: 24,
                attackDamageHigh: 26,
                healAmountLow: 50,
                healAmountHigh: 75,
                regenAmountLow: 15,
                regenAmountHigh: 20
        },
        {
                name: "Gaia",
                index: 51,
                baseHealth: 600,
                img: "imgs/boss-gaia.png",
                attackChance: 2,
                blockChance: 6,
                thornsChance: 10,
                attackDamageLow: 18,
                attackDamageHigh: 20,
                blockAmountLow: 50,
                blockAmountHigh: 65,
                thornsAmountLow: 3,
                thornsAmountHigh: 5,
        },
        {
                name: "Life",
                index: 52,
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
                index: 53,
                baseHealth: 500,
                img: "imgs/boss-death.png",
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
                        <div class="enemy-fade-action-div">
                                <div class="fade-img-text img-text">
                                        <h4 class="img-text-h4">Fade</h4>
                                        <p class="img-text-p">Cannot be directly damaged.</p>
                                </div>
                                <img class="enemy-fade-action-img enemy-action-img" src="imgs/fade-icon.png">
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
                        <div class="enemy-thorns-div">
                                <p class="enemy-thorns-number">0</p>
                                <img class="enemy-thorns-img" src="imgs/thorns-icon.png">
                        </div>
                        <div class="enemy-regen-div">
                                <p class="enemy-regen-number">0</p>
                                <img class="enemy-regen-img" src="imgs/regen-icon.png">
                        </div> 
                        <div class="enemy-blood-div">
                                <p class="enemy-blood-number">0</p>
                                <img class="enemy-blood-img" src="imgs/blood-icon.png">
                        </div>
                        <div class="enemy-fade-div">
                                <img class="enemy-fade-img" src="imgs/fade-icon.png">
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
        addEnemyActionText(document.getElementsByClassName("enemy-regen-div"), document.getElementsByClassName("regen-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-blood-action-div"), document.getElementsByClassName("blood-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-blood-div"), document.getElementsByClassName("blood-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-thorns-action-div"), document.getElementsByClassName("thorns-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-thorns-div"), document.getElementsByClassName("thorns-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-fade-action-div"), document.getElementsByClassName("fade-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-fade-div"), document.getElementsByClassName("fade-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-frostbite-action-div"), document.getElementsByClassName("frostbite-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-frostbite-div"), document.getElementsByClassName("frostbite-img-debuff"));
        addEnemyActionText(document.getElementsByClassName("enemy-windswept-action-div"), document.getElementsByClassName("windswept-img-text"));
        addEnemyActionText(document.getElementsByClassName("enemy-windswept-div"), document.getElementsByClassName("windswept-img-debuff"));
        const enemyDiv = document.querySelectorAll(".enemy-div");
        const enemyImg = document.querySelectorAll(".enemy-img");
        switch (index.name) {
                case "Dark Elf": case "Reaper": case "Spectre":
                        enemyDiv[enemyDiv.length - 1].style = "animation: 3s ease-in-out 0s 1 stealthAppear";
                        break;
                case "Water Wolf":
                        enemyImg[enemyDiv.length - 1].classList.add("enemy-img-flip");
                        enemyDiv[enemyDiv.length - 1].style = "animation: 2s ease-out 0s 1 slideInTop";
                        break;
                case "Bat": case "Vampire": case "Black Witch":
                        enemyDiv[enemyDiv.length - 1].style = "animation: 2s ease-out 0s 1 slideInTop";
                        break;
                case "Fairy": case "White Witch":
                        enemyDiv[enemyDiv.length - 1].style = "animation: 2.3s ease-out 0s 1 slideInTop; margin-bottom: 5rem";
                        break;
                case "Mushroom":
                        enemyImg[enemyDiv.length - 1].style = "animation: 3.5s ease-in-out 0s 1 grow";
                        break;
                case "Jesus Risen":
                        enemyDiv[enemyDiv.length - 1].style = "animation: 2.3s ease-out 0s 1 slideInTop; margin-bottom: 3rem;";
                        enemyImg[enemyDiv.length - 1].style.width = "365px";
                        break;
                case "Artemis": case "Athena": case "Centaur": case "Fenrir": case "Zeus":
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
        } else if (!faeForest && !hallowwood) {
                for (let i = 0; i < document.getElementsByClassName("enemy-health").length; i++) {
                        document.getElementsByClassName("enemy-health")[i].style = "color: black";
                }
        }
        if (name === "Vampire") {
                siphonAll = true;
        }
        if (easyDifficulty) {
                const enemyCurrentHealth = document.querySelectorAll(".enemy-current-health");
                const enemyMaxHealth = document.querySelectorAll(".enemy-max-health");
                enemyCurrentHealth[enemyCurrentHealth.length - 1].innerText = Math.floor(enemyCurrentHealth[enemyCurrentHealth.length - 1].innerText / 2);
                enemyMaxHealth[enemyMaxHealth.length - 1].innerText = Math.floor(enemyMaxHealth[enemyMaxHealth.length - 1].innerText / 2);
                //console.log("easy: ", easyDifficulty);
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
        if (easyDifficulty) {
                scaleEnemies(-.075, -.02, -.02, -.015, -.03, -.03, -.02);
        } else if (normalDifficulty) {
                scaleEnemies(.075, .02, .02, .015, .03, .03, .02);
        } else if (hardDifficulty) {
                scaleEnemies(.1, .03, .03, .025, .04, .04, .035);
        }
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
let enemyFadeActionDiv = document.querySelectorAll(".enemy-fade-action-div");
let enemyFadeActionImg = document.querySelectorAll(".enemy-fade-action-img");
// BUFFS
let enemyBuffDiv = document.querySelectorAll(".enemy-buffs");
let enemyBlockImg = document.querySelectorAll(".enemy-block-img");
let enemyBlockNumber = document.querySelectorAll(".enemy-block-number");
let enemyRegenImg = document.querySelectorAll(".enemy-regen-img");
let enemyRegenNumber = document.querySelectorAll(".enemy-regen-number");
let enemyBloodImg = document.querySelectorAll(".enemy-blood-img");
let enemyBloodNumber = document.querySelectorAll(".enemy-blood-number");
let enemyThornsImg = document.querySelectorAll(".enemy-thorns-img");
let enemyThornsNumber = document.querySelectorAll(".enemy-thorns-number");
let enemyFadeImg = document.querySelectorAll(".enemy-fade-img");
// DEBUFFS
let enemyDebuffDiv = document.querySelectorAll(".enemy-debuffs");
let enemyWindsweptImg = document.querySelectorAll(".enemy-windswept-img");
let enemyFrostbiteImg = document.querySelectorAll(".enemy-frostbite-img");
let enemyBurnImg = document.querySelectorAll(".enemy-burn-img");
let enemyBurnNumber = document.querySelectorAll(".enemy-burn-number");
// FUNCTION TO RUN AFTER CREATING NEW ENEMIES TO REINITIALIZE VALUES
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
        enemyFadeActionDiv = document.querySelectorAll(".enemy-fade-action-div");
        enemyFadeActionImg = document.querySelectorAll(".enemy-fade-action-img");
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
        enemyFadeImg = document.querySelectorAll(".enemy-fade-img");
        // DEBUFFS
        enemyDebuffDiv = document.querySelectorAll(".enemy-debuffs");
        enemyWindsweptImg = document.querySelectorAll(".enemy-windswept-img");
        enemyFrostbiteImg = document.querySelectorAll(".enemy-frostbite-img");
        enemyBurnImg = document.querySelectorAll(".enemy-burn-img");
        enemyBurnNumber = document.querySelectorAll(".enemy-burn-number");        
}       

// FUNCTION ENEMIES TO ATTACK PLAYER
function damagePlayer(damage, index) {
        fxEnemyAttack.currentTime = 0;
        fxEnemyAttack.play();
        if (airGift && !airGiftTrigger && reduceAllAttack && enemyWindswept[index]) {
                damage = 0;
        }
        if (enemyWindswept[index]) {
                damage = Math.floor(damage *= .50);
        }
        if (enemyBloodNumber[index].innerText > 0) {
                let siphonAmount = .5;
                if (siphonAll) {
                        siphonAmount = 1;
                }
                enemyCurrentHealth[index].innerText = parseFloat(enemyCurrentHealth[index].innerText) + Math.floor((damage * siphonAmount));                        
        }
        //console.log("Health before damageplayer: ", playerCurrentHealth.innerText);
        if (playerBlockNumber.innerText <= 0) {
                topBarHealthNumber.innerText -= damage;
                playerCurrentHealth.innerText -= damage;
                damageTakenThisTurn += parseFloat(damage);
        } else if (playerBlockNumber.innerText <= damage) {
                topBarHealthNumber.innerText -= damage - parseFloat(playerBlockNumber.innerText);
                playerCurrentHealth.innerText -= damage - parseFloat(playerBlockNumber.innerText);
                damageTakenThisTurn += (parseFloat(damage) - parseFloat(playerBlockNumber.innerText));
                playerBlockNumber.innerText = 0;
                displayNone(playerBlockNumber, playerBlockImg);
                if (vineBracelet) {
                        playerBlockNumber.innerText = 10;
                }
        } else {
                playerBlockNumber.innerText -= damage; 
        }
        //console.log("Health after damageplayer: ", playerCurrentHealth.innerText);
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
        enemyBlockActionNumber[index].innerText = 0;
        displayBlock(enemyBlockNumber[index], enemyBlockImg[index]);
        displayNone(enemyBlockActionDiv[index]);
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
        fxDownpour.currentTime = 0;
        fxDownpour.play();
        if (enemyFrostbite[index]) {
                amount = Math.floor(amount * .5);
        }
        enemyRegenNumber[index].innerText = parseFloat(enemyRegenNumber[index].innerText) + amount;
        enemyRegenActionNumber[index].innerText = 0;
        displayBlock(enemyRegenImg[index], enemyRegenNumber[index]);
        displayNone(enemyRegenActionImg[index], enemyRegenActionNumber[index]);
}
function enemyGainBloodSiphon(amount, index) {
        fxBloodCocoon.currentTime = 0;
        fxBloodCocoon.play();
        if (enemyFrostbite[index]) {
                amount = Math.floor(amount * .5);
        }
        enemyBloodNumber[index].innerText = parseFloat(enemyBloodNumber[index].innerText) + amount;
        enemyBloodActionNumber[index].innerText = 0;
        displayBlock(enemyBloodImg[index], enemyBloodNumber[index]);
        displayNone(enemyBloodActionImg[index], enemyBloodActionNumber[index]);
}
function enemyGainThorns(amount, index) {
        fxWeaveOfThorns.currentTime = 0;
        fxWeaveOfThorns.play();
        if (enemyFrostbite[index]) {
                amount = Math.floor(amount * .5);
        }
        enemyThornsNumber[index].innerText = parseFloat(enemyThornsNumber[index].innerText) + amount;
        enemyThornsActionNumber[index].innerText = 0;
        displayBlock(enemyThornsNumber[index], enemyThornsImg[index]);
        displayNone(enemyThornsActionNumber[index], enemyThornsActionImg[index]);
}
function checkEnemyBurn(index) {
        if (playerBloodNumber.innerText > 0 && !enemyIsDead[index]) {
                let healPercentage = .2;
                        if (bloodbender) {
                                healPercentage = .4;
                        }
                        if (empowerBloodSiphon) {
                                healPercentage += .4;
                                empowerBloodSiphon = false;
                        }
                //console.log("Health after burn blood heal: ", playerCurrentHealth.innerText);
                playerHeal(Math.ceil(enemyBurnNumber[index].innerText * healPercentage));
                //console.log("Health after burn blood heal: ", playerCurrentHealth.innerText);
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
let enemiesAlive = numberOfEnemies - enemyIsDead.filter(Boolean).length;
let enemiesAreDead = false;
let jesusSlain = false;
let [flameWarden, pyromancer, surgebinder, stormchaser, cryocast, winterWarrior, aeroshift, windrunner, bloodbender, waterweaver, grovetender, stoneshaper] =
[false, false, false, false, false, false, false, false, false, false, false, false];
let [faeForest, hallowwood] = [true, false];
function checkIfEnemyDead() {
        // IF ALL ENEMIES ARE DEAD, SWITCH BACK TO MAP AND GET AETHER
        function allEnemiesDead() {
                if (jesusSlain) {
                        jesusSlain = false;
                        document.querySelectorAll(".card").forEach(i => {
                                for (let j = 0; j < cardsInformation.length; j++) {
                                        if (i.classList.contains(j) && cardsInformation[j].element === "wine") {
                                                function destoryCard(pile) {
                                                        if (pile.includes(i)) {
                                                                let spliceCard = pile.splice(pile.indexOf(i), 1).pop();
                                                                destroyedCardsArray.push(spliceCard);
                                                                destroyedCardsContainer.appendChild(spliceCard);
                                                        }
                                                }
                                                destoryCard(drawPileArray);
                                                destoryCard(handArray);
                                                destoryCard(discardPileArray);
                                        }
                                }
                        });
                        console.log(drawPileArray, handArray, discardPileArray);
                        destroyedCardsArray = [];
                        destroyedCardsContainer.innerHTML = ``;
                }
                if (jesusHasRisen) {
                        enemyContainer.innerHTML = "";
                        jesusHasRisen = false;
                        jesusSlain = true
                        createEnemy("Jesus Risen");
                        initializeEnemyVariables();
                        enemiesAreDead = false;
                        for (i = 0; i < numberOfEnemies; i++) {
                                enemyIsDead[i] = false;
                                enemyFrostbite[i] = false;
                                enemyWindswept[i] = false;
                                displayNone(enemyWindsweptImg[i], enemyFrostbiteImg[i]);
                        }
                        enemyAction(45);
                        return;
                }
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
                        displayFlex(document.querySelectorAll(".relic-img-text")[document.querySelectorAll(".relic-img-text").length - 1]);
                }
                enemiesKilled++
                siphonAll = false;
                function nextStage() {
                        location1Tiles1.addEventListener("click", L1T1);
                        location1Tiles2.addEventListener("click", L1T2);
                        location1Tiles3.addEventListener("click", L1T3);
                        if (faeForest) {
                                faeForest = false;
                                hallowwood = true;
                                map.style.backgroundImage = "url(imgs/hallowwood-map.jpeg)";
                                arena.style.backgroundImage = "url(imgs/hallowwood-arena.jpeg)";
                                document.getElementById("player-health-numbers").style = "color: white";
                        } else if (hallowwood) {
                                hallowwood = false;
                                document.getElementById("player-health-numbers").style.color = "black";
                        }
                        encounterMusicTrigger = false;
                        eliteEncounterMusicTrigger = false;
                        exclamationMusicTrigger = false;
                        shopMusicTrigger = false;
                        blacksmithMusicTrigger = false;
                        location1Tiles1.classList.add("glow");
                        location1Tiles2.classList.add("glow");
                        location1Tiles3.classList.add("glow");
                        switchArea(map, empowerContainer);
                        randomizeLocations();
                }
                const empowerContainer = document.getElementById("empower-container");
                if (bossDefeated[0] && !bossDefeated[1] && !hallowwood) {
                        function ventureToHallowwood() {
                                displayNone(arena);
                                displayFlex(exclamationContainer);
                                exclamationContainer.innerHTML = `
                                <div class="exclamation-div" style="background-image: url(imgs/hallowwood-mystery.jpeg)">
                                        <div class="exclamation-information-container">
                                                <div style="width: 100%"><h1 class="exclamation-title">Hallowwood</h1></div>
                                                <div class="exclamation-event-img">
                                                        <img src="imgs/terra-hallowwood.jpeg">
                                                </div>
                                                <div class="exclamation-text-button-div">
                                                        <div class="exclamation-text-div">
                                                        <p class="exclamation-text">I spoke with the creature as Maluminia's grasp on him faded. Her corruption tendrils around the soul until you feel nothing but a desire to kill. This is what we must fight against hero.<br><br>
                                                                With his dying breath he told me where we can seek the spirit of death. I'm afraid we'll have to go to a darker land where the lines between life and death blur.<br><br>
                                                                Speak with the spirits of night and find where she's hiding so we can put an end to this once and for all.
                                                        </p>
                                                        </div>
                                                        <div class="exclamation-button-div">
                                                                <button class="exclamation-button-1">Venture through Hallowwood</button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>`;
                                document.querySelector(".exclamation-button-1").addEventListener("click", startHallowwood);
                                fxDragonGrowls.pause();
                                fxGiantGroans.pause();
                                allMusic.forEach(i => {
                                        i.pause();
                                });
                                allMusic = [];
                                allAmbience.forEach(i => {
                                        i.pause();
                                });
                                allAmbience = [];
                                function startHallowwood() {
                                        displayNone(exclamationContainer);
                                        const hallowwoodAmbience = new Audio("audio/hallowwood-ambience.wav");
                                        switchAmbience(hallowwoodAmbience);
                                        const hallowwoodMapMusic = new Audio("audio/hallowwood-map-music.wav");
                                        //switchMusic(hallowwoodMapMusic);
                                        mapMusicIndex = allMusic.indexOf(hallowwoodMapMusic);
                                        displayFlex(empowerContainer);
                                        displayNone(arena);
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
                                                                <p>Blood siphon now heals for 40% of damage dealt</p>
                                                        </div>
                                                        <div class="empower-choices">
                                                                <button id="cleansing-currents" style="color: #74ccf4">Waterweaver</button>
                                                                <p>Heal to full health and gain +1 max health and regeneration when you play water cards</p>
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
                                                                <p>Start each encounter with 25 block</p>
                                                        </div>
                                                </div>
                                        </div>
                                        `
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
                                                grovetender = true;
                                                nextStage();
                                        });
                                        document.getElementById("stonewall").addEventListener("click", () => {
                                                stoneshaper = true;
                                                nextStage();
                                        });
                                }
                        }
                        setTimeout(ventureToHallowwood, 900);
                } else if (bossDefeated[0] && bossDefeated[1] && hallowwood) {
                        function ventureToLumaisha() {
                                displayNone(arena);
                                displayFlex(exclamationContainer);
                                exclamationContainer.innerHTML = `
                                <div class="exclamation-div" style="background-image: url(imgs/heaven-mystery.jpeg)">
                                        <div class="exclamation-information-container">
                                                <div style="width: 100%"><h1 class="exclamation-title">Lumaisha</h1></div>
                                                <div class="exclamation-event-img">
                                                        <img src="imgs/terra-heaven.jpeg">
                                                </div>
                                                <div class="exclamation-text-button-div">
                                                        <div class="exclamation-text-div">
                                                        <p class="exclamation-text">This creature was not so cooperative. It seemed to revel in it's corrupted soul. I felt a distinct impression as it passed on, it seems Maluminia has done the unthinkable. She has hidden in the realm of the holy in Lumaisha.<br><br>
                                                                What's worse is she's managed to corrupt the Gods of Terra, forcing them to attack you against their will.<br><br>
                                                                She has no place left to hide. This will be her last stand. You're almost there hero, just take this last step.
                                                        </p>
                                                        </div>
                                                        <div class="exclamation-button-div">
                                                                <button class="exclamation-button-1">Venture through Lumaisha</button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>`;
                                document.querySelector(".exclamation-button-1").addEventListener("click", startHeaven);
                                allMusic.forEach(i => {
                                        i.pause();
                                });
                                allMusic = [];
                                allAmbience.forEach(i => {
                                        i.pause();
                                });
                                allAmbience = [];
                                function startHeaven() {
                                        const heavenMapMusic = new Audio("audio/heaven-map-music.wav");
                                        //switchMusic(heavenMapMusic);
                                        mapMusicIndex = allMusic.indexOf(heavenMapMusic);
                                        const heavenAmbience = new Audio("audio/heaven-ambience.wav");
                                        switchAmbience(heavenAmbience);
                                        displayFlex(empowerContainer);
                                        displayNone(arena, exclamationContainer);
                                        empowerContainer.style.backgroundImage = "url(imgs/heaven-portal.jpeg)";
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
                                        } else if (grovetender || stoneshaper) {
                                                empowerElementDiv[5].innerHTML = ``;
                                        }
                                }
                        }
                        setTimeout(ventureToLumaisha, 900);
                } else if (bossDefeated[2]) {
                        displayNone(chooseNewCardContainer);
                        const deathScreenContainer = document.querySelector("#death-screen-container");
                        const victoryMusic = new Audio("audio/victory-music.wav");
                        deathScreenContainer.style.position = "absolute";
                        //switchMusic(victoryMusic);
                        arena.classList.add("dim");
                        displayFlex(deathScreenContainer);
                        displayNone(handContainer);
                        deathScreenContainer.innerHTML = `
                        <div id="death-screen">
                                <h1 style="color: red">You've saved Terra!</h1>
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
                return;
        }
        // IF ENEMY  IS DEAD, DELETE THEM
        for (let i = 0; i < numberOfEnemies; i++) {
                if (!enemyIsDead[i] && enemyCurrentHealth[i].innerText <= 0) {
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
let [actionChoice, enemyRandomDamage, enemyRandomBlock, enemyRandomHeal, enemyRandomBurn, enemyRandomRegen, enemyRandomBlood, enemyRandomThorns, trackEnemies] = [[], [], [], [], [], [], [], [], []];
// TRIGGER SO ENEMY ONLY GAINS BLOOD SIPHON WHEN BELOW MAX HEALTH AT START OF THEIR TURN
let enemyCanGainBlood = false;
// TRACK IF ENEMIES HAVE DEBUFF
let enemyWindswept = [false, false, false];
let enemyFrostbite = [false, false, false];
// SET ATTACK AND BLOCK DEBUFFS TO FALSE
let playerWindswept = false;
let playerFrostbite = false;
let eI = 0;
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
                playerThornsNumber.innerText = 10;
                gaiaBlessing = false;
                displayBlock(playerThornsDiv, playerThornsImg, playerThornsNumber);
        }
        if (playerEmberNumber > 0) {
                displayBlock(playerBurnDiv, playerBurnImg, playerBurnNumber);
                playerBurnNumber.innerText = playerEmberNumber;
                playerEmberNumber = 0;
                emberBurned = true;
        }
        enemiesAlive = numberOfEnemies - enemyIsDead.filter(Boolean).length;
        trackEnemies.forEach((i) => {
                // RESET ALL ACTIONS
                actionChoice[eI] = createRandomNumber(1, 10);
                if (numberOfEnemies === 3 && enemiesAlive === 1) {
                        actionChoice[eI] = 1;
                }
                if (actionChoice[eI] <= enemiesInformation[i].attackChance) {          
                        // ATTACK
                        // TEMPIA BOSS INCREASES DAMAGE EACH TURN
                        if (trackEnemies[0] == 49) {
                                enemiesInformation[49].attackDamageLow += 6;
                                enemiesInformation[49].attackDamageHigh += 6;
                        }
                        enemyRandomDamage[eI] = createRandomNumber(enemiesInformation[i].attackDamageLow, enemiesInformation[i].attackDamageHigh);
                        // BOOST DAMAGE ON LAST ENEMY SO YOU CANT HEAL TO FULL HEALTH ON LAST ENEMY BEING WEAK
                        if (numberOfEnemies === 3 && enemiesAlive === 1) {
                                enemyRandomDamage[eI] += 5;
                        }
                        enemyAttackActionNumber[eI].innerText = enemyRandomDamage[eI];
                        displayBlock(enemyAttackActionDiv[eI], enemyAttackActionImg[eI], enemyAttackActionNumber[eI]);
                } else if (actionChoice[eI] <= enemiesInformation[i].blockChance) {
                        // BLOCK
                        enemyRandomBlock[eI] = createRandomNumber(enemiesInformation[i].blockAmountLow, enemiesInformation[i].blockAmountHigh);
                        if (winterWarriorTracking[eI]) {
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
                } else if (actionChoice[eI] <= enemiesInformation[i].regenChance) {
                        if (enemyCurrentHealth[eI].innerText < enemyMaxHealth[eI].innerText - enemiesInformation[i].regenAmountHigh) {
                                // REGEN
                                enemyRandomRegen[eI] = createRandomNumber(enemiesInformation[i].regenAmountLow, enemiesInformation[i].regenAmountHigh);
                                if (winterWarriorTracking[eI]) {
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
                                if (winterWarriorTracking[eI]) {
                                        enemyRandomBlood[eI] = Math.floor(enemyRandomBlood[eI] / 2);
                                }
                                enemyBloodActionNumber[eI].innerText = enemyRandomBlood[eI];
                                displayBlock(enemyBloodActionImg[eI], enemyBloodActionNumber[eI], enemyBloodActionDiv[eI]);
                                enemyCanGainBlood = true;
                        } else if ((trackEnemies[eI] === 26 || trackEnemies[eI] === 27) && enemyBloodNumber[eI].innerText <= 1) {
                                // BLOOD
                                enemyRandomBlood[eI] = createRandomNumber(enemiesInformation[i].bloodAmountLow, enemiesInformation[i].bloodAmountHigh);
                                if (winterWarriorTracking[eI]) {
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
                        if (winterWarriorTracking[eI]) {
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
                } else if (actionChoice[eI] <= enemiesInformation[i].fadeChance) {
                        if (!enemyFade[eI]) {
                                displayBlock(enemyFadeActionImg[eI]);
                        } else {
                                enemyRandomDamage[eI] = createRandomNumber(enemiesInformation[i].attackDamageLow, enemiesInformation[i].attackDamageHigh);
                                enemyAttackActionNumber[eI].innerText = enemyRandomDamage[eI];
                                displayBlock(enemyAttackActionDiv[eI], enemyAttackActionImg[eI], enemyAttackActionNumber[eI]);
                        }
                } else {
                        ghostIndex--;
                        enemyAttackActionNumber[eI].innerText = ghostIndex;
                        enemyAttackActionNumber[eI].classList = ("ghost-number");
                        enemyAttackActionNumber[eI].style = `opacity: ${ghostIndex + 2}0%`
                        displayBlock(enemyAttackActionDiv[eI], enemyAttackActionNumber[eI]);
                }
                eI++
        });
        eI = 0;
}
let winterWarriorTracking = [false, false, false, false];
let enemyFade = [false, false, false];
let enemyFadeCount = [0, 0, 0];
let damageTakenThisTurn = 0;
function endTurn() {
        if (!enemiesAreDead) {
                // RESET MANA AND DEBUFFS
                let hasRegen = checkRegenHeal();
                playerWindswept = false;
                displayNone(playerWindsweptImg);
                if (trackEnemies[0] !== 11 && trackEnemies[0] !== 48) {
                        if (winterWarrior && !winterWarriorTracking[3] && playerFrostbite) {
                                winterWarriorTracking[3] = true;
                        } else {
                                winterWarriorTracking[3] = false;
                                playerFrostbite = false;
                                displayNone(playerFrostbiteImg);
                        }
                }
                enemiesAlive = numberOfEnemies - enemyIsDead.filter(Boolean).length;
                // FUNCTIONS TRIGGERS WHEN END TURN BUTTON IS CLICKED
                const enemyTurn = () => {
                        checkEnemyBurn([eI]);
                        if (pyromancer) {
                                checkEnemyBurn([eI]);
                        }
                        // CHECK IF ENEMY IS DEAD
                        if (!enemyIsDead[eI]) {
                                        checkEnemyBloodSiphon([eI]);
                                        if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].attackChance) {
                                                // ATTACK
                                                damagePlayer(enemyRandomDamage[eI], eI);
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].blockChance) {
                                                // BLOCK
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
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].regenChance) {
                                                if (enemyCurrentHealth[eI].innerText < enemyMaxHealth[eI].innerText - enemyRandomRegen[eI]) {
                                                        // REGEN
                                                        enemyGainRegeneration(enemyRandomRegen[eI], eI);
                                                } else {
                                                        // ATTACK
                                                        damagePlayer(enemyRandomDamage[eI], eI);
                                                }
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].bloodChance) {
                                                if (enemyCanGainBlood && parseFloat(enemyCurrentHealth[eI].innerText) < parseFloat(enemyMaxHealth[eI].innerText) && parseFloat(enemyBloodNumber[eI].innerText) <= 1) {
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
                                                if (winterWarrior) {
                                                        winterWarriorTracking[3] = true;
                                                }
                                                displayBlock(playerFrostbiteImg);        
                                        } else if (actionChoice[eI] <= enemiesInformation[trackEnemies[eI]].fadeChance) {
                                                if (!enemyFade[eI]) {
                                                        // FADE
                                                        enemyFade[eI] = true;
                                                        enemyImg[eI].style.opacity = ".5";
                                                        displayBlock(enemyFadeImg[eI]);
                                                } else {
                                                        // ATTACK
                                                        damagePlayer(enemyRandomDamage[eI], eI);
                                                }
                                        } else {
                                                if (ghostIndex === 1) {
                                                        playerCurrentHealth.innerText -= 1000;
                                                        topBarHealthNumber.innerText -= 1000;
                                                }
                                        }
                                // RESET ACTIONS
                                displayNone(enemyAttackActionDiv[eI], enemyBlockActionDiv[eI], enemyHealActionDiv[eI], enemyBurnActionDiv[eI], enemyThornsActionImg[eI], enemyThornsActionNumber[eI],
                                        enemyRegenActionImg[eI], enemyRegenActionNumber[eI], enemyWindsweptActionImg[eI], enemyFrostbiteActionImg[eI], enemyWindsweptImg[eI], enemyFadeActionImg[eI]);
                                enemyWindswept[eI] = false;
                                if (winterWarrior && !winterWarriorTracking[eI] && enemyFrostbite[eI]) {
                                        winterWarriorTracking[eI] = true;
                                } else {
                                        enemyFrostbite[eI] = false;
                                        winterWarriorTracking[eI] = false;
                                        displayNone(enemyFrostbiteImg[eI]);
                                }
                                concentratedFireTracking[eI] = false;
                                if (enemyFade[eI]) {
                                        enemyFadeCount[eI]++;
                                        if (enemyFadeCount[eI] === 3) {
                                                enemyFade[eI] = false;
                                                enemyFadeCount[eI] = 0;
                                                enemyImg[eI].style.opacity = "1";
                                                displayNone(enemyFadeImg[eI]);
                                        }
                                }
                                checkEnemyRegenHeal([eI]);
                        }
                        eI++;
                }
                setTimeout(enemyTurn, 0 + (hasRegen * 400));
                if (numberOfEnemies > 1) {
                    setTimeout(enemyTurn, 400 + (hasRegen * 400));
                }
                if (numberOfEnemies === 3) {
                        setTimeout(enemyTurn, 800 + (hasRegen * 400));
                }
                setTimeout(function() {
                        checkPlayerBurn();
                        if (pyromancer) {
                                checkPlayerBurn();
                        }
                        checkHealth();
                        removeCardClicked();
                        checkBloodSiphon();
                        checkTerrasBlessing();
                        addCardsToHand();
                        checkIfEnemyDead();
                        reduceAllAttack = false;
                        damageThisTurn = 0;
                        airBubble = [];
                        if (bloodAmulet) {
                                playerBloodNumber.innerText = parseFloat(playerBloodNumber.innerText) + 1;
                                displayBlock(playerBloodImg, playerBloodNumber);
                                bloodAmulet = false;
                        }
                        turnEnded = true;
                        if (grovetender) {
                                playerThornsNumber.innerText = parseFloat(playerThornsNumber.innerText) + 2;
                                displayBlock(playerThornsImg, playerThornsNumber);
                        }
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
                        checkPlayerEnergize();
                        if (doubleMana) {
                                currentMana.innerText *= 2;
                                doubleMana = false;
                        }
                        if (skippingRocksTurn3.length > 0) {
                                skippingRocksTurn3.forEach(r => {
                                        gainBlock(16);
                                        gainThorns(4);
                                });
                        }
                        skippingRocksTurn3 = [];
                        if (skippingRocks.length > 0) {
                                skippingRocks.forEach(r => {
                                        gainBlock(8);
                                        gainThorns(2);
                                        skippingRocksTurn3.push(true);
                                });
                        }
                        skippingRocks = [];
                        if (waterOrb) {
                                playerHeal(Math.floor(damageTakenThisTurn * .5));
                                waterOrb = false;
                                fxSanguineSpring.play();
                        }
                        //console.log("WATER WALL HEAL: ", damageTakenThisTurn);
                        damageTakenThisTurn = 0;
                        //console.log("WATER WALL HEAL: ", damageTakenThisTurn);
                        updateCardText();
                        if (numberOfEnemies === 1) {
                                enemyAction(trackEnemies[0]);
                        } else if (numberOfEnemies === 2) {
                                enemyAction(trackEnemies[0], trackEnemies[1]);
                        } else {
                                enemyAction(trackEnemies[0], trackEnemies[1], trackEnemies[2]);
                        }
                }, (numberOfEnemies - 1 + hasRegen) * 500);
        }
}