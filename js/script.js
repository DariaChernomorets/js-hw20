'use strict';

const costsOfPotato = function (borshchAmount = 48,potatosPerLiter = 4, potatoWeight = 75, potatoPrice = 13){
  let totalWeight = borshchAmount * potatosPerLiter * (potatoWeight/1000);
  let totalPrice = totalWeight * potatoPrice;
  return Math.round(totalPrice);

}

console.log(costsOfPotato());
