$(document).ready(function(){

   var count=0;

    $.ajax({
      
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/todos",
        success:function(todo){
                console.log(todo);
               

                var output=" ";
            
               for(i in todo){
               var cc=todo[i].completed
               if(cc==true)
               {
             // console.log(todo)
                
                  output+="<table class='table '";
                  
                  output+="<td><input type='checkbox'checked disabled id='ck'></td>";
                  output+="<tr> <td>"+todo[i].id+"</td>";
                    output+="<td>"+ todo[i].title+"</td>";
               }else{
                output+="<table class='table'";
               
                output+="<td><input type='checkbox' id='ck'></td>";
                output+="<tr> <td>"+todo[i].id+"</td>";
                  output+="<td>"+ todo[i].title+"</td>"
               }
                 
                  output+="</tr></table>";
               }
                  $("#d1").html(output);



                  $('input[type="checkbox"]').click(function(){
                      if($(this).prop('checked')==true){
                          count++
                      }else{
                          count--
                      }
                      
                      console.log(count)
                  var pr=new Promise((resolve,reject)=>{
                   
                    if(count>=5){
                        resolve();
                    }
                        else{
                            reject();
                        }
                  
                });
              

   
                
                pr.then(()=>{
                    alert("congrats 5 tasks have been successfully completed")

                    
                }).catch(()=>{
                    console.log('rejected')
                });


             

            });
        }
  
});  

});  

