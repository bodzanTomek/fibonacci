// Zadanie 7. 

// Stwórz funkcję compose, taką, że połączy funkcje w jedną i wykona je na podanym argumencie od lewej do prawej.
// Liczba funkcji które przyjmuje jest nieokreślona.

// function add1(x) { return x + 1 }
// function multiplyBy4(x) { return x * 4 }

// compose( add1, multiplyBy4 ) (3) // 16. (3 + 1) * 4

function add1(x) {
    return x + 1;
}

function multiplyBy4(x) { return x * 4 }

function scoreFunctions(score) {
    console.log("wynik wszystkich funkcji to :" + score)
}

function compose() {
    var args = arguments;
    return function composeInside() {
        var score = arguments[0];
        for (var index = 0; index < args.length; index++) {
            score = args[index](score);
        }
        scoreFunctions(score)
    }
}

compose(add1, multiplyBy4)(3);