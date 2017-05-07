
<?php
if(isset($_POST['username']) && isset($_POST['phone']) && isset($_POST['email']) && isset($_POST['pword1']) && isset($_POST['pword2'])){
    $username = $_POST['username'];
    $phoneno = $_POST['phone'];
    $email = $_POST['email'];
    $password1 = $_POST['pword1']
    $password2 = $_POST['pword2']
      if(!empty($username) && !empty($phoneno) && !empty($email) && !empty(password1) && !empty(password2)){
           if($password1 == $password2){
               
               $password1 = md5('password1');
               $password2 = md5('password2');
             mysql_connect("localhost", "root", "");
            mysql_select_db("phoneadvert");
               mysql_query("INSERT INTO phone2(username,email,phoneNo,password,Re_password) VALUES('$username','$phoneno','$email','$password1','$password2')");
               
               $registered = mysql_affected_rows();
               echo "registered succesfully";
           }else
               echo "problem during registration",
          
      }  
    
    @ mysql_close()
       
}

?>
<!DOCTYPE html>
<html>
<head>
	<script src="validator.js"></script>
	<link rel="stylesheet" href="validator.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!--BOOTSRAP-->
		<link rel="stylesheet" type="text/css" href="bootstrap-3.3.5\css\bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="navbar.css">
		<script type="text/javascript" href="bootstrap-3.3.5\js\bootstrap.min.js"></script>
</head>
<body style="background-color:maroon"> 
	<div class="container">
		<div class="row">
			<div class="col-sm-10 col-xs-10 col-md-8">
				<form id="valid">
	
					<A HREF="fontpage.html"
						ONMOUSEOVER="window.status='home page'; changeImages('home_page', 'images/home-page-over.jpg'); return true;"
						ONMOUSEOUT="window.status=''; changeImages('home_page', 'images/home-page.jpg'); return true;">
						<IMG NAME="home_page" SRC="images/home-page.jpg" WIDTH=154 HEIGHT=38 BORDER=0 ALT="home page">
					</A>
					<br><br>
					&nbsp &nbsp  &nbsp &nbsp &nbsp  &nbsp &nbsp Username &nbsp <input type="text" id="nammy" name="username"  onkeyup="validateName()"/> <label id="requiree"></label><br><br>
		
					&nbsp &nbsp  &nbsp &nbsp &nbsp  &nbsp &nbsp Phone No &nbsp <input type="text" id="phoney" name="phone" maxlength="11" onkeyup="validatePhone()" /> <label  id="phonny"></label><br><br>
		
					&nbsp &nbsp  &nbsp  Email Address &nbsp <input type="email" id="Emaily" name="email" onkeyup="validateEmail()"/> <label  id="Ema"></label><br><br>
		
					&nbsp &nbsp  &nbsp &nbsp &nbsp  &nbsp &nbsp Password &nbsp <input type="password" id="pass" maxlength="13"  name="pword" onkeyup="validatePass1()"/> <label id="pass1"></label><br><br>
		
					Confirm Password &nbsp <input type="password" id="repass" maxlength="13"   onkeyup="validatePass2()" name="pword2"> <label id="pass2"></label><br><br>
		
		
					&nbsp &nbsp Male <input type="radio"> &nbsp &nbsp Female <input type="radio"><br><br>
		
					<input type="button" id="submit" value="Sign Up"><br><br>
		
		
				</form>
			</div>
		</div>
	</div>
</body>
</html>