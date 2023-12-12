export type LinkedList<T> = null | {
    readonly value: T;
    readonly next: LinkedList<T>;
};

export const fromArray = <T>(array: ReadonlyArray<T>): LinkedList<T> => {
    if (array.length === 0) {
        return null;
    }
    let pointer: LinkedList<T> = null;
    for (let i = array.length - 1; i >= 0; i--) {
        pointer = { value: array[i]!, next: pointer };
    }
    return pointer;
};

export const count = <T>(
    list: LinkedList<T>,
    predicate: (value: T, index: number, list: LinkedList<T>) => boolean
): number => {
    let result = 0;
    let index = 0;
    let pointer = list;
    while (pointer !== null) {
        if (predicate(pointer.value, index, list)) {
            result++;
        }
        pointer = pointer.next;
        index++;
    }
    return result;
};
