var currentWord; //holds the current word
var currentWordIndex;
var answered = false; //true when user has answered and is viewing the result, false otherwise
var unusedWordIndices = {
    nominals: [],
    verbals: []
};

//runs when website is loaded
$(document).ready(() => {
    prepareWords();
    $("th").each((i, th) => {
        $(th).click(() => {
            var isAscending = th.classList.contains("th-sort-asc");
            sortTable($("#vocab-list").get(0), i, !isAscending);
        });
    });
    $("input[name='qlang']").change(() => {
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
    var answer = $("#inpbox").val().toLowerCase();
    if(answer != ""){
        //locate current table row
        var tr = tableRow($("#vocab-list").get(0), currentWord.kanzi)
        
        if (correct(answer)){
            $("#result").html("はい");
            tr.style.backgroundColor = "green";
            switch (currentWordIndex.wordtype) {
                case "nominal": 
                    var i = unusedWordIndices.nominals.indexOf(currentWordIndex.i);
                    unusedWordIndices.nominals.splice(i,1);
                    break;
                case "verbal": 
                    var i = unusedWordIndices.verbals.indexOf(currentWordIndex.i);
                    unusedWordIndices.verbals.splice(i,1);
                    break;
            } 
        }
        else {
            $("#result").html("いいえ");
            tr.style.backgroundColor = "red";
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
 * Places it in the currentWord global variables.
 * Determines which format of the word to display based on user settings.
 */
function randomWord(){
    //reset the app
    document.getElementById("inpbox").value = "";
    document.getElementById("result").innerHTML = "<br>";
    document.getElementById("correct-answers").innerHTML = "<br>";
    
    randomWordIndex();
    
    if (currentWordIndex.i != undefined){
        $.getJSON("words.json", function(words){
            switch (currentWordIndex.wordtype) {
                case "nominal": currentWord = words.nominals[currentWordIndex.i]; break;
                case "verbal": currentWord = words.verbals[currentWordIndex.i]; break;
            } 
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
    // TODO: Implement win screen
}

function randomWordIndex() {
    var nl = unusedWordIndices.nominals.length;
    var vl = unusedWordIndices.verbals.length;
    var n = Math.floor(Math.random() * (nl + vl))
    var result = {};
    if (n < nl) {
        result.i = unusedWordIndices.nominals[n];
        result.wordtype = "nominal"
    }
    else {
        result.i = unusedWordIndices.verbals[n - nl];
        result.wordtype = "verbal"
    }
    currentWordIndex = result;
}

/**
 * Fills the vocab list table with word data from json files.
 * Fills up unusedWordIndices
 */
function prepareWords(){
    var table = document.getElementById("vocab-list").querySelector("tbody");
    var i = 0;

    $.getJSON("words.json", function(words){

        words.nominals.forEach(function(nominal){
            unusedWordIndices.nominals.push(i++); //add index to unusedWordIndices
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

        i = 0;
        words.verbals.forEach(function(verbal){
            unusedWordIndices.verbals.push(i++); //add index to unusedWordIndices
            var row = table.insertRow();
            var cell1 = row.insertCell();
            cell1.innerHTML = verbal.kanzi[0];
            var cell2 = row.insertCell();
            cell2.innerHTML = verbal.kana[0];
            var cell3 = row.insertCell();
            cell3.innerHTML = verbal.romazi[0];
            var cell4 = row.insertCell();
            cell4.innerHTML = capitalize(verbal.english[0]);
            var cell5 = row.insertCell();
            //cell5.innerHTML = nominal.lesson;
        });
        randomWord();

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
 * Returns the row that contains the given kanzi in the table
 * @param {HTMLTableElement} table The table to search
 * @param {string} kanzi The kanzi to search for
 * @returns {HTMLTableRowElement} The row of the table containing the kanzi
 */
function tableRow(table, kanzi){
    var result;
    Array.from(table.rows).every(row => {
        if (row.cells[0].innerHTML == kanzi){
            result = row;
            return false;
        }
        return true;
    });
    return result;
}

/**
 * Returns str with the first letter capitalized
 * @param {string} str The string to process
 * @returns {string} str with the first letter capitalized
 */
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}