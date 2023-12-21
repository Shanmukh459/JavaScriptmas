const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];

function saveSanta(arr) {
    /* Maitaining the array structure */
    const newArr = arr.map(item => {
        if (Array.isArray(item)) {
            return saveSanta(item)
        }
        else {
            return isSanta(item) && item
        }
    }).filter(item => item !== false)
    return newArr
    
    /* Flattening the array and filtering */
    // arr = arr.flat(Infinity)
    // let newArr = []
    // const santa = "🎅"
    // console.log(arr)
    // arr.forEach(emoji => {
    //     if (emoji === santa){
    //         newArr.push(emoji)
    //     }
    // })
    // return newArr
}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray))