var input1 = $('.input1');
var input2 = $('.input2');
var button =$('.button');
var error1=$('.error1')
var error2=$('.error2')
var error3=$('.error3')
var error4=$('.error4')
var error5=$('.error5')


button.on('click', function() {

	if (iinput1.val()=== 'aaron@theironyard.com' && input2.val() === 'password123') {
		window.location = 'http://www.theironyard.com';
		error3.hide();
	}

	if(iinput1.val() === 'admin@google.com' && input2.val() === 'pandas') {
		window.location = 'http://www.theironyard.com';
		error3.hide();
	}

	if(iinput1.val() !== 'aaron@theironyard.com' && input2.val() === 'password123') {
		error1.html('Please enter a valid username');
		error3.hide();
	}

	if(iinput1.val() === 'aaron@theironyard.com' && input2.val() !== 'password123') {
		error2.html('Please enter a valid password');
		error3.hide();
	}

	if(iinput1.val() === 'admin@google.com' && input2.val() !== 'pandas') {
		error2.html('Please enter a valid password');
		error3.hide();
	}

	if(iinput1.val() !== 'admin@google.com' && input2.val() === 'pandas') {
		error1.html('Please enter a valid username');
		error3.hide();
	}

	if(iinput1.val() !== 'admin@google.com' || iinput1.val() !== 'aaron@theironyard.com'
		|| input2.val() !== 'pandas' || input2.val() !== 'password123') {
			error3.html('Please enter a valid combination');
	}


});
