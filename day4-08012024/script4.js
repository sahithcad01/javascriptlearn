
//08-01-2024........................................................................................

//F1**************

function welcome(){
console.log("welcome");
console.log("just trying");

}

welcome();

//F2****************

var addition=(a,b)=>{
   // console.log(a+b);
return a+b;
};

// to get output in log using function
console.log("added Value", addition(100,200));

//to store output in variable to print in console
var printadd = addition(5,10);
console.log(printadd);


//F3*********************
// trying to short the code
var check2=(a,b)=> a+b;

console.log(check2(25,75));


// trying to short the code
var check3=()=>welcome(); //call func inside calling func.
check3(); //calling checkgrade3.


//F4************************

// conditional statements
// if condition
function gradeChecking(m){
if(35>m && m!=null)
{
console.log("no grade");
console.log("Fail");
}
}

gradeChecking(40);



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

    
    gradeChecking(60);
    

/* console.clear(); */
    
// nested if else condition
//Mark checking..!
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
gradeChecking(70);
