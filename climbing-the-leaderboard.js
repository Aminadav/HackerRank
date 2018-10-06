// https://www.hackerrank.com/challenges/climbing-the-leaderboard

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
  /**
        Reverse alice scores
        
        i=0
        currentRank=0
        iterate over each alice score:                        
            if alice > score[i]:
                aliceRank=currentRank
            if alice!=score[i]
                i++
            if score[i]!=score[i-1]:
                rank++
    */
  var j = 0;
  var rank = 1;
  var aliceRank = [];
  for (var i = alice.length - 1; i >= 0; i--) {
    while (alice[i] < scores[j]) {
      // if(alice[i]!=scores[j]) {
      if (scores[j] != scores[j - 1]) rank++;
      j++;
      if (j >= scores.length) break;
    }
    aliceRank.unshift(rank);
  }
  return aliceRank;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const scoresCount = parseInt(readLine(), 10);

  const scores = readLine()
    .split(" ")
    .map(scoresTemp => parseInt(scoresTemp, 10));

  const aliceCount = parseInt(readLine(), 10);

  const alice = readLine()
    .split(" ")
    .map(aliceTemp => parseInt(aliceTemp, 10));

  let result = climbingLeaderboard(scores, alice);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
