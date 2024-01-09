//09-01-2024................................................
//F1.............
//SWITCH STMT 
document.getElementById("script");
function checkSwitchCase(section){
    switch(section){
        case 'A':
            console.log("You are from section", 'A');
            break;
        case 'B':
            console.log("You are from section", 'B');
            break;
        case 'C':
            console.log("You are from section", 'C');
            break;
        case 'D':
            console.log("You are from section", 'D');
            break;
        default:
            checkSwitchCase(prompt("Enter Sec Value:"));
    }
}

checkSwitchCase(prompt("Enter Sec Value:"));

//F2...............

function checkdatatype(val){
    var x = typeof(val);
    switch(x){
        case 'boolean':
            console.log("Your value is ",x);
            break;
        case 'number':
            console.log("Your value is ",x);
            break;
        case 'string':
            console.log("Your value is ",x);
            break;
        case 'object':
            console.log("Your value is ",x);
            break;
    }
}

checkdatatype(1);
checkdatatype(1.72545);
checkdatatype('a');
checkdatatype("Sahith");
checkdatatype(true);
checkdatatype(false);
checkdatatype([1,2,3,4,5]);
checkdatatype({a:'1',b:'2',c:'3'});

function checkingWithSwitch(a1,b1,a)
{

   // var a1, b1;

    switch(a){
        case 'add':
            // statement
            console.log('executed case s', a1+b1);
            break;
        case 'subtract':
            // statement
            console.log("case 2 executed",a1-b1);
            
            break;
        case 'multiply':
            // statement
            console.log("case 3 executed", a1*b1);
            break;
        
        default:
            // statement
            
            alert("operator not in the list");
    }

}
console.clear();
checkingWithSwitch(2,5,"add");




function checkingWithSwitch(a)
{

   var a1, b1;
   a1=prompt("enter a1");
   b1=prompt("enter b1");
   a1=Number(a1);
   b1=Number(b1);
   

    switch(a){
        case 'add':
            // statement
            console.log('added value of ',a1, 'and ',b1,'is .. ', a1+b1);
            break;
        case 'subtract':
            // statement
            console.log('subtracted value of ',a1, 'and ',b1,'is .. ', a1-b1);
            
            break;
        case 'multiply':
            // statement
            console.log("case 3 executed", a1*b1);
            break;
        
        default:
            // statement
            
            alert("operator not in the list");
    }

}
console.clear();
checkingWithSwitch(prompt("Enter Operator"));


// increment operator

var a=2;
a++;
console.log(a);

var a=2;
var x=a++;
console.log('increment with assignment',x);
console.log('increment with assignment',a);

console.log(x+a);

var a=2;
++a;
console.log('prefix increment',a);

var a=2;
var x=++a;
console.log('prefix increment with assignment',x);
console.log('prefix increment with assignment',a);

console.log(x+a);

//decrement 
var a=2;
a--;
console.log(a);


var a=2;
var x=--a;
console.log('increment with assignment',x);
console.log('increment with assignment',a);