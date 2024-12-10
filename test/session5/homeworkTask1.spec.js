const { expect } = require("chai");
const { factors } = require("../../src/session5");

const TEST_DATA = [
  [100, [1, 2, 4, 5, 10, 20, 25, 50, 100]],
  [25, [1, 5, 25]],
  [99, [1, 3, 9, 11, 33, 99]],
  [57, [1, 3, 19, 57]],
];

describe("test homeworkTask1", () => {
  for (let i = 0; i < TEST_DATA.length; i++) {
    it(`should return ${TEST_DATA[i][1]} for ${TEST_DATA[i][0]}`, () => {
      expect(factors(TEST_DATA[i][0])).to.have.members(TEST_DATA[i][1]);
    });
  }
});
