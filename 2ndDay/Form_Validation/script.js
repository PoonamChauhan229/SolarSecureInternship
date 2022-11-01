function validate(){

    var username=document.getElementById('username').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var cpassword=document.getElementById('cpassword').value
    
    checkUsername(username)
    checkEmail(email)
    checkPassword(password)
    checkPasswordMatch(password,cpassword)
}

function checkUsername(username){
    if(username.length>8){
        document.getElementById('username').classList.add("border","border-success")
        document.getElementById('username').classList.replace("border-danger","border-success")
        document.getElementById('username_error').innerText=""
    }
    else{
        document.getElementById('username').classList.add("border","border-danger") 
        document.getElementById('username_error').innerText=`Username must be of 8 characters`
    }
}
function checkEmail(email){
    if(email.length>8 && email.includes("@gmail.com")){
        document.getElementById('email').classList.add("border","border-success")
        document.getElementById('email').classList.replace("border-danger","border-success")
        document.getElementById('email_error').innerText="";
    }
    else{
        document.getElementById('email').classList.add("border","border-danger") 
        document.getElementById('email_error').innerText=`Email must contain @gmail.com`
    }
}
function checkPassword(password){
    if(password.length>8 && password.includes("@")){
        document.getElementById('password').classList.add("border","border-success")
        document.getElementById('password').classList.replace("border-danger","border-success")
        document.getElementById('password_error').innerText="";
    }
    else{
        document.getElementById('password').classList.add("border","border-danger") 
        document.getElementById('password_error').innerText=`Password must contain @`
    }
}

function checkPasswordMatch(password,cpassword){
    if(password===cpassword && password!="" &&  document.getElementById('password_error').innerText==""){
        document.getElementById('cpassword').classList.add("border","border-success")
        document.getElementById('cpassword').classList.replace("border-danger","border-success")
        document.getElementById('cpassword_error').innerText="";
    }
    else{
        document.getElementById('cpassword').classList.add("border","border-danger") 
        document.getElementById('cpassword_error').innerText=`Password Not Matched`
    }
}
