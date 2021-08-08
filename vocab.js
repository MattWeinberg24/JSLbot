var words;
var currentWord; //holds the current word
var currentWordIndex = {i: 0, wordtype: ""};
var answered = false; //true when user has answered and is viewing the result, false otherwise
var unusedWordIndices = [];
var defaultUnusedWordIndices = [];

//runs when website is loaded
$(document).ready(() => {
    $("#app").hide();
    var t1 = new Date(); //time of Kuroshiro initialization start
    initializeKuroshiro().then(() => {
        var t2 = new Date(); //time of Kuroshiro initialization end
        console.log("Kuroshiro Initialized in " + ((t2 - t1) / 1000) + " seconds");
        prepareApp().then(() => {
            randomWord();
            console.log("App Prepared in " + ((new Date() - t2) / 1000) + " seconds");
            $("h1").hide();
            $("#app").show();
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
            if (confirmAnswer()) {
                document.getElementById("continue-button").innerHTML = "Next Word";
                answered = true;
            }
        }
    });
});

/**
 * Process answer submission, make visual changes based on result
 * @returns {boolean} true if user entered anything, false if the input is empty
 */
function confirmAnswer(){
    var answer = $("#inpbox").val().toLowerCase().trim();
    if(answer != ""){
        //locate current table row
        var tr = tableRow($("#vocab-list").get(0), currentWord.japanese[0])
        
        if (correct(answer)){
            $("#result").html("はい");
            tr.style.backgroundColor = "green";    
            var i = unusedWordIndices.indexOf(currentWordIndex);
            unusedWordIndices.splice(i,1);
        }
        else {
            $("#result").html("いいえ");
            tr.style.backgroundColor = "red";
        }
        return true;
    }
    else {
        return false;
    }
}

/**
 * determine if the user input matches the expected answer
 * @param {string} answer The user's answer
 * @returns {boolean} true if correct, false if incorrect
 */
function correct(answer){
    if($("#english-option-a").is(":checked")){
        $("#correct-answers").html(capitalize(currentWord.english[0]));
        return currentWord.english.includes(answer);
    }
    else{
                                                                           //eventually may need updating
        var message = currentWord.romazi + ", " + currentWord.kana; //+ (currentWord.kana.includes(currentWord.kanzi[0]) ? "" : ", " + currentWord.kanzi);
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
    
    var n = Math.floor(Math.random() * unusedWordIndices.length);
    currentWordIndex = unusedWordIndices[n];

    if (currentWordIndex == undefined){
        resetApp();
        var n = Math.floor(Math.random() * unusedWordIndices.length)
        currentWordIndex = unusedWordIndices[n];
    }

    currentWord = words[currentWordIndex];
    
    if(document.getElementById("english-option-q").checked){
        $("#word").html(capitalize(currentWord.english[0]));
    }
    else if(document.getElementById("romazi-option-q").checked){
        $("#word").html(currentWord.romazi);
    }
    else if(document.getElementById("kana-option-q").checked){
        $("#word").html(currentWord.kana);
    }
    else{
        $("#word").html(currentWord.japanese[0]);
    }
    
    
}


/**
 * Translates each word into kana and romazi using Kuroshiro
 * Fills the vocab list table
 * Fills up unusedWordIndices
 * @returns {Promise} All of Kuroshiro's convert() promises
 */
function prepareApp(){
    var table = document.getElementById("vocab-list").querySelector("tbody");
    var i = 0;
    words = nominals.concat(verbals, adjectivals, modifiers);

    var promiseArray = [];

    words.forEach(function(word){
        defaultUnusedWordIndices.push(i++); //add index to unusedWordIndices
        var row = table.insertRow();

        var cell1 = row.insertCell();
        cell1.innerHTML = word.english[0];

        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        if (word.hasOwnProperty("kana")){ //if kana is overridden in words.js
            word.romazi = Kuroshiro.Util.kanaToRomaji(word.kana,"nippon");
            cell2.innerHTML = word.romazi;
            cell3.innerHTML = word.kana;
        }
        else {
            promiseArray.push(kuroshiro.convert(word.japanese[0], {to: "romaji", romajiSystem: "nippon"}).then(result => {
                cell2.innerHTML = nipponToJSL(result);
                word.romazi = nipponToJSL(result);
            }));
            promiseArray.push(kuroshiro.convert(word.japanese[0], {to: "hiragana"}).then(result => {
                cell3.innerHTML = result;
                word.kana = result;
            }));
        }

        var cell4 = row.insertCell();
        cell4.innerHTML = capitalize(word.japanese[0]);
        
        var cell5 = row.insertCell();
        cell5.innerHTML = word.lesson;
    });

    unusedWordIndices = $.extend(true, [], defaultUnusedWordIndices);

    $("th").each((i, th) => {
        $(th).click(() => {
            var isAscending = th.classList.contains("th-sort-asc");
            sortTable($("#vocab-list").get(0), i, !isAscending);
        });
    });

    return Promise.all(promiseArray);
}

/**
 * Resets the table and unusedWordIndices
 */
function resetApp(){
    $("tr").css("background-color", "");
    unusedWordIndices = $.extend(true, [], defaultUnusedWordIndices);
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
        if (column == 4){ //if sorting by lesson
            var aSplit = aColText.split(/(\d+)/); //splits between letters and numbers
            var bSplit = bColText.split(/(\d+)/);
            console.log(aSplit);
            if (aSplit[1] == bSplit[1]){
                return aSplit[2] > bSplit[2] ? (1*dirModifier) : (-1*dirModifier);
            }
            else {
                return Number(aSplit[1]) > Number(bSplit[1]) ? (1*dirModifier) : (-1*dirModifier);
            }
        }
        else {
            return aColText > bColText ? (1*dirModifier) : (-1*dirModifier);
        }
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
        if (row.cells[3].innerHTML == kanzi){
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