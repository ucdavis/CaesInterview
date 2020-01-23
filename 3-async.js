var assert = chai.assert;

/* --- Begin Editable User Code -- */

async function doubleOddNumberAsync(num) {
  // call doubleOddNumberPromise(num) using async/await
  // return the result, but if the method errors out return 0
}

/* -- End User Code -- */

/* -- Begin Tests (Do Not Change Test Code) -- */

describe("3 - Async", () => {
  it("should return the result or 0", async function() {
    const even = await doubleOddNumberAsync(10); // even number, should return zero
    const odd = await doubleOddNumberAsync(9); // odd number, should return the doubled result

    assert.equal(even, 0);
    assert.equal(odd, 18);
  });
});

/* -- End Tests -- */

/* -- Private Functions, Do Not Modify -- */
function doubleOddNumberPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return num % 2 === 0 ? reject() : resolve(num * 2);
    }, 10);
  });
}
