import { Either } from '../lib/Either';

test('Test Either functor with positive value', () => {
  const y = '4';
  const expected = 8;
  const x = Either(parseInt(y))
    .map(value => value * 2);

  expect(x.fold(_ => _, value => value)).toBe(expected);
});

test('Test Either functor with negative value', () => {
  const y = '';
  const x = Either(parseInt(y))
    .map(value => value * 2);

  expect(x.fold(_ => _, value => value)).toBeFalsy();
});

test('test 1', () => {
  const testM = Either('aum');
  const test2 = testM
    .map(v => `${v}...`)

  expect(test2.fold(_ => _, v => v)).toEqual('aum...');
});