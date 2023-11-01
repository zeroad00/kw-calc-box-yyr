const { test, expect } = require("@jest/globals");
const lib = require("./lib");

// test average number
test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

// test prime number
test("prime([3, 4]) should be true", () => {
    expect(lib.prime([3, 4])).toBe(true);
});
test("prime(8) should be false", () => {
    expect(lib.prime(8)).toBe(false);
});

// test calculate factorial number
test("factorial([3, 5]) should be 6", () => {
    expect(lib.fact(3)).toBe(6);
});
test("factorial(5) should be 120", () => {
    expect(lib.fact(5)).toBe(120);
});
test("factorial(20) should be false", () => {
    expect(lib.fact(20)).toBe(false);
});