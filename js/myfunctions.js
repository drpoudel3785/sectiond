//no parameter no return type
var myImages= new Array("images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg");
var ranNumber = Math.floor(Math.random()* myImages.length);
document.getElementById("randomImages").src=myImages[ranNumber];


function validateForm(){
    var name = document.login.name.value;
    var password = document.login.password.value;
      if(name=="" && password==""){
          document.getElementById("error").innerHTML="Usernam and Password Required";
          document.login.name.focus();
          return false;
      }
      else if(name==""){
        document.getElementById("error").innerHTML="Usernam IS Required";
        document.login.name.focus();
        return false;
      }
      else if(password==""){
        document.getElementById("error").innerHTML="Password IS Required";
        document.login.password.focus();
        return false;
      }
      else if(password.length<6 && password.length>12){
        document.getElementById("error").innerHTML="Password must be between 6 to 12 Character";
        document.login.password.focus();
        return false;
      }
        else if(name=="dharma" && password=="dharma"){
            alert("Success Login;");
            location.href = "http://thebritishcollege.edu.np";
            return false;
        }
        else{
            document.getElementById("error").innerHTML="Usernam and Password Incorrect";
            document.login.name.focus();
            return false;
        }
    return true;
}

function calcSum(){
    var num1 = parseInt(prompt("Enter the number"))
    var num2 = parseInt(prompt("Enter the second Number"))
    var sum= num1+num2;
    document.getElementById("sumResult").innerHTML="<h1>The sum is "+ sum +"</h1>"; 
}

function sumTwo(){
    num1=10;
    num2=20;
    sum=num1+num2;
    alert("The sum is" + sum);
}

function f3() {
    n1 = 2; n2 = 12;	
    var sum = n1 + n2;
    return sum;
}

function f4(n1, n2, n3)  {	
    var sum = n1 + n2 + n3;
    return sum;
}

/*var x=eval("50") * 8;
    alert(x);
  */  
/*
var d = new Date();
var y = d.getFullYear();
var m = d.getMonth()+1;
var da = d.getDate();
var day = d.getDay()+1; 
   if(day==1) day="Sunday";
   else if(day==2) day="Monday";
   else if (day ==3) day ="Tuesday";
   else "Saturday";

document.getElementById("currentTime").innerHTML = "Date: "+day +", " +da +"" +" "+ m +" " + y;

*/