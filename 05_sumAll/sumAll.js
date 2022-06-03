const sumAll = function(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        if (num1 >= 0 && num2 >= 0) {
            if (num1 < num2) {
                sum = num1;
                for (i=num1 + 1; i <= num2; i++) {
                    sum = sum + i; 
                }
                return sum;
            }
            else if (num2 < num1) {
                sum = num2;
                for (i=num2 + 1; i <= num1; i++) {
                    sum = sum +i;
                }
                return sum;
            }
            else {
                return num1;
            }
        }
        else {
            return "ERROR";
        }
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;