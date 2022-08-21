/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
'use strict';
console.log('script.js');

// main thread
function init() {
    // targeting div elements for clicking and state exposition
    const divEl = document.getElementById('btn__element');
    const stateEl = document.getElementById('btn__state');
    // adding eventListiner to increase state counter every time "CLICK ME" div is clicked 
    divEl.addEventListener('click', () => {
        stateEl.textContent++
    });
}

init();