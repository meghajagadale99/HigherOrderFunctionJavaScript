const tail = require('./tail')

describe('tail', () => {

    it('List of number should return last element', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('List of number should return [] when empty', () => {
        expect(tail([])).toEqual([]);
    });

});