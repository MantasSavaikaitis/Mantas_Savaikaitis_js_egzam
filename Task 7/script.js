/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
'use strict';
console.log('script.js');

const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function showObjectKeys(obj) {
  // naudojame Object.keys() sukurti masyva su visais objekto "keys" ir ji graziname
  return Object.keys(obj);
}

console.log('showObjectKeys ===', showObjectKeys(audi));