module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turnsSpeedInSecond = turnsSpeed / 3600;
    let moves = Math.pow(2, disksNumber) - 1;
    let time =  moves / turnsSpeedInSecond;
    return {
        turns: moves,
        seconds: time
    }
}