// https://www.hackerrank.com/challenges/insertionsort2

function processData(input) {
  //Enter your code here
  ar = input.split("\n")[1].split(" ");
  ar = ar.map(function(i) {
    return parseFloat(i);
  });
  sort(ar);
}
function sort(ar) {
  for (var i = 1; i < ar.length; i++) {
    t = ar[i];
    n = i;
    for (var j = i - 1; j >= 0; j--) {
      if (ar[j] <= t) {
        break;
      } else {
        ar[n] = ar[j];
        ar[j] = t;
        n--;
      }
    }
    console.log(ar.join(" "));
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
