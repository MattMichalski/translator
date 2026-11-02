function spoken(text, value){
    
    speechSynthesis.cancel();
    setTimeout(() => {
        let word = text.split('\n')[0];
        const talk = new SpeechSynthesisUtterance(word);
        talk.lang = value;
        talk.rate = 0.4;
        speechSynthesis.speak(talk);
    }, 100);
    

}