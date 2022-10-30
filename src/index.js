import './css/styles.css';
import './css/bootstrap.css';
import { exchangeAPI } from './utility/exchangeAPI.js';
import { populateFormSelect } from './utility/populateFormSelect.js';
import { currencyConvert } from './utility/currencyConvert.js';


function requestExchangeAPI(usrAmt, usrInpt, usrOutpt) {
  let promise = exchangeAPI.getExchangeRates();
  promise.then(function(exchangeRateObj) {
    displayConversion(usrAmt, usrInpt, usrOutpt, exchangeRateObj);
    return exchangeRateObj;
  }, function(errorArr) {
    displayError(errorArr);
  });
}

function displayConversion(usrAmt, usrInpt, usrOutpt, exchangeRateObj) {
  const conversion = currencyConvert.convert(usrAmt, usrInpt, usrOutpt, exchangeRateObj);
  const outputDiv = document.getElementById('exchange-output');
  outputDiv.innerHTML = '';
  const pTag = document.createElement('p');
  pTag.innerHTML = `The amount totalling: <br>${usrAmt} in ${usrInpt} <br>equates to: <br>${conversion} in ${usrOutpt}`;
  outputDiv.append(pTag);
  return exchangeRateObj.response;
}

function displayError(errorArr) {
  console.log(errorArr[1].result, errorArr[0].status, errorArr[0].statusText, errorArr[1]['error-type'], errorArr[1][
    'extra-info']);
  console.log(errorArr[1]);
}

function formPrep() {
  formPopulate();
  formListen();
}

function formPopulate() {
  let formArr = populateFormSelect.buildFormArray();
  populateFormSelect.makeFormHTML(formArr, 'select#input-currency-select');
  populateFormSelect.makeFormHTML(formArr, 'select#output-currency-select');
}

function formListen() {
  document.querySelector('form#request-form').addEventListener('submit', handleFormSubmission);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const userCurrencyAmt = parseFloat(document.querySelector('input#input-currency-amt').value);
  const userCurrencyInput = document.querySelector('select#input-currency-select').options[document.querySelector('select#input-currency-select').selectedIndex].value;
  const userCurrencyOutput = document.querySelector('select#output-currency-select').options[document.querySelector('select#output-currency-select').selectedIndex].value;
  requestExchangeAPI(userCurrencyAmt, userCurrencyInput, userCurrencyOutput);
}

window.addEventListener('load', formPrep);