class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(value) {
    if (value < 0) {
      throw new Error("Deposit cannot be negative");
    }
    if (!Number.isInteger(value)) throw new Error("Please input a number");
    this.balance += value;
  }

  withdrawal(value) {
    if (value > this.balance)
      throw new Error("You are attempting to withdraw more than your balance.");
    if (!Number.isInteger(value)) throw new Error("Please input a number");
    this.balance -= value;
  }

  statement() {
    console.log("DATE\t\tAMOUNT\t\tBALANCE")
  }
}

module.exports = BankAccount;
