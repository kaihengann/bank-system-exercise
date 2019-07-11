const BankAccount = require("./bank-system.js");

describe("BankAccount", () => {
  global.console.log = jest.fn();
  const bankAccount1 = new BankAccount();

  beforeEach(() => {
    bankAccount1.balance = 0;
  });

  test("should create an instance of BankAccount class", () => {
    expect(bankAccount1.balance).toBe(0);
  });

  test("should add to balance after deposit", () => {
    bankAccount1.deposit(5);
    expect(bankAccount1.balance).toBe(5);
  });

  test("should throw error if deposit is 0", () => {
    expect(() => bankAccount1.deposit(-1)).toThrow(
      "Deposit amount cannot be negative or zero"
    );
  });

  test("should have throw error if deposit is negative", () => {
    expect(() => bankAccount1.deposit(-1)).toThrow(
      "Deposit amount cannot be negative or zero"
    );
  });

  test("should throw error if deposit value is a non-number", () => {
    expect(() => bankAccount1.deposit("garbage")).toThrow(
      "Please input a number"
    );
  });

  test("should subtract from balance after withdrawal", () => {
    bankAccount1.deposit(10);
    bankAccount1.withdraw(5);
    expect(bankAccount1.balance).toBe(5);
  });

  test("should make balance 0 after withdrawal", () => {
    bankAccount1.deposit(10);
    bankAccount1.withdraw(10);
    expect(bankAccount1.balance).toBe(0);
  });

  test("should throw an error when withdrawal is more than balance", () => {
    bankAccount1.deposit(10);
    expect(() => {
      bankAccount1.withdraw(15);
    }).toThrow("Insufficient balance");
  });

  test("should throw error if withdrawal value is not a number", () => {
    expect(() => bankAccount1.withdraw("@#$@#")).toThrow(
      "Please input a number"
    );
  });

  test("should return statement header", () => {
    bankAccount1.statement();
    expect(global.console.log).toHaveBeenCalledWith(
      "DATE\t\t\tAMOUNT\t\tBALANCE"
    );
  });

  test("should return statement header with 1 transaction", () => {
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

  test("should return statement header with 2 transactions", () => {
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
