/* global describe, it, require */

const assert = require('assert');
const { createAssociativeArray } = require('../funkcje/zad4');

describe('zad4 - createAssociativeArray', function() {
    it('return associative array with repeat elements', function() {
        const result = createAssociativeArray(['a', 5, 1, 7, 5, 'a', 1, 4, 5, 7, 5, 'b', 5, 'a', 1]);

        assert.deepEqual(result, { 1: 3, 4: 1, 5: 5, 7: 2, 'a': 3, 'b': 1 });
    });
});