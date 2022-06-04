const ftoc = function(temp) {
  c = 5*(temp-32)/9;
  return Math.round(c*10)/10;
};

const ctof = function(temp) {
  f = (temp*9/5) + 32;
  return Math.round(f*10)/10;
};

console.log(ftoc(-100));
console.log(ctof(37.8));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
