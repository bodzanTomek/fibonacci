/*Zadanie 5.
Stwórz funkcje zachowujące się tak samo jak:
 - Array.prototype.filter,
 - Array.prototype.map*/

 var table = [5,1,7,5];
 var out =[];

function mnozenie(index) {
    return index=index*3;
}

Array.prototype.myMap = 
     function(funkcja){
        var tab=[];
        i=0;
        for(var value of this){
            tab[i]=funkcja(value);
            i++;
        }
        for(var value of tab){
            console.log(value);
        }
    }

out=table.myMap(mnozenie);
