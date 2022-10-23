import './css/styles.css';
import './css/bootstrap.css';
import { exchangeAPI } from './utility/exchangeAPI.js';
import { populateFormSelect } from './utility/populateFormSelect';

function requestExchangeAPI() {
  let promise = exchangeAPI.getExchangeRates();
  promise.then(function(exchangeRateObj) {
    populateForm(exchangeRateObj);

  }, function(errorArr) {
    displayError(errorArr);
  });
}

function populateForm() {
  console.log('Success!');
}

function displayError(errorArray) {
  console.log('Oof, bad Dr. Pepper right there' + errorArray);
}

function formPrep() {
  requestExchangeAPI();
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
  const userCurrencyInput = document.querySelector('select#input-currency-select').options[document.querySelector('select#input-currency-select').selectedIndex].value;
  console.log('user choice in: \n');
  console.log(userCurrencyInput);
  const userCurrencyOutput = document.querySelector('select#output-currency-select').options[document.querySelector('select#output-currency-select').selectedIndex].value;
  console.log('user choice out: \n');
  console.log(userCurrencyOutput);
}

window.addEventListener('load', formPrep);