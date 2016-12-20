/*Zadanie 5.
Stwórz funkcje zachowujące się tak samo jak:
 - Array.prototype.filter,
 - Array.prototype.map*/

function myFunction(index) {
    return index = index * 3;
}

function condition(x) {
    return x > 0;
}


function mapArray(array, myFunction) {
    var logArray = [];
    for (var index = 0; index < array.length; index++) {
        logArray[index] = myFunction(array[index]);
    }
    return logArray;
}

function everyElementInArray(array, condition) {
    var result;
    for (var index = 0; index < array.length; index++) {
        result = condition(array[index]);
        if (result === false)
            return false;
    }
    return true;
}

function viewArray(array) {
    console.log(array);
}

viewArray(mapArray([1, 2, 3], myFunction));
console.log(everyElementInArray([1, 2, 3], condition));
console.log(everyElementInArray([1, -2, 3], condition));

(module = module || {}).exports = { everyElementInArray, mapArray };