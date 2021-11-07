const head = require('./head');

describe('Head', () => {

    it('Number list should return first element', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('Number list should return undefine when empty', () => {
        expect(head([])).toEqual(undefined);
    })
    
})