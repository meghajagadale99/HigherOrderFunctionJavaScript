const reduce = require('./reduce');

describe('reduce', () => {

    it ('should return undefine if given array is empty, (x,y) => x+y',()=>{
        expect(reduce([], (x,y) => x+y)).toEqual(undefined);
    })
})