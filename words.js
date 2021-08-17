/* Key
japanese: the kanzi (kanji) form of the word (or just kana if the word is rarely used with kanzi)
kana (override): overrides Kuroshiro translations from kanzi if it gets it wrong
english: the english translation
category (nominals): roughly what connotation the word is used for
lesson: the JSL lesson the word is first introduced in
politeness: the politeness of the word.
            honorific: used to address superiors
            humble: used to address in-group to superiors
            neutral: general-purpose
            rude: don't use this word
question: true if the word is a "question word" like "dore", "doko", "nani", etc.
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
        "lesson": "2B",
        "politeness": "rude"
    },
    {
        "japanese": ["姉"],
        "english": ["older sister"],
        "category": "person",
        "lesson": "11A",
        "politeness": "neutral"
    },
    {
        "japanese": ["兄"],
        "english": ["older brother"],
        "category": "person",
        "lesson": "11A",
        "politeness": "neutral"
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
        "question": true,
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
        "question": true,
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
        "lesson": "6A",
        "question": true
    },
    {
        "japanese": ["後"],
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
        "category": "item",
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
        "question": true,
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
