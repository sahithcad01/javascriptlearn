//addtioin program in GUI
function add()
{
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);
  sum = numOne + numTwo;
  document.getElementById("answer").value = sum;
}

//sir demo-1
function addtioin()

{
    var value1=document.getElementById("v1").value;
    var value2=document.getElementById("v2").value;
    value1=Number(value1);
    value2=Number(value2);
    
    //console.log("welcome to GU output",value1);

    document.getElementById("result").innerHTML= "Added value of " + value1 + " and " + value2 + " is ...  " + (value1+value2);
}

function subtraction()

{
    var value1=document.getElementById("v1").value;
    var value2=document.getElementById("v2").value;
    value1=Number(value1);
    value2=Number(value2);
    
    //console.log("welcome to GU output",value1);

    document.getElementById("result").innerHTML= "Subtracted value of " + value1 + " and " + value2 + " is ...  " + (value1-value2);
}

function multiplication()

{
    var value1=document.getElementById("v1").value;
    var value2=document.getElementById("v2").value;
    value1=Number(value1);
    value2=Number(value2);
    
    //console.log("welcome to GU output",value1);

    document.getElementById("result").innerHTML= "Multiplied value of " + value1 + " and " + value2 + " is ...  " + (value1*value2);
}

function division()

{
    var value1=document.getElementById("v1").value;
    var value2=document.getElementById("v2").value;
    value1=Number(value1);
    value2=Number(value2);
    
    //console.log("welcome to GU output",value1);

    document.getElementById("result").innerHTML= "Division of " + value1 + " and " + value2 + " is ...  " + (value1/value2);
}

//sir demo-2
function operatorFun(a){
    var value1=document.getElementById("v1").value;
    var value2=document.getElementById("v2").value;
    value1=Number(value1);
    value2=Number(value2);

    //var a="-";
    switch(a){
        case '+':
        document.getElementById("result").innerHTML=  value1 + value2;
        break;
        case '-':
        document.getElementById("result").innerHTML=  value1 - value2;
        break;
        case '*':
        document.getElementById("result").innerHTML=  value1 * value2;
        break;
        case '/':
        document.getElementById("result").innerHTML=  value1 / value2;
        break;
    }

}