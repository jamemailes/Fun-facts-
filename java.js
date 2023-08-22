const API_KEY = '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';



const submiticon = document.querySelector('#submitIcon');
const inputElement= document.querySelector('input');
const imageSection = document.querySelector('.imageoffset');

const getImages = async () => { 
alert("onclick")
    const options = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            'prompt': inputElement.value,
            'n':4,
            'size':"1024x1024"
        })
    }
    try 
    {
       const response = await fetch('https://api.openai.com/v1/images/generations', options)
         const data = await response.json()
       console(data)
            data?.data.forEach((imageObject) => 
            {
                const ImageContainer = document.createElement('div')
               ImageContainer.classList.add('image-container')

const imageElement = document.createElement('img')
imageElement.setAttribute('src', imageObject.url)
                ImageContainer.append(imageElement)
                imageSection.append(ImageContainer)
            })
    }
    catch (error) alert("Hey")
    {
        console.log(error)
    }
}
submiticon.addEventListener('click',getImages)
