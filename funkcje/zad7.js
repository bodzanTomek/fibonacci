// Zadanie 7. 

// Stwórz funkcję compose, taką, że połączy funkcje w jedną i wykona je na podanym argumencie od lewej do prawej.
// Liczba funkcji które przyjmuje jest nieokreślona.

// function add1(x) { return x + 1 }
// function multiplyBy4(x) { return x * 4 }

// compose( add1, multiplyBy4 ) (3) // 16. (3 + 1) * 4

function compose() {
    var functions = arguments;
    return function composeInside() {
        var score = arguments[0];
        for (var index = 0; index < functions.length; index++) {
            score = functions[index](score);
        }
        return score
    }
}

(module || {}).exports = { compose };