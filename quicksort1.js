// https://www.hackerrank.com/challenges/quicksort1

function processData(input) {
  //Enter your code here
  var ar = input
    .split("\n")[1]
    .split(" ")
    .map(function(i) {
      return parseFloat(i);
    });
  var left = [],
    right = [],
    equal = [];
  var p = ar[0];
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] > p) {
      right.push(ar[i]);
    } else if (ar[i] < p) {
      left.push(ar[i]);
    } else {
      equal.push(ar[i]);
    }
  }
  console.log(left.join(" ") + " " + equal.join(" ") + " " + right.join(" "));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
