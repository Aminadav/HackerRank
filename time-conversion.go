https://www.hackerrank.com/challenges/time-conversion/submissions

package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"time"
)

func main() {

	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	current := scanner.Text()
	current = strings.ToLower(current)
	date, _ := time.Parse("03:04:05pm", current)
	fmt.Println(date.Format("15:04:05"))

}
