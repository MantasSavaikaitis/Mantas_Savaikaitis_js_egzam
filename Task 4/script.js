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


async function init() {
    const dataObjArr = await extractData(ENDPOINT);
    // console.log('dataArr ===', dataArr);
    insertDataToHtml(dataObjArr);
}


async function extractData(jsonLink) {
    try {
        const resp = await fetch(jsonLink);
        // console.log('resp ===', resp);
        const parsedData = await resp.json();
        // console.log('parsedData ===', parsedData);
        return parsedData;
    }
    catch (err) {
        console.log('err ===', err);
    }
}

function insertDataToHtml(objArr) {
    const divEl = document.getElementById('output');
    // alfabetic sorting
    objArr.sort((a, b) => (a.brand < b.brand) ? -1 : 1);

    objArr.forEach(brandObj => {
        // console.log('brandObj ===', brandObj);
        divEl.append(brandCardHtml(brandObj));

    });


}

function brandCardHtml(brandObj) {
    const cardDivEl = document.createElement('div');
    cardDivEl.className = 'card';
    const brandNameEL = document.createElement('h3');
    const listEl = document.createElement('ul');
    brandNameEL.textContent = brandObj.brand + ':';
    brandObj.models.forEach(model => {
        const modelEl = document.createElement('li');
        modelEl.textContent = model;
        // console.log('modelEl ===', modelEl);
        listEl.append(modelEl);
    });
    cardDivEl.append(brandNameEL, listEl);
    return cardDivEl;
}




init();