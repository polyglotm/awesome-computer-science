// https://hussachai.medium.com/error-handling-in-go-a-quick-opinionated-guide-9199dd7c7f76
package main

import (
	"errors"
	"fmt"
)

func Perform() (err error) {
	defer func() {
		if r := recover(); r != nil {
			err = r.(error)
		}
	}()
	GoesWrong()
	return
}

func GoesWrong() {
	panic(errors.New("Fail"))
}

func main() {
	err := Perform()
	fmt.Println(err)
}
