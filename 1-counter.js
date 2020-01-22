var assert = chai.assert;

/* --- Begin User Code -- */
let globalCounter = 0;

function counter() {
    return {
        add: function (increment) { globalCounter += increment; },
        retrieve: function () { return globalCounter; }
    }
}

/* -- End User Code -- */

/* -- Begin Tests -- */

describe('1 - counter', () => {
    it('global counter should not interfere with result', function () {

        const c = counter();
        c.add(2);
        c.add(3);

        globalCounter += 4;

        const val = c.retrieve(); // 2 + 3 should return 5

        assert.equal(val, 5);
        assert.equal(globalCounter, 4);
    });
});

/* -- End Tests -- */