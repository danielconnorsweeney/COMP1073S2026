const agents = ["Cobra", "Lemur", "Metal", "Genghis"];
const locations = ["Atlantis Colony", "Venus Base", "Galatic City", "Nova Lab"];
const weapons = ["Ray Gun", "Zues Cannon", "Wonder Waffe", "Acid Gat"];
const objective = ["Raid enemy base", "Hack data", "DDOS server", "Rescue solidier"];
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