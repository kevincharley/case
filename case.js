$(document).ready(function(){
   $("#bb").click(function(){

    
    //alert("clicked")
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    if ( username == "admin" && password == "1234"){
    alert ("Login successfully");
    window.location = "case12.html"; 
    return false;
    }
    else{
        alert("enter correct password or username")
   window.location ="case1.html"
    }
   

   })
})