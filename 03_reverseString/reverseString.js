const reverseString = function(string) {
    revString = [];
    for (i=0; i <= string.length - 1; i++) {
        revString[i] = string.charAt(string.length - i - 1);
    }
    return revString.join('');
};

// Do not edit below this line
module.exports = reverseString;
