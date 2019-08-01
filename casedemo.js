$(document).ready(function(){
    $("#bb").click(function(){
        no=$("#name").val();
        n1=$("#pass").val();
        function login(no,n1,callback){
            if(no=="admin" && n1=="1234"){
                callback(1);
            }
                else{
                    callback(0);
                }
            }
     login(no,n1,(x)=>{

if(x==1){
    alert ("Login successfully");
    window.location = "case12.html";}
    else{
        alert("enter correct password or username")
        window.location ="case1.html"
    }


     }
     
          
      );
    });
});