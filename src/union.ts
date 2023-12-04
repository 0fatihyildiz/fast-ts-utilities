/**
 * `UnionToIntersection` type generates an intersection type from a union.
 * @example
 * type Combined = UnionToIntersection<{ a: string } | { b: number }>;
 * // Combined type is { a: string } & { b: number }.
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;


/**
 * `FlattenUnion` type reduces all properties within a union to a single intersection type.
 * @example
 * type Flattened = FlattenUnion<{ a: string } | { b: number }>;
 * // Flattened type is { a: string; b: number }.
 */
export type FlattenUnion<T> = T extends infer U ? (U extends any ? { [K in keyof U]: U[K] } : never) : never;
