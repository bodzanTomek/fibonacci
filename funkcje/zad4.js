/*4.Funkcja przyjmuje tablicę i zwraca tablicę asocjacyjną dla podanego obiektu (table asocjacyjna jest de facto obiektem)
   tzn. createDictionary([1, 'a', 'a', 'a', 7]) powinno zwrócić obiekt: {a: 3, 1: 1, 7: 1} */

function startProgram() {
    var myArray = ['a', 5, 1, 7, 5, 'a', 1, 4, 5, 7, 5, 'b', 5, 'a', 1];
    var associativeArray = {};
    associativeArray = createAssociativeTable(myArray, associativeArray);
    viewAssociativeTable(associativeArray);
}

function createAssociativeTable(myArray, associativeArray) {
    for (var value of myArray) {
        value = value.toString();
        if (value in associativeArray)
            associativeArray[value] = (associativeArray[value]) + 1;
        else associativeArray[value] = 1;
    }
    return associativeArray;
}

function viewAssociativeTable(associativeArray) {
    for (var key in associativeArray) {
        console.log("znaków - " + key + " wystąpiło " + associativeArray[key] + " razy");
    }
}

startProgram();