function validate()
{
	var Firstname = document.getElementById('firstname').value;
	var Lastname = document.getElementById('lastname').value;
	var Email = document.getElementById('email').value;
	var City = document.getElementById('city').value;
	var Country = document.getElementById('country').value;
	var regex = /^\W+@[a-zA-Z]{3,}\.com$/i;
if (Firstname==null||Firstname=="")
 {
 	document.getElementById('e_firstname').innerHTML = "Firstname không được để trống";
 	return false;
 }
}