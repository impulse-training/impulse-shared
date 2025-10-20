/**
 * Checks if any of the specified fields have changed between two objects
 *
 * @param dataBefore The object state before changes
 * @param dataAfter The object state after changes
 * @param fieldPaths Field paths to check (can be nested paths, e.g. "foo.bar.wizz")
 * @returns True if any of the specified fields have changed
 */
export declare function fieldChanged<T extends Record<string, any>>(dataBefore?: T, dataAfter?: T, ...fieldPaths: Array<string>): boolean;
