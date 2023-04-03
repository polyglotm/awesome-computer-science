//package main
//
//import (
//"fmt"
//"sync"
//)

package main

import "fmt"

func fibRecursion(n int, count *int) int {
	*count++
	if n < 2 {
		return n
	}

	return fibRecursion(n-1, count) + fibRecursion(n-2, count)
}

func fibRecursionWithMemoization(n int, count *int, hashTable *map[int]int) {
	//if *hashTable[n] != nil {
	//
	//}
	if val, ok := (*hashTable[n]) {

	}

	//if val, ok := *hashTable[n]; ok {
	//	return val
	//}

}

func main() {
	count := 0
	fmt.Println(fibRecursion(5, &count))
	fmt.Println("count: ", count)

	count = 0
	fmt.Println(fibRecursion(20, &count))
	fmt.Println("count: ", count)

	hashTable := map[int]int{}
	hashTable[0] = 0
	hashTable[1] = 1

	fmt.Println(fibRecursionWithMemoization(20, &count, &hashTable))
}
