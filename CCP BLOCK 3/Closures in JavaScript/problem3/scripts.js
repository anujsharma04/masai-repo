function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    deposit(amount) {
      if (amount <= 0) {
        console.error("❌ Deposit amount must be positive.");
        return balance;
      }
      balance += amount;
      return balance;
    },

    withdraw(amount) {
      if (amount <= 0) {
        console.error("❌ Withdrawal amount must be positive.");
        return balance;
      }
      if (amount > balance) {
        console.error("❌ Insufficient funds.");
        return balance;
      }
      balance -= amount;
      return balance;
    },

    getBalance() {
      return balance;
    }
  };
}



const account = createBankAccount(100);

console.log(account.deposit(50));     // Output: 150
console.log(account.withdraw(30));    // Output: 120
console.log(account.getBalance());    // Output: 120

// Trying invalid operations
account.deposit(-20);                 // Output: ❌ Deposit amount must be positive.
account.withdraw(200);               // Output: ❌ Insufficient funds.
console.log(account.balance);         // Output: undefined (balance is private)
