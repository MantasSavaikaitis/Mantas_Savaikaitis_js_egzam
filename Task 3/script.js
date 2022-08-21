/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
'use strict';
console.log('script.js');
const ENDPOINT = 'https://api.github.com/users';

/**
 * main thread
 */
async function init() {
    buttonFunctionalityActivation();
}
init();

/**
 * gives button "Show users" functionality. Adds event Listiner.
 */
function buttonFunctionalityActivation() {
    const btnEl = document.getElementById('btn');
    btnEl.addEventListener('click', async () => {
        document.getElementById('message').remove();
        const dataObjArr = await extractData(ENDPOINT);
        insertDataToHtml(dataObjArr);
    });
}


/**
 * performs data fetching and error catching
 * @param {String} jsonLink 
 * @returns {Array}
 */
async function extractData(jsonLink) {
    try {
        const resp = await fetch(jsonLink);
        if (resp.ok) {
            const parsedData = await resp.json();
            return parsedData;
        } else {
            errorPrintOut(resp);
        }

    }
    catch (err) {
        console.log('err ===', err);
    };
}


/**
 * Performs actions needed to output data into html exposition
 * @param {Array} userObjArr 
 */
function insertDataToHtml(userObjArr) {
    const divEl = document.getElementById('output');
    divEl.classList.add('output');
    // alfabetic sorting
    userObjArr.sort((a, b) => (a.login.toLowerCase() > b.login.toLowerCase()) ? 1 : -1);
    userObjArr.forEach(userObj => {
        divEl.append(brandCardHtml(userObj));
    });


}

/**
 * Creates single user Card Html Element
 * @param {Object} userObj 
 * @returns {Element}
 */
function brandCardHtml(userObj) {
    const cardDivEl = document.createElement('div');
    cardDivEl.className = 'card';
    const loginNameEL = document.createElement('h3');
    const avatarEl = document.createElement('img');
    loginNameEL.textContent = userObj.login;
    avatarEl.src = userObj.avatar_url
    cardDivEl.append(avatarEl, loginNameEL);
    return cardDivEl;
}


function errorPrintOut(response) {
    const divEl = document.getElementById('output')
    const pEl = document.createElement('p');
    console.log(response);
    pEl.textContent = `Link: ${ENDPOINT} Error: ${response.status} ${response.statusText}`;
    divEl.append(pEl);
}