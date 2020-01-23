var assert = chai.assert;

let globalCounter = 0;

/* --- Begin Editable User Code -- */

// each instance of the counter should keep an internal tally
function counter() {
  return {
    add: function(increment) {
      globalCounter += increment;
    },
    retrieve: function() {
      return globalCounter;
    }
  };
}

/* -- End User Code -- */

/* -- Begin Tests (Do Not Change Test Code) -- */

describe("1 - counter", () => {
  it("each counter should work independently", function() {
    // first counter
    const c1 = counter();
    c1.add(2);
    c1.add(3);

    // second counter
    const c2 = counter();
    c2.add(4);
    c2.add(5);

    assert.equal(5, c1.retrieve()); // 2 + 3 should return 5
    assert.equal(9, c2.retrieve()); // 4 + 5 should return 9

    // Also make sure the global counter was not modified
    assert.equal(0, globalCounter);
  });
});

/* -- End Tests -- */
