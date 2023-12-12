import OpenAI from "openai"

const dialogModal = document.getElementById('dialog-modal')
const imageContainer = document.getElementById('image-container')
const openAIApiKey = process.env.OPENAI_API_KEY
const form = document.querySelector('form')

/** show dialog on load **/
dialogModal.show()

 
form.addEventListener('submit', function(e) {
    e.preventDefault()
    dialogModal.close()
    const userInput = document.getElementById("user-input").value
    displayImage(userInput)
})

const openai = new OpenAI({ openAIApiKey, dangerouslyAllowBrowser: true});

async function displayImage(userInput='snow man in front of house') {
    imageContainer.innerHTML = `<img src="https://i.gifer.com/7plU.gif">`
    const image = await openai.images.generate({ model: "dall-e-3", prompt: userInput });
    imageContainer.innerHTML = `<img src=${image.data[0].url}>`
    
}


