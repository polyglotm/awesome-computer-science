/*
leetcode/medium/92. Reverse Linked List II
92-reverse-linked-list-ii
uRL: https://leetcode.com/problems/reverse-linked-list-ii/description/
*/

package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseBetween(head *ListNode, left int, right int) *ListNode {
	nodes := []*ListNode{}

	cursor := head

	for cursor != nil {
		nodes = append(nodes, cursor)
		cursor = cursor.Next
	}

	result := []*ListNode{}

	for i := 0; i < left-1; i++ {
		result = append(result, nodes[i])
	}

	reversedRange := []*ListNode{}

	for i := right - 1; i >= left-1; i-- {
		reversedRange = append(reversedRange, nodes[i])
	}

	result = append(result, reversedRange...)

	for i := right; i < len(nodes); i++ {
		result = append(result, nodes[i])
	}

	for i := 0; i < len(result)-1; i++ {
		result[i].Next = result[i+1]
	}

	result[len(result)-1].Next = nil

	return result[0]
}

func main() {
	//Output: [1,4,3,2,5]

}

//import (
//	"fmt"
//	"regexp"
//	"strconv"
//	"strings"
//)
//
//func sumNumbersInString(s string) string {
//	regex := regexp.MustCompile(`\d+`)
//	numbers := regex.FindAllString(s, -1)
//
//	for _, number := range numbers {
//		sum := 0
//		numArray := strings.Split(number, "")
//
//		for _, n := range numArray {
//			num, _ := strconv.Atoi(n)
//			sum += num
//		}
//
//		fmt.Println(number, sum)
//
//		s = strings.Replace(s, number, strconv.Itoa(sum), -1)
//	}
//
//	return s
//}
//
//func multiply(s string) string {
//	for i := 0; i < len(s)-2; i++ {
//		if s[i] == '(' && s[i+2] == ')' {
//			num, _ := strconv.Atoi(string(s[i+1]))
//			num = num * 2
//			numStr := strconv.Itoa(num)
//
//			s = s[:i] + numStr + s[i+3:]
//
//		}
//	}
//
//	return s
//}
//
//func scoreOfParentheses(s string) int {
//	s = strings.Replace(s, "()", "1", -1)
//	s = sumNumbersInString(s)
//
//	for len(s) > 1 {
//
//		fmt.Println(s)
//		if len(s) > 2 {
//			s = multiply(s)
//		}
//	}
//
//	result, _ := strconv.Atoi(s)
//
//	return result
//}
//
//func main() {
//	s := "()"
//	//fmt.Println(scoreOfParentheses(s), "-")
//	//Output: 1
//
//	s = "(())"
//	//fmt.Println(scoreOfParentheses(s), "-")
//	//Output: 2
//
//	s = "()()"
//	//fmt.Println(scoreOfParentheses(s))
//	//Output: 2
//
//	s = "(())(())"
//	//fmt.Println(scoreOfParentheses(s))
//
//	s = "(()(()()))"
//	fmt.Println(scoreOfParentheses(s))
//	// 10
//}
