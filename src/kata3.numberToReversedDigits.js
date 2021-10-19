const numberToReversedDigits = number => {
    const numberString = number.toString();
    const numberArray = Array.from(numberString).map(Number);
    const numberReversed = numberArray.reverse();
  
    return numberReversed;
  };
module.exports = numberToReversedDigits;
