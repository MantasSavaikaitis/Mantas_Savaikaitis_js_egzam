/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
'use strict';
console.log('script.js');

class Calculator {
    sum(a, b) { return (+a) + (+b); };
    subtraction(a, b) { return (+a) - (+b); };
    multiplication(a, b) { return (+a) * (+b); };
    division(a, b) { return (+a) / (+b); };

}

const calc1 = new Calculator;

console.log('pvz calc1 === new Calculator(6, 2) ', calc1);
console.log('calc1.division(6,2); ===', calc1.division(6, 2));
console.log('calc1.multiplication(6,2) ===', calc1.multiplication(6, 2));
console.log('calc1.subtraction(6,2) ===', calc1.subtraction(6, 2));
console.log('calc1.sum(6,2) ===', calc1.sum(6, 2));
