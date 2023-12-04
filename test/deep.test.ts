import { describe, it, assert } from 'vitest';
import { DeepReadonly, DeepMutable } from '../src/deep';

describe('DeepReadonly and DeepMutable Types', () => {
    //* Test DeepReadonly
    it('DeepReadonly makes all properties readonly', async () => {
        type Input = { name: string; age: number; address: { city: string } };
        type ReadonlyInput = DeepReadonly<Input>;

        const obj: ReadonlyInput = { name: 'John', age: 25, address: { city: 'New York' } };

        //? Attempting to modify a readonly property should result in a compilation error.
        //? Uncommenting the line below should result in a compilation error.
        //? obj.address.city = 'Paris';
    });


    //* Test DeepMutable
    it('DeepMutable makes all properties mutable', async () => {
        type Input = { name: string; age: number; address: { city: string } };
        type MutableInput = DeepMutable<Input>;

        const obj: MutableInput = { name: 'John', age: 25, address: { city: 'New York' } };

        obj.address.city = 'Paris';

        assert.equal(obj.address.city, 'Paris');
    });
});
