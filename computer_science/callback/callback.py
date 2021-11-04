def some_function(param, callback):
    print('some_function')
    print(f"param : {param}")
    callback()


def callback_function():
    print('calllback_function')


some_function(10, callback_function)

# some_function
# param : 10
# calllback_function
