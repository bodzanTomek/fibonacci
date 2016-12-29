/* global describe, it, require */

const assert = require('assert');
const { compose } = require('../funkcje/zad7');

describe('zad7 - compose', function() {
    it('compose functions together and do it from left on given argument', function() {
        const fn1 = index => index + 1;
        const fn2 = index => index * 4;
        const result = compose(fn1, fn2)(3);

        assert.equal(result, 16);
    });
});