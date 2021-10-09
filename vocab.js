var words; //holds all the words
var currentWord; //holds the current word
var currentWordIndex; //holds the current word index (of the words list)
var answered = false; //true when user has answered and is viewing the result, false otherwise
var unusedWordIndices = []; //holds all indices of the words list that have not been answered correctly yet

//runs when website is loaded
$(document).ready(() => {
    $("#app").hide();
    var t1 = new Date(); //time of Kuroshiro initialization start
    initializeKuroshiro().then(() => {
        var t2 = new Date(); //time of Kuroshiro initialization end
        console.log("Kuroshiro Initialized in " + ((t2 - t1) / 1000) + " seconds");
        prepareApp().then(() => {
            filterLesson("1A","14B");
            $("#jwl").val("13B");
            randomWord();
            console.log("App Prepared in " + ((new Date() - t2) / 1000) + " seconds");
            $("h1").hide();
            $("#app").show();
        }); 
    });

    //event handlers
    $("input[name='qlang']").change(randomWord);
    $("#jsl-start,#jsl-end").change(resetApp);
    $("#inp").submit(e => {
        e.preventDefault();
        if(answered){
            randomWord();
            $("#continue-button").html("Submit");
            answered = false;
        }
        else {
            if (confirmAnswer()) {
                $("#continue-button").html("Next Word");
                answered = true;
            }
        }
    });
    $("th").each((i, th) => {
        $(th).click(() => {
            var isAscending = th.classList.contains("th-sort-asc");
            sortTable($("#vocab-list").get(0), i, !isAscending);
        });
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

        var possibleAnswers = currentWord.romazi.concat(currentWord.kana, currentWord.japanese);
        possibleAnswers.forEach((w,i) => {
            if (w.includes("↓") || w.includes("↑")){
                possibleAnswers[i] = w.substring(0, w.length - 1);
            }
        })
        return possibleAnswers.includes(answer);
    }
}

/**
 * Resets the display and selects a random word.
 * Places it in the currentWord global variables.
 * Determines which format of the word to display based on user settings.
 */
function randomWord(){
    //reset the display
    $("#inpbox").val("");
    $("#result").html("<br>");
   $("#correct-answers").html("<br>");
    
    var n = Math.floor(Math.random() * unusedWordIndices.length);
    currentWordIndex = unusedWordIndices[n];

    if (currentWordIndex == undefined){
        resetApp();
        var n = Math.floor(Math.random() * unusedWordIndices.length)
        currentWordIndex = unusedWordIndices[n];
    }

    currentWord = words[currentWordIndex];
    
    if($("#english-option-q").is(":checked")){
        $("#word").html(currentWord.english.join(", "));
    }
    else if($("#romazi-option-q").is(":checked")){
        $("#word").html(currentWord.romazi.join(", "));
    }
    else if($("#kana-option-q").is(":checked")){
        $("#word").html(currentWord.kana.join(", "));
    }
    else {
        var lesson = $("#jwl").val();
        var wordLesson = maxLesson(currentWord.japanese.join(""));
        if (compareLesson(wordLesson, lesson)) {
            $("#word").html(currentWord.kana.join(", "));
        }
        else {
            $("#word").html(currentWord.japanese.join(", "));
        }
        
    }
    
    
}


/**
 * Translates each word into kana and romazi using Kuroshiro
 * @returns {Promise} All of Kuroshiro's convert() promises
 */
function prepareApp(){
    //var table = document.getElementById("vocab-list").querySelector("tbody");
    words = nominals.concat(na_nominals, verbals, suru_verbals, adjectivals, modifiers, greetings);

    var promiseArray = [];

    words.forEach(word => {
        //default; //add index to unusedWordIndices
        if (word.hasOwnProperty("kana")){ //if kana is overridden in words.js
            word.romazi = [];
            word.kana.forEach(k => {
                word.romazi.push(nipponToJSL(Kuroshiro.Util.kanaToRomaji(k,"nippon")));
            });
        }
        else {
            word.kana = [];
            word.romazi = [];
            word.japanese.forEach((j,i) => {
                promiseArray.push(kuroshiro.convert(j, {to: "hiragana"}).then(k => {
                    word.romazi.push(nipponToJSL(Kuroshiro.Util.kanaToRomaji(k,"nippon")));
                    word.kana.push(k);
                }));
            })
        }
    });
    
    return Promise.all(promiseArray);
}

/**
 * Filters the list of words based on the lesson range, adds rows to the table accordingly.
 * Sets up lesson dropdown menus so that start cannot end up being set to a value greater than end
 * @param {string} start The lowest lesson to include in the filter
 * @param {string} end The highest lesson to include in the filter
 */
function filterLesson(start, end) {
    var table = $("#vocab-list tbody").get(0);
    words.forEach((word,i) => {
        if (!compareLesson(start, word.lesson) && !(compareLesson(word.lesson, end))){ //if start <= lesson <= end
            unusedWordIndices.push(i);
            fillRow(table.insertRow(), word);
        }
    });

    var l = "1A"
    var result = "";
    var s = $("#jsl-start");
    var e = $("#jsl-end");

    //fill the first dropdown with lessons up to end
    while (l != end) {
        result += "<option value=\"" + l + "\">" + l + "</option>";
        l = incrementLesson(l);
    }
    result += "<option value=\"" + l + "\">" + l + "</option>";
    s.html(result);

    //fill the second dropdown with lessons from start to max lesson
    result = "";
    l = start;
    while (l != "15A") {
        result += "<option value=\"" + l + "\">" + l + "</option>";
        l = incrementLesson(l);
    }
    e.html(result);

    s.val(start);
    e.val(end);
}

/**
 * Resets the table and unusedWordIndices
 */
 function resetApp(){
    $("tr").css("background-color", "");
    unusedWordIndices = [];

    var table = $("#vocab-list tbody").get(0);
    $("th").removeClass("th-sort-asc", "th-sort-desc");
    while(table.firstChild){
        table.removeChild(table.firstChild);
    }

    filterLesson($("#jsl-start").val(),$("#jsl-end").val());
    randomWord();
}

/**
 * Fills each row of the vocab table with cells of info
 * @param {HTMLTableRowElement} row the row to add
 * @param {object} word the word object to use for the data (from words.js)
 */
function fillRow(row, word){
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();

    cell1.innerHTML = word.english.join(", ");
    
    cell2.innerHTML = word.romazi.join("<br>");

    cell3.innerHTML = word.kana.join("<br>");

    var empty = true;
    word.japanese.forEach((w,i) => {
        if (i > 0) {
            cell4.innerHTML += "<br>";
        }
        if (Kuroshiro.Util.hasKanji(w)) {
            cell4.innerHTML += w;
            empty = false;
        }
        else {
            cell4.innerHTML += "-";
        }
    });
    if (empty) {
        row.deleteCell(3);
        cell3.colSpan = 2;
    }

    cell5.innerHTML = word.lesson;
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

            return compareLesson(aColText,bColText) ? (1*dirModifier) : (-1*dirModifier);
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
        return aColText.toLowerCase() > bColText.toLowerCase() ? (1*dirModifier) : (-1*dirModifier);
        
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