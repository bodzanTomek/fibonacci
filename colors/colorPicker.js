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
        this.rValue.addEventListener("change", function() { this.rValueChange(this.rValue.value); }.bind(this));
        this.colorPicker.addEventListener('click', function(e) { this.clickedColor(e); }.bind(this));
    }

    colorPickerInitialize() {
        this.colorPicker.width = 255;
        this.colorPicker.height = 255;
        this.context = this.colorPicker.getContext('2d');
        this.drawColorPicker(0);
        this.drawCircle(130, 130, "rgb(0,130,130)");
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
        this.g = this.context.getImageData(e.offsetX, e.offsetY, 1, 1).data[1];
        this.b = this.context.getImageData(e.offsetX, e.offsetY, 1, 1).data[2];
        this.color = new Color(r, this.g, this.b);
        this.colorSample.style.background = this.color.toRgb();
        this.rgbValue.textContent = this.color.toRgb();
        this.hexValue.textContent = this.color.toHex();
        this.hslValue.textContent = this.color.toHsl();
        this.numberValue.textContent = this.color.toNumber();
        this.drawColorPicker(r);
        this.drawCircle(e.offsetX, e.offsetY, this.color.toRgb());
    }

    drawCircle(x, y, rgb) {
        this.x = x;
        this.y = y;
        this.context.beginPath();
        this.context.arc(this.x, this.y, 8, 0, 10 * Math.PI);
        this.context.strokeStyle = "white";
        this.context.fillStyle = rgb;
        this.context.lineWidth = 6;
        this.context.stroke();
        //this.context.closePath;
        this.context.fill();
    }
    rValueChange(r) {
            this.drawColorPicker(r);
            this.color = new Color(r, this.g, this.b);
            this.colorSample.style.background = this.color.toRgb();
            this.rgbValue.textContent = this.color.toRgb();
            this.hexValue.textContent = this.color.toHex();
            this.hslValue.textContent = this.color.toHsl();
            this.numberValue.textContent = this.color.toNumber();
            this.drawCircle(this.x, this.y, this.color.toRgb());
        }
        //zrobić ładnie stronę z wpisem do formularza
}