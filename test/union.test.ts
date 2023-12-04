import { describe, it, assert } from 'vitest';
import { UnionToIntersection, FlattenUnion } from '../src/union';

describe('UnionToIntersection and FlattenUnion Types', () => {
    //* Test UnionToIntersection
    it('Generates an intersection type from a union', async () => {
        type Combined = UnionToIntersection<{ a: string } | { b: number }>;

        const combined: Combined = { a: 'Hello', b: 42 };
        assert.equal(combined.a, 'Hello');
        assert.equal(combined.b, 42);
    });


    //* Test FlattenUnion
    it('Reduces all properties within a union to a single intersection type', async () => {
        type Flattened = FlattenUnion<{ a: string } | { b: number }>;
        const flattened: Flattened = { a: 'Hello', b: 42 };

        if ("a" in flattened) {
            assert.equal(flattened.a, 'Hello');
        }

        if ("b" in flattened) {
            assert.equal(flattened.b, 42);
        }
    });

});
