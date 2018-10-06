// https://www.hackerrank.com/challenges/sparse-arrays

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {

	scanner := bufio.NewScanner(os.Stdin)
	var n int
	{
		scanner.Scan()
		x, _ := strconv.ParseInt(scanner.Text(), 0, 0)
		n = int(x)
	}
	strings := make(map[string]int)
	for i := 1; i <= n; i++ {
		scanner.Scan()
		strings[scanner.Text()]++
	}

	scanner.Scan()

	for scanner.Scan() {
		fmt.Println(strings[scanner.Text()])
	}

}
