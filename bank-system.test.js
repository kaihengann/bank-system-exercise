const BankAccount = require("./bank-system.js");

describe("BankAccount", () => {
  global.console.log = jest.fn();
  const bankAccount1 = new BankAccount();

  beforeEach(() => {
    bankAccount1.balance = 0;
  });

  test("bankAccount1 should be an instance of BankAccount class", () => {
    expect(bankAccount1.balance).toBe(0);
  });

  test("bankAccount1 should have balance of 5 after deposit of 5", () => {
    bankAccount1.deposit(5);
    expect(bankAccount1.balance).toBe(5);
  });

  test("should have throw error if deposit value is negative", () => {
    expect(() => bankAccount1.deposit(-1)).toThrow(
      "Deposit cannot be negative"
    );
  });

  test("bankAccount1 should throw error if deposit value is a non-number", () => {
    expect(() => bankAccount1.deposit("garbage")).toThrow(
      "Please input a number"
    );
  });

  test("bankAccount1 with balance 10 should have balance of 5 when there is a withdrawal of 5", () => {
    bankAccount1.deposit(10);
    bankAccount1.withdraw(5);
    expect(bankAccount1.balance).toBe(5);
  });

  test("bankAccount1 with balance 10 should throw an error when there is a withdrawal of 15", () => {
    bankAccount1.deposit(10);
    expect(() => {
      bankAccount1.withdraw(15);
    }).toThrow("You are attempting to withdraw more than your balance.");
  });

  test("bankAccount1 should throw error if withdrawal value is a non-number", () => {
    expect(() => bankAccount1.withdraw("@#$@#")).toThrow(
      "Please input a number"
    );
  });

  test("statement should return header", () => {
    bankAccount1.statement();
    expect(global.console.log).toHaveBeenCalledWith(
      "DATE\t\t\tAMOUNT\t\tBALANCE"
    );
  });

  test("statement should return header with 1 transaction", () => {
    const bankAccount2 = new BankAccount();
    bankAccount2.deposit(100);
    bankAccount2.statement();

    const dateString = new Date().toDateString();

    expect(global.console.log).toHaveBeenCalledWith(
      "DATE\t\t\tAMOUNT\t\tBALANCE"
    );
    expect(global.console.log).toHaveBeenCalledWith(
      `${dateString}\t\t+100\t\t100`
    );
  });

  test("statement should return header with 2 transactions", () => {
    const bankAccount2 = new BankAccount();
    bankAccount2.deposit(100);
    bankAccount2.withdraw(25);
    bankAccount2.statement();

    const dateString = new Date().toDateString();

    expect(global.console.log).toHaveBeenCalledWith(
      "DATE\t\t\tAMOUNT\t\tBALANCE"
    );
    expect(global.console.log).toHaveBeenCalledWith(
      `${dateString}\t\t+100\t\t100`
    );

    expect(global.console.log).toHaveBeenCalledWith(
      `${dateString}\t\t-25\t\t75`
    );
  });

  test("should show balance", () => {
    const bankAccount2 = new BankAccount();
    bankAccount2.deposit(100);
    bankAccount2.currBalance();
    expect(global.console.log).toHaveBeenCalledWith(bankAccount2.balance);
  });
});
