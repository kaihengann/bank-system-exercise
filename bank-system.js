class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit (value) {
    this.balance += value
  }
}

module.exports = BankAccount;

