describe('BankAccount', () => {
  test('bankAccount1 should be an instance of BankAccount class', () => {
    const bankAccount1 = new BankAccount()
    expect(bankAccount1 instanceof BankAccount).toEqual(true);
  });
});