// https://www.hackerrank.com/challenges/simple-array-sum

function main() {
  var n = parseInt(readLine());
  arr = readLine().split(" ");
  arr = arr.map(Number);
  console.log(
    arr.reduce(function(now, old) {
      return old + now;
    }, 0)
  );
}
