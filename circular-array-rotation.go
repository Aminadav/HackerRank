// https://www.hackerrank.com/challenges/circular-array-rotation

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

	scanner.Scan()
	n, _ := strconv.ParseInt(scanner.Text(), 0, 0)

	scanner.Scan()
	k, _ := strconv.ParseInt(scanner.Text(), 0, 0)

	scanner.Scan()
	q, _ := strconv.ParseInt(scanner.Text(), 0, 0)

	mov := k % n
	// fmt.Println("mov=",mov)
	a := make([]int64, n, n)
	for i := int64(0); i < n; i++ {
		// fmt.Println("i=",i)
		newPosition := i + mov
		// fmt.Println("newPosition=",newPosition)
		if newPosition >= n {
			newPosition = newPosition - n
		}
		// fmt.Println("newPosition=",newPosition)
		scanner.Scan()
		v, _ := strconv.ParseInt(scanner.Text(), 0, 0)
		a[newPosition] = v
	}
	// fmt.Println(a)
	for i := int64(0); i < q; i++ {
		scanner.Scan()
		v, _ := strconv.ParseInt(scanner.Text(), 0, 0)
		fmt.Println(a[v])
	}

}