document.querySelector("#form1").addEventListener("submit",myLogin);
var myUser = JSON.parse(localStorage.getItem("details"))
console.log(myUser)


function myLogin(){
    event.preventDefault();
  myEmail = document.querySelector("#email").value
  myPass = document.querySelector("#password").value


flag=0;
var N = myUser.length;
  for(i=0; i<N; i++){
    if(myUser[i].Email2==myEmail && myUser[i].pass2==myPass){
      
      flag=1;
      break;
      } 
   
  }
  if(flag==1){
    alert("Login Successful")
    window.location.reload()
    window.location.href="index.html";

  } 
  else{
      if(myEmail==""||myPass==""||myEmail==""&&myPass==""){
        document.querySelector("#M").innerHTML="Enter Data"
      }
      else{
         document.querySelector("#M").innerHTML="Email or Password wrong";
         document.querySelector("#N").style.bordercolor = "red"
        }

  }

  }





document.querySelector("#form2").addEventListener("submit", myForm);

var dataName = JSON.parse(localStorage.getItem("details"))||[]

function myForm(){
event.preventDefault();
// console.log("Inside")
var mail2 =document.querySelector("#email1").value
var password12= document.querySelector("#password1").value
var repassword2 = document.querySelector("#repassword").value

var obj = {
    Email2:mail2,
    pass2:password12,

}

if(password12!=repassword2){
  document.querySelector("#q").innerText="Passwords do not match"
   
}
else if(password12==repassword2 && password12!=""){
    flag=0;
    flag1=0;

    dataName.map(function(ele){
        if(mail2==ele.Email2 || password12==ele.pass2){
            flag=1;
        }
        if(mail2==ele.Email2 && password12 == ele.pass2){
            flag1==1;
        }
    })

    if(flag==1){
        document.querySelector("#k").innerText="Email already exist"
        // window.location.reload()
        // window.location.href="loginpage.html"
    }
    else{
        if(flag1==1){
            document.querySelector("#k").innerText="Email already exist"
        }
        else{
            dataName.push(obj)
            localStorage.setItem("details",JSON.stringify(dataName))
            window.location.reload()
            alert("Successfully SignUp")
            window.location.href="index.html"
        }
    }

}
   

}