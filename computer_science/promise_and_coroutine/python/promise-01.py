import time
import asyncio
from promise import Promise


def some(resolve, reject):
    time.sleep(5)
    resolve('RESOLVED!')


print('-check-point-0')

promise = Promise(some)
promise.then(lambda res: print(res))

print('-check-point-1')


async def some2():
    time.sleep(2)
    print('ok')


some2()
print('-check-point-3')
