let sendButton = document.querySelector('button');

function send(){
	let lastname = document.querySelector('#lastnameValue').value;
	let firstname = document.querySelector('#firstnameValue').value;
	let email = document.querySelector('#emailValue').value;
	let password1 = document.querySelector('#password1Value').value;
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbxSD9XCcxkjGCDVFwJ3Hj0ervVlrLOg2ibDpTIO8p6cEQIOsZCl/exec",
		data: {
			"lastname": lastname,
			"firstname": firstname,
			"email": email,
			"password1": password1
		},
		success: function(response){
			if(response == "成功"){
				alert("註冊成功!");
				window.location.href="./journal.html";
			}
		},
	});
};

sendButton.addEventListener('click', send);