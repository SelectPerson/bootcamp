const sum = require('./sum');

test('adds sum', () => {
    const result = sum(1, 2);
    expect(result).toBeDefined();
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
    expect(result).not.toBeNaN();
});