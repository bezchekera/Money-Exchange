// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change


if (currency>10000) {return  {error: "You are rich, my friend! We don't have so much coins for exchange"};}
if (currency<1) {return  {};}  


let H = Q = D = N = P =0;  
 
if ((Math.floor( currency / 50 )!=0) ) {H=Math.floor( currency / 50 ) ; currency=currency-H*50; }
if ((Math.floor( currency / 25 )!=0) ) {Q=Math.floor( currency / 25 ) ; currency=currency-Q*25; }
if ((Math.floor( currency / 10 )!=0) ) {D=Math.floor( currency / 10 ) ; currency=currency-D*10; }
if ((Math.floor( currency / 5 )!=0) ) {N=Math.floor( currency / 5 ) ; currency=currency-N*5; }
if ((Math.floor( currency / 1 )!=0) ) {P=Math.floor( currency / 1 ) ; currency=currency-P*1; }
//let anser=[];
//if (H!=0) {anser.push({"H": H});}
//if (Q!=0) {anser.push({"Q": Q});}
//if (D!=0) {anser.push({"D" : D});}
//if (N!=0) {anser.push({"N" : N});}
//if (P!=0) {anser.push({"P" : P});}

var anser = {};

if (H!=0) {anser.H = H;}
if (Q!=0) {anser.Q = Q;}
if (D!=0) {anser.D = D;}
if (N!=0) {anser.N = N;}
if (P!=0) {anser.P = P;}

return anser;

//return {"H": H, "Q": Q, "D" : D, "N" : N,"P" : P} ;

//return anser;
}
