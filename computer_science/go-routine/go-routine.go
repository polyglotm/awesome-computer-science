package main

import (
	"fmt"
	"time"
)

func f(from string) {
	for i := 0; i < 3; i++ {
		fmt.Println(from, ":", i)
		time.Sleep(100 * time.Millisecond)
	}
}

func main() {
	f("direct")

	go f("goroutine")

	go func(msg string) {
		fmt.Println(msg)
	}("going")

	time.Sleep(time.Second)
	fmt.Println("done")
}

// NOTE: if it was sequential
//direct : 0
//direct : 1
//direct : 2
//goroutine : 0
//goroutine : 1
//goroutine : 2
//going
//done

// NOTE: result
//direct : 0
//direct : 1
//direct : 2
//going
//goroutine : 0
//goroutine : 1
//goroutine : 2
//done
