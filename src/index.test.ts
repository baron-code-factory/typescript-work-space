import { main, sub, appName } from '.';

it('main', () => {
  expect(main()).toBe('I am main');
});

it('sub', () => {
  expect(sub()).toEqual({
    foo: 'Foo',
    bar: 'Bar',
    baseName: '',
  });
});

it('appName', () => {
  expect(appName).toBeDefined();
});
