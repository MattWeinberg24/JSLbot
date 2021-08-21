/* Key
japanese: the kanzi (kanji) form of the word (or just kana if the word is rarely used with kanzi)
kana (override): overrides Kuroshiro translations from kanzi if it gets it wrong
english: the english translation
category (nominals): roughly what connotation the word is used for
lesson: the JSL lesson the word is first introduced in
ru (verbals): true if the verbal is a "ru verbal" (JSL Terminology)
operational (verbals): true if the verbal is operational, false if affective (JSL Terminology)
*/

var nominals = [
    {
        "japanese": ["アイスクリーム"],
        "english": ["icecream","ice cream"],
        "category": "food",
        "lesson": "3A"
    },
    {
        "japanese": ["傘"],
        "english": ["umbrella"],
        "category": "item",
        "lesson": "4A"
    },
    {
        "japanese": ["鞄"],
        "english": ["bag"],
        "category": "item",
        "lesson": "5A"
    },
    {
        "japanese": ["コーヒー"],
        "english": ["coffee"],
        "category": "drink",
        "lesson": "3A"
    },
    {
        "japanese": ["パイ"],
        "english": ["pie"],
        "category": "food",
        "lesson": "3A"
    },
    {
        "japanese": ["ペン"],
        "english": ["pen"],
        "category": "item",
        "lesson": "4B"
    },
    {
        "japanese": ["間"],
        "kana": ["あいだ"],
        "english": ["between", "in between", "interval"],
        "category": "relative location",
        "lesson": "6A"
    },
    {
        "japanese": ["アイデア"],
        "english": ["idea"],
        "category": "thought",
        "lesson": "11A"
    },
    {
        "japanese": ["赤ちゃん"],
        "english": ["baby"],
        "category": "person",
        "lesson": "10A"
    },
    {
        "japanese": ["雨"],
        "english": ["rain"],
        "category": "happening",
        "lesson": "4A"
    },
    {
        "japanese": ["あなた"],
        "english": ["you"],
        "category": "person",
        "lesson": "2B"
    },
    {
        "japanese": ["姉"],
        "english": ["older sister"],
        "category": "person",
        "lesson": "11A"
    },
    {
        "japanese": ["兄"],
        "english": ["older brother"],
        "category": "person",
        "lesson": "11A"
    },
    {
        "japanese": ["これ"],
        "english": ["this one"],
        "category": "happening",
        "lesson": "4A"
    },
    {
        "japanese": ["それ"],
        "english": ["that","it"],
        "category": "item",
        "lesson": "4A"
    },
    {
        "japanese": ["あれ"],
        "english": ["that thing"],
        "category": "item",
        "lesson": "4A"
    },
    {
        "japanese": ["どれ"],
        "english": ["which one"],
        "category": "item",
        "lesson": "4A"
    },
    {
        "japanese": ["アルバイト"],
        "english": ["part-time job","part-time worker"],
        "category": "item",
        "lesson": "10A"
    },
    {
        "japanese": ["朝"],
        "english": ["morning"],
        "category": "time",
        "lesson": "8B"
    },
    {
        "japanese": ["明後日"],
        "kana": ["あさって"],
        "english": ["day after tomorrow"],
        "category": "time",
        "lesson": "3B"
    },
    {
        "japanese": ["明日"],
        "kana": ["あした","あす"],
        "english": ["tomorrow"],
        "category": "time",
        "lesson": "1A"
    },
    {
        "japanese": ["ここ"],
        "english": ["here"],
        "category": "place",
        "lesson": "6B"
    },
    {
        "japanese": ["そこ"],
        "english": ["there"],
        "category": "place",
        "lesson": "6B"
    },
    {
        "japanese": ["あそこ","あすこ"],
        "english": ["there"],
        "category": "place",
        "lesson": "6B"
    },
    {
        "japanese": ["どこ"],
        "english": ["where"],
        "category": "place",
        "lesson": "6B"
    },
    {
        "japanese": ["こちら", "こっち"],
        "english": ["this side", "this way"],
        "category": "place",
        "lesson": "6A"
    },
    {
        "japanese": ["そちら", "そっち"],
        "english": ["that side", "that way"],
        "category": "place",
        "lesson": "6A"
    },
    {
        "japanese": ["あちら", "あっち"],
        "english": ["that side", "that way"],
        "category": "place",
        "lesson": "6A",
    },
    {
        "japanese": ["どちら", "どっち"],
        "english": ["which side", "which way"],
        "category": "place",
        "lesson": "6A"
    },
    {
        "japanese": ["後"],
        "kana": ["あと"],
        "english": ["later", "remaining"],
        "category": "time",
        "lesson": "8A"
    },
    {
        "japanese": ["売店"],
        "english": ["kiosk", "stand"],
        "category": "place",
        "lesson": "6A"
    },
    {
        "japanese": ["晩"],
        "english": ["night"],
        "category": "time",
        "lesson": "8B"
    },
    {
        "japanese": ["番号"],
        "english": ["assigned number"],
        "category": "item",
        "lesson": "12A"
    },
    {
        "japanese": ["バス"],
        "english": ["bus"],
        "category": "vehicle",
        "lesson": "7B"
    },
    {
        "japanese": ["勉強"],
        "english": ["study"],
        "category": "happening",
        "lesson": "9B"
    },
    {
        "japanese": ["ビール"],
        "english": ["beer"],
        "category": "drink",
        "lesson": "5B"
    },
    {
        "japanese": ["便箋"],
        "english": ["stationery"],
        "category": "item",
        "lesson": "4B"
    },
    {
        "japanese": ["ビル"],
        "english": ["building"],
        "category": "item",
        "lesson": "6A"
    },
    {
        "japanese": ["僕"],
        "english": ["I", "me"],
        "category": "person",
        "lesson": "2B"
    },
    {
        "japanese": ["貿易"],
        "english": ["foreign trade"],
        "category": "happening",
        "lesson": "10A"
    },
    {
        "japanese": ["ボールペン"],
        "english": ["ballpoint pen"],
        "category": "item",
        "lesson": "4B"
    },
    {
        "japanese": ["息子","坊ちゃん↑"],
        "english": ["son"],
        "category": "person",
        "lesson": "10A",
    },
    {
        "japanese": ["文房具"],
        "english": ["stationery"],
        "category": "item",
        "lesson": "7A"
    },
    {
        "japanese": ["病院"],
        "english": ["hospital"],
        "category": "place",
        "lesson": "6B"
    },
    {
        "japanese": ["病気"],
        "english": ["illness", "sickness"],
        "category": "happening",
        "lesson": "9B"
    },
    {
        "japanese": ["大学"],
        "english": ["university", "college"],
        "category": "place",
        "lesson": "7A"
    },
    {
        "japanese": ["誰", "何方↑"],
        "english": ["who"],
        "category": "person",
        "lesson": "2B"
    },
    {
        "japanese": ["出口"],
        "kana": ["でぐち"],
        "english": ["exit"],
        "category": "place",
        "lesson": "6A"
    },
    {
        "japanese": ["電車"],
        "english": ["train"],
        "category": "vehicle",
        "lesson": "7B"
    },
    {
        "japanese": ["電話"],
        "english": ["phone call"],
        "category": "happening",
        "lesson": "2A"
    },
    {
        "japanese": ["デパート"],
        "english": ["department store"],
        "category": "place",
        "lesson": "7A"
    },
    {
        "japanese": ["ドイツ"],
        "english": ["Germany"],
        "category": "country",
        "lesson": "5B"
    },
    {
        "japanese": ["どう","いかが↑"],
        "english": ["how"],
        "category": "happening",
        "lesson": "2A"
    },
    {
        "japanese": ["土曜日"],
        "english": ["Saturday"],
        "category": "time",
        "lesson": "8A"
    },
    {
        "japanese": ["映画館"],
        "english": ["movie theater"],
        "category": "place",
        "lesson": "6B"
    },
    {
        "japanese": ["英語"],
        "english": ["english language"],
        "category": "language",
        "lesson": "2A"
    },
    {
        "japanese": ["英和"],
        "english": ["english-japanese"],
        "category": "concept",
        "lesson": "2B"
    },
    {
        "japanese": ["駅"],
        "english": ["train"],
        "category": "place",
        "lesson": "6A"
    },
    {
        "japanese": ["鉛筆"],
        "english": ["pencil"],
        "category": "item",
        "lesson": "4B"
    },
    {
        "japanese": ["外国"],
        "english": ["foreign country"],
        "category": "country",
        "lesson": "11B"
    },
    {
        "japanese": ["学校"],
        "english": ["school"],
        "category": "place",
        "lesson": "7A"
    },
    {
        "japanese": ["学生"],
        "english": ["student"],
        "category": "person",
        "lesson": "2B"
    },
    {
        "japanese": ["劇場"],
        "english": ["theater", "theatre"],
        "category": "place",
        "lesson": "6B"
    },
    {
        "japanese": ["月曜日"],
        "english": ["Monday"],
        "category": "time",
        "lesson": "8A"
    },
    {
        "japanese": ["銀行"],
        "english": ["bank"],
        "category": "place",
        "lesson": "7A"
    },
    {
        "japanese": ["五"],
        "english": ["five"],
        "category": "number",
        "lesson": "2B"
    },
    {
        "japanese": ["午後"],
        "english": ["afternoon"],
        "category": "time",
        "lesson": "8B"
    },
    {
        "japanese": ["午前"],
        "english": ["morning"],
        "category": "time",
        "lesson": "8B"
    },
    {
        "japanese": ["ご存じ"],
        "english": ["knowing"],
        "category": "happening",
        "lesson": "10B"
    },
    {
        "japanese": ["灰色", "グレー"],
        "english": ["grey", "gray"],
        "category": "color",
        "lesson": "5B"
    },
    {
        "japanese": ["緑", "グリーン"],
        "english": ["green"],
        "category": "color",
        "lesson": "5B"
    },
    {
        "japanese": ["母親", "母↓", "お母さん↑"],
        "english": ["mom", "mother"],
        "category": "person",
        "lesson": "11B"
    },
    {
        "japanese": ["半"],
        "english": ["half"],
        "category": "amount",
        "lesson": "8B"
    },
    {
        "japanese": ["花"],
        "english": ["flower"],
        "category": "item",
        "lesson": "7A"
    },
    {
        "japanese": ["二十歳"],
        "english": ["20 years old", "twenty years old"],
        "category": "age",
        "lesson": "10A"
    }
    
]
    
