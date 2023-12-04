import { ReadOnly ,DeepMutable } from '../dist'

const readOnlyObj: ReadOnly<DeepMutable<{
  a: number;
  b: {
    c: number;
  };
}>> = {
  a: 1,
  b: {
    c: 2,
  },
};
