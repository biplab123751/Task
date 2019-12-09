// JavaScript Document
function validate()
{
	var username=document.getElementById("uname");
	var password=document.getElementById("pass");
	
	if(username.value=="" || password.value==""){
		alert("No blank spaces allowed");
		return false;
	
 }
	else{
		return true;
	}
	
}

