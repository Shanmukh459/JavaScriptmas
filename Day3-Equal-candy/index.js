const candyEl = document.getElementById("ncandies")
const childEl = document.getElementById("nchildren")
const ansEl = document.getElementById("answer")
const calBtn = document.getElementById("cal-btn")

calBtn.addEventListener('click', calcTotalCandies)

function calcTotalCandies(children, candy) {
 const candyForEachKid = Math.floor(candyEl.value / childEl.value)
 ansEl.innerHTML = `<p>Every Child gets ${candyForEachKid}</p>
 <p>Total candies eaten = ${candyForEachKid*childEl.value}`
}

// calcTotalCandies(3, 10) // expected output: 9
// calcTotalCandies(4, 20) // expected output: 20
// calcTotalCandies(6, 25) // expected output: 24