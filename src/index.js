import './css/styles.css';
import './css/bootstrap.css';

function formListen() {
  document.querySelector('form#request-form').addEventListener('submit', handleFormSubmission);
}

function handleFormSubmission(event) {
  event.preventDefault();
  console.log('here');
}

window.addEventListener('load', formListen);

