const caesar = function(str, num) {
    num = num % 26;
    lowerAlpha = ['a']; upperAlpha = ['A'];
    for (i=1; i<=25; i++) {
        lowerAlpha[i] = String.fromCharCode(lowerAlpha[i-1].charCodeAt() + 1);
        upperAlpha[i] = String.fromCharCode(upperAlpha[i-1].charCodeAt() + 1);
    }
    alpha = lowerAlpha.concat(upperAlpha);

    msg = [];
    for (i=0; i<=str.length-1; i++) {
        msg[i] = str.charAt(i);
    }

    lowerAlphaShifted = ['a']; upperAlphaShifted = ['A'];
    for (i=1; i<=25; i++) {
        lowerAlphaShifted[i] = String.fromCharCode(lowerAlphaShifted[i-1].charCodeAt() + 1);
        upperAlphaShifted[i] = String.fromCharCode(upperAlphaShifted[i-1].charCodeAt() + 1);
    }

    if (num >= 0) {
        for (i=1; i<=num; i++) {
            lowerAlphaShifted.shift(); upperAlphaShifted.shift();
        }
        size = lowerAlphaShifted.length; j = 0;
        for (i=size; i<size+num; i++) {
            lowerAlphaShifted[i] = lowerAlpha[j];
            upperAlphaShifted[i] = upperAlpha[j];
            j = j+1;
        }
    }
    else {
        for (i=num; i<0; i++) {
            lowerAlphaShifted.pop(); upperAlphaShifted.pop();
        }
        size = lowerAlphaShifted.length;
        j=lowerAlpha.length-1; k = num * -1;
        for (i=0; i<k; i++) {
            lowerAlphaShifted.unshift(lowerAlpha[j]);
            upperAlphaShifted.unshift(upperAlpha[j]);
            j = j-1;
        }
    }
    console.log(lowerAlpha); console.log(lowerAlphaShifted);
    console.log(upperAlpha); console.log(upperAlphaShifted);

    for (i=0; i<=msg.length-1; i++) {
        for (j=0; j<=lowerAlpha.length-1; j++) {
            if (msg[i] == lowerAlpha[j]) {
                msg[i] = lowerAlphaShifted[j];
                break;
            }
            else if (msg[i] == upperAlpha[j]) {
                msg[i] = upperAlphaShifted[j];
                break;
            }
        }
    }
    msg = msg.join(''); return msg;
};



caesar('Hello, World Z!', 5);

// Do not edit below this line
module.exports = caesar;
