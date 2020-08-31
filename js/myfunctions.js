//no parameter no return type
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

