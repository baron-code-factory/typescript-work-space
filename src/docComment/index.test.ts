import { double } from 'src/docComment';

it('getFoo', () => {
  const p = 2;
  const out = 4;
  expect(double(p)).toBe(out);
});
