import { describe, it, assert } from 'vitest';
import { PartialProperties, RequiredProperties } from '../src/partial';

describe('PartialProperties and RequiredProperties Types', () => {
    //* Test PartialProperties
    it('Makes all properties optional', async () => {
        type Person = { name: string; age: number };
        type PartialPerson = PartialProperties<Person>;

        const partialPerson: PartialPerson = { name: 'John' };

        assert.equal(partialPerson.name, 'John');
        assert.equal(partialPerson.age, undefined);
    });


    //* Test RequiredProperties
    it('Makes all properties required', async () => {
        type Person = { name?: string; age?: number };
        type RequiredPerson = RequiredProperties<Person>;

        const requiredPerson: RequiredPerson = { name: 'John', age: 30 };

        assert.equal(requiredPerson.name, 'John');
        assert.equal(requiredPerson.age, 30);
    });
});