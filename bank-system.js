class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(value) {
    if (value < 0) {
      throw new Error();
    }
    this.balance += value;
  }
}

module.exports = BankAccount;
