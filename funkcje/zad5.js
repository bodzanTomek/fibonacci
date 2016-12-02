/*Zadanie 5.
Stwórz funkcje zachowujące się tak samo jak:
 - Array.prototype.filter,
 - Array.prototype.map*/

var inArray = [5, 1, 7, 5];
var outArray = [];


function mnozenie(index) {
    return index = index * 3;
}

function myMap(inArray, mnozenie) {
    var auxiliaryOutArray = [];
    if (typeof(mnozenie) === "function") {
        for (var index = 0; index < inArray.length; index++) {
            auxiliaryOutArray[index] = mnozenie(inArray[index]);
        }
        return auxiliaryOutArray;
    } else { return "blad parametrow" }
}

function viewOutArray(outArray) {
    for (var value of outArray) {
        console.log(value);
    }
}

outArray = myMap(inArray, mnozenie);
viewOutArray(outArray);