import {spacing} from './spacing';

test('sets spacing', () => {
  expect(spacing({s: 2})).toEqual({
    s: 2,
  });
  expect(spacing({s: 2, t: 4})).toEqual({
    s: 2,
    top: 4,
  });
  expect(spacing({s: 2, r: 4})).toEqual({
    s: 2,
    right: 4,
  });
  expect(spacing({s: 2, b: 4})).toEqual({
    s: 2,
    bottom: 4,
  });
  expect(spacing({s: 2, l: 4})).toEqual({
    s: 2,
    left: 4,
  });

  expect(spacing({s: 2, l: 0})).toEqual({
    s: 2,
    left: 0,
  });
  expect(spacing({s: 2, b: 0})).toEqual({
    s: 2,
    bottom: 0,
  });

  expect(spacing({t: 2})).toEqual({
    top: 2,
  });

  expect(spacing({r: 2})).toEqual({
    right: 2,
  });

  expect(spacing({b: 2})).toEqual({
    bottom: 2,
  });

  expect(spacing({l: 2})).toEqual({
    left: 2,
  });

  expect(spacing({x: 2})).toEqual({
    left: 2,
    right: 2,
  });
  expect(spacing({x: 2, l: 6})).toEqual({
    right: 2,
    left: 6,
  });
  expect(spacing({x: 2, r: 6})).toEqual({
    left: 2,
    right: 6,
  });
  expect(spacing({x: 2, l: 6, r: 6})).toEqual({
    left: 6,
    right: 6,
  });

  expect(spacing({y: 2})).toEqual({
    top: 2,
    bottom: 2,
  });
  expect(spacing({y: 2, t: 6})).toEqual({
    top: 6,
    bottom: 2,
  });
  expect(spacing({y: 2, b: 6})).toEqual({
    top: 2,
    bottom: 6,
  });
  expect(spacing({y: 2, t: 6, b: 6})).toEqual({
    top: 6,
    bottom: 6,
  });
});
