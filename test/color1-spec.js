/* global describe, it, require */

const assert = require('assert');
const { Color } = require('../funkcje/color1');
const hex = new Color('#ff9a1f');
const hsl = new Color(243, '100%', '56%');
const rgb = new Color(161, 155, 75);
const number = new Color(10111904);

describe('color1 - toRgb', function() {
    it('converts to RGB', function() {
        const hexToRgb = hex.toRgb();
        assert.equal(hexToRgb, "rgb(255,154,31)");
        const hslToRgb = hsl.toRgb();
        assert.equal(hslToRgb, "rgb(42,31,255)");
        const rgbToRgb = rgb.toRgb();
        assert.equal(rgbToRgb, "rgb(161,155,75)");
        const numberToRgb = number.toRgb();
        assert.equal(numberToRgb, "rgb(154,75,160)");
    });
});
describe('color1 - toHex', function() {
    it('converts to HEX', function() {
        const hexToHex = hex.toHex();
        assert.equal(hexToHex, "hex(#ff9a1f)");
        const hslToHex = hsl.toHex();
        assert.equal(hslToHex, "hex(#2a1fff)");
        const rgbToHex = rgb.toHex();
        assert.equal(rgbToHex, "hex(#a19b4b)");
        const numberToHex = number.toHex();
        assert.equal(numberToHex, "hex(#9a4ba0)");
    });
});
describe('color1 - toNumber', function() {
    it('converts to Number', function() {
        const hexToNumber = hex.toNumber();
        assert.equal(hexToNumber, "number(16751135)");
        const hslToNumber = hsl.toNumber();
        assert.equal(hslToNumber, "number(2760703)");
        const rgbToNumber = rgb.toNumber();
        assert.equal(rgbToNumber, "number(10591051)");
        const numberToNumber = number.toNumber();
        assert.equal(numberToNumber, "number(10111904)");
    });
});
describe('color1 - toHsl', function() {
    it('converts to Hsl', function() {
        const hexToHsl = hex.toHsl();
        assert.equal(hexToHsl, "hsl(33,100%,56%)");
        const hslToHsl = hsl.toHsl();
        assert.equal(hslToHsl, "hsl(243,100%,56%)");
        const rgbToHsl = rgb.toHsl();
        assert.equal(rgbToHsl, "hsl(56,36%,46%)");
        const numberToHsl = number.toHsl();
        assert.equal(numberToHsl, "hsl(296,36%,46%)");
    });
});