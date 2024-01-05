//Print statement
console.log("Hello");
console.log('Hello');

//print number
var x=10;
var y=10.250;
console.log(x);
console.log(y);
console.log(typeof(x));
console.log(typeof(y));

//print string:
var z='Sahith';
var z1="Sanjay";
console.log(z);
console.log(z1);
console.log(typeof(z));
console.log(typeof(z1));

//print objects
console.log({fnmae:"Sahith", ROllno: "ECB1955"});
console.table({fnmae:"Sahith", ROllno: "ECB1955"});

//print Array
console.log([1,3,5,7,9,0]);
console.table([5,10,15,20,25,30]);

//print boolean
console.log(true);
console.log(false);

//print console with variable declaration:
var a=5;
let b=7;
const c=10;

console.log(a);
console.log(b);
console.log(c);

//value re-assign:
a=6;  //var
console.log(a); //var* can be re-assign

b=8; //let
console.log(b);  //let* can be re-assign

/* c=11;
console.log(c); //const can't reasssign and can't re-declar*/

a="Sanjay";
console.log(a);
b="Boy";
console.log(b);

//re-declare:

var a= 25; //var* can be re-declare
console.log(a);

/* let b=100; //let* can't be re-declare
console.log(); */

//re-assign variable as object
a={fname:"Sanjay",nickname:"Kathikappal"};
console.log(a);
console.table(a);

b={fname:"JayaPravin", nickname:"JP"};
console.log(b);
console.table(b);

//re-assign array value
a=[11,12,13,14];
console.log(a);
console.table(a);
