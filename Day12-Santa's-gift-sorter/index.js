const sortedList = document.getElementById("sorted-list")
const unsortedList = document.getElementById("unsorted-list")

const xmasGifts = ['guitar 🎸', 'skates ⛸️', 'bear 🧸', 'magnet 🧲', 'laptop 💻', 'games console 🎮 ', 'jewellery 💍', 'kite 🪁']


const sortedAZ = xmasGifts.sort()
sortedList.innerHTML = displayList(sortedAZ) 


const sortedZA = xmasGifts.reverse()
unsortedList.innerHTML = displayList(sortedAZ)


function displayList(giftsArr) {
    return giftsArr.map(gift => `<li>${gift}</li>`).join('')
}