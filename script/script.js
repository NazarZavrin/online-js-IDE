"use strict";

let codeScreen = document.querySelector(".code-screen");
let transparentInput = document.querySelector(".transparent-input");

let keyWordsArray = ["let", "const"]
let keyWordsRegexp = new RegExp("[>\\W]" + keyWordsArray.join("(?:&nbsp;| )|[>\\W]") + "(?:&nbsp;| )", "g");
// &nbsp; - код HTML для отображения пробела
console.log(keyWordsRegexp);
// console.log("jj let a const b".match(keyWordsRegexp));


transparentInput.addEventListener("input", event => {
    
    let keyWords = transparentInput.innerHTML.match(keyWordsRegexp);
    console.log("transparentInput.innerHTML\n"+transparentInput.innerHTML);
    console.log("keyWords\n"+keyWords);
    

    let code = "";
    let text = transparentInput.innerHTML.split(keyWordsRegexp);
    if (keyWords) {
        keyWords.forEach((keyWord, index) => {
            // console.log(text[index], keyWord);
            code += `<span class='text'>${text[index]}</span><span class='keyword'>${keyWord}</span>`;
        })
        code += text.pop();
        console.log("=====");
    } else {
        code = transparentInput.innerHTML;
    }
    // code

    codeScreen.innerHTML = code;
})

// function replaceAll(string, substr, replacement){
//     string.match(new Regexp(substr, "g"))
// }

/*
codeScreen.addEventListener("keyup", event => {
    console.log(codeScreen.innerHTML);
    let words = codeScreen.textContent.split(/\s/);
    let html = "";
    words.forEach(word => {
        if (word in keyWords) {
            html += `<div class="keyword">${word}</div> `;
        } else {
            html += word + " ";
        }
    })
    codeScreen.textContent = "";
    codeScreen.insertAdjacentHTML("beforeend", html);
})*/