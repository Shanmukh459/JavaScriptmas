const foodEl = document.getElementById("food")
const btn = document.getElementById("btn")

btn.addEventListener('click', displayResult)

function displayResult() {
    const numGuests = document.getElementById("num-input").value
    if (document.getElementById("vegetarian-input").checked) {
      foodEl.textContent = "Winter Squash Risotto"
    }
    else {
      if (numGuests <= 4){
        foodEl.textContent = "Ham"
      }
      else {
        foodEl.textContent = "Turkey"
      }
    }
}
