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
    console.log(nippon);
    return nippon.replace("î","ii").replace("ô","oo").replace("ou","oo"); 
}

/**
 * @param {object} verbal A verbal (in the format from words.json) 
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