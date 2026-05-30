const agents = ["Cobra", "Lemur", "Metal", "Genghis"];
const locations = ["Atlantis Colony", "Venus Base", "Galatic City", "Nova Lab"];
const weapons = ["Ray Gun", "Zues Cannon", "Wonder Waffe", "Acid Gat"];
const objectives = ["Raid enemy base", "Hack data", "DDOS server", "Rescue solidier"];
const risks = ["Low", "Medium", "High", "Extreme"];

let agentIndex = -1;
let locationIndex = -1;
let weaponIndex = -1;
let objectiveIndex = -1;
let riskIndex = -1;

let selectedAgent = "";
let selectedLocation = "";
let selectedWeapon = "";
let selectedObjective = "";
let selectedRisk = "";

const agentButton = document.querySelector("#agent-button");
const locationButton = document.querySelector("#location-button");
const weaponButton = document.querySelector("#weapon-button");
const objectiveButton = document.querySelector("#objective-button");
const riskButton = document.querySelector("#risk-button");
const launchButton = document.querySelector("#launch-button");
const resetButton = document.querySelector("#reset-button");

const agentDisplay = document.querySelector("#agent-display");
const locationDisplay = document.querySelector("#location-display");
const weaponDisplay = document.querySelector("#weapon-display");
const objectiveDisplay = document.querySelector("#objective-display");
const riskDisplay = document.querySelector("#risk-display");
const briefingMessage = document.querySelector("#briefing-message");


function changeAgent(){
    agentIndex++;

    if (agentIndex >= agents.length){
        agentIndex = 0;
    }

    selectedAgent = agents[agentIndex];
    agentDisplay.textContent = selectedAgent;
}

function changeLocation(){
    locationIndex++;

    if (locationIndex >= locations.length){
        locationIndex = 0;
    }

    selectedLocation = locations[locationIndex];
    locationDisplay.textContent = selectedLocation;
}

function changeWeapon(){
    weaponIndex++;

    if (weaponIndex >= weapons.length){
        weaponIndex = 0;
    }

    selectedWeapon = weapons[weaponIndex];
    weaponDisplay.textContent = selectedWeapon;
}

function changeObjective(){
    objectiveIndex++;

    if (objectiveIndex >= objectives[objectiveIndex]){
        objectiveIndex = 0;
    }

    selectedObjective = objectives[objectiveIndex];
    objectiveDisplay.textContent = selectedObjective;
}

function changeRisk(){
    riskIndex++;

    if (riskIndex >= risks.length){
        riskIndex = 0;
    }

    selectedRisk = risks[riskIndex];
    riskDisplay.textContent = selectedRisk;
}






// EVENT LISTENERS
agentButton.addEventListener("click", changeAgent);
locationButton.addEventListener("click", changeLocation);
weaponButton.addEventListener("click", changeWeapon);
objectiveButton.addEventListener("click", changeObjective);
riskButton.addEventListener("click", changeRisk);