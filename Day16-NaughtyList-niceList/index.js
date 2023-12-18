import {sorteesArr} from "/data"


const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
const addBtn = document.getElementById("add-btn")
btn.addEventListener("click", sortArr)
addBtn.addEventListener("click", addPerson)


function sortArr() {
    sorteesArr.sort((a, b) => {
        let fa = a.hasBeenGood
        let fb = b.hasBeenGood
        
        if (fa < fb) {
            return 1
        } else if (fa > fb) {
            return -1
        }
        return 0
    })
    render()
}

function addPerson() {
    const newName = document.getElementById("new-name").value
    const selectedClass = document.getElementById("selected-class").value
    
    sorteesArr.push({name: newName, hasBeenGood: selectedClass === "Nice" ? true : false})
    sortArr()
    render()
}

function render() {
    let niceListHtml = ''
    let naughtyListHtml = ''
    sorteesArr.forEach((person) => {
        if(person.hasBeenGood){
            niceListHtml += `<li>${person.name}</li>`
        } else {
            naughtyListHtml += `<li>${person.name}</li>`
        }
    })
    niceList.innerHTML = niceListHtml
    naughtyList.innerHTML = naughtyListHtml
}


/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/