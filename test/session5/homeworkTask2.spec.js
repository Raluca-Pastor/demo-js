const { expect } = require("chai");
const { wordsLenghtInfo } = require("../../src/session5");

const TEST_DATA = {
  input:
    "If I want to improve my skills, I need to practice. This is a good plan.",
  expected_output: {
    1: ["I", "a"],
    2: ["If", "to", "my", "is"],
    4: ["want", "need", "This", "good", "plan"],
    6: ["skills"],
    7: ["improve"],
    8: ["practice"],
  },
};

describe("test homeworkTask2", () => {
  it("should return wordsLenghtInfo", () => {
    const outputKeys = Object.keys(wordsLenghtInfo(TEST_DATA.input));
    expect(outputKeys).to.deep.equal(Object.keys(TEST_DATA.expected_output));
  });
});
