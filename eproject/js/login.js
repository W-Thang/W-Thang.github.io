// function vaildate()
// {
// 	var name = document.getElementById('name').innerHTML
// 	var pass = document.getElementById('pass').innerHTML
// 	var sdt = document.getElementById('sdt').innerHTML
// if (name == null && nam e= "") 
// 	{
// 		alert("Username không được để trống");
// 	}
// else if(pass = null && pass = "")
// 	{
// 		alert("Password không được để trống");
// 	}
// else if(pass.length >= 8 && pass.length <= 16)
// 	{
// 		alert("Password phải từ 8-16 kí tự");
// 	}
// if (isNaN(sdt))
// 	{	
// 		alert("Số điện thoại chỉ bao gồm số");
// 	}
// }
function validate(){

	var name = document.getElementById('name').innerHTML;
	var pass = document.getElementById('pass').innerHTML;
	var sdt = document.getElementById('sdt').innerHTML;
//Su dung cau dieu kien de kiem tra 

if (name.length=0) {
	alert("Username không được để trống");
}
else if(pass.length=0){
	alert("Password không được để trống");
}
else if(pass.length>=8 || pass.length<=16){
	alert("Password phải từ 8-16 kí tự");
}
else if (isNaN(sdt)) {
	alert("Chi duoc nhap so");
}
}