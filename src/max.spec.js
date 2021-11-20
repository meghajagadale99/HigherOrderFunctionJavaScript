const max = require('./max');

describe('max', () => {

    it('should return maximum number from given array', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });
})