export type BinaryTree<T> = null | {
    readonly value: T;
    readonly left: BinaryTree<T>;
    readonly right: BinaryTree<T>;
};

export const count = <T>(
    tree: BinaryTree<T>,
    predicate: (value: T, depth: number, tree: BinaryTree<T>) => boolean
): number => {
    if (tree === null) {
        return 0;
    }
    let result = 0;
    const nodes: { pointer: Exclude<BinaryTree<T>, null>; depth: number }[] = [{ pointer: tree, depth: 0 }];
    while (nodes.length > 0) {
        const { pointer, depth } = nodes.pop()!;
        if (predicate(pointer.value, depth, tree)) {
            result++;
        }
        if (pointer.left !== null) {
            nodes.push({ pointer: pointer.left, depth: depth + 1 });
        }
        if (pointer.right !== null) {
            nodes.push({ pointer: pointer.right, depth: depth + 1 });
        }
    }
    return result;
};
