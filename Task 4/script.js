/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
'use strict';
console.log('script.js');
const ENDPOINT = 'cars.json';

/**
 * Main thread
 */
async function init() {
    const dataObjArr = await extractData(ENDPOINT);
    insertDataToHtml(dataObjArr);
}
init();


/**
 * takes a link (string) and returns array of data or catches errors otherwise.
 * @param {String} jsonLink 
 * @returns {Array}
 */
async function extractData(jsonLink) {
    try {
        const resp = await fetch(jsonLink);
        const parsedData = await resp.json();
        return parsedData;
    }
    catch (err) {
        console.log('err ===', err);
    }
}


/**
 * takes Array of data objects performs its alfabetic sorting and injection to Html
 * @param {Array} objArr 
 */
function insertDataToHtml(objArr) {
    const divEl = document.getElementById('output');
    // Brands alfabetic sorting
    objArr.sort((a, b) => (a.brand < b.brand) ? -1 : 1);
    objArr.forEach(brandObj => { divEl.append(brandCardHtml(brandObj)); });
}


/**
 * takes Brand object and return single card Html Element
 * @param {Object} brandObj 
 * @returns {Element}
 */
function brandCardHtml(brandObj) {
    const cardDivEl = document.createElement('div');
    cardDivEl.className = 'card';
    const brandNameEL = document.createElement('h3');
    const listEl = document.createElement('ul');
    brandNameEL.textContent = brandObj.brand + ':';
    brandObj.models.forEach(model => {
        const modelEl = document.createElement('li');
        modelEl.textContent = model;
        listEl.append(modelEl);
    });
    cardDivEl.append(brandNameEL, listEl);
    return cardDivEl;
}




