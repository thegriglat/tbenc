import 'jest';
import { myLib } from './tbenc';

describe('myLib', () => {
  test('can add two numbers', () => {
    expect(myLib.add(1, 2)).toBe(3);
  });

  test('can subtract two numbers', () => {
    expect(myLib.subtract(1, 2)).toBe(-1);
  });

  test('can multiply two numbers', () => {
    expect(myLib.multiply(1, 2)).toBe(2);
  });

  test('can divide two numbers', () => {
    expect(myLib.divide(1, 2)).toBe(0.5);
  });
});
