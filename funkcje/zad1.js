/*1. Funkcja przyjmuje obiekt i zwraca tablicę kluczy obiektu
   tzn. getKeys({x: 1, y: 2}) powinno zwrócić ['x', 'y']*/


    var osoba={
        imie:'Jan',
        nazwisko:'Kowalski',
        wiek:31,
        kobieta:false,
        };

    function getKeys(obiekt){
        var ourTable = [];
        for (var klucz in osoba){
            ourTable.push(klucz);
            }
        return ourTable;
        }

var tablica=getKeys(osoba);

for(var i of tablica){
    console.log(i);
    }
