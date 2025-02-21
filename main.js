var firstname=document.getElementById("firstname")
var fname=document.getElementById("fname")
var lastname=document.getElementById("lastname")
var lname=document.getElementById("lname")
var email=document.getElementById("email")
var mail=document.getElementById("mail")
var email2=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var password=document.getElementById("password")
var pass=document.getElementById("pass")
var submit=document.getElementById("click")
submit.addEventListener("click",function(event)
{
    event.preventDefault()
    if(firstname.value=== '' || firstname.value==null)
    {
        fname.innerHTML="First Name cannot be empty"
        firstname.style.borderColor="red"
    }
    else{
        fname.innerHTML=" "
    }
    if(lastname.value=== '' || lastname.value==null)
    {
        lname.innerHTML="Last Name cannot be empty"
        lastname.style.borderColor="red";

    }
    else{
        lname.innerHTML=" "
    }
    if(!email.value.match(email2))
    {
        mail.innerHTML="look like not this is an email"
        email.style.borderColor="red"
    }
    else{
        mail.innerHTML=" "
    }
    if(password.value.length==0)
    {
        pass.innerHTML="password cannot be empty"
        password.style.borderColor="red"
    }
    else{
        pass.innerHTML=" "
    }
})