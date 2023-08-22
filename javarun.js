const API_KEY = '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';

const SubmitIcon= document.querySelector("#submitIcon")


const getImages = async () => { 
    const options = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            'prompt': inputElement.value,
            'n':2,
            'size':"1024x1024"
        })
    }
    try{
        fetch('https://api.openai.com/v1/images/generations', options)
        
    } catch(error) {
    
    console.error(error)
        
    }





submiticon.addEventListener('click', getImages)
