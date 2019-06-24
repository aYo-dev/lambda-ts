import { Right } from '../lib/monads/Right';

test('Test Monad', () => {
  const init = Right.of('test');

  expect(init.fold(_ => _, value => value)).toEqual('test');
});