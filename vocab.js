var currentWord; //holds the current word
var answered = false; //true when user has answered and is viewing the result, false otherwise

//runs when website is loaded
$(document).ready(function(){
    randomKanaNominal();
    $("#inp").on("submit", function(e) {
        e.preventDefault();
        if(answered){
            randomKanaNominal();
            document.getElementById("continue-button").innerHTML = "Submit";
            answered = false;
        }
        else {
            confirmAnswer();
            document.getElementById("continue-button").innerHTML = "Next Word";
            answered = true;
        }
    });
});

//process answer submission
function confirmAnswer(){
    var answer = document.getElementById("inpbox").value.toLowerCase();
    if(answer != ""){
        if (correct(answer)){
            document.getElementById("result").innerHTML = "はい";
        }
        else {
            document.getElementById("result").innerHTML = "いいえ";
        }
    }
}

//determine if the user input matches the expected answer
function correct(answer){
    if(document.getElementById("english-option-a").checked){
        document.getElementById("correct-answers").innerHTML = capitalize(currentWord.english[0]);
        return currentWord.english.includes(answer);
    }
    else{
        var message = currentWord.romazi + ", " + currentWord.kana + (currentWord.kana == currentWord.kanzi ? "" : ", " + currentWord.kanzi);
        document.getElementById("correct-answers").innerHTML = message;
        return answer == currentWord.romazi || answer == currentWord.kana || answer == currentWord.kanzi;
    }
}

function randomKanaNominal(){
    //reset the app
    document.getElementById("inpbox").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("correct-answers").innerHTML = "";

    $.getJSON("words/nominals.json", function(nominals){
        var num = Math.floor(Math.random() * nominals.length);
        currentWord = nominals[num]; //change num to manually select word
        if(document.getElementById("english-option-q").checked){
            document.getElementById("word").innerHTML = capitalize(currentWord.english[0]);
        }
        else if(document.getElementById("romazi-option-q").checked){
            document.getElementById("word").innerHTML = currentWord.romazi;
        }
        else if(document.getElementById("kana-option-q").checked){
            document.getElementById("word").innerHTML = currentWord.kana;
        }
        else{
            document.getElementById("word").innerHTML = currentWord.kanzi;
        }
    });
}

//capitalizes first letter of str
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}