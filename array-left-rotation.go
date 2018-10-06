// https://www.hackerrank.com/challenges/array-left-rotation

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	_, nLeft, slice := getInput()
	newSlice := append(slice[nLeft:], slice[0:nLeft]...)
	fmt.Println(strings.Join(newSlice, " "))
}

func getInput() (int64, int64, []string) {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Split(bufio.ScanWords)
	scanner.Scan()
	arrayLength, _ := strconv.ParseInt(scanner.Text(), 0, 64)
	scanner.Scan()
	nLeft, _ := strconv.ParseInt(scanner.Text(), 0, 64)
	slice := make([]string, arrayLength)
	i := 0
	for scanner.Scan() {
		// slice = append(slice, scanner.Text())
		slice[i] = scanner.Text()
		i++
	}
	return arrayLength, nLeft, slice
}
