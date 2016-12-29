/* global describe, it, require */

const assert = require('assert');
const { mapArray, filterArray } = require('../funkcje/zad5');

describe('zad5 - mapArray', function() {
    it('function like map', function() {
        const fn = index => index * 3; // Lambda - ES6.
        const result = mapArray([1, 2, 3], fn);

        assert.deepEqual(result, [3, 6, 9]);
    });

    it('function like map', function() {
        const fn = index => index + 10; // Lambda - ES6.
        const result = mapArray([1, 2, 3], fn);

        assert.deepEqual(result, [11, 12, 13]);
    });
});

describe('zad5 - filterArray', () => {
    it('function like filter', () => {
        const condition = x => x > 0;
        const result = filterArray([1, 2], condition);

        assert.equal(result, true);
    })

    it('function like filter', () => {
        const condition = x => x > 0;
        const result = filterArray([1, -2], condition);

        assert.equal(result, false);
    })
})