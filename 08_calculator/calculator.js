const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(num1, num2) {
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
};

const multiply = function(num1, num2) {
  return num1 * num2;
};

const power = function(num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function(num1) {
  fac = 1;
  for (i=num1; i<=1; i--) {
    fac = fac*i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
