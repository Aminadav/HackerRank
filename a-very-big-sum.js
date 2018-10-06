// https://www.hackerrank.com/challenges/a-very-big-sum

function main() {
  var n = parseInt(readLine());
  arr = readLine().split(" ");
  arr = arr.map(Number);
  console.log(
    arr.reduce((now, old) => {
      return now + old;
    }, 0)
  );
}
