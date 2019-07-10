class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(value) {
    if (value < 0) {
      throw new Error("Deposit cannot be negative");
    }
    if (!Number.isInteger(value)) throw new Error("Please input a number");
    this.balance += value;
    this.transactions.push({
      date: new Date().toDateString(),
      amount: value,
      balance: this.balance
    });
  }

  withdrawal(value) {
    if (value > this.balance)
      throw new Error("You are attempting to withdraw more than your balance.");
    if (!Number.isInteger(value)) throw new Error("Please input a number");
    this.balance -= value;
  }

  statement() {
    console.log("DATE\t\tAMOUNT\t\tBALANCE");
    console.log(
      `${this.transactions[0].date}\t\t${this.transactions[0].amount}\t\t${
        this.transactions[0].balance
      }`
    );
  }
}

module.exports = BankAccount;
