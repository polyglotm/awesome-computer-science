# dict_to_list
# https://www.tutorialspoint.com/How-to-convert-Python-Dictionary-to-a-list

d1 = {'name': 'Ravi', 'age': 23, 'marks': 56}
d1.items()

l1 = list(d1.items())

print(l1)
# [('name', 'Ravi'), ('age', 23), ('marks', 56)]
