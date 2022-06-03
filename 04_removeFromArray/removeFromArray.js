const removeFromArray = function(array, item1, item2, item3, item4, item5) {
    for (i=0; i < array.length; i++) {
        if (array[i] === item1 || array[i] === item2 || array[i] === item3
            || array[i] === item4 || array[i] === item5) {
                array.splice(i, 1);
                i = -1;
            }
    }
    return array;
};

// array = ["Apple", "Orange", "Apple", "Mango", "Banana", "Grapes", "Apple", "Peach"];
// console.log(removeFromArray(array, "Apple", "Grapes", "Orange", "Banana", "Mango"));

// Do not edit below this line
module.exports = removeFromArray;
