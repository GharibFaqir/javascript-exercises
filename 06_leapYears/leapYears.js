const leapYears = function(year) {
    if (year % 400 == 0) {
        console.log(`${year}: is a Leap Year.`);
        return true;
    }
    else if (year % 100 == 0 || year % 4 != 0) {
        console.log(`${year}: is not a Leap Year.`);
        return false;
    }
    else if (year % 4 == 0 || year % 100 != 0) {
        console.log(`${year}: is a Leap Year.`);
        return true;
    } 
    else if (year % 4 == 0 || year % 400 == 0) {
        console.log(`${year}: is a Leap Year.`);
        return true;
    }
    else {
        console.log(`${year}: is not a Leap Year.`);
        return false;
    }
};

leapYears(700);

// Do not edit below this line
module.exports = leapYears;
