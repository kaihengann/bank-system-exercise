const BankAccount = require("./bank-system.js");

describe("BankAccount", () => {
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
});
