const booleanToWord = boolean => {
     const Yes = boolean === true;

     if (Yes) {
         return "Yes";
     }
         return "No";
};

module.exports = booleanToWord;
