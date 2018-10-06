// https://www.hackerrank.com/challenges/2d-array

/*
   Get INT Array from input
*/
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
	"sync"
)

const (
	a = 6
	b = 6
)

var orgArray = new([a][b]int64)
var scanner = bufio.NewScanner(os.Stdin)

func main() {
	get2DIntArrayFromInput()
	var c, d int
	var totalLock sync.Mutex
	var wg sync.WaitGroup
	total := orgArray[0][0]
	first := true
	wg.Add((a - 2) * (b - 2))
	for a1 := 1; a1 < a-1; a1++ {
		for b1 := 1; b1 < a-1; b1++ {
			go func(a1 int, b1 int) {
				thisTotal := orgArray[a1][b1] +
					orgArray[a1-1][b1-1] +
					orgArray[a1-1][b1] +
					orgArray[a1-1][b1+1] +
					// orgArray[a1][b1-1] +
					// orgArray[a1][b1+1] +
					orgArray[a1+1][b1-1] +
					orgArray[a1+1][b1] +
					orgArray[a1+1][b1+1]
				totalLock.Lock()
				if first {
					total = thisTotal
					first = false
				}
				if thisTotal >= total {
					c = a1
					d = b1
					total = thisTotal
				}
				totalLock.Unlock()
				wg.Done()
			}(a1, b1)
		}
	}
	// fmt.Println(c, d)
	wg.Wait()
	fmt.Println(total)
}

func get2DIntArrayFromInput() {
	for i := 0; i < a; i++ {
		getIntArrayFromInput(i)
	}
}
func getIntArrayFromInput(i int) {
	scanner.Scan()
	line := scanner.Text()
	values := strings.Split(line, " ")
	for index, value := range values {
		intValue, _ := strconv.ParseInt(value, 0, 0)
		orgArray[i][index] = int64(intValue)
	}
}
