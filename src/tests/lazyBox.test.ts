import { LazyBox } from '../lib/functors/LazyBox';

test('Test Either functor with positive value', () => {
  const result = LazyBox(() => ' 8')
    .map((x) => x.trim())
    .map(x => x + 'limbs')
    .map(x => x.split(''))
    .map(x => {
      const [first] = x;
      return first;
    }).fold(x  => parseInt(x, 10));

  expect(result).toEqual(8);
});
