package main

import (
	"fmt"
	"sync"
)

type Container struct {
	mutex    sync.Mutex
	counters map[string]int
}

func (container *Container) inc(name string) {

	container.mutex.Lock()
	defer container.mutex.Unlock()
	container.counters[name]++
}

func main() {
	container := Container{

		counters: map[string]int{"a": 0, "b": 0},
	}

	var wg sync.WaitGroup

	doIncrement := func(name string, n int) {
		for i := 0; i < n; i++ {
			container.inc(name)
		}
		wg.Done()
	}

	wg.Add(3)
	go doIncrement("a", 10000)
	go doIncrement("a", 10000)
	go doIncrement("b", 10000)

	wg.Wait()
	fmt.Println(container.counters)
}

//map[a:20000 b:10000]
//
//Process finished with the exit code 0

//GOROOT=/usr/local/go #gosetup
//GOPATH=/Users/mac_jy.lee/Documents/sync/space/awesome-computer-science:/usr/local/go #gosetup
///usr/local/go/bin/go build -o /private/var/folders/_4/j5qrp4yj5pj7jwmn77wdbsl40000gn/T/GoLand/___go_build_mutex_go /Users/mac_jy.lee/Documents/sync/space/awesome-computer-science/computer_science/mutex/mutex.go #gosetup
///private/var/folders/_4/j5qrp4yj5pj7jwmn77wdbsl40000gn/T/GoLand/___go_build_mutex_go
//fatal error: concurrent map writes
//
//goroutine 18 [running]:
//main.(*Container).inc(...)
///Users/mac_jy.lee/Documents/sync/space/awesome-computer-science/computer_science/mutex/mutex.go:17
//main.main.func1({0x1002c6897, 0x1}, 0x2710)
///Users/mac_jy.lee/Documents/sync/space/awesome-computer-science/computer_science/mutex/mutex.go:30 +0x60
//created by main.main
///Users/mac_jy.lee/Documents/sync/space/awesome-computer-science/computer_science/mutex/mutex.go:36 +0x160
//
//goroutine 1 [semacquire]:
//sync.runtime_Semacquire(0x140000021a0?)
///usr/local/go/src/runtime/sema.go:62 +0x28
//sync.(*WaitGroup).Wait(0x140000a4010)
///usr/local/go/src/sync/waitgroup.go:139 +0x80
//main.main()
///Users/mac_jy.lee/Documents/sync/space/awesome-computer-science/computer_science/mutex/mutex.go:40 +0x1f0
//
//goroutine 19 [runnable]:
//main.main.func3()
///Users/mac_jy.lee/Documents/sync/space/awesome-computer-science/computer_science/mutex/mutex.go:37
//runtime.goexit()
///usr/local/go/src/runtime/asm_arm64.s:1172 +0x4
//created by main.main
///Users/mac_jy.lee/Documents/sync/space/awesome-computer-science/computer_science/mutex/mutex.go:37 +0x1a4
//
//goroutine 20 [runnable]:
//main.(*Container).inc(...)
///Users/mac_jy.lee/Documents/sync/space/awesome-computer-science/computer_science/mutex/mutex.go:17
//main.main.func1({0x1002c6898, 0x1}, 0x2710)
///Users/mac_jy.lee/Documents/sync/space/awesome-computer-science/computer_science/mutex/mutex.go:30 +0x60
//created by main.main
///Users/mac_jy.lee/Documents/sync/space/awesome-computer-science/computer_science/mutex/mutex.go:38 +0x1e8
//
//Process finished with the exit code 2
