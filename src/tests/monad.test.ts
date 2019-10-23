import { Right } from '../lib/monads/Right';
import { IMonad } from '../interfaces/monad';

test('Test Monad - Right identity law', () => {
  const x = Right('test').flatMap(value => Right.of(value))
  const y = Right('test');

  expect(x.fold(_ => _, value => value)).toEqual(y.fold(_ => _, value => value));
});

test('Test Monad - Left identity law', () => {
  const g = (v) => Right(v.toLocaleUpperCase());
  const x = Right('test').flatMap(g)
  const y = g('test');

  expect(x.fold(_ => _, value => value)).toEqual(y.fold(_ => _, value => value));
});

test('Test Monad - associativity law', () => {
  const g = (v: string) => Right.of(v.toLocaleUpperCase());
  const f = (v: string) => Right(v.substr(1));

  const x = 
    Right('test')
    .flatMap(g)
    .flatMap(f);

  const y = Right('test')
    .flatMap(value => g(value).flatMap(f));

  expect(x.fold(_ => _, value => value)).toEqual(y.fold(_ => _, value => value));
});

test('Test Monad - associativity law 2', () => {
  const join = (m) => m.flatMap(x => x);
  const mm = Right(Right(Right('5')));

  const r1 = join(mm.map(join));
  const r2 = join(join(mm));

  expect(r2.fold(_ => _, v => v)).toEqual(r1.fold(_ => _, v => v));
});

test('Test Monad - associativity law 3', () => {
  const join = (m) => m.flatMap(x => x);
  const mm = Right('om');
  const r1 = join(Right.of(mm));
  const r2 = join(mm.map(Right.of));

  expect(r2.fold(_ => _, v => v)).toEqual(r1.fold(_ => _, v => v));
});