var currentWord;

$(document).ready(function(){
    randomKanaNominal();
});

function confirmAnswer(){
    var answer = document.getElementById("inp").value;
    if (answer != ""){
        if (answer == currentWord.english){
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
    document.getElementById("inp").value = "";
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