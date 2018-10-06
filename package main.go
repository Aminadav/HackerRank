// https://www.hackerrank.com/challenges/diagonal-difference

package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
)

func main() {
	//  Get N
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Split(bufio.ScanWords)
	scanner.Scan()
	NByte, err := strconv.ParseInt(scanner.Text(), 0, 64)
	if err != nil {
		fmt.Println(err)
		return
	}

	N := int64(NByte)

	var Row, Column int64
	Row = 1
	Column = 1
	var sum1, sum2 int64
	for scanner.Scan() {
		currentByte, _ := strconv.ParseInt(scanner.Text(), 0, 64)
		current := int64(currentByte)

		if Column == N+1 {
			Row++
			Column = 1
		}

		if Row == Column {
			sum1 += current
		}
		if Row == N+1-Column {
			sum2 += current
		}

		Column++

	}
	fmt.Println(math.Abs(float64(sum1 - sum2)))

}
