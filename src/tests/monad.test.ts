import { Right } from '../lib/monads/Right';

test('Test Monad - Right identity law', () => {
  const x = Right('test').flatMap(value => Right.of(value))
  const y = Right('test');

  expect(x.fold(_ => _, value => value)).toEqual(y.fold(_ => _, value => value));
});

test('Test Monad - Left identity law', () => {
  const g = (v: string) => Right.of(v.toLocaleUpperCase());
  const x = Right('test').flatMap(g)
  const y = g('test');

  expect(x.fold(_ => _, value => value)).toEqual(y.fold(_ => _, value => value));
});

test('Test Monad - associativity law', () => {
  const g = (v: string) => Right.of(v.toLocaleUpperCase());
  const f = (v: string) => Right(`${v}!`);

  const x = 
    Right('test')
    .flatMap(g)
    .flatMap(f);

  const y = Right('test')
    .flatMap(value => g(value).flatMap(f));

  expect(x.fold(_ => _, value => value)).toEqual(y.fold(_ => _, value => value));
});