// https://www.hackerrank.com/challenges/compare-the-triplets/

function main() {
  var a0_temp = readLine().split(" ");
  var a0 = parseInt(a0_temp[0]);
  var a1 = parseInt(a0_temp[1]);
  var a2 = parseInt(a0_temp[2]);
  var b0_temp = readLine().split(" ");
  var b0 = parseInt(b0_temp[0]);
  var b1 = parseInt(b0_temp[1]);
  var b2 = parseInt(b0_temp[2]);

  var alice, bob;
  alice = a0 > b0 ? 1 : 0;
  alice = alice + (a1 > b1 ? 1 : 0);
  alice = alice + (a2 > b2 ? 1 : 0);

  bob = a0 < b0 ? 1 : 0;
  bob = bob + (a1 < b1 ? 1 : 0);
  bob = bob + (a2 < b2 ? 1 : 0);

  console.log(alice + " " + bob);
}
