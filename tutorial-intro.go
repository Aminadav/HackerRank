// https://www.hackerrank.com/challenges/tutorial-intro

function processData(input) {
    //Enter your code here
    input=input.split('\n')
    V=parseFloat(input[0])
    n=parseInt(input[1])
    ar=input[2]
    AR=ar.split(' ')
    for(var i=0;i<AR.length;i++){
        if (AR[i]==V) console.log(i)
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
