const filter = require('./filter');

describe('filter', () => {

    it('should return empty array if provided array is empty', () => {
        expect(filter([], "true")).toEqual([]);
    });

    it('should return same array if array is provided with filter as true', () => {
        expect(filter([1,2,3], "true")).toEqual([1,2,3]);
    });
})