// https://www.hackerrank.com/challenges/designer-pdf-viewer

/*
	hieght[0] hieght[1] ... hieght[25]
	word
*/

package main
import (
	"fmt"
	"os"
	"bufio"
	"strconv"
)

func main(){
	scanner:=bufio.NewScanner(os.Stdin)
	scanner.Split(bufio.ScanWords)
	var heights [26]float64
	for i:=0;i<26;i++ {
		scanner.Scan()
		heights[i],_=strconv.ParseFloat(scanner.Text(),0)
		// =float64(tmp)		
	}
	// fmt.Println(heights)
	scanner.Scan()
	word:=scanner.Text()
	var max float64
	for i,x:=range word {
		letter:=x-97
		if heights[letter]>max || i==0 {
			max=heights[letter]
		}
	}
	fmt.Println(int64(max*float64(len(word))))
}