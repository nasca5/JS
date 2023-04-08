const bttn = document.getElementById('button');

function validateForm(e) { 
	var username = document.forms["loginForm"]["username"].value; 
	var password = document.forms["loginForm"]["password"].value;
	if (username == "" || password == "") {
		document.getElementById("error-message").innerText = "Username or Password must be filled out";
    e.preventDefault();
	}

  else if (username == "nasca55" && password == "134679aa") {
    alert("Welcome to the site!");
    document.body.style.backgroundColor = "white";
    e.preventDefault();
  }

  else {
    alert("Invalid username or password");
    document.body.style.backgroundColor = "red";
    e.preventDefault();
  }
}

bttn.addEventListener("click", validateForm);