/*4.Funkcja przyjmuje tablicę i zwraca tablicę asocjacyjną dla podanego obiektu (table asocjacyjna jest de facto obiektem)
   tzn. createDictionary([1, 'a', 'a', 'a', 7]) powinno zwrócić obiekt: {a: 3, 1: 1, 7: 1} */

function createTable(){
    var table = ['a',5,1,7,5,'a',1,4,5,7,5,'b',5,'a',1];
    createAssociativeTable(table);
}

function createAssociativeTable(table){
    var associativeTable={};
    associativeTable[table[0]]=0;//dlaczego nie mogę obiekt.table[0]=0;
    isIt=false;

    for(var i of table){
    i=i.toString();
        for(var key in associativeTable){
            if(i===key) isIt=true;
        }
        if(isIt){
            associativeTable[i]=(associativeTable[i])+1
            isIt=false;
        }else{
            associativeTable[i]=1;
        }
    }
    viewAssociativeTable(associativeTable)
}

function viewAssociativeTable(associativeTable){
    for( var key in associativeTable){
        console.log("znaków - "+key+" wystąpiło "+associativeTable[key]+" razy");
    }
}

createTable();