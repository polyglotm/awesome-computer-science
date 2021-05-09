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
