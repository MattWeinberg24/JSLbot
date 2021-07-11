var currentWord; //holds the current word
var expected; //holds the expected answer (for when user is incorrect)

//runs when website is loaded
$(document).ready(function(){
    randomKanaNominal();
    $("#inp").on("submit", function(e) {
        e.preventDefault();
        confirmAnswer();
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
            var message = "いいえ<br>Correct Answer: " + expected;
            document.getElementById("result").innerHTML = message;

        }
        setTimeout(function(){
            randomKanaNominal();
        },2000);
    }
}

//determine if the user input matches the expected answer
function correct(answer){
    if(document.getElementById("english-option-a").checked){
        expected = capitalize(currentWord.english[0]);
        return currentWord.english.includes(answer);
    }
    else if(document.getElementById("romazi-option-a").checked){
        expected = currentWord.romazi;
        return answer == expected;   
    }
    else if(document.getElementById("kana-option-a").checked){
        expected = currentWord.kana;
        return answer == expected;
    }
    else{
        expected = currentWord.kanzi;
        return answer == expected;
    }
}

function randomKanaNominal(){
    //reset the app
    document.getElementById("inpbox").value = "";
    document.getElementById("result").innerHTML = "";

    $.getJSON("nominals.json", function(nominals){
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