class Color {
    constructor() {
        this.color = "";
        this.hsl = "";
        this.hex = "";
        this.rgb = "";
        this.number = "";

        for (let value of arguments) {
            this.color += value + ",";
        }

        this.color = this.color.substr(0, (this.color.length - 1)); //usówamy ostatni przecinek

        if (this.color.toString().indexOf(",") != -1)
            if (this.color.toString().indexOf("%") == -1) { //czy konstruktor to rgb
                this.rgb = this.color;
            }
        if (this.color.toString().indexOf(",") == -1)
            if (this.color.toString().indexOf("#") == -1) { //czy konstruktor to number
                this.number = this.color;
            }
        if (this.color.toString().indexOf("%") != -1) { //czy konstruktor to hsl
            this.hsl = this.color;
        }
        if (this.color.toString().indexOf("#") != -1) { //czy konstruktor to hex
            this.hex = this.color;
        }
    }

    toHsl() {
        if (this.hsl != "") {
            return this.hsl;
        }
        if (this.hex != "") {
            this.color = this.hexToRgb();
            return this.rgbToHsl();
        }
        if (this.rgb != "") {
            return this.rgbToHsl();
        }
        if (this.number != "") {
            this.color = this.numberToRgb();
            return this.rgbToHsl();
        }
    }
    toRgb() {
        if (this.hsl != "") {
            return this.hslToRgb();
        }
        if (this.hex != "") {
            return this.hexToRgb();
        }
        if (this.rgb != "") {
            return this.rgb;
        }
        if (this.number != "") {
            return this.numberToRgb();
        }
    }
    toHex() {
        if (this.hsl != "") {
            this.color = this.hslToRgb();
            return this.rgbToHex();
        }
        if (this.hex != "") {
            return this.hex;
        }
        if (this.rgb != "") {
            return this.rgbToHex();
        }
        if (this.number != "") {
            return this.numberToHex();
        }
    }
    toNumber() {
        if (this.hsl != "") {
            this.color = this.hslToRgb();
            return this.rgbToNumber();
        }
        if (this.hex != "") {
            return this.hexToNumber();
        }
        if (this.rgb != "") {
            return this.rgbToNumber();
        }
        if (this.number != "") {
            return this.number;
        }
    }

    numberToRgb() {
        var hex = parseInt(this.number).toString(16); //numberToHex
        var ancillaryVariable;
        var rgb = "";
        var j = 0;
        for (var i = 0; i < 3; i++) {
            ancillaryVariable = parseInt(hex.substr(j, 2), 16);
            rgb += ancillaryVariable + ", ";
            j += 2;
        }
        rgb = rgb.substr(0, (rgb.length - 2)); //usuwam ostatni przecinek i spację
        return rgb;
    }
    rgbToHsl() {
        var numbersRgb = this.color.split(',');
        var r = numbersRgb[0] / 255;
        var g = numbersRgb[1] / 255;
        var b = numbersRgb[2] / 255;
        var cmax = Math.max(r, g, b);
        var cmin = Math.min(r, g, b);
        var delta = cmax - cmin;
        var l = (cmax + cmin) / 2;
        var s, h, hsl;

        if (delta == 0) {
            s = 0;
            h = 0;
        } else {
            s = delta / (1 - Math.abs(2 * l - 1));
        }

        if (cmax === r) {
            h = (60 / 100) * (((g - b) / delta) % 6);
        }
        if (cmax === g) {
            h = (60 / 100) * (((b - r) / delta) + 2);
        }
        if (cmax === b) {
            h = (60 / 100) * (((r - g) / delta) + 4);
        }
        l = Math.round(100 * l) + "%";
        s = Math.round(100 * s) + "%";
        h = Math.round(h * 100);
        hsl = h + "," + s + "," + l;
        return hsl;
    }
    hexToNumber() {
        var h = parseInt(this.hex.substr(1), 16);
        return h;
    }
    hexToRgb() {
        var ancillaryVariable;
        var rgb = "";
        var j = 1;
        for (var i = 0; i < 3; i++) {
            ancillaryVariable = parseInt(this.hex.substr(j, 2), 16);
            rgb += ancillaryVariable + ", ";
            j += 2;
        }
        rgb = rgb.substr(0, (rgb.length - 2));
        return rgb;
    }
    rgbToNumber() {
        var hex = this.rgbToHex();
        var number = parseInt(hex.substr(1), 16);
        return number;
    }
    rgbToHex() {
        var hex = "#";
        var numbersRgb = this.color.split(',');
        for (let value of numbersRgb) {
            hex += parseInt(value).toString(16);
        }
        return (hex);
    }

    hslToRgb() {
        var r, b, g, rgb;
        var numbersHsl = this.hsl.replace(/%/g, ""); //usówamy procenty
        numbersHsl = numbersHsl.split(',');
        var h = numbersHsl[0];
        var s = numbersHsl[1] / 100;
        var l = numbersHsl[2] / 100;
        var c = ((1 - Math.abs(2 * l - 1)) * s);
        var x = c * (1 - Math.abs((h / 60) % 2 - 1));
        var m = l - c / 2;

        if (0 <= h && h <= 60) {
            r = c;
            g = x;
            b = 0;
        }
        if (60 <= h && h <= 120) {
            r = x;
            g = c;
            b = 0;
        }
        if (120 <= h && h <= 180) {
            r = 0;
            g = c;
            b = x;
        }
        if (180 <= h && h <= 240) {
            r = 0;
            g = x;
            b = c;
        }
        if (240 <= h && h <= 300) {
            r = x;
            g = 0;
            b = c;
        }
        if (300 <= h && h <= 360) {
            r = c;
            g = 0;
            b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
        rgb = r + ", " + g + ", " + b;
        return rgb;
    }
    numberToHex() {
        var number = parseInt(this.number).toString(16);
        return number;
    }


}


const c = new Color('#ff9a1f');
console.log(c.toRgb());
console.log(c.toHex());
console.log(c.toNumber());
console.log(c.toHsl());
const d = new Color(33, "100%", "56%");
console.log(d.toHsl());
console.log(d.toRgb());
console.log(d.toHex());
console.log(d.toNumber());
const e = new Color(255, 154, 31);
console.log(e.toNumber());
console.log(e.toHsl());
console.log(e.toRgb());
console.log(e.toHex());
const f = new Color(16751135);
console.log(f.toHex());
console.log(f.toNumber());
console.log(f.toHsl());
console.log(f.toRgb());