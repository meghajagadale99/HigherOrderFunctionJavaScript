const { cube, map, identity } = require('../src/map');

describe('map', () => {
    it('should return empty array if given empty array to map in cube', () => {
        expect(map([], cube)).toEqual([]);
    });
    
    it('should return same array if given identity as param in map along with array', () => {
        expect(map([1, 2, 3], identity)).toEqual([1, 2, 3]);
    });

    it('should return cube array if given cube as param in map along with array', () => {
        expect(map([1, 2, 3], cube)).toEqual([1, 8, 27]);
    });

})