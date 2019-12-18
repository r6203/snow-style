export type LookupFns<T> = Record<string, (value: T) => string | number>;

export const lookup = <T>(
  property: string,
  value: T,
  lookups: LookupFns<T> | undefined,
) => {
  if (lookups && lookups[property]) {
    const v = lookups[property](value);

    return typeof v !== 'undefined' ? v : value;
  }

  return value;
};
