// Zadanie 6.
// Zaimplementuj sortowanie bąbelkowe dla tablicy liczb.
// Przykład użycia: sort([1, 9, 4, 5]) // [1, 4, 5, 9]

var inTab=[2,4,11,7,1,9,21,6,3,8];

function sort(tab){
    var auxiliaryVariable;
    var n=tab.length;

    do{
        for(i=0;i<n-1;i++){
            if(tab[i]>tab[i+1]){
                auxiliaryVariable=tab[i];
                tab[i]=tab[i+1];
                tab[i+1]=auxiliaryVariable;//znaleźć metodę zamiany miejscami
            }
        }
        n--;
    }while(n>1)
}

function viewTab(tab){
    for(var i of inTab){
        console.log(i);
    }
}

sort(inTab);
viewTab(inTab);

