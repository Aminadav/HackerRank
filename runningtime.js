// https://www.hackerrank.com/challenges/runningtime

function processData(input) {
  //Enter your code here
  ar = input
    .split("\n")[1]
    .split(" ")
    .map(function(i) {
      return parseFloat(i);
    });
  //console.log('before',ar)
  sort(ar);
}

function sort(ar) {
  ar = ar.map(function(i) {
    return parseFloat(i);
  });
  var step = 0;
  for (var i = 1; i < ar.length; i++) {
    t = ar[i];
    n = i;
    for (var j = i - 1; j >= 0; j--) {
      if (ar[j] <= t) {
        break;
      } else {
        step++;
        ar[n] = ar[j];
        ar[j] = t;
        n--;
      }
    }
    //  console.log(ar.join(' '))
  }
  console.log(step);
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
