// https: // www.hackerrank.com/challenges/magic-square-forming/problem

'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', inputStdin= > {
    inputString += inputStdin
})

process.stdin.on('end', function() {
    inputString = inputString.replace( /\s *$/, '')
    .split('\n')
        .map(str = > str.replace( /\s *$/, ''))

    main()
})

function readLine() {
    return inputString[currentLine++]
}

// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    var minCost = 100
    var t = [
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [2, 7, 6, 9, 5, 1, 4, 3, 8],
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
    ]

    for(var i=0
        i < 8
        i++) {
        var cost
        cost = Math.abs(t[i][0]-s[0][0]) + Math.abs(t[i][1] -
                                                    s[0][1]) + Math.abs(t[i][2]-s[0][2])
        cost += Math.abs(t[i][3]-s[1][0]) + Math.abs(t[i]
                                                     [4]-s[1][1]) + Math.abs(t[i][5]-s[1][2])
        cost += Math.abs(t[i][6]-s[2][0]) + Math.abs(t[i]
                                                     [7]-s[2][1]) + Math.abs(t[i][8]-s[2][2])
        if(cost < minCost) minCost = cost
    }
    return minCost
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    let s = Array(3)

    for (let i=0
         i < 3
         i++) {
        s[i] = readLine().split(' ').map(sTemp= > parseInt(sTemp, 10))
    }

    const result = formingMagicSquare(s)

    ws.write(result + '\n')

    ws.end()
}
