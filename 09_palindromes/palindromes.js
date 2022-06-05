const palindromes = function (str) {
    console.log(str);
    str = str.replace(/[.?!,;:_'"(){} ]/g,'');
    str = str.toLowerCase();
    console.log(str); 
    j = str.length - 1; 
    
    for (i=0; i <= (Math.round(str.length/2))-1; i++) {
        if (str[i] == str[j]) {
            j = j-1;
        }
        else {
            return false
        }
    }
    if (i == (Math.round(str.length/2))) {
        return true;
    }
};

console.log(palindromes('selles'));
// palindromes(`A !quick, ;brown: fox_ 'jumped" (over) {the} .fence?`);

// Do not edit below this line
module.exports = palindromes;
