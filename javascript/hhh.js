console.log("testirino")

const content_1 = document.querySelector("#content_1")
const form_1 = document.querySelector("#name_city_form")

let dada = [];


// Outputting Data
function update_data(doc){
	let name = document.createElement("p");
	name.textContent = doc.data().name;
	content_1.appendChild(name);
	
	console.log(doc.data());
	//document.getElementById("t1").innerHTML = doc.data().name;
	
}


// Getting Data
db.collection("tutorial").get().then((snapshot) => {
	snapshot.docs.forEach((doc, i) => {
		update_data(doc);
	})
    //update_data(snapshot.docs.tutorial.data());
})

// Uploading/saving/updating data

form_1.addEventListener("submit", (e) => {
	e.preventDefault();
	db.collection("tutorial").add({
		name: form_1.name.value,
		city: form_1.city.value
	});
	form_1.name.value = "";
	form_1.city.value = "";
})
