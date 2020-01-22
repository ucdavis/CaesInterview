var assert = chai.assert;

// Unit Test #3
function isInt(n) {
    // how to determine if a number is an integer in JS? Discuss options.
}

/* -- End User Code -- */

/* -- Begin Tests -- */

describe('4 - integer', () => {
    it('should find integers', function () {
        assert.isOk(isInt(12));
        assert.isNotOk(isInt(12.2));
    });
});

/* -- End Tests -- */