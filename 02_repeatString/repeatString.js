const repeatString = function(string, times) {
    concatString = string;
    for (i=0; i<times-1; i++) {
        concatString = concatString + string;
    }
    return concatString;
};

// Do not edit below this line
module.exports = repeatString;
