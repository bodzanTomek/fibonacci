/* global describe, it, require */

const assert = require('assert');
const { sum4 } = require('../funkcje/zad8');

describe('zad8 - sum4', function() {
    it('sums up the arguments', function() {
        const result = sum4(1)(2)(3)(4, 5);

        assert.equal(result, 10);
    });
    it('sums up the arguments', function() {
        const result = sum4(1)(2, 6)(3, 5);

        assert.equal(result, 12);
    });
    it('sums up the arguments', function() {
        const result = sum4(1)(2)(3)(4);

        assert.equal(result, 10);
    });
});