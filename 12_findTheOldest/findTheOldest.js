const findTheOldest = function(ppl) {
    ages = [];
    for (i=0; i <= ppl.length-1; i++) {
        if (ppl[i].yearOfDeath == undefined) {
            ages[i] = 2022 - ppl[i].yearOfBirth;
        }
        else {
            ages[i] = ppl[i].yearOfDeath - ppl[i].yearOfBirth;
        }
    }
    
    for (i=0; i <= ages.length-2; i++) {
        if (ages.length == 1) {
            break;
        }
        else {
            if (ages[i] <= ages[i+1]) {
                ages.splice(i, 1);
            }
            else {
                ages.splice(i+1, 1);
            }
        }
        i = -1;
    }
    y = ages[0];

    alsoAges = [];
    for (i=0; i <= ppl.length-1; i++) {
        if (ppl[i].yearOfDeath == undefined) {
            alsoAges[i] = 2022 - ppl[i].yearOfBirth;
        }
        else {
            alsoAges[i] = ppl[i].yearOfDeath - ppl[i].yearOfBirth;
        }
    }

    for (i=0; i <= alsoAges.length-1; i++) {
        if (y == alsoAges[i]) {
            return ppl[i];
        }
    }
};

people = [
    {name: 'Gary', yearOfBirth: 1942, yearOfDeath: 1970},
    {name: 'Ray', yearOfBirth: 1962, yearOfDeath: 2011},
    {name: 'Jane', yearOfBirth: 1912, yearOfDeath: 1941},

    {name: 'May', yearOfBirth: 1912, yearOfDeath: 1953},
    {name: 'Alice', yearOfBirth: 1082, /*yearOfDeath: 2007*/},
    {name: 'Carl', yearOfBirth: 1952, yearOfDeath: 1991},

    {name: 'Micheal', yearOfBirth: 1912, yearOfDeath: 2020},
    {name: 'Franklin', yearOfBirth: 1928, yearOfDeath: 2017},
    {name: 'Angelo', yearOfBirth: 1972, yearOfDeath: 2001},
];

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
