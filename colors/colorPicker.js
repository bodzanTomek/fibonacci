/* global require, Color*/
//const Color = require('./color1');

window.addEventListener('load', () => {
    new ColorPicker();
});

class ColorPicker {
    constructor() {
        this.getDOMvalues();
        this.initializeElements();
        this.addListeners();
    }

    getDOMvalues() {
        this.colorPalette = document.getElementById('colorPalette');
        this.colorPrewiew = document.getElementById('colorPrewiew');
        this.rgbText = document.getElementById('rgbText');
        this.hexText = document.getElementById('hexText');
        this.hslText = document.getElementById('hslText');
        this.numberText = document.getElementById('numberText');
        this.colorChanger = document.getElementById('colorChanger');
    }
    initializeElements() {
        this.ColorSamplePositionX = 130;
        this.ColorSamplePositionY = 130;
        this.gFromRgb = 130;
        this.bFromRgb = 130;
        this.colorPalette.width = 255;
        this.colorPalette.height = 255;
        this.contextColorPalette = this.colorPalette.getContext('2d');
        this.colorPrewiew.style.background = "rgb(0,130,130)";
        this.hexText.value = "hex(#008282)";
        this.hslText.value = "hsl(180,100%,25%)";
        this.numberText.value = "number(33410)";
        this.drawColorPalette(0);
        this.drawColorSample("rgb(0,130,130)");
    }
    drawColorPalette(r) {
        let rgb, g, b;
        for (g = 0; g < 256; g += 1) {
            for (b = 0; b < 256; b += 1) {
                rgb = "rgb(" + r + "," + g + "," + b + ")";
                this.contextColorPalette.fillStyle = rgb;
                this.contextColorPalette.fillRect(b, g, 1, 1);
            }
        }
    }
    drawColorSample(rgb) {
        this.contextColorPalette.beginPath();
        this.contextColorPalette.arc(this.ColorSamplePositionX, this.ColorSamplePositionY, 8, 0, 10 * Math.PI);
        this.contextColorPalette.strokeStyle = "white";
        this.contextColorPalette.fillStyle = rgb;
        this.contextColorPalette.lineWidth = 6;
        this.contextColorPalette.stroke();
        //this.contextColorPalette.closePath;
        this.contextColorPalette.fill();
    }
    addListeners() {
        this.colorChanger.addEventListener("change", function() { this.runColorChanger(parseInt(this.colorChanger.value)); }.bind(this));
        this.colorPalette.addEventListener('click', function(e) { this.clickedColor(e); }.bind(this));
    }
    clickedColor(e) {
        let rFromRgb = this.contextColorPalette.getImageData(e.offsetX, e.offsetY, 1, 1).data[0];
        this.gFromRgb = this.contextColorPalette.getImageData(e.offsetX, e.offsetY, 1, 1).data[1];
        this.bFromRgb = this.contextColorPalette.getImageData(e.offsetX, e.offsetY, 1, 1).data[2];
        this.ColorSamplePositionX = e.offsetX;
        this.ColorSamplePositionY = e.offsetY;
        this.color = new Color(rFromRgb, this.gFromRgb, this.bFromRgb);
        this.colorPrewiew.style.background = this.color.toRgb();
        this.rgbText.value = this.color.toRgb();
        this.hexText.value = this.color.toHex();
        this.hslText.value = this.color.toHsl();
        this.numberText.value = this.color.toNumber();
        this.drawColorPalette(rFromRgb);
        this.drawColorSample(this.color.toRgb());
    }
    runColorChanger(r) {
        this.drawColorPalette(r);
        this.color = new Color(r, this.gFromRgb, this.bFromRgb);
        this.colorPrewiew.style.background = this.color.toRgb();
        this.rgbText.value = this.color.toRgb();
        this.hexText.value = this.color.toHex();
        this.hslText.value = this.color.toHsl();
        this.numberText.value = this.color.toNumber();
        this.drawColorSample(this.color.toRgb());
    }

}