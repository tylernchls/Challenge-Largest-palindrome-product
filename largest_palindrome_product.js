/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function largestPalindrome(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var factorCheck;
  var productArr = [];
  var from;
  var to;

  if (digits === 2) {
    from = 10;
    to = 99;
  } else {
    from = 100;
    to = 999;
  }

  for (var i = from; i < to; i++) {
    for (var x = i +1; x <= to; x++) {
      factorCheck = i * x;
      if (isPalindrome(factorCheck)) {
    factor._0 = i;
    factor._1 = x;
    productArr.push(factorCheck);

  }
  }
  }

  palindromeNumber = getMaxOfArray(productArr);


    return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};

function isPalindrome(num) {
  var numReverse = num.toString().split("").reverse().join("");
  numReverse = Number(numReverse);

  if (num === numReverse) {
    return true;
  } else {
    return false;
  }
}



function maxOfArray(numArr) {
  return Math.max(apply(null, numArr));
}