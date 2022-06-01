const ftoc = function(temp) {
  return Math.round(5*(temp-32)/9);
};

const ctof = function(temp) {
  return Math.round(temp*9/5 +32);
};

// Do not edit below this line
// console.log(ftoc(100));
// console.log(ctof(37.8));

module.exports = {
  ftoc,
  ctof
};
