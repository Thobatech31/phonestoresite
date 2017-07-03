function validateName()
{
			var name = document.getElementById("nammy").value; //for getting the value type in inside USERNAME and store it in (var name)
			if(name.length == 0) //to find out wether something is type inside the USERNAME BOX OR NOT
		{
			producePrompt("name is required","requiree","red"); //(producePrompt is the fuction to perform this line of code (where name is required is 	for message in fuction producePrompt)and (promptLocation is use to get the ID of LABER IN HTML CODE)and (color for red)) 
			return false;
		}	
}


function validatePass1(){
			var pwrd = document.getElementById("pass").value;
			if(pwrd.length == 0)
		{
			producePrompt("password is required","pass1","red");
			return false;
		}
}

function producePrompt(message,promptLocation,color) //is function use to perform the funtion MESSAGE for NAME REQUIRED,PROMPTLOCATION for REQUIREE which is the ID of label and color
{
		document.getElementById(promptLocation).innerHTML= message; // get the content inside all the id one by one because MESSAGE has represent all the ID
		document.getElementById(promptLocation).style.color= color;
		
}