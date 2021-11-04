# Mutex
> Lock (computer science)
> 
> In computer science, a lock or mutex (from mutual exclusion) is a synchronization primitive: a mechanism that enforces limits on access to a resource when there are many threads of execution. A lock is designed to enforce a mutual exclusion concurrency control policy, and with a variety of possible methods there exists multiple unique implementations for different applications.
> 
> [Lock (computer science) - wikipedia](https://en.wikipedia.org/wiki/Lock_(computer_science))

## Example

Let's imagine you implement bank account

Mutex is foundation concep for implement transaction.

```javascript
class Mutex {
  isLocked = false;
  
  lock() {
    this.isLocked = true;
  }
  
  unlock() {
    this.isLocked = false;
  }
}

class Account {
  balance = 0;
  mutex = new Mutex();
  
  constructor(userId, balance) {
    this.userId = userId;
    this.balance = balance;
  }
  
  // put money into account
  deposit(amount) {
    if (amount < 0) {
      return false;
    }
    
    this.balance += amount;
  }
  
  // cash out from account
  withdraw(amount) {
    if (this.mutex.isLocked) {
      return false;
    }
    
    if (amount > this.balance) {
      return false;
    }
    
    this.mutex.lock();
    this.balance -= amount;
    this.mutex.unlock();
    
    return amount;
  }
  
  // transfer money
  transfer(receiverAccount, amount) {
    if (this.mutex.isLocked || receiverAccount.mutex.isLocked) {
      return false;
    }
    
    if (amount > this.balance) {
      return false;
    }
    
    this.mutex.lock();
    receiverAccount.mutex.lock();
    
    try {
      this.balance -= amount;
      receiverAccount.balance += amount;
    } catch (e) {
      /*
        in here must be implement rollback logic carefully.
        because if error raised after some process that will not rollback automatically.
       */
    }
    
    this.mutex.unlock();
    receiverAccount.mutex.unlock();
    
    return amount;
  }
}
```
