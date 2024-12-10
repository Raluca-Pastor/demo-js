const { expect } = require("chai");
const { toBinary } = require("../../src/session5");

const TEST_DATA = [
  [3, "11"],
  [10, "1010"],
  [25, "11001"],
  [100, "1100100"],
];

describe.only("test homeworkTask3", () => {
  for (let i = 0; i < TEST_DATA.length; i++) {
    it(`should return ${TEST_DATA[i][1]} for ${TEST_DATA[i][0]}`, () => {
      console.log(toBinary(TEST_DATA[i][0]));
      expect(toBinary(TEST_DATA[i][0])).to.equal(TEST_DATA[i][1]);
    });
  }
});
