$(function() {

    var audio = new Audio();
    var HTMLword1 = document.getElementById('HTMLword1');
    //var buttonTranslator = document.getElementById('buttonTranslator);dlaczego z tym nie działa
    var buttonTranslator = $("#buttonTranslator");
    var HTMLword2 = document.getElementById('HTMLword2');
    var buttonNewWord = $("#buttonNewWord");
    var randomWord;
    var randomLanguage;
    var word = []
    word[0] = ['using the class', 'korzystanie z klasy', "slowka\\slowka0.mp3"];
    word[1] = ['makes it possible', 'umożliwia', "slowka\\slowka1.mp3"];
    word[2] = ['points to the class name', 'wskazuje na nazwę klasy', "slowka\\slowka2.mp3"];
    word[3] = ['is used to', 'jest używany do', "slowka\\slowka3.mp3"];
    word[4] = ['within', 'wewnątrz', "slowka\\slowka4.mp3"];
    word[5] = ['syntax', 'składnia', "slowka\\slowka5.mp3"];
    word[6] = ['by default', 'domyślnie', "slowka\\slowka6.mp3"];
    word[7] = ['remove the border', 'usunąć obramowanie', "slowka\\slowka7.mp3"];
    word[8] = ['property', 'własciwość', "slowka\\slowka8.mp3"];
    word[9] = ['target frame', 'ramka docelowa', "slowka\\slowka9.mp3"];
    word[10] = ['refer', 'odnosić się', "slowka\\slowka10.mp3"];
    word[11] = ['either contains', 'albo zawiera', "slowka\\slowka11.mp3"];
    word[12] = ['scripting statements', 'deklaracja skryptu', "slowka\\slowka12.mp3"];
    word[13] = ['points to an external file', 'wskazuje na zewnętrzny plik', "slowka\\slowka13.mp3"];
    word[14] = ['is used to provide', 'jest używany do dostarczenia/umożliwienia', "slowka\\slowka14.mp3"];
    word[15] = ['disabled', 'wyłączony/nieaktywny', "slowka\\slowka15.mp3"];
    word[16] = ['is placed', 'jest umieszczony/położony', "slowka\\slowka16.mp3"];
    word[17] = ['typically', 'zazwyczaj', "slowka\\slowka17.mp3"];
    word[18] = ['character set', 'zestaw znaków', "slowka\\slowka18.mp3"];
    word[19] = ['following tags describe', 'następujące znaki opisują', "slowka\\slowka19.mp3"];
    word[20] = ['is required', 'jest wymagane', "slowka\\slowka20.mp3"];
    word[21] = ['page description', 'opis strony', "slowka\\slowka21.mp3"];
    word[22] = ['according', 'według', "slowka\\slowka22.mp3"];
    word[23] = ['omitted', 'pominięty', "slowka\\slowka23.mp3"];
    word[24] = ['layout', 'układ', "slowka\\slowka24.mp3"];
    word[25] = ['aside', 'na boku', "slowka\\slowka25.mp3"];
    word[26] = ['additional details', 'dodatkowe szczegóły', "slowka\\slowka26.mp3"];
    word[27] = ['pros and cons', 'plusy i minusy', "slowka\\slowka27.mp3"];
    word[28] = ['purpose', 'przeznaczenie', "slowka\\slowka28.mp3"];
    word[29] = ['mess into your code', 'bałagan w twoim kodzie', "slowka\\slowka29.mp3"];
    word[30] = ['redesign', 'przeprojektować', "slowka\\slowka30.mp3"];
    word[31] = ['entire', 'cały/kompletny', "slowka\\slowka31.mp3"]
    word[32] = ['disadvantages', 'niedogodności/strona ujemna', "slowka\\slowka32.mp3"];
    word[33] = ['tied', 'związany', "slowka\\slowka33.mp3"];
    word[34] = ['harm the flexibility', 'szkodzi elastyczności', "slowka\\slowka34.mp3"];
    word[35] = ['ensures', 'zapewnia', "slowka\\slowka35.mp3"];
    word[36] = ['behave', 'działać/zachowywać się', "slowka\\slowka36.mp3"];
    word[37] = ['predictably', 'przewidywalny', "slowka\\slowka37.mp3"];
    word[38] = ['accommodate', 'przystosować/pomieścić', "slowka\\slowka38.mp3"];

    buttonNewWord.on("click", newWord);
    buttonTranslator.on("click", function() {
        HTMLword2.style.visibility = 'visible';
        audio.play();
    });

    newWord();

    function newWord() {
        randomWord = Math.round((word.length - 1) * Math.random());
        console.log(randomWord);
        randomLanguage = Math.round(1 * Math.random());
        if (randomLanguage == 0) {
            HTMLword1.firstElementChild.textContent = word[randomWord][0];
            HTMLword2.firstElementChild.textContent = word[randomWord][1];
        } else {
            HTMLword1.firstElementChild.textContent = word[randomWord][1];
            HTMLword2.firstElementChild.textContent = word[randomWord][0];
        }

        HTMLword2.style.visibility = 'hidden';
        audio.src = word[randomWord][2];
    }

});