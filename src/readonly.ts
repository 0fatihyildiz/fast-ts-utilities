/**
 * `ReadOnly` type makes all properties of a type readonly.
 * @example
 * type Person = { name: string; age: number };
 * const readOnlyPerson: ReadOnly<Person> = { name: 'John', age: 30 };
 * readOnlyPerson.age = 31; // Compilation error - Attempting to modify a readonly property.
 */
export type ReadOnly<T> = { readonly [K in keyof T]: T[K] };


/**
 * `Mutable` type makes all properties of a type mutable.
 * @example
 * type ReadonlyPerson = { readonly name: string; readonly age: number };
 * const mutablePerson: Mutable<ReadonlyPerson> = { name: 'John', age: 30 };
 * mutablePerson.age = 31; // No compilation error - Properties are mutable.
 */
export type Mutable<T> = { -readonly [K in keyof T]: T[K] };
