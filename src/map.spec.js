const map = require('./map')

describe('map', () => {
    it('should return empty array if given empty array to map in cube', () => {
        expect(map([], 'cube')).toEqual([]);
    });

})