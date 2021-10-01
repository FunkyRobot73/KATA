const calculateChange = function(total, cash) {
  // Your code here

  const coins = {
    twentyDollarV: 2000,
    tenDollarV: 1000,
    fiveDollarV: 500,
    twoDollarV: 200,
    oneDollarV: 100,
    quarterV: 25,
    dimeV: 10,
    nickleV: 5,
    pennyV: 1
};

let coins2 = {};

let x = 0;
let x10 = 0;
let x5 = 0;
let x2 = 0;
let x1 = 0;
let x25 = 0;
let xDime = 0;
let xNickle = 0;
let xPenny = 0;


let change = cash - total;

while(change !== 0) {

if(change >= coins.twentyDollarV) {
   change = change - coins.twentyDollarV;
   x = x + 1;
   coins2.twentyDollar = x;
  };


  if(change >= coins.tenDollarV && change < coins.twentyDollarV) {
    change = change - coins.tenDollarV;
    x10 = x10+ 1;
    coins2.tenDollar = x10;
  };
  

  if(change >= coins.fiveDollarV && change < coins.tenDollarV) {
    change = change - coins.fiveDollarV;
    x5 = x5+ 1;
    coins2.fiveDollar = x5; 
  };
   

  if(change >= coins.twoDollarV && change < coins.fiveDollarV) {
    change = change - coins.twoDollarV;
    x2 = x2+ 1;
    coins2.twoDollar = x2; 
  };

  if(change >= coins.oneDollarV && change < coins.twoDollarV) {
    change = change - coins.oneDollarV;
    x1= x1 + 1;
    coins2.oneDollar = x1;
  };
  
    
  if(change >= coins.quarterV && change < coins.oneDollarV) {
    change = change - coins.quarterV;
    x25 = x25 + 1;
    coins2.quarter = x25;
  };
  

  if(change >= coins.dimeV && change < coins.quarterV) {
    change = change - coins.dimeV;
    xDime = xDime + 1;
    coins2.dime = xDime;
  };
  

  if(change >= coins.nickleV && change < coins.dimeV) {
    change = change - coins.nickleV;
    xNickle = xNickle + 1;
    coins2.nickle = xNickle;
  };
  

  if(change >= coins.pennyV && change < coins.nickleV) {
    change = change - coins.pennyV;
    xPenny = xPenny+ 1;
    coins2.penny = xPenny;
  }
  
                       
  }
  return coins2; 
}
  



console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
