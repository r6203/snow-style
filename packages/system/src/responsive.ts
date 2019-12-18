import merge from 'lodash/merge';

import {Breakpoint, breakpoints, Theme} from '@r6203/theme';
import {LookupFns, lookup} from '@r6203/theme';

export const pseudoClasses = ['active', 'focus', 'hover'] as const;
type PseudoClass = typeof pseudoClasses[number];

type ResponsiveBaseValue<T> = T;
type ResponsiveScreenValue<T> = {[key in Breakpoint]?: T};
type ResponsivePseudoValue<T> = {[key in PseudoClass]?: T};
type ResponsiveDynamicValue<T> = ResponsiveScreenValue<T> &
  ResponsivePseudoValue<T>;
type ResponsiveValue<T> = [ResponsiveBaseValue<T>, ResponsiveDynamicValue<T>?];
export type ResponsiveParam<T> = T | ResponsiveValue<T>;

const mediaQueries = <T>(
  propName: string,
  propValue: ResponsiveScreenValue<T>,
  theme: Theme,
  lookups?: LookupFns<T>,
) =>
  Object.keys(propValue).reduce(
    (queries, breakpoint) => ({
      ...queries,
      [`@media (min-width: ${theme.breakpoints[breakpoint as Breakpoint]})`]: {
        [propName]: lookup(
          propName,
          propValue[breakpoint as Breakpoint]!,
          lookups,
        ),
      },
    }),
    {},
  );

const pseudoPropQueries = <T>(
  propName: string,
  propValue: ResponsivePseudoValue<T>,
  lookups?: LookupFns<T>,
) =>
  Object.keys(propValue).reduce(
    (queries, pseudoClass) => ({
      ...queries,
      [`&:${pseudoClass}`]: {
        [propName]: lookup(propName, (propValue as any)[pseudoClass]!, lookups),
      },
    }),
    {},
  );

export function responsive<T>(
  props: {
    [name: string]: ResponsiveParam<T> | undefined;
  },
  theme: Theme,
  lookups?: LookupFns<T>,
) {
  return Object.keys(props).reduce((propObject, propName) => {
    const propValue = props[propName];

    if (typeof propValue === 'undefined')
      return {...propObject, [propName]: propValue};

    if (!Array.isArray(propValue))
      return {
        ...propObject,
        [propName]: lookup(propName, propValue, lookups),
      };

    if (propValue.length === 1)
      return {
        ...propObject,
        [propName]: lookup(propName, propValue[0], lookups),
      };

    const restParams = propValue[1]!;
    const filterValues = <T>(source: T, values: string[]) =>
      values.reduce(
        (acc, current) => ({
          ...acc,
          [current]: (source as any)[current],
        }),
        {},
      );

    const filterKeys = (
      params: ResponsiveDynamicValue<T>,
      pred: (v: any) => boolean,
    ) => Object.keys(params).filter(k => pred(k));

    const responsiveParams = filterValues(
      restParams,
      filterKeys(restParams, k => breakpoints.includes(k)),
    );

    const pseudoParams = filterValues(
      restParams,
      filterKeys(restParams, k => pseudoClasses.includes(k)),
    );

    const responsiveProps = mediaQueries(
      propName,
      responsiveParams,
      theme,
      lookups,
    );

    const pseudoProps = pseudoPropQueries(propName, pseudoParams, lookups);

    return merge(
      {},
      {
        ...propObject,
        [propName]: lookup(propName, propValue[0], lookups),
      },
      responsiveProps,
      pseudoProps,
    );
  }, {});
}
