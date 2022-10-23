export class exchangeAPI {
  static getExchangeRates() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const countryCode = 'USD';
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${countryCode}`;
      request.addEventListener('loadend', function() {
        const response = JSON.parse(this.responseText);
        console.log(this);
        if (this.status === 200) {
          resolve(response)
        } else {
          reject([this, response])
        }
      });
      request.open('GET', url, true);
      request.send();
    });
  }
}