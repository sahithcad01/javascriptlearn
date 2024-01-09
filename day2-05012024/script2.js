//05-01-2024
a="60"

d=55;
d=String(d);
a=Number(a);
a=a+d;
console.log(a);

var x =true;
console.log(x, typeof x);
x=Number(x);
console.log(x, typeof x);

// const a=10;

const f={name:"karthick ", age:30}
console.log(f, typeof f);
f.name="RAM";
console.log(f, typeof f);

f.name=25;
console.log(f, typeof f);


console.clear();

//OPERATORS in JAVASCRIPT

//arithmatic operator

let v1=10;
let v2=20;
//addition
console.log(v1+v2);
//subtraction
console.log(v1-v2);
//multiply
console.log(v1*v2);
//division
console.log(v1/v2);
//modulus
console.log(v1%v2);
//Expo
console.log(v1**v2);
//increment #pre
v1=++v1;
console.log(v1);
//decrement #pre
v1=--v1;
console.log(v1);

//assignment operators

v1=25;
console.log(v1);

v1+=20; // v1=v1+20;
console.log(v1);
v1-=20; // v1=v1-20;
console.log(v1);
v1*=20; // v1=25*20;
console.log(v1);
v1/=20; // v1=v1/20;
console.log(v1);
v1%=20; // v1=v1%20;
console.log(v1);



//comparision operator

console.log(v1==5);
console.log(v1==="5", typeof v1);
console.log(v1!=1);
console.log(v1!=="5", typeof v1);

//relational operator
console.log(v1>1);
console.log(v1<1);
console.log(v1>=5);
console.log(v1<=10);
console.clear();
//logical operator
v1="s";
console.log(7==5 || 7<2 || 7>5);
console.log(v1=="s");
console.log(!(v1=="s"));
