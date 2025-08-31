function Account(initailbalance){
  let balance = initailbalance;

  return {
    deposite : function (amount){
       return balance += amount;
     },

     withdrawl : function (amount){
      if(balance >= amount)
      return balance -= amount
     },
     getbalance : function (){
      return balance
     } 

  }




}


let fetchAc = Account(400)
console.log(fetchAc.deposite(300))
console.log(fetchAc.withdrawl(300))
console.log(fetchAc.getbalance())

