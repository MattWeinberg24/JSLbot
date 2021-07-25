/**
 * @param {object} verbal A verbal (in the format from words.json) 
 * @returns {string} The stem of the verbal
 */
function stem(verbal){
    if(verbal.ru){
        return verbal.romazi.substring(0, verbal.romazi.length - 2);
    }
    else{
        return verbal.romazi.substring(0, verbal.romazi.length - 1) + "i";
    }
}