const {filter,filterUpperCase} = require('./filter');

describe('filter', () => {

    it('should return empty array if provided array is empty', () => {
        expect(filter([], x => true)).toEqual([]);
    });

    it('should return same array if array is provided with filter as true', () => {
        expect(filter([1,2,3], x => true)).toEqual([1,2,3]);
    });

    it('should return empty array if array is provided with filter as false', () => {
        expect(filter([1,2,3], x => false)).toEqual([]);
    });

    it('should return array of element grater than two if x>1 filter is applied', () => {
        expect(filter([1,2,3], x => x>1)).toEqual([2,3]);
    });

    // it('should return array of element containing uppercase if uppercase filter is applied', () => {
    //     expect(filter(['a','B','c','D'], filterUpperCase)).toEqual(['B','D']);
    // });
    
})