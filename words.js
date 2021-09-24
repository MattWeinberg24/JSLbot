/*
Note: Some words from JSL have been removed/altered depending on their usefulness in modern conversation
*/

/* Key
japanese: the kanzi (kanji) form of the word (or just kana if the word is rarely used with kanzi)
kana (override): overrides Kuroshiro translations from kanzi if it gets it wrong
english: the english translation
lesson: the JSL lesson the word is first introduced in
category (nominals): roughly what connotation the word is used for
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
        "japanese": ["あなた", "君"],
        "english": ["you"],
        "category": "person",
        "lesson": "2B"
    },
    {
        "japanese": ["姉","お姉さん↑"],
        "english": ["older sister"],
        "category": "person",
        "lesson": "11A"
    },
    {
        "japanese": ["兄", "お兄さん↑"],
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
        "kana": ["あさって","みょうごにち"],
        "english": ["day after tomorrow"],
        "category": "time",
        "lesson": "3B"
    },
    {
        "japanese": ["明日"],
        "kana": ["あした","あす","みょうにち"],
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
        "japanese": ["息子","息子さん↑"],
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
        "japanese": ["ご存じ↑"],
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
        "kana": ["はたち"],
        "english": ["20 years old", "twenty years old"],
        "category": "age",
        "lesson": "10A"
    },
    {
        "japanese": ["初めて"],
        "english": ["first time"],
        "lesson": "11B",
        "category": "happening"
    },
    {
        "japanese": ["二十日"],
        "kana": ["はつか"],
        "english": ["twentieth day of the month"],
        "lesson": "8A",
        "category": "time"
    },
    {
        "japanese": ["辺"],
        "kana": ["へん"],
        "english": ["area", "vicinity"],
        "lesson": "6A",
        "category": "place"
    },
    {
        "japanese": ["日"],
        "english": ["day"],
        "lesson": "10A",
        "category": "time"
    },
    {
        "japanese": ["左"],
        "english": ["left"],
        "lesson": "6B",
        "category": "direction"
    },
    {
        "japanese": ["飛行機"],
        "english": ["airplane"],
        "lesson": "7B",
        "category": "vehicle"
    },
    {
        "japanese": ["久しぶり"],
        "english": ["a long time"],
        "lesson": "11B",
        "category": "happening"
    },
    {
        "japanese": ["人", "方↑"],
        "english": ["person"],
        "lesson": "10A",
        "category": "person"
    },
    {
        "japanese": ["一人"],
        "kana": ["ひとり"],
        "english": ["alone", "one person"],
        "lesson": "11A",
        "category": "happening"
    },
    {
        "japanese": ["他"],
        "kana": ["ほか"],
        "english": ["other"],
        "lesson": "5A",
        "category": "relative item"
    },
    {
        "japanese": ["本"],
        "english": ["book"],
        "lesson": "2B",
        "category": "item"
    },
    {
        "japanese": ["本当"],
        "english": ["truth", "true"],
        "lesson": "2B",
        "category": "happening"
    },
    {
        "japanese": ["方"],
        "english": ["direction", "way", "side", "alternative"],
        "lesson": "6A",
        "category": "relative item"
    },
    {
        "japanese": ["船"],
        "english": ["boat", "ship"],
        "lesson": "8B",
        "category": "vehicle"
    },
    {
        "japanese": ["家"],
        "english": ["house", "home"],
        "lesson": "7B",
        "category": "place"
    },
    {
        "japanese": ["イギリス"],
        "english": ["United Kingdom"],
        "lesson": "5B",
        "category": "country"
    },
    {
        "japanese": ["いくら"],
        "english": ["how much"],
        "lesson": "2B",
        "category": "amount"
    },
    {
        "japanese": ["いくつ"],
        "english": ["how many, how old"],
        "lesson": "5B",
        "category": "amount"
    },
    {
        "japanese": ["今"],
        "english": ["now"],
        "lesson": "7A",
        "category": "time"
    },
    {
        "japanese": ["妹", "妹さん↑"],
        "english": ["younger sister"],
        "lesson": "11A",
        "category": "person"
    },
    {
        "japanese": ["インド"],
        "english": ["India"],
        "lesson": "5B",
        "category": "country"
    },
    {
        "japanese": ["入口"],
        "english": ["entrance"],
        "lesson": "6A",
        "category": "place"
    },
    {
        "japanese": ["色"],
        "english": ["color"],
        "lesson": "5B",
        "category": "quality"
    },
    {
        "japanese": ["一緒"],
        "english": ["together"],
        "lesson": "11A",
        "category": "happening"
    },
    {
        "japanese": ["イタリア"],
        "english": ["Italy"],
        "lesson": "5B",
        "category": "country"
    },
    {
        "japanese": ["いとこ"],
        "english": ["cousin"],
        "lesson": "11B",
        "category": "person"
    },
    {
        "japanese": ["何時"],
        "english": ["when"],
        "lesson": "3B",
        "category": "time"
    },
    {
        "japanese": ["何れ"],
        "english": ["someday", "sometime"],
        "lesson": "12A",
        "category": "time"
    },
    {
        "japanese": ["角"],
        "kana": ["かど"],
        "english": ["street corner"],
        "lesson": "7B",
        "category": "place"
    },
    {
        "japanese": ["帰り"],
        "english": ["return"],
        "lesson": "8A",
        "category": "event"
    },
    {
        "japanese": ["会議"],
        "english": ["meeting"],
        "lesson": "3B",
        "category": "event"
    },
    {
        "japanese": ["会議室"],
        "english": ["meeting room"],
        "lesson": "10B",
        "category": "place"
    },
    {
        "japanese": ["会社"],
        "english": ["company"],
        "lesson": "11A",
        "category": "place"
    },
    {
        "japanese": ["紙"],
        "english": ["paper"],
        "lesson": "4B",
        "category": "item"
    },
    {
        "japanese": ["韓国"],
        "english": ["Korea"],
        "lesson": "5B",
        "category": "country"
    },
    {
        "japanese": ["彼女"],
        "english": ["she"],
        "lesson": "10A",
        "category": "person"
    },
    {
        "japanese": ["彼"],
        "english": ["he"],
        "lesson": "10A",
        "category": "person"
    },
    {
        "japanese": ["変わり"],
        "english": ["change"],
        "lesson": "11B",
        "category": "event"
    },
    {
        "japanese": ["火曜日"],
        "english": ["Tuesday"],
        "lesson": "8A",
        "category": "time"
    },
    {
        "japanese": ["火事"],
        "english": ["fire"],
        "lesson": "9B",
        "category": "event"
    },
    {
        "japanese": ["家族"],
        "english": ["family"],
        "lesson": "11A",
        "category": "people"
    },
    {
        "japanese": ["ケーキ"],
        "english": ["cake"],
        "lesson": "3A",
        "category": "food"
    },
    {
        "japanese": ["今朝"],
        "english": ["this morning"],
        "lesson": "9A",
        "category": "time"
    },
    {
        "japanese": ["昨日"],
        "english": ["yesterday"],
        "lesson": "1A",
        "category": "time"
    },
    {
        "japanese": ["金曜日"],
        "english": ["Friday"],
        "lesson": "8A",
        "category": "time"
    },
    {
        "japanese": ["喫茶店"],
        "english": ["cafe"],
        "lesson": "7A",
        "category": "place"
    },
    {
        "japanese": ["子","子供","お子さん↑"],
        "english": ["child"],
        "lesson": "10A",
        "category": "person"
    },
    {
        "japanese": ["声"],
        "english": ["voice"],
        "lesson": "13A",
        "category": "item"
    },
    {
        "japanese": ["今晩"],
        "english": ["tonight"],
        "lesson": "9A",
        "category": "time"
    },
    {
        "japanese": ["今月"],
        "english": ["this month"],
        "lesson": "9A",
        "category": "time"
    },
    {
        "japanese": ["コンピュータ"],
        "english": ["computer"],
        "lesson": "3A",
        "category": "item"
    },
    {
        "japanese": ["今週"],
        "english": ["this week"],
        "lesson": "9A",
        "category": "time"
    },
    {
        "japanese": ["交番"],
        "english": ["police box"],
        "lesson": "6A",
        "category": "place"
    },
    {
        "japanese": ["公園"],
        "english": ["park"],
        "lesson": "6B",
        "category": "place"
    },
    {
        "japanese": ["高校"],
        "english": ["high school"],
        "lesson": "7A",
        "category": "place"
    },
    {
        "japanese": ["交差点"],
        "english": ["intersection"],
        "lesson": "7B",
        "category": "place"
    },
    {
        "japanese": ["今年"],
        "english": ["this year"],
        "lesson": "8B",
        "category": "time"
    },
    {
        "japanese": ["車"],
        "english": ["car"],
        "lesson": "5B",
        "category": "vehicle"
    },
    {
        "japanese": ["空港"],
        "english": ["airport"],
        "lesson": "7B",
        "category": "place"
    },
    {
        "japanese": ["客"],
        "english": ["guest", "customer"],
        "lesson": "10B",
        "category": "person"
    },
    {
        "japanese": ["去年"],
        "english": ["last year"],
        "lesson": "8B",
        "category": "time"
    },
    {
        "japanese": ["今日"],
        "english": ["today"],
        "lesson": "1A",
        "category": "time"
    },
    {
        "japanese": ["兄弟"],
        "english": ["siblings"],
        "lesson": "11A",
        "category": "people"
    },
    {
        "japanese": ["教会"],
        "english": ["church"],
        "lesson": "6B",
        "category": "place"
    },
    {
        "japanese": ["教科書"],
        "english": ["textbook"],
        "lesson": "10B",
        "category": "item"
    },
    {
        "japanese": ["教室"],
        "english": ["classroom"],
        "lesson": "10B",
        "category": "place"
    },
    {
        "japanese": ["前"],
        "english": ["in front", "before"],
        "lesson": "8A",
        "category": "relative location"
    },
    {
        "japanese": ["毎朝"],
        "english": ["every morning"],
        "lesson": "8B",
        "category": "time"
    },
    {
        "japanese": ["毎晩"],
        "english": ["every night"],
        "lesson": "8B",
        "category": "time"
    },
    {
        "japanese": ["毎度"],
        "english": ["every time"],
        "lesson": "4B",
        "category": "relative time"
    },
    {
        "japanese": ["毎月"],
        "kana": ["まいつき","まいげつ"],
        "english": ["every month"],
        "lesson": "8B",
        "category": "time"
    },
    {
        "japanese": ["毎年"],
        "kana": ["まいとし","まいねん"],
        "english": ["every year"],
        "lesson": "8B",
        "category": "time"
    },
    {
        "japanese": ["毎日"],
        "english": ["everyday"],
        "lesson": "8B",
        "category": "time"
    },
    {
        "japanese": ["毎週"],
        "english": ["every week"],
        "lesson": "8B",
        "category": "time"
    },
    {
        "japanese": ["丸"],
        "english": ["circle"],
        "lesson": "12A",
        "category": "shape"
    },
    {
        "japanese": ["まっすぐ"],
        "english": ["straight"],
        "lesson": "7B",
        "category": "relative location"
    },
    {
        "japanese": ["名刺"],
        "english": ["business card"],
        "lesson": "12A",
        "category": "item"
    },
    {
        "japanese": ["メッセージ"],
        "english": ["message"],
        "lesson": "12B",
        "category": "item"
    },
    {
        "japanese": ["右"],
        "english": ["right"],
        "lesson": "6B",
        "category": "relative location"
    },
    {
        "japanese": ["皆", "皆さん↑"],
        "english": ["everyone"],
        "lesson": "5B",
        "category": "people"
    },
    {
        "japanese": ["ミルク"],
        "english": ["milk"],
        "lesson": "5B",
        "category": "drink"
    },
    {
        "japanese": ["店"],
        "english": ["store"],
        "lesson": "6A",
        "category": "place"
    },
    {
        "japanese": ["道"],
        "english": ["road", "street"],
        "lesson": "6A",
        "category": "place"
    },
    {
        "japanese": ["申し訳"],
        "english": ["excuse"],
        "lesson": "12A",
        "category": "abstract item"
    },
    {
        "japanese": ["モスクワ"],
        "english": ["Moscow"],
        "lesson": "8A",
        "category": "city"
    },
    {
        "japanese": ["持ち合わせ"],
        "english": ["things on hand"],
        "lesson": "12A",
        "category": "item"
    },
    {
        "japanese": ["向こう"],
        "english": ["over there"],
        "lesson": "6A",
        "category": "relative location"
    },
    {
        "japanese": ["向こう側"],
        "english": ["opposite side", "other side"],
        "lesson": "6B",
        "category": "relative location"
    },
    {
        "japanese": ["娘", "娘さん↑"],
        "english": ["daughter"],
        "lesson": "10A",
        "category": "person"
    },
    {
        "japanese": ["明晩"],
        "english": ["tomorrow night"],
        "lesson": "12B",
        "category": "time"
    },
    {
        "japanese": ["明朝"],
        "english": ["tomorrow morning"],
        "lesson": "12B",
        "category": "time"
    },
    {
        "japanese": ["名古屋"],
        "english": ["Nagoya"],
        "lesson": "8A",
        "category": "city"
    },
    {
        "japanese": ["名前"],
        "english": ["name"],
        "lesson": "7A",
        "category": "item"
    },
    {
        "japanese": ["何"],
        "kana": ["なん","なに"],
        "english": ["what"],
        "lesson": "2A",
        "category": "abstract item"
    },
    {
        "japanese": ["日本"],
        "english": ["Japan"],
        "lesson": "5B",
        "category": "country"
    },
    {
        "japanese": ["日系人"],
        "english": ["person of Japanese descent"],
        "lesson": "10B",
        "category": "person"
    },
    {
        "japanese": ["日曜日"],
        "english": ["Sunday"],
        "lesson": "8A",
        "category": "time"
    },
    {
        "japanese": ["ノート"],
        "english": ["notebook"],
        "lesson": "4B",
        "category": "item"
    },
    {
        "japanese": ["ニューヨーク"],
        "english": ["New York"],
        "lesson": "8A",
        "category": "city"
    },
    {
        "japanese": ["叔母", "おばさん↑"],
        "english": ["aunt"],
        "lesson": "11B",
        "category": "person"
    },
    {
        "japanese": ["祖母", "おばあさん↑"],
        "english": ["grandmother"],
        "lesson": "11B",
        "category": "person"
    },
    {
        "japanese": ["妻", "奥さん↑"],
        "english": ["wife"],
        "lesson": "10B",
        "category": "person"
    },
    {
        "japanese": ["表"],
        "kana": ["おもて"],
        "english": ["front side"],
        "lesson": "7B",
        "category": "relative location"
    },
    {
        "japanese": ["同じ"],
        "english": ["same"],
        "lesson": "5B",
        "category": "relative item"
    },
    {
        "japanese": ["女"],
        "english": ["female"],
        "lesson": "10A",
        "category": "person"
    },
    {
        "japanese": ["大阪"],
        "english": ["Osaka"],
        "lesson": "8A",
        "category": "city"
    },
    {
        "japanese": ["オーストラリア"],
        "english": ["Australia"],
        "lesson": "5B",
        "category": "country"
    },
    {
        "japanese": ["内", "お宅↑"],
        "english": ["home"],
        "lesson": "7B",
        "category": "place"
    },
    {
        "japanese": ["男"],
        "english": ["male"],
        "lesson": "10A",
        "category": "person"
    },
    {
        "japanese": ["大人"],
        "english": ["adult"],
        "lesson": "10A",
        "category": "person"
    },
    {
        "japanese": ["父親", "父↓", "お父さん↑"],
        "english": ["father", "dad"],
        "lesson": "11B",
        "category": "person"
    },
    {
        "japanese": ["弟", "弟さん↑"],
        "english": ["younger brother"],
        "lesson": "11A",
        "category": "person"
    },
    {
        "japanese": ["一昨日"],
        "english": ["day before yesterday"],
        "lesson": "3A",
        "category": "time"
    },
    {
        "japanese": ["一昨年"],
        "kana": ["おととし"],
        "english": ["year before last"],
        "lesson": "10A",
        "category": "time"
    },
    {
        "japanese": ["夫", "ご主人↑"],
        "english": ["husband"],
        "lesson": "10B",
        "category": "person"
    },
    {
        "japanese": ["お釣り"],
        "english": ["change", "money returned"],
        "lesson": "4B",
        "category": "item"
    },
    {
        "japanese": ["お茶"],
        "english": ["tea"],
        "lesson": "3A",
        "category": "drink"
    },
    {
        "japanese": ["親", "親御さん↑"],
        "english": ["parent"],
        "lesson": "11B",
        "category": "person"
    },
    {
        "japanese": ["伯父", "伯父さん↑"],
        "english": ["uncle"],
        "lesson": "11B",
        "category": "person"
    },
    {
        "japanese": ["祖父", "お祖父さん↑"],
        "english": ["grandfather"],
        "lesson": "11B",
        "category": "person"
    },
    {
        "japanese": ["坊ちゃん"],
        "english": ["young man"],
        "lesson": "10A",
        "category": "person"
    },
    {
        "japanese": ["お嬢さん"],
        "english": ["young woman"],
        "lesson": "10A",
        "category": "person"
    },
    {
        "japanese": ["話"],
        "english": ["talking","speech"],
        "lesson": "13A",
        "category": "abstract item"
    },
    {
        "japanese": ["時","時間"],
        "english": ["time"],
        "lesson": "13A",
        "category": "abstract item"
    },
    {
        "japanese": ["留守番"],
        "english": ["caretaker"],
        "lesson": "13A",
        "category": "person"
    },
    {
        "japanese": ["社長"],
        "english": ["company president"],
        "lesson": "13B",
        "category": "person"
    },
    {
        "japanese": ["部長"],
        "english": ["division manager"],
        "lesson": "13B",
        "category": "person"
    },
    {
        "japanese": ["課長"],
        "english": ["section manager"],
        "lesson": "13B",
        "category": "person"
    },
    {
        "japanese": ["院長"],
        "english": ["hospital director"],
        "lesson": "13B",
        "category": "person"
    },
    {
        "japanese": ["学長"],
        "english": ["university president"],
        "lesson": "13B",
        "category": "person"
    },
    {
        "japanese": ["教授"],
        "english": ["professor"],
        "lesson": "13B",
        "category": "person"
    },
    {
        "japanese": ["教師"],
        "english": ["teacher"],
        "lesson": "13B",
        "category": "person"
    },
    {
        "japanese": ["秘書"],
        "english": ["secretary"],
        "lesson": "13B",
        "category": "person"
    },
    {
        "japanese": ["ただいま"],
        "english": ["right now"],
        "lesson": "13B",
        "category": "time"
    },
    {
        "japanese": ["内"],
        "english": ["interval"],
        "lesson": "13B",
        "category": "time"
    },
    {
        "japanese": ["都合"],
        "english": ["convenience"],
        "lesson": "13B",
        "category": "abstract item"
    },
    {
        "japanese": ["そう","さよう↓"],
        "english": ["in that way"],
        "lesson": "13B",
        "category": "abstract item"
    },
    {
        "japanese": ["魚"],
        "english": ["fish"],
        "lesson": "14A",
        "category": "food"
    },
    {
        "japanese": ["寿司"],
        "english": ["sushi"],
        "lesson": "14A",
        "category": "food"
    },
    {
        "japanese": ["刺身"],
        "english": ["sashimi"],
        "lesson": "14A",
        "category": "food"
    },
    {
        "japanese": ["天ぷら"],
        "english": ["tempura"],
        "lesson": "14A",
        "category": "food"
    },
    {
        "japanese": ["弁当"],
        "english": ["bento"],
        "lesson": "14A",
        "category": "food"
    },
    {
        "japanese": ["すき焼き"],
        "english": ["sukiyaki"],
        "lesson": "14A",
        "category": "food"
    },
    {
        "japanese": ["蕎麦"],
        "english": ["soba"],
        "lesson": "14A",
        "category": "food"
    },
    {
        "japanese": ["ご飯"],
        "english": ["cooked rice​"],
        "lesson": "14A",
        "category": "food"
    },
    {
        "japanese": ["米"],
        "english": ["rice"],
        "lesson": "14A",
        "category": "food"
    },
    {
        "japanese": ["昼ご飯","お昼↑"],
        "english": ["lunch"],
        "lesson": "14A",
        "category": "food"
    },
    {
        "japanese": ["朝ご飯"],
        "english": ["breakfast"],
        "lesson": "14A",
        "category": "food"
    },
    {
        "japanese": ["晩御飯"],
        "english": ["breakfast"],
        "lesson": "14A",
        "category": "food"
    },
    {
        "japanese": ["お腹"],
        "english": ["stomach"],
        "lesson": "14A",
        "category": "body part"
    },
    {
        "japanese": ["のど"],
        "english": ["throat"],
        "lesson": "14A",
        "category": "body part"
    },
    {
        "japanese": ["食堂"],
        "english": ["dining room"],
        "lesson": "14A",
        "category": "place"
    }
]

var na_nominals = [
    {
        "japanese": ["変"],
        "english": ["strange"],
        "lesson": "13A"
    },
    {
        "japanese": ["暇"],
        "english": ["free time"],
        "lesson": "13A"
    },
    {
        "japanese": ["大切"],
        "english": ["important"],
        "lesson": "13A"
    },
    {
        "japanese": ["結構"],
        "english": ["great"],
        "lesson": "13B"
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
    },
    {
        "japanese": ["遠い"],
        "english": ["far"],
        "lesson": "13A"
    },
    {
        "japanese": ["おかしい"],
        "english": ["funny", "strange"],
        "lesson": "13A"
    },
    {
        "japanese": ["近い"],
        "english": ["near"],
        "lesson": "13B"
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
    },
    {
        "japanese": ["通じる"],
        "english": ["be open","be understood"],
        "ru": true,
        "operational": false,
        "lesson": "13A" 
    },
    {
        "japanese": ["聞こえる"],
        "english": ["be heard","be audible"],
        "ru": true,
        "operational": false,
        "lesson": "13A" 
    },
    {
        "japanese": ["治す"],
        "english": ["repair","heal"],
        "ru": false,
        "operational": true,
        "lesson": "13A" 
    },
    {
        "japanese": ["切る"],
        "english": ["cut","cut off"],
        "ru": false,
        "operational": true,
        "lesson": "13A" 
    },
    {
        "japanese": ["変わる"],
        "english": ["change","move"],
        "ru": false,
        "operational": true,
        "lesson": "13B" 
    },
    {
        "japanese": ["戻る"],
        "english": ["return","go back"],
        "ru": false,
        "operational": true,
        "lesson": "13B" 
    },
    {
        "japanese": ["伺う↓"],
        "english": ["ask","inquire","visit"],
        "ru": false,
        "operational": true,
        "lesson": "6A" 
    },
    {
        "japanese": ["空く"],
        "english": ["become empty"],
        "ru": false,
        "operational": false,
        "lesson": "14A" 
    },
    {
        "japanese": ["乾く"],
        "english": ["become dry"],
        "ru": false,
        "operational": false,
        "lesson": "14A" 
    }

]

var suru_verbals = [
    {
        "japanese": ["外出"],
        "english": ["going out"],
        "lesson": "13B"
    },
    {
        "japanese": ["故障"],
        "english": ["out of order"],
        "lesson": "13A"
    },
    {
        "japanese": ["勉強"],
        "english": ["study"],
        "lesson": "9B"
    },
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
