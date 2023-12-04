/**
 * `PartialProperties` type makes all properties of a type optional.
 * @example
 * type PartialPerson = PartialProperties<{ name: string; age: number }>;
 * const partialPerson: PartialPerson = { name: 'John' };
 */
export type PartialProperties<T> = { [K in keyof T]?: T[K] };


/**
 * `RequiredProperties` type makes all properties of a type required.
 * @example
 * type RequiredPerson = RequiredProperties<{ name?: string; age?: number }>;
 * const requiredPerson: RequiredPerson = { name: 'John', age: 30 };
 */
export type RequiredProperties<T> = { [K in keyof T]-?: T[K] };