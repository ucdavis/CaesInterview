var assert = chai.assert;

/* --- Begin User Code -- */

async function getOddNumberAsync(num) {
    // call getOddNumberPromise(num) using async/await
    // if the method errors out, return 0
}

/* -- End User Code -- */

/* -- Begin Tests -- */

describe('3 - Async', () => {
    it('should return the number or 0', async function () {
        const even = await getOddNumberAsync(10);
        const odd = await getOddNumberAsync(9);

        assert.equal(even, 0);
        assert.equal(odd, 9)
    });
});

/* -- End Tests -- */

/* -- Private Functions, Do Not Modify -- */
function getOddNumberPromise(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return num % 2 === 0 ? reject() : resolve(num);
        }, 10);
    });
}