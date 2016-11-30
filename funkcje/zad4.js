/*4.Funkcja przyjmuje tablicę i zwraca tablicę asocjacyjną dla podanego obiektu (table asocjacyjna jest de facto obiektem)
   tzn. createDictionary([1, 'a', 'a', 'a', 7]) powinno zwrócić obiekt: {a: 3, 1: 1, 7: 1} */

function startProgram(){
    var table = ['a',5,1,7,5,'a',1,4,5,7,5,'b',5,'a',1];
    var associativeTable={};
    associativeTable= createAssociativeTable(table);
    viewAssociativeTable(associativeTable);
}

function createAssociativeTable(table){
    var associativeTable={};
    associativeTable[table[0]]=0;//dlaczego nie mogę obiekt.table[0]=0;
    //var isIt=false;

    for(var value of table){
        value=value.toString();
        if(value in associativeTable)
            associativeTable[value]=(associativeTable[value])+1;
            else associativeTable[value]=1;
    }
    return associativeTable;
}

function viewAssociativeTable(associativeTable){
    for( var key in associativeTable){
        console.log("znaków - "+key+" wystąpiło "+associativeTable[key]+" razy");
    }
}

startProgram();