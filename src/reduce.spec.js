const reduce = require('./reduce');

describe('reduce', () => {

    it('should return undefine if given array is empty, (x,y) => x+y', () => {
        expect(reduce([], (x, y) => x + y)).toEqual(undefined);
    })

    it('should return 10 if given array is [5,5 ], (x,y) => x+y', () => {
        expect(reduce([5, 5], (x, y) => x + y)).toEqual(10);
    })

})