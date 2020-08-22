console.log('useQB.js is running on current html document')


generateButton = document.querySelector('#generateButton')
questionZone = document.querySelector('#questionZone')
questionForm = document.querySelector('#findQstnForm')

//console.log(firebase.database.ref('users/test/email').val())

questionForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log("generate button pressed")
    console.log(questionForm['subject'].value)

    while(questionZone.hasChildNodes()){
        questionZone.removeChild(questionZone.firstChild)
    }

    database.ref('questions/'+questionForm['subject'].value+'/'+questionForm['unit'].value).once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var nQstnInfo = document.createElement("div")
            nQstnInfo.className = "QstnInfo";

            var nQstnDiff = document.createElement("span")
            nQstnDiff.innerHTML = childSnapshot.val()["difficulty"]+ ' | '
            nQstnInfo.appendChild(nQstnDiff)

            var nQstnTech = document.createElement("span")
            nQstnTech.innerHTML = childSnapshot.val()["tech"]+ ' | '
            nQstnInfo.appendChild(nQstnTech)

            var nQstnCont = document.createElement("span")
            nQstnCont.innerHTML = childSnapshot.val()["contributer"]+ ' | '
            nQstnInfo.appendChild(nQstnCont)

            var nQstnId = document.createElement("span")
            nQstnId.innerHTML = "ID: "+childSnapshot.key
            nQstnInfo.appendChild(nQstnId)

            var nQstnEl = document.createElement("li")
            nQstnEl.innerHTML = childSnapshot.val()["question"];
            nQstnEl.className = "question";  

            var nQstnAnsLabel = document.createElement("span")
            //nQstnAnsLabel.className = "QstnAnswer"
            nQstnAnsLabel.innerHTML = "ANSWER: "
            var nQstnAns = document.createElement("span")
            nQstnAns.className = "QstnAnswer"
            nQstnAns.innerHTML = childSnapshot.val()["answer"]

            questionZone.appendChild(nQstnInfo)
            questionZone.appendChild(nQstnEl)
            questionZone.appendChild(nQstnAnsLabel)
            questionZone.appendChild(nQstnAns)
        })
    })
    /*
    database.ref('questions/1').on('value', function(snapshot){
        console.log(snapshot.val())
        var nElement = document.createElement("li")
        nElement.innerHTML = snapshot.val();  
        questionZone.appendChild(nElement)
    })
    */
     
})