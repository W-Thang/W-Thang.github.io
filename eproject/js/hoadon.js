function hoadon()
	{
		document.getElementById()

		var tenKH = document.getElementById('tenKH').value;
		var sdt = document.getElementById('sdt').value;
		var diachi = document.getElementById('diachi').value;
		var tensp = document.getElementById('tensp').value;
		var hangsx = document.getElementById('hangsx').value;
		var price = document.getElementById('price').value;
		var soluong = document.getElementById('soluong').value;

		var sp1 = document.getElementById('sp1');
		var sl1 = document.getElementById('sl1');
		var dg1 = document.getElementById('dg1');
		var gg1 = document.getElementById('gg1');
		var tt1 = document.getElementById('tt1');

		if(soluong<5){gg1.value=0;}
		if(soluong>5){gg1.value=0.05;}
		if(soluong>10){gg1.value=0.1;}

		sp1.innerHTML = hangsx + " " + tensp;
		sl1.innerHTML = soluong;
		dg1.innerHTML = price + "đ";
		gg1.innerHTML = gg1.value*100 + "%";
		tt1.innerHTML = soluong*price - (soluong*price*gg1.value);
		name.innerHTML = tenKH;
		phone.innerHTML = sdt;
		address.innerHTML = diachi;
	}