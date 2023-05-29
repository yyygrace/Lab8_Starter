// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('accepts random phone number with parenthesis', () => {
    expect(functions.isPhoneNumber('(555)873-6782')).toBe(true);
});

test('accepts random phone number with dashes', () => {
    expect(functions.isPhoneNumber('738-376-2384')).toBe(true);
});

test('rejects invalid formatted phone number', () => {
    expect(functions.isPhoneNumber('6286386424')).toBe(false);
});

test('rejects commercial phone number', () => {
    expect(functions.isPhoneNumber('555-555-RENT')).toBe(false);
});

test('accepts Powell\'s email', () => {
    expect(functions.isEmail('tpowell2@ucsd.edu')).toBe(true);
});

test('accepts imaginary domain email', () => {
    expect(functions.isEmail('something@outlook.zz')).toBe(true);
});

test('rejects long domain name', () => {
    expect(functions.isEmail('thomas@ucsd.powell')).toBe(false);
});

test('rejects domains with numbers', () => {
    expect(functions.isEmail('grace@ucsd7.org')).toBe(false);
});

test('accepts random password', () => {
    expect(functions.isStrongPassword('aEd82omPOnz')).toBe(true);
});

test('accepts password', () => {
    expect(functions.isStrongPassword('password')).toBe(true);
});

test('rejects long password', () => {
    expect(functions.isStrongPassword('aEd82oshfkljhakfjlasmPOnz')).toBe(false);
});

test('rejects non alphanumeric password', () => {
    expect(functions.isStrongPassword('h@110W0rLD')).toBe(false);
});

test('accepts Christmas', () => {
    expect(functions.isDate('12/25/2023')).toBe(true);
});

test('accepts invalid date', () => {
    expect(functions.isDate('23/23/2023')).toBe(true);
});

test('rejects dash formatting', () => {
    expect(functions.isDate('1-1-2023')).toBe(false);
});

test('rejects year first', () => {
    expect(functions.isDate('2022/07/02')).toBe(false);
});

test('accepts red', () => {
    expect(functions.isHexColor('#FF0000')).toBe(true);
});

test('accepts 3 character', () => {
    expect(functions.isHexColor('#3FF')).toBe(true);
});

test('rejects 5 characters', () => {
    expect(functions.isHexColor('#FF000')).toBe(false);
});

test('rejects RGB', () => {
    expect(functions.isHexColor('252, 186, 3')).toBe(false);
});