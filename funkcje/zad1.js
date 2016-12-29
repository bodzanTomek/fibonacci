/*1. Funkcja przyjmuje obiekt i zwraca tablicę kluczy obiektu
   tzn. getKeys({x: 1, y: 2}) powinno zwrócić ['x', 'y']*/

function getKeys(obiekt) {
    var logArray = [];
    for (var klucz in obiekt) {
        logArray.push(klucz);
    }
    return logArray;
}

(module = module || {}).exports = { getKeys };