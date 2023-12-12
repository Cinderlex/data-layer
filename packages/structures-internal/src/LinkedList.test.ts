import { expect, test } from 'vitest';
import { count, fromArray } from './LinkedList';

test('count', () => {
    expect(count(fromArray([1, 2, 3, 4]), value => value < 4)).toBe(3);
});
