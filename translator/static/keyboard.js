document.getElementById("textToBeTranslated").addEventListener("keydown", keyAnalysis);
document.getElementById("textToBeTranslated").addEventListener("keyup", keyAnalysisUp);

function keyAnalysis(){
    if (document.getElementById(event.key.toLowerCase()) === null){
        return;
    }
    document.getElementById(event.key.toLowerCase()).style.backgroundColor = "black";
    document.getElementById(event.key.toLowerCase()).style.color = "white";
}

function keyAnalysisUp(){
    if (document.getElementById(event.key.toLowerCase()) === null){
        return;
    }
    document.getElementById(event.key.toLowerCase()).style.backgroundColor = "white";
    document.getElementById(event.key.toLowerCase()).style.color = "black";
}