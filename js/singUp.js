function validateSignup(){
    var name=document.singup.fullname.value;
    var filter = /^([a-zA-Z])+$/;
    var validfullname = name.match(filter);

    if(validfullname == null){
        //alert("Invlaid");
        document.getElementById("singUpError").innerHTML="Your FullName is not valid. Only characters A-Z, a-z and '-' are  acceptable.";
        document.singup.fullname.focus();

        return false;
    }


    var pass=document.singup.password.value;
    var passfilter = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var validpassword = pass.match(passfilter);

    if(validpassword == null){
        //alert("Invlaid");
        document.getElementById("singUpError").innerHTML="Password should contanin one number one character special character ";
        document.singup.password.focus();

        return false;
    }



   
    return true;
  }


  