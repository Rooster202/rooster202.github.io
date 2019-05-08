console.log("testirinoino")
console.log(Date());

let allDocs;

let logged_in = false;
const loginForm = document.querySelector("#login_form");
const loginMessage = document.querySelector("#login_message");
let show_password1 = false;
const showPasswordB1 = document.querySelector("#show_password_b1");
const loginPasswordFeild = loginForm.login_password;

const userHomePage = document.querySelector("#user_home_page");
const Tittle = document.querySelector("body h1");
const userWelcomeMessage = document.querySelector("#user_home_page p");
const userStatBox = document.querySelector("#user_home_page .user_stats");

const signUpForHomepage = document.querySelector("#sign_up_for_homepage");
const signUpB1 = document.querySelector("#sign_up_b1");
const signUpPage = document.querySelector("#sign_up_page");
const signUpForm = document.querySelector("#sign_up_form");
let showPassword2 = false;
const showPasswordB2 = document.querySelector("#show_password_b2");
const signUpPasswordFeild = signUpForm.password;
const loginMessage2 = document.querySelector("#sign_up_message");
let lastUsername = "";
let lastEmail = "";
const signUpMessageBefore = document.querySelector("#sign_up_message_before");

const rulesPage = document.querySelector("#rules_page");

db.collection("users").get().then((docs) => {
	allDocs = docs;
	logIn(docs);
	docs.forEach((doc) => {
		console.log(doc.data());
	})
})


// USER HOMEPAGE
function buildUserHomePage(userData){
	loginForm.style.display = "none";
	signUpForHomepage.style.display = "none";
	Tittle.innerHTML = userData.name+" - Homepage";
	userHomePage.style.display = "block";
	userWelcomeMessage.innerHTML = "Welcome, "+userData.name+"! Unfortunately the next hunger game hasn't started yet, but you can veiw your user stats below:";
	userStatBox.innerHTML = "<span class='user_stat_tittle'>Name: </span>"+userData.name+"<br><span class='user_stat_tittle'>Email: </span>"+userData.email+"<br><span class='user_stat_tittle'>Usertype: </span>"+userData.type+"<br><span class='user_stat_tittle'>Date created: </span>"+userData.date+"<br><span class='user_stat_tittle'>Status: </span>"+userData.status;
}

// LOG IN CODE
function logIn(docs){
	loginForm.addEventListener("submit", (e) => {
		e.preventDefault()
		docs.forEach((doc) => {
			if (doc.data().name === loginForm.login_name.value && doc.data().password === loginForm.login_password.value){
				let userData = doc.data();
				console.log(userData.name+" has logged in");
				logged_in = true;
				buildUserHomePage(userData);
			}
		})
		if (logged_in === false){
			loginMessage.innerHTML = "Sorry "+loginForm.login_name.value+", your details are incorrect.";
		}
	})
}
showPasswordB1.addEventListener("click", (e) => {
	if (show_password1 === false){
		loginPasswordFeild.setAttribute("type", "text");
		show_password1 = true;
	}else{
		loginPasswordFeild.setAttribute("type", "password");	
		show_password1 = false;
	}
		
})

// SIGN UP CODE
signUpB1.addEventListener("click", (e) => {
	loginForm.style.display = "none";
	rulesPage.style.display = "none";
	signUpForHomepage.style.display = "none";
	signUpPage.style.display = "block";
})
showPasswordB2.addEventListener("click", (e) => {
	if (showPassword2 === false){
		signUpPasswordFeild.setAttribute("type", "text");
		showPassword2 = true;
	}else{
		signUpPasswordFeild.setAttribute("type", "password");	
		showPassword2 = false;
	}
		
})
signUpForm.addEventListener("submit", (e) => {
	e.preventDefault();
	e.stopPropagation();
	let alreadyExists = false;
	allDocs.forEach((doc) => {
		if (doc.data().name === signUpForm.username.value || doc.data().email == signUpForm.email_num.value+signUpForm.email_string.value+"@mbbc.qld.edu.au"){
			loginMessage2.innerHTML = "Player with the same email or username already exists, please log-in by refreshing the page.";
			console.log("Player already exists");
			alreadyExists = true;
		} else if (lastUsername === signUpForm.username.value || lastEmail == signUpForm.email_num.value+signUpForm.email_string.value+"@mbbc.qld.edu.au"){
			console.log("Oi calm down mate");
			alreadyExists = true;
		}
	})
	if (alreadyExists === false){
		db.collection("users").add({
			name: signUpForm.username.value,
			email: signUpForm.email_num.value+signUpForm.email_string.value+"@mbbc.qld.edu.au",
			password: signUpForm.password.value,
			type: "player",
			date: Date(),
			status: "alive"
		})
		lastUsername = signUpForm.username.value;
		lastEmail = signUpForm.email_num.value+signUpForm.email_string.value+"@mbbc.qld.edu.au";
		signUpForm.style.display = "none";
		signUpMessageBefore.innerHTML = "Success! You can now log in: <button type='button' onClick='document.location.reload(true)'>Log-In</button>";
		//document.querySelector("#sign_up_message_before button").onclick = "window.location.href = './index.html';"
	}
})


//Data deletion tool
function deletee(nombre){
	allDocs.forEach((doc) => {
		if (doc.data().name === nombre){
			db.collection("users").doc(doc.id).delete();
			console.log(doc.id+" deleted");
		}
	})
}

