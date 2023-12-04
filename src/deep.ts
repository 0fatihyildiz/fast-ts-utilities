/**
 * `DeepReadonly` type makes all properties of a nested object and its sub-objects readonly.
 * This ensures that the entire structure is deeply immutable.
 * @example
 * type ImmutablePerson = DeepReadonly<{ name: string; address: { city: string } }>;
 * const person: ImmutablePerson = { name: 'John', address: { city: 'New York' } };
 * person.address.city = 'Paris'; // Compilation error - Attempting to modify a readonly property.
 */
export type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> };


/**
 * `DeepMutable` type makes all properties of a nested object and its sub-objects mutable.
 * This allows modifications to the entire structure.
 * @example
 * type MutablePerson = DeepMutable<{ name: string; address: { city: string } }>;
 * const person: MutablePerson = { name: 'John', address: { city: 'New York' } };
 * person.address.city = 'Paris'; // No compilation error - Properties are mutable.
 */
export type DeepMutable<T> = { -readonly [K in keyof T]: DeepMutable<T[K]> };