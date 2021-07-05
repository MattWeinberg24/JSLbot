$.ready($.getJSON("nominals.json", function(data){
    document.write(data[0].kana)
}))