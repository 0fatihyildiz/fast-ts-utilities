/**
 * `Nullable` type represents a type that can be either the specified type or null.
 * @example
 * type Name = Nullable<string>; // Name type can be either string or null.
 */
export type Nullable<T> = T | null;


/**
 * `Undefinable` type represents a type that can be either the specified type or undefined.
 * @example
 * type Age = Undefinable<number>; // Age type can be either number or undefined.
 */
export type Undefinable<T> = T | undefined;


/**
 * `Maybe` type represents a type that can be either the specified type, null, or undefined.
 * @example
 * type Result = Maybe<string>; // Result type can be either string, null, or undefined.
 */
export type Maybe<T> = T | null | undefined;