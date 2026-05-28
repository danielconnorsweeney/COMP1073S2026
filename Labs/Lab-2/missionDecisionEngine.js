let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;
const decision = document.querySelector("#decision");

decision.textContent = "System Stable";

if (health < 30 && enemyNearby){
    decision.textContent = "CRITICAL ALERT: Immediate Evacuation Required";
} else if (ammo < 5 || !shield){
    decision.textContent = "Warning: Low Resources";
} else if (1 < missionProgress < 70){
    decision.textContent = "Mission In Progress";
} else if (missionProgress > 70 && !enemyNearby){
    decision.textContent = " Mission Complete Successfully";
}