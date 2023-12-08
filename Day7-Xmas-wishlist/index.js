const wishlist = [
  "Macbook Air M2",
  "Scrimba subscription",
  "Nike AirMax"
];

const wishlistInner = document.getElementById("wishlist-inner")
const addBtn = document.getElementById("add-btn")
const inputEl = document.getElementById("input-el")

addBtn.addEventListener('click', function() {
    if (inputEl.value){
        appendToWishlist(inputEl.value)
        inputEl.value = ''
    }
})
function render() {
    wishlist.forEach(function(listItem) {
        appendToWishlist(listItem)
    })
}

function appendToWishlist(item) {
    let liEl = document.createElement('li')
    liEl.textContent = item
    wishlistInner.append(liEl)
}
render()