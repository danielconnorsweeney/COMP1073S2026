let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;

const decision = document.querySelector("#decision");

if (health < 30 && enemyNearby) {
    decision.textContent = "CRITICAL ALERT: Immediate Evacuation Required";
} else if (ammo < 5 || shield === false) {
    decision.textContent = "Warning: Low Resources";
} else if (missionProgress === 100) {
    decision.textContent = "Mission Complete Successfully";
} else if (missionProgress >= 1 && missionProgress <= 70) {
    decision.textContent = "Mission In Progress";
} else if (missionProgress > 70 && enemyNearby === false) {
    decision.textContent = "Approaching Mission Completion";
} else {
    decision.textContent = "System Stable";
}