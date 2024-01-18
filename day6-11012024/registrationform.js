function registerform(){
    var UserName = document.getElementById("username").value;
    document.getElementById("tbusername").innerHTML = UserName;

    var FirstName = document.getElementById("firstname").value;
    document.getElementById("tbfirstname").innerHTML = FirstName;

    var LastName = document.getElementById("lastname").value;
    document.getElementById("tblastname").innerHTML = LastName;

    var DOB = document.getElementById("dob").value;
    document.getElementById("tbdob").innerHTML = DOB;

    if(document.getElementById("male").checked){
       var g=document.getElementById("male").value;
        document.getElementById("tbgender").innerHTML = g;
    }
    if(document.getElementById("female").checked){
        var g=document.getElementById("female").value;
         document.getElementById("tbgender").innerHTML = g;
    }
    
    
    

    var Qualification = document.getElementById("qualification").value;
    document.getElementById("tbqualification").innerHTML = Qualification;

    var Location = document.getElementById("location").value;
    document.getElementById("tblocation").innerHTML = Location;

    var Phone = document.getElementById("phone").value;
    document.getElementById("tbphone").innerHTML = Phone;

    var Email = document.getElementById("email").value;
    document.getElementById("tbemail").innerHTML = Email;

    var Address = document.getElementById("address").value;
    document.getElementById("tbaddress").innerHTML = Address;
}

function cancel(){
    alert("Registration Canceled!");
}