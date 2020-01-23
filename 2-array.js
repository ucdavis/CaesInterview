var assert = chai.assert;

/* --- Begin Editable User Code -- */

// returns an array of size n
// each element is a function which returns the index of that element
function arrayCreator(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = () => i;
  }

  return arr;
}

/* -- End User Code -- */

/* -- Begin Tests (Do Not Change Test Code) -- */

describe("2 - array", () => {
  it("array function should return proper index values", function() {
    var arr = arrayCreator(5);

    assert.equal(arr[0](), 0);
    assert.equal(arr[3](), 3);
  });
});

/* -- End Tests -- */
