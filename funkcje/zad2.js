/*2.Funkcja przyjmuje tablicę i zwraca nową tablicę elementów, 
które posiadają parzyste indeksy*/

function setArray(array) {
    var logArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            logArray.push(array[i]);
        }
    }
    return logArray;
}

(module || {}).exports = { setArray };