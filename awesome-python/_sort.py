_list_1 = [(1, 0), (2, 10), (3, 5), (4, 15), (5, 5), (6, 20)]

_list_1.sort(key=lambda x: x[1])

print(_list_1)
# [(1, 0), (3, 5), (5, 5), (2, 10), (4, 15), (6, 20)]


_list_1.sort(key=lambda x: x[1], reverse=True)
# [(6, 20), (4, 15), (2, 10), (3, 5), (5, 5), (1, 0)]
print(_list_1)
