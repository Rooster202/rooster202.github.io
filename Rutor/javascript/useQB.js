console.log('useQB.js is running on current html document')


generateButton = document.querySelector('#generateButton')
questionZone = document.querySelector('#questionZone')
questionForm = document.querySelector('#findQstnForm')

questionList = []


//console.log(firebase.database.ref('users/test/email').val())

questionForm.addEventListener('submit', function(e){
    e.preventDefault()
    while(questionZone.hasChildNodes()){
        questionZone.removeChild(questionZone.firstChild)
    }

    database.ref('questions/'+questionForm['subject'].value+'/'+questionForm['unit'].value).once("value", function(snapshot){
        
        snapshot.forEach(function(childSnapshot){
            childSnapshotData = childSnapshot.val()

            var LINE = document.createElement("hr")

            var nQstnInfo = document.createElement("div")
            nQstnInfo.className = "QstnInfo";

            var nQstnDiff = document.createElement("span")
            nQstnDiff.innerHTML = childSnapshotData["difficulty"]+ ' | '
            nQstnInfo.appendChild(nQstnDiff)

            var nQstnTech = document.createElement("span")
            nQstnTech.innerHTML = childSnapshotData["tech"]+ ' | '
            nQstnInfo.appendChild(nQstnTech)

            var nQstnCont = document.createElement("span")
            nQstnCont.innerHTML = childSnapshotData["contributer"]+ ' | '
            nQstnInfo.appendChild(nQstnCont)

            var nQstnId = document.createElement("span")
            nQstnId.innerHTML = "ID: "+childSnapshot.key
            nQstnInfo.appendChild(nQstnId)

            var nQstnEl = document.createElement("li")
            nQstnEl.innerHTML = childSnapshotData["question"];
            nQstnEl.className = "question";  

            var nQstnAnsLabel = document.createElement("span")
            //nQstnAnsLabel.className = "QstnAnswer"
            nQstnAnsLabel.innerHTML = "ANSWER: <br>"
            var nQstnAns = document.createElement("span")
            nQstnAns.className = "QstnAnswer"
            nQstnAns.innerHTML = childSnapshotData["answer"]


            if((questionForm["SF"].checked == false) && (childSnapshotData["difficulty"] == "Simple Familiar")){
                console.log("SF Question Excluded")
            }else if((questionForm["CF"].checked == false) && (childSnapshotData["difficulty"] == "Complex Familiar")){
                console.log("SF Question Excluded")
            }else if((questionForm["CU"].checked == false) && (childSnapshotData["difficulty"] == "Complex Unfamiliar")){
                console.log("CU Question Excluded")
            }else if((questionForm["techFree"].checked == false) && (childSnapshotData["tech"] == "Tech Free")){
                console.log("Tech Free Question Excluded")
            }else if((questionForm["techActive"].checked == false) && (childSnapshotData["tech"] == "Tech Active")){
                console.log("Tech Active Question Excluded")
            }else if((questionForm["dunno"].checked == false) && (childSnapshotData["tech"] == "Dunno")){
                console.log("Dunno Question Excluded")
            }else{
                console.log("Question "+ childSnapshot.key+ " not excluded")
                questionZone.appendChild(nQstnInfo)
                questionZone.appendChild(nQstnEl)
                questionZone.appendChild(nQstnAnsLabel)
                questionZone.appendChild(nQstnAns)
                questionZone.appendChild(LINE)
            }

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