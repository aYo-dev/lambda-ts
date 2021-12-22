import { Option } from '../lib/monads/Option';
import { Either } from '../lib/monads/Either';

test('Test Option.getOrElse method with falsy value', () => {
  const init = Option(Either(null));

  expect(init.getOrElse('fallback')).toEqual('fallback');
});

test('Test Option.getOrElse mehod with truly value', () => {
  const value = Either(8)
  .map(v => v.toString())
  .map((v: string) => v.concat(' limbs'))
  
  const init = Option(value);

  expect(init.getOrElse('fallback')).toEqual('8 limbs');
});

test('Test Option.map method', () => {
  const value = Either(8);
  
  const init = Option(value)
  .map((v) => v.map((vv) => vv.toString()))
  .map((v) => v.map((vv: string) => vv.concat(' limbs')));

  expect(init.getOrElse('fallback')).toEqual('8 limbs');
});

test('Test Option.chain method', () => {
  const value = Either(8);
  
  const init = Option(value)
  .chain((v) => Either(v.toString()))
  .chain((v) => Either(v.concat(' limbs')));

  expect(init.getOrElse('fallback')).toEqual('8 limbs');
});

test('Test Option.fold method with falsy value', () => {
  const value = Either(null);
  
  const init = Option(value)
  .fold((v) => Either(v.toString()), 'fallback')

  expect(init).toEqual('fallback');
});

test('Test Option.fold method with truly value', () => {
  const value = Either(8)
  .map(v => v.toString());
  
  const init = Option(value)
  .fold((v: string) => v.concat(' limbs'), 'fallback')

  expect(init).toEqual('8 limbs');
});