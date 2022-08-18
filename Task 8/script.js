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
    constructor(a, b) {
        this.sum = a + b;
        this.subtraction = a - b;
        this.multiplication = a * b;
        this.division = a / b;
    }
}

const calc1 = new Calculator(6, 2);

console.log('pvz calc1 === new Calculator(6, 2) ', calc1);
console.log('calc1.division; ===', calc1.division);
console.log('calc1.multiplication ===', calc1.multiplication);
console.log('calc1.subtraction ===', calc1.subtraction);
console.log('calc1.sum ===', calc1.sum);
