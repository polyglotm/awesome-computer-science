from concurrent.futures import ThreadPoolExecutor
from time import sleep

def return_after_5_secs(message):
    sleep(3)
    return message


pool = ThreadPoolExecutor(3)

future = pool.submit(return_after_5_secs, ("hello"))


def return_after_10_secs(message):
    sleep(15)
    return message


pool2 = ThreadPoolExecutor(3)

future2 = pool2.submit(return_after_10_secs, ("hello"))

print(f"future1 result:{future.result()}")
print(f"future2 result:{future2.result()}")

print(f"is future1 done :{future.done()}")
print(f"is future2 done :{future2.done()}")
sleep(5)
print(f"is future1 done :{future.done()}")
print(f"future1 result:{future.result()}")

print(f"is future2 done :{future2.done()}")
print(f"future2 result:{future2.result()}")

print('------')
print(f"is future2 done :{future2.done()}")
sleep(5)
print(f"is future2 done :{future2.done()}")
print(f"future2 result:{future2.result()}")
