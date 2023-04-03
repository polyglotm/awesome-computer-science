_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


def is_odd(n):
    return n % 2 == 1


y = (index for index, value in enumerate(_list) if is_odd(value))
x1 = next(y)
x2 = next(y)

print(x1, x2)
# 0 2
print(next(y))
# 4
print(next(y))
# 6


_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
generator = (index for index, value in enumerate(_list) if value > 10)

temp = None
try:
    temp = next(generator)
except Exception as e:
    print(e)


def test():
    assert x1 == 1
    assert x2 == 3
