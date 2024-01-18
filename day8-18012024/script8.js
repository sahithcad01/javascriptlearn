function inputvalue()
{
    var inp = Number(document.getElementById("inputvalue").value);
    //for loop
    for(i=1;i<=inp;i++){
        console.log("input value: "+i);
    }

    //while loop
    while(inp<10){
        console.log("values: "+inp);
        inp++;
    }

    //do-while loop
    do{
        console.log('*');
    }while(inp<5);
}