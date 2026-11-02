const translatedMessage = document.getElementById("Translated");
function translation(fromLang, toLang, inputText){
    if(fromLang == "" || toLang == "" || inputText == ""){
        window.alert("Please make sure two languages are selected and what you want translated is in the form");
        return
    }
    translatedMessage.value = "Please wait, translating...";
    let req = "Return ONLY the translation of " + inputText + " from " + fromLang + " to " + toLang + " on one line.";
        fetch("https://text.pollinations.ai/",{
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
            messages: [{ role: "user", content: req}],
            model: "openai"})
            })
        .then(response => {
            if (response.status === 402){
            return;
            }
            return response.text();
        })
        .then(data => {
            if (!data){
            translatedMessage.value = "Please allow one translation every thirty seconds for this prototype.";
            return;
            }
            translatedMessage.value = data;
        })
}