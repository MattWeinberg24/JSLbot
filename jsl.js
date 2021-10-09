var kuroshiro;

/**
 * Sets up the Kuroshiro library with the dictionary files. Used for kanji-kana translation
 * @returns {Promise} A Promise containing the initialization of Kuroshiro 
 */
function initializeKuroshiro() {
    kuroshiro = new Kuroshiro();
    return kuroshiro.init(new KuromojiAnalyzer({ dictPath: "dict/" }));
}

/**
 * Converts Nippon romazi to JSL romazi
 * @param {string} nippon Nippon romazi to convert
 * @returns {string} The resulting JSL romazi
 */
function nipponToJSL(nippon) {
    return nippon.replace("î","ii").replace("ô","oo").replace("ê","ee").replace("â","aa").replace("ou","oo").replace("ei","ee"); 
}

/**
 * @param {object} verbal A verbal (in the format from words.js) 
 * @returns {string} The stem of the verbal
 */
function stem(verbal){
    if (verbal.ru) {
        return verbal.romazi.substring(0, verbal.romazi.length - 2);
    }
    else {
        return verbal.romazi.substring(0, verbal.romazi.length - 1) + "i";
    }
}

function root(verbal){
    if (verbal.ru) {
        
    }
}

/**
 * Finds the highest lesson of any kanji within a single word
 * @param {string} word The kanji word to process
 * @returns {string} The maximum lesson of all the kanji in the word (1A if all Kana, 100A if Kanji not in data)
 */
function maxLesson(word){
    var max = "1A";
    for (var c of word){
        if (Kuroshiro.Util.isKanji(c)){ //skip if not kanji
            var l = kanji.get(c);
            if (l == undefined){ //kanji is not learned if not in data
                return "100A"; //simulates a kanji being "too hard"
            }
            else if (compareLesson(l,max)){ //replace max if l > max
                max = l;
            }
        }
    }
    return max;
}

 /**
  * @param {string} a The first lesson string 
  * @param {string} b The second lesson string
  * @returns {boolean} True if a is higher than b, false otherwise
  */
function compareLesson(a,b){
    var aSplit = a.split(/(\d+)/); //splits between letters and numbers
    var bSplit = b.split(/(\d+)/);
    if (aSplit[1] == bSplit[1]){ //if both rows have the same number lesson, sort by letter
        return aSplit[2] > bSplit[2];
    }
    else { //otherwise sort by number
        return Number(aSplit[1]) > Number(bSplit[1]);
    }
}

/**
 * @param {string} l The lesson to increment
 * @returns One lesson above the parameter
 */
function incrementLesson(l){
    var split = l.split(/(\d+)/);
    if (split[2] == "A"){ //if parameter is an A Lesson
        return split[1] + "B"; //replace A with B
    }
    else {
        var num = Number(split[1]) + 1; //add 1 to the lesson number
        return num.toString() + "A";  //replace B with A
    }
}