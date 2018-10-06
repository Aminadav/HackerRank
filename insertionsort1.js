// https://www.hackerrank.com/challenges/insertionsort1

function processData(input) {
  //Enter your code here
  ar = input.split("\n")[1].split(" ");

  var n = ar[ar.length - 1];

  for (i = ar.length - 1; i >= 0; i--) {
    if (ar[i - 1] > n) {
      ar[i] = ar[i - 1];
      console.log(ar.join(" "));
    } else {
      ar[i] = n;
      console.log(ar.join(" "));
      break;
    }
  }
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
