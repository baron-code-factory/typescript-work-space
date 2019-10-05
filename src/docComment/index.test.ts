import { double, MyClass, Bar, doSomething, doSomething2, xxx } from 'src/docComment';

it('getFoo', () => {
  const p = 2;
  const out = 4;
  expect(double(p)).toBe(out);
});

it('MyClass', () => {
  expect(MyClass).toBeDefined();
});

it('Bar', () => {
  expect(Bar).toBeDefined();
});

it('doSomething', () => {
  doSomething('', '');
  doSomething(false, '');
  expect(doSomething).toBeDefined();
});

it('doSomething2', () => {
  doSomething2('', '');
  doSomething2(false, '');
  expect(doSomething2).toBeDefined();
});

it('xxx', () => {
  xxx('', '');
  xxx(false, '');
  expect(xxx).toBeDefined();
});
