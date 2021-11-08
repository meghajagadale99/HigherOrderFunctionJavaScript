const filter = require('./filter');

describe('filter', () => {

    it('should return empty array if provided array is empty', () => {
        expect(filter([], "true")).toEqual([]);
    });

    it('should return same array if array is provided with filter as true', () => {
        expect(filter([1,2,3], "true")).toEqual([1,2,3]);
    });

    it('should return empty array if array is provided with filter as false', () => {
        expect(filter([1,2,3], "false")).toEqual([]);
    });

    it('should return array of element grater than two if x>1 filter is applied', () => {
        expect(filter([1,2,3], "x>1")).toEqual([2,3]);
    });
})