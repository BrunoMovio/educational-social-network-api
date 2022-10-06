import { toPairs } from '../object.utils';

describe('toPairs', () => {
  it('should imitate Object.entries behavior', () => {
    const obj = {
      a: 1,
      b: 2,
    };

    const pairs = toPairs(obj);

    expect(pairs).toEqual([
      ['a', 1],
      ['b', 2],
    ]);
  });
});
