const filter = require('./filter');

describe('filter', () => {

    it('should return empty array if provided array is empty', () => {
        expect(filter([], "true")).toEqual([]);
    });
})