/*4.Funkcja przyjmuje tablicę i zwraca tablicę asocjacyjną dla podanego obiektu 
(table asocjacyjna jest de facto obiektem) tzn. createDictionary([1, 'a', 'a', 'a', 7]) 
powinno zwrócić obiekt: {a: 3, 1: 1, 7: 1} */

function createAssociativeArray(myArray) {
    var associativeArray = {};
    for (var value of myArray) {
        value = value.toString();
        if (value in associativeArray)
            associativeArray[value] = associativeArray[value] + 1;
        else associativeArray[value] = 1;
    }
    return associativeArray;
}

(module || {}).exports = { createAssociativeArray };