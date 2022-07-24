'use strict';

const costsOfPotato = function (borshchAmount = 48,potatosPerLiter = 4, onePotatoWeight = 75, potatoPriceKg = 13){
  if ( typeof borshchAmount !== 'number' || isNaN(borshchAmount)) throw new Error('Please enter how many borshch do you want to cook in liters');
  if ( typeof potatosPerLiter !== 'number' || isNaN(potatosPerLiter)) throw new Error('Please enter how many potatoes do you use per liter in numbers');
  if ( typeof onePotatoWeight !== 'number' || isNaN(onePotatoWeight)) throw new Error('Please enter valid weight of one potato ');
  if ( typeof potatoPriceKg !== 'number' || isNaN(potatoPriceKg)) throw new Error('Please enter  valid price for 1 kg of potato ');

  let totalWeight = borshchAmount * potatosPerLiter * (onePotatoWeight/1000);
  let totalPrice = totalWeight * potatoPriceKg;
  return Math.round(totalPrice);

}

console.log(costsOfPotato());

