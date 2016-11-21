/*3.Funkcja przyjmuje indeks (liczbę) i zwraca w tablicy ciąg Fibonacciego aż do podanego indeksu
   tzn. fib(3) = ([1, 1, 2])*/

function fib(n){
    var tab=[1,1];
    for(var i=2; i<n; i++){
        tab[i]=tab[i-2]+tab[i-1];
    }
    return tab;
}

function getFib(tab){
        var number=parseInt(prompt("podaj liczbę:", ""));
        var fibTab=fib(number);
        viewFib(number,fibTab);
}

function viewFib(number,fibTab){
        var elementDiv=document.getElementById('container');
        var text = elementDiv.firstElementChild.textContent;
        text +=" "+number+" to:";
        elementDiv.firstElementChild.textContent=text;
      
        var fibText='';
        for(var i of fibTab){
          fibText+=i+' ';
        }
        elementDiv.innerHTML+='<p>'+fibText+'</p>';
}

$(function () {
    getFib();
});