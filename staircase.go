// https://www.hackerrank.com/challenges/staircase/problem

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	nByte, _ := strconv.ParseInt(scanner.Text(), 0, 64)
	n := int64(nByte)
	var j, i int64
	for i = 1; i <= n; i++ {
		for j = 1; j <= n; j++ {
			if i < (n - j + 1) {
				fmt.Print(" ")
			} else {
				fmt.Print("#")
			}
		}
		fmt.Print("\n")
	}
}


