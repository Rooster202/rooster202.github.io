var password = {0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false};
var correct = {0: true, 1: false, 2: true, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: true};

let Rcontent = "<div class='content'><h4><u>Rose Tries Vr and theres a rainbow</u> (<a target='_blank' href='https://youtu.be/bLTUkMZk-JQ'>Youtube Link</a>)</h4><iframe width='560' height='315' src='https://www.youtube.com/embed/bLTUkMZk-JQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>"

for(let i2 = 0; i2 <= 9; i2++){
	document.getElementById("char"+String(i2)).onclick = function() {
		password[i2] = true;
		console.log(password)
	};
}	
document.getElementById("submit").onclick = function() {
	if(password[0] == correct[0] && password[1] == correct[1] && password[2] == correct[2] && 
	password[3] == correct[3] && password[4] == correct[4] && password[5] == correct[5]
	&& password[6] == correct[6] && password[7] == correct[7] && password[8] == correct[8] && password[9] == correct[9]) {
		document.getElementById("login").style.display = "none";
		document.getElementById("richardsonContent").outerHTML = Rcontent;
	} else {
		document.getElementById("passwordFeedback").innerHTML = "Sorry, only Richardsons can veiw this page<Br>If you misstyped, reload the page and try again.";
	}
};
