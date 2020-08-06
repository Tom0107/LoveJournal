function login(){
	let account,password;
	account=document.getElementById("exampleDropdownFormEmail1");
	password=document.getElementById("exampleDropdownFormPassword1");
	if(account.value===""){
		alert("請輸入帳號，謝謝!!")
	}
	else if(password.value===""){
		alert("請輸入密碼，謝謝!!")
	}
	else if(account.value==="0000@gmail.com" && password.value==="0000"){
		form.action="HTML/journal.html";
		form.submit();
		//window.location.href="./HTML/journal.html";
	}
	else{
		alert("請輸入正確的帳號與密碼，謝謝!!")
	}
}
function forget(){
	alert("自己想辦法啊~")
}