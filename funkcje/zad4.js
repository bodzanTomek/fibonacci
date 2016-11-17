/*4.Funkcja przyjmuje tablicę i zwraca tablicę asocjacyjną dla podanego obiektu (table asocjacyjna jest de facto obiektem)
   tzn. createDictionary([1, 'a', 'a', 'a', 7]) powinno zwrócić obiekt: {a: 3, 1: 1, 7: 1} */

var table = [1,'a',1,7,'a',1,4,5,7,5,'b',4,'a'];


function setTab(table){
    var associativeTable={};
    var repeat=0;
    var notInTable=0;
        for(let j=0,i=0; i<table.length; j++){
            if(table[i]===table[j]){//szuka powtórzeń
                for(var key in associativeTable){//sprawdza czy w obiekcie nie ma już wpisanej liczby z powtórzeniami
                    if (key !== table[i].toString()){
                        notInTable++;
                    }
                } 
                if(notInTable === Object.keys(associativeTable).length){//jeśli w obiekcie nie ma jeszcze sprawdanej liczby dodaje jej powtórzenia
                    repeat++;
                    notInTable=0;
                }else notInTable=0;  
            }
            if((j===table.length-1) &&(repeat !==0)){//spradza czy koniec tablicy przeszukianej  i wpiuje do obiektu liczbę z powtórzeniami
                associativeTable[table[i]]=repeat;
                repeat=0;
            }
           if(j===table.length-1){
               i++;
               j=0;
           } 
        }
return associativeTable;
}

function getTab(pomObiect){
    for(var key in pomObiect){
        console.log('obiekt: '+key+':'+pomObiect[key]);
    }
}

var pomObiect = setTab(table);
getTab(pomObiect);




