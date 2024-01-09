
//08-01-2024........................................................................................
//sir sample........

function checkgrade(){
console.log("welcome");
console.log("just trying");

}


var checkgrade1=(a,b)=>{
   // console.log(a+b);
return a+b;
};

checkgrade();
// to get output in log using function
console.log("added Value", checkgrade1(1,2))

//to store output in variable to print in console
var printmsg =checkgrade1(1,2);
console.log(printmsg);

// trying to short the code
var checkgrade2=(a,b)=> a+b;

console.log(checkgrade2(5,10));


// trying to short the code
var checkgrade2=()=> checkgrade();

console.log(checkgrade2());

// conditional statements
// if condition
function gradeChecking(m){
if(35>m && m!=null)
{
console.log("no grade");
console.log("Fail");
}
}

gradeChecking(45);



// if else condition
function gradeChecking(m){
    if(35>m && m!=null)
    {
    console.log("no grade");
    console.log("Fail");
    }
    else{
        console.log("Pass");
        console.log("Other Grades");
    
    }
    }

    
    gradeChecking(45);
    

console.clear();
    
// nested if else condition
function gradeChecking(m){
    if(35>m && m!=null)
    {
    console.log("no grade");
    console.log("Fail");
    }
    else{
        if(35<m && m!=null && m<=60){

            console.log("Pass");
            console.log("Grade c");
                }

        else if(60<m && m!=null && m<=80){

            console.log("Pass");
            console.log("Grade b");
                }

        else if(80<m && m!=null && m<=100){

            console.log("Pass");
            console.log("Grade A");
                }
                else{

                    gradeChecking(prompt("enter mark"));
                }
                
    }
    }

    
gradeChecking(99);
