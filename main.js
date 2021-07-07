var currentWord;

$(document).ready(function(){
    randomKanaNominal();
    $("#inp").on("submit", function(e) {
        e.preventDefault();
        confirmAnswer();
    });
});

function confirmAnswer(){
    var answer = document.getElementById("inpbox").value;
    if (answer != ""){
        if (answer.toLowerCase() == currentWord.english){
            document.getElementById("result").innerHTML = "はい";
        }
        else {
            document.getElementById("result").innerHTML = "いいえ";
        }
        setTimeout(function(){
            randomKanaNominal();
        },1000);
    }
}

function randomKanaNominal(){
    document.getElementById("inpbox").value = "";
    document.getElementById("result").innerHTML = "";
    useJSONFromFile("nominals.json", function(nominals){
        var num = Math.floor(Math.random() * nominals.length);
        currentWord = nominals[num];
        document.getElementById("word").innerHTML = currentWord.kana;
    });
}

function useJSONFromFile(filename, callback){
    $(document).ready(function(){
        $.getJSON(filename, function(data){
            callback(data);
        })
    })
}