var input1 = $('.input1');
var input2 = $('.input2');
var button =$('.button');
var error1=$('.error1')
var error2=$('.error2')
var error3=$('.error3')
var error4=$('.error4')
var error5=$('.error5')


button.on('click', function() {

	if(input1.val() !== 'aaron@theironyard.com' && input2.val() === 'password123') {
		error1.html('Please enter a valid username');
		error1.show();
		error5.hide();

	}

	else if(input1.val() === 'aaron@theironyard.com' && input2.val() !== 'password123') {
		error3.html('Please enter a valid password');
		
	}

	else if(input1.val() === 'admin@google.com' && input2.val() !== 'pandas') {
		error2.html('Please enter a valid password');
	}

	else if(input1.val() !== 'admin@google.com' && input2.val() === 'pandas') {
		error4.html('Please enter a valid username');
	}

	else if(input1.val() !== 'admin@google.com' || input1.val() !== 'aaron@theironyard.com' 
		|| input2.val() !== 'pandas' || input2.val() !== 'password123') {
			error5.html('Please enter a valid combination');
	}

	else if (input1.val()=== 'aaron@theironyard.com' && input2.val() === 'password123') {
		window.location = 'http://www.theironyard.com';
	}

	else if(input1.val() === 'admin@google.com' && input2.val() === 'pandas') {
		window.location = 'http://www.theironyard.com';
	}

});
