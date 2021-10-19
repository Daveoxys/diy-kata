const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44,10)).toEqual('I should be there in 4.5 hours.');
    expect(reachDestination(33,10)).toEqual('I should be there in 3.5 hours.');
    expect(reachDestination(55,10)).toEqual('I should be there in 5.5 hours.');
    expect(reachDestination(88,10)).toEqual('I should be there in 9 hours.');
  });
});
