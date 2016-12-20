/* global describe, it, require */

const assert = require('assert');
const { mapArray, everyElementInArray } = require('../funkcje/zad5');

describe('mapArray', function() {
    it('test1', function() {
        const fn = index => index * 3; // Lambda - ES6.
        const result = mapArray([1, 2, 3], fn);

        assert.deepEqual(result, [3, 6, 9]);
    });

    it('test2', function() {
        const fn = index => index + 10; // Lambda - ES6.
        const result = mapArray([1, 2, 3], fn);

        assert.deepEqual(result, [11, 12, 13]);
    });
});

describe('everyElementInArray', () => {
    it('test1', () => {
        const condition = x => x > 0;
        const result = everyElementInArray([1, 2], condition);

        assert.equal(result, true);
    })

    it('test2', () => {
        const condition = x => x > 0;
        const result = everyElementInArray([1, -2], condition);

        assert.equal(result, false);
    })
})

/**
 * node.js - require(), assert
 * mocha - testing framework
 * tdd - test driven development
 */