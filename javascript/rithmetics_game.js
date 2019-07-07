hit_me_button = document.querySelector("#hit_me_button");
dif_output = document.querySelector("#difficulty_output");
question_output = document.querySelector("#question_output");

ans_form = document.querySelector("#answer_form");
ans_input = document.querySelector("#answer");
submit_input = document.querySelector("#submitt");

timer_output = document.querySelector("#timer");



ans_form.style.display = "none";

var answers_arr = [];
var questions = [];

questions.push(["Medium", "If Logx (1 / 8) = - 3 / 2, then x is equal to", "4"]);
questions.push(["Easy", "20 % of 2 is equal to", "0.4"]);
questions.push(["Hard", "If Log-4 (x) = 12, then log-2 (x / 4) is equal to ", "22"]);
questions.push(["Hard", "The population of a country increased by an average of 2% per year from 2000 to 2003. If the population of this country was 2 000 000 on December 31, 2003, then the population of this country on January 1, 2000, to the nearest thousand would have been", "1846000"]);
questions.push(["Easy", "Whats 2+2?", "4"]);
questions.push(["Easy", "Whats 5+6", "11"]);
questions.push(["Easy", "The answer to life, the universe and everything", "42"]);
questions.push(["Easy", "11*17", "187"]);
questions.push(["Medium", "A school committee consists of 2 teachers and 4 students. The number of different committees that can be formed from 5 teachers and 10 students is... ", "2100"]);
questions.push(["Hard", "Five different books (A, B, C, D and E) are to be arranged on a shelf. Books C and D are to be arranged first and second starting from the right of the shelf. The number of different orders in which books A, B and E may be arranged is ", "3!"]);
questions.push(["Hard", "The exam scores of all 500 students were recorded and it was determined that these scores were normally distributed. If Jane's score is 0.8 standard deviation above the mean, then how many, to the nearest unit, students scored above Jane?", "106"]);
questions.push(["Hard", "When a metallic ball bearing is placed inside a cylindrical container, of radius 2 cm, the height of the water, inside the container, increases by 0.6 cm. The radius, to the nearest tenth of a centimeter, of the ball bearing is ", "1.2"]);
questions.push(["Hard", "The probability that an electronic device produced by a company does not function properly is equal to 0.1. If 10 devices are bought, then the probability, to the nearest thousandth, that 7 devices function properly is ", "0.057"]);
questions.push(["Easy", "Square root of 36?", "6"]);
questions.push(["Medium", "Cubed root of 27?", "3"]);
questions.push(["Medium", "Jessica is 50kg, what is her weight?", "491"]);


/*
for(int i = 1, i <= questions.length, i++){
	
}
*/
var cur_question;

var questions_done = 0;
var squestion;

hit_me_button.addEventListener("click", function(){next_second(); next_question();})

function next_question(){
	hit_me_button.style.display = "none";
	ans_form.style.display = "block";
	timer_output.innerHTML = ti;
	
	squestion = Math.floor((Math.random()*questions.length))
	cur_question = squestion;
	
	dif_output.innerHTML = questions[squestion][0]		
	question_output.innerHTML = questions[squestion][1]	
}

ans_form.addEventListener("submit", (e) => {
	e.preventDefault();
	e.stopPropagation();
	questions_done += 1;

	answers_arr.push([cur_question, ans_input.value]);
	ans_input.value = "";
	//console.log(answers_arr);
	
	
	next_question();
})

ti = 10;


function next_second(){
	setTimeout(function(){
		ti -= 1;
		timer_output.innerHTML = ti;
		if (ti == 0){
			times_up();
		}else{
			next_second()
		}
	}, 1000);

}

var ans_correct = 0;

function times_up(){
	hit_me_button.style.display = "none";
	ans_form.style.display = "none";
	timer_output.innerHTML = "TIMES UP!!";
	
	for(i = 0; i<=(answers_arr.length-1); i++){
		if (answers_arr[i][1] == questions[answers_arr[i][0]][2]){
			ans_correct += 1;
		}
		console.log(questions[answers_arr[i][0]][2]);
	}
	
	dif_output.innerHTML = ans_correct+"/"+questions_done;
	
	question_output.innerHTML = answers_arr;
	console.log(ans_correct);
};



console.log(42 == "42");
console.log(questions[2][2]);

/*
var timee = "";
for(i = 16; i <= 23; i++){
	timee = timee+Date()[i]
}
*/

//console.log(Date(0)[23]);