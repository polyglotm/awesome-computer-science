# Dictionary

## key must be a string

```python
# Bad
_dict = {
    a: 1,
    b: 2,
}

print(_dict)
# NameError: name 'a' is not defined


# Good
_dict = {
    'a': 1,
    'b': 2,
}
```

## use `in` syntax for checking keys
> dict.has_key() deprecated at [python 3.0](https://docs.python.org/3.0/whatsnew/3.0.html#builtins)

```python
_dict = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3',
}

print('key1' in _dict)
# True

print('key____100' in _dict)
# False

```
