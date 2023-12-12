export const count = <T>(
    array: ReadonlyArray<T>,
    predicate: (value: T, index: number, array: ReadonlyArray<T>) => boolean
): number => array.reduce((acc, value, index, array) => acc + (predicate(value, index, array) ? 1 : 0), 0);
