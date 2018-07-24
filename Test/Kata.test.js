const add = require('../src/kata');

test('should return 0 if empty string provided', () => {
    expect(add('')).toBe(0);
});

test('should return single provided element', () => {
    expect(add('1')).toBe(1);
});

test('should return expected sum', () => {
    expect(add('1, 2, 3')).toBe(6);
});

test('should accept \n as separator', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('should accept a custom separator', () => {
    expect(add('//;\n1,2;3')).tobBe(6);
});

// 'should accept a custom separator'
// '//;\n1,2;3'

// 'should throw negative provided int'
// '-5,2,-10,9'

// Write the tests using the above information. You have 3 tests to write.

// npm run test