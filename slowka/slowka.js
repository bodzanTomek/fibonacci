window.addEventListener('load', () => {
    new Slowka();
});
class Slowka {
    constructor() {

        var dataPromise = fetch('data.json')
            .then(response => response.json())
            .then(function(values) { this.initialize(values) }.bind(this))

        // var domReadyPromise = new Promise(function(res) {
        //     $(res);
        //     //$(function() { res() }) prawie to samo
        // });

        // Promise.all([dataPromise, domReadyPromise])
        //     .then(function(values) {
        //         this.initialize(values[0]);
        //     }.bind(this))
    }

    initialize(words) {
        var audio = new Audio();
        var HTMLword1 = document.getElementById('HTMLword1');
        var buttonTranslator = $("#buttonTranslator");
        var HTMLword2 = document.getElementById('HTMLword2');
        var buttonNewWord = $("#buttonNewWord");

        buttonNewWord.on("click", function() {
            this.generateWord(words, HTMLword1, HTMLword2, audio);
        }.bind(this));

        buttonTranslator.on("click", function() {
            HTMLword2.style.visibility = 'visible';
            audio.currentTime = 0;
            audio.play();
            this.animate(audio.duration);
        }.bind(this));

        this.generateWord(words, HTMLword1, HTMLword2, audio);
    }

    generateWord(words, HTMLword1, HTMLword2, audio) {
        var randomWord = Math.round((words.length - 1) * Math.random());
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

    animate(time) {
        const el = $('#animation');
        const d = Date.now();

        animateDiv();

        function animateDiv() {
            const currentDate = Date.now();
            const diff = currentDate - d;
            const state = diff / time / 1000; // 0 - 1
            el.width(state * 100);

            if (state < 1) {
                window.requestAnimationFrame(animateDiv);
                // window.setTimeout(animateDiv, 1000/60);
            }
        }
    }
}