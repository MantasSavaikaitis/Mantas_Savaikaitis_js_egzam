/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
'use strict';
console.log('script.js');

function init() {
    const btnEl = document.getElementById('btn__element');
    const stateEl = document.getElementById('btn__state')
    btnEl.addEventListener('click', () => {
        stateEl.textContent++
    });
}

init();