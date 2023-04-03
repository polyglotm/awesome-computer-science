# NOTE: since 3.3 yield support
#  https://docs.python.org/3/whatsnew/3.3.html
import pdb


def infinite_sequence():
    num = 0
    while True:
        yield num
        num += 1


stream = infinite_sequence()

print(next(stream))
print(next(stream))
print(next(stream))
print(next(stream))

pdb.set_trace()
