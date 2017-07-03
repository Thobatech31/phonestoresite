function validateName()
{
			var name = document.getElementById("nammy").value; //for getting the value type in inside USERNAME and store it in (var name)
			if(name.length == 0) //to find out wether something is type inside the USERNAME BOX OR NOT
		{
			producePrompt("name is required","requiree","red"); //(producePrompt is the fuction to perform this line of code (where name is required is 	for message in fuction producePrompt)and (promptLocation is use to get the ID of LABER IN HTML CODE)and (color for red)) 
			return false;
		}
		
			producePrompt("Welcome "+name,"requiree","green");
			return true;		
}


function validatePass1(){
			var pwrd = document.getElementById("pass").value;
			if(pwrd.length == 0)
		{
			producePrompt("password is required","pass1","red");
			return false;
		}
			producePrompt(" "+pwrd,"pass1","green");
			return true;
}



function validatePass2(){
			var repwrd = document.getElementById("repass").value;
			if(repwrd.length == 0)
			{
				producePrompt("re-password required","pass2","red");
				return false;
			}
				producePrompt(" "+repwrd,"pass2","green");
				return true;
}


function validatePhone(){
			
			var number = document.getElementById("phoney").value;
			if(number.length == 0)
			{
				producePrompt("Number Required","phonny","red");
				return false;
			}
			
			
			if(number.length != 12)
			{
				producePrompt("Only 12 Digit","phonny","green");
				return false;
			}
			
			
			if(!/^[0-9]{12}$/.test(parseInt(number)))
			{
				producePrompt ("Digit Only","phonny","green");
			return false;
			}
			
			
		if(number.length == 11)
			{
				producePrompt("VALID","phonny","green");
				return true;
			}		
}

function clicker(){
	var submit = document.getElementById("submit");
	submit.addEventListener("click",password,false); // CLICK mean when they click first, PASSWORD:-is the fuction that will be called after click, FALSE:- constant
}

function password(){ //function called after clicking
	var pass1 = document.getElementById("pass").value;
	var pass2 = document.getElementById("repass").value;
	if (pass1 != pass2)
	{
		alert("Password Not Match");
	}

	else
	{
		alert("Registration Succesful")
	}
	window.open("navyy.html");
	
}
window.addEventListener("load",clicker,false);
//window.open("www.google.com");





function validateEmail(){
	var emay = document.getElementById("Emaily").value;
	if(emay.length == 0)
	{
		producePrompt("email required","Ema","red");
		return false;
	}
	if(!/^[A-Za-z].*[@].*\.[A-Za-z]{3}/.test(parseInt(emay)))
		producePrompt("Input In Order","Ema","blue");
	return false;
	{
		
	}
	producePrompt("valid","Ema","green");		return true;
}




function producePrompt(message,promptLocation,color) //is function use to perform the funtion MESSAGE for NAME REQUIRED,PROMPTLOCATION for REQUIREE which is the ID of label and color
{
		document.getElementById(promptLocation).innerHTML= message; // get the content inside all the id one by one because MESSAGE has represent all the ID
		document.getElementById(promptLocation).style.color= color;
		
}