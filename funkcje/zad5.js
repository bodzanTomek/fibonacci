/*Zadanie 5.
Stwórz funkcje zachowujące się tak samo jak:
 - Array.prototype.filter,
 - Array.prototype.map  */

function mapArray(array, myFunction) {
    var logArray = [];
    for (var index = 0; index < array.length; index++) {
        logArray[index] = myFunction(array[index]);
    }
    return logArray;
}

function filterArray(array, condition) {
    var result;
    for (var index = 0; index < array.length; index++) {
        result = condition(array[index]);
        if (result === false)
            return false;
    }
    return true;
}

(module = module || {}).exports = { filterArray, mapArray };