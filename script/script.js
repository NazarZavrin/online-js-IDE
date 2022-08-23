"use strict";

let codeScreen = document.querySelector(".code-screen");
let transparentInput = document.querySelector(".transparent-input");

let keyWordsArray = ["let", "const", "function", "class", "new"];
let keyWordsRegexp = new RegExp("(?<=\\W)" + keyWordsArray.join("(?=&nbsp;| )|(?<=\\W)") + "(?=&nbsp;| )", "gu");
// &nbsp; - код HTML для отображения пробела
console.log(keyWordsRegexp);

// console.log("<>".match(/\W/g));
// console.log("jj let a const b".match(keyWordsRegexp));
// console.log("12hy".indexOf("h"));

transparentInput.addEventListener("input", event => {

    
    
    // console.log("transparentInput.innerHTML\n"+transparentInput.innerHTML);
    
    let code = transparentInput.innerHTML;
    let i = code.indexOf("<div>");
    // console.log(i);
    if (i < 0) {
        code = "<div>" + code + "</div>";
    } else if (i > 0){
        code = "<div>" + code.substring(0, i) + "</div>" + code.slice(i);
    }
    // console.log(code);
    // code = "";
    // console.log("code\n"+code);
    let keyWords = code.match(keyWordsRegexp);
    console.log("keyWords\n",keyWords);
    let text = code.split(keyWordsRegexp);
    console.log("text\n",text);
    
    if (keyWords) {
        code = "";
        keyWords.forEach((keyWord, index) => {
            // console.log("text\n" + text[index] + "\nkeyWord\n" + keyWord);

            code += `${text[index]}<div class='keyword'>${keyWord}</div>`;
        })
        code += text.pop();
        // console.log("=====");
    } // else {
    //     code = transparentInput.innerHTML;
    // }
    console.log(code);
    codeScreen.innerHTML = code;
    console.log("=====");
})

