console.log("contributeQB.js is running on current html document")

contributeForm = document.querySelector("#newQstnForm")


contributeForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log("Form_Submitted")
  console.log("Form submitted by "+contributeForm['contributer'].value)
  database.ref('questions/'+contributeForm['subject'].value+'/'+contributeForm['unit'].value+'/'+Math.round(Math.random()*100000000)).set({
    difficulty: contributeForm['difficulty'].value,
    contributer: contributeForm['contributer'].value,
    question: contributeForm['questionInput'].value.replaceAll("\n", "</br>"),
    answer: contributeForm['answerInput'].value.replaceAll("\n", "</br>"),
    workingOut: contributeForm['workingOutInput'].value.replaceAll("\n", "</br>"),
    tech: contributeForm['tech'].value
  });    
})
//console.log(database.ref('Questions/question1').val())