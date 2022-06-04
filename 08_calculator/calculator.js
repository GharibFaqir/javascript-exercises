const add = function(x, y) {
  return x+y;
};

const subtract = function(x, y) {
  return x-y;
};

const sum = function(x, y) {
  if (typeof x == 'object') {
    z = 0;
    for (i=0; i <= x.length-1; i++) {
      z = z+x[i];
    }
    return z;
  }
  else {
    if (x<y) {
      z = 0;
      for (i=x; i <= y; i++) {
        z = z + i;
      }
      return z;
    }
    else if (y < x) {
      z = 0;
      for (i=y; i <= x; i++) {
        z = z+i;
      }
      return z;
    }
    else {
      return x;
    }
  }
};

const multiply = function(x, y) {
  if (typeof x == 'object') {
    z = 1;
    for (i=0; i <= x.length-1; i++) {
      z = z*x[i];
    }
    return z;
  }
  else {
    return x*y;
  }
};

const power = function(x, y) {
  return Math.pow(x,y);
};

const factorial = function(x) {
  fac = 1;
  for (i=1; i <= x; i++) {
    fac = fac*i;
  }
  return fac;
};

console.log(sum(3,5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};