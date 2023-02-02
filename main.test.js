import { capitalize, reverseString, Calculator, caesarCipher, analyzeArray } from './main';

const calc = new Calculator();

test('Capitalize 1', () => {
    expect(capitalize("atilay")).toBe("Atilay");
})

test('Capitalize 2', () => {
    expect(capitalize("hEyYo")).toBe("HEyYo");
})

test('Reverse 1', () => {
    expect(reverseString("reverse")).toBe("esrever");
})

test('Reverse 2', () => {
    expect(reverseString("GA LA TA SA RAY")).toBe("YAR AS AT AL AG");
})

test('Calculator Addition', () => {
    expect(calc.add(69, 420)).toBe(489);
})

test('Calculator Subtraction', () => {
    expect(calc.subtract(69, 420)).toBe(-351);
})

test('Calculator Multiplication', () => {
    expect(calc.multiply(69, 420)).toBe(28980);
})

test('Calculator Division', () => {
    expect(calc.divide(1500, 15)).toBe(100);
})

test('Caesar Cipher 1', () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe("bcdefghijklmnopqrstuvwxyza");
})

test('Caesar Cipher 2', () => {
    expect(caesarCipher("defend the east wall of the castle", 1)).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
})

test('Caesar Cipher 3', () => {
    expect(caesarCipher("If he had anything confidential to say !!", 6)).toBe("Ol nk ngj gteznotm iutlojktzogr zu yge !!");
})

test('Caesar Cipher 4', () => {
    expect(caesarCipher("Atilay will change the world ;)))))))", 0)).toBe("Atilay will change the world ;)))))))");
})

test('Analyze Array Object 1', () => {
    expect(analyzeArray([1, 99, 123, 523, 4, 79])).toEqual(expect.objectContaining( { 
        average: 138,
        min: 1,
        max: 523,
        length: 6,
    }));
})

test('Analyze Array Object 2', () => {
    expect(analyzeArray([932, 73, 1522, 123312, 244, 10, 7, 998])).toEqual(expect.objectContaining( {
        average: 15887,
        min: 7,
        max: 123312,
        length: 8,
    }));
})

 