const min = require('./min');

describe('min', () => {

    it('should return minimum number from given array', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });
})