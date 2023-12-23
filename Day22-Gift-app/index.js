import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://realtime-database-3e10c-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const peopleInDB = ref(database, "gifts")
let people = []

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const peopleListEl = document.getElementById("people-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    if (inputValue) {
        push(peopleInDB, inputValue)
        clearInputFieldEl()
        
    }
})

onValue(peopleInDB, function(snapshot) {
    if(snapshot.exists()){
        let listArray = Object.entries(snapshot.val())
        
        clearPeopleListEl()
        
        for (let i = 0; i < listArray.length; i++) {
            let personInfo = listArray[i]
            let personId = personInfo[0]
            let personName = personInfo[1]
            appendPersonToPeopleListEl(personId, personName)
        }
    }
})


function clearPeopleListEl() {
    peopleListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendPersonToPeopleListEl(personId, personName) {
    
    let newEl = document.createElement("li")
    
    newEl.textContent = personName
    
    newEl.addEventListener("dblclick", function() {
        const personIdInDb = ref(database, `gifts/${personId}`)
        remove(personIdInDb)
    })
    
    peopleListEl.append(newEl)
}