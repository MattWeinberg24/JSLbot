var currentWord; //holds the current word
var currentWordIndex; //holds the current word index
var answered = false; //true when user has answered and is viewing the result, false otherwise

//runs when website is loaded
$(document).ready(function(){
    randomKanaNominal();
    renderTable();
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
            document.getElementById("vocab-list").rows[currentWordIndex + 1].style.backgroundColor = "green";
        }
        else {
            document.getElementById("result").innerHTML = "いいえ";
            document.getElementById("vocab-list").rows[currentWordIndex + 1].style.backgroundColor = "red";
        }
    }
}

//determine if the user input matches the expected answer
function correct(answer){
    if(document.getElementById("english-option-a").checked){
        document.getElementById("correct-answers").innerHTML = capitalize(currentWord.english[0]);
        return currentWord.english.includes(answer);
    }
    else{                                                                   //eventually may need updating
        var message = currentWord.romazi + ", " + currentWord.kana + (currentWord.kana.includes(currentWord.kanzi[0]) ? "" : ", " + currentWord.kanzi);
        document.getElementById("correct-answers").innerHTML = message;
        return answer == currentWord.romazi || answer == currentWord.kana || answer == currentWord.kanzi;
    }
}

function randomKanaNominal(){
    //reset the app
    document.getElementById("inpbox").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("correct-answers").innerHTML = "";

    $.getJSON("words.json", function(words){
        currentWordIndex = Math.floor(Math.random() * words.nominals.length);
        currentWord = words.nominals[currentWordIndex]; //change num to manually select word
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

function renderTable(){
    var table = document.getElementById("vocab-list");
    $.getJSON("words.json", function(words){
        words.nominals.forEach(function(nominal){
            var row = table.insertRow();
            var cell1 = row.insertCell();
            cell1.innerHTML = nominal.kanzi[0];
            var cell2 = row.insertCell();
            cell2.innerHTML = nominal.kana[0];
            var cell3 = row.insertCell();
            cell3.innerHTML = nominal.romazi[0];
            var cell4 = row.insertCell();
            cell4.innerHTML = capitalize(nominal.english[0]);
            var cell5 = row.insertCell();
            //cell5.innerHTML = nominal.lesson;
        });
    });
    
}

//capitalizes first letter of str
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}