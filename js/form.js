function isValidPhone(phone_number) 
{ 
var phone = phone_number.replace(/[\(\)\.\-\ ]/g, ''); 
if (phone == "") { return false; 
} else if (isNaN(parseInt(phone))) { return false; 
} else if (phone.length < 10 || phone.length >= 15) { return false; 
} return true; 
} 
function isValidEmail(email) 
{ 
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
if(reg.test(email) == false) { return false; } return true; 
} 
function checkForm(myForm) { var errors = ""; 
if (myForm.f_firstname.value == "") errors = "Please enter your First Name.\n"; 
if (myForm.f_lastname.value == "") errors += "Please enter your Last Name.\n"; 
if (!isValidEmail(myForm.f_email.value)) errors += "Please enter a Valid Email.\n"; 
if (!isValidPhone(myForm.f_phone.value)) errors += "Please enter a Valid Phone Number.\n"; 
if (errors != "") { alert(errors); return false; } else { return true; } } 
