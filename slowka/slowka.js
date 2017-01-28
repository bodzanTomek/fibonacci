// window.addEventListener('load', () => {
//     new Slowka();
// });
/* global Promise */
class Slowka {
    constructor() {
        this.element = $('#animation');

        var dataPromise = fetch('data.json')
            .then(response => response.json())
            //.then(function(values) { this.initialize(values) }.bind(this))

        var domReadyPromise = new Promise(function(res) {
            $(res);
            //$(function() { res() }) prawie to samo
        });

        Promise.all([dataPromise, domReadyPromise])
            .then(function(values) {
                this.initialize(values[0]);
            }.bind(this))
    }

    initialize(words) {
        var audio = new Audio();
        var HTMLword1 = document.getElementById('HTMLword1');
        var buttonTranslator = $("#buttonTranslator");
        var HTMLword2 = document.getElementById('HTMLword2');
        var buttonNewWord = $("#buttonNewWord");
        var animator = new Animator(this.element);

        buttonNewWord.on("click", function() {
            this.generateWord(words, HTMLword1, HTMLword2, audio);
            animator.stop();
        }.bind(this));

        buttonTranslator.on("click", function() {
            HTMLword2.style.visibility = 'visible';
            audio.currentTime = 0; //ustawia czas audio od początku
            audio.play();
            animator.animate(audio.duration); //czas trwania utworu
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
}

class Animator {
    constructor(el) {
        this.el = el;
        this.isRunning = false;
    }

    animate(time) {
        this.time = time;
        this.d = Date.now();

        if (!this.isRunning) {
            this.isRunning = true;
            this._animateElement();
        }
    }

    _animateElement() {
        if (!this.isRunning) {
            return;
        }

        const currentDate = Date.now(); // pobiera aktualny czas podczas wywołania
        const diff = currentDate - this.d; //pobieramy różnice czasu
        const state = diff / this.time / 1000; // 0 - 1 dzielimy przez 1000 bo date mamy  ms a audio.duration  s, 
        //dzielimy aby wiedzieć w ilu procentach utworu jesteśmy
        this.el.width(state * 139); //np dł utworu to 100ms jesteśmy na 50ms czyli mamy 50/100 czyli 0,5 X100 =50px  
        //100 można zamienić aby był dłuższy pasek

        if (state < 1) {
            window.requestAnimationFrame(this._animateElement.bind(this)); //wywołuje co 60ms wbudowana metoda płynnie się wykonuje
            // window.setTimeout(animateDiv, 1000/60);
        } else {
            this.isRunning = false;
        }
    }

    stop() {
        this.isRunning = false;
        this.el.width(0);
    }
}

new Slowka();
// SOLID.

// var o = {
//     fn() {
//         console.log( this );
//     }
// }

// o.fn();

// var fn = o.fn;
// fn();

// var fn2 = fn.bind( o );
// fn2();

/*
class A {
    foo() { 

    }
}

new A();

function A() { 

}

A.prototype.foo = function() { 

}

*/