// Zadanie 8.

// Napisz funkcję sum4, taką, że:

// Funkcja sum powinna zsumować cztery elementy, natomiast można ją wywołać na parę sposobów, tak, żeby łącznie przekazać 4 argumenty:

// sum4(1, 2, 3, 4) // 10
// sum4(1)(2)(3)(4) // 10
// sum4(1, 2)(3, 4) // 10 
// itd.

function sum4() {
    var args = 4;
    var sum = 0;

    function sumInside() {
        for (let value of arguments) {
            sum = sum + value;
            args -= 1;
            if (args === 0) return sum
        }
        return sumInside;
    }
    for (let value of arguments) {
        sum = sum + value;
        args -= 1;
        if (args === 0) return sum
    }
    sumInside();
    return sumInside;
}

(module || {}).exports = { sum4 };