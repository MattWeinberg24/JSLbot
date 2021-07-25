var currentWord; //holds the current word
var currentWordIndex; //holds the current word index
var answered = false; //true when user has answered and is viewing the result, false otherwise

//runs when website is loaded
$(document).ready(() => {
    randomWord();
    renderTable();
    $("th").each((i, th) => {
        th.addEventListener("click", () => {
            var table = th.parentElement.parentElement.parentElement;
            var isAscending = th.classList.contains("th-sort-asc");
            sortTable(table, i, !isAscending);
        });
    });
    $("input[name='qlang']").change(function(){
        randomWord();
    });
    $("#inp").submit(e => {
        e.preventDefault();
        if(answered){
            randomWord();
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

/**
 * Process answer submission, make visual changes based on result
 */
function confirmAnswer(){
    var answer = document.getElementById("inpbox").value.toLowerCase();
    if(answer != ""){
        //locate current table row
        var tableRow;
        Array.from(document.getElementById("vocab-list").rows).every(row => {
            if (row.cells[0].innerHTML == currentWord.kanzi){
                tableRow = row;
                return false;
            }
            return true;
        });
        if (correct(answer)){
            document.getElementById("result").innerHTML = "はい";
            tableRow.style.backgroundColor = "green";
        }
        else {
            document.getElementById("result").innerHTML = "いいえ";
            tableRow.style.backgroundColor = "red";
        }
    }
}

/**
 * determine if the user input matches the expected answer
 * @param {string} answer The user's answer
 * @returns {boolean} true if correct, false if incorrect
 */
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

/**
 * Resets the app and selects a random word.
 * Places it in the currentWord and currentWordIndex global variables.
 * Determines which format of the word to display based on user settings.
 */
function randomWord(){
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

/**
 * Fills the vocab list table with word data from json files
 */
function renderTable(){
    var table = document.getElementById("vocab-list").querySelector("tbody");
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

/**
 * Sorts an HTML table
 * (Adapted from dcode's YouTube tutorial)
 * 
 * @param {HTMLTableElement} table The Table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc True if the sorting will be ascending
 */
function sortTable(table, column, asc = true){
    var tBody = table.tBodies[0];
    var header = table.tHead.rows[0].cells;
    var dirModifier = asc ? 1 : -1;
    var rows = Array.from(tBody.rows);
    var sortedRows = rows.sort(function(a,b){
        var aColText = a.cells[column].innerHTML;
        var bColText = b.cells[column].innerHTML;
        return aColText > bColText ? (1*dirModifier) : (-1*dirModifier);
    });
    while(tBody.firstChild){
        tBody.removeChild(tBody.firstChild);
    }
    tBody.append(...sortedRows);
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    header[column].classList.toggle("th-sort-asc",asc);
    header[column].classList.toggle("th-sort-desc",!asc);
}
    

/**
 * Returns str with the first letter capitalized
 * @param {string} str The string to process
 * @returns {string} str with the first letter capitalized
 */
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}