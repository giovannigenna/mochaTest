var assert = require("assert");

describe('Array', function() {

    describe('#indexOf()', function() {

        it('Dovrebbe tornare -1 quando l\'elemento non è presente', function() {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });

    });

    describe('#join()', function() {

        it('Dovrebbe utilizzare la virgola come delimitatore di default', function() {
            assert.equal('1,2,3', [1,2,3].join());
            assert.equal('4,5,7', [4,5,7].join());
        });

    });

});
