import { describe, it, assert } from 'vitest';
import { Maybe, Nullable, Undefinable } from '../src/nullable';

describe('Nullable, Undefinable and Maybe Types', () => {
    //* Test Nullable
    it('Allows the specified type or null', async () => {
        type Name = Nullable<string>;
        const validName: Name = 'John';
        const nullName: Name = null;

        assert.equal(validName, 'John');
        assert.equal(nullName, null);
    });


    //* Test Undefinable
    it('Allows the specified type or undefined', async () => {
        type Age = Undefinable<number>;
        const validAge: Age = 25;
        const undefinedAge: Age = undefined;

        assert.equal(validAge, 25);
        assert.equal(undefinedAge, undefined);
    });


    //* Test Maybe
    it('Allows the specified type, null, or undefined', async () => {
        type Result = Maybe<string>;
        const validResult: Result = 'Success';
        const nullResult: Result = null;
        const undefinedResult: Result = undefined;

        assert.equal(validResult, 'Success');
        assert.equal(nullResult, null);
        assert.equal(undefinedResult, undefined);
    });
});
