function useJSONFromFile(filename, callback){
    $(document).ready(function(){
        $.getJSON(filename, function(data){
            callback(data);
        })
    })
}

function randomEnglishNominal(){
    useJSONFromFile("nominals.json", function(nominals){
        var num = Math.floor(Math.random() * nominals.length);
        document.getElementById("word").innerHTML = nominals[num].english;
    });
}
