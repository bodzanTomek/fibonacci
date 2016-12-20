/* global describe, it, require */

const assert = require('assert');
const { setArray } = require('../funkcje/zad2');

describe('setArray', function() {
    it('test1', function() {
        const result = setArray([1, 2, 3, 4, 5, 6, 7, 8]);

        assert.deepEqual(result, [1, 3, 5, 7]);
    });
});