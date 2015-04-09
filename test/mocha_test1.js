var assert = require("assert");

describe('Array', function() {

    describe('#indexOf()', function() {

        it('Dovrebbe tornare -1 quando l\'elemento non è presente', function() {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });

    });

});
