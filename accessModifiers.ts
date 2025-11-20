class Bankaccount {
  readonly userId: number;
  userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  // addBalance( balance:number){
  //   this._userBalance = this._userBalance + balance
  // }

  // use setter 

  set addBalance(amount: number){
     this._userBalance = this._userBalance + amount
  }

  // getBalance(){
  //   return this._userBalance;
  // }

  // use getter

  get getBalance(){
   return this._userBalance
  }


}

const mezbaAcc = new Bankaccount(111, "mexba", 20);

// mezbaAcc.addBalance(100);
// mezbaAcc.addBalance(150);

// console.log(mezbaAcc.getBalance())

// mezbaAcc.getBalance
mezbaAcc.addBalance = 100
mezbaAcc.addBalance = 100
mezbaAcc.addBalance = 100

console.log(mezbaAcc.getBalance)
