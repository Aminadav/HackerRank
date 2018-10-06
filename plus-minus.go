// https://www.hackerrank.com/challenges/plus-minus/problem

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	var i float64
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Split(bufio.ScanWords)
	var positive, negative, zeros float64
	for i = 0; scanner.Scan(); i++ {
		if i == 0 {
			continue
		}
		cByte, _ := strconv.ParseInt(scanner.Text(), 0, 64)
		c := int64(cByte)
		if c > 0 {
			positive++
		} else if c < 0 {
			negative++
		} else {
			zeros++
		}
	}
	i--
	fmt.Println(positive / i)
	fmt.Println(negative / i)
	fmt.Println(zeros / i)
}
