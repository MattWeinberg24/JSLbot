//returns the stem of a verbal in romazi
function stem(verbal){
    if(verbal.ru){
        return verbal.romazi.substring(0, verbal.romazi.length - 2);
    }
    else{
        return verbal.romazi.substring(0, verbal.romazi.length - 1) + "i";
    }
}