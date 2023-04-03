from concurrent.futures import ThreadPoolExecutor
from time import sleep


def return_after_5_secs(message):
    sleep(1)
    return message


pool = ThreadPoolExecutor(3)

future = pool.submit(return_after_5_secs, ("hello"))

while not future.done():
    print('-wait')

print(future.result())
