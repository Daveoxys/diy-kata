const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  it("returns Yes if booleanToWord is true", () => {
  expect(booleanToWord(true)).toBe("Yes");
  });

  it("retuns No if booleanToWord is false", () => {
  expect(booleanToWord(false)).toBe("No");
  });
  
});
