class Bank {
    bank: {};
  
    constructor(balance: number[]) {
      this.bank = {};
      for (let i = 0; i < balance.length; i++) this.bank[i + 1] = balance[i];
    }
  
    transfer(account1: number, account2: number, money: number): boolean {
      const isAccount1Valid: boolean = this.bank[account1] !== undefined && this.bank[account1] >= money;
      const isAccount2Valid: boolean = this.bank[account2] !== undefined;
  
      if (isAccount1Valid && isAccount2Valid) {
        this.bank[account1] -= money;
        this.bank[account2] += money;
        return true;
      }
  
      return false;
    }
  
    deposit(account: number, money: number): boolean {
      if (this.bank[account] !== undefined) {
        this.bank[account] += money;
        return true;
      }
  
      return false;
    }
  
    withdraw(account: number, money: number): boolean {
      if (this.bank[account] !== undefined && this.bank[account] >= money) {
          this.bank[account] -= money;
          return true;
      }
  
      return false;
    }
  }