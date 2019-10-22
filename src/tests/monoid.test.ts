import { All, Any, Min, Max, Sum, Product } from '../lib/monoids';
import { IMonoid } from '../interfaces/monoid';

test('Test Monoid Sum', () => {
  const list = [1,2,3];
  const sum = list.reduce((acc: IMonoid<number>, x: number) => acc.concat(Sum(x)), Sum())

  expect(sum.get()).toEqual(6);
});

test('Test Monoid Product', () => {
  const list = [1,2,3];
  const result = list.reduce((acc: IMonoid<number>, x: number) => acc.concat(Product(x)), Product())

  expect(result.get()).toEqual(6);
});

test('Test Monoid Min', () => {
  const list = [1,2,3];
  const result = list.reduce((acc: IMonoid<number>, x: number) => acc.concat(Min(x)), Min())

  expect(result.get()).toEqual(1);
});

test('Test Monoid Max', () => {
  const list = [1,2,3];
  const result = list.reduce((acc: IMonoid<number>, x: number) => acc.concat(Max(x)), Max())

  expect(result.get()).toEqual(3);
});


test('Test Monoid All', () => {
  const listFalse = [1 && true,2,false];
  const listTrue = [1 && true,2, 7 > 6];
  const resultFalse = listFalse.reduce((acc: IMonoid<boolean>, x: boolean) => acc.concat(All(x)), All())
  const resultTrue = listTrue.reduce((acc: IMonoid<boolean>, x: boolean) => acc.concat(All(x)), All())

  expect(resultFalse.get()).toEqual(false);
  expect(resultTrue.get()).toEqual(true);
});

test('Test Monoid Any', () => {
  const listFalse = [1 && true,2,false];
  const listTrue = [1 && false,false, 7 < 6];
  const resultTrue = listFalse.reduce((acc: IMonoid<boolean>, x: boolean) => acc.concat(Any(x)), Any())
  const resultFalse = listTrue.reduce((acc: IMonoid<boolean>, x: boolean) => acc.concat(Any(x)), Any())

  expect(resultFalse.get()).toEqual(false);
  expect(resultTrue.get()).toEqual(true);
});