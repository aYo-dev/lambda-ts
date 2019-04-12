import { All } from '../lib/semigroups/All';
import { Any } from '../lib/semigroups/Any';
import { Sum } from '../lib/semigroups/Sum';

test('Test Associativity law with booleans', () => {

  const x = All(true).concat(All(true)).concat(All(false));
  const y = All(true).concat(All(true)).concat(All(true));
  const yThenXAndTrue = y.concat(x.concat(All(true)));
  const yxThenTrue = y.concat(x).concat(All(true));
  const yOrXAndTrue = Any(y.get()).concat(x.concat(All(true)));
  const yxOrTrue = Any(y.concat(x).get()).concat(All(true));

  expect(x.get()).toBeFalsy();
  expect(y.get()).toBeTruthy();
  expect(yThenXAndTrue.get()).toBeFalsy();
  expect(yxThenTrue.get()).toBeFalsy();
  expect(yOrXAndTrue.get()).toBeTruthy();
  expect(yxOrTrue.get()).toBeTruthy();
});

test('Test Associativity law with numbers', () => {

  const x = Sum(1).concat(Sum(2)).concat(Sum(3));
  const y = Sum(1).concat(Sum(2).concat(Sum(3)));

  expect(x.get()).toEqual(6);
  expect(x.get()).toEqual(y.get());
});