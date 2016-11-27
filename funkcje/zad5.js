/*Zadanie 5.
Stwórz funkcje zachowujące się tak samo jak:
 - Array.prototype.filter,
 - Array.prototype.map*/

 var table = ['a',5,1,7,5,'a',1,4,5,7,5,'b',5,'a',1];
 var out =[];

function notNumber(table){
    for(var i=0;i<table.length;i++){
        if(typeof(table[i])==='string'){
            out.push(table[i]);
        }
    }
    return out;
}

function tableOut(out){
    for(var i=0;i<out.length;i++){
        console.log(out[i]);
    }
}

out=notNumber(table);
tableOut(out);
