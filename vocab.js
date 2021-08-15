var words; //holds all the current eligible words to be quizzed
var currentWord; //holds the current word
var currentWordIndex; //holds the current word index (of the words list)
var answered = false; //true when user has answered and is viewing the result, false otherwise
var unusedWordIndices = []; //holds all indices of the words list that have not been answered correctly yet
var defaultUnusedWordIndices = []; //holds the initial state of unusedWordIndices to simplify resetting

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
        var tr = tableRow($("#vocab-list").get(0), currentWord.english[0])
        
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
    var message = "";
    if($("#english-option-a").is(":checked")){
        
        currentWord.english.forEach(word => message += word + ", ");
        message = message.substring(0, message.length - 2); //remove last ", "
        $("#correct-answers").html(message);
        return currentWord.english.includes(answer);
    }
    else{
        currentWord.romazi.concat(currentWord.kana).forEach(word => message += word + ", ");
        if (Kuroshiro.Util.hasKanji(currentWord.japanese[0])){ //only display the kanzi if they are unique from the kana entries
            currentWord.japanese.forEach(word => message += word + ", ");
        }
        message = message.substring(0, message.length - 2); //remove last ", "
        $("#correct-answers").html(message);
        return currentWord.romazi.includes(answer) || currentWord.kana.includes(answer) || currentWord.japanese.includes(answer);
    }
}

/**
 * Resets the app and selects a random word.
 * Places it in the currentWord global variables.
 * Determines which format of the word to display based on user settings.
 */
function randomWord(){
    //reset the display
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
        $("#word").html(currentWord.english[0]);
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
    words = nominals.concat(verbals, adjectivals, modifiers, greetings);

    var promiseArray = [];

    words.forEach(function(word){
        defaultUnusedWordIndices.push(i++); //add index to unusedWordIndices
        var row = table.insertRow();

        var cell1 = row.insertCell();
        cell1.innerHTML = word.english[0];

        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        if (word.hasOwnProperty("kana")){ //if kana is overridden in words.js
            word.romazi = [];
            word.kana.forEach((k,i) => {
                word.romazi.push(nipponToJSL(Kuroshiro.Util.kanaToRomaji(k,"nippon")));
                cell2.innerHTML += i > 0 ? "<br>" + word.romazi[i] : word.romazi[i];
                cell3.innerHTML += i > 0 ? "<br>" + word.kana[i] : word.kana[i];
            })  
        }
        else {
            word.kana = [];
            word.romazi = [];
            word.japanese.forEach((j,i) => {
                promiseArray.push(kuroshiro.convert(j, {to: "hiragana"}).then(k => {
                    word.romazi.push(nipponToJSL(Kuroshiro.Util.kanaToRomaji(k,"nippon")));
                    word.kana.push(k);
                    cell2.innerHTML += i > 0 ? "<br>" + word.romazi[i] : word.romazi[i];
                    cell3.innerHTML += i > 0 ? "<br>" + word.kana[i] : word.kana[i];
                }));
            })
        }
        if (Kuroshiro.Util.hasKanji(word.japanese[0])){
            var cell4 = row.insertCell();
            cell4.innerHTML = word.japanese[0];
        }
        else {
            cell3.colSpan = 2;
        }
        
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
 * Sorts the vocab table specifically
 * (Adapted from dcode's YouTube tutorial on sorting general HTML tables)
 * 
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc True if the sorting will be ascending
 */
function sortTable(table, column, asc = true){
    var tBody = table.tBodies[0];
    var header = table.tHead.rows[0].cells;
    var dirModifier = asc ? 1 : -1;
    var rows = Array.from(tBody.rows);
    var sortedRows = rows.sort(function(a,b){
        var aColText, bColText;
        if (column == 4){ //if sorting by lesson
            if (a.cells.length == 4) { //if kana and kanzi merged
                aColText = a.cells[column - 1].innerHTML;
            }
            else {
                aColText = a.cells[column].innerHTML;
            }
            
            if (b.cells.length == 4) { //if kana and kanzi merged
                bColText = b.cells[column - 1].innerHTML;
            }
            else {
                bColText = b.cells[column].innerHTML;
            }

            var aSplit = aColText.split(/(\d+)/); //splits between letters and numbers
            var bSplit = bColText.split(/(\d+)/);
            if (aSplit[1] == bSplit[1]){ //if both rows have the same number lesson, sort by letter
                return aSplit[2] > bSplit[2] ? (1*dirModifier) : (-1*dirModifier);
            }
            else { //otherwise sort by number
                return Number(aSplit[1]) > Number(bSplit[1]) ? (1*dirModifier) : (-1*dirModifier);
            }
        }
        else if (column == 3) {
            if (Kuroshiro.Util.hasJapanese(a.cells[column].innerHTML)) { //if kana and kanzi did not merge
                aColText = a.cells[column].innerHTML;
            }
            else {
                aColText = a.cells[column - 1].innerHTML;
            }
            
            if (Kuroshiro.Util.hasJapanese(b.cells[column].innerHTML)) { //if kana and kanzi did not merge
                bColText = b.cells[column].innerHTML;
            }
            else {
                bColText = b.cells[column - 1].innerHTML;
            }
        }
        else {
            aColText = a.cells[column].innerHTML;
            bColText = b.cells[column].innerHTML;
        }
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
 * Returns the row that contains the given english in the table
 * @param {HTMLTableElement} table The table to search
 * @param {string} english The english to search for
 * @returns {HTMLTableRowElement} The row of the table containing the english
 */
function tableRow(table, english){
    var result;
    Array.from(table.rows).every(row => {
        if (row.cells[0].innerHTML.includes(english)){
            result = row;
            return false;
        }
        return true;
    });
    return result;
}