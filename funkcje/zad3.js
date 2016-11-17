/*3.Funkcja przyjmuje indeks (liczbę) i zwraca w tablicy ciąg Fibonacciego aż do podanego indeksu
   tzn. fib(3) = ([1, 1, 2])*/

function fib(n){
    var tab=[1,1];
    for(var i=2; i<n; i++){
        tab[i]=tab[i-2]+tab[i-1];
    }
    getFib(tab);
}

function getFib(tab){
        for(var i of tab){
        console.log(i);
        }
}

$(function () {
    
    var number=parseInt(prompt("podaj liczbę:", ""));
    var text='';
    fib(number);
/*
    var div = document.getElementById('container').innerText;
    div +=" "+number+" to:";
    document.getElementById('container').innerHTML="<h1 style='color:white;'>"+div+"</h1>";

    for(var i of tab){
        text+=i+' ';
    }
    document.getElementById('container').innerHTML+='<p>'+text+'</p>';

*/
});