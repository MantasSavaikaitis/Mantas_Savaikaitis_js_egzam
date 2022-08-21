/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

'use strict';
console.log('script.js');

/**
 * Mainthread
 */
function init() {
    buttonFunctionActivation();
}

init();


/**
 * targets and gives funcionality to button "Calculate" (adding event listener)
 */
function buttonFunctionActivation() {
    const btnEl = document.forms[0];
    btnEl.addEventListener('submit', (e) => {
        e.preventDefault();
        //  targeting input field and selected units for convertion
        const inputEl = document.getElementById('search');
        const unitsEl = document.getElementById('units');
        // checking if input value is a number, if its a number depending on selected units giving input value to apropriate function.
        if (Number.isNaN(+inputEl.value)) {
            outputToHtml(`"${inputEl.value}" is not a number.`);
        }
        else if (unitsEl.value === "pounds") {
            console.log('pounds happening');
            convertToPounds(inputEl.value);
        }
        else if (unitsEl.value === "grams") {
            console.log('grams happening');
            convertToGrams(inputEl.value);
        }
        else if (unitsEl.value === "oz") {
            console.log('oz happening');
            convertToOz(inputEl.value);
        }
        //reseting input form
        btnEl.reset();
    })
}

/**
 * Converts the value from kilograms to grams
 * @param {number} inputValue 
 */
function convertToGrams(inputValue) {
    const convertedValue = `${inputValue} kg = ${(+inputValue * 1000)} Grams`;
    outputToHtml(convertedValue);
}


/**
 * Converts the value from kilograms to Oz
 * @param {number} inputValue 
 */
function convertToOz(inputValue) {
    const convertedValue = `${inputValue} kg = ${(+inputValue * 35.274)} Oz`;
    outputToHtml(convertedValue);
}


/**
 * Converts the value from kilograms to pounds
 * @param {number} inputValue 
 */
function convertToPounds(inputValue) {
    const convertedValue = `${inputValue} kg = ${(+inputValue * 2.2046)} Pounds`;
    outputToHtml(convertedValue);
}


/**
 * Takes a string and injects it to Html (to output div)
 * @param {string} outputValue 
 */
function outputToHtml(outputValue) {
    const outputEl = document.getElementById('output');
    outputEl.innerHTML = '';
    outputEl.classList.add('output');
    const pEl = document.createElement('p');
    pEl.textContent = outputValue;
    outputEl.append(pEl);
}   