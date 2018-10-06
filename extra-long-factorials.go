// https://www.hackerrank.com/challenges/extra-long-factorials

package main

import (
	"fmt"
	"math/big"
	"os"
	"bufio"
	"strconv"
)	

func main() {
	scanner:=bufio.NewScanner(os.Stdin);
	scanner.Scan()
	max,_:=strconv.ParseInt(scanner.Text(),0,0)
	// Initialize two big ints with the first two numbers in the sequence.
	total := big.NewInt(1)

	// Initialize limit as 10^99, the smallest integer with 100 digits.
	var limit big.Int
	limit.Exp(big.NewInt(10), big.NewInt(99), nil)

	total.MulRange(1, max)

	// Test a for primality.
	// (ProbablyPrimes' argument sets the number of Miller-Rabin
	// rounds to be performed. 20 is a good value.)
	fmt.Println(total)
}
