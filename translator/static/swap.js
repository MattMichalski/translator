function swap(textBox, textBoxTranslated){
    let inputLang = document.getElementById("inputLanguage");
    let outputLang = document.getElementById("outputLanguage");
    let div = document.getElementById("pickLang");
    let temp;

    temp = inputLang.value;
    inputLang.value = outputLang.value;
    outputLang.value = temp;

    let textTemp;
    textTemp = textBox.value;
    textBox.value = textBoxTranslated.value;
    textBoxTranslated.value = textTemp;

    return;



}