const repeatString = function(string, times) {
    if (times <= -1) {
        return "ERROR";
    }
    else if (times == 0) {
        return "";
    }
    else {
        concatString = string;
        for (i=0; i<times-1; i++) {
            concatString = concatString + string;
        }
        return concatString;
    }
};

// Do not edit below this line
module.exports = repeatString;
