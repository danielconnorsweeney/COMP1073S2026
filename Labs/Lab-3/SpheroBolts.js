async function startProgram() {
    let turnCounter = 0;
    await roll(0, 20, 1.25);
    turnCounter++;
    await roll(90, 20, 5);
    turnCounter++
    await roll(180, 20, 1.25);
    turnCounter++
    await roll(90, 20, 4);
    turnCounter++
    await speak(`I turned ${turnCounter} times`);
    exitProgram();
}