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

async function init() {
    buttonFunctionalityActivation();
}
init();


function buttonFunctionalityActivation() {
    const btnEl = document.getElementById('btn');
    btnEl.addEventListener('click', async () => {
        document.getElementById('message').remove();
        const dataObjArr = await extractData(ENDPOINT);
        insertDataToHtml(dataObjArr);
    });
}

async function extractData(jsonLink) {
    try {
        const resp = await fetch(jsonLink);
        // console.log('resp ===', resp);
        if (resp.ok) {
            const parsedData = await resp.json();
            // console.log('parsedData ===', parsedData);
            return parsedData;
        }

    }
    catch (err) {
        console.log('err ===', err);
    };
}

function insertDataToHtml(userObjArr) {
    const divEl = document.getElementById('output');
    divEl.classList.add('output');
    // alfabetic sorting
    userObjArr.sort((a, b) => (a.login.toLowerCase < b.login.toLowerCase) ? -1 : 1);
    console.log('objArr ===', userObjArr);
    userObjArr.forEach(userObj => {
        // console.log('brandObj ===', brandObj);
        divEl.append(brandCardHtml(userObj));

    });


}

function brandCardHtml(userObjArr) {
    const cardDivEl = document.createElement('div');
    cardDivEl.className = 'card';
    const loginNameEL = document.createElement('h3');
    const avatarEl = document.createElement('img');
    loginNameEL.textContent = userObjArr.login;
    avatarEl.src = userObjArr.avatar_url
    cardDivEl.append(avatarEl, loginNameEL);
    return cardDivEl;
}