var adjectivals = [
    {
        "japanese": ["危ない"],
        "english": ["dangerous"],
        "lesson": "7B"
    },
    {
        "japanese": ["赤い"],
        "english": ["red"],
        "lesson": "4A"
    },
    {
        "japanese": ["青い"],
        "english": ["blue"],
        "lesson": "4A"
    }
    
    

]

var verbals = [
    {
        "japanese": ["分かる"],
        "english": ["understand"],
        "ru": false,
        "operational": false,
        "lesson": "1A" 
    },
    {
        "japanese": ["ある"],
        "english": ["have","be located"],
        "ru": false,
        "operational": false,
        "lesson": "4A" 
    },
    {
        "japanese": ["歩く"],
        "english": ["walk"],
        "ru": false,
        "operational": true,
        "lesson": "7B" 
    }

]

var modifiers = [
    {
        "japanese": ["生憎"],
        "english": ["unfortunately"],
        "lesson": "12A"
    },
    {
        "japanese": ["こんな"],
        "english": ["this kind of"],
        "lesson": "4B"
    },
    {
        "japanese": ["そんな"],
        "english": ["that kind of"],
        "lesson": "4B"
    },
    {
        "japanese": ["あんな"],
        "english": ["that kind of"],
        "lesson": "4B"
    },
    {
        "japanese": ["どんな"],
        "english": ["what kind of"],
        "lesson": "4B"
    },
    {
        "japanese": ["あまり","あんまり"],
        "english": ["not much","not very"],
        "lesson": "4A"
    }
]

var greetings = [
    {
        "japanese": ["ありがとう","ありがとう ございます","ありがとう ございました"],
        "english": ["thanks","thank you"],
        "lesson": "0A"
    }


]
