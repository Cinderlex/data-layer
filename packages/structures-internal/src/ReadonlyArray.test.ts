import { expect, test } from 'vitest';
import { count } from './ReadonlyArray';

test('count', () => {
    expect(count([1, 2, 3, 4], value => value % 2 === 0)).toBe(2);
});
