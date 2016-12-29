/* global describe, it, require */

const assert = require('assert');
const { sort } = require('../funkcje/zad6');

describe('zad6 - sort', function() {
    it('bubble sort', function() {
        const result = sort([2, 4, 11, 7, 1, 9, 21, 6, 3, 8]);

        assert.deepEqual(result, [1, 2, 3, 4, 6, 7, 8, 9, 11, 21]);
    });
});