/*2.Funkcja przyjmuje tablicę i zwraca nową tablicę elementów, 
które posiadają parzyste indeksy*/

function setArray(array) {
    var ancillaryArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            ancillaryArray.push(array[i]);
        }
    }
    return ancillaryArray;
}

function viewArray(array) {
    for (var value of array) {
        console.log(value);
    }
}


(function() {
    var myArray = [10, 2, 30, 4, 50, 6, 70, 8, 90];
    viewArray(setArray(myArray));
})();

(module = module || {}).exports = { setArray };