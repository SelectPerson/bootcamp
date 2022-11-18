const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
    expect(result).toBeDefined();
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
    expect(result).not.toBeNaN();
});