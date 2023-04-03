class Fibonacci:
    count = 0

    def fibonacci_recursion(self, n: int):
        self.count += 1
        print(self.count)
        if n == 0:
            return 0

        if n == 1:
            return 1

        return self.fibonacci_recursion(n - 1) + self.fibonacci_recursion(n - 2)


# fibonacci_recursion(5)
# (fibonacci_recursion(5 - 1), fibonacci_recursion(5 - 2))
# ((fibonacci_recursion(4 - 1), fibonacci_recursion(4 - 2)), (fibonacci_recursion(3 - 1), fibonacci_recursion(3 - 2)))
# ...

def test_fibonacci_recursion():
    f = Fibonacci()
    # assert fibonacci_recursion(0) == 0
    # assert fibonacci_recursion(1) == 1
    # assert fibonacci_recursion(2) == 1
    # assert fibonacci_recursion(3) == 2
    # assert fibonacci_recursion(4) == 3
    assert f.fibonacci_recursion(7) == 13


def fibonacci_reduce(n, current=0, next=1):
    if n == 0:
        return current

    return fibonacci_reduce(n - 1, next, current + next)


fibonacci_reduce(5)
fibonacci_reduce(4, 1, 1)
fibonacci_reduce(3, 1, 2)
fibonacci_reduce(2, 2, 3)
fibonacci_reduce(1, 3, 5)


def test_fibonacci_reduce():
    assert fibonacci_reduce(0) == 0
    assert fibonacci_reduce(1) == 1
    assert fibonacci_reduce(2) == 1
    assert fibonacci_reduce(3) == 2
    assert fibonacci_reduce(4) == 3
    assert fibonacci_reduce(7) == 13


import math


def fibonacci_algorithm(n):
    phi = (1 + math.sqrt(5)) / 2
    return round(phi ** n / math.sqrt(5))


def test_fibonacci_algorithm():
    assert fibonacci_algorithm(0) == 0
    assert fibonacci_algorithm(1) == 1
    assert fibonacci_algorithm(2) == 1
    assert fibonacci_algorithm(3) == 2
    assert fibonacci_algorithm(4) == 3
    assert fibonacci_algorithm(17) == 1597
    assert fibonacci_algorithm(20) == 6765
    assert fibonacci_algorithm(46) == 1836311903
    assert fibonacci_algorithm(47) == 2971215073


"""
f0 -    0
f1 -    1
f2 -    1
f3 -    2
f4 -    3
f5 -    5
f6 -    8
f7 -    13
"""


def test_summation():
    s = 0
    for i in range(20):
        s += i

    print(s)

    s2 = 1
    for i in range(1, 20):
        s2 *= i
        print(s2)

    print(s2)
    assert True
