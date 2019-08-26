import { quote } from "./quote";

describe("Quote", () => {
  it("should create an instance", () => {
    expect(new quote("", "", "", new Date())).toBeTruthy();
  });
});
