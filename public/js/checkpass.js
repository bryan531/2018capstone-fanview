
function checkPass(){
	const pass1 = document.getElementById('inputPassword'),
  		  pass2 = document.getElementById('confirmPassword'),
				message = document.getElementById('confirmMessage'),
				button = document.getElementById('submit'),
				matchColor = '#66cc66',
				notMatchColor = '#ff6666';


	if (pass1.value === pass2.value) {
		message.style.color = matchColor;
		message.innerHTML = "Passwords match";
		button.disabled = false;
	} else {
		message.style.color = notMatchColor;
		message.innerHTML = "Passwords Do Not Match";
		button.disabled = true;
	}
}
