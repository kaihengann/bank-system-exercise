const BankAccount = require("./bank-system.js");

describe("BankAccount", () => {
  const bankAccount1 = new BankAccount();

  test("bankAccount1 should be an instance of BankAccount class", () => {
    expect(bankAccount1.balance).toEqual(0);
  });

  test("bankAccount1 should have balance of 5 after deposit of 5", () => {
    bankAccount1.deposit(5);
    expect(bankAccount1.balance).toEqual(5);
  });
});
