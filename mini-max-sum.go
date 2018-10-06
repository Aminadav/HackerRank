// https://www.hackerrank.com/challenges/mini-max-sum/problem

/*
	mini-max-sum
	a[0] a[1] a[2] a[3] a[4] a[5]

	min of except 1
	max of except 1
*/
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Split(bufio.ScanWords)
	var min, max int64
	var total int64
	for i := 0; i < 5; i++ {
		scanner.Scan()
		this, _ := strconv.ParseInt(scanner.Text(), 0, 0)
		if i == 0 {
			min = this
			max = this
		}
		if this > max {
			max = this
		}
		if this < min {
			min = this
		}
		total += this
	}
	// fmt.Println(total)
	// fmt.Println(min)
	// fmt.Println(max)
	fmt.Println(total-max, total-min)
}
