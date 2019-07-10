const BankAccount = require("./bank-system.js");

describe("BankAccount", () => {
  global.console.log = jest.fn();

  const bankAccount1 = new BankAccount();

  beforeEach(() => {
    bankAccount1.balance = 0;
  });

  test("bankAccount1 should be an instance of BankAccount class", () => {
    expect(bankAccount1.balance).toEqual(0);
  });

  test("bankAccount1 should have balance of 5 after deposit of 5", () => {
    bankAccount1.deposit(5);
    expect(bankAccount1.balance).toEqual(5);
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
    bankAccount1.withdrawal(5);
    expect(bankAccount1.balance).toEqual(5);
  });

  test("bankAccount1 with balance 10 should throw an error when there is a withdrawal of 15", () => {
    bankAccount1.deposit(10);
    expect(() => {
      bankAccount1.withdrawal(15);
    }).toThrow("You are attempting to withdraw more than your balance.");
  });

  test("bankAccount1 should throw error if withdrawal value is a non-number", () => {
    expect(() => bankAccount1.withdrawal("@#$@#")).toThrow(
      "Please input a number"
    );
  });

  test("statement should return header", () => {
    bankAccount1.statement();
    expect(global.console.log).toHaveBeenCalledWith(
      "DATE\t\tAMOUNT\t\tBALANCE"
    );
  });

  test("statement should return header with 1 transaction", () => {
    bankAccount1.deposit(100)
    const dateString = Date.now().toDateString()
    const amount = 100
    bankAccount1.statement();

    expect(global.console.log).toHaveBeenCalledWith(
      "DATE\t\tAMOUNT\t\tBALANCE"
    );
    expect(global.console.log).toHaveBeenCalledWith(
      `${dateString}\t\t${amount}\t\t${bankAccount1.balance}`
    );

  });
});
