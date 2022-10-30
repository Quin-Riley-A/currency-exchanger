export class currencyConvert {
  static convert(usrAmt, usrInpt, usrOutpt, exchangeRateObj) {
    return ((Math.floor(((usrAmt/exchangeRateObj[usrInpt]) * exchangeRateObj[usrOutpt]) * 100))/100);
  }
}