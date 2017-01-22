//Klasa Color.

// Stwórz funkcje color, która będzie mogła konwertować kolory na inne formaty.
// konstruktor może przyjąć jeden z 4 formatów i zamienić na 4 formaty.

// Przykłady użycia:
// const c = new Color( '#ff0000' )'
// c.toRGB(); // zwraca 'rgba(255, 0, 0)'16
// c.toHSL() // zwraca 'hsl(0% 100% 50%)'
// c.toNumber() // zwraca 16711680 ( 255 * 256^2 )

class Color {
    constructor() {
        this.color = "";
        for (let value of arguments) {
            console.log(value);
            this.color += value + ",";
            console.log(this.color);
        }
        this.color = this.color.substr(0, (this.color.length - 1));
        this.color = this.color.replace(/%/g, "");
        console.log('konstruktor - ' + this.color + "    " + typeof(this.color));
    }

    hexToRGB() {
        var pom;
        var rgb = "";
        var j = 1;
        for (var i = 0; i < 3; i++) {
            pom = parseInt(this.color.substr(j, 2), 16);
            rgb += pom + ", ";
            j += 2;
        }
        rgb = rgb.substr(0, (rgb.length - 2));
        return rgb;
    }
    hexToNumber() {
        var h = parseInt(this.color.substr(1), 16);
        return h;
    }
    rgbToHex() {
        var wynik = "#";
        var liczbyrgb = this.color.split(',');
        for (let value of liczbyrgb) {
            wynik += parseInt(value).toString(16);
        }
        return (wynik);
    }
    rgbToNumber() {
        var wynik = this.rgbToHex();
        wynik = parseInt(wynik.substr(1), 16);
        return wynik;
    }
    numberToHex() {
        var wynik = parseInt(this.color).toString(16);
        return wynik;
    }
    numberToRgb() {
        var wynik = "#" + parseInt(this.color).toString(16); //numberToHex
        var pom;
        var rgb = "";
        var j = 1;
        for (var i = 0; i < 3; i++) {
            pom = parseInt(wynik.substr(j, 2), 16);
            rgb += pom + ", ";
            j += 2;
        }
        rgb = rgb.substr(0, (rgb.length - 2));
        return rgb;
    }
    rgbToHsl() {
        var liczbyrgb = this.color.split(',');
        var r = liczbyrgb[0] / 255;
        var g = liczbyrgb[1] / 255;
        var b = liczbyrgb[2] / 255;
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
    hslToRgb() {
        var r, b, g, rgb;
        var liczbyhsl = this.color.split(',');
        var h = liczbyhsl[0];
        var s = liczbyhsl[1] / 100;
        var l = liczbyhsl[2] / 100;
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

}

//const c = new Color('#ff9a1f');
// console.log(c.hexToRGB());
// console.log(c.hexToNumber());
//const d = new Color(43, "0%", "53%");
//const d = new Color(43, 0, 53);
// console.log(d.rgbToHex());
// console.log(d.rgbToNumber());
// console.log(d.rgbToHsl());
//const e = new Color(16751135);
// console.log(e.numberToHex());
// console.log(e.numberToRgb());
//console.log(d.hslToRgb());