// Fetch API.
// Promise API.
// JSON
/* global Promise */

var dataPromise = fetch('data.json')
    .then(response => response.json())
    //.then( function (res) { return res.json() } )

var domReadyPromise = new Promise(function(res) {
    $(res);
});

Promise.all([dataPromise, domReadyPromise], function(args) {
    var words = args[0];
    initialize(words);
});

function initialize(words) {
    console.log(0);
    var audio = new Audio();
    var HTMLword1 = document.getElementById('HTMLword1');
    //var buttonTranslator = document.getElementById('buttonTranslator);dlaczego z tym nie działa
    var buttonTranslator = $("#buttonTranslator");
    var HTMLword2 = document.getElementById('HTMLword2');
    var buttonNewWord = $("#buttonNewWord");

    buttonNewWord.on("click", function() {
        generateWord(words, HTMLword1, HTMLword2, audio);
    });

    buttonTranslator.on("click", function() {
        HTMLword2.style.visibility = 'visible';
        audio.play();
    });

    generateWord(words, HTMLword1, HTMLword2, audio);
}

function generateWord(words, HTMLword1, HTMLword2, audio) {
    var randomWord = Math.round((words.length - 1) * Math.random());
    console.log(randomWord);
    var randomLanguage = Math.round(Math.random());

    if (randomLanguage == 0) {
        HTMLword1.firstElementChild.textContent = words[randomWord][0];
        HTMLword2.firstElementChild.textContent = words[randomWord][1];
    } else {
        HTMLword1.firstElementChild.textContent = words[randomWord][1];
        HTMLword2.firstElementChild.textContent = words[randomWord][0];
    }

    HTMLword2.style.visibility = 'hidden';
    audio.src = words[randomWord][2];
}