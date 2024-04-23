
const textArea = document.querySelector("textArea");
const button = document.querySelector("button")
let isSpeaking = true;

const textToSpeech = ()=>{
    const  synth = window.speechSynthesis;
    const text =  textArea.value;



    if(!synth.speaking && text){
        const utterance = new SpeechSynthesisUtterance(text)
        synth.speak(utterance);
}



    if(text.length > 50){
        if(synth.speaking && isSpeaking){
            button.innerText = 'pause';
            synth.resume();
            isSpeaking = false;

        }else{
            button.innerText = 'Resume';
            synth.pause();
            isSpeaking = true;
        }
       
        
    }else{
        isSpeaking = false;
        button.innerText = 'speaking'
    }
    setInterval(()=>{
        if(!synth.speaking && !isSpeaking){
            isSpeaking = true;
            button.innerText = 'convert to speech'

        }
    })

};
button.addEventListener('click',textToSpeech)



