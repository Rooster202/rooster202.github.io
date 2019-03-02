let clicked_r2 = false;


document.getElementById("DBT_1").onclick = function () {
	document.body.style.backgroundImage = "url('./backgrounds/background.jpg')";
};

document.getElementById("DBT_2").onclick = function () {
	document.body.style.backgroundImage = "url('./backgrounds/background2.gif')";
};

document.getElementById("DBT_3").onclick = function () {
	document.body.style.backgroundImage = "url('./backgrounds/background3.gif')";
};

document.getElementById("DBT_4").onclick = function () {
	document.body.style.backgroundImage = "url('./backgrounds/background4.gif')";
};

document.getElementById("DBT_5").onclick = function () {
	document.body.style.backgroundImage = "url('./backgrounds/background5.gif')";
};

document.getElementById("DBT_6").onclick = function () {
	document.body.style.backgroundImage = "url('./backgrounds/background6.gif')";
};

document.getElementById("DBT_7").onclick = function () {
	document.body.style.backgroundImage = "url('./backgrounds/background7.gif')";
	clicked_r2 = true;
};

document.getElementById("DBT_8").onclick = function () {
	document.body.style.backgroundImage = "url('./backgrounds/background8.gif')";
};

document.getElementById("DBT_theRest").onclick = function () {
	if (clicked_r2 == true) {
		console.log("hugjfieh");
		document.getElementById("intro").innerHTML = "Yeah I couldn't be bothered to find any more tileable gifs";
	}
};


document.getElementById("super_duper_secret_button").onclick = function () {
	document.getElementById("super_duper_secret_location").innerHTML = "You can click any letter in my first name";
};

