// https://www.hackerrank.com/challenges/crush

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  var A = [];
  var max = 0;
  var sum = 0;

  // init
  for (var i = 0; i < n; i++) {
    A.push(0);
  }
  for (var i = 0; i < queries.length; i++) {
    var [a, b, k] = queries[i];
    A[a - 1] += k;
    if (b < n) A[b] -= k;
    // for (var j = a - 1; j <= b - 1; j++) {
    //   A[j] += k;
    //   if (A[j] > max) max = A[j];
    // }
  }
  for (var i = 0; i < n; i++) {
    sum += A[i];
    if (max < sum) max = sum;
  }
  return max;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
