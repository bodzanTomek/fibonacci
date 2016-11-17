/*2.Funkcja przyjmuje tablicę i zwraca nową tablicę elementów, które posiadają parzyste indeksy*/

function setTab(tablica){
    var pomTablica=[];
    for(var i=0; i<tablica.length; i++){
        if(i % 2 === 0){
            pomTablica.push(tablica[i]);
        }
    }
    return pomTablica;
}

function getTab(tablica){
        for(var i of tablica){
        console.log(i);
        }
}

var liczby=[10,2,30,4,50,6,70,8,90];
var parzyste=setTab(liczby);
getTab(parzyste);
