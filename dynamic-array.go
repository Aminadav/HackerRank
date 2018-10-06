// https://www.hackerrank.com/challenges/dynamic-array

package main

import "bufio"
import "strings"
import "strconv"
import "fmt"
import "os"

var scanner = bufio.NewScanner(os.Stdin)
var lastAns int64
var N int64

func main() {
	N, _ = getNQFromInput()
	seq := make([][]int64, N)
	for scanner.Scan() {
		q1, x, y := getQueryParams()
		index := query1getIndex(x)
		if q1 == 1 {
			seq[index] = append(seq[index], y)
		} else if q1 == 2 {
			lastAns = seq[index][y%int64(len(seq[index]))]
			fmt.Println(lastAns)
		}
	}
}

func query1getIndex(x int64) int64 {
	return ((x ^ lastAns) % N)
}

func getQueryParams() (int64, int64, int64) {
	line := scanner.Text()
	lineSplit := strings.Split(line, " ")
	q1, _ := strconv.ParseInt(lineSplit[0], 0, 64)
	q2, _ := strconv.ParseInt(lineSplit[1], 0, 64)
	q3, _ := strconv.ParseInt(lineSplit[2], 0, 64)
	return int64(q1), int64(q2), int64(q3)
}

func getNQFromInput() (int64, int64) {
	scanner.Scan()
	line := strings.Split(scanner.Text(), " ")
	n, _ := strconv.ParseUint(line[0], 0, 64)
	y, _ := strconv.ParseUint(line[0], 0, 64)
	return int64(n), int64(y)
}
