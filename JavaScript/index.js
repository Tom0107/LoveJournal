let sendButton = document.querySelector('button');

function send(){
	let lastname = document.querySelector('#formGroupExampleInput').value;
	let firstname = document.querySelector('#formGroupExampleInput2').value;
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbwb8H-M1x05pjrNZnnuwmCLCMIscM_0ER-WDKXW5pFl-4x_-7Q/exec",
		data: {
			"lastname": lastname,
			"firstname": firstname
		},
		success: function(response){
			if(response == "成功"){
				alert("已儲存此次登入資訊，請按一下[確定]");
				window.location.href="./HTML/journal.html";
			}
		},
	});
};

sendButton.addEventListener('click', send);