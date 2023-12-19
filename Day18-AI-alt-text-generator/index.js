/** OpenAI setup **/
import OpenAI from "openai"

const openAIApiKey = process.env.OPENAI_API_KEY
const openai = new OpenAI({
    openAIApiKey,
    dangerouslyAllowBrowser: true
})

/** HuggingFace setup **/
// import { HfInference } from '@huggingface/inference'
// const hf = new HfInference()
// import { blobToBase64 } from '/utils'

const dialogModal = document.getElementById('dialog-modal')
dialogModal.show()

document.addEventListener('submit', function(e) {
    e.preventDefault()
    const imageDescription = document.getElementById('user-input').value
    dialogModal.close()
    const imageContainer = document.getElementById('image-container')
    imageContainer.innerHTML = `<img src="https://i.gifer.com/7plU.gif">`
    generateImage(imageDescription)
})

async function generateImage(imageToGenerate) {
    /** OpenAI **/
    const response = await openai.images.generate({
        model: "dall-e-2",
        prompt: imageToGenerate,
    })
    generateAltText(response.data[0].url)

    /** HuggingFace **/
    // const response = await hf.textToImage({
    //     inputs: imageToGenerate,
    //     model: "stabilityai/stable-diffusion-2",
    // })
    // const imageUrl = await blobToBase64(response)
    // generateAltText(imageUrl)
}

async function generateAltText(imageUrl) {
    const response = await openai.chat.completions.create(
        {
            model: "gpt-4-vision-preview",
            messages: [
            {
                role: "user",
                content: [
                { type: "text", text: "What’s in this image?" },
                {
                    type: "image_url",
                    image_url: {
                    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
                    },
                },
                ],
            },
            ],
            max_tokens:300,
        });
    const altText = response.choices[0].message.content
    renderImage(imageUrl, altText) 
}

function renderImage(imageUrl, altText) {
    console.log(altText)
    const imageContainer = document.getElementById('image-container')
    imageContainer.innerHTML = ''
    const image = document.createElement('img')
    image.src = imageUrl
    image.alt = altText
    imageContainer.appendChild(image)
}