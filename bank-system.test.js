describe('BankAccount', () => {
  test('bankAccount1 should be an instance of BankAccount class', () => {
    const bankAccount1 = new BankAccount(0)
    expect(bankAccount1.balance).toEqual(0);
  });
});