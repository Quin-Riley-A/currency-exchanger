import './css/styles.css';
import './css/bootstrap.css';
import { exchangeAPI } from './utility/exchangeAPI.js';
import { populateFormSelect } from './utility/populateFormSelect.js';
import { currencyConvert } from './js/currencyConvert.js';


function requestExchangeAPI(usrAmt, usrInpt, usrOutpt) {
  let promise = exchangeAPI.getExchangeRates();
  promise.then(function(exchangeRateObj) {
    displayConversion(usrAmt, usrInpt, usrOutpt, exchangeRateObj);
    console.log('exchangeRates in requestExchangeAPI');
    console.log(exchangeRateObj);
    return exchangeRateObj;
  }, function(errorArr) {
    displayError(errorArr);
  });
}

function displayConversion(usrAmt, usrInpt, usrOutpt, exchangeRateObj) {
  console.log('usrAmt');
  console.log(usrAmt);
  console.log('usrInpt');
  console.log(usrInpt);
  console.log('usrOutpt');
  console.log(usrOutpt);
  console.log(exchangeRateObj['AED']);
  console.log('Success!');
  return exchangeRateObj.response;
}

function displayError(errorArray) {
  console.log('Oof, bad Dr. Pepper right there' + errorArray);
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
  let exchangeRates = requestExchangeAPI(userCurrencyAmt, userCurrencyInput, userCurrencyOutput);
  console.log('exchange rates in handleform submission');
  console.log(exchangeRates);
  currencyConvert.convert(userCurrencyInput, userCurrencyOutput, exchangeRates);
}

window.addEventListener('load', formPrep);