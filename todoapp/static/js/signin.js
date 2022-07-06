function validate(){
    e=1
    fname1=0
    var phone_form= /^[0-9]+$/;
    var name_form= /^[a-zA-Z]+$/;
    var email_form= /^([a-zA-z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/
    
        fname=document.getElementById("fname").value
        username=document.getElementById("username").value
        user_email=document.getElementById("email").value
        phone=document.getElementById("phone").value
        pass1=document.getElementById("password1").value
        pass2=document.getElementById("password2").value
       
        
    
        if(fname==""){
            document.getElementById("fname_span").innerHTML="enter first name"
            document.getElementById("fname_span").style.color="red"
            document.getElementById("fname").style.border="5px solid red"
           
          
            e=0
        
            
        }
        
      
        else if(fname.length<3){
            document.getElementById("fname_span").innerHTML="enter atleast 3 character"
            document.getElementById("fname_span").style.color="red"
            document.getElementById("fname").style.border="5px solid red"
            e=0

        }
        else if(!fname.match(name_form)){
            
                    document.getElementById("fname").style.border="5px solid red"
                    document.getElementById("fname_span").innerHTML="special character not allowed"
                    e=0
                
        }
      
     
        else{
            document.getElementById("fname").style.border="5px solid green"
            document.getElementById("fname_span").innerHTML=""
            e=1


        }

      

       

    
        if(username==""){
            document.getElementById("user_span").innerHTML="enter username"
                document.getElementById("user_span").style.color="red"
               document.getElementById("username").style.border="5px solid red"
               e=0
        }
        else if(username.length<8){
            document.getElementById("user_span").innerHTML="atleast 8 character"
            document.getElementById("user_span").style.color="red"
            document.getElementById("username").style.border="5px solid red"
            e=0
        }
        else{
            document.getElementById("user_span").innerHTML=""
            document.getElementById("username").style.border="5px solid green"
            e=1

        }
      
        if(user_email==""){
            document.getElementById("email_span").innerHTML="enter email"
            document.getElementById("email_span").style.color="red"
            document.getElementById("email").style.border="5px solid red"
            e=0
        }
        else if(!user_email.match(email_form)){
            document.getElementById("email_span").innerHTML="enter valid email"
            document.getElementById("email_span").style.color="red"
            document.getElementById("email").style.border="5px solid red"
            e=0

        }

        else{
            document.getElementById("email_span").innerHTML=""
            document.getElementById("email").style.border="5px solid green"
            e=1

          
        }
        
      
         if(phone==""){
            document.getElementById("ph_span").innerHTML="enter phone number"
            document.getElementById("ph_span").style.color="red"
            document.getElementById("phone").style.border="5px solid red"
            e=0

        }
    
        else if(phone.length!=10){
            document.getElementById("ph_span").innerHTML="phone number must be 10 character"
            document.getElementById("ph_span").style.color="red"
            document.getElementById("phone").style.border="5px solid red"
            e=0


        }
        else if(!phone.match(phone_form)){
            document.getElementById("ph_span").innerHTML="texts are not allowed"
            document.getElementById("ph_span").style.color="red"
            document.getElementById("phone").style.border="5px solid red"
            e=0


        }
      
        else{
            document.getElementById("ph_span").innerHTML=""
            document.getElementById("phone").style.border="5px solid green"
            e=1


        }
    

        if(pass1==""){
            document.getElementById("passwordsp1").innerHTML="enter a password"
            document.getElementById("passwordsp1").style.color="red"
            document.getElementById("password1").style.border="5px solid red"
            e=0

        } 
        else if(!pass1[0].match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)){
            
            document.getElementById("passwordsp1").innerHTML="firstletter must be a special character"
            document.getElementById("passwordsp1").style.color="red"
            document.getElementById("password1").style.border="5px solid red"
            e=0
            
        }
       
       else if(pass1.length<8){
            document.getElementById("passwordsp1").innerHTML="atleast 8 character"
            document.getElementById("passwordsp1").style.color="red"
            document.getElementById("password1").style.border="5px solid red"
            e=0

        }
        else{
            document.getElementById("passwordsp1").innerHTML=""
            document.getElementById("password1").style.border="5px solid green"
            e=1
          
        }

        
       if(pass2==""){
        document.getElementById("passwordsp2").innerHTML="enter a password"
        document.getElementById("passwordsp2").style.color="red"
        document.getElementById("password2").style.border="5px solid red"
        e=0

       }
    
       else{
        document.getElementById("passwordsp2").innerHTML=""
        document.getElementById("password2").style.border="5px solid green"
        e=1

        if(pass1==pass2){
            document.getElementById("passwordsp2").innerHTML=""
            document.getElementById("password2").style.border="5px solid green"
            document.getElementById("password1").style.border="5px solid green"
           
            e=0
          
            
       
           
        
    
        }
        else{
    
            document.getElementById("passwordsp2").innerHTML="password are not equal"
            document.getElementById("password2").style.border="5px solid red"
            e=1
        }
  
       
      
    }

       
  
      


  
        if(e==0){
            return false

        }
        console.log(validate())

      
    }
function username_check(){
    $.ajax({
        url:"username_check",
        type:"POST",
        data:{
            username:$("#username").val(),
        },
        success:function(reponse){
            console.log(reponse.message)
            if(reponse.message=='true'){
                document.getElementById("user_span").innerHTML="username not available"
                document.getElementById("user_span").style.color="red"
                document.getElementById("submit_button").disabled = true

            }
            else{
              
                document.getElementById("user_span").innerHTML="username available"
                document.getElementById("user_span").style.color="green"
                document.getElementById("submit_button").disabled = false

            }
        }

    })
}
   
function email_check(){
    $.ajax({
        url:"email_check",
        type:"POST",
        data:{
            email:$("#email").val(),
        },
        success:function(reponse){
            console.log(reponse.message)
            if(reponse.message=='true'){
                document.getElementById("email_span").innerHTML="email not available"
                document.getElementById("email_span").style.color="red"
                document.getElementById("submit_button").disabled = true

            }
            else{
              
                document.getElementById("email_span").innerHTML="email available"
                document.getElementById("email_span").style.color="green"
                document.getElementById("submit_button").disabled = false
            }
        }

    })
}
function phone_check(){
    $.ajax({
        url:"phone_check",
        type:"POST",
        data:{
            phone:$("#phone").val(),
        },
        success:function(reponse){
            console.log(reponse.message)
            if(reponse.message=='true'){
                document.getElementById("ph_span").innerHTML="phoneno not available"
                document.getElementById("ph_span").style.color="red"
                document.getElementById("submit_button").disabled = true

            }
            else{
              
                document.getElementById("ph_span").innerHTML="phoneno available"
                document.getElementById("ph_span").style.color="green"
                document.getElementById("submit_button").disabled = false

            }
        }

    })
}
   
