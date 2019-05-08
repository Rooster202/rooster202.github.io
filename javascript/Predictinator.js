console.log("teeest")
console.log("teeeegnrgbrust")

let qnum = 5;
let clickk = false;

/*
for(let i = 2; i <= qnum; i++){
	document.getElementById(String(i)).style.display = "none";
}
*/



for(let i = 1; i < qnum; i++){
	if (clickk === false){
		document.querySelector("#question"+String(i)+" button").onclick = function () {
			console.log("clicdk")
			document.getElementById("question"+String(i)+1).style.display = "block";
			clickk = true;
		};
	};
}


//document.getElementById("tst").style.display = "block";
console.log("teeeerrgnrgbFEEFEFEFEFEFEFEFEFEFEFrustege")