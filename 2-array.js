var assert = chai.assert;

/* --- Begin User Code -- */

function arrayCreator(n) {
    // array of functions which return the value for that element
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = () => i;
    }

    return arr;
}

/* -- End User Code -- */

/* -- Begin Tests -- */

describe('2 - array', () => {
   
    it('array function should return proper values', function () {
        var arr = arrayCreator(5);

        assert.equal(arr[0](), 0);
        assert.equal(arr[3](), 3);
    });
});

/* -- End Tests -- */
