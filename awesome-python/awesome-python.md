## About 'max' function

```python
def test_max():
    # max function return maximum value of iterable object

    value = [1, 2, 3, 4, 5]
    assert max(value) == 5

    # NOTE: 'str' type is iterable.
    value = '12345'
    assert max(value) == '5'

    value = ['a', 'b', 'c', 'd', 'e']
    assert max(value) == 'e'

    # NOTE: 'str' type is iterable.
    value = 'abcde'
    assert max(value) == 'e'

    # # TypeError: 'int' object is not iterable
    # list = 12345
    # assert max(list) == 12345
```
