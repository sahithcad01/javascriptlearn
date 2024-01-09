//06-01-2024
//sir sample...........

//ternary or conditional operator
//condtion ? statemnt1 :statement2;
console.log(v1);
var output=v1=="s"? "v1 has value" : "v1 doesnot have value";
console.log(output);
//condtional chains with Ternary
/*
m=34; //input
//35 32grade c 60 grade b 80 grade a 90 grade Distintion
var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
console.log(mark); // output
*/
//function declaration

function findGrade(){

    m=34; //input
//35 32grade c 60 grade b 80 grade a 90 grade Distintion
var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
console.log(mark); // output

}

findGrade();



function findGrade1(m,k){

     //input
//35 32grade c 60 grade b 80 grade a 90 grade Distintion
var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
console.log(k,mark); // output


}

findGrade1(65,"karthick");



var findgrade2=(m,k)=>{
    var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
console.log(k,mark); // output


}

console.log(findgrade2(36,"ram"));