/* global describe, it, require */

const assert = require('assert');
const { getKeys } = require('../funkcje/zad1');

describe('zad1 - getKeys', function() {
    it('return keys from object', function() {
        const result = getKeys({
            imie: 'Jan',
            nazwisko: 'Kowalski',
            wiek: 31,
            kobieta: false,
        });

        assert.deepEqual(result, ['imie', 'nazwisko', 'wiek', 'kobieta']);
    });

});