const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

function generateSecretSantaPairs(arr) {
    let shuffledarr = [...arr]
    shuffleArray(shuffledarr)
    let d = {}
    for(let i = 0; i < arr.length; i++) {
        d[arr[i]] = shuffledarr[i]
    }
    return d
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
console.log(generateSecretSantaPairs(people))

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */