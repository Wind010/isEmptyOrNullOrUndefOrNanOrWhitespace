'use strict'

class StringUtils {

  static isEmptyOrNullOrUndefOrNanOrWhitespace(str) {
      const regEx = /\s/;
      const number = 'number';
      return str === '' || str === null || str === undefined || (typeof str === number && isNaN(str)) 
        || regEx.test(typeof str !== number ? str.charAt(0) : String.fromCharCode(str));
  }
}

module.exports = StringUtils;

