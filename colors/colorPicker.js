/* global require, Color*/
//const Color = require('./color1');

window.addEventListener('load', () => {
    new ColorPicker({
        id: "colorPicker",
    });
    new ColorPicker({
        id: "colorPicker2",
    });
});

class ColorPicker {
    constructor(divId) {
        const rootId = divId.id;
        this.createDOM(rootId);
        this.setColorPaletteColor(255, 0, 0);
        this.drawColorPalette(this.paletteColor.toRgb());
        this.setColorSample(130, 130);
        this.drawColorSample(this.sampleColor.toRgb());
        this.setColorAsideElements(this.sampleColor);
        this.addListeners();
    }
    createDOM(rootId) {
        this.root = document.getElementById(rootId);
        this.colorPalette = document.createElement('canvas');
        this.colorPalette.className = "colorPalette";
        this.colorPalette.width = 255;
        this.colorPalette.height = 255;
        this.contextColorPalette = this.colorPalette.getContext('2d');
        this.root.appendChild(this.colorPalette);
        let asideContainer = document.createElement('div');
        asideContainer.className = "asideContainer"
        this.root.appendChild(asideContainer);

        this.colorPrewiew = document.createElement('div');
        this.colorPrewiew.className = "colorPrewiew";
        this.colorPrewiew.style.border = '1px solid black';
        asideContainer.appendChild(this.colorPrewiew);
        let colorValues = document.createElement('div');
        colorValues.className = "colorValues"
        asideContainer.appendChild(colorValues);
        this.colorChanger = document.createElement('input');
        this.colorChanger.className = "colorChanger";
        this.colorChanger.type = "range";
        this.colorChanger.min = "0";
        this.colorChanger.max = "1500";
        this.colorChanger.step = "1";
        this.colorChanger.value = 0;
        asideContainer.appendChild(this.colorChanger);


        this.rgbText = document.createElement('input');
        this.rgbText.className = "rgbText";
        this.rgbText.type = "text";
        this.rgbText.value = "rgb";
        colorValues.appendChild(this.rgbText);
        this.hexText = document.createElement('input');
        this.hexText.className = "hexText";
        this.hexText.type = "text";
        this.hexText.value = "hex";
        colorValues.appendChild(this.hexText);
        this.hslText = document.createElement('input');
        this.hslText.className = "hslText";
        this.hslText.type = "text";
        this.hslText.value = "hsl";
        colorValues.appendChild(this.hslText);
        this.numberText = document.createElement('input');
        this.numberText.className = "numberText";
        this.numberText.type = "text";
        this.numberText.value = "number";
        colorValues.appendChild(this.numberText);
    }
    setColorPaletteColor(r, g, b) {
        this.colorPalette_R = r;
        this.colorPalette_G = g;
        this.colorPalette_B = b;
        this.paletteColor = new Color(this.colorPalette_R, this.colorPalette_G, this.colorPalette_B);
    }
    drawColorPalette(color) {
        var gradient = this.contextColorPalette.createLinearGradient(0, 0, 255, 0);
        gradient.addColorStop(0.02, "white");
        gradient.addColorStop(0.98, color);
        this.contextColorPalette.fillStyle = gradient;
        this.contextColorPalette.fillRect(0, 0, 255, 255);

        var gradient1 = this.contextColorPalette.createLinearGradient(0, 0, 0, 255);
        gradient1.addColorStop(0.02, 'rgba(255, 255, 255, 0)');
        gradient1.addColorStop(0.98, "black");
        this.contextColorPalette.fillStyle = gradient1;
        this.contextColorPalette.fillRect(0, 0, 255, 255);
    }
    setColorSample(x, y) {
        this.colorSamplePositionX = x;
        this.colorSamplePositionY = y;
        this.colorSample_R = this.contextColorPalette.getImageData(this.colorSamplePositionX, this.colorSamplePositionY, 1, 1).data[0];
        this.colorSample_G = this.contextColorPalette.getImageData(this.colorSamplePositionX, this.colorSamplePositionY, 1, 1).data[1];
        this.colorSample_B = this.contextColorPalette.getImageData(this.colorSamplePositionX, this.colorSamplePositionY, 1, 1).data[2];
        this.sampleColor = new Color(this.colorSample_R, this.colorSample_G, this.colorSample_B);
    }
    drawColorSample(rgb) {
        this.contextColorPalette.beginPath();
        this.contextColorPalette.arc(this.colorSamplePositionX, this.colorSamplePositionY, 8, 0, 10 * Math.PI);
        this.contextColorPalette.strokeStyle = "white";
        this.contextColorPalette.fillStyle = rgb;
        this.contextColorPalette.lineWidth = 6;
        this.contextColorPalette.stroke();
        this.contextColorPalette.fill();
    }
    setColorAsideElements(color) {
        this.colorPrewiew.style.background = color.toRgb();
        this.rgbText.value = color.toRgb();
        this.hexText.value = color.toHex();
        this.hslText.value = color.toHsl();
        this.numberText.value = color.toNumber();
    }
    addListeners() {
        this.colorChanger.addEventListener("change", function() { this.runColorChanger(parseInt(this.colorChanger.value)); }.bind(this));
        this.colorPalette.addEventListener('click', function(e) { this.clickedColor(e); }.bind(this));
    }
    runColorChanger(colorChangerPosition) {
        let r, g, b;
        if (colorChangerPosition <= 255) {
            r = 255;
            g = 0;
            b = colorChangerPosition;
        }
        if ((255 < colorChangerPosition) && (colorChangerPosition <= 500)) {
            r = 500 - colorChangerPosition;
            g = 0;
            b = 255;
        }
        if ((500 < colorChangerPosition) && (colorChangerPosition <= 750)) {
            r = 0;
            g = colorChangerPosition - 500;
            b = 255;
        }
        if ((750 < colorChangerPosition) && (colorChangerPosition <= 1000)) {
            r = 0;
            g = 255;
            b = 1000 - colorChangerPosition;
        }
        if ((1000 < colorChangerPosition) && (colorChangerPosition <= 1250)) {
            r = colorChangerPosition - 1000;
            g = 255;
            b = 0;
        }
        if ((1250 < colorChangerPosition) && (colorChangerPosition <= 1500)) {
            r = 255;
            g = 1500 - colorChangerPosition;
            b = 0;
        }
        this.setColorPaletteColor(r, g, b);
        this.drawColorPalette(this.paletteColor.toRgb());

        this.setColorSample(this.colorSamplePositionX, this.colorSamplePositionY);
        this.drawColorSample(this.sampleColor.toRgb());
        this.setColorAsideElements(this.sampleColor);
    }
    clickedColor(e) {
        this.drawColorPalette(this.paletteColor.toRgb());
        this.setColorSample(e.offsetX, e.offsetY);
        this.drawColorSample(this.sampleColor.toRgb());
        this.setColorAsideElements(this.sampleColor);
    }
}