import { describe, it, assert } from 'vitest';
import { ReadOnly, Mutable } from '../src/readonly';

describe('ReadOnly and Mutable Types', () => {
    //* Test ReadOnly
    it('Makes all properties readonly', async () => {
        type Person = { name: string; age: number };
        type ReadonlyPerson = ReadOnly<Person>;

        const readOnlyPerson: ReadonlyPerson = { name: 'John', age: 30 };

        assert.equal(readOnlyPerson.name, 'John');
        //? readOnlyPerson.age = 31; // Uncommenting this line should result in a compilation error.
    });


    //* Test Mutable
    it('Makes all properties mutable', async () => {
        type ReadonlyPerson = { readonly name: string; readonly age: number };
        type MutablePerson = Mutable<ReadonlyPerson>;

        const mutablePerson: MutablePerson = { name: 'John', age: 30 };

        assert.equal(mutablePerson.name, 'John');

        mutablePerson.age = 31;
        assert.equal(mutablePerson.age, 31);
    });
});
