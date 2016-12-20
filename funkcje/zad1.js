/*1. Funkcja przyjmuje obiekt i zwraca tablicę kluczy obiektu
   tzn. getKeys({x: 1, y: 2}) powinno zwrócić ['x', 'y']*/

function getKeys(obiekt) {
    var ourArray = [];
    for (var klucz in obiekt) {
        ourArray.push(klucz);
    }
    return ourArray;
}

function viewKeys(array) {
    for (var value of array) {
        console.log(value);
    }
}

(function() {
    var osoba = {
        imie: 'Jan',
        nazwisko: 'Kowalski',
        wiek: 31,
        kobieta: false,
    };
    viewKeys(getKeys(osoba));
})();

(module = module || {}).exports = { getKeys };