class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(value) {
    if (value <= 0)
      throw new Error("Deposit amount cannot be negative or zero");
    if (!Number.isInteger(value)) throw new Error("Please input a number");
    this.balance += value;
    this.transactions.push({
      date: new Date().toDateString(),
      amount: `+${value}`,
      balance: this.balance
    });
  }

  withdraw(value) {
    if (value > this.balance) throw new Error("Insufficient balance");
    if (value === 0) throw new Error("Withdrawal amount cannot be zero");
    if (!Number.isInteger(value)) throw new Error("Please input a number");
    this.balance -= value;
    this.transactions.push({
      date: new Date().toDateString(),
      amount: `-${value}`,
      balance: this.balance
    });
  }

  statement() {
    console.log("DATE\t\t\tAMOUNT\t\tBALANCE");
    this.transactions.map(transaction => {
      console.log(
        `${transaction.date}\t\t${transaction.amount}\t\t${transaction.balance}`
      );
    });
  }

  currBalance() {
    console.log(this.balance);
  }
}

module.exports = BankAccount;
