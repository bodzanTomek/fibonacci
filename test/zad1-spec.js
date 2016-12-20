/* global describe, it, require */

const assert = require('assert');
const { getKeys } = require('../funkcje/zad1');

describe('getKeys', function() {
    it('test1', function() {
        const result = getKeys({
            imie: 'Jan',
            nazwisko: 'Kowalski',
            wiek: 31,
            kobieta: false,
        });

        assert.deepEqual(result, ['imie', 'nazwisko', 'wiek', 'kobieta']);
    });

});