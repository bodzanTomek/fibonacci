// Zadanie 6.
// Zaimplementuj sortowanie bąbelkowe dla tablicy liczb.
// Przykład użycia: sort([1, 9, 4, 5]) // [1, 4, 5, 9]

function sort(tab) {
    var auxiliaryVariable;
    var n = tab.length;

    do {
        for (var i = 0; i < n - 1; i++) {
            if (tab[i] > tab[i + 1]) {
                auxiliaryVariable = tab[i];
                tab[i] = tab[i + 1];
                tab[i + 1] = auxiliaryVariable;
            }
        }
        n--;
    } while (n > 1);
    return tab
}

(module || {}).exports = { sort };