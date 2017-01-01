$(function() {

    var audio = new Audio();
    newWord();

    function newWord() {
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


        var HTMLword1 = document.getElementById('HTMLword1');
        //var buttonTranslator = document.getElementById('buttonTranslator);dlaczego z tym nie działa
        var buttonTranslator = $("#buttonTranslator");
        var HTMLword2 = document.getElementById('HTMLword2');
        var buttonNewWord = $("#buttonNewWord");

        var randomWord = Math.round((word.length - 1) * Math.random());
        var randomLanguage = Math.round(1 * Math.random());
        if (randomLanguage == 0) {
            HTMLword1.firstElementChild.textContent = word[randomWord][0];
            HTMLword2.firstElementChild.textContent = word[randomWord][1];
        } else {
            HTMLword1.firstElementChild.textContent = word[randomWord][1];
            HTMLword2.firstElementChild.textContent = word[randomWord][0];
        }

        HTMLword2.style.visibility = 'hidden';
        audio.src = word[randomWord][2];

        buttonTranslator.on("click", function() {
            HTMLword2.style.visibility = 'visible';
            audio.play();
        });

        buttonNewWord.on("click", newWord);
    }

});