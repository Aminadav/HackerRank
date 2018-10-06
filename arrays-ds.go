// https://www.hackerrank.com/challenges/arrays-ds

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

var x = bufio.NewScanner(os.Stdin)

func main() {

	_ = scanInt()

	sl := scanIntSlice()

	newSlice := reverseSlice(sl)
	newSliceStr := strings.Join(newSlice, " ")
	fmt.Print(newSliceStr)
}
func reverseSlice(input []string) []string {
	newSlice := make([]string, len(input))
	for i, v := range input {
		newSlice[len(input)-i-1] = v
	}
	return newSlice
}

func scanInt() int {
	x.Scan()
	ans, _ := strconv.ParseInt(x.Text(), 0, 0)
	return int(ans)
}
func scanIntSlice() []string {
	x.Scan()
	st := x.Text()
	return strings.Split(st, " ")
}
