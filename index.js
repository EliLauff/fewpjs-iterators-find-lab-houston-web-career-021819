const testVar = {};

function testFunc() {
  return "hi";
}

const superbowlWin = function(record) {
  let firstWin = record.find(game => game.result === "W");
  return firstWin === undefined ? undefined : firstWin.year;
};
