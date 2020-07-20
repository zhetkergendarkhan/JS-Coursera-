function check(){
	var email1= document.getElementById('email_adr');
	var email2= document.getElementById('email_rep');
if(email1.value!=email2.value)
{
	alert("The emails does not the same");

	return false;
}
}

function change(){
	document.getElementById('ID1').style.background= 'green';
}


 addEventListener("keydown", function(event) {
    if (event.keyCode == 86)
      document.body.style.background = "violet";
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 86)
      document.body.style.background = "";
  });

function NicknameFunc(){
	if(document.getElementById('yesNick').checked){
		document.getElementById('nick').style.display= 'inline';

		document.getElementById('nickname').setAttribute('required', true);

	}
	else{
		document.getElementById('nick').style.display= 'none';
		document.getElementById('nickname').removeAttribute('required');
	}
}




