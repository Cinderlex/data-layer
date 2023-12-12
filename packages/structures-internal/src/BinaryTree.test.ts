import { expect, test } from 'vitest';
import { BinaryTree, count } from './BinaryTree';

test('count', () => {
    const tree: BinaryTree<number> = {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 2,
                left: null,
                right: null,
            },
            right: {
                value: 4,
                left: null,
                right: null,
            },
        },
        right: {
            value: 8,
            left: {
                value: 6,
                left: null,
                right: null,
            },
            right: {
                value: 9,
                left: null,
                right: null,
            },
        },
    };
    expect(count(tree, (value, depth) => (value + depth) % 2 === 0)).toBe(4);
});
