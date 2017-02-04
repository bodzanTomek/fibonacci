/* global require, Color*/
//const Color = require('./color1');

window.addEventListener('load', () => {
    new ColorPicker();
});

class ColorPicker {
    constructor() {
        this.colorPicker = document.getElementById('colorPicker');
        this.colorSample = document.getElementById('colorSample');
        this.rgbValue = document.getElementById('rgbValue');
        this.hexValue = document.getElementById('hexValue');
        this.hslValue = document.getElementById('hslValue');
        this.numberValue = document.getElementById('numberValue');
        this.rValue = document.getElementById('rValue'); //na pasku zrobić kolory
        this.addListeners();
        this.colorPickerInitialize()
    }

    addListeners() {

        this.rValue.addEventListener("change", function() { this.drawColorPicker(this.rValue.value); }.bind(this));
        this.colorPicker.addEventListener('click', function(e) { this.clickedColor(e) }.bind(this));
        //zrobić kułeczko zaznaczonego koloru
    }

    colorPickerInitialize() {
        this.colorPicker.width = 255;
        this.colorPicker.height = 255;
        this.context = this.colorPicker.getContext('2d');
        this.drawColorPicker(0);
    }

    drawColorPicker(r) {
        let rgb, g, b;
        for (g = 0; g < 256; g += 1) {
            for (b = 0; b < 256; b += 1) {
                rgb = "rgb(" + r + "," + g + "," + b + ")";
                this.context.fillStyle = rgb;
                this.context.fillRect(b, g, 1, 1);
            }
        }
    }

    clickedColor(e) {
        let r = this.context.getImageData(e.offsetX, e.offsetY, 1, 1).data[0];
        let g = this.context.getImageData(e.offsetX, e.offsetY, 1, 1).data[1];
        let b = this.context.getImageData(e.offsetX, e.offsetY, 1, 1).data[2];
        const color = new Color(r, g, b);
        this.colorSample.style.background = color.toRgb();
        this.rgbValue.textContent = color.toRgb();
        this.hexValue.textContent = color.toHex();
        this.hslValue.textContent = color.toHsl();
        this.numberValue.textContent = color.toNumber();
    }

    //zrobić ładnie stronę z wpisem do formularza
}