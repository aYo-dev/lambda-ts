import { Right } from '../lib/Right';

test('Test identity law', () => {
  const init = Right(Date.now());
  const equal = init.map(value => value);
  const notEqual = init.map(value => value * 2);

  expect(init.fold(_ => _, value => value)).toBe(equal.fold(_ => _, value => value));
  expect(init.fold(_ => _, value => value)).not.toBe(notEqual.fold(_ => _, value => value));
});

test('Test composition law', () => {
  const superman = {
    firstName: 'Chuck',
    lastName: 'Norris',
  };

  const fullNameOfPerson = (person: Record<string, string>): string => `${person.firstName} ${person.lastName}`;
  const greetingForName = (name: string) => `Hello, ${name}!`;
  const greetingForPerson = (person: Record<string, string>) => greetingForName(fullNameOfPerson(person));

  const init = Right(superman);

  const x = init.map(fullNameOfPerson).map(greetingForName);
  const y = init.map(greetingForPerson);

  expect(x.fold(_ => _, value => value)).toBe(y.fold(_ => _, value => value));
});